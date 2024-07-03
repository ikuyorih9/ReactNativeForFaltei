DROP TABLE IF EXISTS Disciplinas CASCADE;
CREATE TABLE Disciplinas (
	id SERIAL PRIMARY KEY,
	sigla TEXT UNIQUE,
	nome TEXT NOT NULL,
	creditos INTEGER NOT NULL CHECK (creditos > 0),
	media REAL CHECK (media >= 0 AND media <= 10),
	qtd_faltas INTEGER CHECK (qtd_faltas >= 0) DEFAULT 0,
	max_faltas INTEGER GENERATED ALWAYS AS (creditos * 2) STORED,
	cor_primaria VARCHAR(6),
	cor_secundaria VARCHAR(6)
);


DROP TABLE IF EXISTS Notas CASCADE;
CREATE TABLE Notas (
	id_disciplina INTEGER NOT NULL,
	sigla_disciplina TEXT,
	nome_atividade TEXT NOT NULL,
	data DATE,
	nota REAL CHECK (nota >= 0 AND nota <= 10),
	peso INTEGER CHECK (peso > 0),
	PRIMARY KEY (id_disciplina, nome_atividade),
	FOREIGN KEY (id_disciplina) REFERENCES Disciplinas(id),
	FOREIGN KEY (sigla_disciplina) REFERENCES Disciplinas(sigla)
);


DROP TABLE IF EXISTS Faltas CASCADE;
CREATE TABLE Faltas (
	id_disciplina INTEGER NOT NULL,
	sigla_disciplina TEXT,
	data DATE,
	PRIMARY KEY (id_disciplina, data),
	FOREIGN KEY (id_disciplina) REFERENCES Disciplinas(id),
	FOREIGN KEY (sigla_disciplina) REFERENCES Disciplinas(sigla)
);

----------------------------- VIEWS -----------------------------

DROP VIEW IF EXISTS View_Media CASCADE;
CREATE OR REPLACE VIEW View_Media AS
	SELECT id_disciplina, SUM(nota * peso) / SUM(peso) AS media
	FROM Notas
	GROUP BY id_disciplina;


DROP VIEW IF EXISTS View_presenca;
CREATE OR REPLACE VIEW View_Presenca AS
	SELECT d.sigla, d.nome, d.creditos, (d.qtd_faltas || '/' || d.max_faltas) AS faltas
	FROM Disciplinas d
	LEFT JOIN Faltas f ON d.id = f.id_disciplina
	GROUP BY d.id;


---------------------------- TRIGGERS ----------------------------

------- MEDIA
CREATE OR REPLACE FUNCTION Func_Media_Disciplina ()
RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'INSERT' OR TG_OP = 'UPDATE') THEN
        UPDATE Disciplinas
        SET media = (
            SELECT SUM(nota * peso) / SUM(peso)
            FROM Notas
            WHERE id_disciplina = NEW.id_disciplina
        )
        WHERE id = NEW.id_disciplina;
    ELSIF (TG_OP = 'DELETE') THEN
        UPDATE Disciplinas
        SET media = (
            SELECT SUM(nota * peso) / SUM(peso)
            FROM Notas
            WHERE id_disciplina = OLD.id_disciplina
        )
        WHERE id = OLD.id_disciplina;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER TGR_Media_Disciplina
AFTER INSERT OR UPDATE OR DELETE ON Notas
FOR EACH ROW
EXECUTE FUNCTION Func_Media_Disciplina ();
------- FIM MEDIA


------- FALTAS
DROP FUNCTION IF EXISTS Func_Faltas_Disciplina CASCADE;
CREATE OR REPLACE FUNCTION Func_Faltas_Disciplina ()
RETURNS TRIGGER AS $$
BEGIN
    -- Preenche sigla_disciplina e nome_disciplina se não forem fornecidos
    IF NEW.sigla_disciplina IS NULL THEN
        SELECT sigla INTO NEW.sigla_disciplina
        FROM Disciplinas
        WHERE id = NEW.id_disciplina;
    END IF;

    -- IF NEW.nome_disciplina IS NULL THEN
    --     SELECT nome INTO NEW.nome_disciplina
    --     FROM Disciplinas
    --     WHERE id = NEW.id_disciplina;
    -- END IF;

    -- Verifica a operação e executa a lógica correspondente
    IF (TG_OP = 'INSERT') THEN
        UPDATE Disciplinas
        SET qtd_faltas = qtd_faltas + 1
        WHERE id = NEW.id_disciplina;

    ELSIF (TG_OP = 'UPDATE') THEN
        RAISE EXCEPTION 'Operação não permitida';

    ELSIF (TG_OP = 'DELETE') THEN
        UPDATE Disciplinas
        SET qtd_faltas = qtd_faltas - 1
        WHERE id = OLD.id_disciplina;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;



CREATE OR REPLACE TRIGGER TGR_Faltas_Disciplina
BEFORE INSERT OR UPDATE OR DELETE ON Faltas
FOR EACH ROW
EXECUTE FUNCTION Func_Faltas_Disciplina ();
------- FIM FALTAS


----------------------------------------------

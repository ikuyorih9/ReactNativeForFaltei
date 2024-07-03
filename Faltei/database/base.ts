import {type SQLiteDatabase} from "expo-sqlite"

export async function database(database: SQLiteDatabase) {
	await database.execAsync(`

		CREATE TABLE IF NOT EXISTS Disciplinas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            sigla TEXT UNIQUE,
            nome TEXT NOT NULL UNIQUE,
            nome_professor TEXT,
            creditos INTEGER NOT NULL CHECK (creditos > 0),
            media REAL CHECK (media >= 0 AND media <= 10),
            qtd_faltas INTEGER CHECK (qtd_faltas >= 0) DEFAULT 0,
            max_faltas INTEGER,
            corprimaria VARCHAR(6),
            corsecundaria VARCHAR(6)
        );


        CREATE TABLE IF NOT EXISTS Notas (
            id_disciplina INTEGER NOT NULL,
            nome_disciplina TEXT UNIQUE,
            nome_atividade TEXT NOT NULL,
            data_atividade DATE,
            nota REAL CHECK (nota >= 0 AND nota <= 10),
            peso INTEGER CHECK (peso > 0),
            PRIMARY KEY (id_disciplina, nome_atividade),
            FOREIGN KEY (id_disciplina) REFERENCES Disciplinas(id)
        );
        

        DROP TABLE IF EXISTS Faltas CASCADE;
        CREATE TABLE Faltas (
            id_disciplina INTEGER NOT NULL,
            nome_disciplina TEXT UNIQUE,
            data_falta DATE,
            PRIMARY KEY (id_disciplina, data_falta),
            FOREIGN KEY (id_disciplina) REFERENCES Disciplinas(id),
            FOREIGN KEY (nome_disciplina) REFERENCES Disciplinas(nome)
        );








        CREATE VIEW IF NOT EXISTS View_Media AS
            SELECT id_disciplina, SUM(nota * peso) / SUM(peso) AS media
            FROM Notas
            GROUP BY id_disciplina;


        CREATE VIEW IF NOT EXISTS View_Presenca AS
            SELECT d.sigla, d.nome, d.creditos, (d.qtd_faltas || '/' || d.max_faltas) AS faltas
            FROM Disciplinas d
            LEFT JOIN Faltas f ON d.id = f.id_disciplina
            GROUP BY d.id;












        CREATE TRIGGER TRG_Media_Disciplina_Insert_Update
        AFTER INSERT OR UPDATE ON Notas
        FOR EACH ROW
        BEGIN
            UPDATE Disciplinas
            SET media = (
                SELECT SUM(nota * peso) / SUM(peso)
                FROM Notas
                WHERE id_disciplina = NEW.id_disciplina
            )
            WHERE id = NEW.id_disciplina;
        END;


        CREATE TRIGGER TRG_Media_Disciplina_Delete
        AFTER DELETE ON Notas
        FOR EACH ROW
        BEGIN
            UPDATE Disciplinas
            SET media = (
                SELECT SUM(nota * peso) / SUM(peso)
                FROM Notas
                WHERE id_disciplina = OLD.id_disciplina
            )
            WHERE id = OLD.id_disciplina;
        END;



        CREATE TRIGGER TRG_Faltas_Disciplina_Insert
        AFTER INSERT ON Faltas
        FOR EACH ROW
        BEGIN
            UPDATE Disciplinas
            SET qtd_faltas = qtd_faltas + 1
            WHERE id = NEW.id_disciplina;
        END;

        
        CREATE TRIGGER TRG_Faltas_Disciplina_Update
        BEFORE UPDATE ON Faltas
        FOR EACH ROW
        BEGIN
            SELECT RAISE(ABORT, 'Operação não permitida');
        END;


        CREATE TRIGGER TRG_Faltas_Disciplina_Delete
        AFTER DELETE ON Faltas
        FOR EACH ROW
        BEGIN
            UPDATE Disciplinas
            SET qtd_faltas = qtd_faltas - 1
            WHERE id = OLD.id_disciplina;
        END;

	`)
}

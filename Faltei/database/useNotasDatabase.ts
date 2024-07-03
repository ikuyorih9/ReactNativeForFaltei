import { useSQLiteContext } from "expo-sqlite"

export type NotasDatabase = {
    id_disciplina: number
    nome_disciplina: string
    nome_atividade: string
    data_atividade: string
    nota: number
    peso: number
}

export function useNotasDatabase () {
    const database = useSQLiteContext()

    async function create (data: NotasDatabase) {
        const statement = await database.prepareAsync(
            "INSERT INTO Notas (id_disciplina, nome_disciplina, nome_atividade, data_atividade, nota, peso) VALUES (${id_disciplina}, ${nome_disciplina}, ${nome_atividade}, ${data_atividade}, ${nota}, ${peso});"
        )
        try {
            const result = await statement.executeAsync({
                $id_disciplina: data.id_disciplina,
                $nome_disciplina: data.nome_disciplina,
                $nome_atividade: data.nome_atividade,
                $data_atividade: data.data_atividade,
                $nota: data.nota,
                $peso: data.peso,
            })

            const insertedRowId = result.lastInsertRowId.toLocaleString()
            return { insertedRowId }
            
        } catch (error) {
            throw error
        } finally {
            await statement.finalizeAsync()
        }
    }

    async function searchByDisciplina (nome_disciplina: string) {
        try {
            const query = "Select * FROM Notas WHERE nome_disciplina LIKE ?"
            const response = await database.getAllAsync<NotasDatabase>(
                query, 
                `%${nome_disciplina}%`
            )
            return response

        } catch (error) {
            throw error
        }
    }

    async function searchBySigla (sigla: string) {
        try {
            const query = "Select * FROM notas WHERE sigla LIKE ?"
            const response = await database.getAllAsync<NotasDatabase>(
                query, 
                `%${sigla}%`
            )
            return response

        } catch (error) {
            throw error
        }
    }

    return { create, searchBySigla, searchByDisciplina }
}
import { useSQLiteContext } from "expo-sqlite"

export type FaltasDatabase = {
    id_disciplina: number
    nome_disciplina: string
    data_falta: string
}

export function useFaltasDatabase () {
    const database = useSQLiteContext()

    async function create (data: FaltasDatabase) {
        const statement = await database.prepareAsync(
            "INSERT INTO Faltas (id_disciplina, nome_disciplina, data_falta) VALUES (${id_disciplina}, ${nome_disciplina}, ${data_falta});"
        )
        try {
            const result = await statement.executeAsync({
                $id_disciplina: data.id_disciplina,
                $nome_disciplina: data.nome_disciplina,
                $data_falta: data.data_falta,
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
            const query = "Select * FROM Faltas WHERE nome_disciplina LIKE ?"
            const response = await database.getAllAsync<FaltasDatabase>(
                query, 
                `%${nome_disciplina}%`
            )
            return response

        } catch (error) {
            throw error
        }
    }

    return { create, searchByDisciplina }
}
import { useSQLiteContext } from "expo-sqlite"

export type DisciplinaDatabase = {
    sigla: string
    nome_disciplina: string
    nome_professor: string
    creditos: number
}

export function useDisciplinaDatabase () {
    const database = useSQLiteContext()

    async function create (data: DisciplinaDatabase) {
        const statement = await database.prepareAsync(
            "INSERT INTO DISCIPLINAS (sigla, nome_disciplina, nome_professor, creditos) VALUES (${sigla}, ${nome_disciplina}, ${nome_professor}, ${creditos});"
        )
        try {
            const result = await statement.executeAsync({
                $sigla: data.sigla,
                $nome_disciplina: data.nome_disciplina,
                $nome_professor: data.nome_professor,
                $creditos: data.creditos
            })

            const insertedRowId = result.lastInsertRowId.toLocaleString()
            return { insertedRowId }
            
        } catch (error) {
            throw error
        } finally {
            await statement.finalizeAsync()
        }
    }

    async function searchBySigla (sigla: string) {
        try {
            const query = "Select * FROM disciplinas WHERE sigla LIKE ?"
            const response = await database.getAllAsync<DisciplinaDatabase>(
                query, 
                `%${sigla}%`
            )
            return response

        } catch (error) {
            throw error
        }
    }

    return { create, searchBySigla }
}
import { type SQLiteDatabase } from 'expo-sqlite'

export async function initializeDatabase(database : SQLiteDatabase) {
    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS disciplinas (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nome TEXT NOT NULL,
          sigla TEXT NOT NULL,
          professor TEXT NOT NULL,
          creditos INTEGER NOT NULL,
          cor_primaria TEXT NOT NULL
          cor_secundaria TEXT NOT NULL
        );
    `)
}
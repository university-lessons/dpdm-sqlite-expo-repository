import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("database.sqlite");

export default db;

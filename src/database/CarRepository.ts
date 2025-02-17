import db from "./SQLiteDatabase";
import Database from "./SQLiteDatabase";

export type Car = {
  id?: number;
  brand: string;
  model: string;
  hp: number;
};

export default class CarRepository {
  constructor() {
    this.up();
  }

  public async up() {
    await db.runAsync(
      "CREATE TABLE IF NOT EXISTS cars (id INTEGER PRIMARY KEY AUTOINCREMENT, brand TEXT, model TEXT, hp INT);"
    );
  }

  public async down() {
    await db.runAsync("DROP TABLE cars;");
  }

  public async create(car: Car) {
    const result = await db.runAsync(
      "INSERT INTO cars (brand, model, hp) values (?, ?, ?);",
      [car.brand, car.model, car.hp]
    );
    return result.lastInsertRowId;
  }

  public async all() {
    const result = await db.getAllAsync<Car>("SELECT * FROM cars");
    return result;
  }
}

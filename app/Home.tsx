import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import CarRepository, { Car } from "../src/database/CarRepository";

const repository = new CarRepository();

export default function Home() {
  const [cars, setCars] = useState<Car[]>([]);

  const create = async () => {
    const id = await repository.create({
      brand: "VW",
      model: "Fusca",
      hp: Math.floor(Math.random() * 100),
    });
    console.log("Created: ", id);

    await all();
  };

  const all = async () => {
    const cars = await repository.all();
    setCars(cars);

    console.log(cars);
  };

  return (
    <View>
      <Button onPress={create} title="create" />
      <Button onPress={all} title="all" />

      {cars.map((car) => (
        <View key={car.id}>
          <Text>{car.id} - </Text>
          <Text>
            {car.brand} {car.model} {car.hp}
          </Text>
        </View>
      ))}
    </View>
  );
}

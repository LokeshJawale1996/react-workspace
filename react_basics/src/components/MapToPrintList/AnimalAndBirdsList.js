import React from "react";

const animals = ["tiger", "lion", "elephant", "monkey"];
const birds = ["peacock", "crow", "parrot"];

const animalsList = animals.map((animal) => {
  return <h2>{animal}</h2>;
});

const birdsList = birds.map((bird) => {
  return <h2>{bird}</h2>;
});

function AnimalAndBirdsList() {
  return (
    <div>
      <h1>List Of Animals</h1>
      <div>{animalsList}</div>
      <h1>List Of Birds</h1>
      <div>{birdsList}</div>
    </div>
  );
}

export default AnimalAndBirdsList;

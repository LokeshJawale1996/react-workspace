import React, { useState } from "react";
import { employee } from "./data";
function UseStateArray() {
  const [person, setPerson] = React.useState(employee);
  const removeItem = (id) => {
    const newPerson = person.filter((person) => person.id !== id);
    setPerson(newPerson);
  };

  return (
    <>
      {/*  1) when we prints data from array we have to map the array data using
      map function like below 2)and when we return data from map function we
      have to mention key in return tag */}
      {person.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h1>{name}</h1>
            <button className="btn" onClick={() => removeItem(id)}>
              remove item
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPerson([])}>
        clear items
      </button>
    </>
  );
}

export default UseStateArray;

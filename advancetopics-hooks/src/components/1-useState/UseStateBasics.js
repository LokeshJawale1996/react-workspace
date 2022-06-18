import React, { useState } from "react";

function UseStateBasics() {
  const [name, setName] = useState("loki");
  const changeName = () => {
    if (name === "loki") {
      setName("rocky");
    } else {
      setName("loki");
    }
  };
  return (
    <div>
      <h1>my name is {name}</h1>
      {/* <button type="button" className="btn" onClick={() => setName("rocky")}> */}
      <button type="button" className="btn" onClick={changeName}>
        change name
      </button>
    </div>
  );
}

export default UseStateBasics;

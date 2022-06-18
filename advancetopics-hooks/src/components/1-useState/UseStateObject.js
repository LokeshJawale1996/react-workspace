import React, { useState } from "react";

function UseStateObject() {
  const [student, setStudent] = useState({
    name: "lokesh",
    standard: "FY MBA",
    age: 25,
  });
  //we are using spread operator to stay other data as it is and only we are updating require data
  const changeStd = () => {
    setStudent({ ...student, standard: "SY MBA" });
  };
  return (
    <>
      <h3>{student.name}</h3>
      <h3>{student.standard}</h3>
      <h3>{student.age}</h3>
      <button className="btn" onClick={() => changeStd()}>
        changeStandard
      </button>
    </>
  );
}

export default UseStateObject;

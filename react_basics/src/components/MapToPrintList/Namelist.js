import React from "react";

const names = ["Vicky", "Sunny", "Danny", "John", "Smiga"];
const list = names.map((name) => {
  return <h2>{name}</h2>;
});
function Namelist() {
  return (
    <div>
      <h1>List Of names</h1>
      <div>{list}</div>
    </div>
  );
}

export default Namelist;

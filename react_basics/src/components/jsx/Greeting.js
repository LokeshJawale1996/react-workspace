import React from "react";

function formateName(user) {
  return user.firstName + " " + user.lastName;
}
const user = {
  firstName: "Lokesh",
  lastName: "Jawale",
};
function Greeting() {
  return (
    <div>
      <h2>Hello, {formateName(user)}</h2>
    </div>
  );
}

export default Greeting;

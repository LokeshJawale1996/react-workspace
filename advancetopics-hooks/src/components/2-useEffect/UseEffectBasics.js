import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
//1.we have to import it to use
//2.if we call it at once then we need to pass second parameter as empty array
//3.if we have to call it at every render don't pass second parameter otherwise pass not empty array as second parameter

function UseEffectBasics() {
  const [value, setValue] = useState(0);
  // useEffect(() => {
  //   console.log("call useEffect");
  // }, []);
  useEffect(() => {
    console.log("call useEffect");

    if (value > 1) {
      document.title = `Message is ${value}`;
    }
  });
  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={() => setValue(value + 1)}>
        Change Value
      </button>
    </>
  );
}

export default UseEffectBasics;

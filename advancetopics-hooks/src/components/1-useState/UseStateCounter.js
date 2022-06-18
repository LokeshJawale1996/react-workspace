import React, { useState } from "react";

function UseStateCounter() {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };
  return (
    <div>
      <section style={{ margin: "4rem 0" }}>
        <h1>regular counter</h1>
        <h2>{value}</h2>
        <button
          type="button"
          className="btn"
          onClick={() => setValue(value - 1)}
        >
          decrease
        </button>
        <button type="button" className="btn" onClick={reset}>
          reset
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setValue(value + 1)}
        >
          increase
        </button>
      </section>
    </div>
  );
}

export default UseStateCounter;

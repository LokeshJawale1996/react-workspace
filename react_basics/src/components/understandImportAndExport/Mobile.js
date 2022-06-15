import React from "react";
const Mobile = (props) => {
  const { img, MobileName, Brand, Memory } = props;
  return (
    <section className="mobile">
      <img src={img}></img>
      <h2>{MobileName}</h2>
      <h3>{Brand}</h3>
      <h4>{Memory}</h4>
    </section>
  );
};

export default Mobile;

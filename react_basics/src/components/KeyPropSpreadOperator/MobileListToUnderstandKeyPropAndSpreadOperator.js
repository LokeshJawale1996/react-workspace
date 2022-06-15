import React from "react";

const mobiles = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/810Rscvmd4L._SX522_.jpg",
    MobileName: "Samsung Galaxy M53 5G",
    Brand: "Samsung",
    Memory: "128 GB",
  },

  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/61n8C9LgI2L._SX522_.jpg",
    MobileName: "Vivo Y53s",
    Brand: "Vivo",
    Memory: "128 GB",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/71AvQd3VzqL._SX522_.jpg",
    MobileName: "OnePlus Nord CE 2 Lite 5G",
    Brand: "Oneplus",
    Memory: "128 GB",
  },
];
function MobileListToUnderstandKeyPropAndSpreadOperator() {
  return (
    <section className="mobilelist">
      {mobiles.map((mobile) => {
        return <Mobile key={mobile.id} {...mobile}></Mobile>;
      })}
    </section>
  );
}
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

export default MobileListToUnderstandKeyPropAndSpreadOperator;

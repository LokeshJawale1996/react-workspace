import React from "react";

const firstMobile = {
  img: "https://m.media-amazon.com/images/I/810Rscvmd4L._SX522_.jpg",
  MobileName: "Samsung Galaxy M53 5G",
  Brand: "Samsung",
  Memory: "128 GB",
};

const secondMobile = {
  img: "https://m.media-amazon.com/images/I/810Rscvmd4L._SX522_.jpg",
  MobileName: "Samsung Galaxy M53 5G",
  Brand: "Samsung",
  Memory: "256 GB",
};

function MobileListPropsExample() {
  return (
    <div>
      <h1>Props Demo</h1>

      <Mobile
        img={firstMobile.img}
        MobileName={firstMobile.MobileName}
        Brand={firstMobile.Brand}
        Memory={firstMobile.Memory}
      ></Mobile>
      <Mobile
        img={secondMobile.img}
        MobileName={secondMobile.MobileName}
        Brand={secondMobile.Brand}
        Memory={secondMobile.Memory}
      ></Mobile>
    </div>
  );
}

const Mobile = (props) => {
  return (
    <section>
      <img src={props.img}></img>
      <h2>{props.MobileName}</h2>
      <h3>{props.Brand}</h3>
      <h4>{props.Memory}</h4>
    </section>
  );
};

export default MobileListPropsExample;

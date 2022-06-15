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

function MobileListPropsDestructing() {
  return (
    <div>
      <h1>Props Destructing Demo</h1>

      <Mobile
        img={firstMobile.img}
        MobileName={firstMobile.MobileName}
        Brand={firstMobile.Brand}
        Memory={firstMobile.Memory}
      >
        <p>
          orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
      </Mobile>
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
  const { img, MobileName, Brand, Memory } = props;
  return (
    <section>
      <img src={img}></img>
      <h2>{MobileName}</h2>
      <h3>{Brand}</h3>
      <h4>{Memory}</h4>
      <p>{props.children}</p>
    </section>
  );
};

export default MobileListPropsDestructing;

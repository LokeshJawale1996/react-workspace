import React from "react";
import ReactDOM from "react-dom";

import Mobile from "./Mobile";

import { mobiles } from "./mobiles";
function MobileListFinal() {
  return (
    <section className="mobilelist">
      <h1>Import And Export</h1>
      {mobiles.map((mobile) => {
        return <Mobile key={mobile.id} {...mobile}></Mobile>;
      })}
    </section>
  );
}

export default MobileListFinal;

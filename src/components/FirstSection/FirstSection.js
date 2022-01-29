import React from "react";

import "./FirstSection.styles.css";

import PriceEvolution from "components/PriceEvolution";
import PresenceShareByProduct from "components/PresenceShareByProduct";

const FirstSection = () => {
  return (
    <section className="FirstSection">
      <PriceEvolution />
      <PresenceShareByProduct />
    </section>
  );
};

export default FirstSection;

import React from "react";

import Subtitle from "components/Subtitle/Subtitle";
import PriceEvolution from "components/PriceEvolution/PriceEvolution";

import { firstSectionStyles } from "./FirstSection.styles";

const FirstSection = () => {
  return (
    <section style={firstSectionStyles}>
      <PriceEvolution />
      <div>
        <Subtitle
          id="presence-share-by-product"
          subtitle="Presence Share by Product"
        />
      </div>
    </section>
  );
};

export default FirstSection;

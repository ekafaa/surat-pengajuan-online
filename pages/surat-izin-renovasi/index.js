import React from "react";
import Aux from "../../app/components/_Aux";
import NavbarLayout from "../../app/components/NavbarLayout";
import "../../styles/styles.scss";
import Renovation from "../../app/components/Letter/renovation";

function SuratIzinRenovasi() {
  return (
    <Aux>
      <NavbarLayout />
      <Renovation />
    </Aux>
  );
}

export default SuratIzinRenovasi;

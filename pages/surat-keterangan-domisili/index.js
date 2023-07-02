import React from "react";
import Aux from "../../app/components/_Aux";
import NavbarLayout from "../../app/components/NavbarLayout";
import "../../styles/styles.scss";
import Domicile from "../../app/components/Letter/domicile";

function SuratDomisili() {
  return (
    <Aux>
      <NavbarLayout />
      <Domicile />
    </Aux>
  );
}

export default SuratDomisili;

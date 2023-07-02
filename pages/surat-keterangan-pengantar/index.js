import React from "react";
import Aux from "../../app/components/_Aux";
import NavbarLayout from "../../app/components/NavbarLayout";
import "../../styles/styles.scss";
import Introductory from "../../app/components/Letter/introductory";

function SuratPengantar() {
  return (
    <Aux>
      <NavbarLayout />
      <Introductory />
    </Aux>
  );
}

export default SuratPengantar;

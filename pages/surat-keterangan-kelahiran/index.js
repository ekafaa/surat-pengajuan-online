import React from "react";
import Aux from "../../app/components/_Aux";
import NavbarLayout from "../../app/components/NavbarLayout";
import "../../styles/styles.scss";
import Birth from "../../app/components/Letter/birth";

function SuratKelahiran() {
  return (
    <Aux>
      <NavbarLayout />
      <Birth />
    </Aux>
  );
}

export default SuratKelahiran;

import React from "react";
import Aux from "../../components/_Aux";
import NavbarLayout from "../../components/NavbarLayout";
import DomicileList from "../../components/Letter/table/domicile";
import withAuth from "../../hoc/withAuth";

function SuratDomisili() {
  return (
    <Aux>
      <NavbarLayout />
      <DomicileList />
    </Aux>
  );
}

export default withAuth(SuratDomisili);

import React from "react";
import Aux from "../../../components/_Aux";
import NavbarLayout from "../../../components/NavbarLayout";
import DomicileAdd from "../../../components/Letter/form/add/domicile";
import withAuth from "../../../hoc/withAuth";

function AddSuratKeteranganDomimsili() {
  return (
    <Aux>
      <NavbarLayout />
      <DomicileAdd />
    </Aux>
  );
}

export default withAuth(AddSuratKeteranganDomimsili);

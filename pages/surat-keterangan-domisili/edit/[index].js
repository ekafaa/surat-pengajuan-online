import React from "react";
import Aux from "../../../components/_Aux";
import NavbarLayout from "../../../components/NavbarLayout";
import DomicileEdit from "../../../components/Letter/form/edit/domicile";
import withAuth from "../../../hoc/withAuth";

function EditSuratKeteranganDomimsili() {
  return (
    <Aux>
      <NavbarLayout />
      <DomicileEdit />
    </Aux>
  );
}

export default withAuth(EditSuratKeteranganDomimsili);

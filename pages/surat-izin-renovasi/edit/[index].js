import React from "react";
import Aux from "../../../components/_Aux";
import NavbarLayout from "../../../components/NavbarLayout";
import RenovationEdit from "../../../components/Letter/form/edit/renovation";
import withAuth from "../../../hoc/withAuth";

function EditSuratIzinRenovasi() {
  return (
    <Aux>
      <NavbarLayout />
      <RenovationEdit />
    </Aux>
  );
}

export default withAuth(EditSuratIzinRenovasi);

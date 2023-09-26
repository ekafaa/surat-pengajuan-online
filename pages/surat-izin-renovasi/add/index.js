import React from "react";
import Aux from "../../../components/_Aux";
import NavbarLayout from "../../../components/NavbarLayout";
import RenovationAdd from "../../../components/Letter/form/add/renovation";
import withAuth from "../../../hoc/withAuth";

function AddSuratIzinRenovasi() {
  return (
    <Aux>
      <NavbarLayout />
      <RenovationAdd />
    </Aux>
  );
}

export default withAuth(AddSuratIzinRenovasi);

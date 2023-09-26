import React from "react";
import Aux from "../../../components/_Aux";
import NavbarLayout from "../../../components/NavbarLayout";
import EventAdd from "../../../components/Letter/form/add/event";
import withAuth from "../../../hoc/withAuth";

function AddSuratIzinAcara() {
  return (
    <Aux>
      <NavbarLayout />
      <EventAdd />
    </Aux>
  );
}

export default withAuth(AddSuratIzinAcara);

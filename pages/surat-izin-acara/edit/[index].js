import React from "react";
import Aux from "../../../components/_Aux";
import NavbarLayout from "../../../components/NavbarLayout";
import EventEdit from "../../../components/Letter/form/edit/event";
import withAuth from "../../../hoc/withAuth";

function EditSuratIzinAcara() {
  return (
    <Aux>
      <NavbarLayout />
      <EventEdit />
    </Aux>
  );
}

export default withAuth(EditSuratIzinAcara);

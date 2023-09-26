import React from "react";
import Aux from "../../components/_Aux";
import NavbarLayout from "../../components/NavbarLayout";
import EventList from "../../components/Letter/table/event";
import withAuth from "../../hoc/withAuth";

function SuratIzinAcara() {
  return (
    <Aux>
      <NavbarLayout />
      <EventList />
    </Aux>
  );
}

export default withAuth(SuratIzinAcara);

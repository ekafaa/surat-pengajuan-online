import React from "react";
import Aux from "../../components/_Aux";
import NavbarLayout from "../../components/NavbarLayout";
import RenovationList from "../../components/Letter/table/renovation";
import withAuth from "../../hoc/withAuth";

function SuratIzinRenovasi() {
  return (
    <Aux>
      <NavbarLayout />
      <RenovationList />
    </Aux>
  );
}

export default withAuth(SuratIzinRenovasi);

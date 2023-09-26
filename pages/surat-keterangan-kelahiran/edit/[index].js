import React from "react";
import Aux from "../../../components/_Aux";
import NavbarLayout from "../../../components/NavbarLayout";
import BirthEdit from "../../../components/Letter/form/edit/birth";
import withAuth from "../../../hoc/withAuth";

function SuratKeteranganKelahiran() {
  return (
    <Aux>
      <NavbarLayout />
      <BirthEdit />
    </Aux>
  );
}

export default withAuth(SuratKeteranganKelahiran);

import React from "react";
import Aux from "../../../components/_Aux";
import NavbarLayout from "../../../components/NavbarLayout";
import BirthAdd from "../../../components/Letter/form/add/birth";
import withAuth from "../../../hoc/withAuth";

function AddSuratKeteranganKelahiran() {
  return (
    <Aux>
      <NavbarLayout />
      <BirthAdd />
    </Aux>
  );
}

export default withAuth(AddSuratKeteranganKelahiran);

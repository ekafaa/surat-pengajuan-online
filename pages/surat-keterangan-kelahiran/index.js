import React from "react";
import Aux from "../../components/_Aux";
import NavbarLayout from "../../components/NavbarLayout";
import BirthList from "../../components/Letter/table/birth";
import withAuth from "../../hoc/withAuth";

function SuratKeteranganKelahiran() {
  return (
    <Aux>
      <NavbarLayout />
      <BirthList />
    </Aux>
  );
}

export default withAuth(SuratKeteranganKelahiran);

import React from "react";
import Aux from "../../components/_Aux";
import NavbarLayout from "../../components/NavbarLayout";
import IntroductoryList from "../../components/Letter/table/introductory";
import withAuth from "../../hoc/withAuth";

function SuratKeteranganPengantar() {
  return (
    <Aux>
      <NavbarLayout />
      <IntroductoryList />
    </Aux>
  );
}

export default withAuth(SuratKeteranganPengantar);

import React from "react";
import Aux from "../../../components/_Aux";
import NavbarLayout from "../../../components/NavbarLayout";
import IntroductoryAdd from "../../../components/Letter/form/add/introductory";
import withAuth from "../../../hoc/withAuth";

function AddSuratKeteranganPengantar() {
  return (
    <Aux>
      <NavbarLayout />
      <IntroductoryAdd />
    </Aux>
  );
}

export default withAuth(AddSuratKeteranganPengantar);

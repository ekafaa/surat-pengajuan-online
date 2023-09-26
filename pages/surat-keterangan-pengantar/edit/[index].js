import React from "react";
import Aux from "../../../components/_Aux";
import NavbarLayout from "../../../components/NavbarLayout";
import IntroductoryEdit from "../../../components/Letter/form/edit/introductory";
import withAuth from "../../../hoc/withAuth";

function EditSuratKeteranganPengantar() {
  return (
    <Aux>
      <NavbarLayout />
      <IntroductoryEdit />
    </Aux>
  );
}

export default withAuth(EditSuratKeteranganPengantar);

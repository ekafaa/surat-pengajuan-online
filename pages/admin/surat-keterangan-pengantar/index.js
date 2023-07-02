import React from "react";
import Aux from "../../../components/_Aux";
import AdminIntroductoryComp from "../../../components/Admin/Letter/introductory";
import NavbarLayout from "../../../components/NavbarLayout";

function AdminIntroductory() {
  return (
    <Aux>
      <NavbarLayout />
      <AdminIntroductoryComp />
    </Aux>
  );
}

export default AdminIntroductory;

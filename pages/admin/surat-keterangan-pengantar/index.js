import React from "react";
import Aux from "../../../app/components/_Aux";
import AdminIntroductoryComp from "../../../app/components/Admin/Letter/introductory";
import NavbarLayout from "../../../app/components/NavbarLayout";
import "../../../styles/styles.scss";
function AdminIntroductory() {
  return (
    <Aux>
      <NavbarLayout />
      <AdminIntroductoryComp />
    </Aux>
  );
}

export default AdminIntroductory;

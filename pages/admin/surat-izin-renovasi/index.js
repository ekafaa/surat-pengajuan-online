import React from "react";
import Aux from "../../../app/components/_Aux";
import AdminRenovComp from "../../../app/components/Admin/Letter/renovation";
import NavbarLayout from "../../../app/components/NavbarLayout";
import "../../../styles/styles.scss";
function AdminRenov() {
  return (
    <Aux>
      <NavbarLayout />
      <AdminRenovComp />
    </Aux>
  );
}

export default AdminRenov;

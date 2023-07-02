import React from "react";
import Aux from "../../../app/components/_Aux";
import AdminDomicileComp from "../../../app/components/Admin/Letter/domicile";
import NavbarLayout from "../../../app/components/NavbarLayout";
import "../../../styles/styles.scss";
function AdminDomicile() {
  return (
    <Aux>
      <NavbarLayout />
      <AdminDomicileComp />
    </Aux>
  );
}

export default AdminDomicile;

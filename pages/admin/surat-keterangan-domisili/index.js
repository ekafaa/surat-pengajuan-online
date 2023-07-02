import React from "react";
import Aux from "../../../components/_Aux";
import AdminDomicileComp from "../../../components/Admin/Letter/domicile";
import NavbarLayout from "../../../components/NavbarLayout";

function AdminDomicile() {
  return (
    <Aux>
      <NavbarLayout />
      <AdminDomicileComp />
    </Aux>
  );
}

export default AdminDomicile;

import React from "react";
import Aux from "../../../components/_Aux";
import AdminDomicileComp from "../../../components/Admin/Letter/domicile";
import NavbarLayout from "../../../components/NavbarLayout";
import withAuth from "../../../hoc/withAuth";
function AdminDomicile() {
  return (
    <Aux>
      <NavbarLayout />
      <AdminDomicileComp />
    </Aux>
  );
}

export default withAuth(AdminDomicile);

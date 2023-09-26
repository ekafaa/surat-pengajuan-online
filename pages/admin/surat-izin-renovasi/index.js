import React from "react";
import Aux from "../../../components/_Aux";
import AdminRenovComp from "../../../components/Admin/Letter/renovation";
import NavbarLayout from "../../../components/NavbarLayout";
import withAuth from "../../../hoc/withAuth";
function AdminRenov() {
  return (
    <Aux>
      <NavbarLayout />
      <AdminRenovComp />
    </Aux>
  );
}

export default withAuth(AdminRenov);

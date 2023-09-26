import React from "react";
import Aux from "../../../components/_Aux";
import AdminBirthComp from "../../../components/Admin/Letter/birth";
import NavbarLayout from "../../../components/NavbarLayout";
import withAuth from "../../../hoc/withAuth";
function AdminBirth() {
  return (
    <Aux>
      <NavbarLayout />
      <AdminBirthComp />
    </Aux>
  );
}

export default withAuth(AdminBirth);

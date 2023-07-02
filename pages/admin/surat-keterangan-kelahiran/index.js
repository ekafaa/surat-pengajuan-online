import React from "react";
import Aux from "../../../app/components/_Aux";
import AdminBirthComp from "../../../app/components/Admin/Letter/birth";
import NavbarLayout from "../../../app/components/NavbarLayout";
import "../../../styles/styles.scss";
function AdminBirth() {
  return (
    <Aux>
      <NavbarLayout />
      <AdminBirthComp />
    </Aux>
  );
}

export default AdminBirth;

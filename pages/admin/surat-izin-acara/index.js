import React from "react";
import Aux from "../../../components/_Aux";
import AdminEventComp from "../../../components/Admin/Letter/event";
import NavbarLayout from "../../../components/NavbarLayout";
import withAuth from "../../../hoc/withAuth";
function AdminEvent() {
  return (
    <Aux>
      <NavbarLayout />
      <AdminEventComp />
    </Aux>
  );
}

export default withAuth(AdminEvent);

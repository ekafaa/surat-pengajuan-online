import React from "react";
import Aux from "../../../app/components/_Aux";
import AdminEventComp from "../../../app/components/Admin/Letter/event";
import NavbarLayout from "../../../app/components/NavbarLayout";
import "../../../styles/styles.scss";
function AdminEvent() {
  return (
    <Aux>
      <NavbarLayout />
      <AdminEventComp />
    </Aux>
  );
}

export default AdminEvent;

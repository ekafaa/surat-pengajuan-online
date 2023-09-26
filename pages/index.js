"use client";
import Dasboard from "../components/Dashboard";
import NavbarLayout from "../components/NavbarLayout";
import withAuth from "../hoc/withAuth";

function index() {
  return (
    <main>
      <NavbarLayout />
      <Dasboard />
    </main>
  );
}

export default withAuth(index);

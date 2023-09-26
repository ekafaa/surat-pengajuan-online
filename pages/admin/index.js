"use client";
import AdminDasboard from "../../components/Admin/AdminDashboard";
import NavbarLayout from "../../components/NavbarLayout";
import withAuth from "../../hoc/withAuth";

function Admin() {
  return (
    <main>
      <NavbarLayout />
      <AdminDasboard />
    </main>
  );
}

export default withAuth(Admin);

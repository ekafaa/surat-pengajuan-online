"use client";
import AdminDasboard from "../../app/components/Admin/AdminDashboard";
import NavbarLayout from "../../app/components/NavbarLayout";
import "../../styles/styles.scss";
export default function Home() {
  return (
    <main>
      <NavbarLayout />
      <AdminDasboard />
    </main>
  );
}

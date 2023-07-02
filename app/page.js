"use client";
import Dasboard from "./components/Dashboard";
import NavbarLayout from "./components/NavbarLayout";
import "../styles/styles.scss";
export default function Home() {
  return (
    <main>
      <NavbarLayout />
      <Dasboard />
    </main>
  );
}

// "use client";
// import { createContext } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pengajuan Surat Kepentingan | Taman Athena",
  description: "Website Pengajuan Surat Kepentingan untuk RT/RW Taman Athena",
};

// const Context = createContext();

export default function RootLayout({ children }) {
  return (
    // <Context.Provider>
    <html>
      <body className={inter.className}>{children}</body>
    </html>
    // </Context.Provider>
  );
}

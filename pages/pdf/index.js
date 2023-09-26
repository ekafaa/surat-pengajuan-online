import React from "react";
import Link from "next/link";

function Pdf() {
  return (
    <div>
      <Link href="/file/SuratDomisiliEka.pdf">
        <a target="_blank">Open PDF</a>
      </Link>
    </div>
  );
}

export default Pdf;

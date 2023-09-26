import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import ButtonTable from "../../../ButtonTable";
import { useRouter } from "next/router";
import { API_URL, ROUTES } from "../../../../utils/constant";
import { getJwtToken } from "../../../../utils/utilization";
import Swal from "sweetalert2";
import Link from "next/link";
import PDFGeneratorDomicile from "../../../../utils/pdf/domicile";

function DomicileComp() {
  const router = useRouter();
  const [listDomisili, setListDomisili] = useState([]);
  const [isDeleted, setIsDeleted] = useState([]);

  useEffect(async () => {
    if (getJwtToken()) {
      try {
        const response = await fetch(`${API_URL}/surat?jenis=domisili`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${getJwtToken()}`,
          },
        });
        const result = await response.json();
        setListDomisili(result);
      } catch (error) {
        console.error(error);
      }
    }
  }, [setListDomisili, isDeleted]);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Data Akan Dihapus",
      text: "Apakah Anda Yakin Untuk Hapus Data ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            `${API_URL}/surat/${id}?jenis=domisili`,
            {
              method: "DELETE",
              headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${getJwtToken()}`,
              },
            }
          );
          const result = await response.json();
          setIsDeleted(result);
          if (response.status !== 200) {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: result.message,
              timer: 1500,
              showConfirmButton: false,
            });
          } else if (response.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Berhasil Menghapus Data",
              text: "Anda Berhasil Surat Domisili",
            });
          }
        } catch (error) {
          console.error(error);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Dibatalkan", "Data Anda Tidak Jadi dihapus", "error");
      }
    });
  };

  const handleViewPdf = () => {};

  return (
    <Container>
      <ButtonTable
        className="tbl-green mt-4 text-center"
        style={{ width: "10%" }}
        onClick={() => router.push(ROUTES.USER_DOMISILI_ADD())}
      >
        Tambah
      </ButtonTable>
      <h3 className="mt-4">Surat Keterangan Domisili</h3>
      <Table responsive className="mt-4">
        <thead className="text-center">
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>TTL</th>
            <th>Jenis Kelamin</th>
            <th>Pekerjaan</th>
            <th>Agama</th>
            <th>Status</th>
            <th>Kewarganegaraan</th>
            <th>Alamat</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {listDomisili?.length === 0 ? (
            <tr>
              <td colSpan="10">No data available</td>
            </tr>
          ) : (
            listDomisili &&
            listDomisili.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item?.name}</td>
                <td>{item?.birthplace}</td>
                <td>{item?.gender}</td>
                <td>{item?.job}</td>
                <td>{item?.religion}</td>
                <td>{item?.status.replace(/_/g, ' ')}</td>
                <td>{item?.country}</td>
                <td>{item?.address}</td>
                <td className="d-flex justify-content-evenly">
                  <ButtonTable
                    onClick={() =>
                      router.push({
                        pathname: ROUTES.USER_DOMISILI_EDIT(item?._id),
                        query: { id: item?._id },
                      })
                    }
                  >
                    Edit
                  </ButtonTable>
                  <ButtonTable
                    className="tbl-red m-l-15 d-flex justify-content-center"
                    onClick={() => handleDelete(item?._id)}
                  >
                    Delete
                  </ButtonTable>
                  <ButtonTable
                    className="tbl-blue m-l-15 d-flex justify-content-center"
                    onClick={() => PDFGeneratorDomicile(item)}
                  >
                    View
                  </ButtonTable>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
      <ButtonTable
        className="tbl-grey mt-4 text-center"
        style={{ width: "10%" }}
        onClick={() => router.push(ROUTES.USER_DASHBOARD())}
      >
        Back
      </ButtonTable>
    </Container>
  );
}

export default DomicileComp;

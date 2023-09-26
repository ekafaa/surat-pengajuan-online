import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import data from "./data.json";
import ButtonTable from "../../../ButtonTable";
import { useRouter } from "next/router";
import { API_URL, ROUTES } from "../../../../utils/constant";
import { getJwtToken } from "../../../../utils/utilization";
import Link from "next/link";
import Swal from "sweetalert2";
import PDFGeneratorIntroductory from "../../../../utils/pdf/introductory";

function IntroductoryComp() {
  const router = useRouter();
  const [listPengantar, setListPengantar] = useState([]);
  const [isDeleted, setIsDeleted] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch(`${API_URL}/surat?jenis=pengantar`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${getJwtToken()}`,
        },
      });
      const result = await response.json();
      setListPengantar(result);
    } catch (error) {
      console.error(error);
    }
  }, [setListPengantar, isDeleted]);

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
            `${API_URL}/surat/${id}?jenis=pengantar`,
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
              text: "Anda Berhasil Surat Pengantar",
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
      <h3 className="mt-4">Surat Keterangan Pengantar</h3>
      <ButtonTable
        className="tbl-green mt-4 text-center"
        style={{ width: "10%" }}
        onClick={() => router.push(ROUTES.USER_PENGANTAR_ADD())}
      >
        Tambah
      </ButtonTable>
      <Table responsive className="mt-4">
        <thead className="text-center">
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Nik</th>
            <th>TTL</th>
            <th>Pekerjaan</th>
            <th>Agama</th>
            <th>Status</th>
            <th>Kewarganegaraan</th>
            <th>Alamat</th>
            <th>Laporan</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {listPengantar?.length === 0 ? (
            <tr>
              <td colSpan="11">No data available</td>
            </tr>
          ) : (
            listPengantar?.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item?.name}</td>
                <td>{item?.nik}</td>
                <td>{item?.birthplace}</td>
                <td>{item?.job}</td>
                <td>{item?.religion}</td>
                <td>{item?.status.replace(/_/g, ' ')}</td>
                <td>{item?.country}</td>
                <td>{item?.address}</td>
                <td>{item?.report}</td>
                <td className="d-flex justify-content-evenly">
                  <ButtonTable
                    className="d-flex justify-content-center"
                    onClick={() =>
                      router.push({
                        pathname: ROUTES.USER_PENGANTAR_EDIT(item?._id),
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
                      className="tbl-blue m-l-15  d-flex justify-content-center"
                      onClick={() => PDFGeneratorIntroductory(item)}
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

export default IntroductoryComp;

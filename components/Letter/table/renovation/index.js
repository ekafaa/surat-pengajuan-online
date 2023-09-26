import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import data from "./data.json";
import ButtonTable from "../../../ButtonTable";
import { useRouter } from "next/router";
import { API_URL, ROUTES } from "../../../../utils/constant";
import { getJwtToken } from "../../../../utils/utilization";
import Link from "next/link";
import Swal from "sweetalert2";
import PDFGeneratorRenovation from "../../../../utils/pdf/renovation";

function RenovComp() {
  const router = useRouter();
  const [listRenovasi, setListRenovasi] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch(`${API_URL}/surat?jenis=renovasi`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${getJwtToken()}`,
        },
      });
      const result = await response.json();
      setListRenovasi(result);
    } catch (error) {
      console.error(error);
    }
  }, []);

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
            `${API_URL}/surat/${id}?jenis=renovasi`,
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
              text: "Anda Berhasil Surat Renovasi",
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

  const handleViewPdf = () => { };
  return (
    <Container>
      <h3 className="mt-4">Surat Izin Renovasi</h3>
      <ButtonTable
        className="tbl-green mt-4 text-center"
        style={{ width: "10%" }}
        onClick={() => router.push(ROUTES.USER_RENOVASI_ADD())}
      >
        Tambah
      </ButtonTable>
      <Table responsive className="mt-4">
        <thead className="text-center">
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>No Hp</th>
            <th>Alamat</th>
            <th>Alamat Renovasi</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {listRenovasi?.length === 0 ? (
            <tr>
              <td colSpan="6">No data available</td>
            </tr>
          ) : (
            listRenovasi?.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item?.name}</td>
                <td>{item?.noHp}</td>
                <td>{item?.address}</td>
                <td>{item?.renovAddress}</td>
                <td className="d-flex justify-content-evenly">
                  <ButtonTable
                    onClick={() =>
                      router.push({
                        pathname: ROUTES.USER_RENOVASI_EDIT(item?._id),
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
                    onClick={() => PDFGeneratorRenovation(item)}
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

export default RenovComp;

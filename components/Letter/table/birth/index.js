import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import data from "./data.json";
import ButtonTable from "../../../ButtonTable";
import { useRouter } from "next/router";
import { API_URL, ROUTES } from "../../../../utils/constant";
import { getJwtToken } from "../../../../utils/utilization";
import Swal from "sweetalert2";
import Link from "next/link";
import PDFGeneratorBirth from "../../../../utils/pdf/birth";

function BirthComp() {
  const router = useRouter();
  const [listKelahiran, setListKelahiran] = useState([]);
  const [isDeleted, setIsDeleted] = useState([]);

  useEffect(async () => {
    if (getJwtToken()) {
      try {
        const response = await fetch(`${API_URL}/surat?jenis=kelahiran`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${getJwtToken()}`,
          },
        });
        const result = await response.json();
        setListKelahiran(result);
      } catch (error) {
        console.error(error, "err");
      }
    }
  }, [setListKelahiran, isDeleted]);

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
            `${API_URL}/surat/${id}?jenis=kelahiran`,
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
              text: "Anda Berhasil Surat Kelahiran",
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
      <h3 className="mt-4">Surat Keterangan Kelahiran</h3>
      <ButtonTable
        className="tbl-green mt-4 text-center"
        style={{ width: "10%" }}
        onClick={() => router.push(ROUTES.USER_KELAHIRAN_ADD())}
      >
        Tambah
      </ButtonTable>
      <Table responsive className="mt-4">
        <thead className="text-center">
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>TTL</th>
            <th>Jenis Kelamin</th>
            <th>Pekerjaan</th>
            <th>Alamat</th>
            <th>Ayah Kandung</th>
            <th>Ibu Kandung</th>
            <th>Anak Ke</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {listKelahiran?.length === 0 ? (
            <tr>
              <td colSpan="10">No data available</td>
            </tr>
          ) : (
            listKelahiran?.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item?.name}</td>
                <td>{item?.birthplace}</td>
                <td>{item?.gender}</td>
                <td>{item?.job}</td>
                <td>{item?.address}</td>
                <td>{item?.fatherName}</td>
                <td>{item?.motherName}</td>
                <td>{item?.childOrder}</td>
                <td className="d-flex justify-content-evenly">
                  <ButtonTable
                    onClick={() =>
                      router.push({
                        pathname: ROUTES.USER_KELAHIRAN_EDIT(item?._id),
                        query: { id: item?._id },
                      })
                    }
                  >
                    Edit
                    {/* <i className="feather icon-edit mr-4 cursor-pointer" /> */}
                  </ButtonTable>
                  <ButtonTable
                    className="tbl-red m-l-15 d-flex justify-content-center"
                    onClick={() => handleDelete(item?._id)}
                  >
                    Delete
                  </ButtonTable>
                  <ButtonTable
                    className="tbl-blue m-l-15 d-flex justify-content-center"
                    onClick={() => PDFGeneratorBirth(item)}
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

export default BirthComp;

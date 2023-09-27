import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import ButtonTable from "../../../ButtonTable";
import { useRouter } from "next/router";
import { API_URL, ROUTES } from "../../../../utils/constant";
import { getDayOfMonth, getJwtToken } from "../../../../utils/utilization";
import Swal from "sweetalert2";
import PDFGeneratorEvent from "../../../../utils/pdf/event";

function EventComp() {
  const router = useRouter();
  const [listAcara, setListAcara] = useState([]);
  const [isDeleted, setIsDeleted] = useState([]);
  useEffect(async () => {
    if (getJwtToken()) {
      try {
        const response = await fetch(`${API_URL}/surat?jenis=acara`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${getJwtToken()}`,
          },
        });
        const result = await response.json();
        setListAcara(result);
      } catch (error) {
        console.error(error);
      }
    }
  }, [setListAcara, isDeleted]);

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
          const response = await fetch(`${API_URL}/surat/${id}?jenis=acara`, {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${getJwtToken()}`,
            },
          });
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
              text: "Anda Berhasil Surat Acara",
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

  return (
    <Container>
      <h3 className="mt-4">Surat Izin Acara</h3>
      <ButtonTable
        className="tbl-green mt-4 text-center"
        style={{ width: "10%" }}
        onClick={() => router.push(ROUTES.USER_ACARA_ADD())}
      >
        Tambah
      </ButtonTable>
      <Table responsive className="mt-4">
        <thead className="text-center">
          <tr>
            <th>No</th>
            <th>Penanggung Jawab</th>
            <th>Hari</th>
            <th>Tanggal</th>
            <th>Waktu</th>
            <th>Tempat Acara</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {listAcara?.length === 0 ? (
            <tr>
              <td colSpan="7">No data available</td>
            </tr>
          ) : (
            listAcara?.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item?.eventManager}</td>
                <td>{item?.day}</td>
                <td>{getDayOfMonth(item?.date)}</td>
                <td>{item?.time}</td>
                <td>{item?.place}</td>
                <td className="d-flex justify-content-evenly">
                  <ButtonTable
                    onClick={() =>
                      router.push({
                        pathname: ROUTES.USER_ACARA_EDIT(item?._id),
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
                    onClick={() => PDFGeneratorEvent(item)}
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

export default EventComp;

import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import data from "./data.json";
import ButtonTable from "../../../ButtonTable";
import { useRouter } from "next/router";
import { getJwtToken } from "../../../../utils/utilization";
import { API_URL } from "../../../../utils/constant";
import PDFGeneratorBirth from "../../../../utils/pdf/birth";

function AdminBirthComp() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  const [listData, setListData] = useState([]);

  useEffect(async () => {
    if (getJwtToken()) {
      try {
        const response = await fetch(`${API_URL}/admin/surat`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${getJwtToken()}`,
          },
        });
        const result = await response.json();
        setListData(result);
      } catch (error) {
        console.error(error);
      }
    }
  }, [setListData]);

  return (
    <Container>
      <ButtonTable
        className="tbl-grey mt-4 text-center"
        style={{ width: "10%" }}
        onClick={() => handleBack()}
      >
        Back
      </ButtonTable>
      <h3 className="mt-4">Data Keseluruhan Surat Keterangan Kelahiran</h3>
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
          {listData?.kelahiran?.map((item, i) => {
            return (
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
                    className="tbl-blue m-l-15"
                    onClick={() => PDFGeneratorBirth(item)}
                  >
                    Print
                  </ButtonTable>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default AdminBirthComp;

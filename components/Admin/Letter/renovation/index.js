import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import data from "./data.json";
import ButtonTable from "../../../ButtonTable";
import { useRouter } from "next/router";
import { API_URL } from "../../../../utils/constant";
import { getJwtToken } from "../../../../utils/utilization";
import PDFGeneratorRenovation from "../../../../utils/pdf/renovation";

function AdminRenovComp() {
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
      <h3 className="mt-4">Data Keseluruhan Surat Izin Renovasi</h3>
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
          {listData?.renovasi?.map((item, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item?.name}</td>
                <td>{item?.noHp}</td>
                <td>{item?.address}</td>
                <td>{item?.renovAddress}</td>
                <td className="d-flex justify-content-evenly">
                  <ButtonTable
                    className="tbl-blue m-l-15"
                    onClick={() => PDFGeneratorRenovation(item)}
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

export default AdminRenovComp;

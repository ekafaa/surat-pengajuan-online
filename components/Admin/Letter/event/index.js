import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import ButtonTable from "../../../ButtonTable";
import { useRouter } from "next/router";
import { API_URL } from "../../../../utils/constant";
import { getDayOfMonth, getJwtToken } from "../../../../utils/utilization";
import PDFGeneratorEvent from "../../../../utils/pdf/event";

function AdminEventComp() {
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
      <h3 className="mt-4">Data Keseluruhan Surat Izin Acara</h3>
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
          {listData?.acara?.map((item, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item?.eventManager}</td>
                <td>{item?.day}</td>
                <td>{getDayOfMonth(item?.date)}</td>
                <td>{item?.time}</td>
                <td>{item?.place}</td>
                <td className="d-flex justify-content-evenly">
                  <ButtonTable
                    className="tbl-blue m-l-15"
                    onClick={() => PDFGeneratorEvent(item)}
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

export default AdminEventComp;

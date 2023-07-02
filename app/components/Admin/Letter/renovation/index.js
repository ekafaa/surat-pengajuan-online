import React from "react";
import { Container, Table } from "react-bootstrap";
import data from "./data.json";
import ButtonTable from "../../../ButtonTable";
import { useRouter } from "next/navigation";

function AdminRenovComp() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <Container>
      <ButtonTable
        className="tbl-grey mt-4 text-center"
        style={{ width: "10%" }}
        onClick={() => handleBack()}
      >
        Back
      </ButtonTable>
      <h3 className="mt-4">Data Surat Izin Renovasi</h3>
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
          {data.result.map((item, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item?.name}</td>
                <td>{item?.noHp}</td>
                <td>{item?.address}</td>
                <td>{item?.renovAddress}</td>
                <td className="d-flex justify-content-evenly">
                  <ButtonTable onClick={() => alert(`edit id : ${i + 1}`)}>
                    Edit
                    {/* <i className="feather icon-edit mr-4 cursor-pointer" /> */}
                  </ButtonTable>
                  <ButtonTable
                    className="tbl-red m-l-15"
                    onClick={() => alert(`delete id : ${i + 1}`)}
                  >
                    Delete
                    {/* <i className="feather icon-edit mr-4 cursor-pointer" /> */}
                  </ButtonTable>
                  {/* <ButtonTable
                    className="tbl-blue m-l-15"
                    onClick={() => alert(`print id : ${i + 1}`)}
                  >
                    Print
                  </ButtonTable> */}
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

"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Buttons from "../../Button";
import { useRouter } from "next/router";
import { getJwtToken, menuCondition } from "../../../utils/utilization";
import { API_URL } from "../../../utils/constant";

function AdminDasboard() {
  const router = useRouter();
  const goToPage = (code) => {
    router.push(menuCondition(code));
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
      <div className="py-4">
        <h2 className="text-center">Admin Pengelola Data Pengajuan Surat</h2>
        <h3 style={{ marginBottom: "10rem" }} className="text-center f-38">
          Taman Athena
        </h3>
        <h3 className="text-center">
          Pilih Untuk Melihat Jenis Surat Permohonan :
        </h3>
        <Row className="my-5">
          <Col>
            <Buttons
              onClick={() => goToPage("ASKD")}
              className="hei-140 fs-4 red d-grid text-center"
            >
              Surat Keterangan Domisili
              <span className="f-34 f-w-700">
                {listData?.domisili?.length} Data
              </span>
            </Buttons>
          </Col>
          <Col>
            <Buttons
              onClick={() => goToPage("ASKK")}
              className="hei-140 fs-4 green d-grid text-center"
            >
              Surat Keterangan Kelahiran
              <span className="f-34 f-w-700">
                {listData?.kelahiran?.length} Data
              </span>
            </Buttons>
          </Col>
          <Col>
            <Buttons
              onClick={() => goToPage("ASKP")}
              className="hei-140 fs-4 yellow d-grid text-center"
            >
              Surat Keterangan Pengantar
              <span className="f-34 f-w-700">
                {listData?.pengantar?.length} Data
              </span>
            </Buttons>
          </Col>
        </Row>
        <Row>
          <Col>
            <Buttons
              onClick={() => goToPage("ASIR")}
              className="hei-140 fs-4 purple d-grid text-center"
            >
              Surat Izin Renovasi
              <span className="f-34 f-w-700">
                {listData?.renovasi?.length} Data
              </span>
            </Buttons>
          </Col>
          <Col>
            <Buttons
              onClick={() => goToPage("ASIA")}
              className="hei-140 fs-4 blue d-grid text-center"
            >
              Surat Izin Acara
              <span className="f-34 f-w-700">
                {listData?.acara?.length} Data
              </span>
            </Buttons>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default AdminDasboard;

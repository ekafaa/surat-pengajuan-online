"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Buttons from "../../Button";
import { useRouter } from "next/navigation";
import { menuCondition } from "../../../../utils/utilization";
import dataDomicile from "../Letter/domicile/data.json";
import dataBirth from "../Letter/birth/data.json";
import dataIntroductory from "../Letter/introductory/data.json";
import dataRenovation from "../Letter/renovation/data.json";
import dataEvent from "../Letter/event/data.json";

function AdminDasboard() {
  const router = useRouter();
  const goToPage = (code) => {
    router.push(menuCondition(code));
  };
  return (
    <Container>
      <div className="py-4">
        <h2 className="text-center">Admin Pengelola Data Pengajuan Surat</h2>
        <h3 style={{ marginBottom: "10rem" }} className="text-center f-38">
          Taman Athena
        </h3>
        <h3 className="text-center">Pilih Jenis Surat Permohonan :</h3>
        <Row className="my-5">
          <Col>
            <Buttons
              onClick={() => goToPage("ASKD")}
              className="hei-140 fs-4 red d-grid text-center"
            >
              Surat Keterangan Domisili
              <span className="f-34 f-w-700">
                {dataDomicile?.result?.length} Data
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
                {dataBirth?.result?.length} Data
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
                {dataIntroductory?.result?.length} Data
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
                {dataRenovation?.result?.length} Data
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
                {dataEvent?.result?.length} Data
              </span>
            </Buttons>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default AdminDasboard;

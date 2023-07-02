"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Buttons from "../Button";
import { useRouter } from "next/navigation";
import { menuCondition } from "../../../utils/utilization";

function Dasboard() {
  const router = useRouter();
  const goToPage = (code) => {
    router.push(menuCondition(code));
  };
  return (
    <Container>
      <div className="py-4">
        <h2 className="text-center">Website Pengajuan Surat Kepentingan</h2>
        <h3 style={{ marginBottom: "10rem" }} className="text-center f-38">
          Taman Athena
        </h3>
        <h3 className="text-center">Pilih Jenis Surat Permohonan :</h3>
        <Row className="my-5">
          <Col>
            <Buttons
              onClick={() => goToPage("SKD")}
              className="hei-140 fs-4 red"
            >
              Surat Keterangan Domisili
            </Buttons>
          </Col>
          <Col>
            <Buttons
              onClick={() => goToPage("SKK")}
              className="hei-140 fs-4 green"
            >
              Surat Keterangan Kelahiran
            </Buttons>
          </Col>
          <Col>
            <Buttons
              onClick={() => goToPage("SKP")}
              className="hei-140 fs-4 yellow"
            >
              Surat Keterangan Pengantar
            </Buttons>
          </Col>
        </Row>
        <Row>
          <Col>
            <Buttons
              onClick={() => goToPage("SIR")}
              className="hei-140 fs-4 purple"
            >
              Surat Izin Renovasi
            </Buttons>
          </Col>
          <Col>
            <Buttons
              onClick={() => goToPage("SIA")}
              className="hei-140 fs-4 blue"
            >
              Surat Izin Acara
            </Buttons>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Dasboard;

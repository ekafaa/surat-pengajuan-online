import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Buttons from "../../Button";
import CardComp from "../../Card";
import { useRouter } from "next/navigation";

function Event() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <CardComp>
        <div className="fw-bold f-24">Form Surat Izin Acara</div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col lg={12}>
              <Form.Group className="text-start mt-3">
                <Form.Label className="font-weight-bold mb-1">
                  Penanggung Jawab Acara
                </Form.Label>
                <Form.Control
                  {...register("eventManager")}
                  name="eventManager"
                  type="text"
                  placeholder="Masukkan Nama Penanggung Jawab Acara"
                  style={{
                    borderColor: errors.eventManager ? "#fa1e0e" : "#8692A6",
                  }}
                />
                {errors.eventManager && (
                  <p className="txt-error">{errors.eventManager.message}</p>
                )}
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="text-start mt-3">
                <Form.Label className="font-weight-bold mb-1">Hari</Form.Label>
                <Form.Control
                  {...register("day")}
                  name="day"
                  type="text"
                  placeholder="Masukkan Hari *contoh : senin"
                  style={{
                    borderColor: errors.day ? "#fa1e0e" : "#8692A6",
                  }}
                />
                {errors.day && (
                  <p className="txt-error">{errors.day.message}</p>
                )}
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="text-start mt-3">
                <Form.Label className="font-weight-bold mb-1">
                  Tanggal
                </Form.Label>
                <Form.Control
                  {...register("date")}
                  name="date"
                  type="text"
                  placeholder="Masukkan Tanggal *contoh : 30 Juni 2023"
                  style={{
                    borderColor: errors.date ? "#fa1e0e" : "#8692A6",
                  }}
                />
                {errors.date && (
                  <p className="txt-error">{errors.date.message}</p>
                )}
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="text-start mt-3">
                <Form.Label className="font-weight-bold mb-1">Waktu</Form.Label>
                <Form.Control
                  {...register("time")}
                  name="time"
                  type="text"
                  placeholder="Masukkan Waktu *contoh : 6.30 - Selesai"
                  style={{
                    borderColor: errors.time ? "#fa1e0e" : "#8692A6",
                  }}
                />
                {errors.time && (
                  <p className="txt-error">{errors.time.message}</p>
                )}
              </Form.Group>
            </Col>
            <Col lg={12}>
              <Form.Group className="text-start mt-3">
                <Form.Label className="font-weight-bold mb-1">
                  Tempat Acara
                </Form.Label>
                <Form.Control
                  {...register("place")}
                  name="place"
                  as="textArea"
                  placeholder="Masukkan Tempat Acara"
                  style={{
                    borderColor: errors.place ? "#fa1e0e" : "#8692A6",
                  }}
                />
                {errors.place && (
                  <p className="txt-error">{errors.place.message}</p>
                )}
              </Form.Group>
            </Col>
          </Row>
          <div className="d-flex justify-content-end mt-5">
            <Buttons
              type="button"
              className="red"
              style={{ width: "10rem" }}
              onClick={() => router.push("/")}
            >
              Back
            </Buttons>
            <Buttons
              type="submit"
              className="green m-l-30"
              style={{ width: "10rem" }}
            >
              Submit
            </Buttons>
          </div>
        </Form>
      </CardComp>
    </Container>
  );
}

export default Event;

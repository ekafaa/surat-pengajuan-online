import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Buttons from "../../Button";
import CardComp from "../../Card";
import { useRouter } from "next/navigation";

function Renovation() {
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
        <div className="fw-bold f-24">Form Surat Izin Renovasi</div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col lg={6}>
              <Form.Group className="text-start mt-3">
                <Form.Label className="font-weight-bold mb-1">Nama</Form.Label>
                <Form.Control
                  {...register("name")}
                  name="name"
                  type="text"
                  placeholder="Masukkan Nama"
                  style={{
                    borderColor: errors.name ? "#fa1e0e" : "#8692A6",
                  }}
                />
                {errors.name && (
                  <p className="txt-error">{errors.name.message}</p>
                )}
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="text-start mt-3">
                <Form.Label className="font-weight-bold mb-1">
                  Nomor Handphone
                </Form.Label>
                <Form.Control
                  {...register("noHp")}
                  name="noHp"
                  type="number"
                  placeholder="Masukkan Nomor Handphone"
                  style={{
                    borderColor: errors.noHp ? "#fa1e0e" : "#8692A6",
                  }}
                />
                {errors.noHp && (
                  <p className="txt-error">{errors.noHp.message}</p>
                )}
              </Form.Group>
            </Col>
            <Col lg={12}>
              <Form.Group className="text-start mt-3">
                <Form.Label className="font-weight-bold mb-1">
                  Alamat
                </Form.Label>
                <Form.Control
                  {...register("address")}
                  name="address"
                  as="textArea"
                  placeholder="Masukkan Alamat Lengkap"
                  style={{
                    borderColor: errors.address ? "#fa1e0e" : "#8692A6",
                  }}
                />
                {errors.address && (
                  <p className="txt-error">{errors.address.message}</p>
                )}
              </Form.Group>
            </Col>
            <Col lg={12}>
              <Form.Group className="text-start mt-3">
                <Form.Label className="font-weight-bold mb-1">
                  Alamat Yang Di Renov
                </Form.Label>
                <Form.Control
                  {...register("renovAddress")}
                  name="renovAddress"
                  as="textArea"
                  placeholder="Masukkan Alamat Yang Di Renov"
                  style={{
                    borderColor: errors.renovAddress ? "#fa1e0e" : "#8692A6",
                  }}
                />
                {errors.renovAddress && (
                  <p className="txt-error">{errors.renovAddress.message}</p>
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

export default Renovation;

import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Buttons from "../../Button";
import CardComp from "../../Card";
import { useRouter } from "next/navigation";

function Birth() {
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
        <div className="fw-bold f-24">Form Surat Keterangan Kelahiran</div>
        <div className="fw-bold mt-5">Dengan ini menerangkan bahwa :</div>
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
                  Tempat, Tanggal Lahir
                </Form.Label>
                <Form.Control
                  {...register("birthplace")}
                  name="birthplace"
                  type="text"
                  placeholder="Masukkan Tempat, Tanggal Lahir"
                  style={{
                    borderColor: errors.birthplace ? "#fa1e0e" : "#8692A6",
                  }}
                />
                {errors.birthplace && (
                  <p className="txt-error">{errors.birthplace.message}</p>
                )}
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group style={{ marginTop: "0.7rem" }} className="text-left">
                <Form.Label className="font-weight-bold">
                  Jenis Kelammin
                </Form.Label>
                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <Select
                      instanceId={"my-select-1"}
                      {...field}
                      options={[
                        { label: "Pria", value: "Pria" },
                        { label: "Wanita", value: "Wanita" },
                      ]}
                    />
                  )}
                />
                {errors.gender && (
                  <p className="txt-error">{errors.gender.label.message}</p>
                )}
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="text-start mt-3">
                <Form.Label className="font-weight-bold mb-1">
                  Pekerjaan
                </Form.Label>
                <Form.Control
                  {...register("job")}
                  name="job"
                  type="text"
                  placeholder="Masukkan Pekerjaan"
                  style={{
                    borderColor: errors.job ? "#fa1e0e" : "#8692A6",
                  }}
                />
                {errors.job && (
                  <p className="txt-error">{errors.job.message}</p>
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
            <div className="fw-bold mt-5">Adalah anak dari :</div>
            <Col lg={5}>
              <Form.Group className="text-start mt-3">
                <Form.Label className="font-weight-bold mb-1">
                  Nama Ayah Kandung
                </Form.Label>
                <Form.Control
                  {...register("fatherName")}
                  name="fatherName"
                  type="text"
                  placeholder="Masukkan Ayah Kandung"
                  style={{
                    borderColor: errors.fatherName ? "#fa1e0e" : "#8692A6",
                  }}
                />
                {errors.fatherName && (
                  <p className="txt-error">{errors.fatherName.message}</p>
                )}
              </Form.Group>
            </Col>
            <Col lg={5}>
              <Form.Group className="text-start mt-3">
                <Form.Label className="font-weight-bold mb-1">
                  Nama Ibu Kandung
                </Form.Label>
                <Form.Control
                  {...register("motherName")}
                  name="motherName"
                  type="text"
                  placeholder="Masukkan Nama Ibu Kandung"
                  style={{
                    borderColor: errors.motherName ? "#fa1e0e" : "#8692A6",
                  }}
                />
                {errors.motherName && (
                  <p className="txt-error">{errors.motherName.message}</p>
                )}
              </Form.Group>
            </Col>
            <Col lg={2}>
              <Form.Group className="text-start mt-3">
                <Form.Label className="font-weight-bold mb-1">
                  Anak Ke
                </Form.Label>
                <Form.Control
                  {...register("childOrder")}
                  name="childOrder"
                  type="number"
                  placeholder="Masukkan Anak Ke Berapa"
                  style={{
                    borderColor: errors.childOrder ? "#fa1e0e" : "#8692A6",
                  }}
                />
                {errors.childOrder && (
                  <p className="txt-error">{errors.childOrder.message}</p>
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

export default Birth;

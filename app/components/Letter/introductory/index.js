import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Buttons from "../../Button";
import CardComp from "../../Card";
import { useRouter } from "next/navigation";

function Introductory() {
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
        <div className="fw-bold f-24">Form Surat Keterangan Pengantar</div>
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
                <Form.Label className="font-weight-bold mb-1">NIK</Form.Label>
                <Form.Control
                  {...register("nik")}
                  name="nik"
                  type="number"
                  placeholder="Masukkan NIK"
                  style={{
                    borderColor: errors.nik ? "#fa1e0e" : "#8692A6",
                  }}
                />
                {errors.nik && (
                  <p className="txt-error">{errors.nik.message}</p>
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
            <Col lg={6}>
              <Form.Group className="text-start mt-3">
                <Form.Label className="font-weight-bold mb-1">Agama</Form.Label>
                <Controller
                  name="religion"
                  control={control}
                  render={({ field }) => (
                    <Select
                      instanceId={"my-select-1"}
                      {...field}
                      options={[
                        { label: "Islam", value: "Islam" },
                        { label: "Kristen", value: "Kristen" },
                        { label: "katholik", value: "katholik" },
                        { label: "Hindu", value: "Hindu" },
                        { label: "Budha", value: "Budha" },
                        { label: "Konghucu", value: "Konghucu" },
                        { label: "Other", value: "Other" },
                      ]}
                    />
                  )}
                />
                {errors.religion && (
                  <p className="txt-error">{errors.religion.message}</p>
                )}
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="text-start mt-3">
                <Form.Label className="font-weight-bold mb-1">
                  Status Perkawinan
                </Form.Label>
                <Controller
                  name="status"
                  control={control}
                  render={({ field }) => (
                    <Select
                      instanceId={"my-select-2"}
                      {...field}
                      options={[
                        { label: "Sudah Menikah", value: "Sudah_Menikah" },
                        { label: "Belum Menikah", value: "Belum_Menikah" },
                      ]}
                    />
                  )}
                />
                {errors.status && (
                  <p className="txt-error">{errors.status.message}</p>
                )}
              </Form.Group>
            </Col>
            <Col lg={12}>
              <Form.Group className="text-start mt-3">
                <Form.Label className="font-weight-bold mb-1">
                  Kewarganegaraan
                </Form.Label>
                <Form.Control
                  {...register("country")}
                  name="country"
                  type="text"
                  placeholder="Masukkan Kewarganegaraan"
                  style={{
                    borderColor: errors.country ? "#fa1e0e" : "#8692A6",
                  }}
                />
                {errors.country && (
                  <p className="txt-error">{errors.country.message}</p>
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
                  Maksud & Laporan
                </Form.Label>
                <Form.Control
                  {...register("report")}
                  name="report"
                  as="textArea"
                  placeholder="Masukkan Maksud & Laporan"
                  style={{
                    borderColor: errors.report ? "#fa1e0e" : "#8692A6",
                  }}
                />
                {errors.report && (
                  <p className="txt-error">{errors.report.message}</p>
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

export default Introductory;

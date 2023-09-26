import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Buttons from "../../../../Button";
import CardComp from "../../../../Card";
import { useRouter, withRouter } from "next/router";
import { API_URL, ROUTES } from "../../../../../utils/constant";
import { getJwtToken } from "../../../../../utils/utilization";
import Swal from "sweetalert2";

function EditDomicile(props) {
  const router = useRouter();
  const [dataDomisili, setDataDomisili] = useState([]);
  const idDomisili = props.router.query.id;
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    defaultValues: {
      address: dataDomisili?.address,
      birthplace: dataDomisili?.birthplace,
      country: dataDomisili?.country,
      gender: dataDomisili?.gender,
      job: dataDomisili?.job,
      name: dataDomisili?.name,
      religion: dataDomisili?.religion,
      status: dataDomisili?.status,
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `${API_URL}/surat/${idDomisili}?jenis=domisili`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${getJwtToken()}`,
          },
          body: JSON.stringify({
            address: data?.address,
            birthplace: data?.birthplace,
            country: data?.country,
            gender: data?.gender?.value,
            job: data?.job,
            name: data?.name,
            religion: data?.religion?.value,
            status: data?.status?.value,
          }),
        }
      );
      const result = await response.json();
      if (response.status !== 200) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: result.message,
          timer: 1500,
          showConfirmButton: false,
        });
      } else if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Berhasil Edit Domisili",
          text: "Anda Berhasil Edit Surat Domisili",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          router.push(ROUTES.USER_DOMISILI());
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(async () => {
    try {
      if (idDomisili) {
        const response = await fetch(
          `${API_URL}/surat/${idDomisili}?jenis=domisili`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${getJwtToken()}`,
            },
          }
        );
        const result = await response.json();
        setDataDomisili(result);
        setValue("name", result?.name);
        setValue("birthplace", result?.birthplace);
        setValue("country", result?.country);
        setValue("gender", { label: result?.gender, value: result?.gender });
        setValue("job", result?.job);
        setValue("religion", {
          label: result?.religion,
          value: result?.religion,
        });
        setValue("status", { label: result?.status, value: result?.status });
        setValue("address", result?.address);
      }
    } catch (error) {
      console.error(error);
    }
  }, [idDomisili]);
  return (
    <Container>
      <CardComp>
        <div className="fw-bold f-24">Form Surat Keterangan Domisili</div>
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
            <Col lg={6}>
              <Form.Group className="text-start mt-3">
                <Form.Label className="font-weight-bold mb-1">Agama</Form.Label>
                <Controller
                  name="religion"
                  control={control}
                  render={({ field }) => (
                    <Select
                      instanceId={"my-select-2"}
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
                      instanceId={"my-select-3"}
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
                  as="TextArea"
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
          </Row>
          <div className="d-flex justify-content-end mt-5">
            <Buttons
              type="button"
              className="red"
              style={{ width: "10rem" }}
              onClick={() => router.push(ROUTES.USER_DOMISILI())}
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

export default withRouter(EditDomicile);

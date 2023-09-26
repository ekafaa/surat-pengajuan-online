import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import Buttons from "../../../../Button";
import CardComp from "../../../../Card";
import { useRouter, withRouter } from "next/router";
import { API_URL, ROUTES } from "../../../../../utils/constant";
import { getJwtToken } from "../../../../../utils/utilization";
import Swal from "sweetalert2";
import moment from "moment";

function EditEvent(props) {
  const router = useRouter();
  const [dataAcara, setDataAcara] = useState([]);
  const idAcara = props.router.query.id;
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    defaultValues: {
      date: dataAcara?.date,
      eventManager: dataAcara?.eventManager,
      place: dataAcara?.place,
    },
  });

  const onSubmit = async (data) => {
    const formattedDate = new Date(data.date).toISOString();
    const updatedData = { ...data, date: formattedDate };

    try {
      const response = await fetch(`${API_URL}/surat/${idAcara}?jenis=acara`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${getJwtToken()}`,
        },
        body: JSON.stringify(updatedData),
      });
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
          title: "Berhasil Edit Acara",
          text: "Anda Berhasil Edit Surat Acara",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          router.push(ROUTES.USER_ACARA());
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(async () => {
    try {
      if (idAcara) {
        const response = await fetch(
          `${API_URL}/surat/${idAcara}?jenis=acara`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${getJwtToken()}`,
            },
          }
        );
        const result = await response.json();
        setDataAcara(result);
        const formattedDate = moment(result?.date).format("YYYY-MM-DDTHH:mm");
        setValue("date", formattedDate);
        setValue("eventManager", result?.eventManager);
        setValue("place", result?.place);
      }
    } catch (error) {
      console.error(error);
    }
  }, [idAcara]);
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
            <Col lg={12}>
              <Form.Group className="text-start mt-3">
                <Form.Label className="font-weight-bold mb-1">
                  Tanggal & Waktu
                </Form.Label>
                <Controller
                  name="date"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      as="input"
                      type="datetime-local"
                      placeholder="Masukkan Tanggal & Waktu"
                      style={{
                        borderColor: errors.date ? "#fa1e0e" : "#8692A6",
                      }}
                    />
                  )}
                />
                {errors.date && (
                  <p className="txt-error">{errors.date.message}</p>
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
                  as="TextArea"
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
              onClick={() => router.push(ROUTES.USER_ACARA())}
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

export default withRouter(EditEvent);

import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import * as Yup from "yup";
import Select from "react-select";
import Link from "next/link";
import Aux from "../../_Aux";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { AUTH_HEADERS, API_URL, ROUTES } from "../../../utils/constant";
import { getJwtToken } from "../../../utils/utilization";

export default function Register() {
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Nama Harus Diisi"),
    username: Yup.string().required("Email Harus Diisi"),
    password: Yup.string().required("Passowrd Harus Diisi"),
    address: Yup.string().required("Alamat Harus Diisi"),
    birthplace: Yup.string().required("Tempat Lahir Harus Diisi"),
    country: Yup.string().required("Kewarganegaraan Harus Diisi"),
    religion: Yup.mixed().required("Agama Harus Diisi"),
    nik: Yup.string().required("NIK Harus Diisi"),
    job: Yup.string().required("Pekerjaan Harus Diisi"),
    noHp: Yup.string().required("No HP Harus Diisi"),
    status: Yup.mixed().required("Status Perkawinan Harus Diisi"),
  });
  const resolvers = {
    resolver: yupResolver(validationSchema),
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm(resolvers);

  useEffect(() => {
    const isLoggedIn = getJwtToken();
    if (isLoggedIn) {
      router.push(ROUTES.USER_DASHBOARD());
    }
  }, [router]);

  const onSubmit = (data) => {
    const param = {
      username: data?.username,
      password: data?.password,
      bio: {
        name: data?.name,
        address: data?.address,
        birthplace: data?.birthplace,
        country: data?.country,
        religion: data?.religion.value,
        nik: data?.nik,
        job: data?.job,
        noHp: data?.noHp,
        status: data?.status.label,
      },
    };
    Swal.fire({
      icon: "question",
      title: "Register",
      text: "make sure your data is correct",
      showCancelButton: true,
    }).then((res) => {
      if (res.isConfirmed) {
        fetch(`${API_URL}/user`, {
          method: "POST",
          headers: AUTH_HEADERS,
          body: JSON.stringify(param),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data) {
              Swal.fire({
                icon: "success",
                title: "Success Register",
                text: "Your Account has been successfully created",
                timer: 1500,
                showConfirmButton: false,
              }).then(() => {
                router.push(ROUTES.LOGIN());
              });
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    });
  };

  return (
    <Aux>
      <div className="auth-wrapper">
        <div className="auth-content">
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>
          <div className="card">
            <div className="card-body text-center">
              <div className="mb-4">
                <i className="feather icon-unlock auth-icon" />
              </div>
              <h3 className="mb-4">Register</h3>
              <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <Form.Group className="text-start mb-3">
                  <Form.Label className="font-weight-bold mb-0">
                    Username
                  </Form.Label>
                  <Form.Control
                    {...register("username")}
                    name="username"
                    type="text"
                    placeholder="Masukkan Username"
                    style={{
                      borderColor: errors.username ? "#fa1e0e" : "#8692A6",
                    }}
                  />
                  {errors.username && (
                    <p className="txt-error">{errors.username.message}</p>
                  )}
                </Form.Group>
                <Form.Group className="text-start mb-3">
                  <Form.Label className="font-weight-bold mb-0">
                    Password
                  </Form.Label>
                  <Form.Control
                    {...register("password")}
                    name="password"
                    type="password"
                    placeholder="Masukkan Password"
                    style={{
                      borderColor: errors.password ? "#fa1e0e" : "#8692A6",
                    }}
                    className="font-weight-bold"
                  />
                  {errors.password && (
                    <p className="txt-error">{errors.password.message}</p>
                  )}
                </Form.Group>
                <Form.Group className="text-start mb-3">
                  <Form.Label className="font-weight-bold mb-0">
                    Nama Lengkap
                  </Form.Label>
                  <Form.Control
                    {...register("name")}
                    name="name"
                    type="text"
                    placeholder="Masukkan Nama Lengkap"
                    style={{
                      borderColor: errors.name ? "#fa1e0e" : "#8692A6",
                    }}
                  />
                  {errors.name && (
                    <p className="txt-error">{errors.name.message}</p>
                  )}
                </Form.Group>
                <Form.Group className="text-start mb-3">
                  <Form.Label className="font-weight-bold mb-0">
                    Alamat
                  </Form.Label>
                  <Form.Control
                    {...register("address")}
                    name="address"
                    type="text"
                    placeholder="Masukkan Alamat"
                    style={{
                      borderColor: errors.address ? "#fa1e0e" : "#8692A6",
                    }}
                  />
                  {errors.address && (
                    <p className="txt-error">{errors.address.message}</p>
                  )}
                </Form.Group>
                <Form.Group className="text-start mb-3">
                  <Form.Label className="font-weight-bold mb-0">
                    Tempat Lahir
                  </Form.Label>
                  <Form.Control
                    {...register("birthplace")}
                    name="birthplace"
                    type="text"
                    placeholder="Masukkan Tempat Lahir ex: `Sidoarjo, 02 April 2001`"
                    style={{
                      borderColor: errors.birthplace ? "#fa1e0e" : "#8692A6",
                    }}
                  />
                  {errors.birthplace && (
                    <p className="txt-error">{errors.birthplace.message}</p>
                  )}
                </Form.Group>
                <Form.Group className="text-start mb-3">
                  <Form.Label className="font-weight-bold mb-0">
                    Kewarganegaraan
                  </Form.Label>
                  <Form.Control
                    {...register("country")}
                    name="country"
                    type="text"
                    placeholder="Masukkan Kewarganegaraan ex: `Indonesia`"
                    style={{
                      borderColor: errors.country ? "#fa1e0e" : "#8692A6",
                    }}
                  />
                  {errors.country && (
                    <p className="txt-error">{errors.country.message}</p>
                  )}
                </Form.Group>
                <Form.Group className="text-start mb-3">
                  <Form.Label className="font-weight-bold">Agama</Form.Label>
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
                <Form.Group className="text-start mb-3">
                  <Form.Label className="font-weight-bold mb-0">NIK</Form.Label>
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
                <Form.Group className="text-start mb-3">
                  <Form.Label className="font-weight-bold mb-0">
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
                <Form.Group className="text-start mb-3">
                  <Form.Label className="font-weight-bold mb-0">
                    Nomor HP
                  </Form.Label>
                  <Form.Control
                    {...register("noHp")}
                    name="noHp"
                    type="text"
                    placeholder="Masukkan No HP"
                    style={{
                      borderColor: errors.noHp ? "#fa1e0e" : "#8692A6",
                    }}
                  />
                  {errors.noHp && (
                    <p className="txt-error">{errors.noHp.message}</p>
                  )}
                </Form.Group>
                <Form.Group className="text-start mb-3">
                  <Form.Label className="font-weight-bold">
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
                          {
                            label: "Sudah Menikah",
                            value: "Sudah_Menikah",
                          },
                          {
                            label: "Belum Menikah",
                            value: "Belum_Menikah",
                          },
                        ]}
                      />
                    )}
                  />
                  {errors.status && (
                    <p className="txt-error">{errors.status.message}</p>
                  )}
                </Form.Group>
                <button
                  type="submit"
                  className="w-100 btn btn-primary shadow-2 mb-4"
                >
                  Registrasi
                </button>
                <p className="mb-0 text-muted">
                  I have an account, Back to{" "}
                  <Link href="/auth/login">Login</Link>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Aux>
  );
}

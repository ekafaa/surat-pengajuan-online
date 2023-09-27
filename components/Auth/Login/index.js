import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";
import * as Yup from "yup";

import Aux from "../../_Aux";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  getJwtToken,
  roleUser,
  setLoginSession,
} from "../../../utils/utilization";
import { AUTH_HEADERS, API_URL, ROUTES } from "../../../utils/constant";

export default function Login() {
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username Harus Diisi"),
    password: Yup.string().required("Passowrd Harus Diisi"),
  });
  const resolvers = {
    resolver: yupResolver(validationSchema),
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(resolvers);

  useEffect(() => {
    if (getJwtToken()) {
      router.push("/");
    }
  }, [router]);

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: AUTH_HEADERS,
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
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
        setLoginSession(result.access_token);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have successfully logged in!",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          router.push(ROUTES.USER_DASHBOARD());
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
              <h3 className="mb-4">Login</h3>
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
                <button
                  type="submit"
                  className="w-100 btn btn-primary shadow-2 mb-4"
                >
                  Login
                </button>
                <p className="mb-0 text-muted">
                  Don’t have an account?{" "}
                  <Link href="/auth/register">Register</Link>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Aux>
  );
}

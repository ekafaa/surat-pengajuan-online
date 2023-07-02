import React, { useEffect, useRef } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import swal from "sweetalert2";
import * as Yup from "yup";

import "../../../../styles/styles.scss";
import Aux from "../../_Aux";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email Harus Diisi"),
    password: Yup.string().required("Passowrd Harus Diisi"),
  });
  const resolvers = {
    resolver: yupResolver(validationSchema),
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm(resolvers);
  const router = useRouter();

  // const dispatch = useDispatch();
  // const history = useHistory();

  // const loginResult = useSelector(state => state.login?.result);
  // const loginError = useSelector(state => state.login?.error);
  // const loginLoading = useSelector(state => state.login?.loading);

  const isInitialMount = useRef(true);

  useEffect(() => {
    // if (isInitialMount.current) {
    //     isInitialMount.current = false;
    // } else {
    //     if (loginError) {
    //         swal({
    //             title: 'Tidak Bisa Login',
    //             text: 'Silahkan ulangi kembali',
    //             icon: 'error', timer: 3000
    //         })
    //     } else if (loginResult) {
    //         if (loginResult?.accessToken) {
    //             dispatch(setToken({ userToken: loginResult?.accessToken }))
    //             dispatch(getDesa())
    //             swal({ title: 'Sukses', text: 'Sukses Login', icon: 'success', timer: 3000 });
    //             setTimeout(() => history.push(ROUTES.DASHBOARD()), 2000)
    //         }
    //     }
    // }
  }, []);

  const onSubmit = (data) => {
    const param = {
      email: data?.email,
      password: data?.password,
    };

    if (data.email.toUpperCase() === "ADMIN") {
      router.push("/admin");
    } else if (data.email.toUpperCase() === "USER") {
      router.push("/");
    } else {
      router.push("/auth/login");
    }
    // dispatch(login(param))
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
                    Email
                  </Form.Label>
                  <Form.Control
                    {...register("email")}
                    name="email"
                    type="text"
                    placeholder="Masukkan Email"
                    style={{
                      borderColor: errors.email ? "#fa1e0e" : "#8692A6",
                    }}
                  />
                  {errors.email && (
                    <p className="txt-error">{errors.email.message}</p>
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
                  {/* <span
                    className="spinner-border spinner-border-sm ml-2"
                    role="status"
                    aria-hidden="true"
                  ></span> */}
                </button>
                {/* <p className="mb-2 text-muted">Forgot password? <NavLink to={ROUTES.RESET_PASSWORD()}>Reset Passowrd</NavLink></p> */}
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

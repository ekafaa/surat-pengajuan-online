import jwtDecode from "jwt-decode";
import { serialize } from "cookie";
import moment from "moment/moment";

export const menuCondition = (code) => {
  const data = {
    SKD: "/surat-keterangan-domisili",
    SKK: "/surat-keterangan-kelahiran",
    SKP: "/surat-keterangan-pengantar",
    SIR: "/surat-izin-renovasi",
    SIA: "/surat-izin-acara",
    ASKD: "/admin/surat-keterangan-domisili",
    ASKK: "/admin/surat-keterangan-kelahiran",
    ASKP: "/admin/surat-keterangan-pengantar",
    ASIR: "/admin/surat-izin-renovasi",
    ASIA: "/admin/surat-izin-acara",
  };
  return data[code] || code;
};

export const decodeJwtToken = (token) => {
  let decodedToken = null;
  if (token) {
    decodedToken = jwtDecode(token);
  }
  return decodedToken;
};

export const setLoginSession = (token) => {
  if (typeof window !== "undefined") {
    window.sessionStorage.setItem("token", token);
  }
};
export const removeLoginSession = () => {
  if (typeof window !== "undefined") {
    window.sessionStorage.removeItem("token");
  }
};
export const getJwtToken = () => {
  if (typeof window !== "undefined") {
    return window.sessionStorage.getItem("token");
  }
};

export const getFirstTwoNames = (fullName) => {
  const names = fullName?.split(" ");
  return names?.slice(0, 2).join(" ") || names?.[0];
};

export const formatDateString = (dateString) => {
  const date = new Date(dateString);
  const options = { month: "long" };
  const formattedDate = date.toLocaleString("en-US", options);
  return formattedDate;
};

export const getDayOfMonth = (dateString) => {
  const date = new Date(dateString);
  const dayOfMonth = date.getDate();
  return dayOfMonth;
};

export const currentDateTime = moment().format('MMMM Do YYYY');

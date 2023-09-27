import { getJwtToken } from "./utilization";

export const AUTH_HEADERS = {
  "Content-type": "application/json",
  credentials: 'include'
};

export const API_URL = "https://surat-pengajuan-api.vercel.app/";

export const allowedPathsUser = [
  "/",
  "/surat-izin-acara",
  "/surat-izin-acara/add",
  "/surat-izin-acara/edit/[index]",
  "/surat-izin-renovasi",
  "/surat-izin-renovasi/add",
  "/surat-izin-renovasi/edit/[index]",
  "/surat-keterangan-domisili",
  "/surat-keterangan-domisili/add",
  "/surat-keterangan-domisili/edit/[index]",
  "/surat-keterangan-kelahiran",
  "/surat-keterangan-kelahiran/add",
  "/surat-keterangan-kelahiran/edit/[index]",
  "/surat-keterangan-pengantar",
  "/surat-keterangan-pengantar/add",
  "/surat-keterangan-pengantar/edit/[index]",
];

export const allowedPathsAdmin = [
  "/admin",
  "/admin/surat-izin-acara",
  "/admin/surat-izin-renovasi",
  "/admin/surat-keterangan-domisili",
  "/admin/surat-keterangan-kelahiran",
  "/admin/surat-keterangan-pengantar",
];

export const ROUTES = {
  LOGIN() {
    return `/auth/login`;
  },
  REGISTER() {
    return `/auth/register`;
  },
  USER_DASHBOARD() {
    return `/`;
  },
  ADMIN_DASHBOARD() {
    return `/admin`;
  },

  USER_ACARA() {
    return `/surat-izin-acara`;
  },
  USER_ACARA_ADD() {
    return `/surat-izin-acara/add`;
  },
  USER_ACARA_EDIT(id = "") {
    return `/surat-izin-acara/edit/${id}`;
  },
  USER_RENOVASI() {
    return `/surat-izin-renovasi`;
  },
  USER_RENOVASI_ADD() {
    return `/surat-izin-renovasi/add`;
  },
  USER_RENOVASI_EDIT(id = "") {
    return `/surat-izin-renovasi/edit/${id}`;
  },
  USER_DOMISILI() {
    return `/surat-keterangan-domisili`;
  },
  USER_DOMISILI_ADD() {
    return `/surat-keterangan-domisili/add`;
  },
  USER_DOMISILI_EDIT(id = "") {
    return `/surat-keterangan-domisili/edit/${id}`;
  },
  USER_KELAHIRAN() {
    return `/surat-keterangan-kelahiran`;
  },
  USER_KELAHIRAN_ADD() {
    return `/surat-keterangan-kelahiran/add`;
  },
  USER_KELAHIRAN_EDIT(id = "") {
    return `/surat-keterangan-kelahiran/edit/${id}`;
  },
  USER_PENGANTAR() {
    return `/surat-keterangan-pengantar`;
  },
  USER_PENGANTAR_ADD() {
    return `/surat-keterangan-pengantar/add`;
  },
  USER_PENGANTAR_EDIT(id = "") {
    return `/surat-keterangan-pengantar/edit/${id}`;
  },

  ADMIN_ACARA() {
    return `/admin/surat-izin-acara`;
  },
  ADMIN_RENOVASI() {
    return `/admin/surat-izin-renovasi`;
  },
  ADMIN_DOMISILI() {
    return `/admin/surat-keterangan-domisili`;
  },
  ADMIN_KELAHIRAN() {
    return `/admin/surat-keterangan-kelahiran`;
  },
  ADMIN_ACARA() {
    return `/admin/surat-keterangan-pengantar`;
  },
};

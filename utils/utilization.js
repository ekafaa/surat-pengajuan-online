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

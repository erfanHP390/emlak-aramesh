export const authTypes = {
  LOGIN: "login",
  REGISTER: "register",
};

export const roles = {
  USER: "USER",
  ADMIN: "ADMIN",
  CONSULTANT: "CONSULTANT"
};

export const toPersianDigits = (str) => {
  return str.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
};


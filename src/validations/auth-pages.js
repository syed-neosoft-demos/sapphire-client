import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  code: Yup.string().required("employee code is required"),
  password: Yup.string()
    .min(8, "password must be at least 8 characters")
    .required("password is required"),
});

export const forgetPasswordSchema = Yup.object().shape({
  email: Yup.string().email().required("email is required"),
});

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "password must be at least 8 characters")
    .required("password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("confirmPassword is required"),
});

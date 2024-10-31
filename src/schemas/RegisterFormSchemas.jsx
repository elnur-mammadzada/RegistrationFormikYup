import * as yup from "yup";

export const RegisterFormSchemas = yup.object().shape({
  email: yup
    .string()
    .email("Enter correct email adress")
    .required("You have to write email adress"),
  age: yup
    .number()
    .positive("You have to write positive number")
    .integer()
    .required("You have to write your age"),
  password: yup.string().required("You have to fill password area"),
  confirmPassword: yup
    .string()
    .required("Re-enter your password")
    .oneOf([yup.ref("password", yup.password)], "Passwords do not match"),
  term: yup.boolean().required("Please accept checkbox"),
});

import * as yup from "yup";

export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("*required"),
  email: yup.string().email("Invalid email").required("*required"),
  password: yup
    .string()
    .required("*required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters long"
    ),
});

export const defaultLoginValue = {
  username: "",
  email: "",
  password: "",
};

export const signUpSchema = yup.object().shape({
  fullname: yup
    .string()
    .min(3, "Fullname cannot be less than 3 characters.")
    .required("*required"),
  email: yup.string().email("Invalid email format").required("*required"),
  contact: yup
    .string()
    .matches(/^\d{10}$/, "Invalid phone number format. Please use 10 digits.")
    .required("*required"),

  age: yup
    .number()
    .positive()
    .integer()
    .min(18, "You must be above 18")
    .max(40, "You cannot be older than 40")
    .required("*required"),
  password: yup
    .string()
    .required("*required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters long"
    ),
  c_password: yup
    .string()
    .required("Make sure your password matches.")
    .oneOf([yup.ref("password"), null], "Both password must match"),
});

export const defaultSignUpValue = {
  fullname: "",
  email: "",
  contact: "",
  age: "",
  password: "",
  c_password: "",
};

export const newProductSchema = yup.object().shape({
  productName: yup.string().required("*required"),
  price: yup
    .number()
    .min(10, "you cannot sell anything less than 10")
    .required("*required"),
  brand: yup.string(),
  imgUrl: yup.string(),
  description: yup.string().min(12).max(500).required("*required"),
});

export const defaultAddProductValue = {
  productName: "",
  price: "",
  brand: "",
  imgUrl: "",
  description: "",
};

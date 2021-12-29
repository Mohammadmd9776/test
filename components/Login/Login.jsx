import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Box, Stack } from "@mui/material";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useRouter } from "next/router";
import Link from "next/link";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Email is not valid")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Login = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      router.push("/Todo");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack direction="column" sx={{ width: "400px" }}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Box sx={{ my: 4 }} />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Login
        </Button>

        <div style={{ marginTop: 10 }}>
          <Link href={"/Register"}>
            <a>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Login
              </Button>
            </a>
          </Link>
        </div>
      </Stack>
    </form>
  );
};

export default Login;

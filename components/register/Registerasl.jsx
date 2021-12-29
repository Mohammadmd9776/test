import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../Login/FormikControl";
import { Button } from "@mui/material";


const Registerasl = () => {
  const initialValues = {
    Name: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    confirmpassword: Yup.string().oneOf(
      [Yup.ref("password"), ""],
      "password must match"
    ),
  });

  return (
    <div
      style={{
        width: "50%",
        height: "60%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        
      }}
    >
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        {(formik) => {
          return (
            <Form>
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />

              <FormikControl
                control="input"
                type="password"
                label="password"
                name="password"
              />

              <FormikControl
                control="input"
                type="confirmpassword"
                label="confirmpassword"
                name="confirmpassword"
              />

              <div style={{ justifyContent: "center", display: "flex" }}>
                <Button
                  variant="outlined"
                  sx={{ backgroundColor: "white", borderRadius: 2, width:"100%" }}
                >
                  signup
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Registerasl;

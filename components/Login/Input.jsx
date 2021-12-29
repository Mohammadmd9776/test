import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { TextField } from "@material-ui/core";

const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div>
      <div>
        <label htmlFor={name}>{label}</label>
      </div>

      <Field
        id={name}
        name={name}
        {...rest}
        render={({ field /* { name, value, onChange, onBlur } */ }) => (
          <TextField {...field} />
        )}
      />

      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;

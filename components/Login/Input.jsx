import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import {TextField} from '@material-ui/core';

const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div style={{ marginBottom: 1 }}>
      <div>
        <label htmlFor={name}>{label}</label>
      </div>

      <TextField id={name} name={name} {...rest}  />

      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;

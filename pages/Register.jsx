import React from "react";

import styles from "../styles/Home.module.css";
import Registerasl from "../components/register/Registerasl";

const Register = () => {
  return (
    <div className={styles.container}>
      <Registerasl />
    </div>
  );
};

export default Register;

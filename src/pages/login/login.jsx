import React, { useState } from "react";
import styles from "./styles.module.css";

const Login = () => {
  const [validate, setValidate] = useState({
    email: "",
    secret: "",
  });

  const submitValidate = () => {
    console.log("aaaaaaaaaa");
  };

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          submitValidate();
        }}
      >
        <input type="text" name="email" value={validate.email} />
        <input type="password" name="secret" value={validate.secret} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;

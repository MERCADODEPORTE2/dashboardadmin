import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { checkUser } from "../../redux/actions";
import styles from "./styles.module.css";

const validateError = (validate, user) => {
  let errors = {};
  if (!validate.email || !validate.secret) {
    errors.email = "falta informacion";
  } else if (
    validate.email !== user?.email ||
    validate.secret !== user?.secret
  ) {
    errors.email = "Información Invalida";
  } else {
    errors.email = null;
  }
  return errors;
};

const Login = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [viewSecret, setViewSecret] = useState(false);
  const [errors, setErrors] = useState({});
  const [validate, setValidate] = useState({
    email: "",
    secret: "",
  });

  const handlerChange = (e) => {
    const value = e.target.value;
    const property = e.target.name;

    setValidate({
      ...validate,
      [property]: value,
    });
  };

  const submitValidate = (e) => {
    e.preventDefault();
    dispatch(checkUser(validate.secret, validate.email));
    let user = users[0];

    if (typeof user === "object") {
      const name = user?.name;
      const img = user?.profile_image;
      const email = user?.email;
      const account_name = user?.account_name;
      //
      window.localStorage.setItem(
        "user",
        JSON.stringify({ name, img, email, account_name })
      );
      window.location.href = `/home`;
    } else {
      setErrors(
        validateError(
          {
            ...validate,
            email: validate.email,
          },
          user
        )
      );
    }
  };

  return (
    <div className={styles.login}>
      <img
        src="https://i.ibb.co/XxKd25d/Picsart-23-06-13-16-44-51-813.png"
        alt="login"
      />
      <div className={styles.center}>
        <img
          src="https://i.ibb.co/XxKd25d/Picsart-23-06-13-16-44-51-813.png"
          alt="md"
        />
        <form action="" onSubmit={(e) => {}}>
          <div>
            <label htmlFor="">E-mail</label>
            <input
              type="text"
              // autoComplete="off"
              placeholder="E-mail"
              name="email"
              value={validate.email}
              onChange={(e) => handlerChange(e)}
            />
          </div>
          {!viewSecret ? (
            <div>
              <label htmlFor="">Contraseña</label>
              <input
                type="password"
                autoComplete="off"
                placeholder="Contraseña"
                name="secret"
                value={validate.secret}
                onChange={(e) => handlerChange(e)}
              />
            </div>
          ) : (
            <div>
              <label htmlFor="">Contraseña</label>
              <input
                type="text"
                autoComplete="off"
                placeholder="Contraseña"
                name="secret"
                value={validate.secret}
                onChange={(e) => handlerChange(e)}
              />
            </div>
          )}
          {!viewSecret ? (
            <button
              className={styles.viewPassword}
              onClick={(e) => {
                e.preventDefault();
                setViewSecret(true);
              }}
            >
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#f5f5f5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                    fill="#f5f5f5"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 3C17.5915 3 22.2898 6.82432 23.6219 12C22.2898 17.1757 17.5915 21 12 21C6.40848 21 1.71018 17.1757 0.378052 12C1.71018 6.82432 6.40848 3 12 3ZM12 19C7.52443 19 3.73132 16.0581 2.45723 12C3.73132 7.94186 7.52443 5 12 5C16.4756 5 20.2687 7.94186 21.5428 12C20.2687 16.0581 16.4756 19 12 19Z"
                    fill="#f5f5f5"
                  />
                </svg>
                <span>Ver contraseña </span>
              </div>
            </button>
          ) : (
            <button
              className={styles.viewPassword}
              onClick={(e) => {
                e.preventDefault();
                setViewSecret(false);
              }}
            >
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill={{ fill: "#f5f5f5" }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M4 4L20 20"
                      stroke="#f5f5f5"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.22308 5.63732C4.19212 6.89322 2.60069 8.79137 1.73175 11.0474C1.49567 11.6604 1.49567 12.3396 1.73175 12.9526C3.31889 17.0733 7.31641 20 12 20C14.422 20 16.6606 19.2173 18.4773 17.8915L17.042 16.4562C15.6033 17.4309 13.8678 18 12 18C8.17084 18 4.89784 15.6083 3.5981 12.2337C3.54022 12.0835 3.54022 11.9165 3.5981 11.7663C4.36731 9.76914 5.82766 8.11625 7.6854 7.09964L6.22308 5.63732ZM9.47955 8.89379C8.5768 9.6272 7.99997 10.7462 7.99997 12C7.99997 14.2091 9.79083 16 12 16C13.2537 16 14.3728 15.4232 15.1062 14.5204L13.6766 13.0908C13.3197 13.6382 12.7021 14 12 14C10.8954 14 9.99997 13.1046 9.99997 12C9.99997 11.2979 10.3618 10.6802 10.9091 10.3234L9.47955 8.89379ZM15.9627 12.5485L11.4515 8.03729C11.6308 8.0127 11.8139 8 12 8C14.2091 8 16 9.79086 16 12C16 12.1861 15.9873 12.3692 15.9627 12.5485ZM18.5678 15.1536C19.3538 14.3151 19.9812 13.3259 20.4018 12.2337C20.4597 12.0835 20.4597 11.9165 20.4018 11.7663C19.1021 8.39172 15.8291 6 12 6C11.2082 6 10.4402 6.10226 9.70851 6.29433L8.11855 4.70437C9.32541 4.24913 10.6335 4 12 4C16.6835 4 20.681 6.92668 22.2682 11.0474C22.5043 11.6604 22.5043 12.3396 22.2682 12.9526C21.7464 14.3074 20.964 15.5331 19.9824 16.5682L18.5678 15.1536Z"
                      fill="#f5f5f5"
                    ></path>
                  </g>
                </svg>
                <span>Ocultar contraseña </span>
              </div>
            </button>
          )}
          {errors.email ? (
            <div className={styles.error}>
              <p> · {errors.email}</p>
            </div>
          ) : null}
          <button onClick={(e) => submitValidate(e)} className={styles.send}>
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

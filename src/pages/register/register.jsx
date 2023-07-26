import React, { useState, useEffect } from "react";
import { postUsers, getUsers } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import CardUser from "./cardUser";
import TypeFile from "../../components/file/file";
import styles from "./styles.module.css";

const validate = (user, twoName) => {
  let errors = {};

  if (!user.profile_image) {
    errors.profile_image = "Agregar imagen de usuario";
  }
  if (!user.name || !/^[A-Za-z\s]+$/g.test(user.name)) {
    errors.name = "Solo se permiten letras";
  }
  if (
    !user.account_name ||
    /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(user.account_name)
  ) {
    errors.account_name = "Menos de 8 caracteres";
  }
  if (!user.email || user.email.length < 15) {
    errors.email = "E-mail invalido";
  }
  if (
    !user.secret ||
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(user.secret)
  ) {
    errors.secret =
      "La contraseña debe contener: mas de 8 caracteres, 1 mayúscula y un número";
  }
  if (user.secret !== twoName) {
    errors.towSeceret = "Las contraseñas no coinciden";
  }
  return errors;
};

const Register = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const [twoName, setTwoName] = useState("");
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    name: "",
    account_name: "",
    email: "",
    secret: "",
    profile_image: "",
  });

  useEffect(() => {
    if (!users.length) {
      dispatch(getUsers());
    }
  }, [users, dispatch]);

  const handlerChange = (e) => {
    const value = e.target.value;
    const property = e.target.name;

    setUser({
      ...user,
      [property]: value,
    });

    setErrors(
      validate(
        {
          ...user,
          [property]: value,
        },
        twoName
      )
    );
  };
  const submirUser = () => {
    if (
      user.name !== "" &&
      user.account_name !== "" &&
      user.email !== "" &&
      user.secret !== ""
    ) {
      dispatch(postUsers(user));
    }
  };

  return (
    <div className={styles.register}>
      <div className={styles.center}>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            submirUser();
          }}
        >
          <span>REGISTRAR USUARIO</span>
          {user.profile_image !== "" ? (
            <div className={styles.image}>
              <img src={user.profile_image} alt="imageUser" />
            </div>
          ) : null}
          <div className={styles.row}>
            <div className={styles.input}>
              <label htmlFor="">Imagen de Usuario</label>
              <TypeFile input={user} setInput={setUser} name={"name"} />
              {errors.profile_image ? (
                <div className={styles.error}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    style={{ fill: "red" }}
                  >
                    <path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"></path>
                    <path d="M11 7h2v7h-2zm0 8h2v2h-2z"></path>
                  </svg>
                  <p>{errors.profile_image}</p>
                </div>
              ) : null}
            </div>
            <div className={styles.input}>
              <label htmlFor="">Nombre</label>
              <input
                type="text"
                autoComplete="off"
                placeholder="Nombre"
                name="name"
                value={user.name}
                onChange={(e) => handlerChange(e)}
              />
              {errors.name ? (
                <div className={styles.error}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    style={{ fill: "red" }}
                  >
                    <path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"></path>
                    <path d="M11 7h2v7h-2zm0 8h2v2h-2z"></path>
                  </svg>
                  <p>{errors.name}</p>
                </div>
              ) : null}
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.input}>
              <label htmlFor="">Nombre de Usuario</label>
              <input
                type="text"
                autoComplete="off"
                placeholder="ejemplo: Nombre2010"
                name="account_name"
                value={user.account_name}
                onChange={(e) => handlerChange(e)}
              />
              {errors.account_name ? (
                <div className={styles.error}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    style={{ fill: "red" }}
                  >
                    <path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"></path>
                    <path d="M11 7h2v7h-2zm0 8h2v2h-2z"></path>
                  </svg>
                  <p>{errors.account_name}</p>
                </div>
              ) : null}
            </div>
            <div className={styles.input}>
              <label htmlFor="">E-mail</label>
              <input
                type="text"
                autoComplete="off"
                placeholder="nombre.apellido@email.com"
                name="email"
                value={user.email}
                onChange={(e) => handlerChange(e)}
              />
              {errors.email ? (
                <div className={styles.error}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    style={{ fill: "red" }}
                  >
                    <path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"></path>
                    <path d="M11 7h2v7h-2zm0 8h2v2h-2z"></path>
                  </svg>
                  <p>{errors.email}</p>
                </div>
              ) : null}
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.input}>
              <label htmlFor="">Contraseña</label>
              <input
                type="text"
                autoComplete="off"
                placeholder="contraseñA1"
                name="secret"
                value={user.secret}
                onChange={(e) => handlerChange(e)}
              />
              {errors.secret ? (
                <div className={styles.error}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    style={{ fill: "red" }}
                  >
                    <path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"></path>
                    <path d="M11 7h2v7h-2zm0 8h2v2h-2z"></path>
                  </svg>
                  <p>{errors.secret}</p>
                </div>
              ) : null}
            </div>
            <div className={styles.input}>
              <label htmlFor="">Confirmar Contraseña</label>
              <input
                type="text"
                autoComplete="off"
                placeholder="contraseñA1"
                name="twoName"
                value={twoName}
                onChange={(e) => setTwoName(e.target.value)}
              />
              {errors.towSeceret ? (
                <div className={styles.error}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    style={{ fill: "red" }}
                  >
                    <path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"></path>
                    <path d="M11 7h2v7h-2zm0 8h2v2h-2z"></path>
                  </svg>
                  <p>{errors.towSeceret}</p>
                </div>
              ) : null}
            </div>
          </div>
          <input type="submit" className={styles.created} />
        </form>
        <div className={styles.bottom}>
          <span>REGISTROS DE USUARIOS</span>
          <div className={styles.cardContainer}>
            <div className={styles.top}>
              <span className={styles.image}>Imagen</span>
              <span className={styles.name}>Nombre</span>
              <span className={styles.account}>Nombre de usuario</span>
              <span className={styles.email}>E-mail</span>
              <span className={styles.id}>Id</span>
            </div>
            {users?.map((elem) => (
              <CardUser
                name={elem.name}
                account_name={elem.account_name}
                id={elem.id}
                image={elem.profile_image}
                email={elem.email}
                key={elem.id}
              />
            ))}
          </div>
          <div className={styles.paddingbottom}>-</div>
        </div>
      </div>
    </div>
  );
};

export default Register;

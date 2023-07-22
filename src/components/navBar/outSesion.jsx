import React from "react";
import styles from "./styles.module.css";

const OutSesion = ({ setOpen }) => {
  //
  const out = () => {
    setOpen(false);
    localStorage.removeItem("user");
    window.location.reload();
  };
  const userData = JSON.parse(window.localStorage.getItem("user"));

  return (
    <div className={styles.out}>
      <div className={styles.center}>
        <button onClick={() => setOpen(false)} className={styles.cancel}>
          Cancelar
        </button>
        <button onClick={() => out()} className={styles.outSesion}>
          Salir de {userData?.account_name && <p>{userData.account_name}</p>}
        </button>
      </div>
    </div>
  );
};

export default OutSesion;

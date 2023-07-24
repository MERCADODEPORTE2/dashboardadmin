import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { deleteUsers } from "../../redux/actions";
import styles from "./styles.module.css";

const CardUser = ({ name, account_name, id, email, image }) => {
  const dispatch = useDispatch();
  //
  const [open, setOpen] = useState(false);
  const deleteProduct = () => {
    dispatch(deleteUsers(id));
    setOpen(false);
    // setTimeout(() => {
    //   window.location.reload();
    // }, 1000);
  };

  return (
    <div className={styles.cardUser}>
      {open ? (
        <div className={styles.delete}>
          <div className={styles.centerDelete}>
            <button onClick={() => setOpen(false)}>Cancelar</button>
            <button
              className={styles.deleteButton}
              onClick={() => deleteProduct()}
            >
              Elimanar a {account_name}
            </button>
          </div>
        </div>
      ) : null}
      <div className={styles.centerUser}>
        <div className={styles.image}>
          <img src={image} alt={image} />
        </div>
        <span className={styles.name}>{name}</span>
        <span className={styles.account}>{account_name}</span>
        <span className={styles.email}>{email}</span>
        <div className={styles.id}>
          {id}
          <button onClick={() => setOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ fill: "#101010" }}
            >
              <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path>
              <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardUser;

import React from "react";
import { deleteProductById } from "../../redux/actions";
import { useDispatch } from "react-redux";
import styles from "./styles.module.css";

const Delete = ({ close, id }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(deleteProductById(id));
    close(false);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  return (
    <div className={styles.delete}>
      <div className={styles.center}>
        <button onClick={() => close(false)}>Cancelar</button>
        <button className={styles.deleteButton} onClick={() => deleteProduct()}>
          Elimanar
        </button>
      </div>
    </div>
  );
};

export default Delete;

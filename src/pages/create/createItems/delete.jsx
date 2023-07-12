import React from "react";
import styles from "./styles.module.css";

const DeleteItem = ({ setOpen, id, nameInput, remove }) => {
  const deleteProduct = () => {
    remove(id);
    setOpen(false);
  };

  return (
    <div className={styles.delete}>
      <div className={styles.center}>
        <button onClick={() => setOpen(false)}>Cancelar</button>
        <button className={styles.deleteButton} onClick={() => deleteProduct()}>
          Elimanar {nameInput}
        </button>
      </div>
    </div>
  );
};

export default DeleteItem;

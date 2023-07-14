import React from "react";
import styles from "./styles.module.css";

const LateralBar = (props) => {
  return (
    <div className={styles.lateral}>
      <div className={styles.center}>
        <a href="/create">
          <span>Crear Producto</span>
        </a>

        <a href="/create/items">
          <span>Crear Items</span>
        </a>

        <a href="/add/images">
          <span>Agregar Imagenes</span>
        </a>

        <a href="/create/faqs">
          <span>Crear FAQS</span>
        </a>
      </div>
    </div>
  );
};

export default LateralBar;

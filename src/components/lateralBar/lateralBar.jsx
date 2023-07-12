import React from "react";
import styles from "./styles.module.css";

const LateralBar = (props) => {
  return (
    <div className={styles.lateral}>
      <div>
        <a href="/create">Crear Producto</a>
      </div>
      <div>
        <a href="/create/items"> Crear Items</a>
      </div>
      <div>
        <a href="/add/images">Agregar imagenes</a>
      </div>
      <div>
        <a href="/create/faqs">Crear FAQS</a>
      </div>
    </div>
  );
};

export default LateralBar;

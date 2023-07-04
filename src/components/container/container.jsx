import React from "react";
import styles from "./styles.module.css";
import Card from "../card/card";

const Container = ({ products }) => {
  return (
    <div className={styles.container}>
      <div className={styles.filters}>filters</div>
      <div className={styles.center}>
        <div className={styles.top}>
          <div className={styles.centerOne}>
            <span>imagen</span>
            <span>nombre</span>
            <span>id</span>
            <span>categoria</span>
            <span>acción</span>
          </div>
        </div>
        {products?.map((product) => (
          <Card
            name={product.name}
            img={product?.image[0]}
            id={product.id}
            category={product.category}
            key={product.id}
          />
        ))}

        <div className={styles.bottom}>-</div>
      </div>
    </div>
  );
};

export default Container;

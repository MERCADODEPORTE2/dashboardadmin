import React from "react";

import Card from "../card/card";
import Filters from "../filters/filter";

import styles from "./styles.module.css";

const Container = ({ products, setOrder, tags, sizes, colors }) => {
  return (
    <div className={styles.container}>
      <Filters tags={tags} colors={colors} sizes={sizes} setOrder={setOrder} />
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
            score={product.score}
            key={product.id}
          />
        ))}

        <div className={styles.bottom}>-</div>
      </div>
    </div>
  );
};

export default Container;

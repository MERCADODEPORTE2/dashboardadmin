import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductByID } from "../../redux/actions";

import Carrusel from "../../components/carrusel/carrusel";

import styles from "./styles.module.css";

const Detail = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductByID(id));
  }, [dispatch, id]);

  const productByID = useSelector((state) => state.detail);
  return (
    <div className={styles.detail}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.containerCarrusel}>
            <Carrusel images={productByID.image} />
          </div>
          <div className={styles.info}>
            <div className={styles.one}>
              <div className={styles.tags}>
                {Array.isArray(productByID.tags) ? (
                  productByID.tags.map((tag, i) => <span key={i}>/ {tag}</span>)
                ) : (
                  <span>- -</span>
                )}
              </div>
              <span>{productByID.score}</span>
            </div>
            <div className={styles.title}>
              <h1>{productByID.name}</h1>
              {/* <span>{productByID.brand}</span> */}
            </div>
            <div className={styles.sizes}>
              <div>
                <p>Talles disponibles:</p>
                <div>
                  {Array.isArray(productByID.sizes) ? (
                    productByID.sizes.map((size, i) => (
                      <span key={i}>{size}</span>
                    ))
                  ) : (
                    <span>No hay talles</span>
                  )}
                </div>
                <div>
                  <p>Colores disponibles:</p>
                  <div>
                    {Array.isArray(productByID.colors) ? (
                      productByID.colors.map((color, i) => (
                        <span key={i}>{color}</span>
                      ))
                    ) : (
                      <span>No hay Colores disponibles</span>
                    )}
                  </div>
                </div>
                <div className={styles.images}>
                  {Array.isArray(productByID.image) ? (
                    productByID.image.map((img, i) => (
                      <img src={img} alt="product" key={i} />
                    ))
                  ) : (
                    <span>-</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.two}>
            <details>
              <summary>
                Detalle{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                </svg>
              </summary>
              <p>{productByID.detail}</p>
            </details>
            <hr />
            <details>
              <summary>
                Descripción{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                </svg>
              </summary>
              <p>{productByID.description}</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";

import { patchProduct, getProductByID } from "../../redux/actions";

import styles from "./styles.module.css";
/*
name,
    id,
    stock,
    detail,
    description,
    price,
    brand,
    score,
    genre,
    image,
    sizes,
    tags,
    colors,
*/

const Update = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductByID(id));
  }, [dispatch, id]);

  const productByID = useSelector((state) => state.detail);
  //   console.log(productByID);

  return (
    <div className={styles.update}>
      <div className={styles.center}>
        <div>
          {productByID.image?.map((img, i) => (
            <img key={i} src={img} alt={img} width={100} height={120} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Update;

import React, { useState } from "react";
import styles from "./styles.module.css";

const FAQS = () => {
  const [faqs, setFaqs] = useState({
    question: "",
    response: "",
  });
  const handlerChange = (e) => {
    const value = e.target.value;
    const property = e.target.name;

    setFaqs({
      ...faqs,
      [property]: value,
    });
  };

  return (
    <div className={styles.faqs}>
      <div className={styles.center}>
        <div className={styles.container}>
          <span>CREAR PREGUNTA FRECUENTE</span>
          <div className={styles.inputs}>
            <span>Pregunta</span>
            <input
              type="text"
              autoComplete="off"
              placeholder="Pregunta"
              name="question"
              value={faqs.question}
              onChange={(e) => handlerChange(e)}
            />
            <span>Respuesta</span>
            <textarea
              autoComplete="off"
              name="response"
              value={faqs.response}
              onChange={(e) => handlerChange(e)}
              placeholder="Respuesta"
            ></textarea>
          </div>
          <button>CREAR</button>
        </div>
      </div>
    </div>
  );
};

export default FAQS;

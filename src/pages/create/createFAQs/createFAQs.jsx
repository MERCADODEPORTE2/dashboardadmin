import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postFAQS, getFaqs, deleteFaqs } from "../../../redux/actions";

import styles from "./styles.module.css";

const validate = (input) => {
  let errors = {};

  if (input.question === "") {
    errors.question = "Debe haber una pregunta";
  }
  if (input.response === "") {
    errors.response = "Debe haber una respuesta";
  }
  return errors;
};

const FAQS = () => {
  const dispatch = useDispatch();
  const FAQS = useSelector((state) => state.faqs);

  const [errors, setErrors] = useState({});
  const [faqs, setFaqs] = useState({
    response: "",
    question: "",
  });

  // console.log(FAQS);
  useEffect(() => {
    if (!FAQS.length) {
      dispatch(getFaqs());
    }
  }, [FAQS, dispatch]);

  const handlerChange = (e) => {
    const value = e.target.value;
    const property = e.target.name;

    setFaqs({
      ...faqs,
      [property]: value,
    });

    setErrors(
      validate({
        ...faqs,
        [property]: value,
      })
    );
  };

  const submit = () => {
    if (
      Object.keys(errors).length === 0 &&
      faqs.question !== "" &&
      faqs.response !== ""
    ) {
      dispatch(postFAQS(faqs));
      setFaqs({
        response: "",
        question: "",
      });
      // setTimeout(() => {
      //   window.location.reload();
      // }, 2000);
    }
  };

  const deleteFaqsByID = (id) => {
    dispatch(deleteFaqs(id));
  };

  return (
    <div className={styles.faqs}>
      <div className={styles.center}>
        <div className={styles.container}>
          <span>CREAR PREGUNTA FRECUENTE</span>
          <div className={styles.inputs}>
            <span>Pregunta</span>
            {errors.question ? (
              <div className={styles.error}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  style={{ fill: "red" }}
                >
                  <path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"></path>
                  <path d="M11 7h2v7h-2zm0 8h2v2h-2z"></path>
                </svg>
                <p>{errors.question}</p>
              </div>
            ) : null}
            <input
              type="text"
              autoComplete="off"
              placeholder="Pregunta"
              name="question"
              value={faqs.question}
              onChange={(e) => handlerChange(e)}
            />
            <span>Respuesta</span>
            {errors.response ? (
              <div className={styles.error}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  style={{ fill: "red" }}
                >
                  <path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"></path>
                  <path d="M11 7h2v7h-2zm0 8h2v2h-2z"></path>
                </svg>
                <p>{errors.response}</p>
              </div>
            ) : null}
            <textarea
              autoComplete="off"
              name="response"
              value={faqs.response}
              onChange={(e) => handlerChange(e)}
              placeholder="Respuesta"
            ></textarea>
          </div>
          <button onClick={submit}>CREAR</button>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <span>PREGUNTAS FRECUENTES</span>
            <div className={styles.containerFAQS}>
              {FAQS?.map((faq, i) => (
                <details key={i}>
                  <summary>
                    {faq.id} - {faq.question}
                  </summary>
                  <p>{faq.response}</p>
                </details>
              ))}
            </div>
          </div>
          <div className={styles.rigth}>
            <span>ELIMINAR PREGUNTAS</span>
            <div className={styles.containerDelete}>
              {FAQS?.map((faq, i) => (
                <div key={i} className={styles.cardFAQdelete}>
                  <button
                    className={styles.remove}
                    onClick={() => deleteFaqsByID(faq.id)}
                  >
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
                  <span>
                    {faq.id} {faq.question}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQS;

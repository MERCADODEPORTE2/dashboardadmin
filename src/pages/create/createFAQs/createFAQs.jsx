import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { postFAQS, getFaqs } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

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

  console.log(FAQS);
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
    }
  };
  console.log(faqs);

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
      </div>
    </div>
  );
};

export default FAQS;

import React from "react";
import styles from "./styles.module.css";

const Input = ({
  inputProperty,
  nameInput,
  handlerChange,
  placeholder,
  errorProp,
}) => {
  return (
    <div className={styles.input}>
      <span>{nameInput}</span>
      <input
        type="text"
        autoComplete="off"
        value={inputProperty}
        name={nameInput}
        placeholder={placeholder}
        onChange={(e) => handlerChange(e)}
      />
      {errorProp ? (
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
          <p>{errorProp}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Input;

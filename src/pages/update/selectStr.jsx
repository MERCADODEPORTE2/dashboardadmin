import React from "react";
import styles from "./styles.module.css";

const SelectSTR = ({
  input,
  nameInput,
  inputProperty,
  setInput,
  productByIDProperty,
  open,
  setOpen,
  selectCategory,
}) => {
  return (
    <div className={styles.property}>
      <div className={styles.names}>
        {inputProperty !== "" ? (
          <span>{inputProperty}</span>
        ) : (
          <span>{productByIDProperty}</span>
        )}
        {open === false ? (
          <button onClick={() => setOpen(true)} className={styles.actions}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ fill: "#101010" }}
            >
              <path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z"></path>
            </svg>
          </button>
        ) : null}
      </div>
      {open && (
        <div className={styles.changes}>
          <select
            name={nameInput}
            defaultValue="none"
            className={styles.select}
            onChange={(e) => selectCategory(e)}
          >
            {nameInput === "category" ? (
              <>
                <option value="ropa">Ropa</option>
                <option value="accesorio">Accesorio</option>
                <option value="deportes">Deportes</option>
                <option value="calzado">Calzado</option>
              </>
            ) : (
              <>
                <option value="mujer">Mujer</option>
                <option value="hombre">Hombre</option>
                <option value="unisex">Unisex</option>
              </>
            )}
          </select>
          <div>
            <button onClick={() => setOpen(false)} className={styles.ok}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "#101010" }}
              >
                <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
              </svg>
            </button>
            <button
              onClick={() =>
                setInput({ ...input, [nameInput]: productByIDProperty })
              }
              className={styles.clear}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "#101010" }}
              >
                <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectSTR;

import React from "react";
import styles from "./styles.module.css";

const Box = ({
  input,
  nameInput,
  inputProperty,
  setInput,
  productByIDProperty,
  open,
  setOpen,
  handlerChange,
  errorName,
}) => {
  //
  const clear = () => {
    setInput({
      ...input,
      [nameInput]: "",
    });
  };

  return (
    <div className={styles.property}>
      <span>{nameInput}</span>
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
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <input
              autoComplete="off"
              type="text"
              name={nameInput}
              value={inputProperty}
              //   id="name"
              placeholder={productByIDProperty}
              className={styles.inputs}
              onChange={handlerChange}
            />
          </form>
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
            <button onClick={() => clear()} className={styles.clear}>
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
      {
        errorName ? (
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
            <p>{errorName}</p>
          </div>
        ) : null
        // (
        //   <div className={styles.correct}>
        //     <svg
        //       xmlns="http://www.w3.org/2000/svg"
        //       width="24"
        //       height="24"
        //       viewBox="0 0 24 24"
        //       style={{ fill: "green" }}
        //     >
        //       <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
        //     </svg>
        //     <p>Bien!</p>
        //   </div>
        // )
      }
    </div>
  );
};

export default Box;

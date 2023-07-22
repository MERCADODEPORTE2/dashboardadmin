import React from "react";
import styles from "./styles.module.css";

const Select = ({
  nameInput,
  productByIDProperty,
  open,
  setOpen,
  selectItems,
  funSelectItems,
  removeItem,
  state,
  clear,
}) => {
  return (
    <div className={styles.selects}>
      <div className={styles.titleSelects}>
        <span>{nameInput}</span>
        {open === false ? (
          <button onClick={() => setOpen(true)} className={styles.actions}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              style={{ fill: "#101010" }}
            >
              <path d="M19 15v-3h-2v3h-3v2h3v3h2v-3h3v-2h-.937zM4 7h11v2H4zm0 4h11v2H4zm0 4h8v2H4z"></path>
            </svg>
          </button>
        ) : null}
      </div>
      <div className={styles.names}>
        {!selectItems.length
          ? productByIDProperty?.map((color, i) => (
              <div key={i}>
                <span>{color}</span>
                {open === true
                  ? // <button onClick={() => removeItem(color)}>
                    //   <svg
                    //     xmlns="http://www.w3.org/2000/svg"
                    //     width="20"
                    //     height="20"
                    //     viewBox="0 0 24 24"
                    //     style={{ fill: "#101010" }}
                    //   >
                    //     <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                    //   </svg>
                    // </button>
                    null
                  : null}
              </div>
            ))
          : selectItems?.map((color, i) => (
              <div key={i}>
                {nameInput === "colors" || nameInput === "tags" ? (
                  <span>{color.name}</span>
                ) : (
                  <span>{color.size}</span>
                )}
                {open === true ? (
                  <button onClick={() => removeItem(color.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      style={{ fill: "#101010" }}
                    >
                      <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                    </svg>
                  </button>
                ) : null}
              </div>
            ))}
      </div>
      {open && (
        <div className={styles.changes}>
          <select
            id={nameInput}
            name={nameInput}
            defaultValue="none"
            className={styles.select}
            onChange={(e) => funSelectItems(e)}
          >
            {nameInput === "colors" || nameInput === "tags" ? (
              <>
                <option defaultValue="options" value="none">
                  opciones
                </option>
                {state?.map((elem) => (
                  <option value={elem.id} key={elem.id}>
                    {elem.name}
                  </option>
                ))}
              </>
            ) : (
              <>
                <option defaultValue="options" value="none">
                  Etiquetas
                </option>
                {state?.map((elem) => (
                  <option value={elem.id} key={elem.id}>
                    {elem.size}
                  </option>
                ))}
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
    </div>
  );
};

export default Select;

import React from "react";
import styles from "./styles.module.css";
// import DeleteItem from "./delete";

const Items = ({
  state,
  nameInput,
  inputPropName,
  inputProp,
  placeholder,
  close,
  input,
  handlerChange,
  send,
  remove,
  // opeenn,
  // setOpen,
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.top}>
        <button onClick={() => close({ ...input, [inputProp]: false })}>
          x
        </button>
        <span>{nameInput}</span>
      </div>
      {state?.map((elem, i) =>
        nameInput === "color" || nameInput === "tags" ? (
          <div key={i} className={styles.option}>
            {/* {opeenn === false ? null : (
              <DeleteItem
                nameInput={nameInput}
                id={elem.id}
                setOpen={setOpen}
                remove={remove}
              />
            )} */}
            <button onClick={() => remove(elem.id)} className={styles.remove}>
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
            <span>nombre: {elem.name}</span>
            <span>id: {elem.id}</span>
          </div>
        ) : (
          <div key={i} className={styles.option}>
            {/* {!opeenn ? null : (
              <DeleteItem
                nameInput={nameInput}
                id={elem.id}
                setOpen={setOpen}
                remove={remove}
              />
            )} */}
            <button onClick={() => remove(elem.id)} className={styles.remove}>
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
            <span>talle: {elem.size}</span>
            <span>id: {elem.id}</span>
          </div>
        )
      )}
      <div className={styles.containerInput}>
        <input
          type="text"
          name={nameInput}
          value={inputPropName}
          placeholder={placeholder}
          onChange={(e) => handlerChange(e)}
        />
        <button onClick={send} className={styles.post}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: "#101010" }}
          >
            <path d="M18.944 11.112C18.507 7.67 15.56 5 12 5 9.244 5 6.85 6.611 5.757 9.15 3.609 9.792 2 11.82 2 14c0 2.757 2.243 5 5 5h11c2.206 0 4-1.794 4-4a4.01 4.01 0 0 0-3.056-3.888zM13 14v3h-2v-3H8l4-5 4 5h-3z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Items;

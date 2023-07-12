import React from "react";
import styles from "./styles.module.css";
const Select = ({
  nameInput,
  state,
  selectItems,
  selectedItems,
  removeItem,
}) => {
  //   console.log(selectItems);
  return (
    <div className={styles.selects}>
      <span>{nameInput}</span>
      <div className={styles.titleSelects}>
        {selectedItems?.map((elem, i) => (
          <div key={i}>
            {nameInput === "colors" || nameInput === "tags" ? (
              <span>{elem.name}</span>
            ) : (
              <span>{elem.size}</span>
            )}
            <button onClick={() => removeItem(elem.id)}>
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
          </div>
        ))}
      </div>
      <select
        name={nameInput}
        defaultValue="none"
        className={styles.select}
        onChange={(e) => selectItems(e)}
      >
        {nameInput === "colors" || nameInput === "tags" ? (
          <>
            <option defaultValue="options" value="none">
              opciones
            </option>
            {state?.map((elem, i) => (
              <option key={i} value={elem.id}>
                {elem.name}
              </option>
            ))}
          </>
        ) : (
          <>
            <option defaultValue="options" value="none">
              opciones
            </option>
            {state?.map((elem, i) => (
              <option key={i} value={elem.id}>
                {elem.size}
              </option>
            ))}
          </>
        )}
      </select>
    </div>
  );
};

export default Select;

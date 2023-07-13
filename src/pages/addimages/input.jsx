import React from "react";
import styles from "./styles.module.css";
// import { useDispatch } from "react-redux";
const Input = ({
  url,
  open,
  nameOpen,
  state,
  setOpen,
  setUrl,
  handleImageInputChange,
  label,
  arrImg,
  nameURL,
  remove,
  send,
}) => {
  return (
    <div className={styles.input}>
      <div className={styles.top}>
        <div className={styles.title}>
          <span>{`agregar url de imagen ${label}`}</span>
          <div className={styles.containerInput}>
            <input
              type="text"
              name={nameURL}
              value={url}
              autoComplete="off"
              placeholder="URL de imagen subida"
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              onClick={() => handleImageInputChange(label)}
              className={styles.post}
            >
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
        {!arrImg.length ? null : (
          <div className={styles.bottom}>
            {arrImg?.map((img, i) => (
              <div key={i} className={styles.image}>
                <img src={img} alt={img} width={100} height={120} />
                <div onClick={() => remove(img)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    style={{ fill: "#101010" }}
                  >
                    <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className={styles.view}>
          <button onClick={() => send(state, setOpen)}>
            <div>
              <span>SUB</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#101010"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                  fill="#101010"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 3C17.5915 3 22.2898 6.82432 23.6219 12C22.2898 17.1757 17.5915 21 12 21C6.40848 21 1.71018 17.1757 0.378052 12C1.71018 6.82432 6.40848 3 12 3ZM12 19C7.52443 19 3.73132 16.0581 2.45723 12C3.73132 7.94186 7.52443 5 12 5C16.4756 5 20.2687 7.94186 21.5428 12C20.2687 16.0581 16.4756 19 12 19Z"
                  fill="#101010"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;

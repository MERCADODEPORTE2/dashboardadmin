import React, { useState } from "react";
import styles from "./styles.module.css";
import Delete from "./delete";

const Card = ({ img, name, category, id }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.center}>
        <img src={img} alt="photos" />
        <span>{name.slice(0, 15)}</span>
        <span>{id.slice(0, 20)}</span>
        <span>{category}</span>
        <div className={styles.actions}>
          <a href={`/detail/${id}`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={{ fill: "#f5f5f5" }}
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
          </a>
          <a href={`/update/${id}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ fill: "#101010" }}
            >
              <path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z"></path>
            </svg>
          </a>
          <button onClick={() => setOpen(true)}>
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
          {open && <Delete close={setOpen} id={id} />}
        </div>
      </div>
    </div>
  );
};

export default Card;

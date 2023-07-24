import React from "react";
import styles from "./styles.module.css";
import data from "./styleType.json";

export default function Alert({
  title = "Correcto",
  message = "Todo salio bien",
  type = "danger",
}) {
  const img = data[type]?.icon || data.success.icon;

  return (
    <div className={styles.container} id="alertBox">
      <div className={styles.box}>
        <img
          style={{ borderLeft: `5px solid ${data[type].color}` }}
          src={img}
          alt=""
        />
        <div className={styles.infoContainer}>
          <h3>{title}</h3>
          <p>{message}</p>
        </div>
        <div
          className={styles.close}
          onClick={() => {
            document.getElementById("alertBox").remove();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            style={{ fill: "#414141" }}
          >
            <path d="M19.002 3h-14c-1.103 0-2 .897-2 2v4h2V5h14v14h-14v-4h-2v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.898-2-2-2z"></path>
            <path d="m11 16 5-4-5-4v3.001H3v2h8z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

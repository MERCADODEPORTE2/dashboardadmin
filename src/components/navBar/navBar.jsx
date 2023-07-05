import React from "react";
import styles from "./styles.module.css";

const NavBar = (props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.center}>
        <a href="/">
          <img
            src="https://i.ibb.co/XxKd25d/Picsart-23-06-13-16-44-51-813.png"
            alt="logo"
          />
        </a>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            style={{ fill: "#f5f5f5" }}
          >
            <path d="M19.002 3h-14c-1.103 0-2 .897-2 2v4h2V5h14v14h-14v-4h-2v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.898-2-2-2z"></path>
            <path d="m11 16 5-4-5-4v3.001H3v2h8z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NavBar;

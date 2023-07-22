import React, { useState } from "react";
import OutSesion from "./outSesion";

import styles from "./styles.module.css";

const NavBar = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openOut, setOpenOut] = useState(false);
  const clouse = () => {
    setOpenOut(true);
    setOpenMenu(false);
  };
  const userData = JSON.parse(window.localStorage.getItem("user"));
  return (
    <div className={styles.navbar}>
      {openOut === true ? <OutSesion setOpen={setOpenOut} /> : null}
      <div className={styles.center}>
        {openMenu ? (
          <div>-</div>
        ) : (
          <div className={styles.containerOne}>
            <a href="/home">
              <img
                src="https://i.ibb.co/XxKd25d/Picsart-23-06-13-16-44-51-813.png"
                alt="logo"
              />
            </a>

            <div className={styles.userContainer}>
              {userData?.img && <img src={userData.img} alt="" />}
              <div className={styles.names}>
                {userData?.account_name && <p>{userData.account_name}</p>}
                {userData?.name && <span>{userData.name}</span>}
              </div>
            </div>
          </div>
        )}
        <button onClick={() => setOpenOut(true)} className={styles.close}>
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
        {openMenu ? (
          <button className={styles.patty} onClick={() => setOpenMenu(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              style={{ fill: "#f5f5f5" }}
            >
              <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
            </svg>
          </button>
        ) : (
          <button className={styles.patty} onClick={() => setOpenMenu(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              style={{ fill: "#f5f5f5" }}
              className={styles.burger}
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
          </button>
        )}
        {openMenu ? (
          <div className={styles.movilMenu}>
            <a href="/create">
              <span>Crear Producto</span>
            </a>

            <a href="/create/items">
              <span>Crear Items</span>
            </a>

            <a href="/add/images">
              <span>Agregar Imagenes</span>
            </a>

            <a href="/create/faqs">
              <span>Crear FAQS</span>
            </a>
            <a href="/register">
              <span>Registrar Usuario</span>
            </a>
            <button onClick={() => clouse()} className={styles.clouseSesion}>
              <span>Cerrar Sesión</span>
            </button>
            {!openMenu ? (
              <div>-</div>
            ) : (
              <div className={styles.containerOneMV}>
                <a href="/home">
                  <img
                    src="https://i.ibb.co/XxKd25d/Picsart-23-06-13-16-44-51-813.png"
                    alt="logo"
                  />
                </a>

                <div className={styles.userContainer}>
                  {userData?.img && <img src={userData.img} alt="" />}
                  <div className={styles.names}>
                    {userData?.account_name && <p>{userData.account_name}</p>}
                    {userData?.name && <span>{userData.name}</span>}
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NavBar;

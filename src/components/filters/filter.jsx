import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { order, filter, getProducts } from "../../redux/actions";

import styles from "./styles.module.css";

const Filters = ({ setOrder, tags, colors, sizes }) => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {}, [products]);

  const orderByAlphabet = (e) => {
    const value = e.target.value;
    dispatch(order(value));
    setOrder(value);
  };

  // const orderByScores = (e) => {
  //   const value = e.target.value;
  //   dispatch(orderByScore(value));
  //   setOrder(value);
  // };

  const filterByTag = (e) => {
    const value = e.target.value;

    const selectedTags = products.filter((elem) => elem.tags.includes(value));
    dispatch(filter(selectedTags));
    setOpen(true);
  };

  const filterBySize = (e) => {
    const value = e.target.value;
    // console.log(products);s
    const selectedSizes = products.filter((elem) => elem.sizes.includes(value));
    dispatch(filter(selectedSizes));
    setOpen(true);
  };

  const filterByColors = (e) => {
    const value = e.target.value;
    const selectedColor = products.filter((elem) =>
      elem.colors.includes(value)
    );
    dispatch(filter(selectedColor));
    setOpen(true);
  };

  const filterByCategory = (e) => {
    const value = e.target.value;

    const selectedCategories = products.filter(
      (elem) => elem.category === value
    );
    dispatch(filter(selectedCategories));
    setOpen(true);
  };

  const filterByGenre = (e) => {
    const value = e.target.value;
    const selectedGenre = products.filter((elem) => elem.genre === value);
    dispatch(filter(selectedGenre));
    setOpen(true);
  };

  const filterByState = (e) => {
    const value = e.target.value;
    const selectedState = products.filter((elem) => elem.state === value);
    dispatch(filter(selectedState));
    setOpen(true);
  };

  const removeFilters = () => {
    dispatch(getProducts());
    setOpen(false);
  };

  return (
    <div className={styles.filters}>
      <div className={!open ? styles.topOff : styles.topOn}>
        <div className={styles.containerFilters}>
          <div className={styles.buttonOrder}>
            <span>Ordenes</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ fill: "#101010" }}
            >
              <path d="M2 2h2v20H2zM21 13H7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm-1 5H8v-3h12zM7 11h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1zm1-5h8v3H8z"></path>
            </svg>
          </div>
          <div className={styles.divSelect}>
            <select>
              <option value="none">Opciones</option>
              <option onClick={(e) => orderByAlphabet(e)} value="A-z">
                Orden A-Z
              </option>
              <option onClick={(e) => orderByAlphabet(e)} value="Z-a">
                Orden Z-A
              </option>
            </select>
          </div>
        </div>
        <div className={styles.containerFilters}>
          <div className={styles.buttonOrder}>
            <span>Etiquetas</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ fill: "#101010" }}
            >
              <path d="M11.707 2.293A.997.997 0 0 0 11 2H6a.997.997 0 0 0-.707.293l-3 3A.996.996 0 0 0 2 6v5c0 .266.105.52.293.707l10 10a.997.997 0 0 0 1.414 0l8-8a.999.999 0 0 0 0-1.414l-10-10zM13 19.586l-9-9V6.414L6.414 4h4.172l9 9L13 19.586z"></path>
              <circle cx="8.353" cy="8.353" r="1.647"></circle>
            </svg>
          </div>
          <div className={styles.divSelect}>
            <select name="tags" onChange={(e) => filterByTag(e)}>
              <option value="none">Opciones</option>
              {tags?.map((elem, i) => (
                <option value={elem.name} key={i}>
                  {elem.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.containerFilters}>
          <div className={styles.buttonOrder}>
            <span>Talles</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ fill: "#101010" }}
            >
              <path d="M8 16H4l6 6V2H8zm6-11v17h2V8h4l-6-6z"></path>
            </svg>
          </div>
          <div className={styles.divSelect}>
            <select name="sizes" onChange={(e) => filterBySize(e)}>
              <option value="none">Opciones</option>
              {sizes?.map((elem, i) => (
                <option value={elem.size} key={i}>
                  {elem.size}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.containerFilters}>
          <div className={styles.buttonOrder}>
            <span>Colores</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ fill: "#101010" }}
            >
              <path d="M13.4 2.096a10.08 10.08 0 0 0-8.937 3.331A10.054 10.054 0 0 0 2.096 13.4c.53 3.894 3.458 7.207 7.285 8.246a9.982 9.982 0 0 0 2.618.354l.142-.001a3.001 3.001 0 0 0 2.516-1.426 2.989 2.989 0 0 0 .153-2.879l-.199-.416a1.919 1.919 0 0 1 .094-1.912 2.004 2.004 0 0 1 2.576-.755l.412.197c.412.198.85.299 1.301.299A3.022 3.022 0 0 0 22 12.14a9.935 9.935 0 0 0-.353-2.76c-1.04-3.826-4.353-6.754-8.247-7.284zm5.158 10.909-.412-.197c-1.828-.878-4.07-.198-5.135 1.494-.738 1.176-.813 2.576-.204 3.842l.199.416a.983.983 0 0 1-.051.961.992.992 0 0 1-.844.479h-.112a8.061 8.061 0 0 1-2.095-.283c-3.063-.831-5.403-3.479-5.826-6.586-.321-2.355.352-4.623 1.893-6.389a8.002 8.002 0 0 1 7.16-2.664c3.107.423 5.755 2.764 6.586 5.826.198.73.293 1.474.282 2.207-.012.807-.845 1.183-1.441.894z"></path>
              <circle cx="7.5" cy="14.5" r="1.5"></circle>
              <circle cx="7.5" cy="10.5" r="1.5"></circle>
              <circle cx="10.5" cy="7.5" r="1.5"></circle>
              <circle cx="14.5" cy="7.5" r="1.5"></circle>
            </svg>
          </div>
          <div className={styles.divSelect}>
            <select name="colors" onChange={(e) => filterByColors(e)}>
              <option value="none">Opciones</option>
              {colors?.map((elem, i) => (
                <option value={elem.name} key={i}>
                  {elem.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.containerFilters}>
          <div className={styles.buttonOrder}>
            <span>Categorias</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ fill: "#101010" }}
            >
              <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path>
            </svg>
          </div>
          <div className={styles.divSelect}>
            <select name="category" onChange={(e) => filterByCategory(e)}>
              <option value="none">Opciones</option>
              <option value="">Ropa</option>
              <option value="">Deporte</option>
              <option value="">Calzado</option>
              <option value="">Accesorio</option>
            </select>
          </div>
        </div>
        <div className={styles.containerFilters}>
          <div className={styles.buttonOrder}>
            <span>Sexo</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ fill: "#101010" }}
            >
              <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
            </svg>
          </div>
          <div className={styles.divSelect}>
            <select name="genre" onChange={(e) => filterByGenre(e)}>
              <option value="none">Opciones</option>
              <option value="mujer">Mujer</option>
              <option value="hombre">Hombre</option>
              <option value="unisex">Unisex</option>
            </select>
          </div>
        </div>
        <div className={styles.containerFilters}>
          <div className={styles.buttonOrder}>
            <span>Estado</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ fill: "#101010" }}
            >
              <path d="M3 3v17a1 1 0 0 0 1 1h17v-2H5V3H3z"></path>
              <path d="M15.293 14.707a.999.999 0 0 0 1.414 0l5-5-1.414-1.414L16 12.586l-2.293-2.293a.999.999 0 0 0-1.414 0l-5 5 1.414 1.414L13 12.414l2.293 2.293z"></path>
            </svg>
          </div>
          <div className={styles.divSelect}>
            <select name="state" onChange={(e) => filterByState(e)}>
              <option value="none">Opciones</option>
              <option value="nuevo">Nuevo</option>
              <option value="antiguo">Antiguo</option>
            </select>
          </div>
        </div>
      </div>
      {open ? (
        <button onClick={removeFilters} className={styles.buttonEnd}>
          <div className={styles.end}>
            <span>Limpiar Filtros </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ fill: "#101010" }}
            >
              <path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z"></path>
              <path d="M8 11h8v2H8z"></path>
            </svg>
          </div>
        </button>
      ) : null}
    </div>
  );
};

export default Filters;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useFormik } from "formik";
// import * as Yup from "yup";

import { patchProduct, getProductByID, getColors } from "../../redux/actions";
import Box from "./boxes";
import Select from "./selectsArr";

import styles from "./styles.module.css";
import TextArea from "./textArea";
import SelectSTR from "./selectStr";

const Update = ({ id }) => {
  const dispatch = useDispatch();
  const productByID = useSelector((state) => state.detail);
  const colors = useSelector((state) => state.colors);

  // console.log(productByID);
  useEffect(() => {
    dispatch(getProductByID(id));
    if (!colors.length) {
      dispatch(getColors());
    }
  }, [dispatch, id, colors]);

  const [input, setInput] = useState({
    name: "", //
    category: "", //
    stock: "",
    detail: "", //
    description: "", //
    price: "",
    brand: "", //
    score: "", //
    genre: "", //
    image: [],
    sizes: [],
    tags: [],
    colors: [],
  });

  const handlerChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setInput({
      ...input,
      [property]: value,
    });
    // setErrors(
    //   validate({
    //     ...input,
    //     [property]: value,
    //   })
    // );
  };

  const selectCategory = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInput({
      ...input,
      [name]: value,
    });
  };

  // ----------- Arrays -----------
  const [selectedColors, setSelectedItems] = useState([]);

  const SelectItems = (e) => {
    const value = e.target.value;
    const property = e.target.name;

    setInput({
      ...input,
      [property]: [...input[property], value],
    });

    setSelectedItems([
      ...selectedColors,
      colors?.find((elem) => elem.id === parseInt(value)),
    ]);
  };

  const removeItem = (data) => {
    // data === id || name color
    setInput({
      ...input,
      colors: input.colors?.filter((elem) => parseInt(elem) !== data),
    });

    setSelectedItems(selectedColors.filter((elem) => elem.id !== data));
  };

  const clear = () => {
    setSelectedItems(selectedColors.filter((color) => color === "iiiiiiii"));
  };
  // -----------------------------

  // ---------- opens -------------
  const [openName, setOpenName] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [openDescription, setOpenDescription] = useState(false);
  const [openBrand, setOpenBrand] = useState(false);
  const [openScore, setOpenScore] = useState(false);
  const [openGenre, setOpenGenre] = useState(false);
  const [openColors, setOpenColors] = useState(false);

  // -----------------------------

  return (
    <div className={styles.update}>
      <div className={styles.center}>
        <div>
          {productByID.image?.map((img, i) => (
            <img key={i} src={img} alt={img} width={100} height={120} />
          ))}
        </div>
        <span>nombre</span>
        <Box
          input={input}
          nameInput={"name"}
          inputProperty={input.name}
          setInput={setInput}
          productByIDProperty={productByID.name}
          open={openName}
          setOpen={setOpenName}
          handlerChange={handlerChange}
        />
        <span>categorias</span>
        <SelectSTR
          input={input}
          nameInput={"category"}
          inputProperty={input.category}
          setInput={setInput}
          productByIDProperty={productByID.category}
          open={openCategory}
          setOpen={setOpenCategory}
          selectCategory={selectCategory}
        />
        <span>detalle</span>
        <TextArea
          input={input}
          nameInput={"detail"}
          inputProperty={input.detail}
          setInput={setInput}
          productByIDProperty={productByID.detail}
          open={openDetail}
          setOpen={setOpenDetail}
          handlerChange={handlerChange}
        />
        <span>descripcion</span>
        <TextArea
          input={input}
          nameInput={"description"}
          inputProperty={input.description}
          setInput={setInput}
          productByIDProperty={productByID.description}
          open={openDescription}
          setOpen={setOpenDescription}
          handlerChange={handlerChange}
        />
        <span>marca</span>
        <Box
          input={input}
          nameInput={"brand"}
          inputProperty={input.brand}
          setInput={setInput}
          productByIDProperty={productByID.brand}
          open={openBrand}
          setOpen={setOpenBrand}
          handlerChange={handlerChange}
        />
        <span>score</span>
        <Box
          input={input}
          nameInput={"score"}
          inputProperty={input.score}
          setInput={setInput}
          productByIDProperty={productByID.score}
          open={openScore}
          setOpen={setOpenScore}
          handlerChange={handlerChange}
        />
        <SelectSTR
          input={input}
          nameInput={"genre"}
          inputProperty={input.genre}
          setInput={setInput}
          productByIDProperty={productByID.genre}
          open={openGenre}
          setOpen={setOpenGenre}
          selectCategory={selectCategory}
        />
        <div>
          <div className={styles.names}>
            {!selectedColors.length
              ? productByID.colors?.map((color, i) => (
                  <div key={i}>
                    <span>{color}</span>
                    {openColors === true ? (
                      <button onClick={() => removeItem(color)}>
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
                ))
              : selectedColors?.map((color, i) => (
                  <div key={i}>
                    <span>{color.name}</span>
                    {openColors === true ? (
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
            {openColors === false ? (
              <button
                onClick={() => setOpenColors(true)}
                className={styles.actions}
              >
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
          {openColors && (
            <div>
              <select
                id="colors"
                name="colors"
                defaultValue="none"
                className={styles.select}
                onChange={(e) => SelectItems(e)}
              >
                <option value="none">colores</option>
                {colors?.map((color) => (
                  <option value={color.id} key={color.id}>
                    {color.name}
                  </option>
                ))}
              </select>
              <div>
                <button
                  onClick={() => setOpenColors(false)}
                  className={styles.ok}
                >
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
      </div>
    </div>
  );
};

export default Update;

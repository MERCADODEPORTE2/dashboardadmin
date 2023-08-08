import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  patchProduct,
  getProductByID,
  getColors,
  getTags,
  getSizes,
} from "../../redux/actions";
import { TypeFile } from "../../components/index";

import Box from "./boxes";
import TextArea from "./textArea";
import SelectSTR from "./selectStr";
import Select from "./selectsArr";

import styles from "./styles.module.css";

const validate = (input, productByID) => {
  let errors = {};
  if (input.name === productByID.name) {
    errors.name = "El nombre no puede ser igual al actual";
  }

  if (input.category === productByID.category) {
    errors.category = "la categoria no puede ser igual la actual";
  }

  if (input.detail === productByID.detail) {
    errors.detail = "el detalle no puede ser igual al actual";
  }

  if (input.description === productByID.description) {
    errors.description = "la descripcion no puede ser igual a la actual";
  }

  if (input.brand === productByID.brand) {
    errors.brand = "la marca no puede ser igual a la anterior";
  }

  if (input.genre === productByID.genre) {
    errors.genre = "el genero no puede ser igual al anterior";
  }

  if (input.score === productByID.score) {
    errors.score = "el puntaje no puede ser igual al puntaje actual";
  }
  return errors;
};

const Update = ({ id }) => {
  const dispatch = useDispatch();

  const productByID = useSelector((state) => state.detail);
  const colors = useSelector((state) => state.colors);
  const tags = useSelector((state) => state.tags);
  const sizes = useSelector((state) => state.sizes);
  // <-------->
  const [errors, setErrors] = useState({});
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
    sizes: [], //
    tags: [], //
    colors: [], //
  });

  useEffect(() => {
    dispatch(getProductByID(id));
    if (!colors.length) {
      dispatch(getColors());
    }
    if (!tags.length) {
      dispatch(getTags());
    }
    if (!sizes.length) {
      dispatch(getSizes());
    }
  }, [dispatch, id, colors, tags, sizes, errors, input]);

  const handlerChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setInput({
      ...input,
      [property]: value,
    });
    setErrors(
      validate(
        {
          ...input,
          [property]: value,
        },
        productByID
      )
    );
  };

  const selectCategory = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInput({
      ...input,
      [name]: value,
    });
  };

  // <------------------> // Arrays // <----------------------> //
  // colors ---------------------->
  const [selectedColors, setSelectedItems] = useState([]);

  const SelectItems = (e) => {
    const value = e.target.value;
    const property = e.target.name;
    // console.log(value);

    setInput({
      ...input,
      [property]: [...input[property], parseInt(value)],
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

  // tags ------------------------>
  const [selectedTag, setSelectedTags] = useState([]);

  const selectTags = (e) => {
    const value = e.target.value;
    const property = e.target.name;

    setInput({
      ...input,
      [property]: [...input[property], parseInt(value)],
    });

    setSelectedTags([
      ...selectedTag,
      tags?.find((elem) => elem.id === parseInt(value)),
    ]);
  };

  const removeTag = (data) => {
    // data === id || name color
    setInput({
      ...input,
      tags: input.tags?.filter((elem) => parseInt(elem) !== data),
    });

    setSelectedTags(selectedTag.filter((elem) => elem.id !== data));
  };

  const clearTagsArr = () => {
    setSelectedTags(selectedTag.filter((tag) => tag === "iiiiiiii"));
  };

  // sizes ------------------>

  const [selectedSize, setSelectedSizes] = useState([]);

  const selectSize = (e) => {
    const value = e.target.value;
    const property = e.target.name;

    setInput({
      ...input,
      [property]: [...input[property], parseInt(value)],
    });

    setSelectedSizes([
      ...selectedSize,
      sizes?.find((elem) => elem.id === parseInt(value)),
    ]);
  };

  const removeSize = (data) => {
    // data === id || name color
    setInput({
      ...input,
      sizes: input.sizes?.filter((elem) => parseInt(elem) !== data),
    });

    setSelectedSizes(selectedSize.filter((elem) => elem.id !== data));
  };

  const clearSizesArr = () => {
    setSelectedSizes([]);
  };
  // -----------------------------

  // <---------- Images ----------->
  const clearImages = () => {
    setInput({
      ...input,
      image: input.image?.filter((img) => img === "iiiiiiii"),
    });
  };

  const removeImg = (img) => {
    setInput({
      ...input,
      image: input.image?.filter((image) => image !== img),
    });
  };
  // <------------------------------>

  // ---------- opens -------------
  const [openName, setOpenName] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [openDescription, setOpenDescription] = useState(false);
  const [openBrand, setOpenBrand] = useState(false);
  const [openScore, setOpenScore] = useState(false);
  const [openGenre, setOpenGenre] = useState(false);
  const [openImage, setOpenImage] = useState(false);
  // <------- Arrays ------->
  const [openColors, setOpenColors] = useState(false);
  const [openTags, setOpenTags] = useState(false);
  const [openSizes, setOpenSizes] = useState(false);

  // -----------------------------

  const submitPatchProduct = () => {
    if (Object.keys(input).length !== 0) {
      let objectSend = {};
      for (const property in input) {
        if (Array.isArray(input[property])) {
          if (input[property].length > 0) {
            objectSend[property] = input[property];
            objectSend.id = id;
          }
        } else {
          if (input[property] !== "") {
            objectSend[property] = input[property];
            objectSend.id = id;
          }
        }
      }
      dispatch(patchProduct(objectSend));
      setInput({
        name: "",
        category: "",
        stock: "",
        detail: "",
        description: "",
        price: "",
        brand: "",
        score: "",
        genre: "",
        image: [],
        sizes: [],
        tags: [],
        colors: [],
      });
      setTimeout(() => {
        // window.location.reload();
        window.location.href = `/detail/${id}`;
      }, 3000);
    }
  };

  return (
    <div className={styles.update}>
      <div className={styles.center}>
        <div className={!openImage ? styles.images : styles.addImages}>
          <div
            className={
              !openImage ? styles.containerImgsOff : styles.containerImgsOn
            }
          >
            {productByID.image?.map((img, i) => (
              <div key={i} className={styles.image}>
                <img src={img} alt={img} />
                {!openImage ? null : (
                  <div onClick={() => removeImg(img)}>
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
                )}
              </div>
            ))}
            {input.image?.map((img, i) => (
              <div key={i} className={styles.image}>
                <img src={img} alt={img} width={100} height={120} />
                <div onClick={() => removeImg(img)}>
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
          {!openImage ? (
            <div
              onClick={() => setOpenImage(true)}
              className={openImage === false ? styles.actions : styles.none}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                style={{ fill: "#101010" }}
              >
                <path d="M4 5h13v7h2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4V5z"></path>
                <path d="m8 11-3 4h11l-4-6-3 4z"></path>
                <path d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path>
              </svg>
            </div>
          ) : null}
          {openImage && (
            <div className={styles.addImagesChanges}>
              <TypeFile setInput={setInput} input={input} />
              <div>
                <button
                  onClick={() => setOpenImage(false)}
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
                <button onClick={() => clearImages()} className={styles.clear}>
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
        <div className={styles.row}>
          <Box
            input={input}
            nameInput={"name"}
            inputProperty={input.name}
            setInput={setInput}
            productByIDProperty={productByID.name}
            open={openName}
            setOpen={setOpenName}
            handlerChange={handlerChange}
            errorName={errors.name}
          />
          <SelectSTR
            input={input}
            nameInput={"category"}
            inputProperty={input.category}
            setInput={setInput}
            productByIDProperty={productByID.category}
            open={openCategory}
            setOpen={setOpenCategory}
            selectCategory={selectCategory}
            errorName={errors.category}
          />
        </div>
        <div className={styles.row}>
          <TextArea
            input={input}
            nameInput={"detail"}
            inputProperty={input.detail}
            setInput={setInput}
            productByIDProperty={productByID.detail}
            open={openDetail}
            setOpen={setOpenDetail}
            handlerChange={handlerChange}
            errorName={errors.detail}
          />
          <TextArea
            input={input}
            nameInput={"description"}
            inputProperty={input.description}
            setInput={setInput}
            productByIDProperty={productByID.description}
            open={openDescription}
            setOpen={setOpenDescription}
            handlerChange={handlerChange}
            errorName={errors.description}
          />
        </div>
        <div className={styles.row}>
          <Box
            input={input}
            nameInput={"brand"}
            inputProperty={input.brand}
            setInput={setInput}
            productByIDProperty={productByID.brand}
            open={openBrand}
            setOpen={setOpenBrand}
            handlerChange={handlerChange}
            errorName={errors.brand}
          />
          <Box
            input={input}
            nameInput={"score"}
            inputProperty={input.score}
            setInput={setInput}
            productByIDProperty={productByID.score}
            open={openScore}
            setOpen={setOpenScore}
            handlerChange={handlerChange}
            errorName={errors.score}
          />
        </div>
        <div className={styles.row}>
          <SelectSTR
            input={input}
            nameInput={"genre"}
            inputProperty={input.genre}
            setInput={setInput}
            productByIDProperty={productByID.genre}
            open={openGenre}
            setOpen={setOpenGenre}
            selectCategory={selectCategory}
            errorName={errors.genre}
          />
          <Select
            productByIDProperty={productByID.colors}
            nameInput={"colors"}
            open={openColors}
            setOpen={setOpenColors}
            selectItems={selectedColors}
            funSelectItems={SelectItems}
            removeItem={removeItem}
            state={colors}
            clear={clear}
          />
        </div>
        <div className={styles.row}>
          <Select
            productByIDProperty={productByID.sizes}
            nameInput={"sizes"}
            open={openSizes}
            setOpen={setOpenSizes}
            selectItems={selectedSize}
            funSelectItems={selectSize}
            removeItem={removeSize}
            state={sizes}
            clear={clearSizesArr}
          />
          <Select
            productByIDProperty={productByID.tags}
            nameInput={"tags"}
            open={openTags}
            setOpen={setOpenTags}
            selectItems={selectedTag}
            funSelectItems={selectTags}
            removeItem={removeTag}
            state={tags}
            clear={clearTagsArr}
          />
        </div>
        <Box
          input={input}
          nameInput={"price"}
          inputProperty={input.price}
          setInput={setInput}
          productByIDProperty={productByID.price}
          open={openPrice}
          setOpen={setOpenPrice}
          handlerChange={handlerChange}
          errorName={errors.price}
        />
        <button className={styles.send} onClick={() => submitPatchProduct()}>
          CAMBIAR
        </button>
      </div>
    </div>
  );
};

export default Update;

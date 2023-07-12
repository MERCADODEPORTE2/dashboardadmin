import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getColors,
  getSizes,
  getTags,
  createProduct,
} from "../../redux/actions";

import Input from "./input";
import Select from "./select";
import TextArea from "./textArea";
import SelectSTR from "./selectStr";

import styles from "../update/styles.module.css";
import style from "./styles.module.css";

const validate = (input) => {
  let errors = {};

  if (!input.name) {
    errors.name = "debe haber un nombre de producto";
  }
  if (input.image.length === 0) {
    errors.image = "el producto debe tener al menos una imagen";
  }
  if (!input.brand.trim()) {
    errors.brand = "debe completar el campo";
  }
  // --------------------------------------------------
  if (!input.category) {
    errors.category = "debe pertenecer a una categoria";
  }
  if (!input.genre) {
    errors.genre = "debe pertenecer a un genero";
  }

  if (!input.score || !/^[1-5]\d*(\.\d+)?$/.test(input.score)) {
    errors.score = "debe tener un puntaje";
  }

  if (!input.detail) {
    errors.detail = "el producto debe tener un detalle";
  }
  if (!input.description) {
    errors.description = "el producto debe tener una descripción";
  }
  return errors;
};

const Create = (props) => {
  const colors = useSelector((state) => state.colors);
  const tags = useSelector((state) => state.tags);
  const sizes = useSelector((state) => state.sizes);
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "", //
    category: "", //
    price: "000",
    stock: "000",
    detail: "", //
    description: "", //
    brand: "", //
    score: "", //
    genre: "", //
    image: [], //
    sizes: [], //
    tags: [], //
    colors: [], //
  });

  useEffect(() => {
    if (!colors.length) {
      dispatch(getColors());
    }
    if (!tags.length) {
      dispatch(getTags());
    }
    if (!sizes.length) {
      dispatch(getSizes());
    }
  }, [dispatch, colors, tags, sizes]);

  const handlerChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setInput({
      ...input,
      [property]: value,
    });
    setErrors(
      validate({
        ...input,
        [property]: value,
      })
    );
  };

  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const selectColor = (event) => {
    const value = event.target.value;
    setInput({
      ...input,
      colors: [...input.colors, parseInt(value)],
    });

    setSelectedColors([
      ...selectedColors,
      colors.find((elem) => elem.id === parseInt(value)),
    ]);
  };

  const selectTags = (event) => {
    const value = event.target.value;
    setInput({
      ...input,
      tags: [...input.tags, parseInt(value)],
    });

    setSelectedTags([
      ...selectedTags,
      tags.find((elem) => elem.id === parseInt(value)),
    ]);
  };

  const selectSizes = (event) => {
    const value = event.target.value;
    setInput({
      ...input,
      sizes: [...input.sizes, parseInt(value)],
    });

    setSelectedSizes([
      ...selectedSizes,
      sizes.find((elem) => elem.id === parseInt(value)),
    ]);
  };
  const removeColor = (id) => {
    setInput({
      ...input,
      colors: input.colors.filter((elem) => parseInt(elem) !== id),
    });

    setSelectedColors(selectedColors.filter((elem) => elem.id !== id));
  };

  const removeTags = (id) => {
    setInput({
      ...input,
      tags: input.tags.filter((elem) => parseInt(elem) !== id),
    });

    setSelectedTags(selectedTags.filter((elem) => elem.id !== id));
  };

  const removeSizes = (id) => {
    setInput({
      ...input,
      sizes: input.sizes.filter((elem) => parseInt(elem) !== id),
    });

    setSelectedSizes(selectedSizes.filter((elem) => elem.id !== id));
  };

  const [url, setUrl] = useState("");
  const handleImageInputChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      image: [...input.image, url],
    });
    setUrl("");
  };

  const selectCategory = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const removeImg = (img) => {
    setInput({
      ...input,
      image: input.image?.filter((image) => image !== img),
    });
  };

  const handlerSubmit = (event) => {
    // compruebo que esté todo antes de enviar
    if (
      Object.keys(errors).length === 0 &&
      input.name !== "" &&
      input.category !== "" &&
      input.detail !== "" &&
      input.description !== "" &&
      input.brand !== "" &&
      input.score !== "" &&
      input.genre !== "" &&
      input.image.length !== 0
    ) {
      dispatch(createProduct(input));
      // alert("YAAAAAAAAA");
      setInput({
        name: "",
        category: "",
        detail: "",
        price: "000",
        stock: "000",
        description: "",
        brand: "",
        score: "",
        genre: "",
        image: [],
        sizes: [],
        tags: [],
        colors: [],
      });
      setSelectedColors([]);
      setSelectedSizes([]);
      setSelectedTags([]);
    } else {
      alert("completar sin errores");
    }
  };

  return (
    <div className={styles.update}>
      <div className={styles.center}>
        <div className={styles.addImages}>
          {input.image.length ? (
            <div className={styles.containerImgsOff}>
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
          ) : null}
          <div className={styles.addImagesChanges}>
            <form action="">
              <input
                type="text"
                placeholder="URL de imagen subida"
                className={styles.inputs}
                name="url"
                value={url}
                autoComplete="off"
                onChange={(e) => setUrl(e.target.value)}
                // hidden={path === "update"}
              />
              <button
                className={styles.post}
                onClick={(e) => handleImageInputChange(e)}
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
            </form>
          </div>
          {errors.image ? (
            <div className={styles.error}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                style={{ fill: "red" }}
              >
                <path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"></path>
                <path d="M11 7h2v7h-2zm0 8h2v2h-2z"></path>
              </svg>
              <p>{errors.image}</p>
            </div>
          ) : null}
        </div>
        <div className={style.row}>
          <Input
            inputProperty={input.name}
            nameInput={"name"}
            handlerChange={handlerChange}
            placeholder={"nombre de producto"}
            errorProp={errors.name}
          />
          <SelectSTR
            nameInput={"category"}
            inputProperty={input.category}
            selectCategory={selectCategory}
            errorProp={errors.category}
          />
        </div>
        <div className={style.row}>
          <Input
            inputProperty={input.brand}
            nameInput={"brand"}
            handlerChange={handlerChange}
            placeholder={"marca del producto"}
            errorProp={errors.brand}
          />
          <SelectSTR
            nameInput={"genre"}
            inputProperty={input.genre}
            selectCategory={selectCategory}
            errorProp={errors.genre}
          />
        </div>
        <div className={style.row}>
          <Input
            inputProperty={input.score}
            nameInput={"score"}
            handlerChange={handlerChange}
            placeholder={"del 1 al 5"}
            errorProp={errors.score}
          />
          <Select
            selectedItems={selectedColors}
            nameInput={"colors"}
            state={colors}
            selectItems={selectColor}
            removeItem={removeColor}
          />
        </div>
        <div className={style.row}>
          <Select
            selectedItems={selectedTags}
            nameInput={"tags"}
            state={tags}
            selectItems={selectTags}
            removeItem={removeTags}
          />
          <Select
            selectedItems={selectedSizes}
            nameInput={"sizes"}
            state={sizes}
            selectItems={selectSizes}
            removeItem={removeSizes}
          />
        </div>
        <div className={style.row}>
          <TextArea
            inputProperty={input.detail}
            nameInput={"detail"}
            handlerChange={handlerChange}
            placeholder={"detalle del producto"}
            errorProp={errors.detail}
          />
          <TextArea
            inputProperty={input.description}
            nameInput={"description"}
            handlerChange={handlerChange}
            placeholder={"descripcion del producto"}
            errorProp={errors.description}
          />
        </div>
        <button onClick={handlerSubmit} className={style.create}>
          CREAR
        </button>
      </div>
    </div>
  );
};

export default Create;

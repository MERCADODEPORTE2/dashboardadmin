import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getColors,
  getTags,
  getSizes,
  postColor,
  postTags,
  postSizes,
  deleteColor,
  deleteSizes,
  deleteTags,
  updateTags,
  updateSizes,
  updateColors,
} from "../../../redux/actions";

import Items from "./items";
import styles from "./styles.module.css";

const CreateItems = () => {
  const colors = useSelector((state) => state.colors);
  const tags = useSelector((state) => state.tags);
  const sizes = useSelector((state) => state.sizes);
  const dispatch = useDispatch();

  const [color, setColor] = useState({
    name: "",
    open: false,
  });
  const [tag, setTag] = useState({
    name: "",
    open: false,
    openUpdate: false,
  });
  const [size, setSize] = useState({
    size: "",
    open: false,
  });

  const update = (id, name, item) => {
    let object = {};
    if (id && name) {
      if (item === "tags") {
        object.id = id;
        object.name = name;
        dispatch(updateTags(object));
      } else if (item === "size") {
        object.id = id;
        object.size = name;
        dispatch(updateSizes(object));
      } else {
        object.id = id;
        object.name = name;
        dispatch(updateColors(object));
      }
    }
  };
  // console.log(color.name);
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

  // <----------- CHANGES ----------->

  const handlerChangeColor = (e) => {
    const value = e.target.value;
    setColor({
      ...color,
      name: value,
    });
  };
  const handlerChangeSize = (e) => {
    const value = e.target.value;
    setSize({
      ...size,
      size: value,
    });
  };
  const handlerChangeTag = (e) => {
    const value = e.target.value;
    setTag({
      ...tag,
      name: value,
    });
  };

  // <----------- SEND-TO-BACK ----------->

  const sendBackColor = () => {
    let col = {};
    if (color.name !== "") {
      col.name = color.name;
      dispatch(postColor(col));
      setColor({
        name: "",
        open: false,
      });
    }
  };

  const sendBackSize = () => {
    let si = {};
    if (size.size !== "") {
      si.size = size.size;
      dispatch(postSizes(si));
      setSize({
        size: "",
        open: false,
      });
    }
  };

  const sendBackTag = () => {
    let ta = {};
    if (tag.name !== "") {
      ta.name = tag.name;
      dispatch(postTags(ta));
      setTag({
        name: "",
        open: false,
      });
    }
  };

  // <----------- DELETE-TO-BACK ----------->

  const deleteColorById = (id) => {
    dispatch(deleteColor(id));
    // console.log(id);
    setColor({ ...color, open: false });
  };
  const deleteTagById = (id) => {
    dispatch(deleteTags(id));
    // console.log(id);
    setTag({ ...tag, open: false });
  };
  const deleteSizeById = (id) => {
    dispatch(deleteSizes(id));
    // console.log(id);
    setSize({ ...size, open: false });
  };

  return (
    <div className={styles.items}>
      <div className={styles.centerOff}>
        <div
          className={
            size.open || tag.open || color.open
              ? styles.centerOn
              : styles.center
          }
        >
          {!color.open ? (
            <button
              onClick={() => setColor({ ...color, open: true })}
              className={styles.open}
            >
              Colores
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
            </button>
          ) : null}
          {!tag.open ? (
            <button
              onClick={() => setTag({ ...tag, open: true })}
              className={styles.open}
            >
              Etiquetas
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
            </button>
          ) : null}
          {!size.open ? (
            <button
              onClick={() => setSize({ ...size, open: true })}
              className={styles.open}
            >
              Talles{" "}
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
            </button>
          ) : null}
        </div>
        <div className={styles.results}>
          {size.open ? (
            <Items
              state={sizes}
              input={size}
              nameInput={"size"}
              inputPropName={size.size}
              inputProp={"open"}
              close={setSize}
              placeholder={"introdusca el talle"}
              handlerChange={handlerChangeSize}
              send={sendBackSize}
              remove={deleteSizeById}
              update={update}
            />
          ) : null}
          {tag.open ? (
            <Items
              state={tags}
              input={tag}
              nameInput={"tags"}
              inputPropName={tag.name}
              inputProp={"open"}
              close={setTag}
              placeholder={"instrodusca el nombre de etiqueta"}
              handlerChange={handlerChangeTag}
              send={sendBackTag}
              remove={deleteTagById}
              update={update}
            />
          ) : null}
          {color.open ? (
            <Items
              state={colors}
              input={color}
              nameInput={"color"}
              inputPropName={color.name}
              inputProp={"open"}
              close={setColor}
              placeholder={"introdusca el nombre del color"}
              handlerChange={handlerChangeColor}
              send={sendBackColor}
              remove={deleteColorById}
              update={update}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default CreateItems;

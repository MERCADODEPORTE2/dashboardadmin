import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getImages, postImages, deleteImages } from "../../redux/actions";
import { TypeFile } from "../../components/index";

import styles from "./styles.module.css";

const AddImages = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);

  useEffect(() => {
    if (!images.length) {
      dispatch(getImages());
    }
  }, [images, dispatch]);

  const [imagePC, setImagePC] = useState({
    name: "",
    image: [],
    open: false,
  });

  const removeImgPC = (img) => {
    setImagePC({
      ...imagePC,
      image: imagePC.image?.filter((image) => image !== img),
    });
  };

  // <---------- TB ----------->

  const [imageTB, setImageTB] = useState({
    name: "",
    image: [],
    open: false,
  });

  const removeImgTB = (img) => {
    setImageTB({
      ...imageTB,
      image: imageTB.image?.filter((image) => image !== img),
    });
  };

  // <---------- MV ---------->

  const [imageMV, setImageMV] = useState({
    name: "",
    image: [],
    open: false,
  });

  const removeImgMV = (img) => {
    setImageMV({
      ...imageMV,
      image: imageMV.image?.filter((image) => image !== img),
    });
  };

  const send = (state, setState, name) => {
    let img = {};
    if (state.image.length !== 0 && name !== "") {
      img.name = name;
      img.image = state.image;
      dispatch(postImages(img));
      setState({
        name: "",
        image: [],
        open: false,
      });
    }
  };

  const remove = (id) => {
    dispatch(deleteImages(id));
  };

  return (
    <div className={styles.addimages}>
      <div className={styles.center}>
        <div className={styles.containerImageType}>
          <span>Imagen PC</span>
          <TypeFile input={imagePC} setInput={setImagePC} />
          <button onClick={() => send(imagePC, setImagePC, "PC")}>
            <span>SUBIR</span>
          </button>
          {!imagePC.image.length ? null : (
            <div className={styles.bottom}>
              {imagePC.image?.map((img, i) => (
                <div key={i} className={styles.image}>
                  <img src={img} alt={img} width={100} height={120} />
                  <div onClick={() => removeImgPC(img)}>
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
        </div>
        <br />
        <div className={styles.containerImageType}>
          <span>Imagen TB</span>
          <TypeFile input={imageTB} setInput={setImageTB} />
          <button onClick={() => send(imageTB, setImageTB, "TB")}>
            <span>SUBIR</span>
          </button>
          {!imageTB.image.length ? null : (
            <div className={styles.bottom}>
              {imageTB.image?.map((img, i) => (
                <div key={i} className={styles.image}>
                  <img src={img} alt={img} width={100} height={120} />
                  <div onClick={() => removeImgTB(img)}>
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
        </div>
        <br />
        <div className={styles.containerImageType}>
          <span>Imagen MV</span>
          <TypeFile input={imageMV} setInput={setImageMV} />
          <button onClick={() => send(imageMV, setImageMV, "MV")}>
            <span>SUBIR</span>
          </button>
          {!imageMV.image.length ? null : (
            <div className={styles.bottom}>
              {imageMV.image?.map((img, i) => (
                <div key={i} className={styles.image}>
                  <img src={img} alt={img} width={100} height={120} />
                  <div onClick={() => removeImgMV(img)}>
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
        </div>
      </div>
      <div className={styles.centerBottom}>
        <span>IMAGENES DE LA BASE DE DATOS</span>
        <div className={styles.imagesBack}>
          {images.map((elem, i) => (
            <div key={i} className={styles.containerImages}>
              {elem.image.map((el, i) => (
                <div key={i} className={styles.dadImage}>
                  <a href={el} target="_blank">
                    <img src={el} alt={el} />
                  </a>
                  <div className={styles.childImage}>
                    <button onClick={() => remove(elem.id)}>
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
                    <span>{elem.name}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddImages;

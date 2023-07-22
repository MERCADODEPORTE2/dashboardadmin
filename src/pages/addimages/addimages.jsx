import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages, postImages, deleteImages } from "../../redux/actions";
import Input from "./input";

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

  const [urlPC, setUrlPC] = useState("");
  const handleImagePC = (label) => {
    if (urlPC !== "") {
      setImagePC({
        ...imagePC,
        image: [...imagePC.image, urlPC],
        name: label,
      });
      setUrlPC("");
    }
  };

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

  const [urlTB, setUrlTB] = useState("");
  const handleImageTB = (label) => {
    if (urlTB !== "") {
      setImageTB({
        ...imageTB,
        image: [...imageTB.image, urlTB],
        name: label,
      });
      setUrlTB("");
    }
  };

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

  const [urlMV, setUrlMV] = useState("");
  const handleImageMV = (label) => {
    if (urlMV !== "") {
      setImageMV({
        ...imageMV,
        image: [...imageMV.image, urlMV],
        name: label,
      });
      setUrlMV("");
    }
  };

  const removeImgMV = (img) => {
    setImageMV({
      ...imageMV,
      image: imageMV.image?.filter((image) => image !== img),
    });
  };

  const send = (state, setState) => {
    let img = {};
    if (state.image.length !== 0 && state.name !== "") {
      img.name = state.name;
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
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className={styles.addimages}>
      <div className={styles.center}>
        <Input
          label={"PC"}
          open={imagePC.open}
          nameOpen={"open"}
          state={imagePC}
          setOpen={setImagePC}
          url={urlPC}
          nameURL={"urlPC"}
          setUrl={setUrlPC}
          handleImageInputChange={handleImagePC}
          arrImg={imagePC.image}
          remove={removeImgPC}
          send={send}
        />
        <Input
          label={"TB"}
          open={imageTB.open}
          nameOpen={"open"}
          state={imageTB}
          setOpen={setImageTB}
          url={urlTB}
          nameURL={"urlTB"}
          setUrl={setUrlTB}
          handleImageInputChange={handleImageTB}
          arrImg={imageTB.image}
          remove={removeImgTB}
          send={send}
        />
        <Input
          label={"MV"}
          open={imageMV.open}
          nameOpen={"open"}
          state={imageMV}
          setOpen={setImageMV}
          url={urlMV}
          nameURL={"urlMV"}
          setUrl={setUrlMV}
          handleImageInputChange={handleImageMV}
          arrImg={imageMV.image}
          remove={removeImgMV}
          send={send}
        />
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

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getImageUrl } from "../../redux/actions";
import Loader from "./loader";
import styles from "./styles.module.css";

const TypeFile = ({ setInput, input, name }) => {
  const dispatch = useDispatch();
  const [imageInputState, setImageInputState] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [loader, setLoader] = useState(false);
  let esto;
  useEffect(() => {
    if (urlImage) {
      esto = dispatch(getImageUrl(urlImage, setInput, input, name));
    }
    esto === undefined ? setLoader(false) : setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 4000);
    // console.log(esto);
  }, [urlImage, dispatch]);

  const handleImageInputChange = async (e) => {
    const inputImg = e.target.files[0];
    await prepareImageToShowAndSend(inputImg);
  };

  const prepareImageToShowAndSend = (inputImg) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(inputImg);
      reader.onloadend = () => {
        setUrlImage(reader.result);
        resolve();
      };
      reader.onerror = () => {
        reject(reader.error);
      };
    });
  };

  return (
    <div className={styles.file}>
      <div className={styles.contentfile}>
        <p>Agregar Imagenes</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          style={{ fill: "#101010" }}
        >
          <path d="M4 5h13v7h2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4V5z"></path>
          <path d="m8 11-3 4h11l-4-6-3 4z"></path>
          <path d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path>
        </svg>
        <input
          type="file"
          className={styles.inputfile}
          value={imageInputState}
          onChange={handleImageInputChange}
        />
      </div>
      {loader ? <Loader /> : null}
    </div>
  );
};

export default TypeFile;

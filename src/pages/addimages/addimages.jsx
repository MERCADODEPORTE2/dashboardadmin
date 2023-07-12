import React, { useState } from "react";
import styles from "./styles.module.css";
import Input from "./input";

const AddImages = () => {
  const [image, setImage] = useState({
    image: [],
    open: false,
  });

  const [url, setUrl] = useState("");
  const handleImageInputChange = () => {
    setImage({
      ...image,
      image: [...image.image, url],
    });
    setUrl("");
  };

  return (
    <div className={styles.addimages}>
      <div className={styles.center}>
        <Input
          label={"agregar url de imagen PC"}
          url={url}
          setUrl={setUrl}
          handleImageInputChange={handleImageInputChange}
        />
        <Input
          label={"agregar url de imagen Tablet"}
          url={url}
          setUrl={setUrl}
          handleImageInputChange={handleImageInputChange}
        />
        <Input
          label={"agregar url de imagen Movil"}
          url={url}
          setUrl={setUrl}
          handleImageInputChange={handleImageInputChange}
        />
      </div>
    </div>
  );
};

export default AddImages;

import axios from "axios";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import Alert from "../components/alert/alert";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const PATCH_PRODUCT = "PATCH_PRODUCT";
export const POST_PRODUCT = "POST_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
// <------->
export const GET_COLORS = "GET_COLORS";
export const GET_TAGS = "GET_TAGS";
export const GET_SIZES = "GET_SIZES";
export const POST_COLORS = "POST_COLORS";
export const POST_TAGS = "POST_TAGS";
export const POST_SIZES = "POST_SIZES";
export const DELETE_COLOR = "DELETE_COLOR";
export const DELETE_TAG = "DELETE_TAG";
export const DELETE_SIZE = "DELETE_SIZE";
// <------->
export const GET_IMAGE_CARRUSEL = "GET_IMAGE_CARRUSEL";
export const POST_IMAGE_CARRUSEL = "POST_IMAGE_CARRUSEL";
export const DELETE_IMAGE_CARRUSEL = "DELETE_IMAGE_CARRUSEL";
// <------->
export const GET_FAQS = "GET_FAQS";
export const POST_FAQS = "POST_FAQS";
export const DELETE_FAQ = "DELETE_FAQ";
// <------->
export const FILTERS = "FILTERS";
export const ORDER = "ORDER";
export const ORDER_BY_SCORE = "ORDER_BY_SCORE";
// <------->
export const GET_USERS = "GET_USERS";
export const GET_CHECK_USER = "GET_CHECK_USER";
export const POST_USER = "POST_USER";
export const DELETE_USER = "DELETE_USER";

export const getProducts = () => {
  return (dispatch) => {
    return axios
      .get(`products`)
      .then((res) => dispatch({ type: GET_PRODUCTS, payload: res.data }))
      .catch((error) => console.error(error));
  };
};

export const getProductByID = (id) => {
  return (dispatch) => {
    return axios
      .get(`products/${id}`)
      .then((res) =>
        dispatch({ type: GET_PRODUCT_BY_ID, payload: res.data[0] })
      )
      .catch((error) => console.error(error));
  };
};

export const patchProduct = (product) => async (dispatch) => {
  try {
    // const userData = JSON.parse(window.localStorage.getItem("user"));
    // const headers = {
    //   // "secret": userData.secret,
    //   email: userData.email,
    // };
    const productPatch = (
      await axios.patch(
        "products",
        product
        //  {
        //   headers,
        // }
      )
    ).data;
    const root = createRoot(document.getElementById("alert"));
    root.render(
      <Alert
        title="Success"
        message="Se ha cambiado con éxito"
        type="success"
      />
    );
  } catch (error) {
    ReactDOM.render(
      <Alert title="Error" message={error} type="danger" />,
      document.getElementById("alert")
    );
  }
};

export const deleteProductById = (id) => async () => {
  try {
    const removedProduct = (await axios.delete(`products/${id}`)).data;
    const root = createRoot(document.getElementById("alert"));
    root.render(
      <Alert
        title="Success"
        message="Se ha eliminado con éxito"
        type="success"
      />
    );
  } catch (error) {
    ReactDOM.render(
      <Alert title="Error" message={error} type="danger" />,
      document.getElementById("alert")
    );
  }
};

export const createProduct = (product) => async (dispatch) => {
  try {
    const newProduct = (await axios.post("products", product)).data;
    dispatch({ type: POST_PRODUCT, payload: newProduct });

    const root = createRoot(document.getElementById("alert"));
    root.render(
      <Alert
        title="Success"
        message="Se ha creado un nuevo producto"
        type="success"
      />
    );
  } catch (error) {
    ReactDOM.render(
      <Alert title="Error" message={error} type="danger" />,
      document.getElementById("alert")
    );
  }
};

// <---------- colors ------------->
export const getColors = () => {
  return async (dispatch) => {
    try {
      const allColors = (await axios.get("colors")).data;
      dispatch({ type: GET_COLORS, payload: allColors });
    } catch (error) {
      console.error(error);
    }
  };
};

export const postColor = (color) => async () => {
  try {
    const newColor = (await axios.post("colors", color)).data;
    // console.log(newColor);
    const root = createRoot(document.getElementById("alert"));
    root.render(
      <Alert title="Success" message="Color creado con éxito" type="success" />
    );
  } catch (error) {
    ReactDOM.render(
      <Alert title="Error" message={error} type="danger" />,
      document.getElementById("alert")
    );
  }
};

export const deleteColor = (id) => async () => {
  try {
    const removedColor = (await axios.delete(`colors/${id}`)).data;
    const root = createRoot(document.getElementById("alert"));
    root.render(
      <Alert
        title="Success"
        message="Color eliminado con éxito"
        type="success"
      />
    );
  } catch (error) {
    ReactDOM.render(
      <Alert title="Error" message={error} type="danger" />,
      document.getElementById("alert")
    );
  }
};

// <---------- tags ------------->

export const getTags = () => {
  return async (dispatch) => {
    try {
      const allTags = (await axios.get("tags")).data;
      dispatch({ type: GET_TAGS, payload: allTags });
    } catch (error) {
      console.error(error);
    }
  };
};

export const postTags = (tag) => async () => {
  try {
    const newTag = (await axios.post("tags", tag)).data;
    const root = createRoot(document.getElementById("alert"));
    root.render(
      <Alert
        title="Success"
        message="Etiqueta creada con éxito"
        type="success"
      />
    );
  } catch (error) {
    ReactDOM.render(
      <Alert title="Error" message={error} type="danger" />,
      document.getElementById("alert")
    );
  }
};

export const deleteTags = (id) => async () => {
  try {
    const removedTag = (await axios.delete(`tags/${id}`)).data;
    const root = createRoot(document.getElementById("alert"));
    root.render(
      <Alert
        title="Success"
        message="Etiqueta eliminada con éxito"
        type="success"
      />
    );
  } catch (error) {
    ReactDOM.render(
      <Alert title="Error" message={error} type="danger" />,
      document.getElementById("alert")
    );
  }
};

// <---------- sizes ------------->

export const getSizes = () => {
  return async (dispatch) => {
    try {
      const allSizes = (await axios.get("sizes")).data;
      dispatch({ type: GET_SIZES, payload: allSizes });
    } catch (error) {
      console.error(error);
    }
  };
};

export const postSizes = (size) => async () => {
  try {
    const newSize = (await axios.post("sizes", size)).data;
    // console.log(newSize);
    const root = createRoot(document.getElementById("alert"));
    root.render(
      <Alert title="Success" message="Talle creado con éxito" type="success" />
    );
  } catch (error) {
    ReactDOM.render(
      <Alert title="Error" message={error} type="danger" />,
      document.getElementById("alert")
    );
  }
};

export const deleteSizes = (id) => async () => {
  try {
    const removedSize = (await axios.delete(`sizes/${id}`)).data;
    const root = createRoot(document.getElementById("alert"));
    root.render(
      <Alert
        title="Success"
        message="Talle eliminado con éxito"
        type="success"
      />
    );
  } catch (error) {
    ReactDOM.render(
      <Alert title="Error" message={error} type="danger" />,
      document.getElementById("alert")
    );
  }
};

// <--------- IMG --------->

export const getImages = (type) => {
  return async (dispatch) => {
    try {
      const allImages = (await axios.get(`images?q=${type}`)).data;
      dispatch({ type: GET_IMAGE_CARRUSEL, payload: allImages });
    } catch (error) {
      console.error(error);
    }
  };
};

export const postImages = (img) => async () => {
  try {
    const newIMG = (await axios.post("images", img)).data;
    // console.log(newColor);
    const root = createRoot(document.getElementById("alert"));
    root.render(
      <Alert title="Success" message="Subida con éxito" type="success" />
    );
  } catch (error) {
    ReactDOM.render(
      <Alert title="Error" message={error} type="danger" />,
      document.getElementById("alert")
    );
  }
};

export const deleteImages = (id) => async () => {
  try {
    const removedImages = (await axios.delete(`images/${id}`)).data;
    const root = createRoot(document.getElementById("alert"));
    root.render(
      <Alert
        title="Success"
        message="Imagen eliminada con éxito"
        type="success"
      />
    );
  } catch (error) {
    ReactDOM.render(
      <Alert title="Error" message={error} type="danger" />,
      document.getElementById("alert")
    );
  }
};

// <--------- FAQS ---------->

export const getFaqs = () => {
  return async (dispatch) => {
    try {
      const allFAQS = (await axios.get("faqs")).data;
      dispatch({ type: GET_FAQS, payload: allFAQS });
    } catch (error) {
      console.error(error);
    }
  };
};

export const postFAQS = (faq) => async () => {
  try {
    const newFaq = (await axios.post("faqs", faq)).data;
    // console.log(newColor);
    const root = createRoot(document.getElementById("alert"));
    root.render(
      <Alert title="Success" message="FAQ creada con éxito" type="success" />
    );
  } catch (error) {
    ReactDOM.render(
      <Alert title="Error" message={error} type="danger" />,
      document.getElementById("alert")
    );
  }
};

export const deleteFaqs = (id) => async () => {
  try {
    const removedFAQ = (await axios.delete(`faqs/${id}`)).data;
    const root = createRoot(document.getElementById("alert"));
    root.render(
      <Alert title="Success" message="FAQ eliminada con éxito" type="success" />
    );
  } catch (error) {
    ReactDOM.render(
      <Alert title="Error" message={error} type="danger" />,
      document.getElementById("alert")
    );
  }
};

// <--------->

export const order = (payload) => ({
  type: ORDER,
  payload,
});

export const orderByScore = (payload) => ({
  type: ORDER_BY_SCORE,
  payload,
});

export const filter = (payload) => ({
  type: FILTERS,
  payload,
});

// <---------- USERS --------->

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const allUsers = (await axios.get("user")).data;
      dispatch({ type: GET_USERS, payload: allUsers });
    } catch (error) {
      console.error(error);
    }
  };
};

export const checkUser = (secret, email) => {
  return async (dispatch) => {
    try {
      const check = (await axios.get(`user/${secret}/${email}`)).data;
      dispatch({ type: GET_CHECK_USER, payload: check });
    } catch (error) {
      ReactDOM.render(
        <Alert title="Error" message={error} type="danger" />,
        document.getElementById("alert")
      );
    }
  };
};

export const postUsers = (user) => async (dispatch) => {
  try {
    const newUser = (await axios.post("user", user)).data;
    dispatch({ type: POST_USER, payload: newUser });
    const root = createRoot(document.getElementById("alert"));
    root.render(
      <Alert
        title="Success"
        message="Usuario creado con éxito"
        type="success"
      />
    );
  } catch (error) {
    ReactDOM.render(
      <Alert title="Error" message={error} type="danger" />,
      document.getElementById("alert")
    );
  }
};

export const deleteUsers = (id) => async () => {
  try {
    const removedUser = (await axios.delete(`user/${id}`)).data;
    const root = createRoot(document.getElementById("alert"));
    root.render(
      <Alert
        title="Success"
        message="Usuario eliminado con éxito"
        type="success"
      />
    );
  } catch (error) {
    ReactDOM.render(
      <Alert title="Error" message={error} type="danger" />,
      document.getElementById("alert")
    );
  }
};

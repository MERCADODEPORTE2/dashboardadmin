import axios from "axios";

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

export const patchProduct = (product) => {
  return (dispatch) => {
    return (
      axios
        .patch(`products`, product)
        .then((res) => dispatch({ type: PATCH_PRODUCT, payload: res.data }))
        // .then((res) => console.log(res))
        .catch((error) => console.error(error))
    );
  };
};

export const deleteProductById = (id) => {
  return (dispatch) => {
    return axios
      .delete(`products/${id}`)
      .then((res) => dispatch({ type: DELETE_PRODUCT, payload: res.data }))
      .catch((error) => console.error(error));
  };
};

export const createProduct = (product) => {
  return (dispatch) => {
    return axios
      .post(`products`, product)
      .then((res) => dispatch({ type: POST_PRODUCT, payload: res.data }))
      .catch((error) => console.error(error));
  };
};

// <---------- colors ------------->
export const getColors = () => {
  return (dispatch) => {
    return axios
      .get(`colors`)
      .then((res) => dispatch({ type: GET_COLORS, payload: res.data }))
      .catch((error) => console.error(error));
  };
};

export const postColor = (color) => {
  return (dispatch) => {
    return axios
      .post(`colors`, color)
      .then((res) => dispatch({ type: POST_COLORS, payload: res.data }))
      .catch((error) => console.error(error));
  };
};

export const deleteColor = (id) => {
  return (dispatch) => {
    return axios
      .delete(`colors/${id}`)
      .then((res) => dispatch({ type: DELETE_COLOR, payload: res.data }))
      .catch((error) => console.error(error));
  };
};

// <---------- tags ------------->
export const getTags = () => {
  return (dispatch) => {
    return axios
      .get(`tags`)
      .then((res) => dispatch({ type: GET_TAGS, payload: res.data }))
      .catch((error) => console.error(error));
  };
};

export const postTags = (tag) => {
  return (dispatch) => {
    return axios
      .post(`tags`, tag)
      .then((res) => dispatch({ type: POST_TAGS, payload: res.data }))
      .catch((error) => console.error(error));
  };
};

export const deleteTags = (id) => {
  return (dispatch) => {
    return axios
      .delete(`tags/${id}`)
      .then((res) => dispatch({ type: DELETE_TAG, payload: res.data }))
      .catch((error) => console.error(error));
  };
};

// <---------- sizes ------------->
export const getSizes = () => {
  return (dispatch) => {
    return axios
      .get(`sizes`)
      .then((res) => dispatch({ type: GET_SIZES, payload: res.data }))
      .catch((error) => console.error(error));
  };
};

export const postSizes = (size) => {
  return (dispatch) => {
    return axios
      .post(`sizes`, size)
      .then((res) => dispatch({ type: POST_SIZES, payload: res.data }))
      .catch((error) => console.error(error));
  };
};

export const deleteSizes = (id) => {
  return (dispatch) => {
    return axios
      .delete(`sizes/${id}`)
      .then((res) => dispatch({ type: DELETE_SIZE, payload: res.data }))
      .catch((error) => console.error(error));
  };
};

// <--------- IMG --------->

export const getImages = (type) => {
  return (dispatch) => {
    return axios
      .get(`images?q=${type}`)
      .then((res) => dispatch({ type: GET_IMAGE_CARRUSEL, payload: res.data }))
      .catch((error) => console.error(error));
  };
};

export const postImages = (img) => {
  return (dispatch) => {
    return axios
      .post(`images`, img)
      .then((res) => dispatch({ type: POST_IMAGE_CARRUSEL, payload: res.data }))
      .catch((error) => console.error(error));
  };
};

export const deleteImages = (id) => {
  return (dispatch) => {
    return axios
      .delete(`images/${id}`)
      .then((res) =>
        dispatch({ type: DELETE_IMAGE_CARRUSEL, payload: res.data })
      )
      .catch((error) => console.error(error));
  };
};

// <------------------->

export const postFAQS = (faq) => {
  return (dispatch) => {
    return axios
      .post(`faqs`, faq)
      .then((res) => dispatch({ type: POST_FAQS, payload: res.data }))
      .catch((error) => console.error(error));
  };
};

export const getFaqs = () => {
  return (dispatch) => {
    return axios
      .get(`faqs`)
      .then((res) => dispatch({ type: GET_FAQS, payload: res.data }))
      .catch((error) => console.error(error));
  };
};

export const deleteFaqs = (id) => {
  return (dispatch) => {
    return axios
      .delete(`faqs/${id}`)
      .then((res) => dispatch({ type: DELETE_FAQ, payload: res.data }))
      .catch((error) => console.error(error));
  };
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

export const getUsers = () => {
  return (dispatch) => {
    return axios
      .get(`user`)
      .then((res) => dispatch({ type: GET_USERS, payload: res.data }))
      .catch((error) => console.error(error));
  };
};

export const postUsers = (user) => {
  return (dispatch) => {
    return axios
      .post(`user`, user)
      .then((res) => dispatch({ type: POST_USER, payload: res.data }))
      .catch((error) => console.error(error));
  };
};

export const deleteUsers = (id) => {
  return (dispatch) => {
    return axios
      .delete(`user/${id}`)
      .then((res) => dispatch({ type: DELETE_USER, payload: res.data }))
      .catch((error) => console.error(error));
  };
};

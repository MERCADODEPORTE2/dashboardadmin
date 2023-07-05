import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const PATCH_PRODUCT = "PATCH_PRODUCT";
export const GET_COLORS = "GET_COLORS";

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
    return axios
      .get(`products`, product)
      .then(
        (res) => console.log(res.data)
        // dispatch({ type: PATCH_PRODUCT, payload: res.data})
      )
      .catch((error) => console.error(error));
  };
};

export const getColors = () => {
  return (dispatch) => {
    return axios
      .get(`colors`)
      .then((res) => dispatch({ type: GET_COLORS, payload: res.data }))
      .catch((error) => console.error(error));
  };
};

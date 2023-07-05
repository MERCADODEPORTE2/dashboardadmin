import { GET_COLORS, GET_PRODUCTS, GET_PRODUCT_BY_ID } from "./actions";

const initialState = {
  products: [],
  detail: {},
  colors: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_COLORS:
      return {
        ...state,
        colors: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;

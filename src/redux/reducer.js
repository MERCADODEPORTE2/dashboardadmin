import {
  GET_COLORS,
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  GET_TAGS,
  GET_SIZES,
  GET_IMAGE_CARRUSEL,
  GET_FAQS,
} from "./actions";

const initialState = {
  products: [],
  detail: {},
  colors: [],
  tags: [],
  sizes: [],
  images: [],
  faqs: [],
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
    case GET_TAGS:
      return {
        ...state,
        tags: action.payload,
      };
    case GET_SIZES:
      return {
        ...state,
        sizes: action.payload,
      };
    case GET_IMAGE_CARRUSEL:
      return {
        ...state,
        images: action.payload,
      };
    case GET_FAQS:
      return {
        ...state,
        faqs: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;

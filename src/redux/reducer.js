import {
  GET_COLORS,
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  GET_TAGS,
  GET_SIZES,
  GET_IMAGE_CARRUSEL,
  GET_FAQS,
  FILTERS,
  ORDER,
  ORDER_BY_SCORE,
  GET_USERS,
} from "./actions";

const initialState = {
  products: [],
  detail: {},
  users: [],
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
    // <-------->
    case ORDER:
      let sort =
        action.payload === "A-z"
          ? state.products.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (b.name > a.name) return -1;
              return 0;
            })
          : state.products.sort(function (a, b) {
              if (a.name > b.name) return -1;
              if (b.name > a.name) return 1;
              return 0;
            });
      return {
        ...state,
        products: sort,
      };
    case ORDER_BY_SCORE:
      let sortScore =
        action.payload === "1-5"
          ? state.products.sort((a, b) => {
              return b.score - a.score;
            })
          : state.products.sort((a, b) => {
              return a.score - b.score;
            });
      return {
        ...state,
        products: sortScore,
      };
    case FILTERS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;

import {
  GET_PRODUCTS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS,
} from "../constants";

export const initialState = {
  loading: true,
  hasErrors: false,
  products: [],
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, loading: true };
    case GET_PRODUCTS_SUCCESS:
      return { products: action.payload, loading: false, hasErrors: false };
    case GET_PRODUCTS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}

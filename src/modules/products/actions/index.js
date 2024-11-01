import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from "../constants";

export const getProducts = () => ({
  type: GET_PRODUCTS,
});

export const getProductsSuccess = (payload) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload,
});

export const getProductsFailure = () => ({ type: GET_PRODUCTS_FAILURE });

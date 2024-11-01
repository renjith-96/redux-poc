import { put, takeLatest } from "redux-saga/effects";
import { GET_PRODUCTS } from "../constants";
import { getProductsFailure, getProductsSuccess } from "../actions";
import { getProducts } from "../services";

// worker Saga: will be fired on GET_PRODUCTS actions
function* fetchProducts(action) {
  try {
    const productData = yield getProducts();
    yield put(getProductsSuccess(productData));
  } catch (e) {
    yield put(getProductsFailure());
  }
}

function* productEffects() {
  yield takeLatest(GET_PRODUCTS, fetchProducts);
}

export default productEffects;

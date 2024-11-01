import {
  ADD_ITEM_TO_CART,
  CLEAR_CART,
  REMOVE_ITEM_FROM_CART,
} from "../constants";

export const initialState = {
  products: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return { ...state, products: [...state.products, action.payload] };
    case REMOVE_ITEM_FROM_CART:
      return { ...state, products: state.products.filter((item) => item.id !== action.payload.id) };
    case CLEAR_CART:
      return { ...state, products: [] };
    default:
      return state;
  }
}

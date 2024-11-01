import {
  ADD_ITEM_TO_CART,
  CLEAR_CART,
  REMOVE_ITEM_FROM_CART,
} from "../constants";

export const addItemTocart = (payload) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload,
  };
};

export const removeItemFromCart = (payload) => ({
  type: REMOVE_ITEM_FROM_CART,
  payload,
});

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

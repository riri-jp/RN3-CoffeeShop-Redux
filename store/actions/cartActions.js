import * as actionTypes from "./types";

export const addItemToCart = item => ({
  type: actionTypes.ADD_ITEM,
  payload: item
});

export const removeItemToCart = item => ({
  type: actionTypes.REMOVE_ITEM,
  payload: item
});

export const checkOutCart = () => ({
  type: actionTypes.CHECKOUT
});

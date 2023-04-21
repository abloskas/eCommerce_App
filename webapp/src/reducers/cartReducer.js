import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cart.find((x) => x.product === item.product);
      if (!!existItem) {
        return {
          ...state,
          cart: state.cart.map((x) => (x.product === existItem ? item : x)),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, item],
        };
      }
    case CART_REMOVE_ITEM:
      break;

    default:
      return state;
  }
};

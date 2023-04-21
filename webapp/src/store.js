import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {productsReducer, singleProductReducer} from './reducers/productReducer';
import { cartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
  products: productsReducer,
  productById: singleProductReducer,
  cart: cartReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cart: {
    cart: cartItemsFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_REQUEST_SUCCESS, PRODUCT_LIST_REQUEST_FAIL, SINGLE_PRODUCT_REQUEST, SINGLE_PRODUCT_REQUEST_SUCCESS, SINGLE_PRODUCT_REQUEST_FAIL} from '../constants/productConstants';

export const productsReducer = (state = {products: []}, action) => {
    switch(action.type) {
        case PRODUCT_LIST_REQUEST:
            return {loading: true, loaded: false, products: []};
        case PRODUCT_LIST_REQUEST_SUCCESS:   
        return {loading: false, loaded: true, products: action.payload.data};
        case PRODUCT_LIST_REQUEST_FAIL:   
        return {loading: false, loaded: true, error: action.payload.error};  
        default:   
        return state;
    }
};

export const singleProductReducer = (state = {product: {}}, action) => {
    switch(action.type) {
        case SINGLE_PRODUCT_REQUEST:
            return {loading: true, loaded: false, ...state};
        case SINGLE_PRODUCT_REQUEST_SUCCESS:   
        return {loading: false, loaded: true, product: action.payload.data};
        case SINGLE_PRODUCT_REQUEST_FAIL:   
        return {loading: false, loaded: true, error: action.payload.error};  
        default:   
        return state;
    }
};
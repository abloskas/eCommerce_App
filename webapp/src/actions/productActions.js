import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_REQUEST_SUCCESS, PRODUCT_LIST_REQUEST_FAIL, SINGLE_PRODUCT_REQUEST, SINGLE_PRODUCT_REQUEST_SUCCESS, SINGLE_PRODUCT_REQUEST_FAIL} from '../constants/productConstants';
import axios from 'axios';

export const allProducts = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST});

        const {data} = await axios.get('/api/products');
        
        dispatch({
            type: PRODUCT_LIST_REQUEST_SUCCESS,
            payload: {
                data: data
            }
        });
    }
    catch(error){
        dispatch({
            type: PRODUCT_LIST_REQUEST_FAIL,
            payload: {
                error: error.response && error.response.data.message ? error.response.data.message : error.message
            }
        });
    }
};

export const productById = (id) => async (dispatch) => {
    try {
        dispatch({type: SINGLE_PRODUCT_REQUEST});

        const {data} = await axios.get(`/api/products/${id}`);
        
        dispatch({
            type: SINGLE_PRODUCT_REQUEST_SUCCESS,
            payload: {
                data: data
            }
        });
    }
    catch(error){
        dispatch({
            type: SINGLE_PRODUCT_REQUEST_FAIL,
            payload: {
                error: error.response && error.response.data.message ? error.response.data.message : error.message
            }
        });
    }
};
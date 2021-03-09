import Axios from 'axios'
import store from './store';


// product loader true

function productLoader() {
    return dispatch => {
        dispatch(productLoading());
    };
}
export const PRODUCT_LOADING = 'PRODUCT_LOADING';
export const productLoading = (products) => {
    return {
        type: PRODUCT_LOADING,
        payload: {}
    }
}

// get skincare products all
export function fetchSkincareProducts(page, productPerPage, category, filter, mob) {
    return dispatch => {
        dispatch(productLoader())

        dispatch(fetchSkincareProductsSuccess({}, 0, {}));

        return {}
    };
}
export const FETCH_SKINCARE_PRODUCTS_SUCCESS = 'FETCH_SKINCARE_PRODUCTS_SUCCESS';
export const fetchSkincareProductsSuccess = (products, numberOfProducts, brands) => ({
    type: FETCH_SKINCARE_PRODUCTS_SUCCESS,
    payload: { products, numberOfProducts, brands }
});

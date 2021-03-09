import Axios from 'axios'
import {
 
} from './actions';

const initialState = {
 

}

export default (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT_LOADING":
      return {
        ...state,
        productLoading: true,
      };
    default:
      return state
  }
}


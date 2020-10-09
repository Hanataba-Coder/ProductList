import axios from 'axios';
import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTDETAIL_REQUEST,
    FETCH_PRODUCTDETAIL_SUCCESS,
    FETCH_PRODUCTDETAIL_FAILURE,
    PRODUCTQUANTITY_INITIAL,
    PRODUCTQUANTITY_PLUS,
    PRODUCTQUANTITY_MINUS
} from './types'

export const initialQuantity = () => {
  return {
    type: PRODUCTQUANTITY_INITIAL,
  }
}

export const plusQuantity = () => {
  return {
    type: PRODUCTQUANTITY_PLUS,
  }
}

export const minusQuantity = () => {
  return {
    type: PRODUCTQUANTITY_MINUS,
  }
}

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsRequest())
        axios.get('https://cc-mock-api.herokuapp.com/product')
            .then(res => {
                if(res.data){
                    console.log(res.data)
                    //store data to redux
                    dispatch(fetchProductsSuccess(res.data))
                }
            })
            .catch(error => {
                console.log(error)
                dispatch(fetchProductsFailure(error.message))
            })
    }
}

export const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST
    }
}

export const fetchProductsSuccess = users => {
    return {
      type: FETCH_PRODUCTS_SUCCESS,
      payload: users
    }
  }
  
  export const fetchProductsFailure = error => {
    return {
      type: FETCH_PRODUCTS_FAILURE,
      payload: error
    }
  }

  export const fetchProductDetail = id => {
    return (dispatch) => {
        dispatch(fetchProductDetailRequest())
        axios.get('https://cc-mock-api.herokuapp.com/product/' + id)
            .then(res => {
                if(res.data){
                    console.log(res.data)
                    //store data to redux
                    dispatch(fetchProductDetailSuccess(res.data))
                }
            })
            .catch(error => {
                console.log(error)
                dispatch(fetchProductDetailFailure(error.message))
            })
    }
}

  export const fetchProductDetailRequest = () => {
    return {
        type: FETCH_PRODUCTDETAIL_REQUEST
    }
}

export const fetchProductDetailSuccess = users => {
    return {
      type: FETCH_PRODUCTDETAIL_SUCCESS,
      payload: users
    }
  }
  
  export const fetchProductDetailFailure = error => {
    return {
      type: FETCH_PRODUCTDETAIL_FAILURE,
      payload: error
    }
  }
  
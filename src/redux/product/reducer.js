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
  
  const initialState = {
    products: {
      loading: false,
      products: [],
      error: '',
    },
    detail: {
      loadingDetail: false,
      detail: {},
      errorDetail: '',
      quantity: 1
    }
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
        return {
          ...state,
          products: {
            ...state.products,
            loading: true
          }
        }
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          products: {
            ...state.products,
            loading: false,
            products: action.payload,
            error: ''
          }
        }
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          products: {
            ...state.products,
            loading: false,
            products: [],
            error: action.payload
          }
        }
      case FETCH_PRODUCTDETAIL_REQUEST:
        return {
          ...state,
          detail: {
            ...state.detail,
            loadingDetail: true
          }
        }
      case FETCH_PRODUCTDETAIL_SUCCESS:
        return {
          ...state,
          detail: {
            ...state.detail,
            loadingDetail: false,
            detail: action.payload,
            errorDetail: ''
          }
        }
      case FETCH_PRODUCTDETAIL_FAILURE:
        return {
          ...state,
          detail: {
            ...state.detail,
            loadingDetail: false,
            detail: [],
            errorDetail: action.payload
          }
        }
      case PRODUCTQUANTITY_INITIAL:
        return {
          ...state,
          detail: {
            ...state.detail,
            quantity: 1
          }
        }
      case PRODUCTQUANTITY_PLUS:
        return {
          ...state,
          detail: {
            ...state.detail,
            quantity: state.detail.quantity + 1
          }
        }
      case PRODUCTQUANTITY_MINUS:
        return {
          ...state,
          detail: {
            ...state.detail,
            quantity: state.detail.quantity === 0 ? 0 : state.detail.quantity - 1
          }
        }
      default: return state
    }
  }
  
  export default reducer
  
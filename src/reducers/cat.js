import {
    ADOPT_CATS_REQUEST,
    ADOPT_CATS_ERROR,
    ADOPT_CATS_SUCCESS,
    FETCH_CATS_REQUEST,
    FETCH_CATS_ERROR,
    FETCH_CATS_SUCCESS
  } from '../actions/cat';
  
  const initialState = {
    data: null,
    error: null,
    loading: false
  };
  
  export default (state=initialState, action) => {
    if (action.type === FETCH_CATS_REQUEST) {
      return Object.assign({}, state, {
        error: null,
        loading: true
      });
    }
  
    if (action.type === FETCH_CATS_ERROR) {
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      });
    }
  
    if (action.type === FETCH_CATS_SUCCESS) {
      return Object.assign({}, state, {
        data: action.data,
        loading: false
      });
    }
  
    if (action.type === ADOPT_CATS_REQUEST) {
      return Object.assign({}, state, {
        error: null,
        loading: true
      });
    }
  
    if (action.type === ADOPT_CATS_ERROR) {
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      });
    }
  
    if (action.type === ADOPT_CATS_SUCCESS) {
      return Object.assign({}, state, {
        data: null,
        loading: false
      });
    }
  
    return state;
  };
  
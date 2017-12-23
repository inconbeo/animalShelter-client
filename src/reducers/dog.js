import {
    ADOPT_DOGS_REQUEST,
    ADOPT_DOGS_ERROR,
    ADOPT_DOGS_SUCCESS,
    FETCH_DOGS_REQUEST,
    FETCH_DOGS_ERROR,
    FETCH_DOGS_SUCCESS
  } from '../actions/dog';
  
  const initialState = {
    data: null,
    error: null,
    loading: false
  };
  
  export default (state=initialState, action) => {
    if (action.type === FETCH_DOGS_REQUEST) {
      return Object.assign({}, state, {
        error: null,
        loading: true
      });
    }
  
    if (action.type === FETCH_DOGS_ERROR) {
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      });
    }
  
    if (action.type === FETCH_DOGS_SUCCESS) {
      return Object.assign({}, state, {
        data: action.data,
        loading: false
      });
    }
    if (action.type === ADOPT_DOGS_REQUEST) {
      return Object.assign({}, state, {
        error: null,
        loading: true
      });
    }
  
    if (action.type === ADOPT_DOGS_ERROR) {
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      });
    }
  
    if (action.type === ADOPT_DOGS_SUCCESS) {
      return Object.assign({}, state, {
        data: null,
        loading: false
      });
    }
  
    return state;
  };
  
  
  
  
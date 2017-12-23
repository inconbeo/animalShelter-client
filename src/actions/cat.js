import { REACT_APP_API_BASE_URL } from '../config';
/// --------------------------- GETTING A CAT ----------------------------- ///
export const fetchCats = () => dispatch => {
    console.log('fetching a cat');
    dispatch(fetchCatsRequest());

    fetch(`${REACT_APP_API_BASE_URL}/cat`)
        .then(res => {
            if (!res.ok) {
                console.log('error fetching cat')
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then((data) => {
            console.log('Got cat');
            console.log(data);
            dispatch(fetchCatsSuccess(data));
        })
        .catch(error => fetchCatsError(error))
}

export const FETCH_CATS_REQUEST = 'FETCH_CATS_REQUEST';
export const fetchCatsRequest = () => ({
    type: FETCH_CATS_REQUEST
})

export const FETCH_CATS_ERROR = 'FETCH_CATS_ERROR';
export const fetchCatsError = error => ({
    error,
    type: FETCH_CATS_ERROR
})

export const FETCH_CATS_SUCCESS = 'FETCH_CATS_SUCCESS';
export const fetchCatsSuccess = data => ({
    data,
    type: FETCH_CATS_SUCCESS
})


///-------------------DELETING A CAT-----------------------------//
export const adoptCat = () => dispatch => {
    console.log('adopt cat');
    dispatch(adoptCatsRequest());
    
    fetch(`${REACT_APP_API_BASE_URL}/cat`, { method: 'DELETE' })
      .then(res => {
        if (!res.ok) {
          console.log('error adopting cat');
          return Promise.reject(res.statusText);
        }
        return res.statusText;
      })
      .then(cat => {
        console.log('dispatching adoptCatSuccess');
        dispatch(adoptCatsSuccess());
      })
      .then(() => 
        dispatch(fetchCats())
      )
      .catch(error => adoptCatsError(error));
  };

  export const ADOPT_CATS_REQUEST = 'ADOPT_CATS_REQUEST';
  export const adoptCatsRequest = () => ({
      type: ADOPT_CATS_REQUEST
  })

  export const ADOPT_CATS_ERROR = 'ADOPT_CATS_ERROR';
  export const adoptCatsError = () => ({
      type: ADOPT_CATS_ERROR
  })

  export const ADOPT_CATS_SUCCESS = 'ADOPT_CATS_SUCCESS';
  export const adoptCatsSuccess = () => ({
      type: ADOPT_CATS_SUCCESS
  })
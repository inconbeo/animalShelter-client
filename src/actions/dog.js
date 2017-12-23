import { REACT_APP_API_BASE_URL } from '../config';
/// --------------------------- GETTING A DOG ----------------------------- ///
export const fetchDogs = () => dispatch => {
    console.log('fetching a dog');
    dispatch(fetchDogsRequest());

    fetch(`${REACT_APP_API_BASE_URL}/dog`)
        .then(res => {
            if (!res.ok) {
                console.log('error fetching cat')
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(dog => {
            console.log('Got dog');
            console.log(dog);
            dispatch(fetchDogsSuccess(dog));
        })
        .catch(error => fetchDogsError(error))
}

export const FETCH_DOGS_REQUEST = 'FETCH_DOGS_REQUEST';
export const fetchDogsRequest = () => ({
    type: FETCH_DOGS_REQUEST
})

export const FETCH_DOGS_ERROR = 'FETCH_DOGS_ERROR';
export const fetchDogsError = error => ({
    error,
    type: FETCH_DOGS_ERROR
})

export const FETCH_DOGS_SUCCESS = 'FETCH_DOGS_SUCCESS';
export const fetchDogsSuccess = data => ({
    data,
    type: FETCH_DOGS_SUCCESS
})

///-------------------DELETING A DOG-----------------------------//
export const adoptDog = () => dispatch => {
    console.log('adopt cat');
    dispatch(adoptDogsRequest());
    
    fetch(`${REACT_APP_API_BASE_URL}/dog`, { method: 'DELETE' })
      .then(res => {
        if (!res.ok) {
          console.log('error adopting cat');
          return Promise.reject(res.statusText);
        }
        return res.statusText;
      })
      .then(cat => {
        console.log('dispatching adoptDogSuccess');
        dispatch(adoptDogsSuccess());
      })
      .then(() => 
        dispatch(fetchDogs())
      )
      .catch(error => adoptDogsError(error));
  };

  export const ADOPT_DOGS_REQUEST = 'ADOPT_DOGS_REQUEST';
  export const adoptDogsRequest = () => ({
      type: ADOPT_DOGS_REQUEST
  })

  export const ADOPT_DOGS_ERROR = 'ADOPT_DOGS_ERROR';
  export const adoptDogsError = () => ({
      type: ADOPT_DOGS_ERROR
  })

  export const ADOPT_DOGS_SUCCESS = 'ADOPT_DOGS_SUCCESS';
  export const adoptDogsSuccess = () => ({
      type: ADOPT_DOGS_SUCCESS
  })
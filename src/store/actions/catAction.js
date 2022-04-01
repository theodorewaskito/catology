import { 
  SET_LOADING,
  SET_ERROR,
  SET_CATS,
  SET_CAT
} from "../actionType";

const baseUrl = 'https://api.thecatapi.com/v1'

export function setLoading(payload) {
  return {
    type: SET_LOADING,
    payload: payload 
  }
}

export function setError(payload) {
  return {
    type: SET_ERROR,
    payload: payload 
  }
}

export function setCats(payload) {
  return {
    type: SET_CATS,
    payload: payload 
  }
}

export function setCat(payload) {
  return {
    type: SET_CAT,
    payload: payload 
  }
}

export function getCats() {
  return function(dispatch) {
    dispatch(setLoading(true))
    fetch(`${baseUrl}/breeds`)
      .then(res => res.json())
      .then(data => {
        dispatch(setCats(data))
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}

export function searchCat(query) {
  return function(dispatch) {
    dispatch(setLoading(true))
    fetch(`${baseUrl}/breeds/search?q=${query}`)
      .then(res => res.json())
      .then(data => {
        dispatch(setCats(data))
        console.log(data, 'search');
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}





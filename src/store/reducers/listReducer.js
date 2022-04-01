import { 
  SET_LOADING,
  SET_ERROR,
  SET_CATS,
  SET_CAT
} from "../actionType";

const initialState = {
  isLoading: false,
  isError: false,
  cats: [],
  cat: {}
}

function  reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return { ...state, isLoading: payload }
    case SET_ERROR:
      return { ...state, isError: payload }
    case SET_CATS:
      return { ...state, cats: payload }
    case SET_CAT:
      return { ...state, cat: payload }
    default:
      return state
  }
}

export default reducer
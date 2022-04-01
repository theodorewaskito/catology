import { combineReducers } from "redux";
import listReducer from "./listReducer";

const reducer = combineReducers({
  listState: listReducer
});

export default reducer;

//Combinar reducers
import { combineReducers } from "redux";
import darkModeReducer from "./darkModeReducer";
import reducer from "./reducer";

const rootReducer = combineReducers({
  darkModeReducer: darkModeReducer,
  reducer: reducer,
});

export default rootReducer;

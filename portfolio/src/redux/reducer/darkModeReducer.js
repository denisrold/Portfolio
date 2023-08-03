import { initialDarkMode } from "./initialState";
import TOGGLE_DARK_MODE from "../actions/actions-types";

//reducer darkmode handler
const darkModeReducer = (state = initialDarkMode, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export default darkModeReducer;

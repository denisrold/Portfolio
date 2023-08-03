import TOGGLE_DARK_MODE from "../actions/actions-types";
import initialState from "./initialState";

//reducer darkmode handler
const darkModeReducer = (state = initialState, action) => {
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

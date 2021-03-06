import { UserActionsTypes } from "./types";



const initialState = {
  currentUser: null,
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case UserActionsTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducers;

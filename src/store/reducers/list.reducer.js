import { listTypes } from "../types/list.types";

const { ADD_USER } = listTypes;

const initialState = {
  userList: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        userList: [...state.userList, action.payload],
      };
    default:
      return state;
  }
};

export default listReducer;

import { listTypes } from "../types";

const { ADD_USER } = listTypes;

export const addUser = (newUser) => ({
  type: ADD_USER,
  payload: newUser,
});

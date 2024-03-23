import { QUESTION } from "./actionType";

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case QUESTION:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default dataReducer;

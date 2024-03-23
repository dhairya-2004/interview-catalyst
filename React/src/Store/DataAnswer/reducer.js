import { ANSWER } from "./actionType";

const dataReducer = (state = [{ question: "", answer: "" }], action) => {
  switch (action.type) {
    case ANSWER:
      return [...state, { answer: action.payload }];
    default:
      return state;
  }
};

export default dataReducer;

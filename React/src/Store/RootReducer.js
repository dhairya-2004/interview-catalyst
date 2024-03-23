import dataQuestion from "./DataQuestion/reducer";
import dataAnswer from "./DataAnswer/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  dataQuestion: dataQuestion,
  dataAnswer: dataAnswer,
});

export default rootReducer;

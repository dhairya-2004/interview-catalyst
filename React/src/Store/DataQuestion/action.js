import { QUESTION } from "./actionType";

export const sendQuestion = (question) => ({
  type: QUESTION,
  payload: { question },
});



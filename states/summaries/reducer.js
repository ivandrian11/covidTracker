import { ActionType } from "./action";

function summariesReducer(data = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_SUMMARIES:
      return action.payload.data;
    default:
      return data;
  }
}

export default summariesReducer;

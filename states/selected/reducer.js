import { ActionType } from "./action";

function selectedReducer(data = null, action = {}) {
  switch (action.type) {
    case ActionType.CHANGE_DATA:
      return action.payload.data;
    default:
      return data;
  }
}

export default selectedReducer;

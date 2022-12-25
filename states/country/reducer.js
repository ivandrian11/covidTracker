import { ActionType } from "./action";

function countryReducer(data = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_COUNTRY:
      return action.payload.data;
    default:
      return data;
  }
}

export default countryReducer;

import { showLoading, hideLoading } from "react-redux-loading-bar";
import api from "../../utils/api";

const ActionType = {
  RECEIVE_SUMMARIES: "RECEIVE_SUMMARIES",
};

function receiveSummaries(data) {
  return {
    type: ActionType.RECEIVE_SUMMARIES,
    payload: {
      data,
    },
  };
}

function asyncReceiveSummaries() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const data = await api.getSummaries();

      dispatch(receiveSummaries(data));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export { ActionType, asyncReceiveSummaries };

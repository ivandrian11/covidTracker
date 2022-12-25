import { showLoading, hideLoading } from "react-redux-loading-bar";
import api from "../../utils/api";

const ActionType = {
  RECEIVE_COUNTRY: "RECEIVE_COUNTRY",
};

function receiveCountry(data) {
  return {
    type: ActionType.RECEIVE_COUNTRY,
    payload: {
      data,
    },
  };
}

function asyncReceiveCountry(slug) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const data = await api.getCountryData(slug);

      dispatch(receiveCountry(data));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export { ActionType, asyncReceiveCountry };

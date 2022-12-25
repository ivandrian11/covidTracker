const ActionType = {
  CHANGE_DATA: "CHANGE_DATA",
};

function changeData(data) {
  return {
    type: ActionType.CHANGE_DATA,
    payload: {
      data,
    },
  };
}

export { ActionType, changeData };

import * as constant from "../constants";

export const addWeightData = (data) => {
  return (dispatch) => {
    dispatch({
      type: constant.ADD_WEIGHT_DATA,
      payload: data,
    });
  };
};
export const updateWeightData = (data) => {
  return (dispatch) => {
    dispatch({
      type: constant.UPDATE_WEIGHT_DATA,
      payload: data,
    });
  };
};

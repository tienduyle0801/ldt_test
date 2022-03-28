import * as constant from "../constants";
import moment from "moment";

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
export const deleteWeightData = (data) => {
  return (dispatch) => {
    dispatch({
      type: constant.DELETE_WEIGHT_DATA,
      payload: data,
    });
  };
};
export const fetchWeightData = () => {
  return (dispatch) => {
    fetch("https://623a84db5f037c1362187c82.mockapi.io/api/weight-list")
      .then((response) => response.json())
      .then((response) => {
        dispatch({ type: constant.DATA_FETCH_SUCCESS });
        dispatch({
          type: constant.DATA_FETCH,
          payload: response.map((item) => ({
            ...item,
            date: moment(item.date).format("DD/MM/YYYY"),
          })),
        });
      })
      .catch((error) => {
        dispatch({
          type: constant.DATA_FETCH_FAILURE,
        });
      });
  };
};

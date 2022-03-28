import * as constant from "../constants";
const initialState = [
  { date: "01/03/2022", mor: 80.1, eve: 80.5 },
  { date: "02/03/2022", mor: 79.1, eve: 81.5 },
  { date: "03/03/2022", mor: 80, eve: 82 },
  { date: "04/03/2022", mor: 78, eve: 79 },
  { date: "05/03/2022", mor: 79.8, eve: 81.4 },
  { date: "06/03/2022", mor: 80.1, eve: 82 },
  { date: "07/03/2022", mor: 80.1, eve: 82 },
  { date: "08/03/2022", mor: 80, eve: 81 },
  { date: "09/03/2022", mor: 83, eve: 81 },
  { date: "10/03/2022", mor: 82.2, eve: 81 },
];

const weightDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.ADD_WEIGHT_DATA:
      return [...state, action.payload];
    case constant.UPDATE_WEIGHT_DATA:
      const arrayData = [...state];
      const getIndexData = arrayData
        .map((e, i) => (e.date === action.payload.date ? i : ""))
        .filter(String);
      console.log(getIndexData);
      getIndexData.map((item) => {
        arrayData[item] = {
          ...arrayData[item],
          mor: Number(action.payload.mor),
          eve: Number(action.payload.eve),
        };
      });
      console.log(state);
      return arrayData;
    case constant.DELETE_WEIGHT_DATA:
      state = state.filter((x, index) => index !== action.payload);
      const newArray = [...state];
      return newArray;
    default:
      return state;
  }
};

export default weightDataReducer;

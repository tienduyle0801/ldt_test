import "../styles/Input.scss";
import { useState } from "react";
import { connect } from "react-redux";
import { addWeightData, updateWeightData } from "../actions/weight-data-action";

const Input = (props) => {
  const [date, setDate] = useState("");
  const [mor, setMor] = useState("");
  const [eve, setEve] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!mor || !eve || !date) {
      setError(true);
      return;
    }
    const checkDate = props.weightData.filter((x) => x.date === date);
    if (checkDate.length && date) {
      props.updateWeightData({ date, mor, eve });
    } else {
      props.addWeightData({
        date,
        mor: Number(mor),
        eve: Number(eve),
      });
    }
  };

  return (
    <div className="input-container">
      <form className="">
        <label className="input-label">Date</label>
        <input
          className="input-date"
          placeholder="input date"
          onChange={(e) => setDate(e.target.value)}
          required
        ></input>
        <div className="error-date">
          {error && !date && "Please type your Date"}
        </div>
        <label className="input-label">Morning</label>
        <input
          className="input-mor"
          type="number"
          placeholder="input morning"
          onChange={(e) => setMor(e.target.value)}
        ></input>
        <div className="error-mor">
          {error && !mor && "Please type your Weight Morning"}
        </div>
        <label className="input-label">Evening</label>
        <input
          className="input-eve"
          type="number"
          placeholder="input evening"
          onChange={(e) => setEve(e.target.value)}
        ></input>
        <div className="error-eve">
          {error && !eve && "Please type your Weight Evening"}
        </div>
        <button className="button-submit" type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    weightData: state.weightData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addWeightData: (data) => dispatch(addWeightData(data)),
    updateWeightData: (data) => dispatch(updateWeightData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);

import "../styles/Demo.scss";
import ConfirmPopup from "./popup-confirm";
import { useState } from "react";
import { connect } from "react-redux";
import { deleteWeightData } from "../actions/weight-data-action";
import moment from "moment";

const Item = (props) => {
  const [visible, setVisible] = useState(false);

  const handleDelete = () => {
    setVisible(true);
  };
  const handleOnAction = (data) => {
    if (data) {
      props.deleteWeightData(props.indexItem);
      setVisible(!data);
    } else {
      setVisible(data);
    }
  };

  return (
    <>
      <div className="container item">
        <div className="weight-date">
          {props.data.date}
          {/* {moment//format("DD/MM/YYYY , H:MM:SS A") */}
        </div>
        <div className="group-right">
          <div className="weight-mor">{props.data.mor}/</div>
          <div className="weight-eve">{props.data.eve}</div>
        </div>
        <button className="weight-delete" onClick={handleDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </button>
      </div>
      {visible ? (
        <ConfirmPopup
          content="Are you sure you want to delete ?"
          onAction={handleOnAction}
        />
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    weightData: state.weightData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteWeightData: (data) => dispatch(deleteWeightData(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Item);

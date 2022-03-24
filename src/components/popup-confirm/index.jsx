import "../../styles/confirmPopup.scss";
const ConfirmPopup = ({ content, onAction }) => {
  return (
    <div className="popup-mask">
      <div className="popup">
        <div> {content} </div>
        <button className="delete" onClick={() => onAction(true)}>
          Yes
        </button>
        <button className="cancel" onClick={() => onAction(false)}>
          No
        </button>
      </div>
    </div>
  );
};

export default ConfirmPopup;

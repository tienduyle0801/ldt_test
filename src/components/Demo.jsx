import "../styles/Demo.scss";

const Item = (props) => {
  return (
    <div className="container">
      <div className="weight-date">{props.data.date}</div>
      <div className="weight-mor">{props.data.mor}/</div>
      <div className="weight-eve">{props.data.eve}</div>
    </div>
  );
};
export default Item;

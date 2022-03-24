import "./App.css";
import { connect } from "react-redux";
import Item from "./components/Demo";
import Input from "./components/Input";

function App(props) {
  return (
    <div className="container-wrapper">
      <Input />
      {props.weightData.map((items, i) => (
        <Item key={i} data={items} indexItem={i}></Item>
      ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    weightData: state.weightData,
  };
};

export default connect(mapStateToProps)(App);

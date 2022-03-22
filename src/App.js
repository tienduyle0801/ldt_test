import "./App.css";
import { connect } from "react-redux";
import Item from "./components/Demo";
import Input from "./components/Input";

function App(props) {
  return (
    <>
      <Input />
      {props.weightData.map((items, i) => (
        <Item key={i} data={items}></Item>
      ))}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    weightData: state.weightData,
  };
};

export default connect(mapStateToProps)(App);

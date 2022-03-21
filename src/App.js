import "./App.css";
import { connect } from "react-redux";
import Item from "./components/Demo";

function App(props) {
  return props.weightData.map((items, i) => <Item key={i} data={items} />);
}
const mapStateToProps = (state) => {
  return {
    weightData: state.weightData,
  };
};

export default connect(mapStateToProps)(App);

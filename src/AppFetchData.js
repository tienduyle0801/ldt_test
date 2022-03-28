import "./App.css";
import Item from "./components/Item";
import Input from "./components/Input";
import { useEffect } from "react";
import { fetchWeightData } from "./actions/weight-data-action";
import { connect } from "react-redux";

function AppFetchData(props) {
  useEffect(() => {
    props.fetchWeightData();
  }, []);

  return (
    <div className="container-wrapper">
      <Input />
      {props.weightData.length ? (
        props.weightData.map((items, i) => (
          <Item key={i} data={items} indexItem={i}></Item>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    weightData: state.weightData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchWeightData: () => dispatch(fetchWeightData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AppFetchData);

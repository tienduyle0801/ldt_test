import "./App.css";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchWeightData,
  deleteWeightData,
} from "./actions/weight-data-action";
import Item from "./components/Item";
import Input from "./components/Input";
import PopupConfirm from "./components/popup-confirm/index";

function App({ weightData, deleteWeightData, fetchWeightData }) {
  const [visible, setVisible] = useState(false);
  const [itemToDelete, setItemToDelete] = useState();

  useEffect(() => {
    fetchWeightData();
  }, []);

  const handleDelete = (indexItem) => {
    setVisible(true);
    setItemToDelete(indexItem);
  };

  const handleAction = (data) => {
    if (data) {
      deleteWeightData(itemToDelete);
      setVisible(!data);
    } else {
      setVisible(data);
    }
  };

  return (
    <>
      <div className="container-wrapper">
        <Input />
        {weightData.map((items, i) => (
          <Item
            key={i}
            data={items}
            indexItem={i}
            onDelete={handleDelete}
          ></Item>
        ))}
      </div>

      {visible ? (
        <PopupConfirm
          content="Are you sure want to delete this ?"
          onAction={handleAction}
        />
      ) : null}
    </>
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
    deleteWeightData: (data) => dispatch(deleteWeightData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

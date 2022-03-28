import "./App.css";
import { useState } from "react";
import { connect } from "react-redux";
import { deleteWeightData } from "./actions/weight-data-action";
import Item from "./components/Item";
import Input from "./components/Input";
import PopupConfirm from "./components/popup-confirm";

function App(props) {
  const [visible, setVisible] = useState(false);
  const [itemToDelete, setItemToDelete] = useState();

  const handleDelete = (indexItem) => {
    setVisible(true);
    setItemToDelete(indexItem);
    console.log(indexItem);
  };

  const handleAction = (data) => {
    if (data) {
      props.deleteWeightData(itemToDelete);
      setVisible(!data);
    } else {
      setVisible(data);
    }
  };

  return (
    <>
      <div className="container-wrapper">
        <Input />
        {props.weightData.map((items, i) => (
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
    deleteWeightData: (data) => dispatch(deleteWeightData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

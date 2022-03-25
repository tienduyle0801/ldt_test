import "./App.css";
import Item from "./components/Demo";
import Input from "./components/Input";
import { useEffect, useState } from "react";

function AppFetchData() {
  const [weightData, setWeightData] = useState([]);

  useEffect(() => {
    fetch("https://623a84db5f037c1362187c82.mockapi.io/api/weight-list")
      .then((res) => res.json())
      .then((response) => {
        setWeightData(response);
      });
  }, []);

  return (
    <div className="container-wrapper">
      <Input />
      {weightData.map((items, i) => (
        <Item key={i} data={items} indexItem={i}></Item>
      ))}
    </div>
  );
}

export default AppFetchData;

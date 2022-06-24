import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { getCities, getAddressList } from "./utils/ApiActions";

import "./App.css";

const App = () => {
  const [cities, setCities] = useState([]);
  const [addressList, setAddressList] = useState([]);

  const handleNewAddress = (newAddress) => {
    setAddressList([...addressList, newAddress]);
  };

  const handleEdit = (event) => {
    console.log(event.currentTarget.id);
  };
  const handleDelete = (event) => {
    console.log(event.currentTarget.id);
  };

  useEffect(() => {
    getCities().then((res) => {
      setCities(res.data);
    });
    getAddressList().then((res) => {
      console.log(res);
      setAddressList(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Form cities={cities} handleNewAddress={handleNewAddress} />

      <div className="divider" />
      <List
        addressList={addressList}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default App;

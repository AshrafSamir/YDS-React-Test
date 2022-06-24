import React from "react";
import Form from "./components/Form";
import List from "./components/List";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>YDS - Task</h1>

      <Form />

      <div className="divider" />
      <List />
    </div>
  );
};

export default App;

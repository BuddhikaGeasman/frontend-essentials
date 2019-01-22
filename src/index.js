import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const myTable = [...Array(5).keys()]; //need to have 5 columns

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div className="table">
        {myTable.map((column, idx) => (
          <div>Column {idx + 2}</div>
        ))}
      </div>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

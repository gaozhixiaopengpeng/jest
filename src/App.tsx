import React from "react";
import Hello from "./components/Hello";

const App = () => {
  return (
    <div style={{ padding: "18px" }}>
      <Hello type="small" title="Hello React" />
      <Hello type="large" title="Hello Vue" />
    </div>
  );
};

export default App;

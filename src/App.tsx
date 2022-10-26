import React from "react";
import { RecoilRoot } from "recoil";
import { RouterConfig } from "router/RouterConfig";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <RouterConfig />
      </RecoilRoot>
    </div>
  );
}

export default App;

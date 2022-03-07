import React from "react";
import Home from "./components/Home";
import Milestones from "./components/Milestones";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Home />
      <Services />
      <Portfolio />
      <Milestones />
    </div>
  );
}

export default App;

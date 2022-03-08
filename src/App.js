import React from "react";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Testimonials from "./components/Testimonials";
import Milestones from "./components/Milestones";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Video from "./components/Video";

function App() {
  return (
    <div>
      <Home />
      <Services />
      <Portfolio />
      <Milestones />
      <Blog />
      <Video />
      <Pricing />
      <Testimonials />
    </div>
  );
}

export default App;

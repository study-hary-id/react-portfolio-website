import React from "react";
import { motion } from "framer-motion";

import Blog from "./components/Blog";
import Home from "./components/Home";
import Testimonials from "./components/Testimonials";
import Milestones from "./components/Milestones";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Skills from "./components/Skills";
import Video from "./components/Video";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <Home />
      <Services />
      <Portfolio />
      <Milestones />
      <Blog />
      <Video />
      <Pricing />
      <Testimonials />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </motion.div>
  );
}

export default App;

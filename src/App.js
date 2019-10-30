import React from "react";
import { Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import Banner from "./components/Banner.js";
import ProjectList from "./components/ProjectList.js";

import "./App.scss";
import ContactForm from "./components/ContactForm.js";

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <Route path="/" component={Banner} />
      </ParallaxProvider>
      <ProjectList />
      <ContactForm />
    </div>
  );
}

export default App;

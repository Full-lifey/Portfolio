// import React from 'react';
// import logo from './logo.svg';
// import { Route, Routes } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import Banner from "./Banner/Banner";
import ProjectList from "./ProjectList/ProjectList";

import "./App.css";
// import ContactForm from "./components/ContactForm.js";

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <Banner />
      </ParallaxProvider>
      <ProjectList />
      {/* <ContactForm /> */}
    </div>
  );
}

export default App;

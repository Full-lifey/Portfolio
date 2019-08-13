import React from 'react';
import { Route } from 'react-router-dom';

import Banner from './components/Banner.js';
import ProjectList from './components/ProjectList.js';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <Banner />
      <ProjectList />
    </div>
  );
}

export default App;

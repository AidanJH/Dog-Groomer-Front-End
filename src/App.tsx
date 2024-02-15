import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavBar, Header} from './components'
import { Home } from './pages';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () =>{
  const userRole = "User"
  return (
    <div className="App">
      <NavBar userRole={userRole} />
      <Header/>
      <Home/>
    </div>
  );
}

export default App;

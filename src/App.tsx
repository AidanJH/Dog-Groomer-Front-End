import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { NavBar, Header } from './components'
import { Home, Marketplace } from './pages';
import { Route, Routes } from "react-router-dom";


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () =>{
  const userRole = "User"
  return (
    <>
      <NavBar userRole={userRole} />
      <Header/>


      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/marketplace" element={<Marketplace/>}/>

      </Routes>
    </>
  );
}

export default App;

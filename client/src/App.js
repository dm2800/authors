import './App.css';
import React, {useEffect} from "react";
import './App.css';
import axios from "axios";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import AllAuthors from './components/AllAuthors';
import NewAuthor from './components/NewAuthor';
import EditAuthor from './components/EditAuthor';
import Error from './components/Error';
import OneAuthor from './components/OneAuthor';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route element = {<AllAuthors/>} path="/"/>
        <Route element = {<NewAuthor/>} path="/new"/>
        <Route element = {<OneAuthor/>} path="/authors/:id"/>
        <Route element = {<Error/>} path = "/error"/>
        <Route element = {<EditAuthor/>} path="/edit/:id"/>
      </Routes>
    </div>
    </BrowserRouter> 
  );
}

export default App;

import './App.css';

import {BrowserRouter as Router, Routes, Link, Route} from "react-router-dom";

import React from 'react'

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import User_profile from "./components/User_profile/User_profile";
import Edit_profile from "./components/User_profile/Edit_profile";




function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
              <Routes>
                  <Route path="/" exact element={<Login />} />
                  <Route path="/Register" exact element={<Register />}/>
                  <Route path="/Register" exact element={<Register />}/>
                  <Route path="/User_profile" exact element={<User_profile/>}/>
                  <Route path="/Edit_profile" exact element={<Edit_profile/>}/>
              </Routes>
          </Router>
          {/*           <Router>
                <Routes>
                  <Route path='/'>
                      <Login/>
                  </Route>

                  <Route path='/Register'>
                      <Register/>
                  </Route>
                </Routes>
          </Router>*/}

{/*
  <Login/>
           <Register/>
*/}

      </header>
    </div>
  );
}

export default App;

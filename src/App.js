import React, { Component, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
  withRouter
} from 'react-router-dom';

import Analysis from './pages/analysis/Analysis';
import Supplies from "./pages/supplies/Supplies";
import Budgets from "./pages/budgets/Budgets";
import UserGuide from "./pages/userGuide/UserGuide";
import Home from "./pages/home/Home";
import Navbar from "./pages/components/navbar/NavBar";
import Start from "./pages/starting/Start"

export default function App() {
  return (
    <BrowserRouter>
      <main> 
      <Navbar/>
        <Switch>
          <Route path="/home">
            <Home/> 
          </Route>
          <Route path="/coffee">
            <Start/> 
          </Route>
          <Route path="/supplies"> 
            <Supplies/> 
          </Route>
          <Route path="/analysis">
            <Analysis/>  
          </Route>
          <Route path="/budgets">
            <Budgets/>  
          </Route>
          <Route path="/user-guide">
            <UserGuide/>  
          </Route>
          <Redirect to="/home" />
        </Switch>
      </main>
    </BrowserRouter>
  )
};

import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { TodoPage } from "./pages/TodosPage";
import { AboutPage } from "./pages/AboutPage";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="container"></div>
        <Switch>
          <Route component={TodoPage} path="/" exact></Route>
          <Route component={AboutPage} path="/about"></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

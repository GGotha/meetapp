import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import CriarConta from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Recsenha from "./pages/Recsenha";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/criar-conta" component={CriarConta} />
      <Route exact path="/recuperar-senha" component={Recsenha} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

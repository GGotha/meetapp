import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import CriarConta from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Recsenha from "./pages/Recsenha";
import Detalhes from "./pages/Detalhes";
import Criarmeetup from "./pages/Criarmeetup";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/criar-conta" component={CriarConta} />
      <Route exact path="/recuperar-senha" component={Recsenha} />
      <Route exact path="/detalhes" component={Detalhes} />
      <Route exact path="/criar-meetup" component={Criarmeetup} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

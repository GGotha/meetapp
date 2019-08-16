import React, { Component } from "react";

import {
  Formulario,
  InputLogin,
  Entrarbtn,
  Global,
  Image,
  Create
} from "./styles";

import Navbar from "../../components/Navbar";

import M from "../../assets/M.png";

export default class Login extends Component {
  render() {
    return (
      <Global>
        <Formulario action="">
          <Image src={M} alt="" />
          <InputLogin type="text" placeholder="Digite seu e-mail" />
          <InputLogin type="password" placeholder="Sua senha secreta" />
          <Entrarbtn type="submit">Entrar</Entrarbtn>
          <Create href="/criar-conta">Criar conta grátis</Create>
        </Formulario>
      </Global>
    );
  }
}

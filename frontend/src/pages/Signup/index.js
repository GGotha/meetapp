import React, { Component } from "react";

import {
  Formulario,
  InputLogin,
  Entrarbtn,
  Global,
  Image,
  Create
} from "./styles";

import M from "../../assets/M.png";

export default class Login extends Component {
  render() {
    return (
      <Global>
        <Formulario action="">
          <Image src={M} alt="" />
          <InputLogin type="text" placeholder="Nome Completo" />
          <InputLogin type="password" placeholder="Digite seu e-mail" />
          <InputLogin type="password" placeholder="Sua senha secreta" />
          <Entrarbtn type="submit">Criar Conta</Entrarbtn>
          <Create href="/">Já tenho login</Create>
        </Formulario>
      </Global>
    );
  }
}

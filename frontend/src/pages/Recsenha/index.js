import React, { Component } from "react";

import { Global, Formulario, InfLogin } from "./styles";

import Navbar from "../../components/Navbar";

export default class Recsenha extends Component {
  render() {
    return (
      <Global>
        <Navbar />
        <div>
          <Formulario action="">
            <InfLogin>
              <input type="text" value="Gustavo Gotha" placeholder="Seu nome" />
              <input
                type="text"
                value="clashgustavo1@gmail.com"
                placeholder="Seu email"
              />
              <span />
              <input type="password" placeholder="Senha atual" required />
              <input type="password" placeholder="Nova senha" required />
              <input type="password" placeholder="Confirmação Senha" required />
              <div>
                <button type="submit">Salvar Perfil</button>
              </div>
            </InfLogin>
          </Formulario>
        </div>
      </Global>
    );
  }
}

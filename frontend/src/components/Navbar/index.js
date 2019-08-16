import React, { Component } from "react";

import {
  Nav,
  Header,
  RightHeader,
  InformacoesRightHeader,
  Global
} from "./styles";

import M from "../../assets/M.png";

export default class Navbar extends Component {
  render() {
    return (
      <Header>
        <Nav>
          <img src={M} alt="" />
          <RightHeader>
            <InformacoesRightHeader>
              <h1>Gustavo Gotha</h1>
              <span>Meu perfil</span>
            </InformacoesRightHeader>
            <a href="/login">Sair</a>
          </RightHeader>
        </Nav>
      </Header>
    );
  }
}

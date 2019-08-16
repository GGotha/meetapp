import React, { Component } from "react";

import {
  Global,
  Container,
  Conteudo,
  Footer,
  DivImage,
  StyledCancel,
  StyledEdit
} from "./styles";

import Navbar from "../../components/Navbar";

import imgDetalhes from "../../assets/Bitmap.png";

export default class Detalhes extends Component {
  render() {
    return (
      <Global>
        <Navbar />
        <Container>
          <h1>Meetup de React Native</h1>
          <div>
            <StyledEdit to="/login">Editar</StyledEdit>
            <StyledCancel to="/">Cancelar</StyledCancel>
          </div>
        </Container>
        <Conteudo>
          <DivImage>
            <img src={imgDetalhes} alt="" />
          </DivImage>

          <p>
            O Meetup de React Native é um evento que reúne a comunidade de
            desenvolvimento mobile utilizando React a fim de compartilhar
            conhecimento. Todos são convidados.
          </p>
          <p>
            Caso queira participar como palestrante do meetup envie um e-mail
            para organizacao@meetuprn.com
          </p>
          <Footer>
            <span>24 de Junho, às 20h</span>
            <span>Rua Guilherme Gembala, 260</span>
          </Footer>
        </Conteudo>
      </Global>
    );
  }
}

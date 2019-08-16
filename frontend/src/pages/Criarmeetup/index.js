import React, { Component } from "react";

import {
  Global,
  Conteudo,
  File,
  InputText,
  Descricao,
  StyledBtn,
  Carregar
} from "./styles";

import Navbar from "../../components/Navbar";

export default class Dashboard extends Component {
  render() {
    return (
      <Global>
        <Navbar />
        <Conteudo>
          <div>
            <form action="">
              <File>
                <Carregar type="file" />
                <h1>Selecionar Imagem</h1>
              </File>
              <InputText type="text" placeholder="Título do meetup" />
              <Descricao type="text" placeholder="Descrição completa" />
              <InputText type="text" placeholder="Data do meetup" />
              <InputText type="text" placeholder="Localização" />
              <div>
                <StyledBtn to="">Salvar meetup</StyledBtn>
              </div>
            </form>
          </div>
        </Conteudo>
      </Global>
    );
  }
}

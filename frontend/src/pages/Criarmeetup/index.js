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
import moment from "moment";

import axios from "axios";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titulo: "",
      descricao: "",
      localizacao: "",
      imagem: "",
      date: ""
    };
  }

  handleInputChange = async e => {
    await this.setState({ [e.target.name]: e.target.value });
  };

  handleCreateUser = async e => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    console.log(this.state.date);
    const dados = {
      titulo: this.state.titulo,
      descricao: this.state.descricao,
      localizacao: this.state.localizacao,
      imagem: this.state.imagem,
      date: this.state.date
    };
    axios.post(`http://localhost:4444/meetups`, dados, config).then(res => {
      if (res.data.status === "success") {
        alert(res.data.msg);
        this.props.history.push("/dashboard");
      } else {
        alert(res.data.msg);
      }
    });
  };
  render() {
    return (
      <Global>
        <Navbar />
        <Conteudo>
          <div>
            <form
              id="formularioMeetups"
              action="POST"
              onSubmit={this.handleCreateUser}
            >
              <File>
                <Carregar
                  type="file"
                  name="imagem"
                  value={this.state.imagem}
                  onChange={e => this.handleInputChange(e)}
                />
                <h1>Selecionar Imagem</h1>
              </File>
              <InputText
                type="text"
                name="titulo"
                minLength="6"
                required
                value={this.state.titulo}
                onChange={e => this.handleInputChange(e)}
                placeholder="Título do meetup"
              />
              <Descricao
                type="text"
                placeholder="Descrição completa"
                minLength="6"
                required
                name="descricao"
                value={this.state.descricao}
                onChange={e => this.handleInputChange(e)}
              />
              <InputText
                type="datetime-local"
                id="meeting-time"
                minLength="6"
                required
                placeholder="2001-09-02T12:03"
                name="date"
                value={this.state.date}
                onChange={e => this.handleInputChange(e)}
              />
              <InputText
                type="text"
                required
                placeholder="Localização"
                name="localizacao"
                value={this.state.localizacao}
                onChange={e => this.handleInputChange(e)}
              />
              <div>
                <StyledBtn type="submit">Salvar meetup</StyledBtn>
              </div>
            </form>
          </div>
        </Conteudo>
      </Global>
    );
  }
}

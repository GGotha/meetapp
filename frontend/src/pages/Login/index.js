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
// import Api from "../../services/api";
import axios from "axios";

import api from "../../services/api";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      email: "",
      password: ""
    };
  }

  handleInputChange = async e => {
    await this.setState({ [e.target.name]: e.target.value });
  };

  handleCreateUser = async e => {
    e.preventDefault();

    axios
      .post(`http://localhost:4444/`, {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        console.log(res.data);
        if (res.data.status === "success") {
          alert(res.data.msg);
        } else {
          alert(res.data.msg);
        }
        localStorage.getItem("token");
      });
  };

  render() {
    return (
      <Global>
        <Formulario onSubmit={this.handleCreateUser}>
          <Image src={M} alt="" />
          <InputLogin
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Digite seu e-mail"
            onChange={e => this.handleInputChange(e)}
          />
          <InputLogin
            type="password"
            name="password"
            value={this.state.password}
            minLength="6"
            placeholder="Sua senha secreta"
            onChange={e => this.handleInputChange(e)}
          />
          <Entrarbtn type="submit">Entrar</Entrarbtn>
          <Create href="/criar-conta">Criar conta grátis</Create>
        </Formulario>
      </Global>
    );
  }
}

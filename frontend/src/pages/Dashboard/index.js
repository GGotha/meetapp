import React, { Component } from "react";

import { Global, Container, Listas } from "./styles";

import Navbar from "../../components/Navbar";

export default class Dashboard extends Component {
  render() {
    return (
      <Global>
        <Navbar />
        <Container>
          <h1>Meus meetups</h1>
          <a href="#">Novo meetup</a>
        </Container>
        <Listas>
          <ul>
            <li>
              <span>Meetup de React Native</span>
              <span>14 de julho, às 14h</span>
            </li>
            <li>
              <span>Meetup de React Native</span>
              <span>14 de julho, às 14h</span>
            </li>
            <li>
              <span>Meetup de React Native</span>
              <span>14 de julho, às 14h</span>
            </li>
            <li>
              <span>Meetup de React Native</span>
              <span>14 de julho, às 14h</span>
            </li>
          </ul>
        </Listas>
      </Global>
    );
  }
}

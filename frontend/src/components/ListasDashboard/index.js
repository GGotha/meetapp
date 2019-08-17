import React, { Component } from "react";

import { Listas } from "./styles";

import { FaAngleRight } from "react-icons/fa";

import moment from "moment";
import "moment/locale/pt-br";

const ListasDashboard = ({ meetups }) => (
  <div>
    {meetups.map(lista => (
      <Listas>
        <ul>
          <li>
            <span>{lista.titulo}</span>
            <p>
              {moment(lista.data)
                .locale("pt-br")
                .format("DD MMMM, [às] HH:mm")}
              <span>
                <FaAngleRight />
              </span>
            </p>
          </li>
        </ul>
      </Listas>
    ))}
  </div>
);

export default ListasDashboard;

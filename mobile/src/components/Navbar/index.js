import React, { Component } from "react";
import { View, Text, Image } from "react-native";

import styles, { Container } from "./styles";

import M from "../../assets/M.png";

class Navbar extends Component {
  render() {
    return (
      <View style={styles.divImagem}>
        <Image style={styles.imagem} source={M} />
      </View>
    );
  }
}

export default Navbar;

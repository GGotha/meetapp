import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";

import styles, { Container } from "./styles";

import M from "../../assets/M.png";

import { colors, metrics } from "../../styles";

class Login extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
        <View style={styles.form}>
          <View style={styles.divImagem}>
            <Image style={styles.imagem} source={M} />
          </View>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu e-mail"
            placeholderTextColor={colors.light}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Sua senha secreta"
            placeholderTextColor={colors.light}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Recsenha")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.footerText}>Criar Conta grátis</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

export default Login;

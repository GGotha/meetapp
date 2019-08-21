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

// import { Container } from './styles';

class Signup extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container style={styles.backgroundTheme}>
        <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
        <View style={styles.form}>
          <View style={styles.divImagem}>
            <Image style={styles.imagem} source={M} />
          </View>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Nome Completo"
            placeholderTextColor={colors.light}
            underlineColorAndroid="transparent"
          />
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
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Criar Conta</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.footerText}>Já tenho login</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

export default Signup;

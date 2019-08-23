import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert
} from "react-native";

import styles, { Container } from "./styles";
import api from "../../services/api";

import M from "../../assets/M.png";

import { colors, metrics } from "../../styles";

// import { Container } from './styles';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: "",
      password: ""
    };
  }

  signUp = async () => {
    try {
      const response = await api.post("/users", {
        email: this.state.email,
        name: this.state.name,
        password: this.state.password
      });

      if (response.data.status === "success") {
        Alert.alert("Conta Criada", "Você foi redirecionado ao Login");
        this.props.navigation.navigate("Login");
      } else {
        Alert.alert(response.data.status, response.data.msg);
      }
    } catch (err) {
      Alert.alert(
        "Erro",
        "Houve um erro inesperado, tente novamente mais tarde"
      );
    }
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container style={styles.backgroundTheme}>
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
            name="name"
            value={this.state.name}
            onChangeText={text => this.setState({ name: text })}
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu e-mail"
            placeholderTextColor={colors.light}
            underlineColorAndroid="transparent"
            keyboardType="email-address"
            name="email"
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Sua senha secreta"
            placeholderTextColor={colors.light}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
            name="password"
            value={this.state.password}
            onChangeText={text => this.setState({ password: text })}
          />
          <TouchableOpacity style={styles.button} onPress={this.signUp}>
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

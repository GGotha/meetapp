import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
  Alert
} from "react-native";

// import AsyncStorage from "@react-native-community/async-storage";
import styles, { Container } from "./styles";
import api from "../../services/api";
import M from "../../assets/M.png";

import { colors, metrics } from "../../styles";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dados: [],
      email: "",
      password: ""
    };
  }

  signIn = async () => {
    try {
      const response = await api.post("/", {
        email: this.state.email,
        password: this.state.password
      });

      if (response.data.status === "success") {
        const { user, token } = response.data;
        await AsyncStorage.multiSet([["@Meetapp:token", token]]);
        this.props.navigation.navigate("Meetups");
      } else {
        throw new Error(response.data.msg);
      }
    } catch (err) {
      Alert.alert(
        "Falha na autenticação",
        "Houve um erro no login, verifique seus dados"
      );
    }
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
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
            keyboardType="email-address"
            name="email"
            onChangeText={text => this.setState({ email: text })}
            value={this.state.email}
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Sua senha secreta"
            placeholderTextColor={colors.light}
            underlineColorAndroid="transparent"
            secureTextEntry
            name="password"
            value={this.state.password}
            onChangeText={text => this.setState({ password: text })}
          />
          <TouchableOpacity onPress={this.signIn} style={styles.button}>
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

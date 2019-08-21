import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Dimensions
} from "react-native";
import styles, { Container, BordaSeparate } from "./styles";
import M from "../../assets/M.png";
import { colors, metrics } from "../../styles";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

class Recsenha extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Navbar />

        <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Nome Completo"
            value="Gustavo Gotha"
            placeholderTextColor={colors.light}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
            value="clashgustavo1@gmail.com"
            placeholderTextColor={colors.light}
            underlineColorAndroid="transparent"
          />

          <BordaSeparate />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Senha atual"
            placeholderTextColor={colors.light}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Nova senha"
            placeholderTextColor={colors.light}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Confirmação de senha"
            placeholderTextColor={colors.light}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Salvar Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonLeave}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.buttonText}>Sair do Meetapp</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </Container>
    );
  }
}

export default Recsenha;

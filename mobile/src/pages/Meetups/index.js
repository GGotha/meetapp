import React, { Component } from "react";

import { View, StatusBar, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles, { Container, Card, ImagemCard } from "./styles";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { colors, metrics } from "../../styles";

import image from "../../assets/image.png";

class Meetups extends Component {
  render() {
    return (
      <Container>
        <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
        <Navbar />
        <View>
          <View style={styles.viewDate}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity>
                <Icon name="chevron-left" size={25} color="#FFF" />
              </TouchableOpacity>
              <Text style={styles.date}> 31 de Maio </Text>
              <TouchableOpacity>
                <Icon name="chevron-right" size={25} color="#FFF" />
              </TouchableOpacity>
            </View>
          </View>
          <Card style={styles.card}>
            <ImagemCard
              style={styles.imagem}
              source={require("../../assets/image.png")}
            />
            <View style={styles.viewFundoCard}>
              <View style={styles.viewCard}>
                <Text style={styles.textoCardTitulo}>
                  Meetup de React Native
                </Text>
                <Text style={styles.textoCard}>
                  <Icon name="calendar" size={14} color="#999999" />
                  <Text> 24 de Junho, às 20h</Text>
                </Text>
                <Text style={styles.textoCard}>
                  <Icon name="map-marker" size={16} color="#999999" />
                  <Text style={styles.icon}> Rua Guilherme Gembala, 260</Text>
                </Text>
                <Text style={styles.textoCard}>
                  <Icon name="user" size={14} color="#999999" />
                  <Text> Organizador: Diego Fernandes</Text>
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                  <Text style={styles.buttonText}>Realizar Inscrição</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card>
        </View>
        <Footer />
      </Container>
    );
  }
}

export default Meetups;

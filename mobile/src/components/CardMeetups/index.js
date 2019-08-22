import React, { Component } from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import styles, { Container, Card, ImagemCard } from "./styles";
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  FlatList
} from "react-native";

const CardMeetups = ({ meetups }) => (
  <View>
    {meetups.map(lista => (
      <Card
        onEndReached={this.loadRepositories}
        onEndReachedThreshold={0.1}
        style={styles.card}
      >
        <ImagemCard
          style={styles.imagem}
          source={require("../../assets/image.png")}
        />
        <View style={styles.viewFundoCard}>
          <View style={styles.viewCard}>
            <Text style={styles.textoCardTitulo}>{lista.id}</Text>
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
    ))}
  </View>
);
export default CardMeetups;

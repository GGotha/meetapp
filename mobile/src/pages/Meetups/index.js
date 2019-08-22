import React, { Component } from "react";

import { View, StatusBar, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles, { Container, Card, ImagemCard } from "./styles";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { colors, metrics } from "../../styles";

import image from "../../assets/image.png";
import CardMeetups from "../../components/CardMeetups";

class Meetups extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meetups: [
        { id: 0, full_name: "Repo 1" },
        { id: 1, full_name: "Repo 2" },
        { id: 2, full_name: "Repo 3" },
        { id: 3, full_name: "Repo 4" },
        { id: 4, full_name: "Repo 5" }
      ]
    };
  }
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
          <CardMeetups meetups={this.state.meetups} />
        </View>
        <Footer />
      </Container>
    );
  }
}

export default Meetups;

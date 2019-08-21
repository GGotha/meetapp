import React, { Component } from "react";

import { View, StatusBar, Text } from "react-native";

import styles, { Container } from "./styles";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { colors, metrics } from "../../styles";

class Meetups extends Component {
  render() {
    return (
      <Container>
        <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
        <Navbar />
        <View>
          <Text>Inscrições</Text>
        </View>
        <Footer />
      </Container>
    );
  }
}

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default Meetups;

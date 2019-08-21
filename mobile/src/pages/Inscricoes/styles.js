import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import { colors, metrics } from "../../styles";

export const Container = styled(LinearGradient).attrs({
  colors: ["#22202C", "#402845"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 }
})`
  flex: 1;
  padding: 40px;
  justify-content: center;
  align-items: center;
`;

const styles = StyleSheet.create({});
export default styles;

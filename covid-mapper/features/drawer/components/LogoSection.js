import * as React from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

const GreenBorder = styled.View`
  border-bottom-width: 3px;
  border-bottom-color: #77c280;
  margin-top: 2%;
`;

const LogoText = styled.Text`
  color: #ddd;
  font-weight: bold;
  font-size: 18px;
`;

const LogoImage = styled.Image`
  max-height: 50px;
  max-width: 50px;
  border-radius: 3px;
  margin-right: 4px;
`;

const LogoSection = () => {
  return (
    <View
      style={{
        height: "10%",
        marginTop: "0%",
        paddingTop: "0%",
      }}
    >
      <LinearGradient
        // Background Linear Gradient
        colors={["#203f59", "black","#77c280"]} // top to bottom
        style={styles.background}
        end={{
          x: 0.5, y: 0.95
        }}
        locations={[
          0, 0.95,1
        ]}
      >
        <LogoImage source={require("../../../assets/logo.png")} />
        <LogoText>COVID Mapper</LogoText>
      </LinearGradient>
      <GreenBorder />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#77c280'
  },
});

export default LogoSection;

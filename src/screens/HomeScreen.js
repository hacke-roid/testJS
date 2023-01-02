import React from "react";
import { Text, StyleSheet } from "react-native";
import { View } from "react-native";
import { Button } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={Styles.text}>Home Screen</Text>
      <Button
        title="Components Screen"
        onPress={() => props.navigation.navigate("Components")}
      />

      <Button
        title="Image Screen"
        onPress={() => props.navigation.navigate("Image")}
      />

      <Button title="List" onPress={() => props.navigation.navigate("List")} />

      <Button
        title="Box Screen"
        onPress={() => props.navigation.navigate("Box")}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

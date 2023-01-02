import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View >
      <ImageDetail
        title="forest"
        imageSource={require("../../assets/forest.jpg")}
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default ImageScreen;

import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = (props) => {
  
  return (
    <View style={styles.imageStyle}>
    <Image source={props.imageSource}/>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
  alignContent: "center",
}});

export default ImageDetail;
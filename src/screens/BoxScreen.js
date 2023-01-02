import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>child 1</Text>
            <Text style={styles.textStyle}>child 2</Text>
            <Text style={styles.textStyle}>child 3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 2,
        borderColor: 'black',
        marginTop: 4,
        alignItems: 'stretch',
        
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
        marginVertical: 20,
        marginHorizontal: 20,
        
    }
});

export default BoxScreen;
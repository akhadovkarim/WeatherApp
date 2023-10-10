import React from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';

export default function Loading() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <Text style={styles.text}>AkmirTeam</Text>
           <Text style={styles.text}>Получление погоды...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    text: {
      color: "#2c2c2c",
        fontSize: 30
    }
})
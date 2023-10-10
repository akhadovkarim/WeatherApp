import React from 'react';
import propTypes from 'prop-types'
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from "prop-types";
import { Ionicons  } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Rain: {
        iconName: 'rainy',
        gradient: ['#83ad4d', '#b6fbff']

    },
    Snow: {
        iconName: 'snow',
        gradient: ['#83ad4d', '#b6fbff']
    }
}

export default function Weather({temp, condition}){
    return (
         <LinearGradient
             colors={weatherOptions[condition].gradient}
             style={styles.container}>
             <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <Ionicons name={weatherOptions[condition].iconName} size={96} color="white"/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>

            <View style={styles.halfContainer}>
                <Ionicons name="rainy" size={90}/>
                <Text style={styles.temp}>{temp}</Text>
            </View>
            </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Mist", "Clear", "Clouds", "Smoke", "Haze","Dust","Fog","Sand","Dust","Ash","Squall","Tornado","Atmosphere"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    },
    temp: {
        fontSize: 42,
        color: "white"

    }
})
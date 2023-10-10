import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import * as Location from 'expo-location';
import Loading from "./Loading";
import axios from "axios";
import Weather from "./Weather";


const APIKEY = "a95ed0ec9fc00cf2688b1746af5f1148"


export default class extends React.Component {
  state = {
    isLoading: true
  }

  getWeather = async(latitude,longitude) => {
    const {data: {main: {temp}, weather}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}&units=metric`)
    this.setState({
      isLoading: false,
      temp: temp,
      condition: weather[0].main
    })
  }

  getLocation = async () => {
    try {
      const response = await Location.requestForegroundPermissionsAsync();
      console.log(response);
      if (response.status === 'granted') {
        const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
        this.getWeather(latitude,longitude)
        // TODO: Сделать сапрос к API
        // Теперь вы можете использовать данные о местоположении в пользовательском интерфейсе вашего приложения или выполнить другие действия.
      } else {
        // Обработка случая, когда пользователь отказал в разрешении на использование местоположения.
        Alert.alert("Отказано в доступе к местоположению", "Для использования этого приложения необходимо предоставить разрешение на использование местоположения.");
      }
    } catch (error) {
      console.error("Ошибка при получении местоположения:", error);
      Alert.alert("Не удалось определить местоположение", "Что-то пошло не так при получении местоположения.");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const {isLoading, temp, condition} = this.state
    return (
        isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />
    )
  }
}



import React, { useState, useEffect } from 'react';
import { Dimensions, View, StyleSheet, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import EventCalendar from './src/EventCalendar';
import bg from './assets/Fundo.png';
import fetchAPI from './src/services/api';
let { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});

console.log("loaded");

export default class App extends React.Component {
  constructor(props) {
    console.log("constructed");
    super(props);
    this.state = {
      events: [
        {
          date: '2020-03-23T10:00:00.000Z',
          duration: 2,
          title: 'Como baixar Mineraft pirata',
        },
        {
          date: '2020-03-23T08:00:00.000Z',
          duration: 1,
          title: 'Abertura',
        },
        {
          date: '2020-03-24T10:00:00.000Z',
          duration: 2,
          title: 'Como baixar Mineraft pirata',
        },
        {
          date: '2020-03-25T08:00:00.000Z',
          duration: 1,
          title: 'Abertura',
        },
        // {
        //   start: '2020-07-27 10:00:00',
        //   end: '2020-07-27 12:00:00',
        //   title: 'Palestra "Seja um protagonista do seu mundo" por Allan Mota',
        //   color: '#487FAC'
        // },
        // {
        //   start: '2020-07-27 08:00:00',
        //   end: '2020-07-27 09:00:00',
        //   title: 'Credenciamento',
        // },
        // {
        //   start: '2020-07-27 12:00:00',
        //   end: '2020-07-27 13:00:00',
        //   title: 'Almoço',
        //   color: '#E4B537'
        // },
        // {
        //   start: '2020-07-27 13:00:00',
        //   end: '2020-07-27 15:00:00',
        //   title: 'Introdução ao Web Application Penetration Testing'
        // },
        // {
        //   start: '2020-07-27 13:00:00',
        //   end: '2020-07-27 15:00:00',
        //   title: 'Teoria de Grafos e Redes Complexas'
        // },
        // {
        //   start: '2020-07-27 13:00:00',
        //   end: '2020-07-27 15:00:00',
        //   title: 'Minicurso de Raspberry Pi'
        // },
        // {
        //   start: '2020-07-27 13:00:00',
        //   end: '2020-07-27 15:00:00',
        //   title: 'Latex'
        // },
        // {
        //   start: '2020-07-27 14:00:00',
        //   end: '2020-07-27 17:00:00',
        //   title: 'Animação na Computação'
        // },
        // {
        //   start: '2020-07-27 15:00:00',
        //   end: '2020-07-27 17:00:00',
        //   title: 'Minicurso de Arduino Básico'
        // },
        // {
        //   start: '2020-07-27 15:00:00',
        //   end: '2020-07-27 17:00:00',
        //   title: 'Uma Introdução Prática à Criação e Orquestração de VNFs em Nuvens OpenStack'
        // },
        // {
        //   start: '2020-07-27 15:00:00',
        //   end: '2020-07-27 17:00:00',
        //   title: 'Matlab básico'
        // },
        // {
        //   start: '2020-07-27 15:00:00',
        //   end: '2020-07-27 17:00:00',
        //   title: 'ANSYS'
        // },
        // {
        //   start: '2020-07-27 17:00:00',
        //   end: '2020-07-27 19:00:00',
        //   title: 'Palestra "Sistemas fotovoltaicos conectados à Rede Elétrica" por Paulo Menegaz',
        //   color: '#487FAC'
        // },
        // {
        //   start: '2020-07-28 10:00:00',
        //   end: '2020-07-28 12:00:00',
        //   title: 'Palestra "Seja um protagonista do seu mundo" por Allan Mota',
        //   color: '#487FAC'
        // },
        // {
        //   start: '2020-07-28 12:00:00',
        //   end: '2020-07-28 13:00:00',
        //   title: 'Almoço',
        //   color: '#E4B537'
        // },
        // {
        //   start: '2020-07-29 13:00:00',
        //   end: '2020-07-29 15:00:00',
        //   title: 'Introdução ao Web Application Penetration Testing'
        // },
        // {
        //   start: '2020-07-29 13:00:00',
        //   end: '2020-07-29 15:00:00',
        //   title: 'Teoria de Grafos e Redes Complexas'
        // },
      ],
    };
  }

 
  _eventTapped(event) {
    alert(JSON.stringify(event));
  }

  render() {
    console.log("rendered");
    return (
      <ImageBackground source={bg} style={styles.image}>
        <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
          <EventCalendar
            eventTapped={this._eventTapped.bind(this)}
            format24h
            events={this.state.events}
            width={width}
            initDate={'2020-03-23'}
            scrollToFirst
            size={5} //How many days including first one
            start={7}
            end={19}
          />
        </View>
      </ImageBackground>
    );
  }
}

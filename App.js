import React, { useState, useEffect } from 'react';
import { Dimensions, View, StyleSheet, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import EventCalendar from './src/EventCalendar';
import bg from './assets/Fundo.png';
import api from './src/services/api';
let { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});

async function organizeEventParts() {
  const response = await api.get('/allEvents');
  var events = { eventParts: [] };
  response.data[0].events.forEach(function (ev) {
    if (ev.eventPart.length !== 0) {
      ev.eventPart.forEach(function (evp){
        events.eventParts.push({
          date: evp.date,
          duration: evp.duration,
          title: ev.title
        });
      });
    }
  });
  return events;
}

export default function App() {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState({});

  async function loadEvents() {
    if (loading) {
      return;
    }
    setLoading(true);
    setEvents(await organizeEventParts());
    setLoading(false);
  }

  useEffect(() => {
    loadEvents();
  }, []);

  function eventTapped(event) {
    alert(JSON.stringify(event));
  }

  return (
    <ImageBackground source={bg} style={styles.image}>
      <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
        <EventCalendar
          eventTapped={eventTapped}
          format24h
          events={events.eventParts}
          width={width}
          initDate={'2020-05-25'}
          scrollToFirst
          size={5}
          start={7}
          end={19}
        />
      </View>
    </ImageBackground>
  );
}

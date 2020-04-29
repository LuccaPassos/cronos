// @flow
import { Platform, StyleSheet } from 'react-native';

// const eventPaddingLeft = 4
const leftMargin = 50 - 1;

export default function styleConstructor(theme = {}, calendarHeight) {
  let style = {
    container: {
      flex: 1,
      ...theme.container,
    },
    contentStyle: {
      height: calendarHeight + 15,
      ...theme.contentStyle,
    },
    header: {
      paddingHorizontal: 30,
      height: 50,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#E6E8F0',
      backgroundColor: '#F5F5F6',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      ...theme.header,
    },
    headerTextContainer: {
      justifyContent: 'center',
    },
    headerText: {
      fontSize: 16,
      ...theme.headerText,
    },
    arrow: {
      width: 15,
      height: 15,
      resizeMode: 'contain',
    },
    arrowButton: {
      width: 50,
      alignItems: 'center',
      justifyContent: 'center',
      ...theme.arrowButton,
    },
    event: {
      position: 'absolute',
      backgroundColor: '#CE4848',
      borderRadius: 3,
      paddingLeft: 6,
      paddingRight: 6,
      paddingBottom: 0,
      paddingTop: 7,
      minHeight: 25,
      flex: 1,
      flexDirection: 'column',
      alignItems: 'flex-start',
      overflow: 'hidden',
      ...theme.event,
    },
    eventTitle: {
      color: '#FFF',
      fontSize: 11,
      fontWeight: '600',
      minHeight: 15,
      ...theme.eventTitle,
    },
    line: {
      height: 0.75,
      position: 'absolute',
      left: leftMargin,
      backgroundColor: '#9C9C9F',
      ...theme.line,
    },
    timeLabel: {
      position: 'absolute',
      left: 10,
      color: '#9C9C9F',
      fontSize: 13,
      fontFamily: 'Roboto',
      fontWeight: '500',
      ...theme.timeLabel,
    },
  };
  return StyleSheet.create(style);
}

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle
} from 'react-native';

import SeriesNode from "./Components/SeriesNode"

export interface Props {

}

export interface State {

}

interface Styles {
  background: ViewStyle,
  container: ViewStyle,
  row: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  background: {
    flex: 1,
    backgroundColor: 'gray'
  },
  container: {
    marginTop: 20,
    padding: 10,
    flex: 1,
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default class App extends Component<Props, State> {
  render() {
    return (
      <View style={styles.background}>
      <View style={styles.container}>
        <View style={styles.row}>
          <SeriesNode />
          <SeriesNode />
          <SeriesNode />
          <SeriesNode />
        </View>
        <View style={styles.row}>
          <SeriesNode />
          <SeriesNode />
        </View>
        <View style={styles.row}>
          <SeriesNode />
        </View>
        <View style={styles.row}>
          <SeriesNode />
        </View>
        <View style={styles.row}>
          <SeriesNode />
        </View>
        <View style={styles.row}>
          <SeriesNode />
          <SeriesNode />
        </View>
        <View style={styles.row}>
          <SeriesNode />
          <SeriesNode />
          <SeriesNode />
          <SeriesNode />
        </View>
      </View>
      </View>
    );
  }
}

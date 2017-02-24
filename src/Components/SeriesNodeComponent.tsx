import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle
} from 'react-native';

export interface Props {

}

export interface State {

}

interface Styles {
  container: ViewStyle,
  team: TextStyle,
  score: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    backgroundColor: 'rgb(201, 63, 16)'
  },
  team: {
    paddingRight: 16
  },
  score: {
    color: '#333333'
  }
});

class SeriesNodeComponent extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.team}>
          MTL
          </Text>
        <Text style={styles.score}>
          4
          </Text>
      </View>
    )
  }
}

export default SeriesNodeComponent
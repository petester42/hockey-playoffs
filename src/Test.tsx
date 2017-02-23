import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ViewStyle
} from 'react-native';

export interface Props {

}

export interface State {

}

interface Styles {
  container: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    width: 200,
    height: 300,
    backgroundColor: 'blue',
  }
});

export default class Test extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}

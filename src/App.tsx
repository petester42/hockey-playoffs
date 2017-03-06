import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle,
  StatusBar,
  Navigator
} from 'react-native';

import Bracket from "./Components/Bracket"

import { Platform, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

console.log(StatusBarManager.HEIGHT)

export interface Props {

}

export interface State {

}

interface Styles {
  view: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  view: {
    flex: 1
  }
});

export default class App extends Component<Props, State> {
  render() {
    return (
      <View style={styles.view}>
        <StatusBar />
        <Navigator
          renderScene={(route, navigator) =>
            <Bracket />
          }
        />
      </View>
    );
  }
}

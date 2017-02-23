import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ViewStyle
} from 'react-native';

import Series from "../Data/Series"
import SeriesNodeComponent from "./SeriesNodeComponent"

export interface Props {

}

export interface State {

}

interface Styles {
  container: ViewStyle,
   line: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden'
  },
  line: {
      backgroundColor: 'white',
      height: 1,
  }
});

class SeriesNode extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <SeriesNodeComponent />
        <View style={styles.line} />
        <SeriesNodeComponent />
      </View>
    );
  }
}


export default SeriesNode
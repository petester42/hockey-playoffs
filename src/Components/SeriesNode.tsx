import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  TouchableHighlight
} from 'react-native';

import Color from "../Data/Color"
import Series from "../Data/Series"
import SeriesNodeComponent from "./SeriesNodeComponent"

export interface Props {
  series: Series;
  seriesClicked: (id: string) => void;
}

export interface State {

}

interface Styles {
  container: ViewStyle,
  highlight: ViewStyle,
  line: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  highlight: {
    borderRadius: 8
  },
  line: {
    backgroundColor: 'white',
    height: 1,
  }
});

export class SeriesNode extends Component<Props, State> {

  private series: Series;

  constructor(props: Props) {
    super(props);
    this.series = this.props.series;
    this.seriesClicked = this.seriesClicked.bind(this)
  }

  seriesClicked() {
    this.props.seriesClicked("2");
  }

  cssColor(color: Color): string {
    return `rgb(${color.red}, ${color.green}, ${color.blue})`;
  }

  render() {
    return (
      <TouchableHighlight onPress={this.seriesClicked} style={styles.highlight}>
        <View style={styles.container}>
          <SeriesNodeComponent
            name={this.series.topTeam.abbreviation}
            score={this.series.topWins}
            backgroundColor={this.cssColor(this.series.topTeam.color)}
            textColor={"grey"}
          />
          <View style={styles.line} />
          <SeriesNodeComponent
            name={this.series.bottomTeam.abbreviation}
            score={this.series.bottomWins}
            backgroundColor={this.cssColor(this.series.bottomTeam.color)}
            textColor={"grey"}
          />
        </View>
      </TouchableHighlight>
    );
  }
}


export default SeriesNode

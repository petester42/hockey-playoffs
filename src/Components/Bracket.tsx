import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle
} from 'react-native';

import Team from "../Data/Team"
import Color from "../Data/Color"
import Series from "../Data/Series"
import SeriesNode from "./SeriesNode"

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
    padding: 10,
    flex: 1,
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default class Bracket extends Component<Props, State> {

  series = new Series();

  constructor(props: Props) {
    super(props);
    var team = new Team();
    team.abbreviation = "ANA";
    team.color = new Color();
    team.color.red = 200;
    team.color.green = 100;
    team.color.blue = 50;

    this.series.topTeam = team;
    this.series.bottomTeam = team;
    this.series.topWins = 2;
    this.series.bottomWins = 4;
  }

  click(id: string) {
    console.log(id);
  }

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.container}>
          <View style={styles.row}>
            <SeriesNode seriesClicked={this.click} series={this.series}/>
            <SeriesNode seriesClicked={this.click} series={this.series}/>
            <SeriesNode seriesClicked={this.click} series={this.series}/>
            <SeriesNode seriesClicked={this.click} series={this.series}/>
          </View>
          <View style={styles.row}>
            <SeriesNode seriesClicked={this.click} series={this.series}/>
            <SeriesNode seriesClicked={this.click} series={this.series}/>
          </View>
          <View style={styles.row}>
            <SeriesNode seriesClicked={this.click} series={this.series}/>
          </View>
          <View style={styles.row}>
            <SeriesNode seriesClicked={this.click} series={this.series}/>
          </View>
          <View style={styles.row}>
            <SeriesNode seriesClicked={this.click} series={this.series}/>
          </View>
          <View style={styles.row}>
            <SeriesNode seriesClicked={this.click} series={this.series}/>
            <SeriesNode seriesClicked={this.click} series={this.series}/>
          </View>
          <View style={styles.row}>
            <SeriesNode seriesClicked={this.click} series={this.series}/>
            <SeriesNode seriesClicked={this.click} series={this.series}/>
            <SeriesNode seriesClicked={this.click} series={this.series}/>
            <SeriesNode seriesClicked={this.click} series={this.series}/>
          </View>
        </View>
      </View>
    );
  }
}

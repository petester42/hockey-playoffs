import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle
} from 'react-native';

export interface Props {
  name: string;
  score: number;
  backgroundColor: string;
  textColor: string;
}

export interface State {

}

interface Styles {
  container: ViewStyle,
  team: TextStyle,
  score: TextStyle
}

const styles = (backgroundColor: string, textColor: string) => {
  return StyleSheet.create<Styles>({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 8,
      backgroundColor: backgroundColor,
      minWidth: 40
    },
    team: {
      paddingRight: 16,
      color: textColor
    },
    score: {
      color: textColor
    }
  });
}

export class SeriesNodeComponent extends Component<Props, State> {
  private style: Styles;

  constructor(props: Props) {
    super(props);
    this.style = styles(this.props.backgroundColor, this.props.textColor);
  }

  render() {
    return (
      <View style={this.style.container}>
        <Text style={this.style.team}>
          {this.props.name}
        </Text>
        <Text style={this.style.score}>
          {this.props.score}
        </Text>
      </View>
    )
  }
}

export default SeriesNodeComponent

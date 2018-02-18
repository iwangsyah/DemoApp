import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class Bantuan extends Component {

  back() {
    Actions.pop()
  }

  render() {
    return(
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <TouchableOpacity onPress={this.back}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import BackgroundImage from './components/BackgroundImage'

const myIcon = (<Icon name="bars" size={40} color="black" />)

export default class App extends Component {
  render() {
    const text = 'I am some centered text';

    return (
      <View style={{ flex: 1, backgroundColor: '#eee'}}>
        <BackgroundImage/>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            marginTop:30,
            marginLeft:20
          }}
        >

        <TouchableOpacity>
          {myIcon}

          </TouchableOpacity>
          <View style={{marginTop:40}}>
            <Text style={{fontSize:18}}>Selamat Siang,</Text>
            <Text style={{fontSize:30}}>Catur Yundoko Edi</Text>
          </View>
        </View>
      </View>
    );
  }
}

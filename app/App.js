import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import BackgroundImage from './components/BackgroundImage'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <BackgroundImage/>
    );
  }
}

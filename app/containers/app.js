import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  NetInfo
} from 'react-native'

import { Router, Scene, Stack } from 'react-native-router-flux'
import { connect, Provider } from 'react-redux'
import Home from '../components/screens/Home'
import Bantuan from '../components/screens/Bantuan'
import store from '../store'


const RouterWithRedux = connect()(Router)

export default class DemoApp extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key='home'
                   component={Home}
                   title='Home'
                   panHandlers={null}
                   hideNavBar={true} />
            <Scene key='bantuan'
                   component={Bantuan}
                   title='Bantuan'
                   panHandlers={null}
                   hideNavBar={true} />
          </Scene>
        </RouterWithRedux>
      </Provider>
    )
  }
}

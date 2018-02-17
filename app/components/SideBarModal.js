import React, { PropTypes, Component } from 'react'
import {
  View, Text, TouchableOpacity, TouchableWithoutFeedback
} from 'react-native'
import Modal from 'react-native-modal'

import styles from '../styles/sidebar'

export default class MenuModal extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props)

    this.state = {
      showDeveloperMenu: false,
    }

    this.triggerDeveloperMenu = this.triggerDeveloperMenu.bind(this)
    this.gotoOfflineSyncStats = this.gotoOfflineSyncStats.bind(this)
    this.gotoLogs = this.gotoLogs.bind(this)
    this.gotoEnvironmentSelection = this.gotoEnvironmentSelection.bind(this)
    this.gotoSyncManager = this.gotoSyncManager.bind(this)
    this.gotoAutoSyncSelection = this.gotoAutoSyncSelection.bind(this)
  }

  triggerDeveloperMenu() {
    this.presses = this.presses || []
    this.presses.push(Date.now())
    if (this.presses.length > 7) {
      this.presses = this.presses.slice(1, 8)
    }
    if (this.presses.length == 7 && this.presses[0] >= Date.now() - 30000) {
      this.setState({ showDeveloperMenu: true })
    }
  }

  gotoSyncManager() {
  }

  gotoAutoSyncSelection() {
  }


  gotoOfflineSyncStats() {
  }

  gotoLogs() {
  }

  gotoEnvironmentSelection() {
  }

  render() {
    let { visible } = this.props
    let { showDeveloperMenu } = this.state
    let developerMenus = []
    if (showDeveloperMenu) {
      developerMenus.push(
        <TouchableOpacity
          key='offlineSyncStats'
          onPress={this.gotoOfflineSyncStats}
        >
          <Text style={styles.menuModalItem}>Offline Sync Stats</Text>
        </TouchableOpacity>
      )
      developerMenus.push(
        <TouchableOpacity
          key='logs'
          onPress={this.gotoLogs}
        >
          <Text style={styles.menuModalItem}>Logs</Text>
        </TouchableOpacity>
      )
      developerMenus.push(
        <TouchableOpacity
          key='environmentSelection'
          onPress={this.gotoEnvironmentSelection}
        >
          <Text style={styles.menuModalItem}>Environment</Text>
        </TouchableOpacity>
      )
    }

    let signInMenus = []

      signInMenus.push(
        <TouchableOpacity onPress={this.gotoSyncManager}>
          <Text style={styles.menuModalItem}>Sync Manager</Text>
        </TouchableOpacity>
      )
      signInMenus.push(
          <TouchableOpacity onPress={this.gotoAutoSyncSelection}>
            <Text style={styles.menuModalItem}>Auto Sync Options</Text>
          </TouchableOpacity>
      )


    return (
      <TouchableWithoutFeedback>
        <Modal
          supportedOrientations={['portrait', 'landscape']}
          animationIn='slideInLeft'
          animationOut='slideOutLeft'
          isVisible={visible}
          style={styles.menuModal}
        >
          <TouchableWithoutFeedback onPress={this.triggerDeveloperMenu}>
            <View style={styles.menuModalContainer}>

              {developerMenus}
              {signInMenus}
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </TouchableWithoutFeedback>
    )
  }
}

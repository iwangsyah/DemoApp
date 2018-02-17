import React, { PropTypes, Component } from 'react'
import {
  View, Text, TouchableOpacity, TouchableWithoutFeedback
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/Ionicons';
import _ from 'lodash'


import { menuSetVisibility } from '../actions/sidebar'
import styles from '../styles/sidebar'

class SidebarModal extends Component {
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
    this.props.hideModal()
  }

  gotoAutoSyncSelection() {
    this.props.hideModal()
  }


  gotoOfflineSyncStats() {
    Actions.offlineSyncStats()
    this.props.hideModal()
  }

  gotoLogs() {
    Actions.logs()
    this.props.hideModal()
  }

  gotoEnvironmentSelection() {
    Actions.environmentSelection()
    this.props.hideModal()
  }

  render() {
    let { visible, signedIn, logout, hideModal } = this.props
    let { showDeveloperMenu } = this.state
    let reset = () => {
      this.props.hideModal()
    }
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
          <View style={styles.titleContainer}>
            <Icon name="ios-home-outline" size={30} style={{top:5}} style={{top:5}}/>
            <Text style={[styles.menuModalItem, {marginLeft: 15}]}>Beranda</Text>
          </View>
        </TouchableOpacity>
      )

      signInMenus.push(
          <TouchableOpacity onPress={this.gotoAutoSyncSelection}>
            <View style={styles.titleContainer}>
              <Icon name="ios-download-outline" size={30} style={{top:5}}/>
              <Text style={styles.menuModalItem}>Kotak Masuk</Text>
            </View>
          </TouchableOpacity>
      )

      signInMenus.push(
          <TouchableOpacity onPress={logout}>
            <View style={styles.titleContainer}>
              <Icon name="ios-person-outline" size={30} style={{top:5}}/>
              <Text style={styles.menuModalItem}>Akun Saya</Text>
            </View>
          </TouchableOpacity>
      )

      signInMenus.push(
          <TouchableOpacity>
            <View style={styles.titleContainer}>
              <Icon name="ios-help-buoy-outline" size={30} style={{top:5}}/>
              <Text style={[styles.menuModalItem, {marginLeft: 15}]}>Bantuan</Text>
            </View>
          </TouchableOpacity>
      )


    return (
      <TouchableWithoutFeedback>
        <Modal
          supportedOrientations={['portrait', 'landscape']}
          animationIn='slideInLeft'
          animationOut='slideOutLeft'
          isVisible={visible}
          onBackdropPress={hideModal}
          style={styles.menuModal}
        >
          <TouchableWithoutFeedback onPress={this.triggerDeveloperMenu}>
            <View style={styles.menuModalContainer}>
              {signInMenus}
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </TouchableWithoutFeedback>
    )
  }

  test() {
    console.log('dapet');
  }
}


let mapStateToProps = (state, props) => {
  return {
    visible: state.sidebarModal.visible,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => {
      dispatch(menuSetVisibility(false))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarModal)

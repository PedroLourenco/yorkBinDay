import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StatusBar from '../../Components/StatusBar';
import styles from './styles';
import CollectionData from './CollectionData';
import Api from '../../Utils/api';

import {
    View,
    ActivityIndicator
} from 'react-native';

class CollectionDateScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
        data: [],
        isLoading: true
    }
  }

  componentWillMount() {
    this.fetchData().done();
  }

// Request data async and fire the render fucntion when finish
  fetchData() {
    return new Promise((resolve, reject) => {
      Api.getWasteCollectionDatabyUprn(this.props.navigation.state.params.urpn)
      .then((data) => {
        this.setState({
          isLoading: false,
          data: data
        })
      }).catch(() => {
        this.setState({
          isLoading: false,
          data: []
        })
      })
    });
  };

  render() {
    const {navigation} = this.props

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <StatusBar
            title="Collection Dates"
            leftButton={require('../../../assets/images/btn_back.png')}
            onpress={() => navigation.goBack()}
          />

          <ActivityIndicator
            animating={this.state.isLoading}
            style={styles.centering}
            size="large"/>
        </View>
      )
    } else {
      return(
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <StatusBar
            title="Collection Dates"
            leftButton={require('../../../assets/images/btn_back.png')}
            onpress={() => navigation.goBack()}
          />

          <CollectionData
            data={this.state.data}
          />
        </View>
      )
    }
  }
}

CollectionDateScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

module.exports = CollectionDateScreen

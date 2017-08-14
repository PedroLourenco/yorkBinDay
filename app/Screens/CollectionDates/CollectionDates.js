import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StatusBar from '../../Components/StatusBar';

import {
    View
} from 'react-native';

class CollectionDateScreen extends Component {
  constructor(props) {
    super(props)
  }

    render() {
      const { navigation } = this.props;

      return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <StatusBar
            title = "Collection Dates"
            leftButton = { require('../../../assets/images/btn-back.png') }
            onpress = { () => navigation.goBack() }
          />
        </View>
      );
    }
  }

module.exports = CollectionDateScreen

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import AddressData from './AddressData';
import Api from '../../Utils/api';
import StatusBar from '../../Components/StatusBar';
import { List, ListItem } from "react-native-elements";

import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    Image,
    ActivityIndicator
} from 'react-native';

class AddressScreen extends Component {
    constructor(props) {
        super(props)

        console.log(props);

        this.state = {
            data: [],
            isLoading: true
        }
    }

    componentWillMount() {
        this.fetchData().done()
    }

    fetchData() {
        return new Promise((resolve, reject) => {
            Api.getPropertiesForPostCode(this.props.navigation.state.params.code)
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

    // Render the loadingwheel and the list when we get the data
    // TODO Handle the error message or no data
    render() {

      const {navigation} = this.props

      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, backgroundColor: '#fff'}}>
            <StatusBar
              title="Chosse Address"
              leftButton={require('../../../assets/images/btn_back.png')}
              onpress={() => navigation.goBack()}
            />

            <ActivityIndicator
              animating={this.state.isLoading}
              style={styles.centering}
              size="large"/>
          </View>
        );
      } else {
        return (
          <View style={{flex: 1, backgroundColor: '#fff'}}>
            <StatusBar
              title="Chosse Address"
              leftButton={require('../../../assets/images/btn_back.png')}
              onpress={() => navigation.goBack()}
            />

            <AddressData
              data = {this.state.data}
              navigation = {navigation}
            />
          </View>
        );
      }
    }
}

AddressScreen.propTypes = {
    navigation: PropTypes.object.isRequired
}

module.exports = AddressScreen

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import AddressData from './AddressData';
import Api from '../../Utils/api';

import {
    Text,
    View,
    StatusBar,
    StyleSheet,
    TouchableHighlight,
    Image,
    ActivityIndicator
} from 'react-native';

class AddressScreen extends Component {
    constructor(props) {
        super(props)

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
            Api.getPropertiesForPostCode2(this.props.navigation.state.params.code)
            .then((data) => {
                this.setState({
                    isLoading: false,
                    data: data
                })
                console.log(data.length);
                console.log(data);
            }).catch(() => {
                console.log("error");
                this.setState({
                    isLoading: false,
                    data: []
                })
            })
        });
    };

    // Render the lodingwheel and the list when we get the data
    // TODO Handle the error message or no data
    render() {
        const { navigation } = this.props

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                        <View style={ styles.statusBar }>
                            <Text style={ styles.headerTxt }>Choose your Address</Text>

                        <TouchableHighlight
                            style={ styles.btn }
                            onPress={ () => navigation.goBack() }>
                        <Image
                            style={ styles.btnLeft }
                            source={ require('../../../assets/images/btn-back-black.png') } />
                        </TouchableHighlight>
                        <ActivityIndicator
                            animating={ this.state.isLoading }
                            style={ styles.centering }
                            size="large" />
                    </View>
                </View>
            );
        } else {
            return (
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View style={ styles.statusBar }>
                        <Text style={ styles.headerTxt }>Choose your Address</Text>

                        <TouchableHighlight
                            style={ styles.btn }
                            onPress={ () => navigation.goBack() }>
                            <Image
                                style={ styles.btnLeft }
                                source={ require('../../../assets/images/btn-back-black.png') } />
                        </TouchableHighlight>

                    </View>
                    <AddressData data = {this.state.data}/>
                </View>
            );
        }
    }
}

AddressScreen.propTypes = {
    navigation: PropTypes.object.isRequired
}

module.exports = AddressScreen

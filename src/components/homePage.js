'use strict';


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
} from 'react-native';

import Button from './button';
import {requestSearch} from '../actions'
import {Actions} from 'react-native-router-flux';

var windowWidth = Dimensions.get('window').width;
import {store, onChange, removeOnChange} from '../store'
import Loading from './Loading';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lineNumber: ''
        };
    }

    onUpdate() {
        var {search} = store.getState();
        if (search != this.state.search) {
            var {isFetching}= search || {isFetching: false};
            var newState = {
                ...this.state,
                isFetching,
                search
            };
            this.setState(newState);
            if (!isFetching && search && Object.keys(search.items).length > 0) {
                Actions.ResultPage();
            }
        }
    }

    componentWillMount() {
        onChange(this.onUpdate.bind(this));
    }

    componentWillUnmount() {
        removeOnChange(this.onUpdate.bind(this))
    }

    handleSearch(e) {
        e.preventDefault();
        const {dispatch} = this.props;
        if (!this.state.lineNumber || this.state.lineNumber < 0 || isNaN(this.state.lineNumber)) return;
        dispatch(requestSearch(this.state.lineNumber));
    }

    onChangeLineNumber(lineNumber) {
        this.setState({lineNumber})
    }

    render() {
        const {isFetching, search} = this.state;
        return (
            <View style={styles.container}>

                <Text style={styles.title}>Search stops point</Text>
                <Text></Text>
                <View style={styles.wrapInput}>
                    <TextInput
                        style={{height: 40, width: windowWidth, borderWidth: 0}}
                        placeholder="Line Number"
                        onChangeText={(lineNumber)=>{this.setState({lineNumber})}}
                        keyboardType='numeric'
                        value={this.state.lineNumber}
                        underlineColorAndroid='rgba(0,0,0,0)'
                    />
                </View>
                <Button onPress={this.handleSearch.bind(this)} style={{marginTop: 10}}>Search</Button>
                {isFetching ? <Loading text="Loading"/> : null}

            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    wrapInput: {
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10
    }
});

export default Register;
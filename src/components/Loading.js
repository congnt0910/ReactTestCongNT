import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    View,
    Platform,
    Dimensions,
    ActivityIndicator
} from 'react-native';


var windowWidth = Dimensions.get('window').width;
var windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)',
        ...Platform.select({
            ios: {
                alignItems: 'stretch',
            },
            android: {
                alignItems: 'center',
            },
        }),
        width: windowWidth,
        height: windowHeight,
        top: 0,
        bottom: 0,
        position: 'absolute'
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    gray: {
        backgroundColor: '#cccccc',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 8,
    },
    txt: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default class Loading extends Component {
    state:State;
    _timer:Timer;

    constructor(props) {
        super(props);
        this.state = {
            animating: true,
        };
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.centering}>
                    <ActivityIndicator
                        animating={this.state.animating}
                        style={[styles.centering, {height: 80}]}
                        size="large"
                    />

                    <Text style={styles.txt}>Loading...</Text>
                </View>
            </View>
        );
    }
}

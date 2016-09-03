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
//
// var styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         // backgroundColor:'rgba(191,189,189,1)',
//         backgroundColor:'red',
//         ...Platform.select({
//             ios: {
//                 alignItems: 'stretch',
//             },
//             android: {
//                 alignItems: 'center',
//             },
//         }),
//         width: windowWidth,
//         height: windowHeight,
//         top: 0,
//         bottom: 0,
//         position:'absolute'
//     },
//     content: {
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     txt: {
//         color: '#fff',
//     }
// });

const styles = StyleSheet.create({

        container: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor:'rgba(0,0,0,0.8)',
            // backgroundColor: 'red',
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
    txt:{color:'white'},
});
export default class Loading extends Component {
    /**
     * Optional Flowtype state and timer types
     */
    state:State;
    _timer:Timer;

    constructor(props) {
        super(props);
        this.state = {
            animating: true,
        };
    }

    componentDidMount() {
        // this.setToggleTimeout();
    }

    componentWillUnmount() {
        // clearTimeout(this._timer);
    }

    setToggleTimeout() {
        this._timer = setTimeout(() => {
            this.setState({animating: !this.state.animating});
            this.setToggleTimeout();
        }, 2000);
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    animating={this.state.animating}
                    style={[styles.centering, {height: 80}]}
                    size="large"
                />
                <Text style={styles.txt}>Loading...</Text>
            </View>
        );
    }
}

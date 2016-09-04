import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

class Button extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress.bind(this)}
                              style={this.props.style ? [styles.btn, this.props.style]: styles.btn}>
                <Text style={styles.txt}>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}


var styles = StyleSheet.create({
    txt: {
        color: "white"
    },
    btn: {
        borderColor: 'white',
        borderWidth: 1,
        padding: 10,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 4,
        backgroundColor: '#5bc0de'
    }
});

export default Button;
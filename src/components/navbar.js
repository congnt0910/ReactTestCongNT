'use strict';

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';


import NavigationBar from 'react-native-navbar';

class NavBarBase extends Component {
    onPrev() {
        var Actions = this.props.routes;
        if (this.props.onPrev) {
            this.props.onPrev();
            return;
        }
        if (this.props.navigator && this.props.navigator.getCurrentRoutes().length > 1) {
            Actions.pop();
        }
    }

    render() {
        return <NavigationBar style={styles.navBar}
                              titleColor='white'
                              buttonsColor='white'
                              statusBar={{style:'light-content', hidden: false}}
                              title={{title:this.props.title}}
                              prevTitle={this.props.initial ? " " : null}
                              leftButton={this.props.leftButton ? this.props.leftButton : {title:''}}
                              rightButton={this.props.rightButton ? this.props.rightButton : {title:''}}


        />
    }
}
class NavBar extends Component {
    render() {
        var Actions = this.props.routes;
        return <NavBarBase customNext={<View/>} {...this.props}
                           leftButton={{title:'Left', handler:this.props.onPrev || Actions.pop}}/>
    }
}


class NavBarModal extends Component {
    render() {
        var Actions = this.props.routes;
        return <NavBarBase customPrev={<View/>} nextTitle="Close" {...this.props}
                           rightButton={{title:'Close', handler:this.props.onNext || Actions.pop}}/>
    }
}

var styles = StyleSheet.create({
    navBar: {
        backgroundColor: '#0db0d9'
    },
});

export {NavBar, NavBarModal};
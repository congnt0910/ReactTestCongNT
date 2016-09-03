import React, {Component, PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform
} from 'react-native';

import {createStore, combineReducers} from 'redux';
import {connect} from 'react-redux';

import {Actions, ActionConst, Router, Reducer, Scene} from 'react-native-router-flux';

import Home from './components/HomePage';
import ResultPage from './components/ResultPage';
import DetailsPage from './components/DetailsPage';

// define this based on the styles/dimensions you use
const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
    const style = {
        flex: 1,
        backgroundColor: '#fff',
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
    };
    if (computedProps.isActive) {
        // style.marginTop = computedProps.hideNavBar ? 0 : 64;
        style.marginTop = computedProps.hideNavBar ? 0 : Platform.OS === 'android' ? 54 : 64;
        // style.marginBottom = computedProps.hideTabBar ? 0 : 10;
    }
    return style;
};


const scenes = Actions.create(
    <Scene key="Root">
        <Scene key="home" component={Home} initial={ true } hideNavBar={true}/>
        <Scene key="ResultPage" component={ResultPage} hideNavBar={false} title="Stop Points"/>
        <Scene key="DetailsPage" component={DetailsPage} title="Stop Point Details"/>
    </Scene>
);


class App extends Component {


    static propTypes = {
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    reducerCreate(params) {
        const defaultReducer = new Reducer(params);
        const {dispatch} = this.props;
        return (state, action) => {
            dispatch(action);
            return defaultReducer(state, action);
        };
    }

    render() {
        return (
            <Router createReducer={this.reducerCreate.bind(this)} getSceneStyle={getSceneStyle}
                    dispatch={this.props.dispatch} scenes={scenes}/>
        )
    }
}


function mapStateToProps(state) {
    const {
        search,
        selectStopPoint
    } = state;

    const {
        isFetching,
        // items: listResult
    } = search || {
        isFetching: true,
        items: []
    };

    
    return {
        search,
        selectStopPoint,
        isFetching,
        // listResult
    }
}

export default connect(mapStateToProps)(App)



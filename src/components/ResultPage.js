/**
 * Display result search
 *  stopPoints list
 * */

'use strict';


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    ListView,
    TouchableOpacity
} from 'react-native';


import {requestSelectStopPoint} from '../actions'
import {store, onChange, removeOnChange} from '../store'
import {Actions} from 'react-native-router-flux';

import Loading from './Loading';

class ResultPage extends Component {
    constructor(props) {
        super(props);
        var {search} = store.getState();

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => !immutable.is(r1, r2),
        });
        this.state = {
            dataSource: ds.cloneWithRows(search.items.stopPointSequences[0].stopPoint),
            lineName: search.items.lineName,
            isFetching: false
        }
    }

    onUpdate() {
        var {selectStopPoint} = store.getState();
        if (selectStopPoint != this.state.selectStopPoint) {
            var {isFetching}= selectStopPoint || {isFetching: false};
            var newState = {
                ...this.state,
                isFetching,
                selectStopPoint
            };
            this.setState(newState);
            if (!isFetching && selectStopPoint && Object.keys(selectStopPoint.data).length > 0) {
                Actions.DetailsPage();
            }
        }
    }

    componentWillMount() {
        onChange(this.onUpdate.bind(this));
    }

    componentWillUnmount() {
        removeOnChange(this.onUpdate.bind(this))
    }

    handleDetail(rowData, e) {
        e.preventDefault();
        const {dispatch} = this.props;
        dispatch(requestSelectStopPoint(rowData.id));
    }

    renderRow(rowData) {
        return (
            <TouchableOpacity onPress={this.handleDetail.bind(this, rowData)}>
                <View style={{borderBottomWidth:1, borderBottomColor:'#CCC', padding: 3,}}>
                    <Text style={styles.item}>{rowData.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        const {isFetching} = this.state;
        return (
            <View style={styles.maincontainer}>
                <Text style={styles.title}>List of stops is available for line {this.state.lineName}</Text>
                <ListView
                    style={styles.list}
                    ref="listView"
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
                {isFetching ? <Loading text="Loading"/> : null}
            </View>
        )
    }
}


var styles = StyleSheet.create({
    title:{
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 6,
        marginBottom: 6,
    },
    maincontainer: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 10,
        flexDirection: 'column',
    },
    list: {
        flex: 1,
        flexDirection: 'column',
    },
    item: {
        margin: 3,
        flex: 1,
        height: 27,
        justifyContent: 'center',
    }
});


export default ResultPage;
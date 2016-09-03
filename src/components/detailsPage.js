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

import Button from './button';

import {requestSelectStopPoint} from '../actions'
// import {fetchListStopPoint} from '../sagas';
import {store, onChange, removeOnChange} from '../store'

var windowWidth = Dimensions.get('window').width;


class ResultPage extends Component {
    constructor(props) {
        super(props);
        var {selectStopPoint} = store.getState();

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => !immutable.is(r1, r2),
        });
        this.state = {
            dataSource: ds.cloneWithRows(selectStopPoint.data)
        };
       //  var dataTmp = {"isFetching":false,"data":[{"$type":"Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities","id":"1951961493","operationType":1,"vehicleId":"BX04BAU","naptanId":"490010131WB","stationName":"Museum Street","lineId":"1","lineName":"1","platformName":"E","direction":"outbound","bearing":"53","destinationNaptanId":"","destinationName":"Canada Water","timestamp":"2016-09-03T08:17:40Z","timeToStation":982,"currentLocation":"","towards":"Aldwych, Angel, Bank or Old Street","expectedArrival":"2016-09-03T08:34:02.0982767Z","timeToLive":"2016-09-03T08:34:32.0982767Z","modeName":"bus"},{"$type":"Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities","id":"120905560","operationType":1,"vehicleId":"BX04BBJ","naptanId":"490010131WB","stationName":"Museum Street","lineId":"1","lineName":"1","platformName":"E","direction":"outbound","bearing":"53","destinationNaptanId":"","destinationName":"Canada Water","timestamp":"2016-09-03T08:17:40Z","timeToStation":442,"currentLocation":"","towards":"Aldwych, Angel, Bank or Old Street","expectedArrival":"2016-09-03T08:25:02.0982767Z","timeToLive":"2016-09-03T08:25:32.0982767Z","modeName":"bus"},{"$type":"Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities","id":"1056470959","operationType":1,"vehicleId":"LF52THV","naptanId":"490010131WB","stationName":"Museum Street","lineId":"1","lineName":"1","platformName":"E","direction":"outbound","bearing":"53","destinationNaptanId":"","destinationName":"Canada Water","timestamp":"2016-09-03T08:17:40Z","timeToStation":1546,"currentLocation":"","towards":"Aldwych, Angel, Bank or Old Street","expectedArrival":"2016-09-03T08:43:26.0982767Z","timeToLive":"2016-09-03T08:43:56.0982767Z","modeName":"bus"},{"$type":"Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities","id":"-1482876561","operationType":1,"vehicleId":"LX59CZN","naptanId":"490010131WB","stationName":"Museum Street","lineId":"171","lineName":"171","platformName":"E","direction":"inbound","bearing":"53","destinationNaptanId":"","destinationName":"Bellingham, Catford Bus Garage","timestamp":"2016-09-03T08:17:40Z","timeToStation":1079,"currentLocation":"","towards":"Aldwych, Angel, Bank or Old Street","expectedArrival":"2016-09-03T08:35:39.0982767Z","timeToLive":"2016-09-03T08:36:09.0982767Z","modeName":"bus"},{"$type":"Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities","id":"-832439701","operationType":1,"vehicleId":"YX12FPF","naptanId":"490010131WB","stationName":"Museum Street","lineId":"171","lineName":"171","platformName":"E","direction":"inbound","bearing":"53","destinationNaptanId":"","destinationName":"Bellingham, Catford Bus Garage","timestamp":"2016-09-03T08:17:40Z","timeToStation":1559,"currentLocation":"","towards":"Aldwych, Angel, Bank or Old Street","expectedArrival":"2016-09-03T08:43:39.0982767Z","timeToLive":"2016-09-03T08:44:09.0982767Z","modeName":"bus"},{"$type":"Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities","id":"-103854851","operationType":1,"vehicleId":"LJ61NVE","naptanId":"490010131WB","stationName":"Museum Street","lineId":"19","lineName":"19","platformName":"E","direction":"inbound","bearing":"53","destinationNaptanId":"","destinationName":"Finsbury Park Station","timestamp":"2016-09-03T08:17:40Z","timeToStation":465,"currentLocation":"","towards":"Aldwych, Angel, Bank or Old Street","expectedArrival":"2016-09-03T08:25:25.0982767Z","timeToLive":"2016-09-03T08:25:55.0982767Z","modeName":"bus"},{"$type":"Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities","id":"-1491013616","operationType":1,"vehicleId":"LJ61NVF","naptanId":"490010131WB","stationName":"Museum Street","lineId":"19","lineName":"19","platformName":"E","direction":"inbound","bearing":"53","destinationNaptanId":"","destinationName":"Finsbury Park Station","timestamp":"2016-09-03T08:17:40Z","timeToStation":1276,"currentLocation":"","towards":"Aldwych, Angel, Bank or Old Street","expectedArrival":"2016-09-03T08:38:56.0982767Z","timeToLive":"2016-09-03T08:39:26.0982767Z","modeName":"bus"},{"$type":"Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities","id":"-1136111458","operationType":1,"vehicleId":"LJ61NVH","naptanId":"490010131WB","stationName":"Museum Street","lineId":"19","lineName":"19","platformName":"E","direction":"inbound","bearing":"53","destinationNaptanId":"","destinationName":"Finsbury Park Station","timestamp":"2016-09-03T08:17:40Z","timeToStation":934,"currentLocation":"","towards":"Aldwych, Angel, Bank or Old Street","expectedArrival":"2016-09-03T08:33:14.0982767Z","timeToLive":"2016-09-03T08:33:44.0982767Z","modeName":"bus"},{"$type":"Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities","id":"-1854820060","operationType":1,"vehicleId":"LJ61NVZ","naptanId":"490010131WB","stationName":"Museum Street","lineId":"19","lineName":"19","platformName":"E","direction":"inbound","bearing":"53","destinationNaptanId":"","destinationName":"Finsbury Park Station","timestamp":"2016-09-03T08:17:40Z","timeToStation":1745,"currentLocation":"","towards":"Aldwych, Angel, Bank or Old Street","expectedArrival":"2016-09-03T08:46:45.0982767Z","timeToLive":"2016-09-03T08:47:15.0982767Z","modeName":"bus"},{"$type":"Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities","id":"-660495213","operationType":1,"vehicleId":"LF52UPB","naptanId":"490010131WB","stationName":"Museum Street","lineId":"242","lineName":"242","platformName":"E","direction":"inbound","bearing":"53","destinationNaptanId":"","destinationName":"Homerton Hospital","timestamp":"2016-09-03T08:17:40Z","timeToStation":75,"currentLocation":"","towards":"Aldwych, Angel, Bank or Old Street","expectedArrival":"2016-09-03T08:18:55.0982767Z","timeToLive":"2016-09-03T08:19:25.0982767Z","modeName":"bus"},{"$type":"Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities","id":"1626093530","operationType":1,"vehicleId":"LF52UPW","naptanId":"490010131WB","stationName":"Museum Street","lineId":"242","lineName":"242","platformName":"E","direction":"inbound","bearing":"53","destinationNaptanId":"","destinationName":"Homerton Hospital","timestamp":"2016-09-03T08:17:40Z","timeToStation":481,"currentLocation":"","towards":"Aldwych, Angel, Bank or Old Street","expectedArrival":"2016-09-03T08:25:41.0982767Z","timeToLive":"2016-09-03T08:26:11.0982767Z","modeName":"bus"},{"$type":"Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities","id":"77399372","operationType":1,"vehicleId":"LJ09SSV","naptanId":"490010131WB","stationName":"Museum Street","lineId":"242","lineName":"242","platformName":"E","direction":"inbound","bearing":"53","destinationNaptanId":"","destinationName":"Homerton Hospital","timestamp":"2016-09-03T08:17:40Z","timeToStation":1392,"currentLocation":"","towards":"Aldwych, Angel, Bank or Old Street","expectedArrival":"2016-09-03T08:40:52.0982767Z","timeToLive":"2016-09-03T08:41:22.0982767Z","modeName":"bus"},{"$type":"Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities","id":"439566014","operationType":1,"vehicleId":"LJ09SUH","naptanId":"490010131WB","stationName":"Museum Street","lineId":"242","lineName":"242","platformName":"E","direction":"inbound","bearing":"53","destinationNaptanId":"","destinationName":"Homerton Hospital","timestamp":"2016-09-03T08:17:40Z","timeToStation":56,"currentLocation":"","towards":"Aldwych, Angel, Bank or Old Street","expectedArrival":"2016-09-03T08:18:36.0982767Z","timeToLive":"2016-09-03T08:19:06.0982767Z","modeName":"bus"},{"$type":"Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities","id":"-1587879739","operationType":1,"vehicleId":"LJ59AEX","naptanId":"490010131WB","stationName":"Museum Street","lineId":"242","lineName":"242","platformName":"E","direction":"inbound","bearing":"53","destinationNaptanId":"","destinationName":"Homerton Hospital","timestamp":"2016-09-03T08:17:40Z","timeToStation":912,"currentLocation":"","towards":"Aldwych, Angel, Bank or Old Street","expectedArrival":"2016-09-03T08:32:52.0982767Z","timeToLive":"2016-09-03T08:33:22.0982767Z","modeName":"bus"},{"$type":"Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities","id":"624439088","operationType":1,"vehicleId":"LTZ1002","naptanId":"490010131WB","stationName":"Museum Street","lineId":"38","lineName":"38","platformName":"E","direction":"inbound","bearing":"53","destinationNaptanId":"","destinationName":"Clapton Pond","timestamp":"2016-09-03T08:17:40Z","timeToStation":1502,"currentLocation":"","towards":"Aldwych, Angel, Bank or Old Street","expectedArrival":"2016-09-03T08:42:42.0982767Z","timeToLive":"2016-09-03T08:43:12.0982767Z","modeName":"bus"},{"$type":"Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities","id":"1831748676","operationType":1,"vehicleId":"LTZ1199","naptanId":"490010131WB","stationName":"Museum Street","lineId":"38","lineName":"38","platformName":"E","direction":"inbound","bearing":"53","destinationNaptanId":"","destinationName":"Clapton Pond","timestamp":"2016-09-03T08:17:40Z","timeToStation":1729,"currentLocation":"","towards":"Aldwych, Angel, Bank or Old Street","expectedArrival":"2016-09-03T08:46:29.0982767Z","timeToLive":"2016-09-03T08:46:59.0982767Z","modeName":"bus"},{"$type":"Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities","id":"-1882336980","operationType":1,"vehicleId":"LTZ1208","naptanId":"490010131WB","stationName":"Museum Street","lineId":"38","lineName":"38","platformName":"E","direction":"inbound","bearing":"53","destinationNaptanId":"","destinationName":"Clapton Pond","timestamp":"2016-09-03T08:17:40Z","timeToStation":482,"currentLocation":"","towards":"Aldwych, Angel, Bank or Old Street","expectedArrival":"2016-09-03T08:25:42.0982767Z","timeToLive":"2016-09-03T08:26:12.0982767Z","modeName":"bus"},{"$type":"Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities","id":"-1702218748","operationType":1,"vehicleId":"LTZ1210","naptanId":"490010131WB","stationName":"Museum Street","lineId":"38","lineName":"38","platformName":"E","direction":"inbound","bearing":"53","destinationNaptanId":"","destinationName":"Clapton Pond","timestamp":"2016-09-03T08:17:40Z","timeToStation":1059,"currentLocation":"","towards":"Aldwych, Angel, Bank or Old Street","expectedArrival":"2016-09-03T08:35:19.0982767Z","timeToLive":"2016-09-03T08:35:49.0982767Z","modeName":"bus"},{"$type":"Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities","id":"1607998794","operationType":1,"vehicleId":"LTZ1226","naptanId":"490010131WB","stationName":"Museum Street","lineId":"38","lineName":"38","platformName":"E","direction":"inbound","bearing":"53","destinationNaptanId":"","destinationName":"Clapton Pond","timestamp":"2016-09-03T08:17:40Z","timeToStation":883,"currentLocation":"","towards":"Aldwych, Angel, Bank or Old Street","expectedArrival":"2016-09-03T08:32:23.0982767Z","timeToLive":"2016-09-03T08:32:53.0982767Z","modeName":"bus"},{"$type":"Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities","id":"625422142","operationType":1,"vehicleId":"LTZ1232","naptanId":"490010131WB","stationName":"Museum Street","lineId":"38","lineName":"38","platformName":"E","direction":"inbound","bearing":"53","destinationNaptanId":"","destinationName":"Clapton Pond","timestamp":"2016-09-03T08:17:40Z","timeToStation":1322,"currentLocation":"","towards":"Aldwych, Angel, Bank or Old Street","expectedArrival":"2016-09-03T08:39:42.0982767Z","timeToLive":"2016-09-03T08:40:12.0982767Z","modeName":"bus"},{"$type":"Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities","id":"624373559","operationType":1,"vehicleId":"LTZ1382","naptanId":"490010131WB","stationName":"Museum Street","lineId":"55","lineName":"55","platformName":"E","direction":"inbound","bearing":"53","destinationNaptanId":"","destinationName":"Leyton Bakers Arms","timestamp":"2016-09-03T08:17:40Z","timeToStation":27,"currentLocation":"","towards":"Aldwych, Angel, Bank or Old Street","expectedArrival":"2016-09-03T08:18:07.0982767Z","timeToLive":"2016-09-03T08:18:37.0982767Z","modeName":"bus"}]}
       // console.log(dataTmp)
       //  this.state = {
       //      dataSource: ds.cloneWithRows(dataTmp.data)
       //  }
    }

    renderRow(rowData) {
        Date.prototype.yyyymmddhhmmss = function() {
            var yyyy = this.getFullYear();
            var mm = this.getMonth() < 9 ? "0" + (this.getMonth() + 1) : (this.getMonth() + 1); // getMonth() is zero-based
            var dd  = this.getDate() < 10 ? "0" + this.getDate() : this.getDate();
            var hh = this.getHours() < 10 ? "0" + this.getHours() : this.getHours();
            var min = this.getMinutes() < 10 ? "0" + this.getMinutes() : this.getMinutes();
            var ss = this.getSeconds() < 10 ? "0" + this.getSeconds() : this.getSeconds();
            return "".concat(yyyy).concat('-').concat(mm).concat('-').concat(dd).concat(' ').concat(hh).concat(':').concat(min).concat(':').concat(ss);
        };
        var dataTime = new Date(rowData.expectedArrival);
        dataTime = dataTime.yyyymmddhhmmss();
        return (
            <View style={{borderBottomWidth:1, borderBottomColor:'#CCC', padding: 3,}}>
                <View style={styles.itemGroup}>
                    <Text style={[styles.item, styles.itemLeft]}>Destination Name</Text>
                    <Text style={[styles.item, styles.itemRight]}>{rowData.destinationName}</Text>
                </View>
                <View style={styles.itemGroup}>
                    <Text style={[styles.item, styles.itemLeft]}>Station Name</Text>
                    <Text style={[styles.item, styles.itemRight]}>{rowData.stationName}</Text>
                </View>
                <View style={styles.itemGroup}>
                    <Text style={[styles.item, styles.itemLeft]}>direction</Text>
                    <Text style={[styles.item, styles.itemRight]}>{rowData.direction}</Text>
                </View>
                <View style={styles.itemGroup}>
                    <Text style={[styles.item, styles.itemLeft]}>Arrival time</Text>
                    <Text style={[styles.item, styles.itemRight]}>{dataTime}</Text>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.maincontainer}>
                <ListView
                    style={styles.list}
                    ref="listView"
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        )
    }
}


var styles = StyleSheet.create({
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
    itemGroup:{
        flex:1,
        flexDirection: 'row',
    },
    item: {
        margin: 3,
        // flex: 1,
        height: 20,
        justifyContent: 'center',
    },
    itemLeft: {
        flex: 1,
        fontWeight:'bold'
    },
    itemRight: {
        flex: 2,
    }
});


export default ResultPage;
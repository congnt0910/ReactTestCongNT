import React, {Component} from 'react';

import {connect, Provider} from 'react-redux';
import {store} from './store'
import App from './app';



class ReactTestCongNT extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}


export default ReactTestCongNT;

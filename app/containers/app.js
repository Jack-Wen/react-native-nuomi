import React, {Component} from 'react';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import CounterApp from './counterApp';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {

    componentWillReceiveProps(nextProps){
        console.log('App  componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps,  nextState){
        console.log('App  shouldComponentUpdate');
        return true;

    }

    componentWillUpdate(){
        console.log('App  componentWillUpdate');

    }


    render() {
        console.log('App  render');
        return (
            <Provider store={store}>
                <CounterApp />
            </Provider>
        );
    }
}

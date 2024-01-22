const redux = require('redux')
const { configureStore } = require('@reduxjs/toolkit');
const combineReducer = redux.combineReducers

const {incrementAction, decrementAction} = require('./actions/CounterAction')
const {addItemAction} = require('./actions/ListAction')

const someReducer = require('./reducersPasta/CounterReducer')
const listReducer = require('./reducersPasta/ListReducer')



const allReducers = combineReducer({
    counter: someReducer,
    list: listReducer
})


const store = configureStore({reducer: allReducers});

store.subscribe(()=>(console.log(store.getState())))

store.dispatch(addItemAction('Um novo Item'))
store.dispatch(incrementAction());
store.dispatch(decrementAction(6));

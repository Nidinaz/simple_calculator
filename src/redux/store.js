import { rootReducer } from "./rootReducer";
import { configureStore } from '@reduxjs/toolkit'

// import {createStore} from 'redux';
// import {composeWithDevTools} from 'redux-devtools-extension'
// import { compose } from "redux";

// let store = createStore(rootReducer, composeWithDevTools())
let store = configureStore({reducer: rootReducer})

export {store}
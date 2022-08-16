import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './modules';
import loggerMiddleware from './lib/loggerMiddleware';
import ReduxThunk from "redux-thunk"

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, ReduxThunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);



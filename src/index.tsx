import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {StateType, store} from './redux/store';
import {BrowserRouter} from 'react-router-dom';

export const rerenderEntireTree = () => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>
    );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

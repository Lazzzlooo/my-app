import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
  {id: 1, name: 'Dimych', message: 'Hi'},
  {id: 2, name: 'Andrew', message: 'How'},
  {id: 3, name: 'Sveta', message: 'Yo'},
  {id: 4, name: 'Sasha', message: 'Yo'},
  {id: 5, name: 'Viktor', message: 'Yo'},
  {id: 6, name: 'Valera', message: 'How is your it-kamasutra?'}
];

let messages = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How is your it-kamasutra?'},
  {id: 3, message: 'Yo'},
  {id: 4, message: 'Yo'},
  {id: 5, message: 'Yo'}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

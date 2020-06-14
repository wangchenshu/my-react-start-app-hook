import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import MyTitle from './MyTitle';
import Clock from './Clock';
import Counter from './Counter';
import DataLoader from './DataLoader';
import Toggle from './Toggle';
import MyForm from './MyForm';
import MySelect from './MySelect';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>,
  <div>
    <MyTitle />
    <Clock />
    <Counter />
    <Toggle />
    <MyForm />
    <MySelect />
    <DataLoader />
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

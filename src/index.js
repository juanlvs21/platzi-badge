import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// const element = document.createElement('h1')
// element.innerHTML = 'Hello, Platzi Badge'


// container.appendChild(element)

const element = <h1>Hello, Platzi</h1>

const container = document.getElementById('app')

ReactDOM.render(element,container)

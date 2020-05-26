import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Root from './containers/Root';
import GlobalStyle from './GlobalStyle';

ReactDOM.render([
<React.StrictMode key = {1}>
    <Root/>
</React.StrictMode>,<GlobalStyle key = {2}/>], document.getElementById('root'));

serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA





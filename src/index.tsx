import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/App';
import Loader from './containers/Loader';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

ReactDOM.render(
    <Provider store={store}>
        <Loader />
    </Provider>, document.getElementById('loader'));

serviceWorker.unregister();

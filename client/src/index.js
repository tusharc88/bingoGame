import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import rootSaga from './store/sagas';

const store = configureStore();
store.runSaga(rootSaga);

const Root = () => (
  <Provider store={store}>
    <div>Hello World</div>
  </Provider>
);

render(<Root />, document.getElementById('root'));

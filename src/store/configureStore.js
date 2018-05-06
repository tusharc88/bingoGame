import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { isProd } from '../config';

const configureStore = () => {
  const initialState = {};
  const middleware = [thunk];

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      !isProd && typeof window !== 'undefined' && window.devToolsExtension
        ? window.devToolsExtension()
        : f => f
    )
  );

  return store;
};

export default configureStore;

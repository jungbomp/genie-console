import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createStateSyncMiddleware, initMessageListener } from 'redux-state-sync';

import { SET_COPY_WRITING_DEMO_OPTION } from 'src/components/CopyWriting/redux/actionType';
import { SET_GENIE_THEME_DEMO_OPTION } from 'src/components/GenieTheme/redux/actionType';

import history from 'src/History';

import createRootReducer from './reducers';

const config = {
  whitelist: [SET_COPY_WRITING_DEMO_OPTION, SET_GENIE_THEME_DEMO_OPTION],
};

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        createStateSyncMiddleware(config),
      ),
    ),
  );

  initMessageListener(store);

  return store;
};

export default configureStore;

import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import '@fontsource/outfit';
import '@fontsource/noto-sans';

import CopyWriting from 'src/components/CopyWriting/CopyWriting';
import history from './History';
import store from './Redux/store';

import Layout from './components/Layout';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} noInitialPop={true}>
      <Switch>
        <Route exact={true} path='/popup' render={() => <CopyWriting />} />
        <Route render={() => <Layout />} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

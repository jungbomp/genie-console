import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import '@fontsource/outfit';
import '@fontsource/noto-sans';

import CopyWritingDemo from 'src/components/CopyWriting/CopyWritingDemo/CopyWritingDemo';
import history from './History';
import store from './Redux/store';

import Layout from './components/Layout';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} noInitialPop={true}>
      <Switch>
        <Route exact={true} path='/demo/copy-writing' render={() => <CopyWritingDemo />} />
        <Route render={() => <Layout />} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

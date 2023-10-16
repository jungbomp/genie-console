import type { History } from 'history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import globalReducer from 'src/components/redux/reducer';
import copyWritingReducer from 'src/components/CopyWriting/redux/reducer';
import genieThemeReducer from 'src/components/GenieTheme/redux/reducer';
import { REDUCER_SCOPES } from 'src/constants';

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    [REDUCER_SCOPES.GLOBAL]: globalReducer,
    [REDUCER_SCOPES.COPY_WRITING]: copyWritingReducer,
    [REDUCER_SCOPES.GENIE_THEME]: genieThemeReducer,
  });

export default createRootReducer;

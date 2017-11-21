import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

export const history = createHistory();
const historyMiddleware = routerMiddleware(history);

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, historyMiddleware)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  return store;
}

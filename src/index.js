import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './store/store';
import App from './containers/App/App';
import './index.css';
import configureStore from './store/store';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
fetch(`${process.env.PUBLIC_URL}/countries.json`)
.then((response) => response.json())
.then((data) => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" render={(props) => {
            return (
              <App countryData={data} />
            );
          }}/>
        </div>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));
});

registerServiceWorker();

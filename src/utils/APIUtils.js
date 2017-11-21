import request from 'superagent';
import { assign } from 'lodash';

import config from '../config';

const APIUtils = {

  get: function (query, done) {
    const url = `${config.apiBaseUrl}`;

    query = assign(query, {
      APPID: config.apiKey
    });

    request.get(url)
      .query(query)
      .end((err, res) => {
        if (err) {
          if (err.status) {
            err.statusCode = err.status;
          }

          return done(err);
        }

        done(res.body);
      });
  }
};

export default APIUtils;

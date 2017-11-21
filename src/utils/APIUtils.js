import request from 'superagent';

import config from '../config';

const APIUtils = {

  get (query) {
    const url = `${config.apiBaseUrl}`;
    query = Object.assign(query, {
      APPID: config.apiKey
    });
    return new Promise((resolve, reject) => {
      request.get(url)
        .query(query)
        .end((err, res) => {
          if (err) {
            if (err.status) {
              err.statusCode = err.status;
            }

            reject(err);
          }

          resolve(res.body);
        });
    });
  }
};

export default APIUtils;

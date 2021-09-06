import {postRequest} from '../helpers/request';

const login_request = postBody => {
  return new Promise((resolve, reject) => {
    postRequest('login', postBody)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default {login_request};

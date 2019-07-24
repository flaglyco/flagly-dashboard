export const HOST = 'http://api.flagly.co';

const api = {
  registerAccount(email, name, password) {
    let url = `${HOST}/accounts/register`;

    let payload = {
      email,
      name,
      password
    };

    return fetch(url, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(payload) })
      .then(response => {
          let session = response.headers.get('X-Session-Header');
          return response.json()
              .then( body => {
                  if (body.code && body.code >= 400) {
                      return body;
                  }

                  return { account: body, session };
              });
      })
      .catch(e => {
          return e;
      });
  }
};

export default api;

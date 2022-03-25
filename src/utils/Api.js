class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._header = options.headers;
  }

  _getCheckData(res) {
    return res.ok
      ? res.json()
      : Promise.reject('Error ' + res.status + res.statusText);
  }

  login(data) {
    fetch(`${this._baseUrl}/login`, {
      method: 'POST',
      headers: this._header,
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    }).then((res) => this._getCheckData(res));
  }

  register(data) {
    fetch(`${this._baseUrl}/register`, {
      headers: this._header,
      method: 'POST',
      body: JSON.stringify({
        email: data.email,
        name: data.name,
        surname: data.surname,
        password: data.password,
        phone: data.phone,
      }),
    }).then((res) => this._getCheckData(res));
  }

  getCourses() {
    return fetch(`${this._baseUrl}/getAllCourse?limit=100`, {
      method: 'GET',
      headers: this._header,
    }).then((res) => this._getCheckData(res));
  }
}

const api = new Api({
  baseUrl: 'http://20.124.132.2:8080/v1',
  headers: { 'Content-Type': 'application/json' },
});

export default api;

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

  getCourses() {
    return fetch(`${this._baseUrl}/getAllCourse?limit=100`, {
      method: 'GET',
      headers: this._headers,
    }).then((res) => this._getCheckData(res));
  }
}

const api = new Api({
  baseUrl: 'http://20.124.132.2:8080/v1',
  headers: { 'Content-Type': 'application/json' },
});

export default api;

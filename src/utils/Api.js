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
    return fetch(`${this._baseUrl}/auth/login`, {
      method: 'POST',
      headers: this._header,
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    }).then((res) => this._getCheckData(res));
  }

  register(data) {
    return fetch(`${this._baseUrl}/auth/register`, {
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

  getUserCourses = (token) => {
    return fetch(`${this._baseUrl}/user/profile?token=${token}`, {
      method: 'GET',
    }).then((res) => this._getCheckData(res));
  };

  getCourses() {
    return fetch(`${this._baseUrl}/course/getAllCourse?limit=100`, {
      method: 'GET',
      headers: this._header,
    }).then((res) => this._getCheckData(res));
  }

  updateProfile(data) {
    return fetch(`${this._baseUrl}/user/profile`, {
      method: 'PATCH',
      headers: this._header,
      body: JSON.stringify({
        email: data.email,
        name: data.name,
        phone: data.phone,
        surname: data.surname,
        token: data.token,
      }),
    });
  }

  getCourse(id) {
    return fetch(`${this._baseUrl}/course/getCourse?id=${id}`, {
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

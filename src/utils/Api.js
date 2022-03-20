class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._header = options.headers;
  }

  _getCheckData(res) {
    return res.ok
      ? res.json()
      : Promise.reject("Error " + res.status + res.statusText);
  }

  getCoursCard() {
    return fetch(`${this._baseUrl}/getAllCours?limit=40`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._getCheckData(res));
  }
}

const mainCourseCard = new Api({
  baseUrl: "https://20.124.132.2:8080/v1",
  headers: { "Content-Type": "application/json" },
});

export default mainCourseCard;

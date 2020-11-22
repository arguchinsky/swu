/* eslint-disable class-methods-use-this */
export class RequestService {
  constructor(requests) {
    this.requests = requests;
  }

  async getData(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  async getPlanets() {
    const data = await this.getData(this.requests.PLANET);
    return data.results;
  }

  async getPeople() {
    const data = await this.getData(this.requests.PEOPLE);
    return data.results;
  }
}

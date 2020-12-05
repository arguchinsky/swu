/* eslint-disable class-methods-use-this */
import { getRequiredPlanetFields, getRequiredPeopleFields } from '../utils';

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
    const planets = data.results.map(getRequiredPlanetFields);
    return planets;
  }

  async getPeople() {
    const data = await this.getData(this.requests.PEOPLE);
    const people = data.results.map(getRequiredPeopleFields);
    return people;
  }
}

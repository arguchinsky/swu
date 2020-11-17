import { REQUESTS } from './requestConstants';

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export class RequestService {
  async getPlanets() {
    const data = await getData(REQUESTS.PLANET);
    return data.results;
  }
  async getPeople() {
    const data = await getData(REQUESTS.PEOPLE);
    return data.results;
  }
}

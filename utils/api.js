import axios from "axios";

const api = (() => {
  const BASE_URL = "https://api.covid19api.com";

  async function getSummaries() {
    const response = await axios.get(`${BASE_URL}/summary`);

    const {
      data: { Global, Countries },
    } = response;

    const data = { global: Global, countries: Countries };

    return data;
  }

  async function getCountryData(slug) {
    const now = new Date();
    const from = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
    const to = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);

    const response = await axios.get(
      `${BASE_URL}/country/${slug}?from=${from.toISOString()}&to=${to.toISOString()}`
    );

    return response.data;
  }

  return {
    getSummaries,
    getCountryData,
  };
})();

export default api;

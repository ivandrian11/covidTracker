import axios from "axios";

const api = (() => {
  // const username = "corona";
  // const password = "ZUav4vawzCfMcMXHV8B";
  // {
  //   headers: { Authorization: "Basic " + TOKEN },
  // }
  // const TOKEN = Buffer.from(`${username}:${password}`, "utf8").toString(
  //   "base64"
  // );

  const BASE_URL = "https://api.covid19api.com";

  async function getSummaries() {
    const response = await axios.get(`${BASE_URL}/summary`);

    const {
      data: { Global, Countries },
    } = response;

    const data = { global: Global, countries: Countries };

    // console.log(response);

    return data;
  }

  async function getCountryData(slug) {
    const now = new Date();
    const from = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
    const to = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);

    const response = await axios.get(
      `${BASE_URL}/country/${slug}?from=${from.toISOString()}&to=${to.toISOString()}`
    );

    console.log(response.data);

    return response.data;
  }

  return {
    getSummaries,
    getCountryData,
  };
})();

export default api;

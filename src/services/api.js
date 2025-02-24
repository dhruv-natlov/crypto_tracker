import axios from "axios";

const API_URL = "https://api.coingecko.com/api/v3";

export const fetchCryptoList = async () => {
  try {
    const response = await axios.get(`${API_URL}/coins/markets`, {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 10,
        page: 1,
        sparkline: false,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching crypto data:", error);
    return [];
  }
};


export const fetchCryptoDetails = async (coinId) => {
  try {
    const response = await axios.get(`${API_URL}/coins/${coinId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching crypto details:", error);
    return null;
  }
};

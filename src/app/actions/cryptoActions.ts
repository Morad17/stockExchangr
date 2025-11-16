"use server";

export async function getCryptoData() {
  const url = "https://api.coingecko.com/api/v3/global";
  const options = {
    method: "GET",
    headers: {
      "x-cg-demo-api-key": process.env.COINGECKO_API_KEY || "",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getTotalMarketCapChart(days: number = 365) {
  const url = `https://api.coingecko.com/api/v3/global/market_cap_chart?days=${days}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getCoinMarketChart(
  coinId: string = "bitcoin",
  days: number = 30
) {
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

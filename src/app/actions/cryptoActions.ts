"use server";

export async function getCryptoData() {
  const url = "https://api.coingecko.com/api/v3/global";
  const options = {
    method: "GET",
    headers: {
      "x-cg-demo-api-key": process.env.COINGECKO_API_KEY || "",
    },
    body: undefined,
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

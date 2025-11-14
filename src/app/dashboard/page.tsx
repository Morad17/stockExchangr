"use client";

import { useEffect, useState } from "react";
import { getCryptoData } from "../actions/cryptoActions";
import "./dashboard.scss";

export default function Dashboard() {
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCryptoData();
        setCryptoData(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <div className="title-row">
        <h2 className="dashboard-title">Crypto Prices by Market Cap</h2>
      </div>
      <div className="market-cap-row"></div>
      <div className="coin-tables-row"></div>
    </div>
  );
}

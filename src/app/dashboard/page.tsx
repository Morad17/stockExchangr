"use client";

import { useEffect, useState } from "react";
import {
  getCryptoData,
  getTotalMarketCapChart,
} from "../actions/cryptoActions";
import MarketCapChart from "@/components/charts/marketCapChart";
import "./dashboard.scss";

interface ChartData {
  time: number;
  value: number;
}

export default function Dashboard() {
  const [cryptoData, setCryptoData] = useState(null);
  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [globalData, totalMarketCapData] = await Promise.all([
          getCryptoData(),
          getTotalMarketCapChart(365),
        ]);

        setCryptoData(globalData);
        console.log(globalData);
        // Transform total market cap data for chart
        if (totalMarketCapData.market_cap_chart) {
          const formattedData = totalMarketCapData.market_cap_chart.map(
            ([timestamp, value]: [number, number]) => ({
              time: timestamp,
              value: value,
            })
          );
          setChartData(formattedData);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <div className="title-row">
        <h2 className="dashboard-title">Total Crypto Market Cap</h2>
      </div>
      <div className="market-cap-row">
        {chartData.length > 0 && <MarketCapChart data={chartData} />}
      </div>
      <div className="coin-tables-row"></div>
    </div>
  );
}

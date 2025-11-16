"use client";

import { useEffect, useRef } from "react";
import { createChart, ColorType, LineSeries, Time } from "lightweight-charts";

interface ChartData {
  time: number;
  value: number;
}

interface MarketCapChartProps {
  data: ChartData[];
}

export default function MarketCapChart({ data }: MarketCapChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartContainerRef.current || !data.length) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "white" },
        textColor: "black",
      },
      width: chartContainerRef.current.clientWidth,
      height: 400,
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    });

    const lineSeries = chart.addSeries(LineSeries, {
      color: "#2962FF",
      lineWidth: 2,
    });

    // Convert timestamp to seconds (Lightweight Charts expects seconds)
    const formattedData = data.map((item) => ({
      time: Math.floor(item.time / 1000) as Time,
      value: item.value,
    }));

    lineSeries.setData(formattedData);

    chart.timeScale().fitContent();

    // Handle resize
    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [data]);

  return <div ref={chartContainerRef} />;
}

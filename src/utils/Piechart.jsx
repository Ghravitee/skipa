import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

const Piechart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      Chart.defaults.font.color = "#ffffff";
      Chart.defaults.font.size = 24;
      const newChart = new Chart(context, {
        type: "pie",

        data: {
          labels: [
            "80% LP Locked initially",
            "5% Team airdrop",
            "5% Ski Mask Dog Holders",
            "10% Marketing",
          ],
          datasets: [
            {
              label: "Info",
              data: [80, 5, 5, 10],
              backgroundColor: [
                "rgba(0, 255, 255, 0.6)", // Green
                "rgba(30, 144, 255, 0.8)", // Yellow
                "rgba(65, 105, 225, 0.8)", // Red
                "rgba(255, 255, 0, 0.8)",
              ],
              borderColor: [
                "rgba(0, 255, 255, 0.8)", // Green
                "rgba(30, 144, 255, 0.8)", // Yellow
                "rgba(65, 105, 225, 0.8)", // Red
                "rgba(255, 255, 0, 0.8)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {},
      });
      chartRef.current.chart = newChart;
    }
  }, []);
  return (
    <div
      //   style={{ position: "relative", width: "90vw", height: "70vh" }}
      className="lg:w-[500px] lg:h-[70vh]"
    >
      <canvas ref={chartRef} />
    </div>
  );
};

export default Piechart;

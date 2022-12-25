import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

export const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      text: "Summary Stats",
    },
  },
};

export default function BarChart({ data }) {
  return (
    <div className="w-full h-72 lg:h-3/4">
      <Bar
        data={{
          labels: ["Confirmed", "Recovered", "Deaths"],
          datasets: [
            {
              label: "People",
              backgroundColor: [
                "rgb(245, 158, 11)",
                "rgb(21, 128, 61)",
                "rgb(185, 28, 28)",
              ],
              data: [
                data.TotalConfirmed,
                data.TotalRecovered,
                data.TotalDeaths,
              ],
            },
          ],
        }}
        options={options}
      />
    </div>
  );
}

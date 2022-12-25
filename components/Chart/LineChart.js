import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { showDefaultDate } from "../../utils";

export const options = {
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "All Stats",
    },
  },
  interaction: {
    mode: "index",
    intersect: false,
  },
};

export default function LineChart({ dailyData }) {
  return (
    <div className="w-full h-96">
      <Line
        data={{
          labels: dailyData.map(({ Date }) => showDefaultDate(Date)),
          datasets: [
            {
              label: "Confirmed",
              data: dailyData.map(({ Confirmed }) => Confirmed),
              borderColor: "rgb(245, 158, 11)",
              backgroundColor: "rgba(245, 158, 11, 0.1)",
              fill: true,
            },
            {
              label: "Active",
              data: dailyData.map(({ Active }) => Active),
              borderColor: "rgb(29 78 216)",
              backgroundColor: "rgba(29, 78, 216, 0.1)",
              fill: true,
            },
            {
              label: "Recovered",
              data: dailyData.map(({ Recovered }) => Recovered),
              borderColor: "rgb(21, 128, 61)",
              backgroundColor: "rgb(21, 128, 61, 0.1)",
              fill: true,
            },
            {
              label: "Deaths",
              data: dailyData.map(({ Deaths }) => Deaths),
              borderColor: "rgb(185, 28, 28)",
              backgroundColor: "rgba(185, 28, 28, 0.1)",
              fill: true,
            },
          ],
        }}
        options={options}
      />
    </div>
  );
}

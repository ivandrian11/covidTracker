import React from "react";
import Card from "./Card";

export default function Cards({ data }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      <Card
        title="Confirmed"
        today={data.NewConfirmed}
        total={data.TotalConfirmed}
        className="border-t-4 border-amber-500 text-amber-500"
      />
      <Card
        title="Recovered"
        today={data.NewRecovered}
        total={data.TotalRecovered}
        className="text-green-700 border-t-4 border-green-700"
      />
      <Card
        title="Deaths"
        today={data.NewDeaths}
        total={data.TotalDeaths}
        className="text-red-700 border-t-4 border-red-700"
      />
    </div>
  );
}

import React from "react";
import { useSelector } from "react-redux";
import Cards from "../components/Cards/Cards";
import BarChart from "../components/Chart/BarChart";
import CountryPicker from "../components/CountryPicker/CountryPicker";
import Header from "../components/Header/Header";

export default function LeftContent({ data, handleCountryChange }) {
  const { selected = null } = useSelector((states) => states);

  return (
    <div className="w-full mb-10 space-y-4 lg:w-3/4 lg:mr-5">
      <div className="space-y-4">
        <Header data={selected !== null ? selected : data.global} />
        <Cards data={selected !== null ? selected : data.global} />
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-md">Cases:</h2>
        <CountryPicker
          handleCountryChange={handleCountryChange}
          data={data.countries}
        />
      </div>
      <BarChart data={selected !== null ? selected : data.global} />
    </div>
  );
}

import React from "react";
import { showFormattedDate } from "../../utils";

const Header = ({ data }) => {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">COVID-19 Tracker</h1>
      <p className="text-sm text-gray-600">
        Last update on{" "}
        <span className="font-semibold">{showFormattedDate(data.Date)}</span>
      </p>
    </header>
  );
};

export default Header;

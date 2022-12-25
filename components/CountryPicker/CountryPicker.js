import React, { useState } from "react";
import Select from "react-select";

const CountryPicker = ({ handleCountryChange, data }) => {
  const [selectedCountry, setSelectedCountry] = useState("Global");

  const handleChange = (selectedOption) => {
    setSelectedCountry(selectedOption.label);
    handleCountryChange(selectedOption.value);
  };

  const options = [{ value: null, label: "Global" }];

  if (data) {
    data.map((country) =>
      options.push({ value: country, label: country.Country })
    );
  }

  return (
    <div className="w-72">
      <Select
        placeholder={selectedCountry}
        defaultValue={selectedCountry}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};

export default CountryPicker;

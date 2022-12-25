import React from "react";
import millify from "millify";

const Card = ({ title, total = 0, today = 0, className }) => {
  return (
    <div className={`${className} rounded-md shadow-md p-5 space-y-3 bg-white`}>
      <h3 className="text-gray-400 text-md">{title}</h3>
      <h1 className="flex items-center text-3xl font-medium">
        {today !== 0 && // prettier-ignore
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>}
        {millify(today)}
      </h1>
      <div className="flex items-center space-x-2">
        <p className="text-sm text-gray-500">{millify(total)} Total</p>
      </div>
    </div>
  );
};

export default Card;

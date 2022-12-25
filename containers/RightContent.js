import React from "react";
import millify from "millify";
import Link from "next/link";
import Image from "next/image";

export default function RightContent({ data }) {
  return (
    <div className="w-full p-5 overflow-y-scroll bg-white rounded-md shadow-md h-96 lg:w-1/4 lg:h-full">
      <div className="flex items-center mb-5 text-xl">
        <h1 className="font-medium">Confirmed cases by country</h1>
      </div>
      {data?.map((country, index) => (
        <Link href={`/stats/${country.Slug}`} key={country.Slug}>
          <div
            className={`flex items-center justify-between p-2 ${
              index % 2 === 0 && "bg-gray-100"
            }`}
          >
            <div className="flex items-center gap-x-2">
              <div className="relative block w-8 h-6 border border-black lg:hidden xl:block">
                <Image
                  src={`/flags/${country.CountryCode.toLowerCase()}.svg`}
                  alt={country?.Country}
                  layout="fill"
                  objectFit="cover"
                  quality={80}
                />
              </div>

              <p>{country.Country}</p>
            </div>
            <p>{millify(country.TotalConfirmed)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

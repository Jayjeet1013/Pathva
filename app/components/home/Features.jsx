import React from "react";
import { FaFingerprint, FaMoon } from "react-icons/fa6";
import { FiFilter } from "react-icons/fi";
import { RxLightningBolt } from "react-icons/rx";

const Feature15 = () => {
  const containerStyles = "py-10 bg-white sm:py-16 lg:py-24";
  const innerContainerStyles = "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8";
  const gridStyles =
    "grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12";
  const itemStyles = "flex flex-col items-center";

  return (
    <section className={containerStyles}>
      <div className={innerContainerStyles}>
        <div className={gridStyles}>
          <div className={itemStyles}>
            <div className="h-20 w-20 bg-blue-100 flex items-center justify-center rounded-full">
              <FaFingerprint className="flex items-center justify-center w-8 h-8 mx-auto text-blue-600" />
            </div>

            <h3 className="mt-8 text-lg font-semibold text-black">
              Secured Pathways
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Pathvai ensures all your routes are secure and optimized for safe
              journeys.
            </p>
          </div>
          <div className={itemStyles}>
            <div className="h-20 w-20 bg-orange-100 flex items-center justify-center rounded-full">
              {" "}
              <RxLightningBolt className="flex items-center justify-center w-8 h-8 mx-auto text-orange-600" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Quick Navigation
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Experience lightning-fast navigation with Pathvai’s intuitive
              routes.
            </p>
          </div>
          <div className={itemStyles}>
            <div className="h-20 w-20 bg-green-100 flex items-center justify-center rounded-full">
              <FaMoon className="flex items-center justify-center w-8 h-8 mx-auto text-green-600" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Day & Night Modes
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Switch effortlessly between day and night modes with Pathvai for a
              tailored experience.
            </p>
          </div>

          <div className={itemStyles}>
            <div className="h-20 w-20 bg-red-100 flex items-center justify-center rounded-full">
              <FiFilter className="flex items-center justify-center w-8 h-8 mx-auto text-red-600" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Route Filters
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Easily filter through routes to find the best path with Pathvai.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature15;

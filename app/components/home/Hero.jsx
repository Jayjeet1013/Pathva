"use client";

import Link from "next/link";
import React from "react";
import { LuPlay } from "react-icons/lu";

const PlayIcon = () => <LuPlay className="h-5 w-5 mr-2" />;

const commonStyles = {
  button:
    "inline-flex items-center justify-center px-6 py-2 text-base font-semibold text-white transition-all duration-200 bg-gray-900 rounded-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900",
  navLink:
    "text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600",
  card: "overflow-hidden w-[300px] lg:w-[420px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1",
};

function Hero1() {
  return (
    <div className="">
      <section className="py-12 bg-gray-50 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="px-6 text-lg text-gray-600 font-inter">
              Discover Your Next Adventure, Crafted for Explorers
            </h1>
            <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
              Transform your workflow with
              <span className="relative inline-flex sm:inline">
                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                <span className="relative"> PathvaAI </span>
              </span>
            </p>
            <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              <Link
                href="#"
                title="Explore PathvaAI"
                className={commonStyles.button}
                role="button"
              >
                Explore PathvaAI
              </Link>
             
            </div>
            <p className="mt-8 text-base text-gray-500 font-inter">
              Access powerful tools · No credit card required
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero1;

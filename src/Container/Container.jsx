import React, { useState } from "react";
import Header from "../Components/Header";
import CountriesFlag from "../Components/CountriesFlag";
import { useSelector, useDispatch } from "react-redux";
import Order from "../utils/Order";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Container = () => {
  const [searchValue, setSearchValue] = useState("");
  const [region, setRegion] = useState("All");
  const body = document.querySelectorAll(".body");

  const darkMode = useSelector((state) => state.mode.darkMode);
  if (darkMode) {
    body[0].classList.add("bg-[#FAFAFA]");
    body[0].classList.add("text-[#041A24]");
  }
  return (
    <div
      className={` 
      ${
        darkMode ? " bg-[#FAFAFA] text-[#041A24]" : " bg-[#0d1d2c] text-white"
      }`}
    >
      <div
        className={` 
      ${
        darkMode
          ? " bg-[#FAFAFA] text-[#041A24] z-10"
          : " bg-[#202C37] text-white z-10"
      }`}
      >
        <div className="">
          <Header />
        </div>
        <div className="container mx-auto">
          <Order setSearchValue={setSearchValue} setRegion={setRegion} />
        </div>
      </div>
      <div className="pt-24 px-16 md:px-20 container mx-auto z-2">
        <CountriesFlag searchValue={searchValue} region={region} />
      </div>
    </div>
  );
};

export default Container;

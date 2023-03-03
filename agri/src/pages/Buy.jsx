import React from "react";
import BuyCard from "../components/BuyCard/Buycard";
import data from "../data/crops";

const Buy = () => {
  return (
    <div className="relative h-screen w-screen">
      <div className="absolute top-0 left-0 opacity-30 bg-buy bg-no-repeat bg-cover bg-center bg-fixed h-full w-full"></div>
      <div className="flex absolute top-0 left-0 h-full w-full">
        <div className="flex-[0.25]  sticky max-h-screen w-11/12 mt-[5vh] overflow-hidden">
          <div className="bg-slate-200 py-5 px-5 space-y-10 ml-[3vh] mt-[3vh] rounded-md shadow-lg shadow-slate-700">
            <h1 className="text-3xl font-bold">Search For Products</h1>
            <p className="text-xl font-semibold">Filter by:</p>
            <div className="flex items-center space-x-5">
              {/* <p>Title</p> */}
              <input
                type="text"
                placeholder="Crop Name"
                className="rounded-lg p-1 w-full"
              />
            </div>
            <div className="flex items-center space-x-5">
              {/* <p>Title</p> */}
              <input
                type="text"
                placeholder="Quantity"
                className="rounded-lg p-1 w-full"
              />
            </div>
            <div className="flex items-center space-x-5">
              {/* <p>Title</p> */}
              <input
                type="text"
                placeholder="Location"
                className="rounded-lg p-1 w-full"
              />
            </div>

            <button className="p-2 bg-green-400 rounded-md w-full hover:bg-green-600">
              Search
            </button>
          </div>
        </div>
        <div className="flex-[0.75] flex items-center max-h-screen overflow-y-scroll justify-start  flex-wrap ml-[10vh]">
          {data.map((d, i) => (
            <div className="h-[420px] w-[300px] mr-[60px] mt-[50px]">
              <BuyCard d={d} key={i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Buy;

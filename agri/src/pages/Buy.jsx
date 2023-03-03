import React, { useState } from "react";
import BuyCard from "../components/BuyCard/Buycard";
import data from "../data/crops";

const Buy = () => {
  const [cropName, setCropName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [location, setLocation] = useState("");
  const [cropsData, setCropsData] = useState(data);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute top-0 left-0 opacity-30 bg-buy bg-no-repeat bg-cover bg-center bg-fixed h-full w-full"></div>
      <div className="flex absolute top-0 left-0 h-full w-full overflow-hidden">
        <div className="flex-[0.25]  sticky max-h-screen w-11/12 mt-[5vh] overflow-hidden">
          <div className="bg-slate-200 py-5 px-5 space-y-5 ml-[3vh] mt-[3vh] rounded-md shadow-lg shadow-slate-700">
            <h1 className="text-2xl font-bold uppercase">
              Search For Products
            </h1>
            <p className="text-xl font-semibold">Filter by:</p>
            <div className="flex items-center space-x-5">
              {/* <p>Title</p> */}
              <input
                type="text"
                value={cropName}
                onChange={(e) => setCropName(e.target.value)}
                placeholder="Crop Name"
                className="rounded-lg p-1 w-full placeholder:text-sm"
              />
            </div>
            <div className="flex items-center space-x-5">
              {/* <p>Title</p> */}
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Quantity"
                className="rounded-lg p-1 w-full placeholder:text-sm"
              />
            </div>
            <div className="flex items-center space-x-5">
              {/* <p>Title</p> */}
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                className="rounded-lg p-1 w-full placeholder:text-sm"
              />
            </div>

            {/* <button
              className="p-2 bg-green-400 rounded-md w-full hover:bg-green-600"
              onClick={displaySearchedCrops}
            >
              Search
            </button> */}
          </div>
        </div>
        <div className="flex-[0.75] flex items-start max-h-screen overflow-y-scroll justify-start flex-wrap ml-[20vh]">
          {cropsData.length > 0 ? (
            cropsData
              .filter((u) =>
                u.title.toLowerCase().includes(cropName || quantity || location)
              )
              .map((d, i) => (
                <div className="h-[380px] w-[260px] mr-[60px] mb-[20px] mt-[20px]">
                  <BuyCard d={d} key={i} />
                </div>
              ))
          ) : (
            <span>No products found</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Buy;

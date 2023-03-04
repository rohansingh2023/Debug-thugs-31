import React, { useEffect, useState } from "react";
import BuyCard from "../components/BuyCard/Buycard";
import data from "../data/crops";
import axios from "axios";

const Buy = () => {
  const [cropName, setCropName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [location, setLocation] = useState("");
  const [cropsData, setCropsData] = useState([]);

  useEffect(() => {
    const getCrops = async () => {
      try {
        const res = await axios.get("http://localhost:5001/crops/");
        console.log(res.data);
        setCropsData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCrops();
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute top-0 left-0 opacity-60 bg-buy bg-no-repeat bg-cover bg-center bg-fixed h-full w-full"></div>
      <div className="flex absolute top-0 left-0 h-full w-full overflow-hidden">
        <div className="flex-[0.25]  sticky max-h-screen w-11/12 mt-[5vh] overflow-hidden">
          <div className="bg-slate-200 py-5 px-5 space-y-5 ml-[3vh] mt-[3vh] rounded-md shadow-lg shadow-slate-700">
            <h1 className="text-2xl font-bold uppercase">
              Search For Products
            </h1>
            <p className="text-xl font-semibold">Enter Crop Name:</p>
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
              .filter((u) => u.title.toLowerCase().includes(cropName))
              .map((d) => (
                <div
                  className="h-[380px] w-[260px] mr-[60px] mb-[20px] mt-[20px]"
                  key={d._id}
                >
                  <BuyCard d={d} />
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

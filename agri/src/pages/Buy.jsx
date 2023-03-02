import React from "react";
// import "./Buy.css";
import BuyCard from "../components/BuyCard/Buycard";

const Buy = () => {
  const data = [
    {
      title: "Wheat",
      quantity: 2,
      img: "https://tse1.mm.bing.net/th?id=OIP.zfkVnZ7kRfddKFfTex5I5wHaFl&pid=Api&rs=1&c=1&qlt=95&w=147&h=110",
      location:
        "58MG+MX6, South Central Railway Colony, Nanded, Maharashtra 431605",
    },
    {
      title: "Wheat",
      quantity: 2,
      img: "https://tse1.mm.bing.net/th?id=OIP.zfkVnZ7kRfddKFfTex5I5wHaFl&pid=Api&rs=1&c=1&qlt=95&w=147&h=110",
      location:
        "58MG+MX6, South Central Railway Colony, Nanded, Maharashtra 431605",
    },
    {
      title: "Wheat",
      quantity: 2,
      img: "https://tse1.mm.bing.net/th?id=OIP.zfkVnZ7kRfddKFfTex5I5wHaFl&pid=Api&rs=1&c=1&qlt=95&w=147&h=110",
      location:
        "58MG+MX6, South Central Railway Colony, Nanded, Maharashtra 431605",
    },
    {
      title: "Wheat",
      quantity: 2,
      img: "https://tse1.mm.bing.net/th?id=OIP.zfkVnZ7kRfddKFfTex5I5wHaFl&pid=Api&rs=1&c=1&qlt=95&w=147&h=110",
      location:
        "58MG+MX6, South Central Railway Colony, Nanded, Maharashtra 431605",
    },
    {
      title: "Wheat",
      quantity: 2,
      img: "https://tse1.mm.bing.net/th?id=OIP.zfkVnZ7kRfddKFfTex5I5wHaFl&pid=Api&rs=1&c=1&qlt=95&w=147&h=110",
      location:
        "58MG+MX6, South Central Railway Colony, Nanded, Maharashtra 431605",
    },
    {
      title: "Wheat",
      quantity: 2,
      img: "https://tse1.mm.bing.net/th?id=OIP.zfkVnZ7kRfddKFfTex5I5wHaFl&pid=Api&rs=1&c=1&qlt=95&w=147&h=110",
      location:
        "58MG+MX6, South Central Railway Colony, Nanded, Maharashtra 431605",
    },
    {
      title: "Wheat",
      quantity: 2,
      img: "https://tse1.mm.bing.net/th?id=OIP.zfkVnZ7kRfddKFfTex5I5wHaFl&pid=Api&rs=1&c=1&qlt=95&w=147&h=110",
      location:
        "58MG+MX6, South Central Railway Colony, Nanded, Maharashtra 431605",
    },
    {
      title: "Wheat",
      quantity: 2,
      img: "https://tse1.mm.bing.net/th?id=OIP.zfkVnZ7kRfddKFfTex5I5wHaFl&pid=Api&rs=1&c=1&qlt=95&w=147&h=110",
      location:
        "58MG+MX6, South Central Railway Colony, Nanded, Maharashtra 431605",
    },
  ];

  return (
    // <div className="flex before:bg-test before:bg-no-repeat before:bg-cover before:bg-center before:bg-fixed before:opacity-70 overflow-hidden">
    <div className="flex bg-buy bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="flex-[0.25]  sticky max-h-screen w-11/12 mt-[5vh] overflow-hidden">
        <div className="bg-slate-200 py-5 px-5 space-y-10 ml-[3vh] mt-[3vh] rounded-md shadow-md">
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
          <div className="h-[420px] w-[300px] mr-[80px] mt-[50px]">
            <BuyCard d={d} key={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buy;

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
    <div className="flex items-center justify-center flex-wrap">
      <div className="flex-[0.25] bg-slate-300 h-full w-full"></div>
      <div className="flex-[0.75] flex items-center justify-center flex-wrap">
        {data.map((d, i) => (
          <div className="h-[420px] w-[300px] mr-[100px] mt-[50px]">
            <BuyCard d={d} key={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buy;

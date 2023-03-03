import React from "react";

const Home = () => {
  return (
    <div class="relative">
      <img class="w-full" src="../images/plant1.jpg" />
      <div class="absolute top-1/3 left-1/5 w-5/12 ml-7">
        <h1 class=" text-5xl text-white ">Farming is a profession of hope.</h1>
        <p class="text-xl text-white mt-4 mb-4">
          AgroTrade is a e commerce website where farmers can sell their
          products to consumers
        </p>
        <div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5">
            Explore
          </button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            AgroTrade
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

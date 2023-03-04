import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="relative">
          <img className="w-full" src="../images/plant1.jpg" alt="" />
          <div className="absolute top-1/3 left-1/5 w-5/12 ml-7">
            <h1 className=" text-5xl text-white ">
              Farming is a profession of hope.
            </h1>
            <p className="text-xl text-white mt-4 mb-4">
              AgroTrade is an e commerce website where farmers can sell their
              products directly to consumers with minimum transportation cost
              and no middle man involved.
            </p>
            <div className="flex mt-20">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                onClick={() => navigate("#more")}
              >
                Explore
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                AgroTrade
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="more"
        className="p-10 grid rounded-1/3 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10"
      >
        {/* <!--Card 1--> */}
        <div className="transition ease-in-out delay-150 rounded overflow-hidden shadow-lg hover:scale-105">
          <img
            className="w-full h-1/2"
            src="../images/vegetable1.jpg"
            alt="Forest"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Fresh Vegetables and Fruits
            </div>
            <p className="text-gray-700 text-base">
              Freshly delivered Fruits and Vegetables with cost
              effectiveness.Freshly delivered Fruits and Vegetables with cost
              effectiveness.
            </p>
            <button className="absolute mt-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => navigate("/buy")}>
              Ready to Buy
            </button>
          </div>
        </div>

        {/* <!--Card 2--> */}
        <div className="transition ease-in-out delay-150 rounded overflow-hidden shadow-lg hover:scale-105">
          <img
            className="w-full h-1/2"
            src="../images/vehicle1.jpg"
            alt="Forest"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Affordable Transportation
            </div>
            <p className="text-gray-700 text-base">
              Farmers can share the transportation cost or by choosing the route
              in which trucks or goods vehicles are running to the main market.
            </p>
            <button className="absolute mt-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => navigate("/shipping")}>
              Start Shipping
            </button>
          </div>
        </div>

        {/* <!--Card 3--> */}
        <div className="transition ease-in-out delay-150 rounded overflow-hidden shadow-lg hover:scale-105">
          <img
            className="w-full h-1/2"
            src="../images/storage2.jpg"
            alt="Forest"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Cold Storage</div>
            <p className="text-gray-700 text-base">
              The cold storages improving the life and retaining freshness of
              the products. Freshly delivered Fruits and Vegetables with cost
              effectiveness.
            </p>
            <button className="absolute mt-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => navigate("/storage")}>
              Store your goods
            </button>
          </div>
        </div>
        {/* card 4 */}
        <div className="transition ease-in-out delay-150 rounded overflow-hidden shadow-lg hover:scale-105">
          <img
            className="w-full h-1/2"
            src="../images/farmer1.jpg"
            alt="Forest"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Happy Farmers</div>
            <p className="text-gray-700 text-base">
              Produced being reached at time with maximum benefit to the
              farmers.Freshly delivered Fruits and Vegetables with cost
              effectiveness.
            </p>
            <button className="absolute mt-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => navigate("/sell")}>
              Sell your produced
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

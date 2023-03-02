import React from "react";

const Card = ({ data }) => {
  return (
    <>
      {console.log("card data", data)}

      <div className="flex flex-row">
        <div className="bg-white shadow-xl rounded-lg py-3">
          <div className="photo-wrapper p-2">
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
              alt="John Doe"
            />
          </div>
          <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
              {data.name}
            </h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
              <p>{data.Name}</p>
            </div>
            <table className="text-xs my-3">
              <tbody>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Location
                  </td>
                  <td className="px-2 py-2">{data.Contact}</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Net Capacity
                  </td>
                  <td className="px-2 py-2">{data.VehicleType}</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Phone
                  </td>
                  <td className="px-2 py-2">{data.LoadingCapacity}</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Phone
                  </td>
                  <td className="px-2 py-2">{data.VehicleNO}</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Phone
                  </td>
                  <td className="px-2 py-2">{data.Route}</td>
                </tr>
              </tbody>
            </table>

            <div className="text-center my-3">
              <a
                className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                href="#"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

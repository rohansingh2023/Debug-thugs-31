import React, { useState } from "react";
import data from "../data/data";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

function CropForm() {
  console.log(data);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [source, setSource] = useState("");
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState("");
  const [address, setAddress] = useState("");
  const [rate, setRate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: name,
      address: address,
      source: source,
      location: location,
      destination: destination,
      desc: desc,
      quantity: quantity,
      rate: rate,
      email: email,
    };
    navigate("/trader", { state: { formData } });
    let filterData = data.filter((it, idx) => {
      return it.quantity < quantity;
    });
    console.log("filterData", filterData);
    console.log(formData); // Outputs form data to console
    // You can use fetch or any other library to send the form data to a server
  };

  return (
    <>
      <body className="bg-cream text-charcoal min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto">
        <main className="flex-1 mx-32 md:p-0 lg:pt-8 lg:px-8 md:mx-36 flex flex-col">
          <section className="bg-cream-lighter p-4 shadow-lg">
            <div className="md:flex">
              <h2 className="md:w-1/3 uppercase tracking-wide text-lg text-sm sm:text-lg mb-6">
                Search your Traders AiFarmming Portal
              </h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="md:flex mb-8">
                <div className="md:w-1/3">
                  <legend className="uppercase tracking-wide text-xl">
                    Location
                  </legend>
                  <p className="text-md font-medium text-red">
                    Farmer Details is required.
                  </p>
                </div>
                <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                  <div className="mb-4">
                    <label className="block uppercase tracking-wide text-xl font-bold">
                      Name
                    </label>
                    <input
                      className="w-full shadow-inner p-4 border-0"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Acme Mfg. Co."
                    />
                  </div>
                  <div className="md:flex mb-4">
                    <div className="md:flex-1 md:pr-3">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Street Address
                      </label>
                      <input
                        className="w-full shadow-inner p-4 border-0"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        name="address_street"
                        placeholder="Naded Area"
                      />
                    </div>
                    <div className="md:flex-1 md:pl-3">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Building/Suite No.
                      </label>
                      <input
                        className="w-full shadow-inner p-4 border-0"
                        type="text"
                        name="address_number"
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="#3"
                      />
                      <span className="text-xs mb-4 font-thin">
                        We lied, this isn't required.
                      </span>
                    </div>
                  </div>
                  <div className="md:flex mb-4">
                    <div className="md:flex-1 md:pr-3">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Source
                      </label>
                      <input
                        className="w-full shadow-inner p-4 border-0"
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                        type="text"
                        name="lat"
                        placeholder="pune"
                      />
                    </div>
                    <div className="md:flex-1 md:pl-3">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Destination
                      </label>
                      <input
                        className="w-full shadow-inner p-4 border-0"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        type="text"
                        name="lon"
                        placeholder="-99.1405168"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:flex mb-8">
                <div className="md:w-1/3">
                  <legend className="uppercase tracking-wide text-md font-medium">
                    Contact
                  </legend>
                </div>
                <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                  <div className="mb-4">
                    <label className="block uppercase tracking-wide text-xs font-bold">
                      Phone
                    </label>
                    <input
                      className="w-full shadow-inner p-4 border-0"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="tel"
                      name="phone"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                      quantity
                    </label>
                    <input
                      className="w-full shadow-inner p-4 border-0"
                      type="url"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      name="url"
                      placeholder="acme.co"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                      Email
                    </label>
                    <input
                      className="w-full shadow-inner p-4 border-0"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      placeholder="contact@acme.co"
                    />
                  </div>
                </div>
              </div>

              <div className="md:flex mb-6">
                <div className="md:w-1/3">
                  <legend className="uppercase tracking-wide text-md font-medium">
                    Description
                  </legend>
                </div>
                <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                  <textarea
                    className="w-full shadow-inner p-4 border-0"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="We build fine acmes."
                    rows="6"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="h-12 w-36 bg-green-700 text-white"
              >
                {" "}
                Submit Request
              </button>
            </form>
          </section>
        </main>
      </body>
      <div className="header text-4xl text-center">
        Our Best Traders Ready For You
      </div>
      <div className="info text-2xl text-center pt-5">
        Total Traders available {data.length} Drivers
      </div>
      <div classNameName="traders grid grid-cols-4 mx-8">
        {data.map((it, ind) => (
          <Card data={it} key={ind} />
        ))}
      </div>
    </>
  );
}

export default CropForm;

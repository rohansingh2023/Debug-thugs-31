import React, { useState } from 'react';
import data from "../data/data"
import Card from './Card'

function CropForm() {
  console.log(data)
  
  const [name, setName] = useState('');
  const [source, setSource] = useState('');
  const [location, setLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [cropType, setCropType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [rate, setRate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: name,
      source: source,
      location: location,
      destination: destination,
      cropType: cropType,
      quantity: quantity,
      rate: rate
    };
    let filterData=data.filter((it,idx)=>{
      return it.quantity<quantity;}
    )
    console.log("filterData",filterData)
    console.log(formData); // Outputs form data to console
    // You can use fetch or any other library to send the form data to a server
  };

  return (
    <>
    <form onSubmit={handleSubmit} className='grid grid-cols-2'>
      <div className="grid1">

    <div class="relative mb-4">
        <label for="email" class="leading-7 text-lg text-gray-600">Name</label> <br/>
        <input type="text" id="email"   value={name} onChange={(e) => setName(e.target.value)} name="email" class="w-1/3 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <br/>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-lg text-gray-600">Source</label> <br/>
        <input type="text" id="email"   value={source} onChange={(e) => setSource(e.target.value)} name="email" class="w-1/3 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <br/>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-lg text-gray-600">Destination</label> <br/>
        <input type="text" id="email"   value={destination} onChange={(e) => setDestination(e.target.value)} name="email" class="w-1/3 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <br/>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-lg text-gray-600">Location</label> <br/>
        <input type="text" id="email"   value={location} onChange={(e) => setLocation(e.target.value)} name="email" class="w-1/3 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      <div className="grid2">
      <br/>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-lg text-gray-600">crop Type</label> <br/>
        <input type="text" id="email"   value={cropType} onChange={(e) => setCropType(e.target.value)} name="email" class="w-1/3 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <br/>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-lg text-gray-600">Quantity</label> <br/>
        <input type="text" id="email"   value={quantity} onChange={(e) => setQuantity(e.target.value)} name="email" class="w-1/3 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <br/>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-lg text-gray-600">Rate</label> <br/>
        <input type="text" id="email"   value={rate} onChange={(e) => setRate(e.target.value)} name="email" class="w-1/3 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      <br/>
      <button type="submit">Submit</button>
    </form>
    <div className="traders flex flex-row gap-16">
        {
         data.map((it,ind)=>
          <Card data={it}/>
         )

         
        }
    </div>
    </>


  );
}

export default CropForm;

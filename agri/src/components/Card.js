import React from 'react'

const Card = ({data}) => {
  return (

    <>
    {console.log("card data",data)}
   


    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-full">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="h-64 w-full object-cover object-center" src="https://www.organicauthority.com/.image/t_share/MTU5MzI5OTUyOTU3NTM5OTM2/truckcc.jpg" alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Crop Traders</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{data.Name}</h1>
            <p class="leading-relaxed mb-3"></p>
            <h3 className='text-left'>Contact: {data.Contact}</h3>
            <h3 className='text-left'>Vehicle: {data.VehicleType}</h3>
            <h3 className='text-left'>Vehicle No: {data.VehicleNo}</h3>
            <h3 className='text-left'>Capacity {data.LoadingCapacity}</h3>
            <h3 className='text-left'>Route: {data.Route}</h3>
            
           <div className="book text-lg  text-center pt-5">Book Now </div>
          </div>

        </div>
      </div>
  
    </div>
  </div>
</section>


    </>
  )
}

export default Card
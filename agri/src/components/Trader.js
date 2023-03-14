import React from 'react'

const Trader = () => {
  return (
    <div>
    <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-3xl font-bold">Your Order</h1>
        <div className="space-y-3 mt-10 border-2 border-dashed border-slate-400 bg-slate-200 px-10 py-5 rounded-md">
          <p className="text-lg font-semibold">Item: </p>
          <p className="text-lg font-semibold">Owner:</p>
          <p className="text-lg font-semibold">
            Price: 
          </p>
          <p className="text-lg font-semibold">Quantity: kg</p>
          <p className="text-lg font-semibold">Address:</p>
          <p className="text-lg font-semibold">
            Contact-Number: 
          </p>
        </div>
      </div>
      <button  className="mt-10">
        Check Out
      </button>
      {/* <div className="flex flex-col justify-center h-screen">
        <h1 className="text-center">Pay {location.state.amount}</h1>
        <button onClick={handleCheckout}>Check Out</button>
      </div> */}
    </div>
    
  )
}

export default Trader

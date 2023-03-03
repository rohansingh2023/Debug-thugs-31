import React from 'react'

const Seller = () => {
    return (
        <div className='bg-cream text-charcoal min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto'>
            <div className='flex flex-col flex-1 rounded-md shadow-xl my-10 mx-32 md:p-0 lg:pt-8 lg:px-8 md:mx-36'>
                <form action="" className='flex flex-col gap-5 uppercase font-sans font-semibold'>
                    <div className='flex flex-row justify-between'>
                        <label htmlFor="">
                            <p className="pl-1">Category</p>
                            <select className='bg-gray-100 rounded-md p-2 my-2' name="category" id="fields[category]" placeholder='select'>
                                <option value="vegetable">Rice</option>
                                <option value="vegetable">Grapes</option>
                                <option value="vegetable">Wheat</option>
                                <option value="vegetable">Potato</option>
                                <option value="vegetable">Tomato</option>
                                <option value="vegetable">Mango</option>
                            </select>
                        </label>
                        <label htmlFor="">
                            <p className="pl-1">Images</p>
                            <input type="file" name="fields[images][]" />
                        </label>
                    </div>
                    <div className='grid grid-flow-col gap-4'>
                        <label htmlFor="" className='w-full'>
                            <p className="pl-1">State</p>
                            <select className='bg-gray-100 rounded-md p-2 my-2 w-full' name="category" id="fields[state]">
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Madhyapradesh">Madhyapradesh</option>
                                <option value="Goa">Goa</option>
                                <option value="Hariyana">Hariyana</option>
                                <option value="Tamilnadu">Tamilnadu</option>
                                <option value="Karnataka">Karnataka</option>
                            </select>
                        </label>
                        <label htmlFor="" className='w-full'>
                            <p className="pl-1">District</p>
                            <select className='bg-gray-100 rounded-md p-2 my-2 w-full' name="category" id="fields[district]">
                                <option value="Pune">Pune</option>
                                <option value="Satara">Satara</option>
                                <option value="Nagpur">Nagpur</option>
                                <option value="Sangli">Sangli</option>
                                <option value="Kolhapur">Kolhapur</option>
                                <option value="Solapur">Solapur</option>
                            </select>
                        </label>
                        <label htmlFor="" className='w-full'>
                            <p className="pl-1">Taluka</p>
                            <select className='bg-gray-100 rounded-md p-2 my-2 w-full' name="category" id="fields[taluka]" placeholder='select'>
                                <option value="Satara">Satara</option>
                                <option value="Karad">Karad</option>
                                <option value="Wai">Wai</option>
                                <option value="Mahabaleshwar">Mahabaleshwar</option>
                                <option value="Phaltan">Phaltan</option>
                                <option value="Man">Man</option>
                                <option value="Koregaon">Koregaon</option>
                                <option value="Khatav">Khatav</option>
                                <option value="Patan">Patan</option>
                                <option value="Jaoli">Jaoli</option>
                                <option value="Khandala">Khandala</option>
                            </select>
                        </label>
                        <label htmlFor="" className='w-full'>
                            <p className="pl-1">Village</p>
                            <select className='bg-gray-100 rounded-md p-2 my-2 w-full' name="category" id="fields[village]" placeholder='select'>
                                <option value="Wai">Wai</option>
                                <option value="Kusgaon">Kusgaon</option>
                                <option value="Pasarni">Pasarni</option>
                                <option value="Eksar">Eksar</option>
                                <option value="Vithhalwadi">Vithhalwadi</option>
                            </select>
                        </label>
                    </div>
                    <label htmlFor="">
                        <p className="pl-1">Expected Price(Range in Rs.)</p>
                        <input type="text" placeholder='50-60' className='pl-1 text-gray-500 bg-slate-100 rounded-md w-full p-2' />
                    </label>
                    <label htmlFor="">
                        <p className="pl-1">Description</p>
                        <textarea name="description" id="" rows="5" className='pl-1 text-gray-500 bg-slate-100 rounded-md w-full p-2'></textarea>
                    </label>
                    <div className="grid grid-flow-col justify-items-start gap-5">
                        <label htmlFor="" className='w-full'>
                            <p className="pl-1">Contact Person</p>
                            <input type="text" placeholder='name' className='pl-1 text-gray-500 bg-slate-100 rounded-md w-full p-2' />
                        </label>
                        <label htmlFor="" className='w-full'>
                            <p className="pl-1">Contact Number</p>
                            <input type="tel" placeholder='e.g. +91-9876543210' className='pl-1 text-gray-500 bg-slate-100 rounded-md w-full p-2' />
                        </label>
                    </div>
                    <label htmlFor="">
                        <p className="pl-1">Address</p>
                        <textarea name="address" id="" rows="5" className='pl-1 text-gray-500 bg-slate-100 rounded-md w-full p-2' placeholder='street name, area, landmark, etc.'></textarea>
                    </label>
                    <button type='submit' className='bg-yellow-400 p-2 mb-5 rounded-lg w-20 text-center text-white hover:bg-yellow-600'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Seller
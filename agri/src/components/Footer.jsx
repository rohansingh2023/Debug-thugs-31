import React from 'react'

const Footer = () => {
    return (
        <div>
            <section className="bg-gray-600 text-white">
                <div className="flex flex-row gap-5 p-5">
                    <div className="flex-1">
                        <p className="">Enhancing Agriculture with AIFarming India Pvt.Limited Farms street Mumbai-400008 Maharashtra-India
                        </p>
                    </div>
                    <div className="flex-1">
                        <h6 className="text-uppercase fw-bold">Products</h6>
                        <div className="mb-4 mt-0 d-inline-block mx-auto" ></div>
                        <p>
                            <a href="#!" className="text-dark hover:text-green-500">Crops Price</a>
                        </p>
                        <p>
                            <a href="#!" className="text-dark hover:text-green-500">Rainfall</a>
                        </p>
                        <p>
                            <a href="#!" className="text-dark hover:text-green-500">Yearly Growth</a>
                        </p>
                        <p>
                            <a href="#!" className="text-dark hover:text-green-500">Incrase Production</a>
                        </p>
                    </div>
                    <div className="flex-1">
                        <h6 className="text-uppercase fw-bold">Useful links</h6>
                        <div className="mb-4 mt-0 d-inline-block mx-auto f2"></div>

                        <p>
                            <a href="#!" className="text-dark hover:text-green-500">Agriculture Loans</a>
                        </p>
                        <p>
                            <a href="#!" className="text-dark hover:text-green-500">Organic Farming</a>
                        </p>
                        <p>
                            <a href="#!" className="text-dark hover:text-green-500">Large Farming</a>
                        </p>
                        <p>
                            <a href="#!" className="text-dark hover:text-green-500">Help</a>
                        </p>
                    </div>
                    <div className="flex-1">
                        <h6 className="text-uppercase fw-bold">Contact</h6>
                        <div className="mb-4 mt-0 d-inline-block mx-auto"></div>
                        <p>Crops Street Mumbai</p>
                        <p>AIFarmingIndia@gmail.com</p>
                        <p>+91-123456789</p>
                        <p>+91-854685485S</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
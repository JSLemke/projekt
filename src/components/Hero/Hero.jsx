import React, { useState } from 'react';

const Hero = () => {
    const [priceValue, setPriceValue] = useState(0);

    return ( 
        <div className="bg-black/20 h-screen flex justify-center items-center">
            <div className="container">
                <div className="grid grid-cols-1 gap-3">
                    {/* Text Content Section  */}
                    <div className='text-white'>
                        <p data-aos="fade-up">Our Packages</p>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="600"
                            className="font-bold text-3xl"
                        >Suche Dein Traumziel</p>
                    </div>
                    {/* Form Section */}
                    <div className="space-y-5 bg-white rounded-md p-3 grid grid-cols-3 sm:grid-cols-3 my-2 pb-4">
                        <div>
                            <label htmlFor="destinationInput" className="opacity-90">
                                <div className='w-full flex justify-between items-center'>
                                    <p>Wohin</p>
                                </div>
                            </label>
                            <input
                                type="text"
                                name="destination"
                                id="destinationInput"
                                placeholder="Wohin"
                                className="w-full bg-gray-100 range accent-primary my-7 rounded-full focus:outline-primary focus:outline outline-1 p-3"
                            />
                        </div>
                        <div>
                            <label htmlFor='dateInput' className='opacity-70'>
                                Datum
                            </label>
                            <input
                                type="date"
                                name="date"
                                id="dateInput"
                                className='w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-3'
                            />
                        </div>
                        <div>
                            <label htmlFor='priceInput' className='opacity-90 block'>
                                <div className='w-full flex justify-between items-center'>
                                    <p>Max Preis</p>
                                    <p className='font-bold text-xl'>${priceValue}</p>
                                </div>
                            </label>
                            <div className='bg-gray-100 rounded-full my-1 p-3 flex items-center justify-center'>
                                <input
                                    type="range"
                                    name="price"
                                    id="priceInput"
                                    className='appearance-none w-full bg-gradient-to-r from-primaryto secondery h-1 items-center justify-center rounded-full p-2 my-1'
                                    min="50"
                                    max="9999"
                                    value={priceValue}
                                    step="10"
                                    onChange={(e) => setPriceValue(e.target.value)}
                                />                    
                            </div>
                        </div>      
                    </div>
                    {/* Button section */}
                    <div className="flex justify-center">
                        <button className="bg-gradient-to-r from-sky-400 to-blue-400 hover:from-primary hover:to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 p-3">
                            suchen
                        </button>
                    </div>                                                                              
                </div>
            </div>
        </div>
    );
};

export default Hero;

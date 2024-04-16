import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [priceValue, setPriceValue] = useState(0);
    const [searchData, setSearchData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!searchData || !searchData.destination) return; // Überprüfen, ob searchData oder destination null ist
                console.log("Städtenamen vor API-Aufruf:", searchData.destination); // Protokollieren des Städtenamens vor dem API-Aufruf
                // Hier wäre normalerweise der API-Aufruf
                // Da wir keine echte API verwenden, überspringen wir den API-Aufruf
                // Mock-Daten verwenden, um die Suchergebnisse anzuzeigen
                const mockData = {
                    imageUrl: 'https://via.placeholder.com/300',
                    // Mock-Daten für weitere Informationen
                    destination: searchData.destination,
                    date: searchData.date,
                    maxPrice: searchData.maxPrice
                };
                setSearchData(mockData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [searchData]);

    const handleSearch = () => {
        const destination = document.getElementById('destinationInput').value;
        const date = document.getElementById('dateInput').value;
        const maxPrice = priceValue;
        const searchData = { destination, date, maxPrice };
        setSearchData(searchData);
    };

    return (
        <div className="bg-yellow/20 h-screen flex justify-center items-center">
            <div className="container">
                <div className="grid grid-cols-1 gap-3">
                    <div className='text-white'>
                        <p data-aos="fade-up">Our Packages</p>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="600"
                            className="font-bold text-3xl"
                        >Suche Dein Traumziel</p>
                    </div>
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
                                className="w-full bg-yellow-100 range accent-yellow-400 my-7 rounded-full focus:outline-yellow-400 focus:outline outline-1 p-3"
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
                                className='w-full !placeholder-slate-400 bg-yellow-100 my-2 rounded-full focus:outline-yellow-400 focus:outline outline-1 p-3'
                            />
                        </div>
                        <div>
                            <label htmlFor='priceInput' className='opacity-90 block'>
                                <div className='w-full flex justify-between items-center'>
                                    <p>Max Preis</p>
                                    <p className='font-bold text-xl'>${priceValue}</p>
                                </div>
                            </label>
                            <div className='bg-yellow-100 rounded-full my-1 p-3 flex items-center justify-center'>
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
                    <div className="flex justify-center">
                        <button onClick={handleSearch} className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-orange-400 hover:to-yellow-400 text-white hover:scale-105 px-10 py-2 rounded-full duration-200 p-5">
                            suchen
                        </button>
                    </div>   
                    {searchData && (
                        <div className="bg-white rounded-md p-3">
                            <h2 className="text-xl font-bold mb-2">Search Results</h2>
                            <p><strong>Destination:</strong> {searchData.destination}</p>
                            <p><strong>Date:</strong> {searchData.date}</p>
                            <p><strong>Max Price:</strong> ${searchData.maxPrice}</p>
                            {searchData.imageUrl && (
                                <img src={searchData.imageUrl} alt="Search Result" className="mt-4 bg-white p-2 rounded-lg" />
                            )}
                        </div>
                    )}                                                                   
                </div>
            </div>
        </div>
    );
};

export default Hero;

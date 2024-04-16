import React, { useState } from "react";

const Location = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchLocation = async () => {
    try {
      setIsLoading(true);
      // Abfrage der aktuellen Position des Benutzers
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setIsLoading(false);
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    } catch (error) {
      console.error("Error fetching location:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up">
        <div className="container my-4">
          <h1 className="inline-block border-l-8 border-yellow-300 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Location to Visit
          </h1>

          <div className="rounded-xl overflow-hidden">
            <button
              onClick={fetchLocation}
              disabled={isLoading}
              className="bg-gradient-to-r from-yellow-300 to-orange-400 hover:from-orange-400 hover:to-yellow-300 text-white px-4 py-2 rounded-md"
            >
              {isLoading ? "Fetching Location..." : "Get My Location"}
            </button>
            {latitude && longitude && (
              <div className="mt-4">
                <p>Latitude: {latitude}</p>
                <p>Longitude: {longitude}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;

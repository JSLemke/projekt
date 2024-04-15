import React from "react";

const Location = () => {
  const apiKey = process.env.REACT_APP_MAPS_API_KEY;

  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up">
        <div className="container my-4">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Location to Visit
          </h1>

          <div className="rounded-xl overflow-hidden">
            <iframe
              src={`https://geocode.search.hereapi.com/v1/geocode?q=240+Washington+St.%2C+Boston&limit=4&apiKey=${apiKey}`}
              width="100%"
              height="360"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "20px" }}
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;

import React from "react";
import PlaceCard from "./PlaceCard";
import AttractionsData from "../../data/Attractions.json"; // Importiere die Attractions-Daten

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-cyan-400 dark:text-white bg-cyan-80 py-1">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-orange-400 py-2 pl-2 text-3xl font-bold">
            Die schönsten Orte zum Reisen
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-3">
            {/* Iteriere über die Attractions-Daten */}
            {AttractionsData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                // Verwende die Daten von AttractionsData
                img={item.img}
                title={item.title}
                location={item.location}
                description={item.description}
                price={item.price}
                type={item.type}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;

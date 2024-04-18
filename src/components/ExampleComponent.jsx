// Importiere die erforderlichen Module
import React, { useEffect, useState } from 'react';
import { fetchHotelsData, fetchRestaurantsData, fetchAttractionsData, fetchFlightsData } from '../utils/randomData';

// Definiere die Beispielkomponente
const ExampleComponent = () => {
  // Zustände zum Speichern der abgerufenen Daten
  const [hotelsData, setHotelsData] = useState([]);
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [attractionsData, setAttractionsData] = useState([]);
  const [flightsData, setFlightsData] = useState([]);

  // useEffect, um die Daten bei der Komponentenmontage abzurufen
  useEffect(() => {
    async function fetchData() {
      try {
        // Daten von verschiedenen APIs abrufen
        const hotels = await fetchHotelsData();
        const restaurants = await fetchRestaurantsData();
        const attractions = await fetchAttractionsData();
        const flights = await fetchFlightsData();

        // Aktualisiere die Zustände mit den abgerufenen Daten
        setHotelsData(hotels);
        setRestaurantsData(restaurants);
        setAttractionsData(attractions);
        setFlightsData(flights);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []); // Leeres Array als zweites Argument, um sicherzustellen, dass die Abfrage nur einmal erfolgt

  return (
    <div>
      {/* Beispiel: Rendern der Hotels */}
      <h2>Hotels:</h2>
      <ul>
        {hotelsData.map((hotel, index) => (
          <li key={index}>{hotel.name}</li>
        ))}
      </ul>

      {/* Beispiel: Rendern der Restaurants */}
      <h2>Restaurants:</h2>
      <ul>
        {restaurantsData.map((restaurant, index) => (
          <li key={index}>{restaurant.name}</li>
        ))}
      </ul>

      {/* Beispiel: Rendern der Attraktionen */}
      <h2>Attraktionen:</h2>
      <ul>
        {attractionsData.map((attraction, index) => (
          <li key={index}>{attraction.name}</li>
        ))}
      </ul>

      {/* Beispiel: Rendern der Flüge */}
      <h2>Flüge:</h2>
      <ul>
        {flightsData.map((flight, index) => (
          <li key={index}>{flight.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleComponent;

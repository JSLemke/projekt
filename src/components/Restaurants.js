import React, { useEffect } from 'react';

const Restaurants = () => {
  useEffect(() => {
    fetch(process.env.REACT_APP_RESTAURANTS_API_URL)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching restaurants:', error));
  }, []);

  return (
    <div>
      {/* Hier kannst du die Restaurants-Daten in deiner Komponente verwenden */}
    </div>
  );
};

export default Restaurants;

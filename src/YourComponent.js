// YourComponent.js
import React, { useEffect, useState } from 'react';
import api from './api';

const YourComponent = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Beispiel für den Aufruf des Hotels-Endpunkts
    fetch(api.hotelsEndpoint)
      .then(response => response.json())
      .then(data => setHotels(data))
      .catch(error => console.error('Error fetching hotels:', error));
  }, []);

  return (
    <div>
      
    </div>
  );
};

export default YourComponent;

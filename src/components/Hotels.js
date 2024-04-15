import React, { useEffect } from 'react';

const Hotels = () => {
  useEffect(() => {
    fetch(process.env.REACT_APP_HOTELS_API_URL)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching hotels:', error));
  }, []);

  return (
    <div>
      {/* Hier kannst du die Hotels-Daten in deiner Komponente verwenden */}
    </div>
  );
};

export default Hotels;

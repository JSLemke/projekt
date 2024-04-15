import React, { useEffect } from 'react';

const Attractions = () => {
  useEffect(() => {
    fetch(process.env.REACT_APP_ATTRACTIONS_API_URL)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching attractions:', error));
  }, []);

  return (
    <div>
      {/* Hier kannst du die Attraktionen-Daten in deiner Komponente verwenden */}
    </div>
  );
};

export default Attractions;

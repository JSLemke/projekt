import React, { useEffect } from 'react';

const Flights = () => {
  useEffect(() => {
    fetch(process.env.REACT_APP_EVENTS_API_URL)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching flights:', error));
  }, []);

  return (
    <div>
    
    </div>
  );
};

export default Flights;

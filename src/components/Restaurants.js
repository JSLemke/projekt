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
     
    </div>
  );
};

export default Restaurants;

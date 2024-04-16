// api.js

export const API_URLS = {
    hotels: process.env.REACT_APP_HOTELS_API_URL,
    restaurants: process.env.REACT_APP_RESTAURANTS_API_URL,
    attractions: process.env.REACT_APP_ATTRACTIONS_API_URL,
    events: process.env.REACT_APP_EVENTS_API_URL,
  };
  
  export const fetchHotels = async () => {
    const response = await fetch(API_URLS.hotels);
    return response.json();
  };
  
  export const fetchRestaurants = async () => {
    const response = await fetch(API_URLS.restaurants);
    return response.json();
  };
  
  export const fetchAttractions = async () => {
    const response = await fetch(API_URLS.attractions);
    return response.json();
  };
  
  export const fetchEvents = async () => {
    const response = await fetch(API_URLS.events);
    return response.json();
  };
  
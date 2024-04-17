// Importiere die erforderlichen Module
import axios from 'axios';

// Funktion zum Abrufen von Hotels-Daten
export async function fetchHotelsData() {
  try {
    const response = await axios.get(process.env.REACT_APP_HOTELS_API_URL);
    
    return response.data;
  } catch (error) {
    console.error('Error fetching hotels data:', error);
    return null;
  }
}

// Funktion zum Abrufen von Restaurants-Daten
export async function fetchRestaurantsData() {
  try {
    const response = await axios.get(process.env.REACT_APP_RESTAURANTS_API_URL);
   
    return response.data;
  } catch (error) {
    console.error('Error fetching restaurants data:', error);
    return null;
  }
}

// Funktion zum Abrufen von Attractions-Daten
export async function fetchAttractionsData() {
  try {
    const response = await axios.get(process.env.REACT_APP_ATTRACTIONS_API_URL);
    
    return response.data;
  } catch (error) {
    console.error('Error fetching attractions data:', error);
    return null;
  }
}

// Funktion zum Abrufen von Events-Daten (Flights in diesem Fall)
export async function fetchEventsData() {
  try {
    const response = await axios.get(process.env.REACT_APP_EVENTS_API_URL);
  
    return response.data;
  } catch (error) {
    console.error('Error fetching events data:', error);
    return null;
  }
}

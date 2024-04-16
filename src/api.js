// api.js

const apiEndpoints = process.env.REACT_APP_API_ENDPOINTS.split(',');

export default {
  hotelsEndpoint: apiEndpoints[0],
  restaurantsEndpoint: apiEndpoints[1],
  attractionsEndpoint: apiEndpoints[2],
  eventsEndpoint: apiEndpoints[3]
};

import { post, get, put, del } from './request';

const LOCATIONS_URL = 'https://team-narrative.herokuapp.com/api/v1/locations';

export const postLocationsByStoryId = (locationStoryId, locationName, locationDescription, locationTags) => post(`${LOCATIONS_URL}/${locationStoryId}`,
  {
    locationName,
    locationDescription,
    locationTags
  });

export const getAllLocations = () => get(`${LOCATIONS_URL}`);
export const getLocationsByStoryId = (locationStoryId) => get(`${LOCATIONS_URL}/${locationStoryId}`);
export const putLocationByLocationId = (locationId, locationName, locationDescription) => put(`${LOCATIONS_URL}/${locationId}`, 
  {
    locationName,
    locationDescription,
  });
export const deleteLocationByLocationId = (locationId) => del(`${LOCATIONS_URL}/${locationId}`);
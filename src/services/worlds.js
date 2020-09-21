import { post, get, put, del } from './request';

const WORLDS_URL = 'https://team-narrative.herokuapp.com/api/v1/worlds';

export const postWorldsByStoryId = (worldStoryId, worldName, worldDescription, worldTags) => post(`${WORLDS_URL}/${worldStoryId}`,
  {
    worldName,
    worldDescription,
    worldTags
  });

export const getAllWorlds = () => get(`${WORLDS_URL}`);
export const getWorldsByStoryId = (worldStoryId) => get(`${WORLDS_URL}/${worldStoryId}`);
export const putWorldByWorldId = (worldId, worldName, worldDescription) => put(`${WORLDS_URL}/${worldId}`,
  {
    worldName,
    worldDescription,
  });
export const deleteWorldByWorldId = (worldId) => del(`${WORLDS_URL}/${worldId}`);

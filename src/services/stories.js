import { post, get, put, del } from './request';

const STORIES_URL = 'https://team-narrative.herokuapp.com/api/v1/stories';

export const postStory = (storyTitle, storySynopsis) => post(`${STORIES_URL}`,
  {
    storyTitle,
    storySynopsis
  });

export const getAllStories = () => get(`${STORIES_URL}`);
export const getStoryByStoryId = (storyId) => get(`${STORIES_URL}/${storyId}`);
export const putStoryByStoryId = (storyId, storyTitle, storySynopsis) => put(`${STORIES_URL}/${storyId}`,
  {
    storyTitle,
    storySynopsis
  });
export const deleteStoryByStoryId = (storyId) => del(`${STORIES_URL}/${storyId}`);

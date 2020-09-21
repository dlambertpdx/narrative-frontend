import { post, get, put, del } from './request';

const CHARACTERS_URL = 'https://team-narrative.herokuapp.com/api/v1/characters';

export const postCharactersByStoryId = (characterStoryId, characterName, characterDescription, characterTags) => post(`${CHARACTERS_URL}/${characterStoryId}`,
  {
    characterName,
    characterDescription,
    characterTags
  });

export const getAllCharacters = () => get(`${CHARACTERS_URL}`);
export const getCharactersByStoryId = (characterStoryId) => get(`${CHARACTERS_URL}/${characterStoryId}`);
export const putCharacterByCharacterId = (characterId, characterName, characterDescription) => put(`${CHARACTERS_URL}/${characterId}`, 
  {
    characterName,
    characterDescription,
  });
export const deleteCharacterByCharacterId = (characterId) => del(`${CHARACTERS_URL}/${characterId}`);

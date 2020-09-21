import { getCurrentStoryCharacters } from '../characterSelectors';

describe('character selector', () => {

  const state = {
    character: {
      currentStoryCharacters: [{
        _id: '5df1116366901489863f4999',
        characterTags: [],
        characterStoryId: '5df1114c66901489863f4998',
        userId: 'DJYVwfFgEcNlBq89ojbhTAN4hce2',
        characterName: 'Bob',
        characterDescription: 'Character in story 2',
        __v: 0
      }]
    }
  };
  
  it('gets correct state for character', () => {
    const currentStoryCharacters = getCurrentStoryCharacters(state);
    expect(currentStoryCharacters).toEqual(currentStoryCharacters);
  });
});

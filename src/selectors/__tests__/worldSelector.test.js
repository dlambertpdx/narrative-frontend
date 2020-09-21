import { getCurrentStoryWorlds } from '../worldSelectors';

describe('world selector', () => {

  const state = {
    world: {
      currentStoryWorlds: [{
        _id: '5df1b699d34eaa2db0d38eae',
        worldTags: [],
        worldStoryId: '5df078a86ef5000491b8dfdb',
        userId: 'hv7yU1P8P2bgFYKmkprt9QIROtg1',
        worldName: 'fyfyd',
        worldDescription: '<p>drydryd</p>',
        __v: 0
      }]
    }
  };

  it('gets correct state for world', () => {
    const currentStoryWorlds = getCurrentStoryWorlds(state);
    expect(currentStoryWorlds).toEqual(currentStoryWorlds);
  });
});

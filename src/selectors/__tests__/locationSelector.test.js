import { getCurrentStoryLocations } from '../locationSelectors';

describe('location selector', () => {

  const state = {
    location: {
      currentStoryLocations: [{
        _id: '5df2b6d957207e4c8636b9d0',
        locationTags: [],
        locationStoryId: '5df2b65757207e4c8636b9cc',
        userId: 'fmrm38gGQeac9buuRKKvqQZuKtz2',
        locationName: 'SFASF',
        locationDescription: '<p>SGAD</p>',
        __v: 0
      }]
    }
  };

  it('gets correct state for location', () => {
    const currentStoryLocations = getCurrentStoryLocations(state);
    expect(currentStoryLocations).toEqual(currentStoryLocations);
  });
});

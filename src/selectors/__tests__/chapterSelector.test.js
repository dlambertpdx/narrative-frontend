import { getCurrentStoryChapters } from '../chapterSelectors';

describe('chapter selector', () => {

  const state = {
    chapter: {
      currentStoryChapters: [{
        _id: '5df2b6d257207e4c8636b9cf',
        chapterTags: [],
        chapterStoryId: '5df2b65757207e4c8636b9cc',
        userId: 'fmrm38gGQeac9buuRKKvqQZuKtz2',
        chapterName: 'SDFSDF',
        chapterText: '<p>SGSAF</p>', 
        __v: 0
      }]
    }
  };

  it('gets correct state for chapters', () => {
    const currentStoryChapters = getCurrentStoryChapters(state);
    expect(currentStoryChapters).toEqual(currentStoryChapters);
  });

});
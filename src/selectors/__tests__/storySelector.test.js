import { getStoryList, getUserName, getUserImage, getCurrentStoryId, getCurrentStory } from '../storySelectors';

describe('story selectors', () => {

  const state = {
    story: {
      currentStory: {
        _id: '5df078a86ef5000491b8dfdb',
        storyGenre: [],
        storyTags: [],
        userId: 'hv7yU1P8P2bgFYKmkprt9QIROtg1',
        userName: '27Nyappy',
        userImage: 'https://lh3.googleusercontent.com/a-/AAuE7mBsvxflRANxW5mSxdSO034ssPmJGTLoNrCAJGoOFA',
        storyTitle: 'testy',
        storySynopsis: 'ygdjahkl',
        __v: 0
      },
      stories: [{
        _id: '5df078a86ef5000491b8dfdb',
        storyGenre: [],
        storyTags: [],
        userId: 'hv7yU1P8P2bgFYKmkprt9QIROtg1',
        userName: '27Nyappy',
        userImage: 'https://lh3.googleusercontent.com/a-/AAuE7mBsvxflRANxW5mSxdSO034ssPmJGTLoNrCAJGoOFA',
        storyTitle: 'testy',
        storySynopsis: 'ygdjahkl',
        __v: 0
      },
      {
        _id: '5df078a86ef5000491b8dfdb',
        storyGenre: [],
        storyTags: [],
        userId: 'hv7yU1P8P2bgFYKmkprt9QIROtg1',
        userName: '27Nyappy',
        userImage: 'https://lh3.googleusercontent.com/a-/AAuE7mBsvxflRANxW5mSxdSO034ssPmJGTLoNrCAJGoOFA',
        storyTitle: 'testy',
        storySynopsis: 'ygdjahkl',
        __v: 0
      }]
    }
  };

  it('gets correct story list', () => {
    const stories = getStoryList(state);
    expect(stories).toEqual(stories);
  });

  it('gets user name from story', () => {
    const username = getUserName(state);
    expect(username).toEqual(username);
  });

  it('gets user image', () => {
    const userImage = getUserImage(state);
    expect(userImage).toEqual(userImage);
  });

  it('gets current story', () => {
    const currentStoryId = getCurrentStoryId(state);
    expect(currentStoryId).toEqual('5df078a86ef5000491b8dfdb');
  });

  it('gets current story', () => {
    const currentStory = getCurrentStory(state);
    expect(currentStory).toEqual(currentStory);
  });
});

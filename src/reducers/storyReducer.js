import { CREATE_STORY, FETCH_STORY_BY_ID, FETCH_STORY_LIST, DESTROY_STORY_BY_ID, UPDATE_STORY_BY_ID } from '../actions/storyActions';

const initialState = {
  stories: [],
  currentStory: {},
  loading: true,
  errors: null,
  userName: null,
  userImage: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_STORY:
      return { ...state, stories: [...state.stories, action.payload], currentStory: action.payload };
    case FETCH_STORY_LIST:
      return { ...state, stories: action.payload, userName: action.payload[0].userName, userImage: action.payload[0].userImage, currentStory: state.currentStory.storyTitle ? state.currentStory : action.payload[0] };
    case FETCH_STORY_BY_ID:
      return { ...state, currentStory: action.payload };
    case UPDATE_STORY_BY_ID:
      return { ...state, stories: state.stories.map(story => {
        return story._id === action.payload._id ? action.payload : story;
      }) };
    case DESTROY_STORY_BY_ID:
      return { ...state, stories: state.stories.filter((chapter) => {
        return chapter._id !== action.payload._id;
      }) };
    default:
      return state;
  }
}


import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import UserCard from './UserCard';
import StoryNavigation from './StoryNavigation';
import styles from './Sidebar.css';
import NewStory from '../categories/NewStory';
import { getCurrentStory } from '../../selectors/storySelectors';

const Sidebar = ({ stories, userName, userImage }) => {
  const currentStory = useSelector(state => getCurrentStory(state));
  const currentStoryTitle = currentStory.storyTitle;
  const currentStorySynopsis = currentStory.storySynopsis;
  localStorage.setItem('storyId', currentStory._id);

  return (
    <aside className={styles.Sidebar}>
      <UserCard userName={userName} userImage={userImage} />
      <NewStory title={currentStoryTitle} synopsis={currentStorySynopsis}/>
      <StoryNavigation stories={stories} />
    </aside>
  );
};

Sidebar.propTypes = {
  userName: PropTypes.string,
  userImage: PropTypes.string,
  stories: PropTypes.array
};

export default Sidebar;

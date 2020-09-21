import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchStoryById } from '../../actions/storyActions';
import { getStoryByStoryId } from '../../services/stories';
import styles from './StoryNavigation.css';

const StoryNavigation = ({ stories }) => {
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();
    getStoryByStoryId(String(document.querySelector('input:checked').value))
      .then(currentStory => {
        dispatch(fetchStoryById(currentStory._id));
      });
  };

  const storyElements = stories.map((story, i) => {
    return (
      <label onChange={handleClick} key={story._id || i} htmlFor={story._id}>
        <input className={styles.StoryTitleButton} id={story._id} type='radio' name='story-title' value={story._id} />
        {story.storyTitle}
      </label>
    );
  });

  return (
    <section className={styles.StoryNavigation}>
      <div>
        {storyElements}
      </div>
    </section>
  );
};

StoryNavigation.propTypes = {
  stories: PropTypes.array
};

export default StoryNavigation;
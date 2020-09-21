import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import DefaultViewModalEdit from '../../containers/default-view/DefaultView-Modal-Edit';
import styles from './CurrentStory.css';
import { destroyStoryById } from '../../actions/storyActions';

const CurrentStory = ({ title, synopsis }) => {
  const storyId = localStorage.getItem('storyId');
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const handleDelete = event => {
    event.preventDefault();
    dispatch(destroyStoryById(storyId));
  };

  return (
    <section className={styles.CurrentStory}>
      <div className={styles.CurrentStoryContainer}>
        <h3>Current Story:</h3>
        <h2>{title}</h2>
        <DefaultViewModalEdit show={show} hideModal={hideModal} />

        <section className={styles.ButtonContainer}>
          <button className={styles.CurrentStoryButton} type='button' onClick={showModal}>Edit Story</button>
          <button className={styles.CurrentStoryButton} onClick={handleDelete} value="button">DELETE</button>
        </section>
      </div>

      <div className={styles.SynopsisContainer}>
        <p>{synopsis}</p>
      </div>
    </section>
  );
};

CurrentStory.propTypes = {
  title: PropTypes.string,
  synopsis: PropTypes.string
};

export default CurrentStory;
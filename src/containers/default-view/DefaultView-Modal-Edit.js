import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentStoryId } from '../../selectors/storySelectors';
import { putStoryByStoryId } from '../../services/stories';
import { updateStoryById } from '../../actions/storyActions';
import styles from './DefaultView-Modal-Edit.css';

const DefaultViewModalEdit = ({ hideModal, show }) => {
  const dispatch = useDispatch();
  const storyId = useSelector(state => getCurrentStoryId(state));
  const [title, setTitle] = useState('');
  const [synopsis, setSynopsis] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    putStoryByStoryId(storyId, title, synopsis)
      .then(updatedStory => {
        dispatch(updateStoryById(storyId, updatedStory.storyTitle, updatedStory.storySynopsis));
      });
  };

  return (
    <div>
      <div className={show ? styles.displayBlock : styles.displayNone}>
        <section className={styles.modalMain}>
          <form onSubmit={handleSubmit}>
            <p></p><input placeholder="title" type="text" value={title} onChange={({ target }) => setTitle(target.value)}></input>
            <p></p> <input placeholder="synopsis" type="text" value={synopsis} onChange={({ target }) => setSynopsis(target.value)}></input>
            <button value='button' onClick={hideModal}>Save changes</button>
          </form>
          <button onClick={hideModal}>✗</button>
        </section>
      </div>
    </div>
  );
};

DefaultViewModalEdit.propTypes = {
  hideModal: PropTypes.func,
  show: PropTypes.bool,
  children: PropTypes.string
};

export default DefaultViewModalEdit;


import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DefaultViewModal from '../../containers/default-view/DefaultView-Modal';
import styles from './NewStory.css';

const NewStory = () => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <section className={styles.NewStory}>
      <div>
        <DefaultViewModal show={show} hideModal={hideModal} />
        <button className={styles.NewStoryButton} type='button' onClick={showModal}>New Story</button>
      </div>
    </section>
  );
};

NewStory.propTypes = {
  title: PropTypes.string,
  synopsis: PropTypes.string
};

export default NewStory;
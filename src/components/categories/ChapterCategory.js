import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ViewAllButton from './ViewAllButton';
import styles from './ChapterCategory.css';
import AddChapterButton from './AddChapterButton';

const ChapterCategory = ({ show, hideModal, showModal }) => {
  const [redirect, setRedirect] = useState(false);

  if(redirect) return <Redirect to="/chapters" />;
  const handleViewChapters = () => {
    setRedirect(true);
  };

  return (
    <section className={styles.ChapterCategory}>
      <h2 className={styles.h2}>Chapters</h2>

      <div className={styles.ChapterCategoryContainer}>
        <div>
          <AddChapterButton show={show} hideModal={hideModal} showModal={showModal} />
        </div>
        <ViewAllButton handleViewClick={handleViewChapters} />
      </div>
    </section>
  );
};

ChapterCategory.propTypes = {
  show: PropTypes.bool,
  hideModal: PropTypes.func,
  showModal: PropTypes.func
};

export default ChapterCategory;
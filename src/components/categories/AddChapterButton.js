import React from 'react';
import PropTypes from 'prop-types';
import EditFormModalChapter from './EditFormModalChapter';

const AddChapterButton = ({ show, hideModal, showModal }) => {
  return (
    <>
      <div>
        <EditFormModalChapter show={show} hideModal={hideModal}></EditFormModalChapter>
      </div>
      <button type='button' onClick={showModal}>Add New</button>
    </>
  );
};

AddChapterButton.propTypes = {
  show: PropTypes.bool,
  hideModal: PropTypes.func,
  showModal: PropTypes.func
};

export default AddChapterButton;

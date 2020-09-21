import React from 'react';
import PropTypes from 'prop-types';
import EditFormModalLocation from './EditFormModalLocation';

const AddLocationButton = ({ show, hideModal, showModal }) => {
  return (
    <>
      <EditFormModalLocation show={show} hideModal={hideModal}></EditFormModalLocation>
      <div>
        <button type='button' onClick={showModal}>Add New</button>
      </div>
    </>
  );
};

AddLocationButton.propTypes = {
  show: PropTypes.bool,
  hideModal: PropTypes.func,
  showModal: PropTypes.func
};

export default AddLocationButton;

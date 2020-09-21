import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import { getCurrentStoryId } from '../../selectors/storySelectors';
import { createLocation } from '../../actions/locationActions';
import styles from '../../DefaultView-Modal.css';

const EditFormModalLocation = ({ hideModal, show }) => {
  const dispatch = useDispatch();
  const locationStoryId = useSelector(state => getCurrentStoryId(state));

  const [locationName, setLocationName] = useState('');
  const [locationDescription, setLocationDescription] = useState('');
  const [redirect, setRedirect] = useState(false);

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  if(redirect) return <Redirect to="/locations" />;

  const handleChange = ({ target }) => {
    setLocationName(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createLocation(locationStoryId, locationName, locationDescription));
    setLocationName('');
    setLocationDescription('');
    setRedirect(true);
  };

  return (
    <div>
      <div className={show ? styles.displayBlock : styles.displayNone} >
        <section className={styles.modalMain} >
          <form onSubmit={handleSubmit}>
            <input type="text" value={locationName} placeholder="Write Name or Title" onChange={handleChange} required />
            <ReactQuill value={locationDescription} onChange={(value) => setLocationDescription(value)} formats={formats} modules={modules} />
            <button value="button" onClick={hideModal}>Submit</button>
          </form>
          <button onClick={hideModal}>✗</button>
        </section>
      </div>
    </div>
  );
};

EditFormModalLocation.propTypes = {
  hideModal: PropTypes.func,
  show: PropTypes.bool,
};

export default EditFormModalLocation;
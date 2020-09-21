import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ReactQuill from 'react-quill';
import styles from './Location.css';
import { editLocationByLocationId, destroyLocationById } from '../../actions/locationActions';

const Location = ({ locationId, currentLocationName, currentLocationDescription }) => {
  const [locationName, setLocationName] = useState(currentLocationName);
  const [locationDescription, setLocationDescription] = useState(currentLocationDescription);
  const [hidden, setHidden] = useState(true);
  const [arrow, setArrow] = useState(true);
  const dispatch = useDispatch();

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

  const onSubmit = event => {
    event.preventDefault();
    dispatch(editLocationByLocationId(locationId, locationName, locationDescription));
    toggle();
  };

  const handleDelete = event => {
    event.preventDefault();
    dispatch(destroyLocationById(locationId));
  };

  const toggle = () => {
    setHidden(!hidden);
    setArrow(!arrow);
  };

  return (
    <div className={styles.Location}>
      {hidden ?
        <div className={styles.HiddenEditBox}>
          <h1 onClick={toggle}>►</h1>
          <h3>{locationName}</h3>
        </div>
        :
        <div>
          <div className={styles.OpenEditBox}>
            <h1 onClick={toggle}>▼</h1>
          </div>
          <form className={styles.Form} onSubmit={onSubmit}>
            Name: <input type="text" value={locationName} onChange={({ target }) => setLocationName(target.value)} required />
            <p>Description: </p><ReactQuill value={locationDescription} onChange={(value) => setLocationDescription(value)} formats={formats} modules={modules} />
            <button>Done</button>
            <button onClick={handleDelete} value="button">Delete</button>
          </form>
        </div>
      }
    </div >
  );
};

Location.propTypes = {
  locationId: PropTypes.string,
  currentLocationName: PropTypes.string,
  currentLocationDescription: PropTypes.string
};

export default Location;
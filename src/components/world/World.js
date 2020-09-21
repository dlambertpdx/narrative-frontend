import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ReactQuill from 'react-quill';
import styles from './World.css';
import { editWorldByWorldId, destroyWorldById } from '../../actions/worldActions';

const World = ({ worldId, currentWorldName, currentWorldDescription }) => {
  const [worldName, setWorldName] = useState(currentWorldName);
  const [worldDescription, setWorldDescription] = useState(currentWorldDescription);
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
    dispatch(editWorldByWorldId(worldId, worldName, worldDescription));
    toggle();
  };

  const handleDelete = event => {
    event.preventDefault();
    dispatch(destroyWorldById(worldId));
  };

  const toggle = () => {
    setHidden(!hidden);
    setArrow(!arrow);
  };

  return (
    <div className={styles.World}>
      {hidden ?
        <div className={styles.HiddenEditBox}>
          <h1 onClick={toggle}>►</h1>
          <h3>{worldName}</h3>
        </div>
        :
        <div>
          <div className={styles.OpenEditBox}>
            <h1 onClick={toggle}>▼</h1>
          </div>
          <form className={styles.Form} onSubmit={onSubmit}>
            Name/Title: <input type="text" value={worldName} onChange={({ target }) => setWorldName(target.value)} required />
            <p>Description: </p><ReactQuill value={worldDescription} onChange={(value) => setWorldDescription(value)} formats={formats} modules={modules} />
            <button className={styles.Buttons}>Done</button>
            <button className={styles.Buttons} onClick={handleDelete} value="button">Delete</button>
          </form>
        </div>
      }
    </div>
  );
};

World.propTypes = {
  worldId: PropTypes.string,
  currentWorldName: PropTypes.string,
  currentWorldDescription: PropTypes.string
};

export default World;
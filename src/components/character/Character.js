import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ReactQuill from 'react-quill';
import styles from './Character.css';
// import arrow from '../../assets/arrow.png';
import { editCharacterByCharacterId, destroyCharacterById } from '../../actions/characterActions';

const Character = ({ characterId, currentName, currentDescription }) => {
  const [name, setName] = useState(currentName);
  const [description, setDescription] = useState(currentDescription);
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
    dispatch(editCharacterByCharacterId(characterId, name, description));
    toggle();
  };

  const handleDelete = event => {
    event.preventDefault();
    dispatch(destroyCharacterById(characterId));
  };

  const toggle = () => {
    setHidden(!hidden);
    setArrow(!arrow);
  };
  
  return (
    <div className={styles.Character}>
      {hidden ?
        <div className={styles.HiddenEditBox}>
          <h1 onClick={toggle}>►</h1>
          <h3>{name}</h3>
        </div>
        :
        <div>
          <div className={styles.OpenEditBox}>
            <h1 onClick={toggle}>▼</h1>
          </div>
          <form className={styles.Form} onSubmit={onSubmit}>
            Name: <input type="text" value={name} onChange={({ target }) => setName(target.value)} required />
            <p>Description: </p><ReactQuill value={description} onChange={(value) => setDescription(value)} formats={formats} modules={modules} />
            <button>Done</button>
            <button onClick={handleDelete} type="button">Delete</button>
          </form>
        </div>
      }
    </div>
  );
};

Character.propTypes = {
  characterId: PropTypes.string,
  currentName: PropTypes.string,
  currentDescription: PropTypes.string
};

export default Character;
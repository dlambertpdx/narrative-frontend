import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import styles from '../../DefaultView-Modal.css';
import { createCharacter } from '../../actions/characterActions';
import { getCurrentStoryId } from '../../selectors/storySelectors';

const EditFormModalCharacter = ({ hideModal, show }) => {
  const dispatch = useDispatch();
  const characterStoryId = useSelector(state => getCurrentStoryId(state));

  const [characterName, setcharacterName] = useState('');
  const [characterDescription, setcharacterDescription] = useState('');
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

  if(redirect) return <Redirect to="/characters" />;

  const handleChange = ({ target }) => {
    setcharacterName(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createCharacter(characterStoryId, characterName, characterDescription));
    setcharacterName('');
    setcharacterDescription('');
    setRedirect(true);
  };

  return (
    <div>
      <div className={show ? styles.displayBlock : styles.displayNone} >
        <section className={styles.modalMain} >
          <form onSubmit={handleSubmit}>
            <input type="text" value={characterName} placeholder="Write Name or Title" onChange={handleChange} required />
            <ReactQuill value={characterDescription} onChange={(value) => setcharacterDescription(value)} formats={formats} modules={modules} />
            <button id={styles.ModalButton} value="button" onClick={hideModal}>Submit</button>
          </form>
          <button onClick={hideModal}>✗</button>
        </section>
      </div>
    </div>
  );
};

EditFormModalCharacter.propTypes = {
  hideModal: PropTypes.func,
  show: PropTypes.bool,
};

export default EditFormModalCharacter;
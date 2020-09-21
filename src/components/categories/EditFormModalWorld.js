import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import { createWorld } from '../../actions/worldActions';
import { getCurrentStoryId } from '../../selectors/storySelectors';
import styles from '../../DefaultView-Modal.css';

const EditFormModalWorld = ({ hideModal, show }) => {
  const dispatch = useDispatch();
  const worldStoryId = useSelector(state => getCurrentStoryId(state));

  const [worldName, setWorldName] = useState('');
  const [worldDescription, setWorldDescription] = useState('');
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

  if(redirect) return <Redirect to="/worlds" />;

  const handleChange = ({ target }) => {
    setWorldName(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createWorld(worldStoryId, worldName, worldDescription));
    setWorldName('');
    setWorldDescription('');
    setRedirect(true);
  };

  return (
    <div>
      <div className={show ? styles.displayBlock : styles.displayNone} >
        <section className={styles.modalMain} >
          <form onSubmit={handleSubmit}>
            <input type="text" value={worldName} placeholder="Write Name or Title" onChange={handleChange} required />
            <ReactQuill value={worldDescription} onChange={(value) => setWorldDescription(value)} formats={formats} modules={modules} />
            <button value="button" onClick={hideModal}>Submit</button>
          </form>
          <button onClick={hideModal}>✗</button>
        </section>
      </div>
    </div>
  );
};

EditFormModalWorld.propTypes = {
  hideModal: PropTypes.func,
  show: PropTypes.bool,
};

export default EditFormModalWorld;
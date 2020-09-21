import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import styles from '../../DefaultView-Modal.css';

import { getCurrentStoryId } from '../../selectors/storySelectors';
import { createChapter } from '../../actions/chapterActions';

const EditFormModalChapter = ({ hideModal, show }) => {
  const dispatch = useDispatch();
  const chapterStoryId = useSelector(state => getCurrentStoryId(state));

  const [chapterName, setChapterName] = useState('');
  const [chapterText, setChapterText] = useState('');
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

  if(redirect) return <Redirect to="/chapters" />;

  const handleChange = ({ target }) => {
    setChapterName(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createChapter(chapterStoryId, chapterName, chapterText));
    setChapterName('');
    setChapterText('');
    setRedirect(true);
  };

  return (
    <div>
      <div className={show ? styles.displayBlock : styles.displayNone} >
        <section className={styles.modalMain}>
          <form onSubmit={handleSubmit}>
            <input type="text" value={chapterName} placeholder="Write Name or Title" onChange={handleChange} required />
            <ReactQuill value={chapterText} onChange={(value) => setChapterText(value)} formats={formats} modules={modules} />
            <button value="button" onClick={hideModal}>Submit</button>
          </form>
          <button onClick={hideModal}>✗</button>
        </section>
      </div>
    </div>
  );
};

EditFormModalChapter.propTypes = {
  hideModal: PropTypes.func,
  show: PropTypes.bool,
};

export default EditFormModalChapter;
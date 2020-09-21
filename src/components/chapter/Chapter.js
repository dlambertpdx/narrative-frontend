import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ReactQuill from 'react-quill';
import styles from './Chapter.css';
import { editChapterByChapterId, destroyChapterById } from '../../actions/chapterActions';

const Chapter = ({ chapterId, currentChapterName, currentChapterText }) => {
  const [chapterName, setChapterName] = useState(currentChapterName);
  const [chapterText, setChapterText] = useState(currentChapterText);
  const [arrow, setArrow] = useState(true);
  const [hidden, setHidden] = useState(true);
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
    dispatch(editChapterByChapterId(chapterId, chapterName, chapterText));
    toggle();
  };

  const handleDelete = event => {
    event.preventDefault();
    dispatch(destroyChapterById(chapterId));
  };

  const toggle = () => {
    setHidden(!hidden);
    setArrow(!arrow);
  };

  return (
    <div className={styles.Chapter}>
      {hidden ?
        <div className={styles.HiddenEditBox}>
          <h1 onClick={toggle}>►</h1>
          <h3>{chapterName}</h3>
        </div>
        :
        <div>
          <div className={styles.OpenEditBox}>
            <h1 onClick={toggle}>▼</h1>
          </div>
          <form className={styles.Form} onSubmit={onSubmit}>
            Title: <input type="text" value={chapterName} onChange={({ target }) => setChapterName(target.value)} required />
            <p>Description: </p><ReactQuill value={chapterText} onChange={(value) => setChapterText(value)} formats={formats} modules={modules} />
            <button>Done</button>
            <button onClick={handleDelete} value="button">Delete</button>
          </form>
        </div>
      }
    </div >
  );
};

Chapter.propTypes = {
  currentChapterName: PropTypes.string,
  currentChapterText: PropTypes.string,
  chapterId: PropTypes.string.isRequired
};

export default Chapter;
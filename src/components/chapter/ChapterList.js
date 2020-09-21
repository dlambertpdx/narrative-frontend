import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Chapter from './Chapter';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { fetchChaptersByStoryId } from '../../actions/chapterActions';
import { getCurrentStoryChapters } from '../../selectors/chapterSelectors';
import styles from './ChapterList.css';

const ChapterList = () => {
  const storyId = localStorage.getItem('storyId');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChaptersByStoryId(storyId));
  }, []);

  const chapters = useSelector(state => getCurrentStoryChapters(state));

  let storyChapters;
  if(chapters.length > 0) {
    storyChapters = chapters.map((chapter, i) => {
      return (
        <li key={chapter._id || i}>
          <Chapter chapterId={chapter._id} currentChapterName={chapter.chapterName} currentChapterText={chapter.chapterText} />
        </li>
      );
    });
  }

  return (
    <div className={styles.ListContainer}>
      <Header />
      <div className={styles.ChapterList}>
        <h2>Chapters</h2>
        <ul>
          {storyChapters}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

ChapterList.propTypes = {
  chapters: PropTypes.arrayOf(PropTypes.object)
};

export default ChapterList;
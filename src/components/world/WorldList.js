import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import World from './World';
import { fetchWorldsByStoryId } from '../../actions/worldActions';
import { getCurrentStoryWorlds } from '../../selectors/worldSelectors';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import styles from './WorldList.css';

const WorldList = () => {
  const storyId = localStorage.getItem('storyId');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWorldsByStoryId(storyId));
  }, []);

  const worlds = useSelector(state => getCurrentStoryWorlds(state));
  
  let storyWorlds;
  if(worlds.length > 0) {
    storyWorlds = worlds.map((world, i) => {
      return (
        <li key={world._id || i}>
          <World worldId={world._id} currentWorldName={world.worldName} currentWorldDescription={world.worldDescription}/>
        </li>
      );
    });
  }

  return (
    <div className={styles.ListContainer}>
      <Header/>
      <div className={styles.WorldList}>
        <h2>Worlds</h2>
        <ul>
          {storyWorlds}
        </ul>
      </div>
      <Footer/>
    </div>
  );
};

WorldList.propTypes = {
  worlds: PropTypes.arrayOf(PropTypes.object)
};

export default WorldList;
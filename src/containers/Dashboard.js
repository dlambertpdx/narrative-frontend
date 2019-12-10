import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../components/sidebar/Sidebar';
// import CurrentStory from '../components/categories/CurrentStory';
// import CharacterCategory from '../components/categories/CharacterCategory';
// import ChapterCategory from '../components/categories/ChapterCategory';
// import LocationCategory from '../components/categories/LocationCategory';
// import WorldCategory from '../components/categories/WorldCategory';
import { getStoryList, getUserName, getUserImage } from '../selectors/storySelectors';
import { fetchStoryList } from '../actions/storyActions';
import DefaultViewModal from './default-view/DefaultView-Modal';
import { useAuth0 } from '../Auth0Provider';

const Dashboard = () => {
  const stories = useSelector(state => getStoryList(state));
  const userName = useSelector(state => getUserName(state));
  const userImage = useSelector(state => getUserImage(state));
  const { loading, isAuthenticated } = useAuth0();

  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if(!loading && isAuthenticated) dispatch(fetchStoryList());
  }, [loading, isAuthenticated]);

  return (
    <div>
      <Sidebar stories={stories} userName={userName} userImage={userImage} />
      <DefaultViewModal show={show} handleClose={hideModal} />
      <button type='button' onClick={showModal}>Add Story</button>
      
      {/* <main>
        <CurrentStory />
        <CharacterCategory />
        <ChapterCategory />
        <LocationCategory />
        <WorldCategory />
      </main> */}
    </div>
  );
};

Dashboard.propTypes = {

};

export default Dashboard;
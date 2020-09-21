import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createStory } from '../../actions/storyActions';

const DefaultView = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [synopsis, setSynopsis] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createStory(title, synopsis));
  };

  return (
    <div>
      <p></p>

      <form onSubmit={handleSubmit}>
        <input placeholder="title" type="text" value={title} onChange={({ target }) => setTitle(target.value)}></input>
        <input placeholder="synopsis" type="text" value={synopsis} onChange={({ target }) => setSynopsis(target.value)}></input>
        <button>Add Story</button>
      </form>
    </div>
  );
};

export default DefaultView;
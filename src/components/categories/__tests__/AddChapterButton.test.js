import React from 'react';
import { shallow } from 'enzyme';
import AddChapterButton from '../AddChapterButton';

describe('AddChapterButton component', () => {
  it('renders an add button', () => {
    const wrapper = shallow(<AddChapterButton handleAddClick={() => true} />);
    expect(wrapper).toMatchSnapshot();
  });
});
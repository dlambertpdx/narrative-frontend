import React from 'react';
import { shallow } from 'enzyme';
import AddCharacterButton from '../AddCharacterButton';

describe('AddCharacterButton component', () => {
  it('renders an add button', () => {
    const wrapper = shallow(<AddCharacterButton handleAddClick={() => true} />);
    expect(wrapper).toMatchSnapshot();
  });
});
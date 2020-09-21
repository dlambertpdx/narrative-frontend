import React from 'react';
import { shallow } from 'enzyme';
import AddLocationButton from '../AddLocationButton';

describe('AddLocationButton component', () => {
  it('renders an add button', () => {
    const wrapper = shallow(<AddLocationButton handleAddClick={() => true} />);
    expect(wrapper).toMatchSnapshot();
  });
});
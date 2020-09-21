import React from 'react';
import { shallow } from 'enzyme';
import AddWorldButton from '../AddWorldButton';

describe('AddWorldButton component', () => {
  it('renders an add button', () => {
    const wrapper = shallow(<AddWorldButton handleAddClick={() => true} />);
    expect(wrapper).toMatchSnapshot();
  });
});
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import 'jest-styled-components';
import Grid from './index';

const wrap = (props = {}) => shallow(<Grid matrixNum={5} {...props} />);

test('Renders with default props', () => {
  const wrapper = wrap();
  const tree = toJSON(wrapper);
  expect(tree).toMatchSnapshot();
});

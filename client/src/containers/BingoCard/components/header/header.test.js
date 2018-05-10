import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Header from './index';

test('Renders with default props', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});

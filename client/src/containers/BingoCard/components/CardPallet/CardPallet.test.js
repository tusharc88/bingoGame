import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import CardPallet from './index';

test('Renders with default props', () => {
  const tree = renderer.create(<CardPallet />).toJSON();
  expect(tree).toMatchSnapshot();
});

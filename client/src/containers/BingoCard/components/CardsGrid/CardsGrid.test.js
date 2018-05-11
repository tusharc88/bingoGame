import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import CardsGrid from './index';

test('Renders with default props', () => {
  const tree = renderer.create(<CardsGrid />).toJSON();
  expect(tree).toMatchSnapshot();
});

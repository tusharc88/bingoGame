import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import LastBall from './index';

test('Renders with default props', () => {
  const tree = renderer
    .create(<LastBall dimension={15} numberData={1} textData="Last Ball" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

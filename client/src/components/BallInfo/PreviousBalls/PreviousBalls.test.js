import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import PreviousBalls from './index';

test('Renders with default props', () => {
  const tree = renderer
    .create(
      <PreviousBalls
        dimension={15}
        numData={[1, 2, 3, 4]}
        textVal="PREVIOUS BALLS"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

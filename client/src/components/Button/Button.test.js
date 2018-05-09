import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Button from './index';

test('Renders with default props', () => {
  const tree = renderer.create(<Button>Click Me</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders with onClick prop', () => {
  const tree = renderer
    .create(<Button onClick={() => {}}>Click Me</Button>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

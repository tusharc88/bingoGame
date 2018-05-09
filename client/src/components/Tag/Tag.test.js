import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Tag from './index';

test('Renders with default props', () => {
  const tree = renderer.create(<Tag dimension={15}>{1}</Tag>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders with hasBorder prop', () => {
  const tree = renderer
    .create(
      <Tag dimension={15} hasBorder>
        {1}
      </Tag>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

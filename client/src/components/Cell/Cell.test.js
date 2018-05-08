import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import 'jest-styled-components';
import Cell from './index';

const wrap = (props = {}) =>
  shallow(
    <Cell currentNumber={1} {...props}>
      {1}
    </Cell>
  );

let wrapper = null;
let tree = null;

beforeAll(() => {
  wrapper = wrap();
  tree = toJSON(wrapper);
});

test('Renders with default props', () => {
  expect(tree).toMatchSnapshot();
});

test('handleDisabled should return false when currentNumber is 1 and Cell number is 1', () => {
  expect(wrapper.instance().handleDisabled()).toEqual(false);
});

test('handleDisabled should return true when currentNumber is 2 and Cell number is 1', () => {
  const newWrap = (props = {}) =>
    shallow(
      <Cell currentNumber={2} {...props}>
        {1}
      </Cell>
    );

  const newWrapper = newWrap();
  expect(newWrapper.instance().handleDisabled()).toEqual(true);
});

test('handleClick should toggle background color on clicking non disabled cell', () => {
  wrapper.simulate('click');
  expect(wrapper).toHaveStyleRule('background-color', '#3ecedf');
  wrapper.simulate('click');
  expect(wrapper).toHaveStyleRule('background-color', '#d7d3d2');
});

test('handleClick should not toggle background color on clicking disabled cell', () => {
  const newWrap = (props = {}) =>
    shallow(
      <Cell currentNumber={2} {...props}>
        {1}
      </Cell>
    );

  const newWrapper = newWrap();

  newWrapper.simulate('click');
  expect(newWrapper).toHaveStyleRule('background-color', '#d7d3d2');
});

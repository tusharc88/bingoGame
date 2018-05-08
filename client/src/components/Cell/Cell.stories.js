import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { withKnobs, number } from '@storybook/addon-knobs';
import Cell from './index';

storiesOf('Cell', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addWithInfo('default', <Cell>1</Cell>, () => (
    <Cell currentNumber={number('currentNumber', 1)}>
      {number('children', 1)}
    </Cell>
  ));

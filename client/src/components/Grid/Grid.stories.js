import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { withKnobs, number } from '@storybook/addon-knobs';
import Grid from './index';

storiesOf('Grid', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addWithInfo('default', <Grid matrixNum={number('matrixNum', 5)} />, () => (
    <Grid matrixNum={number('matrixNum', 5)} />
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { withKnobs, array, number, text } from '@storybook/addon-knobs';
import PreviousBalls from './index';

storiesOf('BallInfo', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addWithInfo(
    'PreviousBalls',
    <PreviousBalls
      dimension={number('dimension', 15)}
      numData={array('numData', [1, 2, 3, 4])}
      textVal={text('textVal', 'Previous Balls')}
    />,
    () => (
      <PreviousBalls
        dimension={number('dimension', 15)}
        numData={array('numData', [1, 2, 3, 4])}
        textVal={text('textVal', 'PREVIOUS BALLS')}
      />
    )
  );

import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { withKnobs, number, text } from '@storybook/addon-knobs';
import LastBall from './index';

storiesOf('BallInfo', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addWithInfo(
    'LastBall',
    <LastBall
      dimension={number('dimension', 25)}
      numberData={number('numberData', 1)}
      textData={text('textData', 'Last Ball')}
    />,
    () => (
      <LastBall
        dimension={number('dimension', 25)}
        numberData={number('numberData', 1)}
        textData={text('textData', 'Last Ball')}
      />
    )
  );

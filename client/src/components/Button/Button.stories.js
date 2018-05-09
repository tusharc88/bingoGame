import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import Button from './index';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addWithInfo('default', <Button />, () => (
    <Button onClick={action('onClick')}>{text('children', 'Click Me!')}</Button>
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';
import Tag from './index';

storiesOf('Tag', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addWithInfo('default', <Tag />, () => (
    <Tag
      dimension={number('dimension', 15)}
      hasBorder={boolean('hasBorder', false)}
    >
      {number('children', 1)}
    </Tag>
  ));

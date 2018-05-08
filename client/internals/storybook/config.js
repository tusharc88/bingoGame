import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';

const req = require.context('../../src', true, /.stories.js$/);
const loadStories = () => req.keys().forEach(filename => req(filename));

setAddon(infoAddon);

configure(loadStories, module);

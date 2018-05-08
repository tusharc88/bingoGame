import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { Provider } from 'react-redux';
import configureStore from '../../src/store/configureStore';

const store = configureStore();
const req = require.context('../../src', true, /.stories.js$/);
const loadStories = () => req.keys().forEach(filename => req(filename));

addDecorator(story => <Provider store={store}>{story()}</Provider>);

setAddon(infoAddon);

configure(loadStories, module);

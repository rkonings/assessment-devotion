import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import React from 'react';
import Sidebar from '../src/Components/Layout/Sidebar';

storiesOf('Sidebar', module).add('default', () => {
    return <Sidebar isOpen={boolean('open', true)}>FOO</Sidebar>;
});

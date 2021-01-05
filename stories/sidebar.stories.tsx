import { storiesOf } from '@storybook/react';
import React from 'react';
import Sidebar from '../src/Components/Layout/Sidebar';

storiesOf('Sidebar', module).add('default', () => {
    return <Sidebar />;
});

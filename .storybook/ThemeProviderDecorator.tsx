import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import Default from '../src/theme';

const ThemeProviderDecorator = (storyFn) => (
    <ThemeProvider theme={Default}>{storyFn()}</ThemeProvider>
);

export default ThemeProviderDecorator;

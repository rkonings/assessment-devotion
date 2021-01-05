import 'jest-styled-components';
import React from 'react';
import { mount } from 'enzyme';
import Sidebar from './Sidebar';

describe('<Color />', () => {
    test('render with given color', () => {
        const wrapper = mount(<Sidebar />);
        expect(wrapper).toHaveStyleRule('background', '#ffffff');
    });
});

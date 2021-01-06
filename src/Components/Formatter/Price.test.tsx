import React from 'react';
import { mount } from 'enzyme';
import Price from './Price';

describe('<Price />', () => {
    it('should return a price in Euro', () => {
        const wrapper = mount(<Price>99856</Price>);

        expect(wrapper.html()).toContain('€');
        expect(wrapper.text()).toContain('998,56');
    });
});

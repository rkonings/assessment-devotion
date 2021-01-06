import React from 'react';
import { mount } from 'enzyme';
import Sidebar, { ClickAway, Overlay, SidebarBody, Close } from './Sidebar';

describe('<Sidebar />', () => {
    const closeHandlerMock = jest.fn();

    it('should render the sidebar', () => {
        const wrapper = mount(
            <Sidebar closeHandler={closeHandlerMock} isOpen={true}>
                FOO
            </Sidebar>
        );
        expect(wrapper.find(ClickAway).length).toBe(1);
        expect(wrapper.find(SidebarBody).length).toBe(1);
        expect(wrapper.find(Overlay).length).toBe(1);
    });

    it('should remove the sidebar on outside click', () => {
        const wrapper = mount(
            <Sidebar closeHandler={closeHandlerMock} isOpen={true}>
                FOO
            </Sidebar>
        );
        wrapper.find(ClickAway).simulate('click');
        expect(closeHandlerMock).toBeCalledTimes(1);
    });

    it('should remove the sidebar when mouseclick on close icon', () => {
        const wrapper = mount(
            <Sidebar closeHandler={closeHandlerMock} isOpen={true}>
                FOO
            </Sidebar>
        );
        wrapper.find(Close).simulate('click');
        expect(closeHandlerMock).toBeCalledTimes(1);
    });

    it('should render children in the body', () => {
        const wrapper = mount(
            <Sidebar closeHandler={closeHandlerMock} isOpen={true}>
                FOO
            </Sidebar>
        );
        expect(wrapper.find(SidebarBody).text()).toEqual('FOO');
    });

    afterEach(() => {
        closeHandlerMock.mockReset();
    });
});

import React from 'react';

import styled from 'styled-components';
import useFocusTrap from '@charlietango/use-focus-trap';
import { Close as CloseIcon } from '../Icons';

export const ClickAway = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    background: rgba(0, 0, 0, 0.4);
    z-index: 999;
`;

export const Close = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
`;

interface Sidebar {
    className?: string;
    isOpen?: boolean;
    children: string | JSX.Element | JSX.Element[];
    closeHandler: () => void;
}

export const SidebarBody = styled.div`
    width: 400px;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    background: #ffffff;
`;

const Sidebar = ({ className, isOpen, children, closeHandler }: Sidebar) => {
    const focusTrap = useFocusTrap();

    return (
        <div className={className}>
            {isOpen && (
                <Overlay>
                    <ClickAway onClick={() => closeHandler()} />
                    <SidebarBody ref={focusTrap}>
                        {children}
                        <Close onClick={() => closeHandler()}>
                            <CloseIcon />
                        </Close>
                    </SidebarBody>
                </Overlay>
            )}
        </div>
    );
};

export default styled(Sidebar)``;

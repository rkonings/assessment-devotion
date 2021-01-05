import React from 'react';

import styled from 'styled-components';

interface Sidebar {
    className?: string;
}

export default styled(({ className }: Sidebar) => {
    return <div className={className}>Sidebar</div>;
})`
    width: 300px;
    position: abolute;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100%;
`;

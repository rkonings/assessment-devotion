import React from 'react';

interface Price {
    children: string | number;
}

const format = (value: string | number) => {
    if (typeof value === 'number') {
        value = value.toString();
    }

    return [
        value.slice(0, value.length - 2),
        ',',
        value.slice(value.length - 2),
    ].join('');
};

export default ({ children }: Price) => {
    return <span>&euro; {format(children)}</span>;
};

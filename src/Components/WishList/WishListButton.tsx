import React from 'react';
import styled from 'styled-components';

import { Heart } from '../Icons';

interface WishListButton {
    className?: string;
    wishListItems: Map<number | string, number>;
    onClick: () => void;
}

const Badge = styled.span``;

const getTotalWishListItems = (wishListItems: Map<string | number, number>) => {
    return [...wishListItems.values()].reduce(
        (amount, total) => amount + total,
        0
    );
};

export default styled(
    ({ className, wishListItems, onClick }: WishListButton) => {
        return (
            <button className={className} onClick={onClick}>
                <Heart />
                <Badge>{getTotalWishListItems(wishListItems)}</Badge>
            </button>
        );
    }
)`
    background: none;
    border: none;
    position: relative;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &:hover {
        ${Heart} {
            fill: #000000;
        }
    }

    ${Heart} {
        height: 20px;
        width: 20px;
    }

    ${Badge} {
        position: absolute;
        top: -25%;
        left: -50%;
        background: #ff4e00;
        font-size: 10px;
        color: #ffffff;
        border-radius: 5px;
        text-align: center;
        padding: 0.1em 1em;
    }
`;

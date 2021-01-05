import React from 'react';

import styled from 'styled-components';
import { Product } from './interfaces';

interface ProductTile {
    product: Product;
    onWishList: boolean;
    toggleWishList: (id: number) => void;
    className?: string;
}

export default styled(
    ({ product, onWishList, toggleWishList, className }: ProductTile) => {
        return <div className={className}>ProductTile</div>;
    }
)``;

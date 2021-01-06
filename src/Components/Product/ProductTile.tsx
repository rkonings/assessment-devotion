import React from 'react';

import styled from 'styled-components';
import { Product } from './interfaces';
import Price from '../Formatter/Price';

interface WishListButton {
    onWishList: boolean;
    className?: string;
    toggleWishList: () => void;
}

export const WishListButton = styled(
    ({ onWishList, className, toggleWishList }: WishListButton) => (
        <button onClick={() => toggleWishList()} className={className}>
            <span>{!onWishList ? 'Add to wishlist' : 'On wishlist'}</span>
        </button>
    )
)`
    display: flex;
    align-items: center;
    border: none;
    background: #31ce83;
    font-size: 14px;
    padding: 10px;
    text-transform: uppercase;
    height: 40px;
    box-sizing: border-box;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &:hover {
        background: #2db775;
    }
`;

export const ProductTitle = styled.div`
    font-size: 14px;
    margin-bottom: 0.5em;
`;
export const ProductPrice = styled.div`
    font-size: 14px;
    font-weight: bold;
`;
export const ProductImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: auto;
        height: 120px;
    }
    margin-bottom: 0.5em;
`;
export const ProductCategory = styled.div`
    color: #5b5b5b;
    font-size: 10px;
    margin-top: 5px;
`;

interface ProductTile {
    product: Product;
    onWishList: boolean;
    toggleWishList: (id: number) => void;
    className?: string;
}

export default styled(
    ({ product, onWishList, toggleWishList, className }: ProductTile) => {
        const { id, title, image, price, category } = product;
        return (
            <div className={className}>
                <ProductImage>
                    <img src={image} />
                </ProductImage>
                <WishListButton
                    onWishList={onWishList}
                    toggleWishList={() => toggleWishList(id)}
                />
                <ProductCategory>{category}</ProductCategory>
                <ProductTitle>{title}</ProductTitle>
                <ProductPrice>
                    <Price>{price}</Price>
                </ProductPrice>
            </div>
        );
    }
)`
    display: flex;
    width: 250px;
    box-sizing: border-box;
    height: 300px;
    margin: 0 15px;

    flex-direction: column;
`;

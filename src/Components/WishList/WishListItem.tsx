import React from 'react';
import styled from 'styled-components';
import {
    ProductCategory,
    ProductPrice,
    ProductTitle,
} from '../Product/ProductTile';

import Price from '../Formatter/Price';

export const WishListProductImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 75px;
        height: auto;
    }
    margin-right: 2em;
`;

interface WishListItem {
    title: string;
    image: string;
    amount: number;
    price: number;
    category: string;
    changeAmount: (amount: number) => void;
    removeHandler: () => void;
    className?: string;
}

interface AmountSelector {
    className?: string;
    amount: number;
    onChange: (amount: number) => void;
}

const AmountSelectorSubStract = styled.div`
    display: flex;
    cursor: pointer;
`;

const AmountSelectorAdd = styled.div`
    display: flex;
    cursor: pointer;
`;

const AmountSelectorAmount = styled.div`
    display: flex;
    width: 50px;
    text-align: center;
    justify-content: center;
`;

const AmountSelector = styled(
    ({ className, amount, onChange }: AmountSelector) => {
        const substractHandler = () => {
            onChange(amount === 0 ? 0 : amount - 1);
        };

        const addHandler = () => {
            onChange(amount + 1);
        };

        return (
            <div className={className}>
                <AmountSelectorSubStract onClick={substractHandler}>
                    -
                </AmountSelectorSubStract>
                <AmountSelectorAmount>{amount}</AmountSelectorAmount>
                <AmountSelectorAdd onClick={addHandler}>+</AmountSelectorAdd>
            </div>
        );
    }
)`
    display: flex;
`;

interface Remove {
    removeHandler: () => void;
    className?: string;
}

const Remove = styled(({ className, removeHandler }) => (
    <div onClick={() => removeHandler()} className={className}>
        remove item
    </div>
))`
    font-size: 10px;
    margin-top: 0.5em;
`;

const ProductInfo = styled.div`
    width: 200px;
    margin-top: 10px;
`;

const ProductAmount = styled.div`
    margin-top: 20px;
`;

export default styled(
    ({
        title,
        image,
        amount,
        price,
        category,
        removeHandler,
        changeAmount,
        className,
    }: WishListItem) => (
        <div className={className}>
            <WishListProductImage>
                <img src={image} />
            </WishListProductImage>
            <ProductInfo>
                <ProductCategory>{category}</ProductCategory>
                <ProductTitle>{title}</ProductTitle>
                <ProductPrice>
                    <Price>{price}</Price>
                </ProductPrice>
                <Remove removeHandler={removeHandler} />
            </ProductInfo>

            <ProductAmount>
                <AmountSelector
                    amount={amount}
                    onChange={(amount) => changeAmount(amount)}
                />
            </ProductAmount>
        </div>
    )
)`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #959595;
    padding-bottom: 1em;
    margin-bottom: 1em;
`;

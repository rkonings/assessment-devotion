import React from 'react';
import styled from 'styled-components';
import Sidebar from '../Layout/Sidebar';
import { Product } from '../Product/interfaces';
import WishListItem from './WishListItem';

interface WishList {
    wishListItems: Map<number | string, number>;
    products: Product[];
    onChange: (items: Map<number | string, number>) => void;
    isOpen?: boolean;
    closeHandler: () => void;
}

const getWishListItemProduct = (id: number | string, products: Product[]) => {
    const product = products.find((product) => product.id == id);
    return product;
};

const List = styled.div`
    padding: 2em 1em;
`;

export default ({
    wishListItems,
    products,
    onChange,
    isOpen,
    closeHandler,
}: WishList) => {
    const listItems: JSX.Element[] = [];

    wishListItems.forEach((value, key) => {
        const product = getWishListItemProduct(key, products);
        if (product) {
            listItems.push(
                <WishListItem
                    price={product.price}
                    removeHandler={() => {
                        const changedItems = new Map<number | string, number>(
                            wishListItems
                        );
                        changedItems.delete(key);
                        onChange(changedItems);
                    }}
                    category={product.category}
                    changeAmount={(amount) => {
                        const changedItems = new Map<number | string, number>(
                            wishListItems
                        );
                        changedItems.set(key, amount);
                        onChange(changedItems);
                    }}
                    amount={value}
                    title={product.title}
                    image={product.image}
                />
            );
        }
    });

    return (
        <Sidebar closeHandler={closeHandler} isOpen={isOpen}>
            <List>{listItems}</List>
        </Sidebar>
    );
};

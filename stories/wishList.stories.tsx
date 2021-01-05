import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import WishListItem from '../src/Components/WishList/WishListItem';
import WishList from '../src/Components/WishList/WishList';

storiesOf('Wishlist', module)
    .add('item', () => {
        return (
            <WishListItem
                amount={1}
                category="FOO"
                title="FOO"
                image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                price={100}
                changeAmount={action('change')}
                removeHandler={action('remove')}
            />
        );
    })
    .add('list', () => {
        const products = [
            {
                id: 1,
                category: 'FOO',
                title: 'BAR',
                image:
                    'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
                description: 'FOOBAR',
                price: 100,
            },
        ];

        return (
            <WishList
                products={products}
                wishListItems={new Map(Object.entries({ 1: 10 }))}
                onChange={(items) => console.log(items)}
                closeHandler={action('close')}
            />
        );
    });

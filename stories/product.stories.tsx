import { storiesOf } from '@storybook/react';
import { text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import React from 'react';
import ProductTile from '../src/Components/Product/ProductTile';
import ProductOverview from '../src/Components/Product/ProductOverview';

storiesOf('Product', module)
    .add('product tile', () => {
        const onWishList = boolean('OnWishtList', false);
        const id = 1;
        const title = text('title', 'DOO');
        const category = text('category', 'FOO');
        const price = number('price', 100.0);
        const description = 'FOOBAZ';
        const image = text(
            'image',
            'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
        );

        return (
            <ProductTile
                onWishList={onWishList}
                toggleWishList={action('toggle')}
                product={{ id, title, category, price, image, description }}
            />
        );
    })
    .add('product overview', () => {
        const id = 1;
        const title = text('title', 'DOO');
        const category = text('category', 'FOO');
        const price = number('price', 100.0);
        const description = 'FOOBAZ';
        const image = text(
            'image',
            'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
        );

        return (
            <ProductOverview>
                {Array(12)
                    .fill(12)
                    .map(() => (
                        <ProductTile
                            onWishList={Math.random() >= 0.5}
                            toggleWishList={action('toggle')}
                            product={{
                                id,
                                title,
                                category,
                                price,
                                image,
                                description,
                            }}
                        />
                    ))}
            </ProductOverview>
        );
    });

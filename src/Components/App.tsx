import React, { useState } from 'react';

import GlobalStyle from '../GlobalStyle';
import Page from './Layout/Page';
import Header from './Layout/Header';
import WishList from './WishList/WishList';
import ProductOverview from './Product/ProductOverview';
import ProductTile from './Product/ProductTile';
import WishListButton from './WishList/WishListButton';
import { getProducts } from '../Models/Product';
import usePersistedWishListState from '../Hooks/usePersistedWishListState';

// const PRODUCTS = [
//     {
//         id: 1,
//         title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
//         price: 109.95,
//         description:
//             'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
//         category: 'men clothing',
//         image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
//     },
//     {
//         id: 2,
//         title: 'Mens Casual Premium Slim Fit T-Shirts ',
//         price: 22.3,
//         description:
//             'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
//         category: 'men clothing',
//         image:
//             'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
//     },
// ];

export default () => {
    const products = getProducts();

    const [wishListItems, setWishListItems] = usePersistedWishListState();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <GlobalStyle />
            <Page>
                <Header>
                    <WishListButton
                        wishListItems={wishListItems}
                        onClick={() => setSidebarOpen(true)}
                    />
                </Header>
                <ProductOverview>
                    {products.map((product) => (
                        <ProductTile
                            onWishList={wishListItems.has(product.id)}
                            toggleWishList={() => {
                                const changedItems = new Map(wishListItems);
                                if (wishListItems.has(product.id)) {
                                    changedItems.delete(product.id);
                                } else {
                                    changedItems.set(product.id, 1);
                                }
                                setWishListItems(changedItems);
                            }}
                            product={product}
                        />
                    ))}
                </ProductOverview>
            </Page>
            <WishList
                isOpen={sidebarOpen}
                closeHandler={() => setSidebarOpen(false)}
                products={products}
                wishListItems={wishListItems}
                onChange={(items) => setWishListItems(items)}
            />
        </>
    );
};

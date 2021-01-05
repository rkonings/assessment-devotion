import React from 'react';
import { mount } from 'enzyme';
import ProductTile, {
    ProductTitle,
    ProductImage,
    ProductPrice,
    WishListButton,
} from './ProductTile';

describe('<ProductTitle />', () => {
    const product = {
        title: 'FOO',
        category: 'BAZ',
        price: 100,
        image: 'foo',
        id: 1,
        description: 'FOOBAR',
    };

    it('should have a title', () => {
        const wrapper = mount(
            <ProductTile
                product={product}
                onWishList={false}
                toggleWishList={() => null}
            />
        );
        expect(wrapper.find(ProductTitle).text()).toEqual(product.title);
    });

    it('should have an image', () => {
        const wrapper = mount(
            <ProductTile
                product={product}
                onWishList={false}
                toggleWishList={() => null}
            />
        );
        expect(wrapper.find(ProductImage).html()).toContain(product.image);
    });

    it('should have a price', () => {
        const wrapper = mount(
            <ProductTile
                product={product}
                onWishList={false}
                toggleWishList={() => null}
            />
        );
        expect(wrapper.find(ProductPrice).text()).toContain(product.price);
    });

    it('should has an add to wishlist button', () => {
        const wrapper = mount(
            <ProductTile
                product={product}
                onWishList={false}
                toggleWishList={() => null}
            />
        );
        expect(wrapper.find(WishListButton).length).toBe(1);
    });

    it('should call toggleWishtList on mouse click', () => {
        const toggleWishList = jest.fn();
        const wrapper = mount(
            <ProductTile
                product={product}
                onWishList={false}
                toggleWishList={toggleWishList}
            />
        );

        wrapper.find(WishListButton).simulate('click');
        expect(toggleWishList).toBeCalled();
    });

    it('should have On Wishlist as button text', () => {
        const toggleWishList = jest.fn();
        const wrapper = mount(
            <ProductTile
                product={product}
                onWishList={true}
                toggleWishList={toggleWishList}
            />
        );
        const button = wrapper.find(WishListButton);
        expect(button.text()).toContain('On wishlist');
    });
});

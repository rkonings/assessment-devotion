import { renderHook, act } from '@testing-library/react-hooks';
import usePersistedWishListState from './usePersistedWishListState';

const setUp = () => renderHook(() => usePersistedWishListState());

describe('usePersistedWishListState', () => {
    it('should return the persisted state', () => {
        const { result } = setUp();
        const [state, setState] = result.current;

        expect(state).toBeInstanceOf(Map);
        expect(typeof setState === 'function').toBeTruthy();
    });

    it('should return an empty Map', () => {
        const localStorageSpyGetItem = jest.spyOn(
            window.localStorage.__proto__,
            'getItem'
        );

        const { result } = setUp();
        const [state] = result.current;

        expect(state).toBeInstanceOf(Map);
        expect((state as Map<string | number, number>).size).toBe(0);

        localStorageSpyGetItem.mockRestore();
    });

    it('should return a Map with wishlist items', () => {
        const localStorageSpyGetItem = jest.spyOn(
            window.localStorage.__proto__,
            'getItem'
        );

        localStorageSpyGetItem.mockImplementation(() =>
            JSON.stringify([
                [1, 1],
                [2, 3],
            ])
        );

        const { result } = setUp();
        const [state] = result.current;

        expect(state).toBeInstanceOf(Map);
        expect((state as Map<string | number, number>).size).toBe(2);

        localStorageSpyGetItem.mockRestore();
    });

    it('should call localStorage.setItem when setting the state', () => {
        const localStorageSpyGetItem = jest.spyOn(
            window.localStorage.__proto__,
            'getItem'
        );

        localStorageSpyGetItem.mockImplementation(() =>
            JSON.stringify([[1, 1]])
        );
        const localStorageSpySetItem = jest.spyOn(
            window.localStorage.__proto__,
            'setItem'
        );

        const { result } = setUp();
        const [state, setState] = result.current;

        const newState = new Map(state as Map<string, number | number>);

        act(() => {
            newState.set('3', 1);

            if (typeof setState === 'function') {
                setState(newState);
            }
        });

        expect(localStorageSpySetItem).toBeCalled();

        localStorageSpySetItem.mockRestore();
        localStorageSpyGetItem.mockRestore();
    });
});

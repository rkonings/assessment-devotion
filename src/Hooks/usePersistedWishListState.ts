import { useState, useEffect, Dispatch, SetStateAction } from 'react';

const STORAGE_KEY = 'wishlist';

export default (): [
    Map<string | number, number>,
    Dispatch<SetStateAction<Map<string | number, number>>>
] => {
    const rawStoredItems = localStorage.getItem(STORAGE_KEY);
    const storedItems = rawStoredItems ? JSON.parse(rawStoredItems) : [];

    const [state, setState] = useState<Map<string | number, number>>(
        new Map(storedItems)
    );

    useEffect(() => {
        const newState = Array.from(state.entries());
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    }, [state]);

    return [state, setState];
};

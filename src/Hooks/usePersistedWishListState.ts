import { useState, useEffect } from 'react';

const STORAGE_KEY = 'wishlist';

export default () => {
    const rawStoredItems = localStorage.getItem(STORAGE_KEY);
    const storedItems = rawStoredItems ? JSON.parse(rawStoredItems) : [];

    const [state, setState] = useState<Map<string | number, number>>(
        new Map(storedItems)
    );

    useEffect(() => {
        const newState = Array.from(state.values());
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    }, [state]);

    return [state, setState];
};

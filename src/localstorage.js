let storage = localStorage;

export const saveStorage = state => {
    const savedState = JSON.stringify({state});
    storage.setItem('state', savedState);
};

export const loadStorage = () => {
    const savedState = storage.getItem('state');
    if (savedState) {
        return JSON.parse(savedState).state;
    } else {
        return undefined;

    }
};
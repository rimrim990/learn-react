import {useSyncExternalStore} from "react";

type Callback = () => void;

function subscribe(onStoreChange: Callback) {
    // subscribe external event.
    window.addEventListener('online', onStoreChange);
    window.addEventListener('offline', onStoreChange);

    // unsubscribe external event.
    return () => {
        window.removeEventListener('online', onStoreChange);
        window.removeEventListener('offline', onStoreChange);
    };
}

export function useOnlineStatus() {
    return useSyncExternalStore(subscribe, () => navigator.onLine)
}
/**
 * The default cache setting for pages in the shopping flow
 */
export declare const CACHE_PAGES: {
    edge: {
        maxAgeSeconds: number;
    };
    browser: {
        maxAgeSeconds: number;
        serviceWorkerSeconds: number;
    };
};
/**
 * The default cache setting for static assets like JS, CSS, and images.
 */
export declare const CACHE_ASSETS: {
    edge: {
        maxAgeSeconds: number;
        forcePrivateCaching: boolean;
    };
    browser: {
        maxAgeSeconds: number;
        serviceWorkerSeconds: number;
    };
};

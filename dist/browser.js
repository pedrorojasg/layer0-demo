/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/browser.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@layer0/core/constants.js":
/*!************************************************!*\
  !*** ./node_modules/@layer0/core/constants.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/**\n * Layer0 configuration file name.\n */\nexports.LAYER0_CONFIG_FILE = 'layer0.config.js';\n/**\n * Indicate asset files that need to be uploaded under a different\n * bucket key.\n * It contains values like\n * {\n *   '/posts' => '/posts/index.html'\n * }\n */\nexports.LAYER0_ASSET_ALIASES_FILE = 'asset-aliases.json';\n/**\n * Environment variables used by Layer0.\n */\nexports.LAYER0_ENV_VARIABLES = {\n    /**\n     * Layer0 configuration environment variable key.\n     */\n    config: 'LAYER0_CONFIG',\n    /**\n     * Indicates whether code is running locally or in the cloud.\n     * @private\n     */\n    deploymentType: 'LAYER0_DEPLOYMENT_TYPE',\n    /**\n     * Allows Layer0 development team to easily override Layer0 version\n     * during development process.\n     * @private\n     */\n    versionOverride: 'LAYER0_VERSION_OVERRIDE',\n};\n/**\n * Indicates that code is running in AWS.\n * @private\n */\nexports.LAYER0_DEPLOYMENT_TYPE_AWS = 'AWS';\n/**\n * Prefix of all Layer0 headers.\n */\nexports.LAYER0_HEADERS_PREFIX = 'x-0-';\n/**\n * Maximum number of user headers allowed by Layer0 platform.\n *\n * We limit the request and response headers allowed to 70. This is due to a limitation that edge has\n * which at the moment supports up to 96 headers. Edge provider itself needs to use some of those headers\n * with the remainder used by our edge code.\n *\n * NOTE: This constant must be equal ot the constant of the same name defined in Layer0 buffer proxy.\n * NOTE: If this constant is updated then the constant of the same name has to be updated in @layer0/build-lambda module.\n */\nexports.LAYER0_MAX_USER_HEADERS_ALLOWED = 70;\n/**\n * Status code returned when there are too many request or response headers.\n *\n * Must be equal to HeaderOverflowError status code as defined in build lambda and Layer0 buffer proxy.\n */\nexports.LAYER0_TOO_MANY_HEADERS_STATUS_CODE = 542;\n/**\n * The status code returned when the layer0_prefetch query param is present and a response could not be found in the cache.\n */\nexports.LAYER0_UNCACHED_PREFETCH_STATUS = 412;\n/**\n * CDN-as-code configuration actions\n */\nexports.ACTIONS = {\n    setHeader: 'set-header',\n    updateHeader: 'update-header',\n    removeHeader: 'remove-header',\n    syntheticRes: 'synthetic-response',\n    updatePath: 'update-path',\n    proxy: 'proxy',\n    addCookie: 'add-cookie',\n    updateCookie: 'update-cookie',\n    removeCookie: 'remove-cookie',\n};\n/**\n * The backend for cloud functions\n */\nexports.BACKENDS = {\n    js: '__js__',\n    static: '__static__',\n    permanentStatic: '__permanent_static__',\n    imageOptimizer: '__image_optimizer__',\n};\nexports.HTTP_METHODS = {\n    head: 'head',\n    get: 'get',\n    post: 'post',\n    delete: 'delete',\n    put: 'put',\n    patch: 'patch',\n    options: 'options',\n};\n/**\n * Common HTTP headers.\n */\nexports.HTTP_HEADERS = {\n    authorization: 'authorization',\n    acceptEncoding: 'accept-encoding',\n    cacheControl: 'cache-control',\n    contentEncoding: 'content-encoding',\n    contentLength: 'content-length',\n    contentType: 'content-type',\n    cookie: 'cookie',\n    host: 'host',\n    location: 'location',\n    serverTiming: 'server-timing',\n    setCookie: 'set-cookie',\n    userAgent: 'user-agent',\n    vary: 'vary',\n    xForwardedFor: 'x-forwarded-for',\n    xRequestId: 'x-request-id',\n    xSwCacheControl: 'x-sw-cache-control',\n    xLayer0Browser: 'x-0-browser',\n    xLayer0CacheControl: 'x-0-cache-control',\n    xLayer0CachingStatus: 'x-0-caching-status',\n    xLayer0ClientIp: 'x-0-client-ip',\n    xLayer0Components: 'x-0-components',\n    xLayer0Destination: 'x-0-destination',\n    xLayer0Device: 'x-0-device',\n    xLayer0DeviceIsBot: 'x-0-device-is-bot',\n    xLayer0GeoCity: 'x-0-geo-city',\n    xLayer0GeoCountryCode: 'x-0-geo-country-code',\n    xLayer0GeoLatitude: 'x-0-geo-latitude',\n    xLayer0GeoLongitude: 'x-0-geo-longitude',\n    xLayer0GeoPostalCode: 'x-0-geo-postal-code',\n    xLayer0MatchedRoutes: 'x-0-matched-routes',\n    xLayer0Protocol: 'x-0-protocol',\n    xLayer0Route: 'x-0-route',\n    xLayer0Status: 'x-0-status',\n    xLayer0SurrogateKey: 'x-0-surrogate-key',\n    xLayer0T: 'x-0-t',\n    xLayer0UserT: 'x-0-user-t',\n    xLayer0Vendor: 'x-0-vendor',\n    xLayer0Version: 'x-0-version',\n};\n/**\n * Values for x-0-caching-status\n */\nexports.CACHING_STATUS = {\n    ok: 'ok',\n    private: 'private',\n    method: 'method',\n    bodyTooBig: 'body-too-big',\n    code: 'code',\n    setCookie: 'set-cookie',\n    noMaxAge: 'no-max-age',\n};\nexports.CACHEABLE_METHODS = new Set(['get', 'head']);\n/**\n * When present, this query parameter will cause Layer0 ro return a 412 status\n * if a response could not be found in the cache.\n */\nexports.PREFETCH_QUERY_PARAM = 'layer0_prefetch';\n/**\n * The name of the query parameter used to detect HEAD requests.\n */\nexports.HEAD_QUERY_PARAM = 'layer0_head';\n/**\n * The name of the query parameter used for the body of POST requests, which is used for the cache key\n */\nexports.POST_BODY_QUERY_PARAM = 'pref_layer0_body';\n/**\n * The name of the query parameter used for the method of requests, which is used for the cache key\n */\nexports.METHOD_QUERY_PARAM = 'pref_layer0_method';\n/**\n * Route Group name, which is used in router for fallback routes\n */\nexports.ROUTES_FALLBACK = 'fallback';\n/**\n * The path for the built-in image optimizer.\n */\nexports.LAYER0_IMAGE_OPTIMIZER_PATH = '/__layer0_image_optimizer';\n\n\n//# sourceURL=webpack:///./node_modules/@layer0/core/constants.js?");

/***/ }),

/***/ "./node_modules/@layer0/core/router/CacheManifest.js":
/*!***********************************************************!*\
  !*** ./node_modules/@layer0/core/router/CacheManifest.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst universalRouteUtils_1 = __webpack_require__(/*! ./universalRouteUtils */ \"./node_modules/@layer0/core/router/universalRouteUtils.js\");\nconst mapValues_1 = __importDefault(__webpack_require__(/*! ../utils/mapValues */ \"./node_modules/@layer0/core/utils/mapValues.js\"));\n/**\n * A serializable array of route descriptors to be passed to the browser.\n * @private\n */\nclass CacheManifest {\n    constructor(entries) {\n        this.entries = entries || [];\n    }\n    /**\n     * Returns a list of entries in this CacheManifest where both the browser and\n     * edge cache times are defined, and greater than 0\n     */\n    get cacheableEntries() {\n        return this.entries.filter(CacheManifest.isEntryCacheable);\n    }\n    /**\n     * Returns a list of routes (as RegExp) that are cacheable SPA routes\n     */\n    get spaRoutes() {\n        return this.cacheableEntries\n            .filter(({ cacheOptions }) => cacheOptions.browser && cacheOptions.browser.spa)\n            .map(({ route }) => new RegExp(route, 'i'));\n    }\n    /**\n     * Returns true if the URL should be prefetched, based on the matched route's `cacheOptions`\n     * @param {URL} url The URL to test\n     */\n    shouldPrefetch(url) {\n        let doPrefetch = false;\n        this.entries.some(entry => {\n            const matches = CacheManifest.entryMatches(entry, url);\n            if (matches) {\n                doPrefetch =\n                    CacheManifest.isEntryCacheable(entry) || !!entry.cacheOptions.prefetchUpstreamRequests;\n                // if it's prefetchable, or if it matches a stop route, then no need to continue checking:\n                return doPrefetch || entry.returnsResponse;\n            }\n            return false;\n        });\n        return doPrefetch;\n    }\n    /**\n     * Returns true if the entry matches the URL's path, query params, and/or protocol\n     * @param {CacheManifestEntry} entry The entry to test\n     * @param {URL} url URL to check against the entry\n     */\n    static entryMatches(entry, url) {\n        return (new RegExp(entry.route, 'i').test(url.pathname) &&\n            universalRouteUtils_1.matchCriteriaRegexObjectWithRequestObject(mapValues_1.default(entry.query || {}, value => (value ? new RegExp(value, 'i') : null)), Object.fromEntries(Array.from(url.searchParams.entries()))) &&\n            (entry.protocol ? new RegExp(entry.protocol, 'i').test(url.protocol) : true));\n    }\n    /**\n     * Returns true if the given entry has its `cacheOptions` set so that the route\n     * is cacheable by the edge and the browser.\n     * @param {CacheManifestEntry} entry The entry to test\n     */\n    static isEntryCacheable({ cacheOptions }) {\n        return !!(cacheOptions.browser &&\n            (cacheOptions.browser.serviceWorkerSeconds || 0) > 0 &&\n            cacheOptions.edge &&\n            (cacheOptions.edge.maxAgeSeconds || 0) > 0);\n    }\n    /**\n     * Creates a new `CacheManifest` object from the provided serialized entries\n     */\n    static fromEntries(entries) {\n        return new CacheManifest(entries);\n    }\n    /**\n     * Serializes the list so that it can be passed to the browser\n     */\n    toJSON() {\n        return JSON.stringify(this.entries);\n    }\n}\nexports.default = CacheManifest;\n\n\n//# sourceURL=webpack:///./node_modules/@layer0/core/router/CacheManifest.js?");

/***/ }),

/***/ "./node_modules/@layer0/core/router/universalRouteUtils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@layer0/core/router/universalRouteUtils.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/*\nNote: this file contains functions that are needed in both the browser and the server.  These were originally\nin Route.ts, but extracted in order to keep Route.ts and it's depedencies from being pulled into the browser bundle.\n*/\nconst identity = (x) => x;\n/**\n * Compares criteria object with request object and returns Boolean.\n *\n * The comparison of keys is case-sensitive by default but an optional `criteriaObjKeyNameFn`\n * parameter can be passed to force case-insensitive comparison.\n *\n * @param criteriaObj Object that contains the criteria ([key]: regex | null)\n * @param requestObj Request object that contains ([key]: string | [key]: string[] | undefined)\n * @param criteriaObjKeyNameFn Optional function to process criteria key names; by default set to `identity`\n *\n * @returns Boolean\n * true when all conditions are matching\n * false if one of the conditions failed\n */\nfunction matchCriteriaRegexObjectWithRequestObject(criteriaObj, requestObj, criteriaObjKeyNameFn = identity) {\n    let params = {};\n    return (Object.entries(criteriaObj).every(([name, regex]) => {\n        const value = requestObj[criteriaObjKeyNameFn(name)];\n        // When regex is null we match that the value *does not* exist (the undefined case).\n        // When regex is string, we convert it to regex matching the whole string.\n        // When regex is a matching key (ex: ':id') and the value is a string, we extract that into\n        // matcher params\n        if (regex === null) {\n            return value === undefined;\n        }\n        else if (typeof regex === 'string') {\n            if (typeof value === 'string' && isParamMatcher(regex)) {\n                const paramName = paramMatcherToParam(regex);\n                params[paramName] = value;\n                return true;\n            }\n            regex = new RegExp(`^${regex}$`, 'i');\n        }\n        return testRegExp(regex, value);\n    }) && params);\n}\nexports.matchCriteriaRegexObjectWithRequestObject = matchCriteriaRegexObjectWithRequestObject;\n/**\n * Returns true if the value is a matcher that is used to extract\n * request params, like ':id' or ':path'\n * @param value\n */\nfunction isParamMatcher(value) {\n    return typeof value === 'string' && /^:\\w+$/.test(value);\n}\nexports.isParamMatcher = isParamMatcher;\n/**\n * Transform a route param matcher to the param name\n * ex: ':id' -> 'id'\n * @param value\n */\nfunction paramMatcherToParam(value) {\n    return value.slice(1);\n}\nexports.paramMatcherToParam = paramMatcherToParam;\n/**\n * Ensures that the regular expression will be tested anew, without changing its internal state.\n *\n * Notes:\n * - Sometimes users use global for RegExp definitions. In those cases `.test` changes the internal\n * state and leads to different requests on subsequent calls (usually flip-flopping between\n * subsequent requests)\n *\n * @private\n * @param regexp Regular expression\n * @param value Value to test or array of values to test\n */\nfunction testRegExp(regexp, value) {\n    if (value == null) {\n        return false;\n    }\n    if (regexp.global) {\n        regexp = new RegExp(regexp);\n    }\n    if (Array.isArray(value)) {\n        return value.some(v => regexp.test(v));\n    }\n    else {\n        return regexp.test(value);\n    }\n}\nexports.testRegExp = testRegExp;\n\n\n//# sourceURL=webpack:///./node_modules/@layer0/core/router/universalRouteUtils.js?");

/***/ }),

/***/ "./node_modules/@layer0/core/utils/mapValues.js":
/*!******************************************************!*\
  !*** ./node_modules/@layer0/core/utils/mapValues.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/**\n * Lightweight port of lodash.mapValues\n * https://lodash.com/docs/4.17.15#mapValues\n * @param obj\n * @param callback\n */\nfunction mapValues(obj, callback) {\n    const result = {};\n    for (let [key, value] of Object.entries(obj)) {\n        result[key] = callback(value, key);\n    }\n    return result;\n}\nexports.default = mapValues;\n\n\n//# sourceURL=webpack:///./node_modules/@layer0/core/utils/mapValues.js?");

/***/ }),

/***/ "./node_modules/@layer0/devtools/install.js":
/*!**************************************************!*\
  !*** ./node_modules/@layer0/devtools/install.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Adds Devtools script and style tags to the page <head> section\n *\n * IMPORTANT:\n * For now this module is not transpiled by tsc or babel\n * so it must be a valid nodeJS/browser file.\n *\n */\nconst LAYER0_DEVTOOLS_ASSETS_PATH = '/__layer0__/devtools/'\nconst LAYER0_DEVTOOLS_MAIN_JS = LAYER0_DEVTOOLS_ASSETS_PATH + 'main.js'\nconst LAYER0_DEVTOOLS_MAIN_CSS = LAYER0_DEVTOOLS_ASSETS_PATH + 'main.css'\n\nconst LAYER0_DEVTOOLS_COOKIE = 'layer0_devtools_enabled'\nconst LAYER0_DEVTOOLS_ENV_COOKIE = 'layer0_devtools_env_enabled'\n\nfunction getCookieValue(cookieName) {\n  const cookieContent = document.cookie\n  if (cookieContent.indexOf(cookieName + '=') === -1) {\n    return null\n  }\n  return cookieContent.indexOf(cookieName + '=true') >= 0\n}\n\n/**\n * Check if the Devtools is enabled, by order of priority\n * - per user own cookie set via GET /__layer0__/devtools/{enable,disable}\n * - per environment constibale config enable/disable\n * - enabled by default for moovweb and localhost hostnames\n * - disabled\n */\nfunction isEnabled() {\n  const userCookieValue = getCookieValue(LAYER0_DEVTOOLS_COOKIE)\n\n  if (userCookieValue !== null) {\n    return userCookieValue\n  }\n\n  const envCookieValue = getCookieValue(LAYER0_DEVTOOLS_ENV_COOKIE)\n\n  if (envCookieValue !== null) {\n    return envCookieValue\n  }\n\n  if (\n    /127\\.0\\.0\\.1|^localhost(:\\d+)?$|moovweb-edge(-dev)?\\.io$|layer0(-dev)?\\.link$/.test(\n      window.location.host\n    )\n  ) {\n    return true\n  }\n\n  return false\n}\n\nmodule.exports = function install() {\n  if (typeof window === 'undefined') {\n    // This should not execute on SSR\n    return\n  }\n\n  if (!isEnabled()) {\n    return\n  }\n\n  if (document.head.querySelectorAll('script[src=\"' + LAYER0_DEVTOOLS_MAIN_JS + '\"]').length) {\n    // Devtools is already mounted\n    return\n  }\n\n  const script = document.createElement('script')\n  const link = document.createElement('link')\n\n  script.defer = true\n  script.src = LAYER0_DEVTOOLS_MAIN_JS\n\n  link.rel = 'stylesheet'\n  link.href = LAYER0_DEVTOOLS_MAIN_CSS\n\n  document.head.appendChild(script)\n  document.head.appendChild(link)\n}\n\n\n//# sourceURL=webpack:///./node_modules/@layer0/devtools/install.js?");

/***/ }),

/***/ "./node_modules/@layer0/prefetch/window/getHostName.js":
/*!*************************************************************!*\
  !*** ./node_modules/@layer0/prefetch/window/getHostName.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction getHostName() {\n    return window.location.hostname;\n}\nexports.default = getHostName;\n\n\n//# sourceURL=webpack:///./node_modules/@layer0/prefetch/window/getHostName.js?");

/***/ }),

/***/ "./node_modules/@layer0/prefetch/window/getUserAgent.js":
/*!**************************************************************!*\
  !*** ./node_modules/@layer0/prefetch/window/getUserAgent.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction getUserAgent() {\n    return navigator.userAgent;\n}\nexports.default = getUserAgent;\n\n\n//# sourceURL=webpack:///./node_modules/@layer0/prefetch/window/getUserAgent.js?");

/***/ }),

/***/ "./node_modules/@layer0/prefetch/window/install.js":
/*!*********************************************************!*\
  !*** ./node_modules/@layer0/prefetch/window/install.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst prefetch_1 = __webpack_require__(/*! ./prefetch */ \"./node_modules/@layer0/prefetch/window/prefetch.js\");\nconst registerServiceWorker_1 = __webpack_require__(/*! ./registerServiceWorker */ \"./node_modules/@layer0/prefetch/window/registerServiceWorker.js\");\nconst watchLinks_1 = __importDefault(__webpack_require__(/*! ./watchLinks */ \"./node_modules/@layer0/prefetch/window/watchLinks.js\"));\nconst loadManifest_1 = __importDefault(__webpack_require__(/*! ./loadManifest */ \"./node_modules/@layer0/prefetch/window/loadManifest.js\"));\nconst watchElements_1 = __importDefault(__webpack_require__(/*! ./watchElements */ \"./node_modules/@layer0/prefetch/window/watchElements.js\"));\nconst CacheManifest_1 = __importDefault(__webpack_require__(/*! @layer0/core/router/CacheManifest */ \"./node_modules/@layer0/core/router/CacheManifest.js\"));\nconst defaults = {\n    includeCacheMisses: false,\n    cacheHost: undefined,\n    forcePrefetchRatio: 0,\n};\n/**\n * Installs the service worker, prefetches any URLs specified in `prefetchURLs` and watches\n * all links whose `href` attribute matches one of the specified `prefetchPatterns`.  When\n * a matching link is visible in the viewport, the destination URL will be prefetched and\n * added to the cache.\n * @param options\n */\nasync function install(options) {\n    options = { ...defaults, ...options };\n    const spaRoutes = [];\n    const { serviceWorker } = navigator;\n    if (typeof serviceWorker === 'undefined') {\n        return;\n    }\n    const { prefetchURLs, watch, serviceWorkerPath = '/service-worker.js', observe } = options;\n    await loadManifest_1.default({ cacheHost: options.cacheHost });\n    const cacheManifest = CacheManifest_1.default.fromEntries(\n    // @ts-ignore\n    window.__LAYER0_CACHE_MANIFEST__ || []);\n    const prefetchPatterns = [...(options.prefetchPatterns || [])].map(routeRegex => ({\n        criteriaPath: routeRegex.source,\n        route: routeRegex.source,\n        cacheOptions: { edge: { maxAgeSeconds: 1 }, browser: { serviceWorkerSeconds: 1 } },\n        returnsResponse: false,\n    }));\n    spaRoutes.push(...cacheManifest.spaRoutes);\n    prefetch_1.configure({ ...options, spaRoutes });\n    // install the service worker\n    registerServiceWorker_1.registerServiceWorker(serviceWorkerPath);\n    // prefetch requested URLs\n    prefetchURLs === null || prefetchURLs === void 0 ? void 0 : prefetchURLs.forEach(url => prefetch_1.prefetch(url));\n    // watch links currently in the DOM as well as any links that are added in the future\n    watchLinks_1.default(cacheManifest, observe); // observer options only needs supplied to the first call since this creates the MutationObserver\n    watchLinks_1.default(CacheManifest_1.default.fromEntries(prefetchPatterns));\n    watchElements_1.default(watch);\n    serviceWorker.addEventListener('message', event => {\n        if (event.data.action === 'prefetch') {\n            prefetch_1.prefetch(event.data.url, event.data.as, event.data.options);\n        }\n    });\n}\nexports.default = install;\n\n\n//# sourceURL=webpack:///./node_modules/@layer0/prefetch/window/install.js?");

/***/ }),

/***/ "./node_modules/@layer0/prefetch/window/isSafari.js":
/*!**********************************************************!*\
  !*** ./node_modules/@layer0/prefetch/window/isSafari.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst getUserAgent_1 = __importDefault(__webpack_require__(/*! ./getUserAgent */ \"./node_modules/@layer0/prefetch/window/getUserAgent.js\"));\nlet _isSafari = null;\nfunction isSafari() {\n    if (_isSafari == null) {\n        _isSafari = /^((?!chrome|android).)*safari/i.test(getUserAgent_1.default());\n    }\n    return _isSafari;\n}\nexports.isSafari = isSafari;\n/**\n * Returns true if this is a private window in safari\n * From https://stackoverflow.com/questions/12821127/how-to-check-if-ios-is-using-private-browsing/47642304#47642304\n */\nfunction isSafariPrivateWindow() {\n    if (!isSafari())\n        return false;\n    try {\n        // @ts-ignore\n        window.openDatabase(null, null, null, null);\n        return false;\n    }\n    catch (_) {\n        return true;\n    }\n}\nexports.isSafariPrivateWindow = isSafariPrivateWindow;\n\n\n//# sourceURL=webpack:///./node_modules/@layer0/prefetch/window/isSafari.js?");

/***/ }),

/***/ "./node_modules/@layer0/prefetch/window/loadManifest.js":
/*!**************************************************************!*\
  !*** ./node_modules/@layer0/prefetch/window/loadManifest.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nasync function loadManifest(options) {\n    return new Promise(resolve => {\n        let script = document.createElement('script');\n        script.type = 'text/javascript';\n        script.async = true;\n        script.onload = resolve;\n        let manifestURL = '__layer0__/cache-manifest.js';\n        if (options === null || options === void 0 ? void 0 : options.cacheHost) {\n            manifestURL = new URL(`https://${options.cacheHost}`).toString() + manifestURL;\n            script.src = manifestURL;\n        }\n        else {\n            script.src = '/' + manifestURL;\n        }\n        document.getElementsByTagName('head')[0].appendChild(script);\n    });\n}\nexports.default = loadManifest;\n\n\n//# sourceURL=webpack:///./node_modules/@layer0/prefetch/window/loadManifest.js?");

/***/ }),

/***/ "./node_modules/@layer0/prefetch/window/prefetch.js":
/*!**********************************************************!*\
  !*** ./node_modules/@layer0/prefetch/window/prefetch.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst waitForServiceWorker_1 = __importDefault(__webpack_require__(/*! ./waitForServiceWorker */ \"./node_modules/@layer0/prefetch/window/waitForServiceWorker.js\"));\nconst constants_1 = __webpack_require__(/*! @layer0/core/constants */ \"./node_modules/@layer0/core/constants.js\");\nconst getHostName_1 = __importDefault(__webpack_require__(/*! ./getHostName */ \"./node_modules/@layer0/prefetch/window/getHostName.js\"));\n// According to Fastly, 2^13 (8192) is the max number of bytes allowed for a URL:\nconst MAX_URL_BYTES = 2 ** 13;\nconst prefetched = new Set();\nconst defaults = {\n    includeCacheMisses: false,\n    cacheHost: undefined,\n    spaRoutes: [],\n    forcePrefetchRatio: 0,\n};\nlet options = defaults;\n/**\n * Configures prefetching options\n * @param opts\n */\nfunction configure(opts) {\n    options = { ...defaults, ...opts };\n}\nexports.configure = configure;\n/**\n * Prefetches and caches the specified URL.\n *\n * **Example**\n *\n * ```js\n * import { prefetch } from '@layer0/prefetch/window\n *\n * prefetch('/some/url')\n * ```\n * @param {String} url The URL to prefetch\n * @param {String} as Value to use for the \"as\" attribute of the <link> tag\n * @param {PrefetchConfiguration} config Options to use for the prefetch\n */\nasync function prefetch(url, as = 'fetch', config = { cors: 'anonymous' }) {\n    if (typeof config.cors === 'undefined') {\n        config.cors = 'anonymous';\n    }\n    const cacheUrl = modifyUrl(url, config);\n    if (typeof TextEncoder !== 'undefined' &&\n        new TextEncoder().encode(cacheUrl).length > MAX_URL_BYTES) {\n        console.warn(`URL is too many characters to prefetch and cache: ${cacheUrl}`);\n        return;\n    }\n    if (prefetched.has(cacheUrl)) {\n        return;\n    }\n    prefetched.add(cacheUrl);\n    await waitForServiceWorker_1.default();\n    const link = document.createElement('link');\n    const { relList } = link;\n    link.setAttribute('href', cacheUrl);\n    if (config.cors) {\n        link.setAttribute('crossorigin', config.cors);\n    }\n    link.setAttribute('rel', relList.supports('preload') && /* istanbul ignore next */ !relList.supports('prefetch')\n        ? /* istanbul ignore next */ 'preload'\n        : 'prefetch' // Safari does not support prefetch so we use preload instead\n    );\n    link.setAttribute('as', as);\n    document.head.append(link);\n}\nexports.prefetch = prefetch;\nfunction modifyUrl(url, config) {\n    const { body, method } = config;\n    const parsed = new URL(url, window.origin);\n    maybeAddHeadParam(parsed);\n    if (parsed.hostname === getHostName_1.default()) {\n        // If we are prefetching from Layer0 sidecar, rewrite the URL to use the sidecar's domain name\n        if (options.cacheHost) {\n            const cacheHostUrl = new URL(`https://${options.cacheHost}`);\n            parsed.hostname = cacheHostUrl.hostname;\n            parsed.protocol = cacheHostUrl.protocol;\n            parsed.port = cacheHostUrl.port;\n        }\n        maybeAddPrefetchParam(parsed);\n    }\n    if (body) {\n        appendSearchParam(parsed, constants_1.POST_BODY_QUERY_PARAM, body);\n    }\n    if (method) {\n        appendSearchParam(parsed, constants_1.METHOD_QUERY_PARAM, method);\n    }\n    return parsed.toString();\n}\nfunction appendSearchParam(url, name, value) {\n    const separator = url.search.length ? '&' : '?';\n    url.search += `${separator}${encodeURIComponent(name)}=${encodeURIComponent(value)}`;\n}\n/**\n * Adds the query param that indicates to the service worker that a request is a prefetch.\n * @param url\n */\nfunction maybeAddPrefetchParam(url) {\n    if (!options.includeCacheMisses && shouldAcceptThrottling()) {\n        appendSearchParam(url, constants_1.PREFETCH_QUERY_PARAM, '1');\n    }\n}\n/**\n * Returns true if the next prefetch request should only be served from the edge cache.\n * This is done by comparing a random number between 0 and 1 to options.forcePrefetchRatio\n */\nfunction shouldAcceptThrottling() {\n    return !options.forcePrefetchRatio || Math.random() > options.forcePrefetchRatio;\n}\nfunction maybeAddHeadParam(url) {\n    options.spaRoutes.some(routePattern => {\n        if (routePattern.test(url.pathname)) {\n            appendSearchParam(url, constants_1.HEAD_QUERY_PARAM, '1');\n            return true;\n        }\n    });\n}\n\n\n//# sourceURL=webpack:///./node_modules/@layer0/prefetch/window/prefetch.js?");

/***/ }),

/***/ "./node_modules/@layer0/prefetch/window/prefetchWhenVisible.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@layer0/prefetch/window/prefetchWhenVisible.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst prefetch_1 = __webpack_require__(/*! ./prefetch */ \"./node_modules/@layer0/prefetch/window/prefetch.js\");\nconst runWhenVisible_1 = __importDefault(__webpack_require__(/*! ./runWhenVisible */ \"./node_modules/@layer0/prefetch/window/runWhenVisible.js\"));\n/**\n * Prefetches a link's href when it is visible in the viewport\n * @param {HTMLElement} el The link element\n */\nfunction prefetchWhenVisible(el) {\n    runWhenVisible_1.default(el, innerEl => {\n        const url = innerEl.getAttribute('href');\n        if (url) {\n            prefetch_1.prefetch(url);\n        }\n    });\n}\nexports.default = prefetchWhenVisible;\n\n\n//# sourceURL=webpack:///./node_modules/@layer0/prefetch/window/prefetchWhenVisible.js?");

/***/ }),

/***/ "./node_modules/@layer0/prefetch/window/registerServiceWorker.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@layer0/prefetch/window/registerServiceWorker.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/* istanbul ignore file */\nconst isSafari_1 = __webpack_require__(/*! ./isSafari */ \"./node_modules/@layer0/prefetch/window/isSafari.js\");\nfunction registerServiceWorker(serviceWorkerPath) {\n    if (isSafari_1.isSafariPrivateWindow()) {\n        // Private windows in safari have a known bug with sending cookies\n        // in POST requests.  This often breaks cart and checkout, so we choose\n        // not to use service workers at all when in safari private windows.\n        // See the bug report here: https://bugs.webkit.org/show_bug.cgi?id=186617\n        console.log('skipping service worker in Safari private window');\n        unregisterServiceWorker();\n        return;\n    }\n    if ('serviceWorker' in navigator) {\n        if (document.readyState === 'complete') {\n            registerValidSW(serviceWorkerPath);\n        }\n        else {\n            window.addEventListener('load', () => {\n                registerValidSW(serviceWorkerPath);\n            });\n        }\n    }\n}\nexports.registerServiceWorker = registerServiceWorker;\nfunction registerValidSW(swUrl) {\n    navigator.serviceWorker\n        .register(swUrl)\n        .then(registration => {\n        registration.onupdatefound = () => {\n            const installingWorker = registration.installing;\n            if (!installingWorker)\n                return;\n            installingWorker.onstatechange = () => {\n                console.log('[layer0 service worker] state:', installingWorker.state);\n                if (installingWorker.state === 'installed') {\n                    if (navigator.serviceWorker.controller) {\n                        // At this point, the old content will have been purged and\n                        // the fresh content will have been added to the cache.\n                        // It's the perfect time to display a \"New content is\n                        // available; please refresh.\" message in your web app.\n                        document.dispatchEvent(new CustomEvent('sw-update-available'));\n                    }\n                    else {\n                        // At this point, everything has been precached.\n                        // It's the perfect time to display a\n                        // \"Content is cached for offline use.\" message.\n                        console.log('Content is cached for offline use.');\n                    }\n                }\n            };\n        };\n    })\n        .catch(error => {\n        console.error('Error during service worker registration:', error);\n    });\n}\nfunction unregisterServiceWorker() {\n    if ('serviceWorker' in navigator) {\n        navigator.serviceWorker.ready.then(registration => {\n            registration.unregister();\n        });\n    }\n}\nexports.unregisterServiceWorker = unregisterServiceWorker;\n\n\n//# sourceURL=webpack:///./node_modules/@layer0/prefetch/window/registerServiceWorker.js?");

/***/ }),

/***/ "./node_modules/@layer0/prefetch/window/runWhenVisible.js":
/*!****************************************************************!*\
  !*** ./node_modules/@layer0/prefetch/window/runWhenVisible.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/**\n * Runs a callback function when an element it is visible in the viewport\n * @param {HTMLElement} el The element\n * @param {Function} callback The function to call once the element is visible\n */\nfunction runWhenVisible(el, callback) {\n    /* istanbul ignore next */\n    if (typeof IntersectionObserver === 'undefined')\n        return;\n    const observer = new IntersectionObserver(entries => {\n        // if intersectionRatio is 0, the element is out of view and we do not need to do anything.\n        if (entries[0].intersectionRatio > 0) {\n            observer.disconnect();\n            callback(el);\n        }\n    }, {\n        // setting this to > 0 to avoid a race condition where an element comes into the\n        // viewport at the same time as display/visibility becomes block/visible, and\n        // the IntersectionObserver is then only triggered with a ratio of 0\n        threshold: .01,\n    });\n    // Note: apparently we don't need to clean these up when the observed node is removed.\n    // See https://stackoverflow.com/questions/51106261/should-mutationobservers-be-removed-disconnected-when-the-attached-dom-node-is-r/51106262#51106262\n    observer.observe(el);\n}\nexports.default = runWhenVisible;\n\n\n//# sourceURL=webpack:///./node_modules/@layer0/prefetch/window/runWhenVisible.js?");

/***/ }),

/***/ "./node_modules/@layer0/prefetch/window/waitForServiceWorker.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@layer0/prefetch/window/waitForServiceWorker.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/**\n * Resolves when the service worker has been installed.\n */\nasync function waitForServiceWorker() {\n    if (!navigator.serviceWorker || !navigator.serviceWorker.ready) {\n        throw new Error('service worker not supported');\n    }\n    await navigator.serviceWorker.ready;\n    if (navigator.serviceWorker.controller) {\n        return navigator.serviceWorker.controller;\n    }\n    else {\n        return new Promise((resolve, reject) => {\n            navigator.serviceWorker.addEventListener('controllerchange', () => {\n                if (navigator.serviceWorker.controller) {\n                    resolve(navigator.serviceWorker.controller);\n                }\n                else {\n                    reject(new Error('service worker not supported'));\n                }\n            });\n        });\n    }\n}\nexports.default = waitForServiceWorker;\n\n\n//# sourceURL=webpack:///./node_modules/@layer0/prefetch/window/waitForServiceWorker.js?");

/***/ }),

/***/ "./node_modules/@layer0/prefetch/window/watchElements.js":
/*!***************************************************************!*\
  !*** ./node_modules/@layer0/prefetch/window/watchElements.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst runWhenVisible_1 = __importDefault(__webpack_require__(/*! ./runWhenVisible */ \"./node_modules/@layer0/prefetch/window/runWhenVisible.js\"));\nlet observer;\nconst watchConfigs = new Set();\n/**\n * Sets up observers to watch for elements matching the list of selectors, then\n * perform the given callback when an element becomes visible\n * @param {PrefetchWatcherConfig[]} configArr Contains the list of selector/callback pairs\n */\nfunction watchElements(configArr) {\n    /* istanbul ignore next */\n    if (typeof MutationObserver === 'undefined')\n        return;\n    if (!configArr || !configArr.length)\n        return;\n    configArr.forEach(watch => watchConfigs.add(watch));\n    if (!observer) {\n        observer = new MutationObserver(mutationsList => {\n            for (let mutation of mutationsList) {\n                ;\n                [...watchConfigs].forEach(watch => {\n                    filterBySelector(mutation.addedNodes, watch.selector).forEach(match => runWhenVisible_1.default(match, watch.callback));\n                });\n            }\n        });\n    }\n    observer.observe(document.body, {\n        subtree: true,\n        childList: true,\n    });\n    configArr.forEach(watch => {\n        document.querySelectorAll(watch.selector).forEach(match => {\n            const el = match;\n            runWhenVisible_1.default(el, watch.callback);\n        });\n    });\n}\nexports.default = watchElements;\n/**\n * Returns all nodes in the node list that match one of the given selectors\n * @param {NodeList} nodes A node list to filter\n * @param {String} selector Selector used to match elements\n */\nfunction filterBySelector(nodes, selector) {\n    const results = new Set();\n    Array.from(nodes).forEach(n => {\n        if (n.nodeType === Node.ELEMENT_NODE) {\n            const el = n;\n            if (el.matches(selector)) {\n                results.add(el);\n            }\n            else {\n                const matches = el.querySelectorAll(selector);\n                matches.forEach(match => results.add(match));\n            }\n        }\n    });\n    return results;\n}\n\n\n//# sourceURL=webpack:///./node_modules/@layer0/prefetch/window/watchElements.js?");

/***/ }),

/***/ "./node_modules/@layer0/prefetch/window/watchLinks.js":
/*!************************************************************!*\
  !*** ./node_modules/@layer0/prefetch/window/watchLinks.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst prefetchWhenVisible_1 = __importDefault(__webpack_require__(/*! ./prefetchWhenVisible */ \"./node_modules/@layer0/prefetch/window/prefetchWhenVisible.js\"));\nconst CacheManifest_1 = __importDefault(__webpack_require__(/*! @layer0/core/router/CacheManifest */ \"./node_modules/@layer0/core/router/CacheManifest.js\"));\nconst observerDefaults = {\n    disabled: false,\n    attributes: false,\n};\nlet observer;\nconst searchedEntries = new Set();\n/**\n * Watches the DOM for all current and future links whose href matches one of the\n * specified URL patterns\n * @param {CacheManifest} cacheManifest Regular expressions that will be tested against link href attributes\n * @param {ObserveOptionsConfig} observeOpts Configuration for how the DOM is observed for node changes\n */\nfunction watchLinks(cacheManifest, observerOpts) {\n    /* istanbul ignore next */\n    if (typeof MutationObserver === 'undefined')\n        return;\n    cacheManifest.entries.forEach(entry => searchedEntries.add(entry));\n    observerOpts = { ...observerDefaults, ...observerOpts };\n    if (!observer) {\n        observer = new MutationObserver(mutationsList => {\n            for (let mutation of mutationsList) {\n                filterByHref(mutation.addedNodes, CacheManifest_1.default.fromEntries([...searchedEntries.values()])).forEach(prefetchWhenVisible_1.default);\n            }\n        });\n        if (!observerOpts.disabled) {\n            observer.observe(document.body, {\n                attributes: observerOpts.attributes,\n                childList: true,\n                subtree: true,\n            });\n        }\n    }\n    filterByHref(document.querySelectorAll('a'), cacheManifest).forEach(prefetchWhenVisible_1.default);\n}\nexports.default = watchLinks;\n/**\n * Returns all nodes in the node list whose href matches at least one of the specified patterns.\n * @param {NodeList} nodes A node list to filter\n * @param {CacheManifest} cacheManifest Contains the list of route patterns to check\n */\nfunction filterByHref(nodes, cacheManifest) {\n    const isMatchingLink = (el) => {\n        const href = el.getAttribute('href');\n        if (!href || el.tagName.toLowerCase() !== 'a') {\n            return false;\n        }\n        return cacheManifest.shouldPrefetch(new URL(href, window.location.href));\n    };\n    const results = new Set();\n    Array.from(nodes).forEach(n => {\n        if (n.nodeType === Node.ELEMENT_NODE) {\n            const el = n;\n            const links = [el, ...Array.from(el.querySelectorAll('a'))];\n            links.filter(isMatchingLink).forEach(link => results.add(link));\n        }\n    });\n    return results;\n}\n\n\n//# sourceURL=webpack:///./node_modules/@layer0/prefetch/window/watchLinks.js?");

/***/ }),

/***/ "./src/browser.ts":
/*!************************!*\
  !*** ./src/browser.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar install_1 = __importDefault(__webpack_require__(/*! @layer0/prefetch/window/install */ \"./node_modules/@layer0/prefetch/window/install.js\"));\nvar install_2 = __importDefault(__webpack_require__(/*! @layer0/devtools/install */ \"./node_modules/@layer0/devtools/install.js\"));\nfunction lateLoadContent() {\n    return __awaiter(this, void 0, void 0, function () {\n        var url, res, html, root, elements, personalizedElements, i, el, _i, _a, _b, name_1, value;\n        return __generator(this, function (_c) {\n            switch (_c.label) {\n                case 0:\n                    url = '/content' + window.location.pathname;\n                    return [4 /*yield*/, fetch(url)];\n                case 1:\n                    res = _c.sent();\n                    return [4 /*yield*/, res.text()];\n                case 2:\n                    html = _c.sent();\n                    root = document.createElement('html');\n                    root.innerHTML = html;\n                    elements = Array.from(document.querySelectorAll('[data-moov-replace]'));\n                    personalizedElements = Array.from(root.querySelectorAll('[data-moov-replace]'));\n                    for (i = 0; i < personalizedElements.length; i++) {\n                        el = personalizedElements[i];\n                        for (_i = 0, _a = Array.from(el.attributes); _i < _a.length; _i++) {\n                            _b = _a[_i], name_1 = _b.name, value = _b.value;\n                            elements[i].setAttribute(name_1, value);\n                        }\n                        elements[i].innerHTML = el.innerHTML;\n                    }\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\ndocument.addEventListener('DOMContentLoaded', function () {\n    install_2.default();\n    // @ts-ignore\n    install_1.default({\n        includeCacheMisses: true,\n        watch: [\n            {\n                selector: 'a[href^=\"https://www.slumberland.com\"]',\n                callback: function (el) {\n                    el.setAttribute('href', el.getAttribute('href').replace(/.*www\\.slumberland\\.com/, ''));\n                }\n            },\n            // Removing placeholder hero image\n            // There will be no need for this kind of workarounds in production\n            {\n                selector: '#main .widget-component.image-widget>div>img[src]',\n                callback: function (el) {\n                    setTimeout(function () { document.querySelector('.mw-home-hero').remove(); }, 1000);\n                }\n            },\n        ]\n    });\n    // if (window.location.pathname.indexOf('/content') !== 0) {\n    //   lateLoadContent()\n    // }\n});\n\n\n//# sourceURL=webpack:///./src/browser.ts?");

/***/ })

/******/ });
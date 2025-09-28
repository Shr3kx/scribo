/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/edgestore/[...edgestore]/route";
exports.ids = ["app/api/edgestore/[...edgestore]/route"];
exports.modules = {

/***/ "(rsc)/./app/api/edgestore/[...edgestore]/route.ts":
/*!***************************************************!*\
  !*** ./app/api/edgestore/[...edgestore]/route.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _edgestore_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @edgestore/server */ \"(rsc)/./node_modules/@edgestore/server/dist/index.mjs\");\n/* harmony import */ var _edgestore_server_adapters_next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @edgestore/server/adapters/next/app */ \"(rsc)/./node_modules/@edgestore/server/dist/adapters/next/app/index.mjs\");\n\n\nconst es = _edgestore_server__WEBPACK_IMPORTED_MODULE_0__.initEdgeStore.create();\n/**\r\n * This is the main router for the EdgeStore buckets.\r\n */ const edgeStoreRouter = es.router({\n    publicFiles: es.fileBucket().beforeDelete(()=>{\n        return true;\n    })\n});\nconst handler = (0,_edgestore_server_adapters_next_app__WEBPACK_IMPORTED_MODULE_1__.createEdgeStoreNextHandler)({\n    router: edgeStoreRouter\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2VkZ2VzdG9yZS9bLi4uZWRnZXN0b3JlXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWtEO0FBQytCO0FBRWpGLE1BQU1FLEtBQUtGLDREQUFhQSxDQUFDRyxNQUFNO0FBRS9COztDQUVDLEdBQ0QsTUFBTUMsa0JBQWtCRixHQUFHRyxNQUFNLENBQUM7SUFDaENDLGFBQWFKLEdBQUdLLFVBQVUsR0FBR0MsWUFBWSxDQUFDO1FBQ3hDLE9BQU87SUFDVDtBQUNGO0FBRUEsTUFBTUMsVUFBVVIsK0ZBQTBCQSxDQUFDO0lBQ3pDSSxRQUFRRDtBQUNWO0FBRTJDIiwic291cmNlcyI6WyJFOlxcUHJvamVjdHNcXHNjcmlib1xcYXBwXFxhcGlcXGVkZ2VzdG9yZVxcWy4uLmVkZ2VzdG9yZV1cXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRFZGdlU3RvcmUgfSBmcm9tIFwiQGVkZ2VzdG9yZS9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlRWRnZVN0b3JlTmV4dEhhbmRsZXIgfSBmcm9tIFwiQGVkZ2VzdG9yZS9zZXJ2ZXIvYWRhcHRlcnMvbmV4dC9hcHBcIjtcclxuXHJcbmNvbnN0IGVzID0gaW5pdEVkZ2VTdG9yZS5jcmVhdGUoKTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIHRoZSBtYWluIHJvdXRlciBmb3IgdGhlIEVkZ2VTdG9yZSBidWNrZXRzLlxyXG4gKi9cclxuY29uc3QgZWRnZVN0b3JlUm91dGVyID0gZXMucm91dGVyKHtcclxuICBwdWJsaWNGaWxlczogZXMuZmlsZUJ1Y2tldCgpLmJlZm9yZURlbGV0ZSgoKSA9PiB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9KSxcclxufSk7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gY3JlYXRlRWRnZVN0b3JlTmV4dEhhbmRsZXIoe1xyXG4gIHJvdXRlcjogZWRnZVN0b3JlUm91dGVyLFxyXG59KTtcclxuXHJcbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIHR5cGUgaXMgdXNlZCB0byBjcmVhdGUgdGhlIHR5cGUtc2FmZSBjbGllbnQgZm9yIHRoZSBmcm9udGVuZC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEVkZ2VTdG9yZVJvdXRlciA9IHR5cGVvZiBlZGdlU3RvcmVSb3V0ZXI7XHJcbiJdLCJuYW1lcyI6WyJpbml0RWRnZVN0b3JlIiwiY3JlYXRlRWRnZVN0b3JlTmV4dEhhbmRsZXIiLCJlcyIsImNyZWF0ZSIsImVkZ2VTdG9yZVJvdXRlciIsInJvdXRlciIsInB1YmxpY0ZpbGVzIiwiZmlsZUJ1Y2tldCIsImJlZm9yZURlbGV0ZSIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/edgestore/[...edgestore]/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fedgestore%2F%5B...edgestore%5D%2Froute&page=%2Fapi%2Fedgestore%2F%5B...edgestore%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fedgestore%2F%5B...edgestore%5D%2Froute.ts&appDir=E%3A%5CProjects%5Cscribo%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProjects%5Cscribo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fedgestore%2F%5B...edgestore%5D%2Froute&page=%2Fapi%2Fedgestore%2F%5B...edgestore%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fedgestore%2F%5B...edgestore%5D%2Froute.ts&appDir=E%3A%5CProjects%5Cscribo%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProjects%5Cscribo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_Projects_scribo_app_api_edgestore_edgestore_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/edgestore/[...edgestore]/route.ts */ \"(rsc)/./app/api/edgestore/[...edgestore]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/edgestore/[...edgestore]/route\",\n        pathname: \"/api/edgestore/[...edgestore]\",\n        filename: \"route\",\n        bundlePath: \"app/api/edgestore/[...edgestore]/route\"\n    },\n    resolvedPagePath: \"E:\\\\Projects\\\\scribo\\\\app\\\\api\\\\edgestore\\\\[...edgestore]\\\\route.ts\",\n    nextConfigOutput,\n    userland: E_Projects_scribo_app_api_edgestore_edgestore_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZlZGdlc3RvcmUlMkYlNUIuLi5lZGdlc3RvcmUlNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmVkZ2VzdG9yZSUyRiU1Qi4uLmVkZ2VzdG9yZSU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmVkZ2VzdG9yZSUyRiU1Qi4uLmVkZ2VzdG9yZSU1RCUyRnJvdXRlLnRzJmFwcERpcj1FJTNBJTVDUHJvamVjdHMlNUNzY3JpYm8lNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUUlM0ElNUNQcm9qZWN0cyU1Q3NjcmlibyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDbUI7QUFDaEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkU6XFxcXFByb2plY3RzXFxcXHNjcmlib1xcXFxhcHBcXFxcYXBpXFxcXGVkZ2VzdG9yZVxcXFxbLi4uZWRnZXN0b3JlXVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZWRnZXN0b3JlL1suLi5lZGdlc3RvcmVdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZWRnZXN0b3JlL1suLi5lZGdlc3RvcmVdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9lZGdlc3RvcmUvWy4uLmVkZ2VzdG9yZV0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJFOlxcXFxQcm9qZWN0c1xcXFxzY3JpYm9cXFxcYXBwXFxcXGFwaVxcXFxlZGdlc3RvcmVcXFxcWy4uLmVkZ2VzdG9yZV1cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fedgestore%2F%5B...edgestore%5D%2Froute&page=%2Fapi%2Fedgestore%2F%5B...edgestore%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fedgestore%2F%5B...edgestore%5D%2Froute.ts&appDir=E%3A%5CProjects%5Cscribo%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProjects%5Cscribo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/zod","vendor-chunks/@edgestore","vendor-chunks/jose","vendor-chunks/uuid","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fedgestore%2F%5B...edgestore%5D%2Froute&page=%2Fapi%2Fedgestore%2F%5B...edgestore%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fedgestore%2F%5B...edgestore%5D%2Froute.ts&appDir=E%3A%5CProjects%5Cscribo%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProjects%5Cscribo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
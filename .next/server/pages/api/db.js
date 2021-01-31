module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/db.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/db.js":
/*!*************************!*\
  !*** ./pages/api/db.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_1__);\n\n\nlet cachedDb = null;\n\nasync function connectToDatabase(uri) {\n  if (cachedDb) {\n    return cachedDb;\n  }\n\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect(uri, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n  });\n  const dbName = url__WEBPACK_IMPORTED_MODULE_1___default.a.parse(uri).pathname.substr(1);\n  const db = client.db(dbName);\n  cachedDb = db;\n  return db;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (request, response) => {\n  const {\n    email\n  } = request.body;\n  const db = await connectToDatabase(process.env.MONGODB_URI);\n  const collection = db.collection('subscribers');\n  await collection.insertOne({\n    email,\n    subscribedAt: new Date()\n  });\n  return response.status(201).json({\n    ok: true\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZGIuanM/ODYyMiJdLCJuYW1lcyI6WyJjYWNoZWREYiIsImNvbm5lY3RUb0RhdGFiYXNlIiwidXJpIiwiY2xpZW50IiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiZGJOYW1lIiwidXJsIiwicGFyc2UiLCJwYXRobmFtZSIsInN1YnN0ciIsImRiIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiZW1haWwiLCJib2R5IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiY29sbGVjdGlvbiIsImluc2VydE9uZSIsInN1YnNjcmliZWRBdCIsIkRhdGUiLCJzdGF0dXMiLCJqc29uIiwib2siXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsSUFBSUEsUUFBUSxHQUFHLElBQWY7O0FBR0EsZUFBZUMsaUJBQWYsQ0FBaUNDLEdBQWpDLEVBQXNDO0FBQ3BDLE1BQUlGLFFBQUosRUFBYztBQUNaLFdBQU9BLFFBQVA7QUFDRDs7QUFFRCxRQUFNRyxNQUFNLEdBQUcsTUFBTUMsbURBQVcsQ0FBQ0MsT0FBWixDQUFvQkgsR0FBcEIsRUFBeUI7QUFDNUNJLG1CQUFlLEVBQUUsSUFEMkI7QUFFNUNDLHNCQUFrQixFQUFFO0FBRndCLEdBQXpCLENBQXJCO0FBS0EsUUFBTUMsTUFBTSxHQUFHQywwQ0FBRyxDQUFDQyxLQUFKLENBQVVSLEdBQVYsRUFBZVMsUUFBZixDQUF3QkMsTUFBeEIsQ0FBK0IsQ0FBL0IsQ0FBZjtBQUVBLFFBQU1DLEVBQUUsR0FBR1YsTUFBTSxDQUFDVSxFQUFQLENBQVVMLE1BQVYsQ0FBWDtBQUVBUixVQUFRLEdBQUdhLEVBQVg7QUFFQSxTQUFPQSxFQUFQO0FBQ0Q7O0FBRWMsc0VBQU9DLE9BQVAsRUFBZ0JDLFFBQWhCLEtBQTZCO0FBQzFDLFFBQU07QUFBRUM7QUFBRixNQUFZRixPQUFPLENBQUNHLElBQTFCO0FBRUEsUUFBTUosRUFBRSxHQUFHLE1BQU1aLGlCQUFpQixDQUFDaUIsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQWIsQ0FBbEM7QUFFQSxRQUFNQyxVQUFVLEdBQUdSLEVBQUUsQ0FBQ1EsVUFBSCxDQUFjLGFBQWQsQ0FBbkI7QUFFQSxRQUFNQSxVQUFVLENBQUNDLFNBQVgsQ0FBcUI7QUFDekJOLFNBRHlCO0FBRXpCTyxnQkFBWSxFQUFFLElBQUlDLElBQUo7QUFGVyxHQUFyQixDQUFOO0FBS0EsU0FBT1QsUUFBUSxDQUFDVSxNQUFULENBQWdCLEdBQWhCLEVBQXFCQyxJQUFyQixDQUEwQjtBQUFFQyxNQUFFLEVBQUU7QUFBTixHQUExQixDQUFQO0FBQ0QsQ0FiRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9kYi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50LCBEYiB9IGZyb20gJ21vbmdvZGInXG5pbXBvcnQgdXJsIGZyb20gJ3VybCc7XG5cbmxldCBjYWNoZWREYiA9IG51bGw7XG5cblxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UodXJpKSB7XG4gIGlmIChjYWNoZWREYikge1xuICAgIHJldHVybiBjYWNoZWREYjtcbiAgfVxuXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QodXJpLCB7XG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgfSk7XG5cbiAgY29uc3QgZGJOYW1lID0gdXJsLnBhcnNlKHVyaSkucGF0aG5hbWUuc3Vic3RyKDEpO1xuXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKGRiTmFtZSk7XG5cbiAgY2FjaGVkRGIgPSBkYjtcblxuICByZXR1cm4gZGI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xuICBjb25zdCB7IGVtYWlsIH0gPSByZXF1ZXN0LmJvZHk7XG4gIFxuICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKTtcblxuICBjb25zdCBjb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignc3Vic2NyaWJlcnMnKTtcblxuICBhd2FpdCBjb2xsZWN0aW9uLmluc2VydE9uZSh7XG4gICAgZW1haWwsXG4gICAgc3Vic2NyaWJlZEF0OiBuZXcgRGF0ZSgpLFxuICB9KVxuXG4gIHJldHVybiByZXNwb25zZS5zdGF0dXMoMjAxKS5qc29uKHsgb2s6IHRydWUgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/db.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIj82MWU4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InVybC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///url\n");

/***/ })

/******/ });
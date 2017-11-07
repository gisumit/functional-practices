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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reduce = __webpack_require__(1);

var _reduce2 = _interopRequireDefault(_reduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_reduce2.default);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var api1 = [{ name: 'RHEL', type: 'storage' }, { name: 'OpenShift', type: 'storage' }, { name: 'Ansibal', type: 'storage' }, { name: 'OpenStack', type: 'Cloud' }, { name: 'Virtualization', type: 'Cloud' }];

// let res = [{
//     type: 'storage',
//     products: [
//         { name: 'RHEL', type: 'storage' },
//         { name: 'OpenShift', type: 'storage' },
//         { name: 'Ansibal', type: 'storage' }
//     ]
// }, {
//     type: 'Cloud',
//     products: [
//         { name: 'OpenStack', type: 'Cloud' },
//         { name: 'Virtualization', type: 'Cloud' }
//     ]
// }];


var result = api.reduce(function (array, line) {
	var index = array.findIndex(function (params) {
		return params.type === line.type;
	});

	if (index === -1) {
		var products = [];
		products.push(line);
		array.push({ type: line.type, products: products });
	} else {
		array[index].products.push(line);
	}
	return array;
}, []);

// if arr has obj which has same type then dont push it
// if arr dont has type then push it


var api2 = [{
	name: 'ticket 1',
	status: 'new'
}, {
	name: 'ticket 2',
	status: 'new'
}, {
	name: 'ticket 1',
	status: 'old'
}];

var count = api.reduce(function (count, item) {
	if (item.status == 'new') {
		count++;
	}
	return count;
}, 0);

//   console.log(count)
module.exports = { count: count, result: result };

// let api = [
//   { rh_fy_year: 2017, week: "2017-05-15T13:59:56.000Z", no_of_installations: 20 },
//   { rh_fy_year: 2017, week: "2017-05-23T03:27:35.000Z", no_of_installations: 2 },
//   { rh_fy_year: 2017, week: "2017-05-31T14:20:32.000Z", no_of_installations: 10 },
//   { rh_fy_year: 2017, week: "2017-06-07T16:58:32.000Z", no_of_installations: 7 },
//   { rh_fy_year: 2017, week: "2017-06-12T14:54:46.000Z", no_of_installations: 9 },
//   { rh_fy_year: 2016, week: "2017-06-19T20:12:33.000Z", no_of_installations: 1 },
//   { rh_fy_year: 2016, week: "2017-06-27T13:09:35.000Z", no_of_installations: 25 },
//   { rh_fy_year: 2016, week: "2017-07-04T13:37:03.000Z", no_of_installations: 13 },
//   { rh_fy_year: 2016, week: "2017-07-10T12:42:57.000Z", no_of_installations: 5 },
//   { rh_fy_year: 2016, week: "2017-07-17T14:18:47.000Z", no_of_installations: 6 },
//   { rh_fy_year: 2015, week: "2017-07-24T16:48:47.000Z", no_of_installations: 5 },
//   { rh_fy_year: 2015, week: "2017-07-31T14:45:05.000Z", no_of_installations: 9 },
//   { rh_fy_year: 2015, week: "2017-08-07T07:22:40.000Z", no_of_installations: 2 },
//   { rh_fy_year: 2015, week: "2017-08-14T15:10:26.000Z", no_of_installations: 9 },
//   { rh_fy_year: 2015, week: "2017-08-22T15:00:49.000Z", no_of_installations: 4 },
//   { rh_fy_year: 2015, week: "2017-08-28T18:48:57.000Z", no_of_installations: 3 }
// ];

// Expected:
// [{ year: 2017, prods: [{week: "2017-05-15T13:59:56.000Z", no_of_installations: 20}]}]


// let result = api.reduce((t, a) => [...t, {week: a.week, count: a.no_of_installations}], [])

// result

/***/ })
/******/ ]);
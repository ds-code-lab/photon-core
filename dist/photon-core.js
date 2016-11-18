(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["photon-core"] = factory();
	else
		root["photon-core"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*************************!*\
  !*** multi photon-core ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./src/index.js */1);


/***/ },
/* 1 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	     value: true
	});
	
	var _indexWithDeps = __webpack_require__(/*! ../lib/skatejs/index-with-deps */ 2);
	
	Object.defineProperty(exports, 'Component', {
	     enumerable: true,
	     get: function get() {
	          return _indexWithDeps.Component;
	     }
	});
	Object.defineProperty(exports, 'h', {
	     enumerable: true,
	     get: function get() {
	          return _indexWithDeps.h;
	     }
	});
	Object.defineProperty(exports, 'emit', {
	     enumerable: true,
	     get: function get() {
	          return _indexWithDeps.emit;
	     }
	});
	Object.defineProperty(exports, 'props', {
	     enumerable: true,
	     get: function get() {
	          return _indexWithDeps.props;
	     }
	});
	Object.defineProperty(exports, 'prop', {
	     enumerable: true,
	     get: function get() {
	          return _indexWithDeps.prop;
	     }
	});

/***/ },
/* 2 */
/*!****************************************!*\
  !*** ./lib/skatejs/index-with-deps.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["skate"] = factory();else root["skate"] = factory();
	})(undefined, function () {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};
				/******/
				/******/ // The require function
				/******/function __webpack_require__(moduleId) {
					/******/
					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;
					/******/
					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };
					/******/
					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
					/******/
					/******/ // Flag the module as loaded
					/******/module.loaded = true;
					/******/
					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}
				/******/
				/******/
				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;
				/******/
				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;
				/******/
				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";
				/******/
				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.vdom = exports.symbols = exports.ready = exports.props = exports.prop = exports.link = exports.h = exports.emit = exports.define = exports.Component = undefined;
	
				var _prop = __webpack_require__(1);
	
				var prop = _interopRequireWildcard(_prop);
	
				var _symbols = __webpack_require__(5);
	
				var symbols = _interopRequireWildcard(_symbols);
	
				var _vdom = __webpack_require__(7);
	
				var vdom = _interopRequireWildcard(_vdom);
	
				var _component = __webpack_require__(11);
	
				var _component2 = _interopRequireDefault(_component);
	
				var _define = __webpack_require__(24);
	
				var _define2 = _interopRequireDefault(_define);
	
				var _emit = __webpack_require__(26);
	
				var _emit2 = _interopRequireDefault(_emit);
	
				var _link = __webpack_require__(27);
	
				var _link2 = _interopRequireDefault(_link);
	
				var _props = __webpack_require__(17);
	
				var _props2 = _interopRequireDefault(_props);
	
				var _ready = __webpack_require__(28);
	
				var _ready2 = _interopRequireDefault(_ready);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _interopRequireWildcard(obj) {
					if (obj && obj.__esModule) {
						return obj;
					} else {
						var newObj = {};if (obj != null) {
							for (var key in obj) {
								if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
							}
						}newObj.default = obj;return newObj;
					}
				}
	
				var h = vdom.builder();
	
				exports.Component = _component2.default;
				exports.define = _define2.default;
				exports.emit = _emit2.default;
				exports.h = h;
				exports.link = _link2.default;
				exports.prop = prop;
				exports.props = _props2.default;
				exports.ready = _ready2.default;
				exports.symbols = symbols;
				exports.vdom = vdom;
	
				/***/
			},
			/* 1 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.string = exports.number = exports.boolean = exports.array = undefined;
				exports.
	
				// returns a factory function to generates property definitions
				// based on the given property definition (def) that is used as a template
				create = create;
	
				var _assign = __webpack_require__(2);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _empty = __webpack_require__(4);
	
				var _empty2 = _interopRequireDefault(_empty);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _toConsumableArray(arr) {
					if (Array.isArray(arr)) {
						for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
							arr2[i] = arr[i];
						}return arr2;
					} else {
						return Array.from(arr);
					}
				}
	
				var alwaysUndefinedIfNotANumberOrNumber = function alwaysUndefinedIfNotANumberOrNumber(val) {
					return isNaN(val) ? undefined : Number(val);
				};
				var alwaysUndefinedIfEmptyOrString = function alwaysUndefinedIfEmptyOrString(val) {
					return (0, _empty2.default)(val) ? undefined : String(val);
				};
	
				function create(template) {
	
					//question: where this get called will more than on argument?
					return function () {
						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
							args[_key] = arguments[_key];
						}
	
						args.unshift({}, template);
						return _assign2.default.apply(undefined, _toConsumableArray(args));
					};
				}
	
				var array = exports.array = create({
					coerce: function coerce(val) {
						return Array.isArray(val) ? val : [val];
					},
					default: function _default() {
						return [];
					},
					deserialize: function deserialize(val) {
						return val === undefined ? undefined : JSON.parse(String(val));
					},
					serialize: JSON.stringify
				});
	
				var boolean = exports.boolean = create({
					coerce: function coerce(value) {
						return !!value;
					},
					default: false,
					deserialize: function deserialize(value) {
						return !(value === null);
					},
					serialize: function serialize(value) {
						return value ? '' : undefined;
					}
				});
	
				var number = exports.number = create({
					default: 0,
					coerce: alwaysUndefinedIfNotANumberOrNumber,
					deserialize: alwaysUndefinedIfNotANumberOrNumber,
					serialize: alwaysUndefinedIfNotANumberOrNumber
				});
	
				var string = exports.string = create({
					default: '',
					coerce: alwaysUndefinedIfEmptyOrString,
					deserialize: alwaysUndefinedIfEmptyOrString,
					serialize: alwaysUndefinedIfEmptyOrString
				});
	
				/***/
			},
			/* 2 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _getAllKeys = __webpack_require__(3);
	
				var _getAllKeys2 = _interopRequireDefault(_getAllKeys);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				// We are not using Object.assign if it is defined since it will cause problems when Symbol is polyfilled.
				// Apparently Object.assign (or any polyfill for this method) does not copy non-native Symbols.
				exports.default = function (obj) {
					for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
						args[_key - 1] = arguments[_key];
					}
	
					args.forEach(function (arg) {
						return (0, _getAllKeys2.default)(arg).forEach(function (name) {
							return obj[name] = arg[name];
						});
					}); // eslint-disable-line no-return-assign
					return obj;
				};
	
				/***/
			},
			/* 3 */
			/***/function (module, exports) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = keys;
				// returns and array of property name strings and symbols on the given object
				function keys() {
					var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
					var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
					    _ref$enumOnly = _ref.enumOnly,
					    enumOnly = _ref$enumOnly === undefined ? false : _ref$enumOnly;
	
					var listOfKeys = Object[enumOnly ? 'keys' : 'getOwnPropertyNames'](obj);
					return typeof Object.getOwnPropertySymbols === 'function' ? listOfKeys.concat(Object.getOwnPropertySymbols(obj)) : listOfKeys;
				}
	
				/***/
			},
			/* 4 */
			/***/function (module, exports) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				exports.default = function (val) {
					return typeof val === 'undefined' || val === null;
				};
	
				/***/
			},
			/* 5 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _symbols = __webpack_require__(6);
	
				Object.defineProperty(exports, 'name', {
					enumerable: true,
					get: function get() {
						return _symbols.name;
					}
				});
	
				/***/
			},
			/* 6 */
			/***/function (module, exports) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				var connected = exports.connected = '____skate_connected';
				var created = exports.created = '____skate_created';
				var props = exports.props = '____skate_props';
	
				// DEPRECATED
				//
				// This is the only "symbol" that must stay a string. This is because it is
				// relied upon across several versions. We should remove it, but ensure that
				// it's considered a breaking change that whatever version removes it cannot
				// be passed to vdom functions as tag names.
				var name = exports.name = '____skate_name';
	
				var ref = exports.ref = '____skate_ref';
				var renderer = exports.renderer = '____skate_renderer';
				var rendering = exports.rendering = '____skate_rendering';
				var rendererDebounced = exports.rendererDebounced = '____skate_rendererDebounced';
				var updated = exports.updated = '____skate_updated';
	
				/***/
			},
			/* 7 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.text = exports.elementVoid = exports.elementOpenStart = exports.elementOpenEnd = exports.elementOpen = exports.elementClose = exports.attr = undefined;
	
				var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				};
	
				exports.element = element;
				exports.builder = builder;
	
				var _incrementalDom = __webpack_require__(8);
	
				var _symbols = __webpack_require__(6);
	
				var _propContext2 = __webpack_require__(9);
	
				var _propContext3 = _interopRequireDefault(_propContext2);
	
				var _windowOrGlobal = __webpack_require__(10);
	
				var _windowOrGlobal2 = _interopRequireDefault(_windowOrGlobal);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _toConsumableArray(arr) {
					if (Array.isArray(arr)) {
						for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
							arr2[i] = arr[i];
						}return arr2;
					} else {
						return Array.from(arr);
					}
				}
	
				function _defineProperty(obj, key, value) {
					if (key in obj) {
						Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
					} else {
						obj[key] = value;
					}return obj;
				} /* eslint no-plusplus: 0 */
	
				var customElements = _windowOrGlobal2.default.customElements,
				    HTMLElement = _windowOrGlobal2.default.HTMLElement;
	
				var applyDefault = _incrementalDom.attributes[_incrementalDom.symbols.default];
	
				// A stack of children that corresponds to the current function helper being
				// executed.
				var stackChren = [];
	
				var $skip = '__skip';
				var $currentEventHandlers = '__events';
				var $stackCurrentHelperProps = '__props';
	
				// The current function helper in the stack.
				var stackCurrentHelper = void 0;
	
				// This is used for the Incremental DOM overrides to keep track of what args
				// to pass the main elementOpen() function.
				var overrideArgs = void 0;
	
				// The number of levels deep after skipping a tree.
				var skips = 0;
	
				var noop = function noop() {};
	
				// Adds or removes an event listener for an element.
				function applyEvent(elem, ename, newFunc) {
					var events = elem[$currentEventHandlers];
	
					if (!events) {
						events = elem[$currentEventHandlers] = {};
					}
	
					// Undefined indicates that there is no listener yet.
					if (typeof events[ename] === 'undefined') {
						// We only add a single listener once. Originally this was a workaround for
						// the Webcomponents ShadyDOM polyfill not removing listeners, but it's
						// also a simpler model for binding / unbinding events because you only
						// have a single handler you need to worry about and a single place where
						// you only store one event handler
						elem.addEventListener(ename, function (e) {
							if (events[ename]) {
								events[ename].call(this, e);
							}
						});
					}
	
					// Not undefined indicates that we have set a listener, so default to null.
					events[ename] = typeof newFunc === 'function' ? newFunc : null;
				}
	
				var attributesContext = (0, _propContext3.default)(_incrementalDom.attributes, _defineProperty({
					// Attributes that shouldn't be applied to the DOM.
					key: noop,
					statics: noop,
	
					// Attributes that *must* be set via a property on all elements.
					checked: _incrementalDom.applyProp,
					className: _incrementalDom.applyProp,
					disabled: _incrementalDom.applyProp,
					value: _incrementalDom.applyProp,
	
					// Ref handler.
					ref: function ref(elem, name, value) {
						elem[_symbols.ref] = value;
					},
	
					// Skip handler.
					skip: function skip(elem, name, value) {
						if (value) {
							elem[$skip] = true;
						} else {
							delete elem[$skip];
						}
					}
				}, _incrementalDom.symbols.default, function (elem, name, value) {
					var _ref = customElements.get(elem.tagName) || {
						props: {},
						prototype: {}
					},
					    props = _ref.props,
					    prototype = _ref.prototype;
	
					// TODO when refactoring properties to not have to workaround the old
					// WebKit bug we can remove the "name in props" check below.
					//
					// NOTE: That the "name in elem" check won't work for polyfilled custom
					// elements that set a property that isn't explicitly specified in "props"
					// or "prototype" unless it is added to the element explicitly as a
					// property prior to passing the prop to the vdom function. For example, if
					// it were added in a lifecycle callback because it wouldn't have been
					// upgraded yet.
					//
					// We prefer setting props, so we do this if there's a property matching
					// name that was passed. However, certain props on SVG elements are
					// readonly and error when you try to set them.
	
	
					if ((name in props || name in elem || name in prototype) && !('ownerSVGElement' in elem)) {
						(0, _incrementalDom.applyProp)(elem, name, value);
						return;
					}
	
					// Explicit false removes the attribute.
					if (value === false) {
						applyDefault(elem, name);
						return;
					}
	
					// Handle built-in and custom events.
					if (name.indexOf('on') === 0) {
						var firstChar = name[2];
						var eventName = void 0;
	
						if (firstChar === '-') {
							eventName = name.substring(3);
						} else if (firstChar === firstChar.toUpperCase()) {
							eventName = firstChar.toLowerCase() + name.substring(3);
						}
	
						if (eventName) {
							applyEvent(elem, eventName, value);
							return;
						}
					}
	
					applyDefault(elem, name, value);
				}));
	
				function resolveTagName(tname) {
					if (!tname) {
						return tname;
					}
					// If the tag name passed is a custom element, get it's tag name. We try the
					// optimistic path of trying to get it by the $name symbol (same versions) or
					// falling back to getting it from an actual instance and caching it using
					// the same symbol.
					if (tname.prototype instanceof HTMLElement) {
						// eslint-disable-next-line
						var elem = new tname();
						tname[_symbols.name] = elem.tagName.toLowerCase();
					}
					return tname[_symbols.name] || tname;
				}
	
				// Incremental DOM's elementOpen is where the hooks in `attributes` are applied,
				// so it's the only function we need to execute in the context of our attributes.
				var elementOpen = attributesContext(_incrementalDom.elementOpen);
	
				function elementOpenStart(tag) {
					var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
					var statics = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	
					overrideArgs = [tag, key, statics];
				}
	
				function elementOpenEnd() {
					var node = newElementOpen.apply(undefined, _toConsumableArray(overrideArgs)); // eslint-disable-line no-use-before-define
					overrideArgs = null;
					return node;
				}
	
				function wrapIdomFunc(func) {
					var tnameFuncHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
	
					return function wrap() {
						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
							args[_key] = arguments[_key];
						}
	
						args[0] = resolveTagName(args[0]);
						stackCurrentHelper = null;
						if (typeof args[0] === 'function') {
							// If we've encountered a function, handle it according to the type of
							// function that is being wrapped.
							stackCurrentHelper = args[0];
							return tnameFuncHandler.apply(undefined, args);
						} else if (stackChren.length) {
							// We pass the wrap() function in here so that when it's called as
							// children, it will queue up for the next stack, if there is one.
							stackChren[stackChren.length - 1].push([wrap, args]);
						} else {
							if (func === elementOpen) {
								if (skips) {
									return ++skips;
								}
	
								var elem = func.apply(undefined, args);
	
								if (elem[$skip]) {
									++skips;
								}
	
								return elem;
							}
	
							if (func === _incrementalDom.elementClose) {
								if (skips === 1) {
									(0, _incrementalDom.skip)();
								}
	
								// We only want to skip closing if it's not the last closing tag in the
								// skipped tree because we keep the element that initiated the skpping.
								if (skips && --skips) {
									return;
								}
	
								var _elem = func.apply(undefined, args);
								var ref = _elem[_symbols.ref];
	
								// We delete so that it isn't called again for the same element. If the
								// ref changes, or the element changes, this will be defined again.
								delete _elem[_symbols.ref];
	
								// Execute the saved ref after esuring we've cleand up after it.
								if (typeof ref === 'function') {
									ref(_elem);
								}
	
								return _elem;
							}
	
							// We must call elementOpenStart and elementOpenEnd even if we are
							// skipping because they queue up attributes and then call elementClose.
							if (!skips || func === elementOpenStart || func === elementOpenEnd) {
								return func.apply(undefined, args);
							}
						}
					};
				}
	
				function newAttr() {
					for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
						args[_key2] = arguments[_key2];
					}
	
					if (stackCurrentHelper) {
						stackCurrentHelper[$stackCurrentHelperProps][args[0]] = args[1];
					} else if (stackChren.length) {
						stackChren[stackChren.length - 1].push([newAttr, args]);
					} else {
						overrideArgs.push(args[0]);
						overrideArgs.push(args[1]);
					}
				}
	
				function stackOpen(tname, key, statics) {
					var props = { key: key, statics: statics };
	
					for (var _len3 = arguments.length, attrs = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
						attrs[_key3 - 3] = arguments[_key3];
					}
	
					for (var a = 0; a < attrs.length; a += 2) {
						props[attrs[a]] = attrs[a + 1];
					}
					tname[$stackCurrentHelperProps] = props;
					stackChren.push([]);
				}
	
				function stackClose(tname) {
					var chren = stackChren.pop();
					var props = tname[$stackCurrentHelperProps];
					delete tname[$stackCurrentHelperProps];
					var elemOrFn = tname(props, function () {
						return chren.forEach(function (args) {
							return args[0].apply(args, _toConsumableArray(args[1]));
						});
					});
					return typeof elemOrFn === 'function' ? elemOrFn() : elemOrFn;
				}
	
				// Incremental DOM overrides
				// -------------------------
	
				// We must override internal functions that call internal Incremental DOM
				// functions because we can't override the internal references. This means
				// we must roughly re-implement their behaviour. Luckily, they're fairly
				// simple.
				var newElementOpenStart = wrapIdomFunc(elementOpenStart, stackOpen);
				var newElementOpenEnd = wrapIdomFunc(elementOpenEnd);
	
				// Standard open / closed overrides don't need to reproduce internal behaviour
				// because they are the ones referenced from *End and *Start.
				var newElementOpen = wrapIdomFunc(elementOpen, stackOpen);
				var newElementClose = wrapIdomFunc(_incrementalDom.elementClose, stackClose);
	
				// Ensure we call our overridden functions instead of the internal ones.
				function newElementVoid(tag) {
					for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
						args[_key4 - 1] = arguments[_key4];
					}
	
					newElementOpen.apply(undefined, [tag].concat(args));
					return newElementClose(tag);
				}
	
				// Text override ensures their calls can queue if using function helpers.
				var newText = wrapIdomFunc(_incrementalDom.text);
	
				// Convenience function for declaring an Incremental DOM element using
				// hyperscript-style syntax.
				function element(tname, attrs) {
					var atype = typeof attrs === 'undefined' ? 'undefined' : _typeof(attrs);
	
					// If attributes are a function, then they should be treated as children.
	
					for (var _len5 = arguments.length, chren = Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
						chren[_key5 - 2] = arguments[_key5];
					}
	
					if (atype === 'function' || atype === 'string' || atype === 'number') {
						chren.unshift(attrs);
					}
	
					// Ensure the attributes are an object. Null is considered an object so we
					// have to test for this explicitly.
					if (attrs === null || atype !== 'object') {
						attrs = {};
					}
	
					// We open the element so we can set attrs after.
					newElementOpenStart(tname, attrs.key, attrs.statics);
	
					// Delete so special attrs don't actually get set.
					delete attrs.key;
					delete attrs.statics;
	
					// Set attributes.
					Object.keys(attrs).forEach(function (name) {
						return newAttr(name, attrs[name]);
					});
	
					// Close before we render the descendant tree.
					newElementOpenEnd(tname);
	
					chren.forEach(function (ch) {
						var ctype = typeof ch === 'undefined' ? 'undefined' : _typeof(ch);
						if (ctype === 'function') {
							ch();
						} else if (ctype === 'string' || ctype === 'number') {
							newText(ch);
						} else if (Array.isArray(ch)) {
							ch.forEach(function (sch) {
								return sch();
							});
						}
					});
	
					return newElementClose(tname);
				}
	
				// Even further convenience for building a DSL out of JavaScript functions or hooking into standard
				// transpiles for JSX (React.createElement() / h).
				function builder() {
					for (var _len6 = arguments.length, tags = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
						tags[_key6] = arguments[_key6];
					}
	
					if (tags.length === 0) {
						return function () {
							for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
								args[_key7] = arguments[_key7];
							}
	
							return element.bind.apply(element, [null].concat(args));
						};
					}
					return tags.map(function (tag) {
						return function () {
							for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
								args[_key8] = arguments[_key8];
							}
	
							return element.bind.apply(element, [null, tag].concat(args));
						};
					});
				}
	
				// We don't have to do anything special for the text function; it's just a
				// straight export from Incremental DOM.
				exports.attr = newAttr;
				exports.elementClose = newElementClose;
				exports.elementOpen = newElementOpen;
				exports.elementOpenEnd = newElementOpenEnd;
				exports.elementOpenStart = newElementOpenStart;
				exports.elementVoid = newElementVoid;
				exports.text = newText;
	
				/***/
			},
			/* 8 */
			/***/function (module, exports, __webpack_require__) {
	
				/**
	    * @license
	    * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
	    *
	    * Licensed under the Apache License, Version 2.0 (the "License");
	    * you may not use this file except in compliance with the License.
	    * You may obtain a copy of the License at
	    *
	    *      http://www.apache.org/licenses/LICENSE-2.0
	    *
	    * Unless required by applicable law or agreed to in writing, software
	    * distributed under the License is distributed on an "AS-IS" BASIS,
	    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	    * See the License for the specific language governing permissions and
	    * limitations under the License.
	    */
	
				'use strict';
	
				/**
	    * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
	    *
	    * Licensed under the Apache License, Version 2.0 (the "License");
	    * you may not use this file except in compliance with the License.
	    * You may obtain a copy of the License at
	    *
	    *      http://www.apache.org/licenses/LICENSE-2.0
	    *
	    * Unless required by applicable law or agreed to in writing, software
	    * distributed under the License is distributed on an "AS-IS" BASIS,
	    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	    * See the License for the specific language governing permissions and
	    * limitations under the License.
	    */
	
				/**
	    * A cached reference to the hasOwnProperty function.
	    */
	
				var hasOwnProperty = Object.prototype.hasOwnProperty;
	
				/**
	    * A cached reference to the create function.
	    */
				var create = Object.create;
	
				/**
	    * Used to prevent property collisions between our "map" and its prototype.
	    * @param {!Object<string, *>} map The map to check.
	    * @param {string} property The property to check.
	    * @return {boolean} Whether map has property.
	    */
				var has = function has(map, property) {
					return hasOwnProperty.call(map, property);
				};
	
				/**
	    * Creates an map object without a prototype.
	    * @return {!Object}
	    */
				var createMap = function createMap() {
					return create(null);
				};
	
				/**
	    * Keeps track of information needed to perform diffs for a given DOM node.
	    * @param {!string} nodeName
	    * @param {?string=} key
	    * @constructor
	    */
				function NodeData(nodeName, key) {
					/**
	     * The attributes and their values.
	     * @const {!Object<string, *>}
	     */
					this.attrs = createMap();
	
					/**
	     * An array of attribute name/value pairs, used for quickly diffing the
	     * incomming attributes to see if the DOM node's attributes need to be
	     * updated.
	     * @const {Array<*>}
	     */
					this.attrsArr = [];
	
					/**
	     * The incoming attributes for this Node, before they are updated.
	     * @const {!Object<string, *>}
	     */
					this.newAttrs = createMap();
	
					/**
	     * The key used to identify this node, used to preserve DOM nodes when they
	     * move within their parent.
	     * @const
	     */
					this.key = key;
	
					/**
	     * Keeps track of children within this node by their key.
	     * {?Object<string, !Element>}
	     */
					this.keyMap = null;
	
					/**
	     * Whether or not the keyMap is currently valid.
	     * {boolean}
	     */
					this.keyMapValid = true;
	
					/**
	     * The node name for this node.
	     * @const {string}
	     */
					this.nodeName = nodeName;
	
					/**
	     * @type {?string}
	     */
					this.text = null;
				}
	
				/**
	    * Initializes a NodeData object for a Node.
	    *
	    * @param {Node} node The node to initialize data for.
	    * @param {string} nodeName The node name of node.
	    * @param {?string=} key The key that identifies the node.
	    * @return {!NodeData} The newly initialized data object
	    */
				var initData = function initData(node, nodeName, key) {
					var data = new NodeData(nodeName, key);
					node['__incrementalDOMData'] = data;
					return data;
				};
	
				/**
	    * Retrieves the NodeData object for a Node, creating it if necessary.
	    *
	    * @param {Node} node The node to retrieve the data for.
	    * @return {!NodeData} The NodeData for this Node.
	    */
				var getData = function getData(node) {
					var data = node['__incrementalDOMData'];
	
					if (!data) {
						var nodeName = node.nodeName.toLowerCase();
						var key = null;
	
						if (node instanceof Element) {
							key = node.getAttribute('key');
						}
	
						data = initData(node, nodeName, key);
					}
	
					return data;
				};
	
				/**
	    * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
	    *
	    * Licensed under the Apache License, Version 2.0 (the "License");
	    * you may not use this file except in compliance with the License.
	    * You may obtain a copy of the License at
	    *
	    *      http://www.apache.org/licenses/LICENSE-2.0
	    *
	    * Unless required by applicable law or agreed to in writing, software
	    * distributed under the License is distributed on an "AS-IS" BASIS,
	    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	    * See the License for the specific language governing permissions and
	    * limitations under the License.
	    */
	
				/** @const */
				var symbols = {
					default: '__default',
	
					placeholder: '__placeholder'
				};
	
				/**
	    * @param {string} name
	    * @return {string|undefined} The namespace to use for the attribute.
	    */
				var getNamespace = function getNamespace(name) {
					if (name.lastIndexOf('xml:', 0) === 0) {
						return 'http://www.w3.org/XML/1998/namespace';
					}
	
					if (name.lastIndexOf('xlink:', 0) === 0) {
						return 'http://www.w3.org/1999/xlink';
					}
				};
	
				/**
	    * Applies an attribute or property to a given Element. If the value is null
	    * or undefined, it is removed from the Element. Otherwise, the value is set
	    * as an attribute.
	    * @param {!Element} el
	    * @param {string} name The attribute's name.
	    * @param {?(boolean|number|string)=} value The attribute's value.
	    */
				var applyAttr = function applyAttr(el, name, value) {
					if (value == null) {
						el.removeAttribute(name);
					} else {
						var attrNS = getNamespace(name);
						if (attrNS) {
							el.setAttributeNS(attrNS, name, value);
						} else {
							el.setAttribute(name, value);
						}
					}
				};
	
				/**
	    * Applies a property to a given Element.
	    * @param {!Element} el
	    * @param {string} name The property's name.
	    * @param {*} value The property's value.
	    */
				var applyProp = function applyProp(el, name, value) {
					el[name] = value;
				};
	
				/**
	    * Applies a style to an Element. No vendor prefix expansion is done for
	    * property names/values.
	    * @param {!Element} el
	    * @param {string} name The attribute's name.
	    * @param {*} style The style to set. Either a string of css or an object
	    *     containing property-value pairs.
	    */
				var applyStyle = function applyStyle(el, name, style) {
					if (typeof style === 'string') {
						el.style.cssText = style;
					} else {
						el.style.cssText = '';
						var elStyle = el.style;
						var obj = /** @type {!Object<string,string>} */style;
	
						for (var prop in obj) {
							if (has(obj, prop)) {
								elStyle[prop] = obj[prop];
							}
						}
					}
				};
	
				/**
	    * Updates a single attribute on an Element.
	    * @param {!Element} el
	    * @param {string} name The attribute's name.
	    * @param {*} value The attribute's value. If the value is an object or
	    *     function it is set on the Element, otherwise, it is set as an HTML
	    *     attribute.
	    */
				var applyAttributeTyped = function applyAttributeTyped(el, name, value) {
					var type = typeof value === 'undefined' ? 'undefined' : _typeof2(value);
	
					if (type === 'object' || type === 'function') {
						applyProp(el, name, value);
					} else {
						applyAttr(el, name, /** @type {?(boolean|number|string)} */value);
					}
				};
	
				/**
	    * Calls the appropriate attribute mutator for this attribute.
	    * @param {!Element} el
	    * @param {string} name The attribute's name.
	    * @param {*} value The attribute's value.
	    */
				var updateAttribute = function updateAttribute(el, name, value) {
					var data = getData(el);
					var attrs = data.attrs;
	
					if (attrs[name] === value) {
						return;
					}
	
					var mutator = attributes[name] || attributes[symbols.default];
					mutator(el, name, value);
	
					attrs[name] = value;
				};
	
				/**
	    * A publicly mutable object to provide custom mutators for attributes.
	    * @const {!Object<string, function(!Element, string, *)>}
	    */
				var attributes = createMap();
	
				// Special generic mutator that's called for any attribute that does not
				// have a specific mutator.
				attributes[symbols.default] = applyAttributeTyped;
	
				attributes[symbols.placeholder] = function () {};
	
				attributes['style'] = applyStyle;
	
				/**
	    * Gets the namespace to create an element (of a given tag) in.
	    * @param {string} tag The tag to get the namespace for.
	    * @param {?Node} parent
	    * @return {?string} The namespace to create the tag in.
	    */
				var getNamespaceForTag = function getNamespaceForTag(tag, parent) {
					if (tag === 'svg') {
						return 'http://www.w3.org/2000/svg';
					}
	
					if (getData(parent).nodeName === 'foreignObject') {
						return null;
					}
	
					return parent.namespaceURI;
				};
	
				/**
	    * Creates an Element.
	    * @param {Document} doc The document with which to create the Element.
	    * @param {?Node} parent
	    * @param {string} tag The tag for the Element.
	    * @param {?string=} key A key to identify the Element.
	    * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	    *     static attributes for the Element.
	    * @return {!Element}
	    */
				var createElement = function createElement(doc, parent, tag, key, statics) {
					var namespace = getNamespaceForTag(tag, parent);
					var el = undefined;
	
					if (namespace) {
						el = doc.createElementNS(namespace, tag);
					} else {
						el = doc.createElement(tag);
					}
	
					initData(el, tag, key);
	
					if (statics) {
						for (var i = 0; i < statics.length; i += 2) {
							updateAttribute(el, /** @type {!string}*/statics[i], statics[i + 1]);
						}
					}
	
					return el;
				};
	
				/**
	    * Creates a Text Node.
	    * @param {Document} doc The document with which to create the Element.
	    * @return {!Text}
	    */
				var createText = function createText(doc) {
					var node = doc.createTextNode('');
					initData(node, '#text', null);
					return node;
				};
	
				/**
	    * Creates a mapping that can be used to look up children using a key.
	    * @param {?Node} el
	    * @return {!Object<string, !Element>} A mapping of keys to the children of the
	    *     Element.
	    */
				var createKeyMap = function createKeyMap(el) {
					var map = createMap();
					var child = el.firstElementChild;
	
					while (child) {
						var key = getData(child).key;
	
						if (key) {
							map[key] = child;
						}
	
						child = child.nextElementSibling;
					}
	
					return map;
				};
	
				/**
	    * Retrieves the mapping of key to child node for a given Element, creating it
	    * if necessary.
	    * @param {?Node} el
	    * @return {!Object<string, !Node>} A mapping of keys to child Elements
	    */
				var getKeyMap = function getKeyMap(el) {
					var data = getData(el);
	
					if (!data.keyMap) {
						data.keyMap = createKeyMap(el);
					}
	
					return data.keyMap;
				};
	
				/**
	    * Retrieves a child from the parent with the given key.
	    * @param {?Node} parent
	    * @param {?string=} key
	    * @return {?Node} The child corresponding to the key.
	    */
				var getChild = function getChild(parent, key) {
					return key ? getKeyMap(parent)[key] : null;
				};
	
				/**
	    * Registers an element as being a child. The parent will keep track of the
	    * child using the key. The child can be retrieved using the same key using
	    * getKeyMap. The provided key should be unique within the parent Element.
	    * @param {?Node} parent The parent of child.
	    * @param {string} key A key to identify the child with.
	    * @param {!Node} child The child to register.
	    */
				var registerChild = function registerChild(parent, key, child) {
					getKeyMap(parent)[key] = child;
				};
	
				/**
	    * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
	    *
	    * Licensed under the Apache License, Version 2.0 (the "License");
	    * you may not use this file except in compliance with the License.
	    * You may obtain a copy of the License at
	    *
	    *      http://www.apache.org/licenses/LICENSE-2.0
	    *
	    * Unless required by applicable law or agreed to in writing, software
	    * distributed under the License is distributed on an "AS-IS" BASIS,
	    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	    * See the License for the specific language governing permissions and
	    * limitations under the License.
	    */
	
				/** @const */
				var notifications = {
					/**
	     * Called after patch has compleated with any Nodes that have been created
	     * and added to the DOM.
	     * @type {?function(Array<!Node>)}
	     */
					nodesCreated: null,
	
					/**
	     * Called after patch has compleated with any Nodes that have been removed
	     * from the DOM.
	     * Note it's an applications responsibility to handle any childNodes.
	     * @type {?function(Array<!Node>)}
	     */
					nodesDeleted: null
				};
	
				/**
	    * Keeps track of the state of a patch.
	    * @constructor
	    */
				function Context() {
					/**
	     * @type {(Array<!Node>|undefined)}
	     */
					this.created = notifications.nodesCreated && [];
	
					/**
	     * @type {(Array<!Node>|undefined)}
	     */
					this.deleted = notifications.nodesDeleted && [];
				}
	
				/**
	    * @param {!Node} node
	    */
				Context.prototype.markCreated = function (node) {
					if (this.created) {
						this.created.push(node);
					}
				};
	
				/**
	    * @param {!Node} node
	    */
				Context.prototype.markDeleted = function (node) {
					if (this.deleted) {
						this.deleted.push(node);
					}
				};
	
				/**
	    * Notifies about nodes that were created during the patch opearation.
	    */
				Context.prototype.notifyChanges = function () {
					if (this.created && this.created.length > 0) {
						notifications.nodesCreated(this.created);
					}
	
					if (this.deleted && this.deleted.length > 0) {
						notifications.nodesDeleted(this.deleted);
					}
				};
	
				/**
	   * Makes sure that keyed Element matches the tag name provided.
	   * @param {!string} nodeName The nodeName of the node that is being matched.
	   * @param {string=} tag The tag name of the Element.
	   * @param {?string=} key The key of the Element.
	   */
				var assertKeyedTagMatches = function assertKeyedTagMatches(nodeName, tag, key) {
					if (nodeName !== tag) {
						throw new Error('Was expecting node with key "' + key + '" to be a ' + tag + ', not a ' + nodeName + '.');
					}
				};
	
				/** @type {?Context} */
				var context = null;
	
				/** @type {?Node} */
				var currentNode = null;
	
				/** @type {?Node} */
				var currentParent = null;
	
				/** @type {?Element|?DocumentFragment} */
				var root = null;
	
				/** @type {?Document} */
				var doc = null;
	
				/**
	    * Returns a patcher function that sets up and restores a patch context,
	    * running the run function with the provided data.
	    * @param {function((!Element|!DocumentFragment),!function(T),T=)} run
	    * @return {function((!Element|!DocumentFragment),!function(T),T=)}
	    * @template T
	    */
				var patchFactory = function patchFactory(run) {
					/**
	     * TODO(moz): These annotations won't be necessary once we switch to Closure
	     * Compiler's new type inference. Remove these once the switch is done.
	     *
	     * @param {(!Element|!DocumentFragment)} node
	     * @param {!function(T)} fn
	     * @param {T=} data
	     * @template T
	     */
					var f = function f(node, fn, data) {
						var prevContext = context;
						var prevRoot = root;
						var prevDoc = doc;
						var prevCurrentNode = currentNode;
						var prevCurrentParent = currentParent;
						var previousInAttributes = false;
						var previousInSkip = false;
	
						context = new Context();
						root = node;
						doc = node.ownerDocument;
						currentParent = node.parentNode;
	
						if (false) {}
	
						run(node, fn, data);
	
						if (false) {}
	
						context.notifyChanges();
	
						context = prevContext;
						root = prevRoot;
						doc = prevDoc;
						currentNode = prevCurrentNode;
						currentParent = prevCurrentParent;
					};
					return f;
				};
	
				/**
	    * Patches the document starting at node with the provided function. This
	    * function may be called during an existing patch operation.
	    * @param {!Element|!DocumentFragment} node The Element or Document
	    *     to patch.
	    * @param {!function(T)} fn A function containing elementOpen/elementClose/etc.
	    *     calls that describe the DOM.
	    * @param {T=} data An argument passed to fn to represent DOM state.
	    * @template T
	    */
				var patchInner = patchFactory(function (node, fn, data) {
					currentNode = node;
	
					enterNode();
					fn(data);
					exitNode();
	
					if (false) {}
				});
	
				/**
	    * Patches an Element with the the provided function. Exactly one top level
	    * element call should be made corresponding to `node`.
	    * @param {!Element} node The Element where the patch should start.
	    * @param {!function(T)} fn A function containing elementOpen/elementClose/etc.
	    *     calls that describe the DOM. This should have at most one top level
	    *     element call.
	    * @param {T=} data An argument passed to fn to represent DOM state.
	    * @template T
	    */
				var patchOuter = patchFactory(function (node, fn, data) {
					currentNode = /** @type {!Element} */{ nextSibling: node };
	
					fn(data);
	
					if (false) {}
				});
	
				/**
	    * Checks whether or not the current node matches the specified nodeName and
	    * key.
	    *
	    * @param {?string} nodeName The nodeName for this node.
	    * @param {?string=} key An optional key that identifies a node.
	    * @return {boolean} True if the node matches, false otherwise.
	    */
				var matches = function matches(nodeName, key) {
					var data = getData(currentNode);
	
					// Key check is done using double equals as we want to treat a null key the
					// same as undefined. This should be okay as the only values allowed are
					// strings, null and undefined so the == semantics are not too weird.
					return nodeName === data.nodeName && key == data.key;
				};
	
				/**
	    * Aligns the virtual Element definition with the actual DOM, moving the
	    * corresponding DOM node to the correct location or creating it if necessary.
	    * @param {string} nodeName For an Element, this should be a valid tag string.
	    *     For a Text, this should be #text.
	    * @param {?string=} key The key used to identify this element.
	    * @param {?Array<*>=} statics For an Element, this should be an array of
	    *     name-value pairs.
	    */
				var alignWithDOM = function alignWithDOM(nodeName, key, statics) {
					if (currentNode && matches(nodeName, key)) {
						return;
					}
	
					var node = undefined;
	
					// Check to see if the node has moved within the parent.
					if (key) {
						node = getChild(currentParent, key);
						if (node && 'production' !== 'production') {
							assertKeyedTagMatches(getData(node).nodeName, nodeName, key);
						}
					}
	
					// Create the node if it doesn't exist.
					if (!node) {
						if (nodeName === '#text') {
							node = createText(doc);
						} else {
							node = createElement(doc, currentParent, nodeName, key, statics);
						}
	
						if (key) {
							registerChild(currentParent, key, node);
						}
	
						context.markCreated(node);
					}
	
					// If the node has a key, remove it from the DOM to prevent a large number
					// of re-orders in the case that it moved far or was completely removed.
					// Since we hold on to a reference through the keyMap, we can always add it
					// back.
					if (currentNode && getData(currentNode).key) {
						currentParent.replaceChild(node, currentNode);
						getData(currentParent).keyMapValid = false;
					} else {
						currentParent.insertBefore(node, currentNode);
					}
	
					currentNode = node;
				};
	
				/**
	    * Clears out any unvisited Nodes, as the corresponding virtual element
	    * functions were never called for them.
	    */
				var clearUnvisitedDOM = function clearUnvisitedDOM() {
					var node = currentParent;
					var data = getData(node);
					var keyMap = data.keyMap;
					var keyMapValid = data.keyMapValid;
					var child = node.lastChild;
					var key = undefined;
	
					if (child === currentNode && keyMapValid) {
						return;
					}
	
					if (data.attrs[symbols.placeholder] && node !== root) {
						if (false) {}
						return;
					}
	
					while (child !== currentNode) {
						node.removeChild(child);
						context.markDeleted( /** @type {!Node}*/child);
	
						key = getData(child).key;
						if (key) {
							delete keyMap[key];
						}
						child = node.lastChild;
					}
	
					// Clean the keyMap, removing any unusued keys.
					if (!keyMapValid) {
						for (key in keyMap) {
							child = keyMap[key];
							if (child.parentNode !== node) {
								context.markDeleted(child);
								delete keyMap[key];
							}
						}
	
						data.keyMapValid = true;
					}
				};
	
				/**
	    * Changes to the first child of the current node.
	    */
				var enterNode = function enterNode() {
					currentParent = currentNode;
					currentNode = null;
				};
	
				/**
	    * Changes to the next sibling of the current node.
	    */
				var nextNode = function nextNode() {
					if (currentNode) {
						currentNode = currentNode.nextSibling;
					} else {
						currentNode = currentParent.firstChild;
					}
				};
	
				/**
	    * Changes to the parent of the current node, removing any unvisited children.
	    */
				var exitNode = function exitNode() {
					clearUnvisitedDOM();
	
					currentNode = currentParent;
					currentParent = currentParent.parentNode;
				};
	
				/**
	    * Makes sure that the current node is an Element with a matching tagName and
	    * key.
	    *
	    * @param {string} tag The element's tag.
	    * @param {?string=} key The key used to identify this element. This can be an
	    *     empty string, but performance may be better if a unique value is used
	    *     when iterating over an array of items.
	    * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	    *     static attributes for the Element. These will only be set once when the
	    *     Element is created.
	    * @return {!Element} The corresponding Element.
	    */
				var coreElementOpen = function coreElementOpen(tag, key, statics) {
					nextNode();
					alignWithDOM(tag, key, statics);
					enterNode();
					return (/** @type {!Element} */currentParent
					);
				};
	
				/**
	    * Closes the currently open Element, removing any unvisited children if
	    * necessary.
	    *
	    * @return {!Element} The corresponding Element.
	    */
				var coreElementClose = function coreElementClose() {
					if (false) {}
	
					exitNode();
					return (/** @type {!Element} */currentNode
					);
				};
	
				/**
	    * Makes sure the current node is a Text node and creates a Text node if it is
	    * not.
	    *
	    * @return {!Text} The corresponding Text Node.
	    */
				var coreText = function coreText() {
					nextNode();
					alignWithDOM('#text', null, null);
					return (/** @type {!Text} */currentNode
					);
				};
	
				/**
	    * Gets the current Element being patched.
	    * @return {!Element}
	    */
				var currentElement = function currentElement() {
					if (false) {}
					return (/** @type {!Element} */currentParent
					);
				};
	
				/**
	    * Skips the children in a subtree, allowing an Element to be closed without
	    * clearing out the children.
	    */
				var skip = function skip() {
					if (false) {}
					currentNode = currentParent.lastChild;
				};
	
				/**
	    * The offset in the virtual element declaration where the attributes are
	    * specified.
	    * @const
	    */
				var ATTRIBUTES_OFFSET = 3;
	
				/**
	    * Builds an array of arguments for use with elementOpenStart, attr and
	    * elementOpenEnd.
	    * @const {Array<*>}
	    */
				var argsBuilder = [];
	
				/**
	    * @param {string} tag The element's tag.
	    * @param {?string=} key The key used to identify this element. This can be an
	    *     empty string, but performance may be better if a unique value is used
	    *     when iterating over an array of items.
	    * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	    *     static attributes for the Element. These will only be set once when the
	    *     Element is created.
	    * @param {...*} const_args Attribute name/value pairs of the dynamic attributes
	    *     for the Element.
	    * @return {!Element} The corresponding Element.
	    */
				var elementOpen = function elementOpen(tag, key, statics, const_args) {
					if (false) {}
	
					var node = coreElementOpen(tag, key, statics);
					var data = getData(node);
	
					/*
	     * Checks to see if one or more attributes have changed for a given Element.
	     * When no attributes have changed, this is much faster than checking each
	     * individual argument. When attributes have changed, the overhead of this is
	     * minimal.
	     */
					var attrsArr = data.attrsArr;
					var newAttrs = data.newAttrs;
					var attrsChanged = false;
					var i = ATTRIBUTES_OFFSET;
					var j = 0;
	
					for (; i < arguments.length; i += 1, j += 1) {
						if (attrsArr[j] !== arguments[i]) {
							attrsChanged = true;
							break;
						}
					}
	
					for (; i < arguments.length; i += 1, j += 1) {
						attrsArr[j] = arguments[i];
					}
	
					if (j < attrsArr.length) {
						attrsChanged = true;
						attrsArr.length = j;
					}
	
					/*
	     * Actually perform the attribute update.
	     */
					if (attrsChanged) {
						for (i = ATTRIBUTES_OFFSET; i < arguments.length; i += 2) {
							newAttrs[arguments[i]] = arguments[i + 1];
						}
	
						for (var _attr in newAttrs) {
							updateAttribute(node, _attr, newAttrs[_attr]);
							newAttrs[_attr] = undefined;
						}
					}
	
					return node;
				};
	
				/**
	    * Declares a virtual Element at the current location in the document. This
	    * corresponds to an opening tag and a elementClose tag is required. This is
	    * like elementOpen, but the attributes are defined using the attr function
	    * rather than being passed as arguments. Must be folllowed by 0 or more calls
	    * to attr, then a call to elementOpenEnd.
	    * @param {string} tag The element's tag.
	    * @param {?string=} key The key used to identify this element. This can be an
	    *     empty string, but performance may be better if a unique value is used
	    *     when iterating over an array of items.
	    * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	    *     static attributes for the Element. These will only be set once when the
	    *     Element is created.
	    */
				var elementOpenStart = function elementOpenStart(tag, key, statics) {
					if (false) {}
	
					argsBuilder[0] = tag;
					argsBuilder[1] = key;
					argsBuilder[2] = statics;
				};
	
				/***
	    * Defines a virtual attribute at this point of the DOM. This is only valid
	    * when called between elementOpenStart and elementOpenEnd.
	    *
	    * @param {string} name
	    * @param {*} value
	    */
				var attr = function attr(name, value) {
					if (false) {}
	
					argsBuilder.push(name, value);
				};
	
				/**
	    * Closes an open tag started with elementOpenStart.
	    * @return {!Element} The corresponding Element.
	    */
				var elementOpenEnd = function elementOpenEnd() {
					if (false) {}
	
					var node = elementOpen.apply(null, argsBuilder);
					argsBuilder.length = 0;
					return node;
				};
	
				/**
	    * Closes an open virtual Element.
	    *
	    * @param {string} tag The element's tag.
	    * @return {!Element} The corresponding Element.
	    */
				var elementClose = function elementClose(tag) {
					if (false) {}
	
					var node = coreElementClose();
	
					if (false) {}
	
					return node;
				};
	
				/**
	    * Declares a virtual Element at the current location in the document that has
	    * no children.
	    * @param {string} tag The element's tag.
	    * @param {?string=} key The key used to identify this element. This can be an
	    *     empty string, but performance may be better if a unique value is used
	    *     when iterating over an array of items.
	    * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	    *     static attributes for the Element. These will only be set once when the
	    *     Element is created.
	    * @param {...*} const_args Attribute name/value pairs of the dynamic attributes
	    *     for the Element.
	    * @return {!Element} The corresponding Element.
	    */
				var elementVoid = function elementVoid(tag, key, statics, const_args) {
					elementOpen.apply(null, arguments);
					return elementClose(tag);
				};
	
				/**
	    * Declares a virtual Element at the current location in the document that is a
	    * placeholder element. Children of this Element can be manually managed and
	    * will not be cleared by the library.
	    *
	    * A key must be specified to make sure that this node is correctly preserved
	    * across all conditionals.
	    *
	    * @param {string} tag The element's tag.
	    * @param {string} key The key used to identify this element.
	    * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	    *     static attributes for the Element. These will only be set once when the
	    *     Element is created.
	    * @param {...*} const_args Attribute name/value pairs of the dynamic attributes
	    *     for the Element.
	    * @return {!Element} The corresponding Element.
	    */
				var elementPlaceholder = function elementPlaceholder(tag, key, statics, const_args) {
					if (false) {}
	
					elementOpen.apply(null, arguments);
					skip();
					return elementClose(tag);
				};
	
				/**
	    * Declares a virtual Text at this point in the document.
	    *
	    * @param {string|number|boolean} value The value of the Text.
	    * @param {...(function((string|number|boolean)):string)} const_args
	    *     Functions to format the value which are called only when the value has
	    *     changed.
	    * @return {!Text} The corresponding text node.
	    */
				var text = function text(value, const_args) {
					if (false) {}
	
					var node = coreText();
					var data = getData(node);
	
					if (data.text !== value) {
						data.text = /** @type {string} */value;
	
						var formatted = value;
						for (var i = 1; i < arguments.length; i += 1) {
							/*
	       * Call the formatter function directly to prevent leaking arguments.
	       * https://github.com/google/incremental-dom/pull/204#issuecomment-178223574
	       */
							var fn = arguments[i];
							formatted = fn(formatted);
						}
	
						node.data = formatted;
					}
	
					return node;
				};
	
				exports.patch = patchInner;
				exports.patchInner = patchInner;
				exports.patchOuter = patchOuter;
				exports.currentElement = currentElement;
				exports.skip = skip;
				exports.elementVoid = elementVoid;
				exports.elementOpenStart = elementOpenStart;
				exports.elementOpenEnd = elementOpenEnd;
				exports.elementOpen = elementOpen;
				exports.elementClose = elementClose;
				exports.elementPlaceholder = elementPlaceholder;
				exports.text = text;
				exports.attr = attr;
				exports.symbols = symbols;
				exports.attributes = attributes;
				exports.applyAttr = applyAttr;
				exports.applyProp = applyProp;
				exports.notifications = notifications;
	
				//# sourceMappingURL=incremental-dom-cjs.js.map
	
				/***/
			},
			/* 9 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				exports.default = function (object, props) {
					return function (func) {
						return function () {
							var saved = enter(object, props);
							var result = func.apply(undefined, arguments);
							exit(object, saved);
							return result;
						};
					};
				};
	
				var _assign = __webpack_require__(2);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function enter(object, props) {
					var saved = {};
					Object.keys(props).forEach(function (key) {
						saved[key] = object[key];
						object[key] = props[key];
					});
					return saved;
				}
	
				function exit(object, saved) {
					(0, _assign2.default)(object, saved);
				}
	
				// Decorates a function with a side effect that changes the properties of an
				// object during its execution, and restores them after. There is no error
				// handling here, if the wrapped function throws an error, properties are not
				// restored and all bets are off.
	
				/***/
			},
			/* 10 */
			/***/function (module, exports) {
	
				/* WEBPACK VAR INJECTION */(function (global) {
					'use strict';
	
					module.exports = (typeof self === 'undefined' ? 'undefined' : _typeof2(self)) === 'object' && self.self === self && self || (typeof global === 'undefined' ? 'undefined' : _typeof2(global)) === 'object' && global.global === global && global || this;
	
					/* WEBPACK VAR INJECTION */
				}).call(exports, function () {
					return this;
				}());
	
				/***/
			},
			/* 11 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _Object$create;
	
				var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				};
	
				var _incrementalDom = __webpack_require__(8);
	
				var _symbols = __webpack_require__(6);
	
				var _data = __webpack_require__(12);
	
				var _data2 = _interopRequireDefault(_data);
	
				var _dashCase = __webpack_require__(13);
	
				var _dashCase2 = _interopRequireDefault(_dashCase);
	
				var _debounce = __webpack_require__(14);
	
				var _debounce2 = _interopRequireDefault(_debounce);
	
				var _empty = __webpack_require__(4);
	
				var _empty2 = _interopRequireDefault(_empty);
	
				var _getAllKeys = __webpack_require__(3);
	
				var _getAllKeys2 = _interopRequireDefault(_getAllKeys);
	
				var _getOwnPropertyDescriptors = __webpack_require__(16);
	
				var _getOwnPropertyDescriptors2 = _interopRequireDefault(_getOwnPropertyDescriptors);
	
				var _props = __webpack_require__(17);
	
				var _props2 = _interopRequireDefault(_props);
	
				var _propsInit = __webpack_require__(18);
	
				var _propsInit2 = _interopRequireDefault(_propsInit);
	
				var _prop = __webpack_require__(23);
	
				var _prop2 = _interopRequireDefault(_prop);
	
				var _syncPropToAttr = __webpack_require__(22);
	
				var _syncPropToAttr2 = _interopRequireDefault(_syncPropToAttr);
	
				var _windowOrGlobal = __webpack_require__(10);
	
				var _windowOrGlobal2 = _interopRequireDefault(_windowOrGlobal);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _defineProperty(obj, key, value) {
					if (key in obj) {
						Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
					} else {
						obj[key] = value;
					}return obj;
				}
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
				}
	
				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}
	
				var HTMLElement = _windowOrGlobal2.default.HTMLElement;
	
				var htmlElementPrototype = HTMLElement ? HTMLElement.prototype : {};
	
				// function syncPropsToAttrs (elem) {
				//   //todo: these are just the original propConfigs
				//   const props = elem.constructor.props;
				//   Object.keys(props).forEach((propName) => {
				//     const prop = props[propName];
				//     syncPropToAttr(elem, prop, propName, true);
				//   });
				// }
	
				// Ensures that definitions passed as part of the constructor are functions
				// that return property definitions used on the element.
				function ensurePropertyFunctions(Ctor) {
					var props = Ctor.props;
	
					return (0, _getAllKeys2.default)(props).reduce(function (result, propName) {
						var propConfig = props[propName];
						if (typeof propConfig !== 'function') {
							result[propName] = (0, _propsInit2.default)(propConfig);
						} else {
							//already a function; just cast it
							result[propName] = propConfig;
						}
						return result;
					}, {});
				}
	
				// Ensures the property definitions are transformed to objects that can be used
				// to create properties on the element.
				function ensurePropertyDefinitions(Ctor) {
					var props = ensurePropertyFunctions(Ctor);
					return (0, _getAllKeys2.default)(props).reduce(function (result, propName) {
						result[propName] = props[propName](propName);
						return result;
					}, {});
				}
	
				//returns a function that will create all the properties
				function createInitProps(Ctor) {
					var props = ensurePropertyDefinitions(Ctor);
	
					return function (elem) {
						if (!props) {
							return;
						}
	
						(0, _getAllKeys2.default)(props).forEach(function (name) {
							var prop = props[name];
							prop.created(elem);
	
							// We check here before defining to see if the prop was specified prior
							// to upgrading.
							var hasPropBeforeUpgrading = name in elem;
	
							// This is saved prior to defining so that we can set it after it it was
							// defined prior to upgrading. We don't want to invoke the getter if we
							// don't need to, so we only get the value if we need to re-sync.
							var valueBeforeUpgrading = hasPropBeforeUpgrading && elem[name];
	
							// https://bugs.webkit.org/show_bug.cgi?id=49739
							//
							// When Webkit fixes that bug so that native property accessors can be
							// retrieved, we can move defining the property to the prototype and away
							// from having to do if for every instance as all other browsers support
							// this.
							Object.defineProperty(elem, name, prop);
	
							// We re-set the prop if it was specified prior to upgrading because we
							// need to ensure set() is triggered both in polyfilled environments and
							// in native where the definition may be registerd after elements it
							// represents have already been created.
							if (hasPropBeforeUpgrading) {
								elem[name] = valueBeforeUpgrading;
							}
						});
					};
				}
	
				function Component() {
					for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
						args[_key] = arguments[_key];
					}
	
					var elem = (typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === 'object' ? Reflect.construct(HTMLElement, args, this.constructor) : HTMLElement.call(this, args[0]);
	
					var elemData = (0, _data2.default)(elem);
					var readyCallbacks = elemData.readyCallbacks;
					var constructor = elem.constructor;
	
					console.log('Component constructor', elem);
	
					// Ensures that this can never be called twice.
					if (elem[_symbols.created]) {
						return;
					}
	
					elem[_symbols.created] = true;
	
					if (!constructor[_symbols.props]) {
						constructor[_symbols.props] = createInitProps(constructor);
					}
	
					// Set up a renderer that is debounced for property sets to call directly.
					elem[_symbols.rendererDebounced] = (0, _debounce2.default)(elem[_symbols.renderer].bind(elem));
	
					// Set up property lifecycle.
					if (constructor.props && constructor[_symbols.props]) {
						constructor[_symbols.props](elem);
					}
	
					// DEPRECATED static render()
					if (!elem.renderCallback && constructor.render) {
						elem.renderCallback = constructor.render.bind(constructor, elem);
					}
	
					// Props should be set up before calling this.
					if (typeof constructor.created === 'function') {
						constructor.created(elem);
					}
	
					// Created should be set before invoking the ready listeners.
					if (readyCallbacks) {
						readyCallbacks.forEach(function (cb) {
							return cb(elem);
						});
						delete elemData.readyCallbacks;
					}
	
					return elem;
				}
	
				Object.defineProperties(Component, {
					// Custom Elements v1
					observedAttributes: (0, _prop2.default)({
						get: function get() {
							var props = this.props;
							return Object.keys(props).map(function (key) {
								var attribute = props[key].attribute;
	
								return attribute === true ? (0, _dashCase2.default)(key) : attribute;
							}).filter(Boolean);
						},
	
						override: 'observedAttributes'
					}),
	
					// Skate
					props: (0, _prop2.default)({ value: {} })
	
					// // Skate
					// // returns cached prop configs for the current class
					// propConfigs: prop({
					//   get () {
					//     const { constructor } = this;
					//     if (!constructor.hasOwnProperty('_propConfigs')) {
					//       console.log('this.props', this.props);
					//       constructor._propConfigs = this.props || {};
					//     }
					//     return constructor._propConfigs;
					//   }
					// })
	
				});
	
				// Skate
				Component.extend = function extend() {
					var definition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
					var Base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
	
					// Create class for the user.
					var Ctor = function (_Base) {
						_inherits(Ctor, _Base);
	
						function Ctor() {
							_classCallCheck(this, Ctor);
	
							return _possibleConstructorReturn(this, (Ctor.__proto__ || Object.getPrototypeOf(Ctor)).apply(this, arguments));
						}
	
						return Ctor;
					}(Base);
	
					// Pass on statics from the Base if not supported (IE 9 and 10).
	
	
					if (!Ctor.observedAttributes) {
						var staticOpts = (0, _getOwnPropertyDescriptors2.default)(Base);
						delete staticOpts.length;
						delete staticOpts.prototype;
						Object.defineProperties(Ctor, staticOpts);
					}
	
					// For inheriting from the object literal.
					var opts = (0, _getOwnPropertyDescriptors2.default)(definition);
					var prot = (0, _getOwnPropertyDescriptors2.default)(definition.prototype);
	
					// Prototype is non configurable (but is writable).
					delete opts.prototype;
	
					// Pass on static and instance members from the definition.
					Object.defineProperties(Ctor, opts);
					Object.defineProperties(Ctor.prototype, prot);
	
					return Ctor;
				};
	
				// Skate
				//
				// DEPRECATED
				//
				// Move this to rendererCallback() before removing.
				Component.updated = function _updated(elem, prev) {
					if (!prev) {
						return true;
					}
	
					// use get all keys so that we check Symbols as well as regular props
					// using a for loop so we can break early
					var allKeys = (0, _getAllKeys2.default)(prev);
					for (var i = 0; i < allKeys.length; i += 1) {
						if (prev[allKeys[i]] !== elem[allKeys[i]]) {
							return true;
						}
					}
	
					return false;
				};
	
				// Skate
				//
				// DEPRECATED
				//
				// Move this to rendererCallback() before removing.
				Component.rendered = function _rendered() {};
	
				// Skate
				//
				// DEPRECATED
				//
				// Move this to rendererCallback() before removing.
				Component.renderer = function _renderer(elem) {
					if (!elem.shadowRoot) {
						elem.attachShadow({ mode: 'open' });
	
						console.log('elem.shadowRoot', _typeof(elem.shadowRoot), elem.shadowRoot);
						console.log('innerHTML', elem.shadowRoot.innerHTML);
					}
					(0, _incrementalDom.patchInner)(elem.shadowRoot, function () {
						var possibleFn = elem.renderCallback();
						if (typeof possibleFn === 'function') {
							possibleFn();
						} else if (Array.isArray(possibleFn)) {
							possibleFn.forEach(function (fn) {
								if (typeof fn === 'function') {
									fn();
								}
							});
						}
					});
				};
	
				Component.prototype = Object.create(htmlElementPrototype, (_Object$create = {
					// Custom Elements v1
					connectedCallback: (0, _prop2.default)({
						value: function value() {
							//syncPropsToAttrs(this);
	
							this[_symbols.connected] = true;
							this[_symbols.rendererDebounced]();
	
							// DEPRECATED static attached()
							var constructor = this.constructor;
	
							if (typeof constructor.attached === 'function') {
								constructor.attached(this);
							}
	
							this.setAttribute('defined', '');
						}
					}),
	
					// Custom Elements v1
					disconnectedCallback: (0, _prop2.default)({
						value: function value() {
							var constructor = this.constructor;
	
							this[_symbols.connected] = false;
	
							// DEPRECATED static detached()
							if (typeof constructor.detached === 'function') {
								constructor.detached(this);
							}
						}
					}),
	
					// Custom Elements v1
					attributeChangedCallback: (0, _prop2.default)({
						value: function value(name, oldValue, newValue) {
							console.log('sk.attributeChangedCallback', name, 'from', oldValue, 'to', newValue);
							var propertyName = (0, _data2.default)(this, 'attributeLinks')[name];
							if (propertyName) {
								var propData = (0, _data2.default)(this, 'props')[propertyName];
								var internalValue = propData.internalValue;
	
								var propOpts = this.constructor.props[propertyName];
								var serializedValue = propOpts.serialize(internalValue);
								var changed = !((0, _empty2.default)(serializedValue) && (0, _empty2.default)(newValue) || serializedValue === newValue);
								if (changed) {
									// Sync up the property.
									var newPropVal = newValue !== null && propOpts.deserialize ? propOpts.deserialize(newValue) : newValue;
									this[propertyName] = newPropVal;
								} else {
									console.log('sk.attributeChangedCallback NOT changed');
								}
							}
	
							// Call deprecated attributeChanged
							var attributeChanged = this.constructor.attributeChanged;
	
							if (attributeChanged) {
								attributeChanged(this, { name: name, newValue: newValue, oldValue: oldValue });
							}
						}
					}),
	
					// Skate
					//
					// Maps to the static updated() callback. That logic should be moved here
					// when that is finally removed.
					updatedCallback: (0, _prop2.default)({
						value: function value(prev) {
							return this.constructor.updated(this, prev);
						}
					}),
	
					// Skate
					//
					// Maps to the static render() callback. That logic should be moved here
					// when that is finally removed.
					renderCallback: (0, _prop2.default)({
						value: null
					}),
	
					// Skate
					//
					// Maps to the static rendered() callback. That logic should be moved here
					// when that is finally removed.
					renderedCallback: (0, _prop2.default)({
						value: function value() {
							return this.constructor.rendered(this);
						}
					}),
	
					// Skate
					//
					// Maps to the static renderer() callback. That logic should be moved here
					// when that is finally removed.
					rendererCallback: (0, _prop2.default)({
						value: function value() {
							return this.constructor.renderer(this);
						}
					})
	
				}, _defineProperty(_Object$create, _symbols.renderer, (0, _prop2.default)({
					value: function value() {
						if (this[_symbols.rendering] || !this[_symbols.connected]) {
							return;
						}
	
						// Flag as rendering. This prevents anything from trying to render - or
						// queueing a render - while there is a pending render.
						this[_symbols.rendering] = true;
	
						if (this[_symbols.updated]() && typeof this.renderCallback === 'function') {
							this.rendererCallback();
							this.renderedCallback();
						}
	
						this[_symbols.rendering] = false;
					}
				})), _defineProperty(_Object$create, _symbols.updated, (0, _prop2.default)({
					value: function value() {
						var prev = this[_symbols.props];
						this[_symbols.props] = (0, _props2.default)(this);
						return this.updatedCallback(prev);
					}
				})), _Object$create));
	
				exports.default = Component;
	
				/***/
			},
			/* 12 */
			/***/function (module, exports) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				exports.default = function (elem) {
					var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
					var data = elem.__SKATE_DATA || (elem.__SKATE_DATA = {});
					return namespace && (data[namespace] || (data[namespace] = {})) || data; // eslint-disable-line no-mixed-operators
				};
	
				/***/
			},
			/* 13 */
			/***/function (module, exports) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				exports.default = function (str) {
					return str.split(/([A-Z])/).reduce(function (one, two, idx) {
						var dash = !one || idx % 2 === 0 ? '' : '-';
						return '' + one + dash + two.toLowerCase();
					});
				};
	
				/***/
			},
			/* 14 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _native = __webpack_require__(15);
	
				var _native2 = _interopRequireDefault(_native);
	
				var _windowOrGlobal = __webpack_require__(10);
	
				var _windowOrGlobal2 = _interopRequireDefault(_windowOrGlobal);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _toConsumableArray(arr) {
					if (Array.isArray(arr)) {
						for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
							arr2[i] = arr[i];
						}return arr2;
					} else {
						return Array.from(arr);
					}
				}
	
				var MutationObserver = _windowOrGlobal2.default.MutationObserver;
	
				function microtaskDebounce(cbFunc) {
					var scheduled = false;
					var i = 0;
					var cbArgs = [];
					var elem = document.createElement('span');
					var observer = new MutationObserver(function () {
						cbFunc.apply(undefined, _toConsumableArray(cbArgs));
						scheduled = false;
						cbArgs = null;
					});
	
					observer.observe(elem, { childList: true });
	
					return function () {
						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
							args[_key] = arguments[_key];
						}
	
						cbArgs = args;
						if (!scheduled) {
							scheduled = true;
							elem.textContent = '' + i;
							i += 1;
						}
					};
				}
	
				// We have to use setTimeout() for IE9 and 10 because the Mutation Observer
				// polyfill requires that the element be in the document to trigger Mutation
				// Events. Mutation Events are also synchronous and thus wouldn't debounce.
				//
				// The soonest we can set the timeout for in IE is 1 as they have issues when
				// setting to 0.
				function taskDebounce(cbFunc) {
					var scheduled = false;
					var cbArgs = [];
					return function () {
						for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
							args[_key2] = arguments[_key2];
						}
	
						cbArgs = args;
						if (!scheduled) {
							scheduled = true;
							//todo: why we don't use requestAnimationFrame instead of setTimeout?
							setTimeout(function () {
								scheduled = false;
								cbFunc.apply(undefined, _toConsumableArray(cbArgs));
							}, 1);
						}
					};
				}
				exports.default = (0, _native2.default)(MutationObserver) ? microtaskDebounce : taskDebounce;
	
				/***/
			},
			/* 15 */
			/***/function (module, exports) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				var nativeHints = ['native code', '[object MutationObserverConstructor]' // for mobile safari iOS 9.0
				];
	
				exports.default = function (fn) {
					return nativeHints.map(function (hint) {
						return (fn || '').toString().indexOf([hint]) > -1;
					}).reduce(function (a, b) {
						return a || b;
					});
				};
	
				/***/
			},
			/* 16 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				exports.default = function () {
					var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
					return (0, _getAllKeys2.default)(obj).reduce(function (prev, curr) {
						prev[curr] = Object.getOwnPropertyDescriptor(obj, curr);
						return prev;
					}, {});
				};
	
				var _getAllKeys = __webpack_require__(3);
	
				var _getAllKeys2 = _interopRequireDefault(_getAllKeys);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				/***/
			},
			/* 17 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				exports.default = function (elem, newProps) {
					return typeof newProps === 'undefined' ? get(elem) : set(elem, newProps);
				};
	
				var _symbols = __webpack_require__(6);
	
				var _assign = __webpack_require__(2);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _getAllKeys = __webpack_require__(3);
	
				var _getAllKeys2 = _interopRequireDefault(_getAllKeys);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function get(elem) {
					var props = {};
					(0, _getAllKeys2.default)(elem.constructor.props).forEach(function (key) {
						props[key] = elem[key];
					});
	
					return props;
				}
	
				function set(elem, newProps) {
					(0, _assign2.default)(elem, newProps);
					if (elem[_symbols.renderer]) {
						elem[_symbols.renderer]();
					}
				}
	
				/***/
			},
			/* 18 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				};
	
				exports.default = function (opts) {
					opts = opts || {};
	
					// question: where in the code we create a descriptor to be the coerce function?
					// it looks like this is never the case since if the descriptor is already a function
					// props-init is not called.
					if (typeof opts === 'function') {
						opts = { coerce: opts };
					}
	
					return function (name) {
						return createNativePropertyDefinition(name, (0, _assign2.default)({
							default: null, //note: default is null and not undefined!
							deserialize: function deserialize(value) {
								return value;
							},
							serialize: function serialize(value) {
								return value;
							}
						}, opts));
					};
				};
	
				var _symbols = __webpack_require__(6);
	
				var _assign = __webpack_require__(2);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _data = __webpack_require__(12);
	
				var _data2 = _interopRequireDefault(_data);
	
				var _empty = __webpack_require__(4);
	
				var _empty2 = _interopRequireDefault(_empty);
	
				var _dashCase = __webpack_require__(13);
	
				var _dashCase2 = _interopRequireDefault(_dashCase);
	
				var _getDefaultValue = __webpack_require__(19);
	
				var _getDefaultValue2 = _interopRequireDefault(_getDefaultValue);
	
				var _getInitialValue = __webpack_require__(20);
	
				var _getInitialValue2 = _interopRequireDefault(_getInitialValue);
	
				var _getPropData = __webpack_require__(21);
	
				var _getPropData2 = _interopRequireDefault(_getPropData);
	
				var _syncPropToAttr = __webpack_require__(22);
	
				var _syncPropToAttr2 = _interopRequireDefault(_syncPropToAttr);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function createNativePropertyDefinition(name, opts) {
					var nativePropDef = {
						configurable: true,
						enumerable: true,
	
						//called just before actually creating the native property with Object.defineProperty
						created: function created(elem) {
							var propData = (0, _getPropData2.default)(elem, name);
							var attributeName = opts.attribute === true ? (0, _dashCase2.default)(name) : String(opts.attribute);
							var initialValue = elem[name];
	
							// Store property to attribute link information.
							(0, _data2.default)(elem, 'attributeLinks')[attributeName] = name;
							(0, _data2.default)(elem, 'propertyLinks')[name] = attributeName;
	
							// Set up initial value if it wasn't specified.
							if ((0, _empty2.default)(initialValue)) {
								if (attributeName && elem.hasAttribute(attributeName)) {
									initialValue = opts.deserialize(elem.getAttribute(attributeName));
								} else if ('initial' in opts) {
									initialValue = (0, _getInitialValue2.default)(elem, name, opts);
								} else if ('default' in opts) {
									initialValue = (0, _getDefaultValue2.default)(elem, name, opts);
								}
							}
							if (opts.coerce) {
								initialValue = opts.coerce(initialValue);
							}
							console.log('init prop', name, 'internalValue', typeof initialValue === 'undefined' ? 'undefined' : _typeof(initialValue), initialValue);
							propData.internalValue = initialValue;
						},
	
						get: function get() {
							var propData = (0, _getPropData2.default)(this, name);
							var internalValue = propData.internalValue;
	
							return typeof opts.get === 'function' ? opts.get(this, { name: name, internalValue: internalValue }) : internalValue;
						},
	
						set: function set(newValue) {
							var propData = (0, _getPropData2.default)(this, name);
							propData.lastAssignedValue = newValue;
							var oldValue = propData.oldValue;
	
							if ((0, _empty2.default)(oldValue)) {
								oldValue = null; //todo: here empty is normalized to null and not to undefined?
							}
	
							if ((0, _empty2.default)(newValue)) {
								newValue = (0, _getDefaultValue2.default)(this, name, opts);
							}
	
							// Note: coerce is optional
							if (typeof opts.coerce === 'function') {
								newValue = opts.coerce(newValue);
							}
	
							var changeData = { name: name, newValue: newValue, oldValue: oldValue };
	
							if (typeof opts.set === 'function') {
								opts.set(this, changeData);
							}
	
							console.log('sk.set prop', name, 'to:', typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue), newValue, 'was:', typeof oldValue === 'undefined' ? 'undefined' : _typeof(oldValue), oldValue);
							// Queue a re-render.
							this[_symbols.rendererDebounced](this);
	
							// Update prop data so we can use it next time.
							propData.internalValue = propData.oldValue = newValue;
	
							// Link up the attribute.
							if (this[_symbols.connected]) {
								(0, _syncPropToAttr2.default)(this, opts, name, false);
							}
						}
					};
					return nativePropDef;
				}
	
				// given a property descriptor returns a function that will create
				// the native property definition that is later passed to Object.createProperty as the third argument
	
				/***/
			},
			/* 19 */
			/***/function (module, exports) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = getDefaultValue;
				function getDefaultValue(elem, name, opts) {
					return typeof opts.default === 'function' ? opts.default(elem, { name: name }) : opts.default;
				}
	
				/***/
			},
			/* 20 */
			/***/function (module, exports) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = getInitialValue;
				function getInitialValue(elem, name, opts) {
					return typeof opts.initial === 'function' ? opts.initial(elem, { name: name }) : opts.initial;
				}
	
				/***/
			},
			/* 21 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = getPropData;
	
				var _data = __webpack_require__(12);
	
				var _data2 = _interopRequireDefault(_data);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				// returns the data bag for given element and property name
				function getPropData(elem, name) {
					var elemPropsData = (0, _data2.default)(elem, 'props');
					return elemPropsData[name] || (elemPropsData[name] = {});
				}
	
				/***/
			},
			/* 22 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				};
	
				exports.default = syncPropToAttr;
	
				var _data = __webpack_require__(12);
	
				var _data2 = _interopRequireDefault(_data);
	
				var _empty = __webpack_require__(4);
	
				var _empty2 = _interopRequireDefault(_empty);
	
				var _getDefaultValue = __webpack_require__(19);
	
				var _getDefaultValue2 = _interopRequireDefault(_getDefaultValue);
	
				var _getInitialValue = __webpack_require__(20);
	
				var _getInitialValue2 = _interopRequireDefault(_getInitialValue);
	
				var _getPropData = __webpack_require__(21);
	
				var _getPropData2 = _interopRequireDefault(_getPropData);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function syncFirstTimeProp(elem, prop, propName, attributeName, propData) {
					var syncAttrValue = propData.lastAssignedValue;
					if ((0, _empty2.default)(syncAttrValue)) {
						if ('initial' in prop) {
							syncAttrValue = (0, _getInitialValue2.default)(elem, propName, prop);
						} else if ('default' in prop) {
							syncAttrValue = (0, _getDefaultValue2.default)(elem, propName, prop);
						}
					}
					// if (!empty(syncAttrValue) && prop.serialize) {
					if (!(0, _empty2.default)(syncAttrValue)) {
						syncAttrValue = prop.serialize(syncAttrValue);
					}
					console.log('syncFirstTimeProp', propName, typeof syncAttrValue === 'undefined' ? 'undefined' : _typeof(syncAttrValue), syncAttrValue);
					if (!(0, _empty2.default)(syncAttrValue)) {
						//todo: why we need to flag syncingAttribute?
						//propData.syncingAttribute = true;
						elem.setAttribute(attributeName, syncAttrValue);
					}
					// else {
					//   elem.removeAttribute(attributeName);
					// }
				}
	
				function syncExistingPropToAttr(elem, prop, propName, attributeName, propData) {
					console.log('syncExistingPropToAttr', propName);
	
					// if (attributeName && !propData.settingAttribute) {
					var internalValue = propData.internalValue;
	
					var serializedValue = prop.serialize(internalValue);
					var currentAttrValue = elem.getAttribute(attributeName);
					var serializedIsEmpty = (0, _empty2.default)(serializedValue);
					var attributeChanged = !(serializedIsEmpty && (0, _empty2.default)(currentAttrValue) || serializedValue === currentAttrValue);
					//todo: why if the lastAssignedValue is empty we remove the attribute?
					// const shouldRemoveAttribute = empty(propData.lastAssignedValue);
					// if (shouldRemoveAttribute || serializedIsEmpty) {
					//   elem.removeAttribute(attributeName);
					// } else {
					//   elem.setAttribute(attributeName, serializedValue);
					// }
					if (attributeChanged) {
						if (serializedIsEmpty) {
							elem.removeAttribute(attributeName);
						} else {
							elem.setAttribute(attributeName, serializedValue);
						}
					}
	
					// if (!attributeChanged && propData.syncingAttribute) {
					//   propData.syncingAttribute = false;
					// }
					// }
	
					// // Allow the attribute to be linked again.
					// propData.settingAttribute = false;
				}
	
				function syncPropToAttr(elem, prop, propName, isFirstSync) {
					var attributeName = (0, _data2.default)(elem, 'propertyLinks')[propName];
					if (attributeName) {
						var propData = (0, _getPropData2.default)(elem, propName);
						if (isFirstSync) {
							syncFirstTimeProp(elem, prop, propName, attributeName, propData);
						} else {
							syncExistingPropToAttr(elem, prop, propName, attributeName, propData);
						}
					}
				}
	
				/***/
			},
			/* 23 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _assign = __webpack_require__(2);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				// returns a propertyDescriptor based on the given options object
				exports.default = function (opts) {
					opts = (0, _assign2.default)({
						configurable: true,
						enumerable: true,
						writable: !(opts.get || opts.set)
					}, opts);
					if ('writable' in opts && (opts.get || opts.set)) {
						// if get or set is present then writable is not allowed
						delete opts.writable;
					}
					if (opts.override) {
						opts.set = function set(value) {
							Object.defineProperty(this, opts.override, {
								value: value,
								writable: true
							});
						};
					}
					return opts;
				};
	
				/***/
			},
			/* 24 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				};
	
				exports.default = function (name, opts) {
					var customElements = _windowOrGlobal2.default.customElements;
	
					if (!customElements) {
						throw new Error('Skate requires native custom element support or a polyfill.');
					}
	
					// Support passing an anonymous definition.
					if (!opts) {
						opts = name;
						name = null;
					}
	
					// Unique IDs.
					if (!name || customElements.get(name)) {
						name = (0, _uniqueId2.default)(name);
					}
	
					// Object literals.
					if ((typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) === 'object') {
						opts = _component2.default.extend(opts);
					}
	
					// This allows us to check this before instantiating the custom element to
					// find its name from the constructor in the vdom module, thus improving
					// performance but still falling back to a robust method.
					opts[_symbols.name] = name;
	
					customElements.define(name, opts, opts.extends ? { extends: opts.extends } : null);
					return opts;
				};
	
				var _symbols = __webpack_require__(6);
	
				var _component = __webpack_require__(11);
	
				var _component2 = _interopRequireDefault(_component);
	
				var _uniqueId = __webpack_require__(25);
	
				var _uniqueId2 = _interopRequireDefault(_uniqueId);
	
				var _windowOrGlobal = __webpack_require__(10);
	
				var _windowOrGlobal2 = _interopRequireDefault(_windowOrGlobal);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				/***/
			},
			/* 25 */
			/***/function (module, exports) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = uniqueId;
				function uniqueId(prefix) {
					// http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript/2117523#2117523
					var rand = 'xxxxxxxx'.replace(/[xy]/g, function (c) {
						var r = Math.random() * 16 | 0;
						// eslint-disable-next-line no-mixed-operators
						var v = c === 'x' ? r : r & 0x3 | 0x8;
						return v.toString(16);
					});
					return (prefix || 'x') + '-' + rand;
				}
	
				/***/
			},
			/* 26 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				exports.default = function (elem, name) {
					var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
					if (opts.bubbles === undefined) {
						opts.bubbles = true;
					}
					if (opts.cancelable === undefined) {
						opts.cancelable = true;
					}
					if (opts.composed === undefined) {
						opts.composed = true;
					}
					return elem.dispatchEvent(createCustomEvent(name, opts));
				};
	
				var _windowOrGlobal = __webpack_require__(10);
	
				var _windowOrGlobal2 = _interopRequireDefault(_windowOrGlobal);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				var Event = function (TheEvent) {
					if (TheEvent) {
						try {
							new TheEvent('emit-init'); // eslint-disable-line no-new
						} catch (e) {
							return undefined;
						}
					}
					return TheEvent;
				}(_windowOrGlobal2.default.Event);
	
				function createCustomEvent(name) {
					var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
					var detail = opts.detail;
	
					delete opts.detail;
	
					var e = void 0;
					if (Event) {
						e = new Event(name, opts);
						Object.defineProperty(e, 'detail', { value: detail });
					} else {
						e = document.createEvent('CustomEvent');
						Object.defineProperty(e, 'composed', { value: opts.composed });
						e.initCustomEvent(name, opts.bubbles, opts.cancelable, detail);
					}
					return e;
				}
	
				/***/
			},
			/* 27 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				exports.default = function (elem, target) {
					return function (e) {
						var value = getValue(e.target);
						var localTarget = target || e.target.name || 'value';
	
						if (localTarget.indexOf('.') > -1) {
							var parts = localTarget.split('.');
							var firstPart = parts[0];
							var propName = parts.pop();
							var obj = parts.reduce(function (prev, curr) {
								return prev && prev[curr];
							}, elem);
	
							obj[propName || e.target.name] = value;
							(0, _props4.default)(elem, _defineProperty({}, firstPart, elem[firstPart]));
						} else {
							(0, _props4.default)(elem, _defineProperty({}, localTarget, value));
						}
					};
				};
	
				var _props3 = __webpack_require__(17);
	
				var _props4 = _interopRequireDefault(_props3);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _defineProperty(obj, key, value) {
					if (key in obj) {
						Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
					} else {
						obj[key] = value;
					}return obj;
				}
	
				function getValue(elem) {
					var type = elem.type;
					if (type === 'checkbox' || type === 'radio') {
						return elem.checked ? elem.value || true : false;
					}
					return elem.value;
				}
	
				/***/
			},
			/* 28 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				exports.default = function (elem, done) {
					var info = (0, _data2.default)(elem);
					if (elem[_symbols.created]) {
						done(elem);
					} else if (info.readyCallbacks) {
						info.readyCallbacks.push(done);
					} else {
						info.readyCallbacks = [done];
					}
				};
	
				var _symbols = __webpack_require__(6);
	
				var _data = __webpack_require__(12);
	
				var _data2 = _interopRequireDefault(_data);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				/***/
			}
			/******/])
		);
	});
	;
	//# sourceMappingURL=index-with-deps.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 3)(module)))

/***/ },
/* 3 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ])
});
;
//# sourceMappingURL=photon-core.js.map
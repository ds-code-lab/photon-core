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

	__webpack_require__(/*! ./lib/shadydom.min.js */1);
	__webpack_require__(/*! document-register-element */2);
	module.exports = __webpack_require__(/*! ./src/index.js */3);


/***/ },
/* 1 */
/*!*****************************!*\
  !*** ./lib/shadydom.min.js ***!
  \*****************************/
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function () {
	  'use strict';
	
	  /**
	  @license
	  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
	  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	  Code distributed by Google as part of the polymer project is also
	  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	  */
	
	  var settings = window.ShadyDOM || {};
	
	  settings.hasNativeShadowDOM = Boolean(Element.prototype.attachShadow && Node.prototype.getRootNode);
	
	  settings.inUse = settings.force || !settings.hasNativeShadowDOM;
	
	  function isShadyRoot(obj) {
	    return Boolean(obj.__localName === 'ShadyRoot');
	  }
	
	  var p = Element.prototype;
	  var matches = p.matches || p.matchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector || p.webkitMatchesSelector;
	
	  function matchesSelector(element, selector) {
	    return matches.call(element, selector);
	  }
	
	  function copyOwnProperty(name, source, target) {
	    var pd = Object.getOwnPropertyDescriptor(source, name);
	    if (pd) {
	      Object.defineProperty(target, name, pd);
	    }
	  }
	
	  function extend(target, source) {
	    if (target && source) {
	      var n$ = Object.getOwnPropertyNames(source);
	      for (var i = 0, n; i < n$.length && (n = n$[i]); i++) {
	        copyOwnProperty(n, source, target);
	      }
	    }
	    return target || source;
	  }
	
	  function extendAll(target) {
	    var sources = [],
	        len = arguments.length - 1;
	    while (len-- > 0) {
	      sources[len] = arguments[len + 1];
	    }for (var i = 0; i < sources.length; i++) {
	      extend(target, sources[i]);
	    }
	    return target;
	  }
	
	  function mixin(target, source) {
	    for (var i in source) {
	      target[i] = source[i];
	    }
	    return target;
	  }
	
	  var setPrototypeOf = Object.setPrototypeOf || function (obj, proto) {
	    obj.__proto__ = proto;
	    return obj;
	  };
	
	  function patchPrototype(obj, mixin) {
	    var proto = Object.getPrototypeOf(obj);
	    if (!proto.hasOwnProperty('__patchProto')) {
	      var patchProto = Object.create(proto);
	      patchProto.__sourceProto = proto;
	      extend(patchProto, mixin);
	      proto.__patchProto = patchProto;
	    }
	    setPrototypeOf(obj, proto.__patchProto);
	  }
	
	  var common = {};
	
	  // TODO(sorvell): actually rely on a real Promise polyfill...
	  var promish;
	  if (window.Promise) {
	    promish = Promise.resolve();
	  } else {
	    promish = {
	      then: function then(cb) {
	        var twiddle = document.createTextNode('');
	        var observer = new MutationObserver(function () {
	          observer.disconnect();
	          cb();
	        });
	        observer.observe(twiddle, { characterData: true });
	      }
	    };
	  }
	
	  /**
	  @license
	  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
	  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	  Code distributed by Google as part of the polymer project is also
	  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	  */
	
	  function newSplice(index, removed, addedCount) {
	    return {
	      index: index,
	      removed: removed,
	      addedCount: addedCount
	    };
	  }
	
	  var EDIT_LEAVE = 0;
	  var EDIT_UPDATE = 1;
	  var EDIT_ADD = 2;
	  var EDIT_DELETE = 3;
	
	  var ArraySplice = {
	
	    // Note: This function is *based* on the computation of the Levenshtein
	    // "edit" distance. The one change is that "updates" are treated as two
	    // edits - not one. With Array splices, an update is really a delete
	    // followed by an add. By retaining this, we optimize for "keeping" the
	    // maximum array items in the original array. For example:
	    //
	    //   'xxxx123' -> '123yyyy'
	    //
	    // With 1-edit updates, the shortest path would be just to update all seven
	    // characters. With 2-edit updates, we delete 4, leave 3, and add 4. This
	    // leaves the substring '123' intact.
	    calcEditDistances: function calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd) {
	      var this$1 = this;
	
	      // "Deletion" columns
	      var rowCount = oldEnd - oldStart + 1;
	      var columnCount = currentEnd - currentStart + 1;
	      var distances = new Array(rowCount);
	
	      // "Addition" rows. Initialize null column.
	      for (var i = 0; i < rowCount; i++) {
	        distances[i] = new Array(columnCount);
	        distances[i][0] = i;
	      }
	
	      // Initialize null row
	      for (var j = 0; j < columnCount; j++) {
	        distances[0][j] = j;
	      }for (var i$1 = 1; i$1 < rowCount; i$1++) {
	        for (var j$1 = 1; j$1 < columnCount; j$1++) {
	          if (this$1.equals(current[currentStart + j$1 - 1], old[oldStart + i$1 - 1])) distances[i$1][j$1] = distances[i$1 - 1][j$1 - 1];else {
	            var north = distances[i$1 - 1][j$1] + 1;
	            var west = distances[i$1][j$1 - 1] + 1;
	            distances[i$1][j$1] = north < west ? north : west;
	          }
	        }
	      }
	
	      return distances;
	    },
	
	    // This starts at the final weight, and walks "backward" by finding
	    // the minimum previous weight recursively until the origin of the weight
	    // matrix.
	    spliceOperationsFromEditDistances: function spliceOperationsFromEditDistances(distances) {
	      var i = distances.length - 1;
	      var j = distances[0].length - 1;
	      var current = distances[i][j];
	      var edits = [];
	      while (i > 0 || j > 0) {
	        if (i == 0) {
	          edits.push(EDIT_ADD);
	          j--;
	          continue;
	        }
	        if (j == 0) {
	          edits.push(EDIT_DELETE);
	          i--;
	          continue;
	        }
	        var northWest = distances[i - 1][j - 1];
	        var west = distances[i - 1][j];
	        var north = distances[i][j - 1];
	
	        var min;
	        if (west < north) min = west < northWest ? west : northWest;else min = north < northWest ? north : northWest;
	
	        if (min == northWest) {
	          if (northWest == current) {
	            edits.push(EDIT_LEAVE);
	          } else {
	            edits.push(EDIT_UPDATE);
	            current = northWest;
	          }
	          i--;
	          j--;
	        } else if (min == west) {
	          edits.push(EDIT_DELETE);
	          i--;
	          current = west;
	        } else {
	          edits.push(EDIT_ADD);
	          j--;
	          current = north;
	        }
	      }
	
	      edits.reverse();
	      return edits;
	    },
	
	    /**
	     * Splice Projection functions:
	     *
	     * A splice map is a representation of how a previous array of items
	     * was transformed into a new array of items. Conceptually it is a list of
	     * tuples of
	     *
	     *   <index, removed, addedCount>
	     *
	     * which are kept in ascending index order of. The tuple represents that at
	     * the |index|, |removed| sequence of items were removed, and counting forward
	     * from |index|, |addedCount| items were added.
	     */
	
	    /**
	     * Lacking individual splice mutation information, the minimal set of
	     * splices can be synthesized given the previous state and final state of an
	     * array. The basic approach is to calculate the edit distance matrix and
	     * choose the shortest path through it.
	     *
	     * Complexity: O(l * p)
	     *   l: The length of the current array
	     *   p: The length of the old array
	     */
	    calcSplices: function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
	      var prefixCount = 0;
	      var suffixCount = 0;
	      var splice;
	
	      var minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
	      if (currentStart == 0 && oldStart == 0) prefixCount = this.sharedPrefix(current, old, minLength);
	
	      if (currentEnd == current.length && oldEnd == old.length) suffixCount = this.sharedSuffix(current, old, minLength - prefixCount);
	
	      currentStart += prefixCount;
	      oldStart += prefixCount;
	      currentEnd -= suffixCount;
	      oldEnd -= suffixCount;
	
	      if (currentEnd - currentStart == 0 && oldEnd - oldStart == 0) return [];
	
	      if (currentStart == currentEnd) {
	        splice = newSplice(currentStart, [], 0);
	        while (oldStart < oldEnd) {
	          splice.removed.push(old[oldStart++]);
	        }return [splice];
	      } else if (oldStart == oldEnd) return [newSplice(currentStart, [], currentEnd - currentStart)];
	
	      var ops = this.spliceOperationsFromEditDistances(this.calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd));
	
	      splice = undefined;
	      var splices = [];
	      var index = currentStart;
	      var oldIndex = oldStart;
	      for (var i = 0; i < ops.length; i++) {
	        switch (ops[i]) {
	          case EDIT_LEAVE:
	            if (splice) {
	              splices.push(splice);
	              splice = undefined;
	            }
	
	            index++;
	            oldIndex++;
	            break;
	          case EDIT_UPDATE:
	            if (!splice) splice = newSplice(index, [], 0);
	
	            splice.addedCount++;
	            index++;
	
	            splice.removed.push(old[oldIndex]);
	            oldIndex++;
	            break;
	          case EDIT_ADD:
	            if (!splice) splice = newSplice(index, [], 0);
	
	            splice.addedCount++;
	            index++;
	            break;
	          case EDIT_DELETE:
	            if (!splice) splice = newSplice(index, [], 0);
	
	            splice.removed.push(old[oldIndex]);
	            oldIndex++;
	            break;
	        }
	      }
	
	      if (splice) {
	        splices.push(splice);
	      }
	      return splices;
	    },
	
	    sharedPrefix: function sharedPrefix(current, old, searchLength) {
	      var this$1 = this;
	
	      for (var i = 0; i < searchLength; i++) {
	        if (!this$1.equals(current[i], old[i])) return i;
	      }return searchLength;
	    },
	
	    sharedSuffix: function sharedSuffix(current, old, searchLength) {
	      var index1 = current.length;
	      var index2 = old.length;
	      var count = 0;
	      while (count < searchLength && this.equals(current[--index1], old[--index2])) {
	        count++;
	      }return count;
	    },
	
	    calculateSplices: function calculateSplices$1(current, previous) {
	      return this.calcSplices(current, 0, current.length, previous, 0, previous.length);
	    },
	
	    equals: function equals(currentValue, previousValue) {
	      return currentValue === previousValue;
	    }
	
	  };
	
	  var calculateSplices = function calculateSplices(current, previous) {
	    return ArraySplice.calculateSplices(current, previous);
	  };
	
	  /**
	  @license
	  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
	  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	  Code distributed by Google as part of the polymer project is also
	  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	  */
	
	  // TODO(sorvell): circular (patch loads tree and tree loads patch)
	  // for now this is stuck on `utils`
	  //import {patchNode} from './patch'
	  // native add/remove
	  var nativeInsertBefore = Element.prototype.insertBefore;
	  var nativeAppendChild = Element.prototype.appendChild;
	  var nativeRemoveChild = Element.prototype.removeChild;
	
	  /**
	   * `tree` is a dom manipulation library used by ShadyDom to
	   * manipulate composed and logical trees.
	   */
	  var tree = {
	
	    // sad but faster than slice...
	    arrayCopyChildNodes: function arrayCopyChildNodes(parent) {
	      var copy = [],
	          i = 0;
	      for (var n = parent.firstChild; n; n = n.nextSibling) {
	        copy[i++] = n;
	      }
	      return copy;
	    },
	
	    arrayCopyChildren: function arrayCopyChildren(parent) {
	      var copy = [],
	          i = 0;
	      for (var n = parent.firstElementChild; n; n = n.nextElementSibling) {
	        copy[i++] = n;
	      }
	      return copy;
	    },
	
	    arrayCopy: function arrayCopy(a$) {
	      var l = a$.length;
	      var copy = new Array(l);
	      for (var i = 0; i < l; i++) {
	        copy[i] = a$[i];
	      }
	      return copy;
	    },
	
	    saveChildNodes: function saveChildNodes(node) {
	      tree.Logical.saveChildNodes(node);
	      if (!tree.Composed.hasParentNode(node)) {
	        tree.Composed.saveComposedData(node);
	        //tree.Composed.saveParentNode(node);
	      }
	      tree.Composed.saveChildNodes(node);
	    }
	
	  };
	
	  tree.Logical = {
	
	    hasParentNode: function hasParentNode(node) {
	      return Boolean(node.__dom && node.__dom.parentNode);
	    },
	
	    hasChildNodes: function hasChildNodes(node) {
	      return Boolean(node.__dom && node.__dom.childNodes !== undefined);
	    },
	
	    getChildNodes: function getChildNodes(node) {
	      // note: we're distinguishing here between undefined and false-y:
	      // hasChildNodes uses undefined check to see if this element has logical
	      // children; the false-y check indicates whether or not we should rebuild
	      // the cached childNodes array.
	      return this.hasChildNodes(node) ? this._getChildNodes(node) : tree.Composed.getChildNodes(node);
	    },
	
	    _getChildNodes: function _getChildNodes(node) {
	      if (!node.__dom.childNodes) {
	        node.__dom.childNodes = [];
	        for (var n = this.getFirstChild(node); n; n = this.getNextSibling(n)) {
	          node.__dom.childNodes.push(n);
	        }
	      }
	      return node.__dom.childNodes;
	    },
	
	    // NOTE: __dom can be created under 2 conditions: (1) an element has a
	    // logical tree, or (2) an element is in a logical tree. In case (1), the
	    // element will store firstChild/lastChild, and in case (2), the element
	    // will store parentNode, nextSibling, previousSibling. This means that
	    // the mere existence of __dom is not enough to know if the requested
	    // logical data is available and instead we do an explicit undefined check.
	    getParentNode: function getParentNode(node) {
	      return node.__dom && node.__dom.parentNode !== undefined ? node.__dom.parentNode : tree.Composed.getParentNode(node);
	    },
	
	    getFirstChild: function getFirstChild(node) {
	      return node.__dom && node.__dom.firstChild !== undefined ? node.__dom.firstChild : tree.Composed.getFirstChild(node);
	    },
	
	    getLastChild: function getLastChild(node) {
	      return node.__dom && node.__dom.lastChild !== undefined ? node.__dom.lastChild : tree.Composed.getLastChild(node);
	    },
	
	    getNextSibling: function getNextSibling(node) {
	      return node.__dom && node.__dom.nextSibling !== undefined ? node.__dom.nextSibling : tree.Composed.getNextSibling(node);
	    },
	
	    getPreviousSibling: function getPreviousSibling(node) {
	      return node.__dom && node.__dom.previousSibling !== undefined ? node.__dom.previousSibling : tree.Composed.getPreviousSibling(node);
	    },
	
	    getFirstElementChild: function getFirstElementChild(node) {
	      return node.__dom && node.__dom.firstChild !== undefined ? this._getFirstElementChild(node) : tree.Composed.getFirstElementChild(node);
	    },
	
	    _getFirstElementChild: function _getFirstElementChild(node) {
	      var n = node.__dom.firstChild;
	      while (n && n.nodeType !== Node.ELEMENT_NODE) {
	        n = n.__dom.nextSibling;
	      }
	      return n;
	    },
	
	    getLastElementChild: function getLastElementChild(node) {
	      return node.__dom && node.__dom.lastChild !== undefined ? this._getLastElementChild(node) : tree.Composed.getLastElementChild(node);
	    },
	
	    _getLastElementChild: function _getLastElementChild(node) {
	      var n = node.__dom.lastChild;
	      while (n && n.nodeType !== Node.ELEMENT_NODE) {
	        n = n.__dom.previousSibling;
	      }
	      return n;
	    },
	
	    getNextElementSibling: function getNextElementSibling(node) {
	      return node.__dom && node.__dom.nextSibling !== undefined ? this._getNextElementSibling(node) : tree.Composed.getNextElementSibling(node);
	    },
	
	    _getNextElementSibling: function _getNextElementSibling(node) {
	      var this$1 = this;
	
	      var n = node.__dom.nextSibling;
	      while (n && n.nodeType !== Node.ELEMENT_NODE) {
	        n = this$1.getNextSibling(n);
	      }
	      return n;
	    },
	
	    getPreviousElementSibling: function getPreviousElementSibling(node) {
	      return node.__dom && node.__dom.previousSibling !== undefined ? this._getPreviousElementSibling(node) : tree.Composed.getPreviousElementSibling(node);
	    },
	
	    _getPreviousElementSibling: function _getPreviousElementSibling(node) {
	      var this$1 = this;
	
	      var n = node.__dom.previousSibling;
	      while (n && n.nodeType !== Node.ELEMENT_NODE) {
	        n = this$1.getPreviousSibling(n);
	      }
	      return n;
	    },
	
	    // Capture the list of light children. It's important to do this before we
	    // start transforming the DOM into "rendered" state.
	    // Children may be added to this list dynamically. It will be treated as the
	    // source of truth for the light children of the element. This element's
	    // actual children will be treated as the rendered state once this function
	    // has been called.
	    saveChildNodes: function saveChildNodes$1(node) {
	      if (!this.hasChildNodes(node)) {
	        node.__dom = node.__dom || {};
	        node.__dom.firstChild = node.firstChild;
	        node.__dom.lastChild = node.lastChild;
	        var c$ = node.__dom.childNodes = tree.arrayCopyChildNodes(node);
	        for (var i = 0, n; i < c$.length && (n = c$[i]); i++) {
	          n.__dom = n.__dom || {};
	          n.__dom.parentNode = node;
	          n.__dom.nextSibling = c$[i + 1] || null;
	          n.__dom.previousSibling = c$[i - 1] || null;
	          common.patchNode(n);
	        }
	      }
	    },
	
	    // TODO(sorvell): may need to patch saveChildNodes iff the tree has
	    // already been distributed.
	    // NOTE: ensure `node` is patched...
	    recordInsertBefore: function recordInsertBefore(node, container, ref_node) {
	      var this$1 = this;
	
	      container.__dom.childNodes = null;
	      // handle document fragments
	      if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
	        var c$ = tree.arrayCopyChildNodes(node);
	        for (var i = 0; i < c$.length; i++) {
	          this$1._linkNode(c$[i], container, ref_node);
	        }
	        // cleanup logical dom in doc fragment.
	        node.__dom = node.__dom || {};
	        node.__dom.firstChild = node.__dom.lastChild = null;
	        node.__dom.childNodes = null;
	      } else {
	        this._linkNode(node, container, ref_node);
	      }
	    },
	
	    _linkNode: function _linkNode(node, container, ref_node) {
	      common.patchNode(node);
	      ref_node = ref_node || null;
	      node.__dom = node.__dom || {};
	      container.__dom = container.__dom || {};
	      if (ref_node) {
	        ref_node.__dom = ref_node.__dom || {};
	      }
	      // update ref_node.previousSibling <-> node
	      node.__dom.previousSibling = ref_node ? ref_node.__dom.previousSibling : container.__dom.lastChild;
	      if (node.__dom.previousSibling) {
	        node.__dom.previousSibling.__dom.nextSibling = node;
	      }
	      // update node <-> ref_node
	      node.__dom.nextSibling = ref_node;
	      if (node.__dom.nextSibling) {
	        node.__dom.nextSibling.__dom.previousSibling = node;
	      }
	      // update node <-> container
	      node.__dom.parentNode = container;
	      if (ref_node) {
	        if (ref_node === container.__dom.firstChild) {
	          container.__dom.firstChild = node;
	        }
	      } else {
	        container.__dom.lastChild = node;
	        if (!container.__dom.firstChild) {
	          container.__dom.firstChild = node;
	        }
	      }
	      // remove caching of childNodes
	      container.__dom.childNodes = null;
	    },
	
	    recordRemoveChild: function recordRemoveChild(node, container) {
	      node.__dom = node.__dom || {};
	      container.__dom = container.__dom || {};
	      if (node === container.__dom.firstChild) {
	        container.__dom.firstChild = node.__dom.nextSibling;
	      }
	      if (node === container.__dom.lastChild) {
	        container.__dom.lastChild = node.__dom.previousSibling;
	      }
	      var p = node.__dom.previousSibling;
	      var n = node.__dom.nextSibling;
	      if (p) {
	        p.__dom = p.__dom || {};
	        p.__dom.nextSibling = n;
	      }
	      if (n) {
	        n.__dom = n.__dom || {};
	        n.__dom.previousSibling = p;
	      }
	      // When an element is removed, logical data is no longer tracked.
	      // Explicitly set `undefined` here to indicate this. This is disginguished
	      // from `null` which is set if info is null.
	      node.__dom.parentNode = node.__dom.previousSibling = node.__dom.nextSibling = null;
	      // remove caching of childNodes
	      container.__dom.childNodes = null;
	    }
	
	  };
	
	  // TODO(sorvell): composed tree manipulation is made available
	  // (1) to maninpulate the composed tree, and (2) to track changes
	  // to the tree for optional patching pluggability.
	  tree.Composed = {
	
	    hasParentNode: function hasParentNode$1(node) {
	      return Boolean(node.__dom && node.__dom.$parentNode !== undefined);
	    },
	
	    hasChildNodes: function hasChildNodes$1(node) {
	      return Boolean(node.__dom && node.__dom.$childNodes !== undefined);
	    },
	
	    getChildNodes: function getChildNodes$1(node) {
	      return this.hasChildNodes(node) ? this._getChildNodes(node) : !node.__patched && tree.arrayCopy(node.childNodes);
	    },
	
	    _getChildNodes: function _getChildNodes$1(node) {
	      if (!node.__dom.$childNodes) {
	        node.__dom.$childNodes = [];
	        for (var n = node.__dom.$firstChild; n; n = n.__dom.$nextSibling) {
	          node.__dom.$childNodes.push(n);
	        }
	      }
	      return node.__dom.$childNodes;
	    },
	
	    getComposedChildNodes: function getComposedChildNodes(node) {
	      return node.__dom.$childNodes;
	    },
	
	    getParentNode: function getParentNode$1(node) {
	      return this.hasParentNode(node) ? node.__dom.$parentNode : !node.__patched && node.parentNode;
	    },
	
	    getFirstChild: function getFirstChild$1(node) {
	      return node.__patched ? node.__dom.$firstChild : node.firstChild;
	    },
	
	    getLastChild: function getLastChild$1(node) {
	      return node.__patched ? node.__dom.$lastChild : node.lastChild;
	    },
	
	    getNextSibling: function getNextSibling$1(node) {
	      return node.__patched ? node.__dom.$nextSibling : node.nextSibling;
	    },
	
	    getPreviousSibling: function getPreviousSibling$1(node) {
	      return node.__patched ? node.__dom.$previousSibling : node.previousSibling;
	    },
	
	    getFirstElementChild: function getFirstElementChild$1(node) {
	      return node.__patched ? this._getFirstElementChild(node) : node.firstElementChild;
	    },
	
	    _getFirstElementChild: function _getFirstElementChild$1(node) {
	      var n = node.__dom.$firstChild;
	      while (n && n.nodeType !== Node.ELEMENT_NODE) {
	        n = n.__dom.$nextSibling;
	      }
	      return n;
	    },
	
	    getLastElementChild: function getLastElementChild$1(node) {
	      return node.__patched ? this._getLastElementChild(node) : node.lastElementChild;
	    },
	
	    _getLastElementChild: function _getLastElementChild$1(node) {
	      var n = node.__dom.$lastChild;
	      while (n && n.nodeType !== Node.ELEMENT_NODE) {
	        n = n.__dom.$previousSibling;
	      }
	      return n;
	    },
	
	    getNextElementSibling: function getNextElementSibling$1(node) {
	      return node.__patched ? this._getNextElementSibling(node) : node.nextElementSibling;
	    },
	
	    _getNextElementSibling: function _getNextElementSibling$1(node) {
	      var this$1 = this;
	
	      var n = node.__dom.$nextSibling;
	      while (n && n.nodeType !== Node.ELEMENT_NODE) {
	        n = this$1.getNextSibling(n);
	      }
	      return n;
	    },
	
	    getPreviousElementSibling: function getPreviousElementSibling$1(node) {
	      return node.__patched ? this._getPreviousElementSibling(node) : node.previousElementSibling;
	    },
	
	    _getPreviousElementSibling: function _getPreviousElementSibling$1(node) {
	      var this$1 = this;
	
	      var n = node.__dom.$previousSibling;
	      while (n && n.nodeType !== Node.ELEMENT_NODE) {
	        n = this$1.getPreviousSibling(n);
	      }
	      return n;
	    },
	
	    saveChildNodes: function saveChildNodes$2(node) {
	      var this$1 = this;
	
	      if (!this.hasChildNodes(node)) {
	        node.__dom = node.__dom || {};
	        node.__dom.$firstChild = node.firstChild;
	        node.__dom.$lastChild = node.lastChild;
	        var c$ = node.__dom.$childNodes = tree.arrayCopyChildNodes(node);
	        for (var i = 0, n; i < c$.length && (n = c$[i]); i++) {
	          this$1.saveComposedData(n);
	        }
	      }
	    },
	
	    saveComposedData: function saveComposedData(node) {
	      node.__dom = node.__dom || {};
	      if (node.__dom.$parentNode === undefined) {
	        node.__dom.$parentNode = node.parentNode;
	      }
	      if (node.__dom.$nextSibling === undefined) {
	        node.__dom.$nextSibling = node.nextSibling;
	      }
	      if (node.__dom.$previousSibling === undefined) {
	        node.__dom.$previousSibling = node.previousSibling;
	      }
	    },
	
	    recordInsertBefore: function recordInsertBefore$1(node, container, ref_node) {
	      var this$1 = this;
	
	      container.__dom.$childNodes = null;
	      // handle document fragments
	      if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
	        // TODO(sorvell): remember this for patching:
	        // the act of setting this info can affect patched nodes
	        // getters; therefore capture childNodes before patching.
	        for (var n = this.getFirstChild(node); n; n = this.getNextSibling(n)) {
	          this$1._linkNode(n, container, ref_node);
	        }
	      } else {
	        this._linkNode(node, container, ref_node);
	      }
	    },
	
	    _linkNode: function _linkNode$1(node, container, ref_node) {
	      node.__dom = node.__dom || {};
	      container.__dom = container.__dom || {};
	      if (ref_node) {
	        ref_node.__dom = ref_node.__dom || {};
	      }
	      // update ref_node.previousSibling <-> node
	      node.__dom.$previousSibling = ref_node ? ref_node.__dom.$previousSibling : container.__dom.$lastChild;
	      if (node.__dom.$previousSibling) {
	        node.__dom.$previousSibling.__dom.$nextSibling = node;
	      }
	      // update node <-> ref_node
	      node.__dom.$nextSibling = ref_node;
	      if (node.__dom.$nextSibling) {
	        node.__dom.$nextSibling.__dom.$previousSibling = node;
	      }
	      // update node <-> container
	      node.__dom.$parentNode = container;
	      if (ref_node) {
	        if (ref_node === container.__dom.$firstChild) {
	          container.__dom.$firstChild = node;
	        }
	      } else {
	        container.__dom.$lastChild = node;
	        if (!container.__dom.$firstChild) {
	          container.__dom.$firstChild = node;
	        }
	      }
	      // remove caching of childNodes
	      container.__dom.$childNodes = null;
	    },
	
	    recordRemoveChild: function recordRemoveChild$1(node, container) {
	      node.__dom = node.__dom || {};
	      container.__dom = container.__dom || {};
	      if (node === container.__dom.$firstChild) {
	        container.__dom.$firstChild = node.__dom.$nextSibling;
	      }
	      if (node === container.__dom.$lastChild) {
	        container.__dom.$lastChild = node.__dom.$previousSibling;
	      }
	      var p = node.__dom.$previousSibling;
	      var n = node.__dom.$nextSibling;
	      if (p) {
	        p.__dom = p.__dom || {};
	        p.__dom.$nextSibling = n;
	      }
	      if (n) {
	        n.__dom = n.__dom || {};
	        n.__dom.$previousSibling = p;
	      }
	      node.__dom.$parentNode = node.__dom.$previousSibling = node.__dom.$nextSibling = null;
	      // remove caching of childNodes
	      container.__dom.$childNodes = null;
	    },
	
	    clearChildNodes: function clearChildNodes(node) {
	      var this$1 = this;
	
	      var c$ = this.getChildNodes(node);
	      for (var i = 0, c; i < c$.length; i++) {
	        c = c$[i];
	        this$1.recordRemoveChild(c, node);
	        nativeRemoveChild.call(node, c);
	      }
	    },
	
	    saveParentNode: function saveParentNode(node) {
	      node.__dom = node.__dom || {};
	      node.__dom.$parentNode = node.parentNode;
	    },
	
	    insertBefore: function insertBefore(parentNode, newChild, refChild) {
	      this.saveChildNodes(parentNode);
	      // remove from current location.
	      this._addChild(parentNode, newChild, refChild);
	      return nativeInsertBefore.call(parentNode, newChild, refChild || null);
	    },
	
	    appendChild: function appendChild(parentNode, newChild) {
	      this.saveChildNodes(parentNode);
	      this._addChild(parentNode, newChild);
	      return nativeAppendChild.call(parentNode, newChild);
	    },
	
	    removeChild: function removeChild(parentNode, node) {
	      var currentParent = this.getParentNode(node);
	      this.saveChildNodes(parentNode);
	      this._removeChild(parentNode, node);
	      if (currentParent === parentNode) {
	        return nativeRemoveChild.call(parentNode, node);
	      }
	    },
	
	    _addChild: function _addChild(parentNode, newChild, refChild) {
	      var this$1 = this;
	
	      var isFrag = newChild.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
	      var oldParent = this.getParentNode(newChild);
	      if (oldParent) {
	        this._removeChild(oldParent, newChild);
	      }
	      if (isFrag) {
	        var c$ = this.getChildNodes(newChild);
	        for (var i = 0; i < c$.length; i++) {
	          var c = c$[i];
	          // unlink document fragment children
	          this$1._removeChild(newChild, c);
	          this$1.recordInsertBefore(c, parentNode, refChild);
	        }
	      } else {
	        this.recordInsertBefore(newChild, parentNode, refChild);
	      }
	    },
	
	    _removeChild: function _removeChild(parentNode, node) {
	      this.recordRemoveChild(node, parentNode);
	    }
	
	  };
	
	  // for testing...
	  var descriptors = {};
	  function getNativeProperty(element, property) {
	    if (!descriptors[property]) {
	      descriptors[property] = Object.getOwnPropertyDescriptor(HTMLElement.prototype, property) || Object.getOwnPropertyDescriptor(Element.prototype, property) || Object.getOwnPropertyDescriptor(Node.prototype, property);
	    }
	    return descriptors[property].get.call(element);
	  }
	
	  /**
	  @license
	  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
	  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	  Code distributed by Google as part of the polymer project is also
	  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	  */
	
	  // NOTE: normalize event contruction where necessary (IE11)
	  var NormalizedEvent = typeof Event === 'function' ? Event : function (inType, params) {
	    params = params || {};
	    var e = document.createEvent('Event');
	    e.initEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable));
	    return e;
	  };
	
	  var Distributor = function () {
	    function anonymous(root) {
	      this.root = root;
	      this.insertionPointTag = 'slot';
	    }
	
	    anonymous.prototype.getInsertionPoints = function getInsertionPoints() {
	      return this.root.querySelectorAll(this.insertionPointTag);
	    };
	
	    anonymous.prototype.hasInsertionPoint = function hasInsertionPoint() {
	      return Boolean(this.root._insertionPoints && this.root._insertionPoints.length);
	    };
	
	    anonymous.prototype.isInsertionPoint = function isInsertionPoint(node) {
	      return node.localName && node.localName == this.insertionPointTag;
	    };
	
	    anonymous.prototype.distribute = function distribute() {
	      if (this.hasInsertionPoint()) {
	        return this.distributePool(this.root, this.collectPool());
	      }
	      return [];
	    };
	
	    // Gather the pool of nodes that should be distributed. We will combine
	    // these with the "content root" to arrive at the composed tree.
	    anonymous.prototype.collectPool = function collectPool() {
	      return tree.arrayCopy(tree.Logical.getChildNodes(this.root.host));
	    };
	
	    // perform "logical" distribution; note, no actual dom is moved here,
	    // instead elements are distributed into storage
	    // array where applicable.
	    anonymous.prototype.distributePool = function distributePool(node, pool) {
	      var this$1 = this;
	
	      var dirtyRoots = [];
	      var p$ = this.root._insertionPoints;
	      for (var i = 0, l = p$.length, p; i < l && (p = p$[i]); i++) {
	        this$1.distributeInsertionPoint(p, pool);
	        // provoke redistribution on insertion point parents
	        // must do this on all candidate hosts since distribution in this
	        // scope invalidates their distribution.
	        // only get logical parent.
	        var parent = tree.Logical.getParentNode(p);
	        if (parent && parent.shadyRoot && this$1.hasInsertionPoint(parent.shadyRoot)) {
	          dirtyRoots.push(parent.shadyRoot);
	        }
	      }
	      for (var i$1 = 0; i$1 < pool.length; i$1++) {
	        var p$1 = pool[i$1];
	        if (p$1) {
	          p$1._assignedSlot = undefined;
	          // remove undistributed elements from physical dom.
	          var parent$1 = tree.Composed.getParentNode(p$1);
	          if (parent$1) {
	            tree.Composed.removeChild(parent$1, p$1);
	          }
	        }
	      }
	      return dirtyRoots;
	    };
	
	    anonymous.prototype.distributeInsertionPoint = function distributeInsertionPoint(insertionPoint, pool) {
	      var this$1 = this;
	
	      var prevAssignedNodes = insertionPoint._assignedNodes;
	      if (prevAssignedNodes) {
	        this.clearAssignedSlots(insertionPoint, true);
	      }
	      insertionPoint._assignedNodes = [];
	      var needsSlotChange = false;
	      // distribute nodes from the pool that this selector matches
	      var anyDistributed = false;
	      for (var i = 0, l = pool.length, node; i < l; i++) {
	        node = pool[i];
	        // skip nodes that were already used
	        if (!node) {
	          continue;
	        }
	        // distribute this node if it matches
	        if (this$1.matchesInsertionPoint(node, insertionPoint)) {
	          if (node.__prevAssignedSlot != insertionPoint) {
	            needsSlotChange = true;
	          }
	          this$1.distributeNodeInto(node, insertionPoint);
	          // remove this node from the pool
	          pool[i] = undefined;
	          // since at least one node matched, we won't need fallback content
	          anyDistributed = true;
	        }
	      }
	      // Fallback content if nothing was distributed here
	      if (!anyDistributed) {
	        var children = tree.Logical.getChildNodes(insertionPoint);
	        for (var j = 0, node$1; j < children.length; j++) {
	          node$1 = children[j];
	          if (node$1.__prevAssignedSlot != insertionPoint) {
	            needsSlotChange = true;
	          }
	          this$1.distributeNodeInto(node$1, insertionPoint);
	        }
	      }
	      // we're already dirty if a node was newly added to the slot
	      // and we're also dirty if the assigned count decreased.
	      if (prevAssignedNodes) {
	        // TODO(sorvell): the tracking of previously assigned slots
	        // could instead by done with a Set and then we could
	        // avoid needing to iterate here to clear the info.
	        for (var i$1 = 0; i$1 < prevAssignedNodes.length; i$1++) {
	          prevAssignedNodes[i$1].__prevAssignedSlot = null;
	        }
	        if (insertionPoint._assignedNodes.length < prevAssignedNodes.length) {
	          needsSlotChange = true;
	        }
	      }
	      this.setDistributedNodesOnInsertionPoint(insertionPoint);
	      if (needsSlotChange) {
	        this._fireSlotChange(insertionPoint);
	      }
	    };
	
	    anonymous.prototype.clearAssignedSlots = function clearAssignedSlots(slot, savePrevious) {
	      var n$ = slot._assignedNodes;
	      if (n$) {
	        for (var i = 0; i < n$.length; i++) {
	          var n = n$[i];
	          if (savePrevious) {
	            n.__prevAssignedSlot = n._assignedSlot;
	          }
	          // only clear if it was previously set to this slot;
	          // this helps ensure that if the node has otherwise been distributed
	          // ignore it.
	          if (n._assignedSlot === slot) {
	            n._assignedSlot = null;
	          }
	        }
	      }
	    };
	
	    anonymous.prototype.matchesInsertionPoint = function matchesInsertionPoint(node, insertionPoint) {
	      var slotName = insertionPoint.getAttribute('name');
	      slotName = slotName ? slotName.trim() : '';
	      var slot = node.getAttribute && node.getAttribute('slot');
	      slot = slot ? slot.trim() : '';
	      return slot == slotName;
	    };
	
	    anonymous.prototype.distributeNodeInto = function distributeNodeInto(child, insertionPoint) {
	      insertionPoint._assignedNodes.push(child);
	      child._assignedSlot = insertionPoint;
	    };
	
	    anonymous.prototype.setDistributedNodesOnInsertionPoint = function setDistributedNodesOnInsertionPoint(insertionPoint) {
	      var this$1 = this;
	
	      var n$ = insertionPoint._assignedNodes;
	      insertionPoint._distributedNodes = [];
	      for (var i = 0, n; i < n$.length && (n = n$[i]); i++) {
	        if (this$1.isInsertionPoint(n)) {
	          var d$ = n._distributedNodes;
	          if (d$) {
	            for (var j = 0; j < d$.length; j++) {
	              insertionPoint._distributedNodes.push(d$[j]);
	            }
	          }
	        } else {
	          insertionPoint._distributedNodes.push(n$[i]);
	        }
	      }
	    };
	
	    anonymous.prototype._fireSlotChange = function _fireSlotChange(insertionPoint) {
	      // NOTE: cannot bubble correctly here so not setting bubbles: true
	      // Safari tech preview does not bubble but chrome does
	      // Spec says it bubbles (https://dom.spec.whatwg.org/#mutation-observers)
	      insertionPoint.dispatchEvent(new NormalizedEvent('slotchange'));
	      if (insertionPoint._assignedSlot) {
	        this._fireSlotChange(insertionPoint._assignedSlot);
	      }
	    };
	
	    anonymous.prototype.isFinalDestination = function isFinalDestination(insertionPoint) {
	      return !insertionPoint._assignedSlot;
	    };
	
	    return anonymous;
	  }();
	
	  /**
	  @license
	  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
	  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	  Code distributed by Google as part of the polymer project is also
	  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	  */
	
	  /**
	    Implements a pared down version of ShadowDOM's scoping, which is easy to
	    polyfill across browsers.
	  */
	  var ShadyRoot = function ShadyRoot(host) {
	    if (!host) {
	      throw 'Must provide a host';
	    }
	    // NOTE: this strange construction is necessary because
	    // DocumentFragment cannot be subclassed on older browsers.
	    var frag = document.createDocumentFragment();
	    frag.__proto__ = ShadyFragmentMixin;
	    frag._init(host);
	    return frag;
	  };
	
	  var ShadyMixin = {
	
	    _init: function _init(host) {
	      // NOTE: set a fake local name so this element can be
	      // distinguished from a DocumentFragment when patching.
	      // FF doesn't allow this to be `localName`
	      this.__localName = 'ShadyRoot';
	      // root <=> host
	      host.shadyRoot = this;
	      this.host = host;
	      // logical dom setup
	      tree.Logical.saveChildNodes(host);
	      tree.Logical.saveChildNodes(this);
	      // state flags
	      this._clean = true;
	      this._hasRendered = false;
	      this._distributor = new Distributor(this);
	      this.update();
	    },
	
	    // async render the "top" distributor (this is all that is needed to
	    // distribute this host).
	    update: function update() {
	      // TODO(sorvell): instead the root should always be enqueued to helps record that it is dirty.
	      // Then, in `render`, the top most (in the distribution tree) "dirty" root should be rendered.
	      var distributionRoot = this._findDistributionRoot(this.host);
	      //console.log('update from', this.host, 'root', distributionRoot.host, distributionRoot._clean);
	      if (distributionRoot._clean) {
	        distributionRoot._clean = false;
	        enqueue(function () {
	          distributionRoot.render();
	        });
	      }
	    },
	
	    // TODO(sorvell): this may not return a shadowRoot (for example if the element is in a docFragment)
	    // this should only return a shadowRoot.
	    // returns the host that's the top of this host's distribution tree
	    _findDistributionRoot: function _findDistributionRoot(element) {
	      var root = element.shadyRoot;
	      while (element && this._elementNeedsDistribution(element)) {
	        root = element.getRootNode();
	        element = root && root.host;
	      }
	      return root;
	    },
	
	    // Return true if a host's children includes
	    // an insertion point that selects selectively
	    _elementNeedsDistribution: function _elementNeedsDistribution(element) {
	      var this$1 = this;
	
	      var c$ = tree.Logical.getChildNodes(element);
	      for (var i = 0, c; i < c$.length; i++) {
	        c = c$[i];
	        if (this$1._distributor.isInsertionPoint(c)) {
	          return element.getRootNode();
	        }
	      }
	    },
	
	    render: function render() {
	      if (!this._clean) {
	        this._clean = true;
	        if (!this._skipUpdateInsertionPoints) {
	          this.updateInsertionPoints();
	        } else if (!this._hasRendered) {
	          this._insertionPoints = [];
	        }
	        this._skipUpdateInsertionPoints = false;
	        // TODO(sorvell): previous ShadyDom had a fast path here
	        // that would avoid distribution for initial render if
	        // no insertion points exist. We cannot currently do this because
	        // it relies on elements being in the physical shadowRoot element
	        // so that native methods will be used. The current append code
	        // simply provokes distribution in this case and does not put the
	        // nodes in the shadowRoot. This could be done but we'll need to
	        // consider if the special processing is worth the perf gain.
	        // if (!this._hasRendered && !this._insertionPoints.length) {
	        //   tree.Composed.clearChildNodes(this.host);
	        //   tree.Composed.appendChild(this.host, this);
	        // } else {
	        // logical
	        this.distribute();
	        // physical
	        this.compose();
	        this._hasRendered = true;
	      }
	    },
	
	    forceRender: function forceRender() {
	      this._clean = false;
	      this.render();
	    },
	
	    distribute: function distribute() {
	      var dirtyRoots = this._distributor.distribute();
	      for (var i = 0; i < dirtyRoots.length; i++) {
	        dirtyRoots[i].forceRender();
	      }
	    },
	
	    updateInsertionPoints: function updateInsertionPoints() {
	      var this$1 = this;
	
	      var i$ = this.__insertionPoints;
	      // if any insertion points have been removed, clear their distribution info
	      if (i$) {
	        for (var i = 0, c; i < i$.length; i++) {
	          c = i$[i];
	          if (c.getRootNode() !== this$1) {
	            this$1._distributor.clearAssignedSlots(c);
	          }
	        }
	      }
	      i$ = this._insertionPoints = this._distributor.getInsertionPoints();
	      // ensure insertionPoints's and their parents have logical dom info.
	      // save logical tree info
	      // a. for shadyRoot
	      // b. for insertion points (fallback)
	      // c. for parents of insertion points
	      for (var i$1 = 0, c$1; i$1 < i$.length; i$1++) {
	        c$1 = i$[i$1];
	        tree.Logical.saveChildNodes(c$1);
	        tree.Logical.saveChildNodes(tree.Logical.getParentNode(c$1));
	      }
	    },
	
	    get _insertionPoints() {
	      if (!this.__insertionPoints) {
	        this.updateInsertionPoints();
	      }
	      return this.__insertionPoints || (this.__insertionPoints = []);
	    },
	
	    set _insertionPoints(insertionPoints) {
	      this.__insertionPoints = insertionPoints;
	    },
	
	    hasInsertionPoint: function hasInsertionPoint() {
	      return this._distributor.hasInsertionPoint();
	    },
	
	    compose: function compose() {
	      // compose self
	      // note: it's important to mark this clean before distribution
	      // so that attachment that provokes additional distribution (e.g.
	      // adding something to your parentNode) works
	      this._composeTree();
	      // TODO(sorvell): See fast paths here in Polymer v1
	      // (these seem unnecessary)
	    },
	
	    // Reify dom such that it is at its correct rendering position
	    // based on logical distribution.
	    _composeTree: function _composeTree() {
	      var this$1 = this;
	
	      this._updateChildNodes(this.host, this._composeNode(this.host));
	      var p$ = this._insertionPoints || [];
	      for (var i = 0, l = p$.length, p, parent; i < l && (p = p$[i]); i++) {
	        parent = tree.Logical.getParentNode(p);
	        if (parent !== this$1.host && parent !== this$1) {
	          this$1._updateChildNodes(parent, this$1._composeNode(parent));
	        }
	      }
	    },
	
	    // Returns the list of nodes which should be rendered inside `node`.
	    _composeNode: function _composeNode(node) {
	      var this$1 = this;
	
	      var children = [];
	      var c$ = tree.Logical.getChildNodes(node.shadyRoot || node);
	      for (var i = 0; i < c$.length; i++) {
	        var child = c$[i];
	        if (this$1._distributor.isInsertionPoint(child)) {
	          var distributedNodes = child._distributedNodes || (child._distributedNodes = []);
	          for (var j = 0; j < distributedNodes.length; j++) {
	            var distributedNode = distributedNodes[j];
	            if (this$1.isFinalDestination(child, distributedNode)) {
	              children.push(distributedNode);
	            }
	          }
	        } else {
	          children.push(child);
	        }
	      }
	      return children;
	    },
	
	    isFinalDestination: function isFinalDestination(insertionPoint, node) {
	      return this._distributor.isFinalDestination(insertionPoint, node);
	    },
	
	    // Ensures that the rendered node list inside `container` is `children`.
	    _updateChildNodes: function _updateChildNodes(container, children) {
	      var composed = tree.Composed.getChildNodes(container);
	      var splices = calculateSplices(children, composed);
	      // process removals
	      for (var i = 0, d = 0, s; i < splices.length && (s = splices[i]); i++) {
	        for (var j = 0, n; j < s.removed.length && (n = s.removed[j]); j++) {
	          // check if the node is still where we expect it is before trying
	          // to remove it; this can happen if we move a node and
	          // then schedule its previous host for distribution resulting in
	          // the node being removed here.
	          if (tree.Composed.getParentNode(n) === container) {
	            tree.Composed.removeChild(container, n);
	          }
	          composed.splice(s.index + d, 1);
	        }
	        d -= s.addedCount;
	      }
	      // process adds
	      for (var i$1 = 0, s$1, next; i$1 < splices.length && (s$1 = splices[i$1]); i$1++) {
	        //eslint-disable-line no-redeclare
	        next = composed[s$1.index];
	        for (var j$1 = s$1.index, n$1; j$1 < s$1.index + s$1.addedCount; j$1++) {
	          n$1 = children[j$1];
	          tree.Composed.insertBefore(container, n$1, next);
	          // TODO(sorvell): is this splice strictly needed?
	          composed.splice(j$1, 0, n$1);
	        }
	      }
	    },
	
	    getInsertionPointTag: function getInsertionPointTag() {
	      return this._distributor.insertionPointTag;
	    }
	
	  };
	
	  var ShadyFragmentMixin = Object.create(DocumentFragment.prototype);
	  extend(ShadyFragmentMixin, ShadyMixin);
	
	  // let needsUpgrade = window.CustomElements && !CustomElements.useNative;
	
	  // function upgradeLogicalChildren(children) {
	  //   if (needsUpgrade && children) {
	  //     for (let i=0; i < children.length; i++) {
	  //       CustomElements.upgrade(children[i]);
	  //     }
	  //   }
	  // }
	
	  // render enqueuer/flusher
	  var customElements = window.customElements;
	  var flushList = [];
	  var scheduled;
	  var flushCount = 0;
	  var flushMax = 100;
	  function enqueue(callback) {
	    if (!scheduled) {
	      scheduled = true;
	      promish.then(flush$1);
	    }
	    flushList.push(callback);
	  }
	
	  function flush$1() {
	    scheduled = false;
	    flushCount++;
	    while (flushList.length) {
	      flushList.shift()();
	    }
	    if (customElements && customElements.flush) {
	      customElements.flush();
	    }
	    // continue flushing after elements are upgraded...
	    var isFlushedMaxed = flushCount > flushMax;
	    if (flushList.length && !isFlushedMaxed) {
	      flush$1();
	    }
	    flushCount = 0;
	    if (isFlushedMaxed) {
	      throw new Error('Loop detected in ShadyDOM distribution, aborting.');
	    }
	  }
	
	  flush$1.list = flushList;
	
	  /**
	  @license
	  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
	  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	  Code distributed by Google as part of the polymer project is also
	  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	  */
	
	  // Cribbed from ShadowDOM polyfill
	  // https://github.com/webcomponents/webcomponentsjs/blob/master/src/ShadowDOM/wrappers/HTMLElement.js#L28
	  /////////////////////////////////////////////////////////////////////////////
	  // innerHTML and outerHTML
	
	  // http://www.whatwg.org/specs/web-apps/current-work/multipage/the-end.html#escapingString
	  var escapeAttrRegExp = /[&\u00A0"]/g;
	  var escapeDataRegExp = /[&\u00A0<>]/g;
	
	  function escapeReplace(c) {
	    switch (c) {
	      case '&':
	        return '&amp;';
	      case '<':
	        return '&lt;';
	      case '>':
	        return '&gt;';
	      case '"':
	        return '&quot;';
	      case '\xA0':
	        return '&nbsp;';
	    }
	  }
	
	  function escapeAttr(s) {
	    return s.replace(escapeAttrRegExp, escapeReplace);
	  }
	
	  function escapeData(s) {
	    return s.replace(escapeDataRegExp, escapeReplace);
	  }
	
	  function makeSet(arr) {
	    var set = {};
	    for (var i = 0; i < arr.length; i++) {
	      set[arr[i]] = true;
	    }
	    return set;
	  }
	
	  // http://www.whatwg.org/specs/web-apps/current-work/#void-elements
	  var voidElements = makeSet(['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
	
	  var plaintextParents = makeSet(['style', 'script', 'xmp', 'iframe', 'noembed', 'noframes', 'plaintext', 'noscript']);
	
	  function getOuterHTML(node, parentNode, composed) {
	    switch (node.nodeType) {
	      case Node.ELEMENT_NODE:
	        {
	          var tagName = node.localName;
	          var s = '<' + tagName;
	          var attrs = node.attributes;
	          for (var i = 0, attr; attr = attrs[i]; i++) {
	            s += ' ' + attr.name + '="' + escapeAttr(attr.value) + '"';
	          }
	          s += '>';
	          if (voidElements[tagName]) {
	            return s;
	          }
	          return s + getInnerHTML(node, composed) + '</' + tagName + '>';
	        }
	      case Node.TEXT_NODE:
	        {
	          var data = node.data;
	          if (parentNode && plaintextParents[parentNode.localName]) {
	            return data;
	          }
	          return escapeData(data);
	        }
	      case Node.COMMENT_NODE:
	        {
	          return '<!--' + node.data + '-->';
	        }
	      default:
	        {
	          window.console.error(node);
	          throw new Error('not implemented');
	        }
	    }
	  }
	
	  function getInnerHTML(node, composed) {
	    if (node.localName === 'template') {
	      node = node.content;
	    }
	    var s = '';
	    var c$ = composed ? composed(node) : node.childNodes;
	    for (var i = 0, l = c$.length, child; i < l && (child = c$[i]); i++) {
	      s += getOuterHTML(child, node, composed);
	    }
	    return s;
	  }
	
	  /**
	  @license
	  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
	  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	  Code distributed by Google as part of the polymer project is also
	  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	  */
	
	  var mixinImpl = {
	
	    // Try to add node. Record logical info, track insertion points, perform
	    // distribution iff needed. Return true if the add is handled.
	    addNode: function addNode(container, node, ref_node) {
	      var ownerRoot = this.ownerShadyRootForNode(container);
	      if (ownerRoot) {
	        // optimization: special insertion point tracking
	        if (node.__noInsertionPoint) {
	          ownerRoot._skipUpdateInsertionPoints = true;
	        }
	        // note: we always need to see if an insertion point is added
	        // since this saves logical tree info; however, invalidation state
	        // needs
	        var ipAdded = this._maybeAddInsertionPoint(node, container, ownerRoot);
	        // invalidate insertion points IFF not already invalid!
	        if (ipAdded) {
	          ownerRoot._skipUpdateInsertionPoints = false;
	        }
	        this._addedNode(node, ownerRoot);
	      }
	      if (tree.Logical.hasChildNodes(container)) {
	        tree.Logical.recordInsertBefore(node, container, ref_node);
	      }
	      // if not distributing and not adding to host, do a fast path addition
	      var handled = this._maybeDistribute(node, container, ownerRoot) || container.shadyRoot;
	      return handled;
	    },
	
	    // Try to remove node: update logical info and perform distribution iff
	    // needed. Return true if the removal has been handled.
	    // note that it's possible for both the node's host and its parent
	    // to require distribution... both cases are handled here.
	    removeNode: function removeNode(node) {
	      // important that we want to do this only if the node has a logical parent
	      var logicalParent = tree.Logical.hasParentNode(node) && tree.Logical.getParentNode(node);
	      var distributed;
	      var ownerRoot = this.ownerShadyRootForNode(node);
	      if (logicalParent) {
	        // distribute node's parent iff needed
	        distributed = this.maybeDistributeParent(node);
	        tree.Logical.recordRemoveChild(node, logicalParent);
	        // remove node from root and distribute it iff needed
	        if (ownerRoot && (this._removeDistributedChildren(ownerRoot, node) || logicalParent.localName === ownerRoot.getInsertionPointTag())) {
	          ownerRoot._skipUpdateInsertionPoints = false;
	          ownerRoot.update();
	        }
	      }
	      this._removeOwnerShadyRoot(node);
	      if (ownerRoot) {
	        this._removedNode(node, ownerRoot);
	      }
	      return distributed;
	    },
	
	    _scheduleObserver: function _scheduleObserver(node, addedNode, removedNode) {
	      var observer = node.__dom && node.__dom.observer;
	      if (observer) {
	        if (addedNode) {
	          observer.addedNodes.push(addedNode);
	        }
	        if (removedNode) {
	          observer.removedNodes.push(removedNode);
	        }
	        observer.schedule();
	      }
	    },
	
	    removeNodeFromParent: function removeNodeFromParent(node, parent) {
	      if (parent) {
	        this._scheduleObserver(parent, null, node);
	        this.removeNode(node);
	      } else {
	        this._removeOwnerShadyRoot(node);
	      }
	    },
	
	    _hasCachedOwnerRoot: function _hasCachedOwnerRoot(node) {
	      return Boolean(node.__ownerShadyRoot !== undefined);
	    },
	
	    getRootNode: function getRootNode$1(node) {
	      if (!node || !node.nodeType) {
	        return;
	      }
	      var root = node.__ownerShadyRoot;
	      if (root === undefined) {
	        if (isShadyRoot(node)) {
	          root = node;
	        } else {
	          var parent = tree.Logical.getParentNode(node);
	          root = parent ? this.getRootNode(parent) : node;
	        }
	        // memo-ize result for performance but only memo-ize
	        // result if node is in the document. This avoids a problem where a root
	        // can be cached while an element is inside a fragment.
	        // If this happens and we cache the result, the value can become stale
	        // because for perf we avoid processing the subtree of added fragments.
	        if (document.documentElement.contains(node)) {
	          node.__ownerShadyRoot = root;
	        }
	      }
	      return root;
	    },
	
	    ownerShadyRootForNode: function ownerShadyRootForNode(node) {
	      var root = this.getRootNode(node);
	      if (isShadyRoot(root)) {
	        return root;
	      }
	    },
	
	    _maybeDistribute: function _maybeDistribute(node, container, ownerRoot) {
	      // TODO(sorvell): technically we should check non-fragment nodes for
	      // <content> children but since this case is assumed to be exceedingly
	      // rare, we avoid the cost and will address with some specific api
	      // when the need arises.  For now, the user must call
	      // distributeContent(true), which updates insertion points manually
	      // and forces distribution.
	      var insertionPointTag = ownerRoot && ownerRoot.getInsertionPointTag() || '';
	      var fragContent = node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && !node.__noInsertionPoint && insertionPointTag && node.querySelector(insertionPointTag);
	      var wrappedContent = fragContent && tree.Logical.getParentNode(fragContent).nodeType !== Node.DOCUMENT_FRAGMENT_NODE;
	      var hasContent = fragContent || node.localName === insertionPointTag;
	      // There are 3 possible cases where a distribution may need to occur:
	      // 1. <content> being inserted (the host of the shady root where
	      //    content is inserted needs distribution)
	      // 2. children being inserted into parent with a shady root (parent
	      //    needs distribution)
	      // 3. container is an insertionPoint
	      if (hasContent || container.localName === insertionPointTag) {
	        if (ownerRoot) {
	          // note, insertion point list update is handled after node
	          // mutations are complete
	          ownerRoot.update();
	        }
	      }
	      var needsDist = this._nodeNeedsDistribution(container);
	      if (needsDist) {
	        container.shadyRoot.update();
	      }
	      // Return true when distribution will fully handle the composition
	      // Note that if a content was being inserted that was wrapped by a node,
	      // and the parent does not need distribution, return false to allow
	      // the nodes to be added directly, after which children may be
	      // distributed and composed into the wrapping node(s)
	      return needsDist || hasContent && !wrappedContent;
	    },
	
	    /* note: parent argument is required since node may have an out
	    of date parent at this point; returns true if a <content> is being added */
	    _maybeAddInsertionPoint: function _maybeAddInsertionPoint(node, parent, root) {
	      var this$1 = this;
	
	      var added;
	      var insertionPointTag = root.getInsertionPointTag();
	      if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && !node.__noInsertionPoint) {
	        var c$ = node.querySelectorAll(insertionPointTag);
	        for (var i = 0, n, np, na; i < c$.length && (n = c$[i]); i++) {
	          np = tree.Logical.getParentNode(n);
	          // don't allow node's parent to be fragment itself
	          if (np === node) {
	            np = parent;
	          }
	          na = this$1._maybeAddInsertionPoint(n, np, root);
	          added = added || na;
	        }
	      } else if (node.localName === insertionPointTag) {
	        tree.Logical.saveChildNodes(parent);
	        tree.Logical.saveChildNodes(node);
	        added = true;
	      }
	      return added;
	    },
	
	    _nodeNeedsDistribution: function _nodeNeedsDistribution(node) {
	      return node && node.shadyRoot && node.shadyRoot.hasInsertionPoint();
	    },
	
	    // TODO(sorvell): needed for style scoping, use MO?
	    _addedNode: function _addedNode() {},
	    _removedNode: function _removedNode() {},
	    /*
	    _addedNode(node, root) {
	      // if (ShadyDOM.addedNode) {
	      //   ShadyDOM.addedNode(node, root);
	      // }
	    },
	     _removedNode(node, root) {
	      if (ShadyDOM.removedNode) {
	        ShadyDOM.removedNode(node, root);
	      }
	    },
	    */
	
	    _removeDistributedChildren: function _removeDistributedChildren(root, container) {
	      var this$1 = this;
	
	      var hostNeedsDist;
	      var ip$ = root._insertionPoints;
	      for (var i = 0; i < ip$.length; i++) {
	        var insertionPoint = ip$[i];
	        if (this$1._contains(container, insertionPoint)) {
	          var dc$ = insertionPoint.assignedNodes({ flatten: true });
	          for (var j = 0; j < dc$.length; j++) {
	            hostNeedsDist = true;
	            var node = dc$[j];
	            var parent = tree.Composed.getParentNode(node);
	            if (parent) {
	              tree.Composed.removeChild(parent, node);
	            }
	          }
	        }
	      }
	      return hostNeedsDist;
	    },
	
	    _contains: function _contains(container, node) {
	      while (node) {
	        if (node == container) {
	          return true;
	        }
	        node = tree.Logical.getParentNode(node);
	      }
	    },
	
	    _removeOwnerShadyRoot: function _removeOwnerShadyRoot(node) {
	      var this$1 = this;
	
	      // optimization: only reset the tree if node is actually in a root
	      if (this._hasCachedOwnerRoot(node)) {
	        var c$ = tree.Logical.getChildNodes(node);
	        for (var i = 0, l = c$.length, n; i < l && (n = c$[i]); i++) {
	          this$1._removeOwnerShadyRoot(n);
	        }
	      }
	      node.__ownerShadyRoot = undefined;
	    },
	
	    // TODO(sorvell): This will fail if distribution that affects this
	    // question is pending; this is expected to be exceedingly rare, but if
	    // the issue comes up, we can force a flush in this case.
	    firstComposedNode: function firstComposedNode(insertionPoint) {
	      var n$ = insertionPoint.assignedNodes({ flatten: true });
	      var root = this.getRootNode(insertionPoint);
	      for (var i = 0, l = n$.length, n; i < l && (n = n$[i]); i++) {
	        // means that we're composed to this spot.
	        if (root.isFinalDestination(insertionPoint, n)) {
	          return n;
	        }
	      }
	    },
	
	    clearNode: function clearNode(node) {
	      while (node.firstChild) {
	        node.removeChild(node.firstChild);
	      }
	    },
	
	    maybeDistributeParent: function maybeDistributeParent(node) {
	      var parent = tree.Logical.getParentNode(node);
	      if (this._nodeNeedsDistribution(parent)) {
	        parent.shadyRoot.update();
	        return true;
	      }
	    },
	
	    maybeDistributeAttributeChange: function maybeDistributeAttributeChange(node, name) {
	      var distribute = node.localName === 'slot' && name === 'name';
	      if (distribute) {
	        var root = this.getRootNode(node);
	        if (root.update) {
	          root.update();
	        }
	      }
	    },
	
	    // NOTE: `query` is used primarily for ShadyDOM's querySelector impl,
	    // but it's also generally useful to recurse through the element tree
	    // and is used by Polymer's styling system.
	    query: function query(node, matcher, halter) {
	      var list = [];
	      this._queryElements(tree.Logical.getChildNodes(node), matcher, halter, list);
	      return list;
	    },
	
	    _queryElements: function _queryElements(elements, matcher, halter, list) {
	      var this$1 = this;
	
	      for (var i = 0, l = elements.length, c; i < l && (c = elements[i]); i++) {
	        if (c.nodeType === Node.ELEMENT_NODE && this$1._queryElement(c, matcher, halter, list)) {
	          return true;
	        }
	      }
	    },
	
	    _queryElement: function _queryElement(node, matcher, halter, list) {
	      var result = matcher(node);
	      if (result) {
	        list.push(node);
	      }
	      if (halter && halter(result)) {
	        return result;
	      }
	      this._queryElements(tree.Logical.getChildNodes(node), matcher, halter, list);
	    },
	
	    activeElementForNode: function activeElementForNode(node) {
	      var this$1 = this;
	
	      var active = document.activeElement;
	      if (!active) {
	        return null;
	      }
	      var isShadyRoot$$1 = !!isShadyRoot(node);
	      if (node !== document) {
	        // If this node isn't a document or shady root, then it doesn't have
	        // an active element.
	        if (!isShadyRoot$$1) {
	          return null;
	        }
	        // If this shady root's host is the active element or the active
	        // element is not a descendant of the host (in the composed tree),
	        // then it doesn't have an active element.
	        if (node.host === active || !node.host.contains(active)) {
	          return null;
	        }
	      }
	      // This node is either the document or a shady root of which the active
	      // element is a (composed) descendant of its host; iterate upwards to
	      // find the active element's most shallow host within it.
	      var activeRoot = this.ownerShadyRootForNode(active);
	      while (activeRoot && activeRoot !== node) {
	        active = activeRoot.host;
	        activeRoot = this$1.ownerShadyRootForNode(active);
	      }
	      if (node === document) {
	        // This node is the document, so activeRoot should be null.
	        return activeRoot ? null : active;
	      } else {
	        // This node is a non-document shady root, and it should be
	        // activeRoot.
	        return activeRoot === node ? active : null;
	      }
	    }
	
	  };
	
	  var nativeCloneNode = Element.prototype.cloneNode;
	  var nativeImportNode = Document.prototype.importNode;
	  var nativeSetAttribute = Element.prototype.setAttribute;
	  var nativeRemoveAttribute = Element.prototype.removeAttribute;
	
	  var NodeMixin = {};
	
	  Object.defineProperties(NodeMixin, {
	
	    parentElement: {
	      get: function get() {
	        return tree.Logical.getParentNode(this);
	      },
	      configurable: true
	    },
	
	    parentNode: {
	      get: function get$1() {
	        return tree.Logical.getParentNode(this);
	      },
	      configurable: true
	    },
	
	    nextSibling: {
	      get: function get$2() {
	        return tree.Logical.getNextSibling(this);
	      },
	      configurable: true
	    },
	
	    previousSibling: {
	      get: function get$3() {
	        return tree.Logical.getPreviousSibling(this);
	      },
	      configurable: true
	    },
	
	    nextElementSibling: {
	      get: function get$4() {
	        return tree.Logical.getNextElementSibling(this);
	      },
	      configurable: true
	    },
	
	    previousElementSibling: {
	      get: function get$5() {
	        return tree.Logical.getPreviousElementSibling(this);
	      },
	      configurable: true
	    },
	
	    assignedSlot: {
	      get: function get$6() {
	        return this._assignedSlot;
	      },
	      configurable: true
	    }
	  });
	
	  var FragmentMixin = {
	
	    appendChild: function appendChild(node) {
	      return this.insertBefore(node);
	    },
	
	    // cases in which we may not be able to just do standard native call
	    // 1. container has a shadyRoot (needsDistribution IFF the shadyRoot
	    // has an insertion point)
	    // 2. container is a shadyRoot (don't distribute, instead set
	    // container to container.host.
	    // 3. node is <content> (host of container needs distribution)
	    insertBefore: function insertBefore(node, ref_node) {
	      if (ref_node && tree.Logical.getParentNode(ref_node) !== this) {
	        throw Error('The ref_node to be inserted before is not a child ' + 'of this node');
	      }
	      // remove node from its current position iff it's in a tree.
	      if (node.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
	        var parent = tree.Logical.getParentNode(node);
	        mixinImpl.removeNodeFromParent(node, parent);
	      }
	      if (!mixinImpl.addNode(this, node, ref_node)) {
	        if (ref_node) {
	          // if ref_node is an insertion point replace with first distributed node
	          var root = mixinImpl.ownerShadyRootForNode(ref_node);
	          if (root) {
	            ref_node = ref_node.localName === root.getInsertionPointTag() ? mixinImpl.firstComposedNode(ref_node) : ref_node;
	          }
	        }
	        // if adding to a shadyRoot, add to host instead
	        var container = isShadyRoot(this) ? this.host : this;
	        if (ref_node) {
	          tree.Composed.insertBefore(container, node, ref_node);
	        } else {
	          tree.Composed.appendChild(container, node);
	        }
	      }
	      mixinImpl._scheduleObserver(this, node);
	      return node;
	    },
	
	    /**
	      Removes the given `node` from the element's `lightChildren`.
	      This method also performs dom composition.
	    */
	    removeChild: function removeChild(node) {
	      if (tree.Logical.getParentNode(node) !== this) {
	        throw Error('The node to be removed is not a child of this node: ' + node);
	      }
	      if (!mixinImpl.removeNode(node)) {
	        // if removing from a shadyRoot, remove form host instead
	        var container = isShadyRoot(this) ? this.host : this;
	        // not guaranteed to physically be in container; e.g.
	        // undistributed nodes.
	        var parent = tree.Composed.getParentNode(node);
	        if (container === parent) {
	          tree.Composed.removeChild(container, node);
	        }
	      }
	      mixinImpl._scheduleObserver(this, null, node);
	      return node;
	    },
	
	    replaceChild: function replaceChild(node, ref_node) {
	      this.insertBefore(node, ref_node);
	      this.removeChild(ref_node);
	      return node;
	    },
	
	    // TODO(sorvell): consider doing native QSA and filtering results.
	    querySelector: function querySelector(selector) {
	      // match selector and halt on first result.
	      var result = mixinImpl.query(this, function (n) {
	        return matchesSelector(n, selector);
	      }, function (n) {
	        return Boolean(n);
	      })[0];
	      return result || null;
	    },
	
	    querySelectorAll: function querySelectorAll(selector) {
	      return mixinImpl.query(this, function (n) {
	        return matchesSelector(n, selector);
	      });
	    },
	
	    cloneNode: function cloneNode(deep) {
	      if (this.localName == 'template') {
	        return nativeCloneNode.call(this, deep);
	      } else {
	        var n = nativeCloneNode.call(this, false);
	        if (deep) {
	          var c$ = this.childNodes;
	          for (var i = 0, nc; i < c$.length; i++) {
	            nc = c$[i].cloneNode(true);
	            n.appendChild(nc);
	          }
	        }
	        return n;
	      }
	    },
	
	    importNode: function importNode(externalNode, deep) {
	      // for convenience use this node's ownerDoc if the node isn't a document
	      var doc = this instanceof Document ? this : this.ownerDocument;
	      var n = nativeImportNode.call(doc, externalNode, false);
	      if (deep) {
	        var c$ = tree.Logical.getChildNodes(externalNode);
	        common.patchNode(n);
	        for (var i = 0, nc; i < c$.length; i++) {
	          nc = doc.importNode(c$[i], true);
	          n.appendChild(nc);
	        }
	      }
	      return n;
	    }
	  };
	
	  Object.defineProperties(FragmentMixin, {
	
	    childNodes: {
	      get: function get$7() {
	        var c$ = tree.Logical.getChildNodes(this);
	        return Array.isArray(c$) ? c$ : tree.arrayCopyChildNodes(this);
	      },
	      configurable: true
	    },
	
	    children: {
	      get: function get$8() {
	        if (tree.Logical.hasChildNodes(this)) {
	          return Array.prototype.filter.call(this.childNodes, function (n) {
	            return n.nodeType === Node.ELEMENT_NODE;
	          });
	        } else {
	          return tree.arrayCopyChildren(this);
	        }
	      },
	      configurable: true
	    },
	
	    firstChild: {
	      get: function get$9() {
	        return tree.Logical.getFirstChild(this);
	      },
	      configurable: true
	    },
	
	    lastChild: {
	      get: function get$10() {
	        return tree.Logical.getLastChild(this);
	      },
	      configurable: true
	    },
	
	    firstElementChild: {
	      get: function get$11() {
	        return tree.Logical.getFirstElementChild(this);
	      },
	      configurable: true
	    },
	
	    lastElementChild: {
	      get: function get$12() {
	        return tree.Logical.getLastElementChild(this);
	      },
	      configurable: true
	    },
	
	    // TODO(srovell): strictly speaking fragments do not have textContent
	    // or innerHTML but ShadowRoots do and are not easily distinguishable.
	    // textContent / innerHTML
	    textContent: {
	      get: function get$13() {
	        if (this.childNodes) {
	          var tc = [];
	          for (var i = 0, cn = this.childNodes, c; c = cn[i]; i++) {
	            if (c.nodeType !== Node.COMMENT_NODE) {
	              tc.push(c.textContent);
	            }
	          }
	          return tc.join('');
	        }
	        return '';
	      },
	      set: function set(text) {
	        mixinImpl.clearNode(this);
	        if (text) {
	          this.appendChild(document.createTextNode(text));
	        }
	      },
	      configurable: true
	    },
	
	    innerHTML: {
	      get: function get$14() {
	        return getInnerHTML(this);
	      },
	      set: function set$1(text) {
	        var this$1 = this;
	
	        mixinImpl.clearNode(this);
	        var d = document.createElement('div');
	        d.innerHTML = text;
	        // here, appendChild may move nodes async so we cannot rely
	        // on node position when copying
	        var c$ = tree.arrayCopyChildNodes(d);
	        for (var i = 0; i < c$.length; i++) {
	          this$1.appendChild(c$[i]);
	        }
	      },
	      configurable: true
	    }
	
	  });
	
	  var ElementMixin = {
	
	    // TODO(sorvell): should only exist on <slot>
	    assignedNodes: function assignedNodes(options) {
	      return (options && options.flatten ? this._distributedNodes : this._assignedNodes) || [];
	    },
	
	    setAttribute: function setAttribute(name, value) {
	      nativeSetAttribute.call(this, name, value);
	      if (!mixinImpl.maybeDistributeParent(this)) {
	        mixinImpl.maybeDistributeAttributeChange(this, name);
	      }
	    },
	
	    removeAttribute: function removeAttribute(name) {
	      nativeRemoveAttribute.call(this, name);
	      if (!mixinImpl.maybeDistributeParent(this)) {
	        mixinImpl.maybeDistributeAttributeChange(this, name);
	      }
	    }
	
	  };
	
	  Object.defineProperties(ElementMixin, {
	
	    shadowRoot: {
	      get: function get$15() {
	        return this.shadyRoot;
	      }
	    },
	
	    slot: {
	      get: function get$16() {
	        return this.getAttribute('slot');
	      },
	      set: function set$2(value) {
	        this.setAttribute('slot', value);
	      }
	    }
	
	  });
	
	  var activeElementDescriptor = {
	    get: function get$17() {
	      return mixinImpl.activeElementForNode(this);
	    }
	  };
	
	  var ActiveElementMixin = {};
	  Object.defineProperties(ActiveElementMixin, {
	    activeElement: activeElementDescriptor
	  });
	
	  var UnderActiveElementMixin = {};
	  Object.defineProperties(UnderActiveElementMixin, {
	    _activeElement: activeElementDescriptor
	  });
	
	  var Mixins = {
	
	    Node: extendAll({ __patched: 'Node' }, NodeMixin),
	
	    Fragment: extendAll({ __patched: 'Fragment' }, NodeMixin, FragmentMixin, ActiveElementMixin),
	
	    Element: extendAll({ __patched: 'Element' }, NodeMixin, FragmentMixin, ElementMixin, ActiveElementMixin),
	
	    // Note: activeElement cannot be patched on document!
	    Document: extendAll({ __patched: 'Document' }, NodeMixin, FragmentMixin, ElementMixin, UnderActiveElementMixin)
	
	  };
	
	  var getRootNode = function getRootNode(node) {
	    return mixinImpl.getRootNode(node);
	  };
	
	  function filterMutations(mutations, target) {
	    var targetRootNode = getRootNode(target);
	    return mutations.filter(function (mutation) {
	      var mutationInScope = targetRootNode === getRootNode(mutation.target);
	      if (mutationInScope && mutation.addedNodes) {
	        var nodes = Array.from(mutation.addedNodes).filter(function (n) {
	          return targetRootNode === getRootNode(n);
	        });
	        Object.defineProperty(mutation, 'addedNodes', {
	          value: nodes,
	          configurable: true
	        });
	      }
	      return mutationInScope && (!mutation.addedNodes || mutation.addedNodes.length);
	    });
	  }
	
	  // const promise = Promise.resolve();
	
	  var AsyncObserver = function AsyncObserver() {
	    this._scheduled = false;
	    this.addedNodes = [];
	    this.removedNodes = [];
	    this.callbacks = new Set();
	  };
	
	  AsyncObserver.prototype.schedule = function schedule() {
	    var this$1 = this;
	
	    if (!this._scheduled) {
	      this._scheduled = true;
	      promish.then(function () {
	        this$1.flush();
	      });
	    }
	  };
	
	  AsyncObserver.prototype.flush = function flush() {
	    if (this._scheduled) {
	      this._scheduled = false;
	      var mutations = this.takeRecords();
	      if (mutations.length) {
	        this.callbacks.forEach(function (cb) {
	          cb(mutations);
	        });
	      }
	    }
	  };
	
	  AsyncObserver.prototype.takeRecords = function takeRecords() {
	    if (this.addedNodes.length || this.removedNodes.length) {
	      var mutations = [{
	        addedNodes: this.addedNodes,
	        removedNodes: this.removedNodes
	      }];
	      this.addedNodes = [];
	      this.removedNodes = [];
	      return mutations;
	    }
	    return [];
	  };
	
	  // TODO(sorvell): consider instead polyfilling MutationObserver
	  // directly so that users do not have to fork their code.
	  // Supporting the entire api may be challenging: e.g. filtering out
	  // removed nodes in the wrong scope and seeing non-distributing
	  // subtree child mutations.
	  var observeChildren = function observeChildren(node, callback) {
	    common.patchNode(node);
	    if (!node.__dom.observer) {
	      node.__dom.observer = new AsyncObserver();
	    }
	    node.__dom.observer.callbacks.add(callback);
	    var observer = node.__dom.observer;
	    return {
	      _callback: callback,
	      _observer: observer,
	      _node: node,
	      takeRecords: function takeRecords() {
	        return observer.takeRecords();
	      }
	    };
	  };
	
	  var unobserveChildren = function unobserveChildren(handle) {
	    var observer = handle && handle._observer;
	    if (observer) {
	      observer.callbacks.delete(handle._callback);
	      if (!observer.callbacks.size) {
	        handle._node.__dom.observer = null;
	      }
	    }
	  };
	
	  /**
	  @license
	  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
	  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	  Code distributed by Google as part of the polymer project is also
	  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	  */
	
	  /**
	   * Patches elements that interacts with ShadyDOM
	   * such that tree traversal and mutation apis act like they would under
	   * ShadowDOM.
	   *
	   * This import enables seemless interaction with ShadyDOM powered
	   * custom elements, enabling better interoperation with 3rd party code,
	   * libraries, and frameworks that use DOM tree manipulation apis.
	   */
	
	  var patchedCount = 0;
	
	  var log = false;
	
	  var patchImpl = {
	
	    canPatchNode: function canPatchNode(node) {
	      switch (node) {
	        case document.head:
	        case document.documentElement:
	          return false;
	        default:
	          return true;
	      }
	    },
	
	    hasPrototypeDescriptors: Boolean(Object.getOwnPropertyDescriptor(window.Node.prototype, 'textContent')),
	
	    patch: function patch(node) {
	      patchedCount++;
	      log && window.console.warn('patch node', node);
	      if (this.hasPrototypeDescriptors) {
	        patchPrototype(node, this.mixinForObject(node));
	      } else {
	        window.console.warn('Patching instance rather than prototype', node);
	        extend(node, this.mixinForNode(node));
	      }
	    },
	
	    mixinForObject: function mixinForObject(obj) {
	      switch (obj.nodeType) {
	        case Node.ELEMENT_NODE:
	          return Mixins.Element;
	        case Node.DOCUMENT_FRAGMENT_NODE:
	          return Mixins.Fragment;
	        case Node.DOCUMENT_NODE:
	          return Mixins.Document;
	        case Node.TEXT_NODE:
	        case Node.COMMENT_NODE:
	          return Mixins.Node;
	      }
	    },
	
	    unpatch: function unpatch(obj) {
	      if (obj.__sourceProto) {
	        obj.__proto__ = obj.__sourceProto;
	      }
	      // TODO(sorvell): implement unpatching for non-proto patchable browsers
	    }
	
	  };
	
	  function patchNode(node) {
	    if (!settings.inUse) {
	      return;
	    }
	    if (!isNodePatched(node) && patchImpl.canPatchNode(node)) {
	      tree.saveChildNodes(node);
	      patchImpl.patch(node);
	    }
	  }
	
	  function unpatchNode(node) {
	    patchImpl.unpatch(node);
	  }
	
	  function isNodePatched(node) {
	    return Boolean(node.__patched);
	  }
	
	  // TODO(sorvell): fake export
	  common.patchNode = patchNode;
	  common.isNodePatched = isNodePatched;
	
	  /**
	  @license
	  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
	  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	  Code distributed by Google as part of the polymer project is also
	  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	  */
	
	  var origAddEventListener = Element.prototype.addEventListener;
	  var origRemoveEventListener = Element.prototype.removeEventListener;
	
	  // https://github.com/w3c/webcomponents/issues/513#issuecomment-224183937
	  var alwaysComposed = {
	    blur: true,
	    focus: true,
	    focusin: true,
	    focusout: true,
	    click: true,
	    dblclick: true,
	    mousedown: true,
	    mouseenter: true,
	    mouseleave: true,
	    mousemove: true,
	    mouseout: true,
	    mouseover: true,
	    mouseup: true,
	    wheel: true,
	    beforeinput: true,
	    input: true,
	    keydown: true,
	    keyup: true,
	    compositionstart: true,
	    compositionupdate: true,
	    compositionend: true,
	    touchstart: true,
	    touchend: true,
	    touchmove: true,
	    touchcancel: true,
	    pointerover: true,
	    pointerenter: true,
	    pointerdown: true,
	    pointermove: true,
	    pointerup: true,
	    pointercancel: true,
	    pointerout: true,
	    pointerleave: true,
	    gotpointercapture: true,
	    lostpointercapture: true,
	    dragstart: true,
	    drag: true,
	    dragenter: true,
	    dragleave: true,
	    dragover: true,
	    drop: true,
	    dragend: true,
	    DOMActivate: true,
	    DOMFocusIn: true,
	    DOMFocusOut: true,
	    keypress: true
	  };
	
	  function pathComposer(startNode, composed) {
	    var composedPath = [];
	    var current = startNode;
	    var startRoot = startNode === window ? window : startNode.getRootNode();
	    while (current) {
	      composedPath.push(current);
	      if (current.assignedSlot) {
	        current = current.assignedSlot;
	      } else if (current.nodeType === Node.DOCUMENT_FRAGMENT_NODE && current.host && (composed || current !== startRoot)) {
	        current = current.host;
	      } else {
	        current = current.parentNode;
	      }
	    }
	    // event composedPath includes window when startNode's ownerRoot is document
	    if (composedPath[composedPath.length - 1] === document) {
	      composedPath.push(window);
	    }
	    return composedPath;
	  }
	
	  function retarget(refNode, path) {
	    if (!isShadyRoot) {
	      return refNode;
	    }
	    // If ANCESTOR's root is not a shadow root or ANCESTOR's root is BASE's
	    // shadow-including inclusive ancestor, return ANCESTOR.
	    var refNodePath = pathComposer(refNode, true);
	    var p$ = path;
	    for (var i = 0, ancestor, lastRoot, root, rootIdx; i < p$.length; i++) {
	      ancestor = p$[i];
	      root = ancestor === window ? window : ancestor.getRootNode();
	      if (root !== lastRoot) {
	        rootIdx = refNodePath.indexOf(root);
	        lastRoot = root;
	      }
	      if (!isShadyRoot(root) || rootIdx > -1) {
	        return ancestor;
	      }
	    }
	  }
	
	  var EventMixin = {
	
	    __patched: 'Event',
	
	    get composed() {
	      if (this.isTrusted && this.__composed === undefined) {
	        this.__composed = alwaysComposed[this.type];
	      }
	      return this.__composed || false;
	    },
	
	    composedPath: function composedPath() {
	      if (!this.__composedPath) {
	        this.__composedPath = pathComposer(this.__target, this.composed);
	      }
	      return this.__composedPath;
	    },
	
	    get target() {
	      return retarget(this.currentTarget, this.composedPath());
	    },
	
	    // http://w3c.github.io/webcomponents/spec/shadow/#event-relatedtarget-retargeting
	    get relatedTarget() {
	      if (!this.__relatedTarget) {
	        return null;
	      }
	      if (!this.__relatedTargetComposedPath) {
	        this.__relatedTargetComposedPath = pathComposer(this.__relatedTarget, true);
	      }
	      // find the deepest node in relatedTarget composed path that is in the same root with the currentTarget
	      return retarget(this.currentTarget, this.__relatedTargetComposedPath);
	    },
	    stopPropagation: function stopPropagation() {
	      Event.prototype.stopPropagation.call(this);
	      this.__propagationStopped = true;
	    },
	    stopImmediatePropagation: function stopImmediatePropagation() {
	      Event.prototype.stopImmediatePropagation.call(this);
	      this.__immediatePropagationStopped = true;
	      this.__propagationStopped = true;
	    }
	
	  };
	
	  function mixinComposedFlag(Base) {
	    // NOTE: avoiding use of `class` here so that transpiled output does not
	    // try to do `Base.call` with a dom construtor.
	    var klazz = function klazz(type, options) {
	      var event = new Base(type, options);
	      event.__composed = options && Boolean(options.composed);
	      return event;
	    };
	    // put constructor properties on subclass
	    mixin(klazz, Base);
	    klazz.prototype = Base.prototype;
	    return klazz;
	  }
	
	  var nonBubblingEventsToRetarget = {
	    focus: true,
	    blur: true
	  };
	
	  function fireHandlers(event, node, phase) {
	    var hs = node.__handlers && node.__handlers[event.type] && node.__handlers[event.type][phase];
	    if (hs) {
	      for (var i = 0, fn; fn = hs[i]; i++) {
	        fn.call(node, event);
	        if (event.__immediatePropagationStopped) {
	          return;
	        }
	      }
	    }
	  }
	
	  function retargetNonBubblingEvent(e) {
	    var path = e.composedPath();
	    var node;
	    // override `currentTarget` to let patched `target` calculate correctly
	    Object.defineProperty(e, 'currentTarget', {
	      get: function get() {
	        return node;
	      },
	      configurable: true
	    });
	    for (var i = path.length - 1; i >= 0; i--) {
	      node = path[i];
	      // capture phase fires all capture handlers
	      fireHandlers(e, node, 'capture');
	      if (e.__propagationStopped) {
	        return;
	      }
	    }
	
	    // set the event phase to `AT_TARGET` as in spec
	    Object.defineProperty(e, 'eventPhase', { value: Event.AT_TARGET });
	
	    // the event only needs to be fired when owner roots change when iterating the event path
	    // keep track of the last seen owner root
	    var lastFiredRoot;
	    for (var i$1 = 0; i$1 < path.length; i$1++) {
	      node = path[i$1];
	      if (i$1 === 0 || node.shadowRoot && node.shadowRoot === lastFiredRoot) {
	        fireHandlers(e, node, 'bubble');
	        // don't bother with window, it doesn't have `getRootNode` and will be last in the path anyway
	        if (node !== window) {
	          lastFiredRoot = node.getRootNode();
	        }
	        if (e.__propagationStopped) {
	          return;
	        }
	      }
	    }
	  }
	
	  function addEventListener(type, fn, optionsOrCapture) {
	    var this$1 = this;
	
	    if (!fn) {
	      return;
	    }
	
	    // The callback `fn` might be used for multiple nodes/events. Since we generate
	    // a wrapper function, we need to keep track of it when we remove the listener.
	    // It's more efficient to store the node/type/options information as Array in
	    // `fn` itself rather than the node (we assume that the same callback is used
	    // for few nodes at most, whereas a node will likely have many event listeners).
	    // NOTE(valdrin) invoking external functions is costly, inline has better perf.
	    var capture, once, passive;
	    if ((typeof optionsOrCapture === 'undefined' ? 'undefined' : _typeof(optionsOrCapture)) === 'object') {
	      capture = Boolean(optionsOrCapture.capture);
	      once = Boolean(optionsOrCapture.once);
	      passive = Boolean(optionsOrCapture.passive);
	    } else {
	      capture = Boolean(optionsOrCapture);
	      once = false;
	      passive = false;
	    }
	    if (fn.__eventWrappers) {
	      // Stop if the wrapper function has already been created.
	      for (var i = 0; i < fn.__eventWrappers.length; i++) {
	        if (fn.__eventWrappers[i].node === this$1 && fn.__eventWrappers[i].type === type && fn.__eventWrappers[i].capture === capture && fn.__eventWrappers[i].once === once && fn.__eventWrappers[i].passive === passive) {
	          return;
	        }
	      }
	    } else {
	      fn.__eventWrappers = [];
	    }
	
	    var wrapperFn = function wrapperFn(e) {
	      // Support `once` option.
	      if (once) {
	        this.removeEventListener(type, fn, optionsOrCapture);
	      }
	      if (!e.__target) {
	        e.__target = e.target;
	        e.__relatedTarget = e.relatedTarget;
	        patchPrototype(e, EventMixin);
	      }
	      // There are two critera that should stop events from firing on this node
	      // 1. the event is not composed and the current node is not in the same root as the target
	      // 2. when bubbling, if after retargeting, relatedTarget and target point to the same node
	      if (e.composed || e.composedPath().indexOf(this) > -1) {
	        if (e.eventPhase === Event.BUBBLING_PHASE) {
	          if (e.target === e.relatedTarget) {
	            e.stopImmediatePropagation();
	            return;
	          }
	        }
	        return fn(e);
	      }
	    };
	    // Store the wrapper information.
	    fn.__eventWrappers.push({
	      node: this,
	      type: type,
	      capture: capture,
	      once: once,
	      passive: passive,
	      wrapperFn: wrapperFn
	    });
	
	    if (nonBubblingEventsToRetarget[type]) {
	      this.__handlers = this.__handlers || {};
	      this.__handlers[type] = this.__handlers[type] || { capture: [], bubble: [] };
	      this.__handlers[type][capture ? 'capture' : 'bubble'].push(wrapperFn);
	    } else {
	      origAddEventListener.call(this, type, wrapperFn, optionsOrCapture);
	    }
	  }
	
	  function removeEventListener(type, fn, optionsOrCapture) {
	    var this$1 = this;
	
	    if (!fn) {
	      return;
	    }
	
	    // NOTE(valdrin) invoking external functions is costly, inline has better perf.
	    var capture, once, passive;
	    if ((typeof optionsOrCapture === 'undefined' ? 'undefined' : _typeof(optionsOrCapture)) === 'object') {
	      capture = Boolean(optionsOrCapture.capture);
	      once = Boolean(optionsOrCapture.once);
	      passive = Boolean(optionsOrCapture.passive);
	    } else {
	      capture = Boolean(optionsOrCapture);
	      once = false;
	      passive = false;
	    }
	    // Search the wrapped function.
	    var wrapperFn = undefined;
	    if (fn.__eventWrappers) {
	      for (var i = 0; i < fn.__eventWrappers.length; i++) {
	        if (fn.__eventWrappers[i].node === this$1 && fn.__eventWrappers[i].type === type && fn.__eventWrappers[i].capture === capture && fn.__eventWrappers[i].once === once && fn.__eventWrappers[i].passive === passive) {
	          wrapperFn = fn.__eventWrappers.splice(i, 1)[0].wrapperFn;
	          // Cleanup.
	          if (!fn.__eventWrappers.length) {
	            fn.__eventWrappers = undefined;
	          }
	          break;
	        }
	      }
	    }
	
	    origRemoveEventListener.call(this, type, wrapperFn || fn, optionsOrCapture);
	    if (wrapperFn && nonBubblingEventsToRetarget[type] && this.__handlers && this.__handlers[type]) {
	      var arr = this.__handlers[type][capture ? 'capture' : 'bubble'];
	      var idx = arr.indexOf(wrapperFn);
	      if (idx > -1) {
	        arr.splice(idx, 1);
	      }
	    }
	  }
	
	  function activateFocusEventOverrides() {
	    for (var ev in nonBubblingEventsToRetarget) {
	      window.addEventListener(ev, function (e) {
	        if (!e.__target) {
	          e.__target = e.target;
	          e.__relatedTarget = e.relatedTarget;
	          patchPrototype(e, EventMixin);
	          retargetNonBubblingEvent(e);
	          e.stopImmediatePropagation();
	        }
	      }, true);
	    }
	  }
	
	  var PatchedEvent = mixinComposedFlag(Event);
	  var PatchedCustomEvent = mixinComposedFlag(CustomEvent);
	  var PatchedMouseEvent = mixinComposedFlag(MouseEvent);
	
	  /**
	  @license
	  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
	  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	  Code distributed by Google as part of the polymer project is also
	  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	  */
	
	  /**
	   * Patches elements that interacts with ShadyDOM
	   * such that tree traversal and mutation apis act like they would under
	   * ShadowDOM.
	   *
	   * This import enables seemless interaction with ShadyDOM powered
	   * custom elements, enabling better interoperation with 3rd party code,
	   * libraries, and frameworks that use DOM tree manipulation apis.
	   */
	
	  if (settings.inUse) {
	
	    window.ShadyDOM = {
	      tree: tree,
	      getNativeProperty: getNativeProperty,
	      patch: patchNode,
	      isPatched: isNodePatched,
	      unpatch: unpatchNode,
	      isShadyRoot: isShadyRoot,
	      enqueue: enqueue,
	      flush: flush$1,
	      inUse: settings.inUse,
	      filterMutations: filterMutations,
	      observeChildren: observeChildren,
	      unobserveChildren: unobserveChildren
	    };
	
	    var createRootAndEnsurePatched = function createRootAndEnsurePatched(node) {
	      // TODO(sorvell): need to ensure ancestors are patched but this introduces
	      // a timing problem with gathering composed children.
	      // (1) currently the child list is crawled and patched when patching occurs
	      // (this needs to change)
	      // (2) we can only patch when an element has received its parsed children
	      // because we cannot detect them when inserted by parser.
	      // let ancestor = node;
	      // while (ancestor) {
	      //   patchNode(ancestor);
	      //   ancestor = ancestor.parentNode || ancestor.host;
	      // }
	      patchNode(node);
	      var root = new ShadyRoot(node);
	      patchNode(root);
	      return root;
	    };
	
	    Element.prototype.attachShadow = function () {
	      return createRootAndEnsurePatched(this);
	    };
	
	    Node.prototype.addEventListener = addEventListener;
	    Node.prototype.removeEventListener = removeEventListener;
	    Event = PatchedEvent;
	    CustomEvent = PatchedCustomEvent;
	    MouseEvent = PatchedMouseEvent;
	    activateFocusEventOverrides();
	
	    Object.defineProperty(Node.prototype, 'isConnected', {
	      get: function get() {
	        return document.documentElement.contains(this);
	      },
	      configurable: true
	    });
	
	    Node.prototype.getRootNode = function (options) {
	      return getRootNode(this, options);
	    };
	
	    Object.defineProperty(Element.prototype, 'slot', {
	      get: function get$1() {
	        return this.getAttribute('slot');
	      },
	      set: function set(value) {
	        this.setAttribute('slot', value);
	      },
	      configurable: true
	    });
	
	    Object.defineProperty(Node.prototype, 'assignedSlot', {
	      get: function get$2() {
	        return this._assignedSlot || null;
	      },
	      configurable: true
	    });
	
	    // TODO(sorvell): super experimental auto patching of document fragment
	    // via appendChild. This either needs to be expanded or contracted.
	    // DocumentFragment.prototype.appendChild = function(node) {
	    //   patchNode(this);
	    //   return this.appendChild(node);
	    // }
	  }
	})();
	
	//# sourceMappingURL=shadydom.min.js.map

/***/ },
/* 2 */
/*!*****************************************************************************!*\
  !*** ./~/document-register-element/build/document-register-element.node.js ***!
  \*****************************************************************************/
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	
	Copyright (C) 2014-2016 by Andrea Giammarchi - @WebReflection
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
	
	*/
	function installCustomElements(window) {'use strict';
	
	  // DO NOT USE THIS FILE DIRECTLY, IT WON'T WORK
	  // THIS IS A PROJECT BASED ON A BUILD SYSTEM
	  // THIS FILE IS JUST WRAPPED UP RESULTING IN
	  // build/document-register-element.node.js
	
	  var
	    document = window.document,
	    Object = window.Object
	  ;
	
	  var htmlClass = (function (info) {
	    // (C) Andrea Giammarchi - @WebReflection - MIT Style
	    var
	      catchClass = /^[A-Z]+[a-z]/,
	      filterBy = function (re) {
	        var arr = [], tag;
	        for (tag in register) {
	          if (re.test(tag)) arr.push(tag);
	        }
	        return arr;
	      },
	      add = function (Class, tag) {
	        tag = tag.toLowerCase();
	        if (!(tag in register)) {
	          register[Class] = (register[Class] || []).concat(tag);
	          register[tag] = (register[tag.toUpperCase()] = Class);
	        }
	      },
	      register = (Object.create || Object)(null),
	      htmlClass = {},
	      i, section, tags, Class
	    ;
	    for (section in info) {
	      for (Class in info[section]) {
	        tags = info[section][Class];
	        register[Class] = tags;
	        for (i = 0; i < tags.length; i++) {
	          register[tags[i].toLowerCase()] =
	          register[tags[i].toUpperCase()] = Class;
	        }
	      }
	    }
	    htmlClass.get = function get(tagOrClass) {
	      return typeof tagOrClass === 'string' ?
	        (register[tagOrClass] || (catchClass.test(tagOrClass) ? [] : '')) :
	        filterBy(tagOrClass);
	    };
	    htmlClass.set = function set(tag, Class) {
	      return (catchClass.test(tag) ?
	        add(tag, Class) :
	        add(Class, tag)
	      ), htmlClass;
	    };
	    return htmlClass;
	  }({
	    "collections": {
	      "HTMLAllCollection": [
	        "all"
	      ],
	      "HTMLCollection": [
	        "forms"
	      ],
	      "HTMLFormControlsCollection": [
	        "elements"
	      ],
	      "HTMLOptionsCollection": [
	        "options"
	      ]
	    },
	    "elements": {
	      "Element": [
	        "element"
	      ],
	      "HTMLAnchorElement": [
	        "a"
	      ],
	      "HTMLAppletElement": [
	        "applet"
	      ],
	      "HTMLAreaElement": [
	        "area"
	      ],
	      "HTMLAttachmentElement": [
	        "attachment"
	      ],
	      "HTMLAudioElement": [
	        "audio"
	      ],
	      "HTMLBRElement": [
	        "br"
	      ],
	      "HTMLBaseElement": [
	        "base"
	      ],
	      "HTMLBodyElement": [
	        "body"
	      ],
	      "HTMLButtonElement": [
	        "button"
	      ],
	      "HTMLCanvasElement": [
	        "canvas"
	      ],
	      "HTMLContentElement": [
	        "content"
	      ],
	      "HTMLDListElement": [
	        "dl"
	      ],
	      "HTMLDataElement": [
	        "data"
	      ],
	      "HTMLDataListElement": [
	        "datalist"
	      ],
	      "HTMLDetailsElement": [
	        "details"
	      ],
	      "HTMLDialogElement": [
	        "dialog"
	      ],
	      "HTMLDirectoryElement": [
	        "dir"
	      ],
	      "HTMLDivElement": [
	        "div"
	      ],
	      "HTMLDocument": [
	        "document"
	      ],
	      "HTMLElement": [
	        "element",
	        "abbr",
	        "address",
	        "article",
	        "aside",
	        "b",
	        "bdi",
	        "bdo",
	        "cite",
	        "code",
	        "command",
	        "dd",
	        "dfn",
	        "dt",
	        "em",
	        "figcaption",
	        "figure",
	        "footer",
	        "header",
	        "i",
	        "kbd",
	        "mark",
	        "nav",
	        "noscript",
	        "rp",
	        "rt",
	        "ruby",
	        "s",
	        "samp",
	        "section",
	        "small",
	        "strong",
	        "sub",
	        "summary",
	        "sup",
	        "u",
	        "var",
	        "wbr"
	      ],
	      "HTMLEmbedElement": [
	        "embed"
	      ],
	      "HTMLFieldSetElement": [
	        "fieldset"
	      ],
	      "HTMLFontElement": [
	        "font"
	      ],
	      "HTMLFormElement": [
	        "form"
	      ],
	      "HTMLFrameElement": [
	        "frame"
	      ],
	      "HTMLFrameSetElement": [
	        "frameset"
	      ],
	      "HTMLHRElement": [
	        "hr"
	      ],
	      "HTMLHeadElement": [
	        "head"
	      ],
	      "HTMLHeadingElement": [
	        "h1",
	        "h2",
	        "h3",
	        "h4",
	        "h5",
	        "h6"
	      ],
	      "HTMLHtmlElement": [
	        "html"
	      ],
	      "HTMLIFrameElement": [
	        "iframe"
	      ],
	      "HTMLImageElement": [
	        "img"
	      ],
	      "HTMLInputElement": [
	        "input"
	      ],
	      "HTMLKeygenElement": [
	        "keygen"
	      ],
	      "HTMLLIElement": [
	        "li"
	      ],
	      "HTMLLabelElement": [
	        "label"
	      ],
	      "HTMLLegendElement": [
	        "legend"
	      ],
	      "HTMLLinkElement": [
	        "link"
	      ],
	      "HTMLMapElement": [
	        "map"
	      ],
	      "HTMLMarqueeElement": [
	        "marquee"
	      ],
	      "HTMLMediaElement": [
	        "media"
	      ],
	      "HTMLMenuElement": [
	        "menu"
	      ],
	      "HTMLMenuItemElement": [
	        "menuitem"
	      ],
	      "HTMLMetaElement": [
	        "meta"
	      ],
	      "HTMLMeterElement": [
	        "meter"
	      ],
	      "HTMLModElement": [
	        "del",
	        "ins"
	      ],
	      "HTMLOListElement": [
	        "ol"
	      ],
	      "HTMLObjectElement": [
	        "object"
	      ],
	      "HTMLOptGroupElement": [
	        "optgroup"
	      ],
	      "HTMLOptionElement": [
	        "option"
	      ],
	      "HTMLOutputElement": [
	        "output"
	      ],
	      "HTMLParagraphElement": [
	        "p"
	      ],
	      "HTMLParamElement": [
	        "param"
	      ],
	      "HTMLPictureElement": [
	        "picture"
	      ],
	      "HTMLPreElement": [
	        "pre"
	      ],
	      "HTMLProgressElement": [
	        "progress"
	      ],
	      "HTMLQuoteElement": [
	        "blockquote",
	        "q",
	        "quote"
	      ],
	      "HTMLScriptElement": [
	        "script"
	      ],
	      "HTMLSelectElement": [
	        "select"
	      ],
	      "HTMLShadowElement": [
	        "shadow"
	      ],
	      "HTMLSlotElement": [
	        "slot"
	      ],
	      "HTMLSourceElement": [
	        "source"
	      ],
	      "HTMLSpanElement": [
	        "span"
	      ],
	      "HTMLStyleElement": [
	        "style"
	      ],
	      "HTMLTableCaptionElement": [
	        "caption"
	      ],
	      "HTMLTableCellElement": [
	        "td",
	        "th"
	      ],
	      "HTMLTableColElement": [
	        "col",
	        "colgroup"
	      ],
	      "HTMLTableElement": [
	        "table"
	      ],
	      "HTMLTableRowElement": [
	        "tr"
	      ],
	      "HTMLTableSectionElement": [
	        "thead",
	        "tbody",
	        "tfoot"
	      ],
	      "HTMLTemplateElement": [
	        "template"
	      ],
	      "HTMLTextAreaElement": [
	        "textarea"
	      ],
	      "HTMLTimeElement": [
	        "time"
	      ],
	      "HTMLTitleElement": [
	        "title"
	      ],
	      "HTMLTrackElement": [
	        "track"
	      ],
	      "HTMLUListElement": [
	        "ul"
	      ],
	      "HTMLUnknownElement": [
	        "unknown",
	        "vhgroupv",
	        "vkeygen"
	      ],
	      "HTMLVideoElement": [
	        "video"
	      ]
	    },
	    "nodes": {
	      "Attr": [
	        "node"
	      ],
	      "Audio": [
	        "audio"
	      ],
	      "CDATASection": [
	        "node"
	      ],
	      "CharacterData": [
	        "node"
	      ],
	      "Comment": [
	        "#comment"
	      ],
	      "Document": [
	        "#document"
	      ],
	      "DocumentFragment": [
	        "#document-fragment"
	      ],
	      "DocumentType": [
	        "node"
	      ],
	      "HTMLDocument": [
	        "#document"
	      ],
	      "Image": [
	        "img"
	      ],
	      "Option": [
	        "option"
	      ],
	      "ProcessingInstruction": [
	        "node"
	      ],
	      "ShadowRoot": [
	        "#shadow-root"
	      ],
	      "Text": [
	        "#text"
	      ],
	      "XMLDocument": [
	        "xml"
	      ]
	    }
	  }));
	  
	  
	    var
	    // V0 polyfill entry
	    REGISTER_ELEMENT = 'registerElement',
	  
	    // IE < 11 only + old WebKit for attributes + feature detection
	    EXPANDO_UID = '__' + REGISTER_ELEMENT + (window.Math.random() * 10e4 >> 0),
	  
	    // shortcuts and costants
	    ADD_EVENT_LISTENER = 'addEventListener',
	    ATTACHED = 'attached',
	    CALLBACK = 'Callback',
	    DETACHED = 'detached',
	    EXTENDS = 'extends',
	  
	    ATTRIBUTE_CHANGED_CALLBACK = 'attributeChanged' + CALLBACK,
	    ATTACHED_CALLBACK = ATTACHED + CALLBACK,
	    CONNECTED_CALLBACK = 'connected' + CALLBACK,
	    DISCONNECTED_CALLBACK = 'disconnected' + CALLBACK,
	    CREATED_CALLBACK = 'created' + CALLBACK,
	    DETACHED_CALLBACK = DETACHED + CALLBACK,
	  
	    ADDITION = 'ADDITION',
	    MODIFICATION = 'MODIFICATION',
	    REMOVAL = 'REMOVAL',
	  
	    DOM_ATTR_MODIFIED = 'DOMAttrModified',
	    DOM_CONTENT_LOADED = 'DOMContentLoaded',
	    DOM_SUBTREE_MODIFIED = 'DOMSubtreeModified',
	  
	    PREFIX_TAG = '<',
	    PREFIX_IS = '=',
	  
	    // valid and invalid node names
	    validName = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
	    invalidNames = [
	      'ANNOTATION-XML',
	      'COLOR-PROFILE',
	      'FONT-FACE',
	      'FONT-FACE-SRC',
	      'FONT-FACE-URI',
	      'FONT-FACE-FORMAT',
	      'FONT-FACE-NAME',
	      'MISSING-GLYPH'
	    ],
	  
	    // registered types and their prototypes
	    types = [],
	    protos = [],
	  
	    // to query subnodes
	    query = '',
	  
	    // html shortcut used to feature detect
	    documentElement = document.documentElement,
	  
	    // ES5 inline helpers || basic patches
	    indexOf = types.indexOf || function (v) {
	      for(var i = this.length; i-- && this[i] !== v;){}
	      return i;
	    },
	  
	    // other helpers / shortcuts
	    OP = Object.prototype,
	    hOP = OP.hasOwnProperty,
	    iPO = OP.isPrototypeOf,
	  
	    defineProperty = Object.defineProperty,
	    empty = [],
	    gOPD = Object.getOwnPropertyDescriptor,
	    gOPN = Object.getOwnPropertyNames,
	    gPO = Object.getPrototypeOf,
	    sPO = Object.setPrototypeOf,
	  
	    // jshint proto: true
	    hasProto = !!Object.__proto__,
	  
	    // V1 helpers
	    fixGetClass = false,
	    DRECEV1 = '__dreCEv1',
	    customElements = window.customElements,
	    usableCustomElements = !!(
	      customElements &&
	      customElements.define &&
	      customElements.get &&
	      customElements.whenDefined
	    ),
	    Dict = Object.create || Object,
	    Map = window.Map || function Map() {
	      var K = [], V = [], i;
	      return {
	        get: function (k) {
	          return V[indexOf.call(K, k)];
	        },
	        set: function (k, v) {
	          i = indexOf.call(K, k);
	          if (i < 0) V[K.push(k) - 1] = v;
	          else V[i] = v;
	        }
	      };
	    },
	    Promise = window.Promise || function (fn) {
	      var
	        notify = [],
	        done = false,
	        p = {
	          'catch': function () {
	            return p;
	          },
	          'then': function (cb) {
	            notify.push(cb);
	            if (done) setTimeout(resolve, 1);
	            return p;
	          }
	        }
	      ;
	      function resolve(value) {
	        done = true;
	        while (notify.length) notify.shift()(value);
	      }
	      fn(resolve);
	      return p;
	    },
	    justCreated = false,
	    constructors = Dict(null),
	    waitingList = Dict(null),
	    nodeNames = new Map(),
	    secondArgument = String,
	  
	    // used to create unique instances
	    create = Object.create || function Bridge(proto) {
	      // silly broken polyfill probably ever used but short enough to work
	      return proto ? ((Bridge.prototype = proto), new Bridge()) : this;
	    },
	  
	    // will set the prototype if possible
	    // or copy over all properties
	    setPrototype = sPO || (
	      hasProto ?
	        function (o, p) {
	          o.__proto__ = p;
	          return o;
	        } : (
	      (gOPN && gOPD) ?
	        (function(){
	          function setProperties(o, p) {
	            for (var
	              key,
	              names = gOPN(p),
	              i = 0, length = names.length;
	              i < length; i++
	            ) {
	              key = names[i];
	              if (!hOP.call(o, key)) {
	                defineProperty(o, key, gOPD(p, key));
	              }
	            }
	          }
	          return function (o, p) {
	            do {
	              setProperties(o, p);
	            } while ((p = gPO(p)) && !iPO.call(p, o));
	            return o;
	          };
	        }()) :
	        function (o, p) {
	          for (var key in p) {
	            o[key] = p[key];
	          }
	          return o;
	        }
	    )),
	  
	    // DOM shortcuts and helpers, if any
	  
	    MutationObserver = window.MutationObserver ||
	                       window.WebKitMutationObserver,
	  
	    HTMLElementPrototype = (
	      window.HTMLElement ||
	      window.Element ||
	      window.Node
	    ).prototype,
	  
	    IE8 = !iPO.call(HTMLElementPrototype, documentElement),
	  
	    safeProperty = IE8 ? function (o, k, d) {
	      o[k] = d.value;
	      return o;
	    } : defineProperty,
	  
	    isValidNode = IE8 ?
	      function (node) {
	        return node.nodeType === 1;
	      } :
	      function (node) {
	        return iPO.call(HTMLElementPrototype, node);
	      },
	  
	    targets = IE8 && [],
	  
	    attachShadow = HTMLElementPrototype.attachShadow,
	    cloneNode = HTMLElementPrototype.cloneNode,
	    dispatchEvent = HTMLElementPrototype.dispatchEvent,
	    getAttribute = HTMLElementPrototype.getAttribute,
	    hasAttribute = HTMLElementPrototype.hasAttribute,
	    removeAttribute = HTMLElementPrototype.removeAttribute,
	    setAttribute = HTMLElementPrototype.setAttribute,
	  
	    // replaced later on
	    createElement = document.createElement,
	    patchedCreateElement = createElement,
	  
	    // shared observer for all attributes
	    attributesObserver = MutationObserver && {
	      attributes: true,
	      characterData: true,
	      attributeOldValue: true
	    },
	  
	    // useful to detect only if there's no MutationObserver
	    DOMAttrModified = MutationObserver || function(e) {
	      doesNotSupportDOMAttrModified = false;
	      documentElement.removeEventListener(
	        DOM_ATTR_MODIFIED,
	        DOMAttrModified
	      );
	    },
	  
	    // will both be used to make DOMNodeInserted asynchronous
	    asapQueue,
	    asapTimer = 0,
	  
	    // internal flags
	    setListener = false,
	    doesNotSupportDOMAttrModified = true,
	    dropDomContentLoaded = true,
	  
	    // needed for the innerHTML helper
	    notFromInnerHTMLHelper = true,
	  
	    // optionally defined later on
	    onSubtreeModified,
	    callDOMAttrModified,
	    getAttributesMirror,
	    observer,
	    observe,
	  
	    // based on setting prototype capability
	    // will check proto or the expando attribute
	    // in order to setup the node once
	    patchIfNotAlready,
	    patch
	  ;
	  
	  // only if needed
	  if (!(REGISTER_ELEMENT in document)) {
	  
	    if (sPO || hasProto) {
	        patchIfNotAlready = function (node, proto) {
	          if (!iPO.call(proto, node)) {
	            setupNode(node, proto);
	          }
	        };
	        patch = setupNode;
	    } else {
	        patchIfNotAlready = function (node, proto) {
	          if (!node[EXPANDO_UID]) {
	            node[EXPANDO_UID] = Object(true);
	            setupNode(node, proto);
	          }
	        };
	        patch = patchIfNotAlready;
	    }
	  
	    if (IE8) {
	      doesNotSupportDOMAttrModified = false;
	      (function (){
	        var
	          descriptor = gOPD(HTMLElementPrototype, ADD_EVENT_LISTENER),
	          addEventListener = descriptor.value,
	          patchedRemoveAttribute = function (name) {
	            var e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
	            e.attrName = name;
	            e.prevValue = getAttribute.call(this, name);
	            e.newValue = null;
	            e[REMOVAL] = e.attrChange = 2;
	            removeAttribute.call(this, name);
	            dispatchEvent.call(this, e);
	          },
	          patchedSetAttribute = function (name, value) {
	            var
	              had = hasAttribute.call(this, name),
	              old = had && getAttribute.call(this, name),
	              e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true})
	            ;
	            setAttribute.call(this, name, value);
	            e.attrName = name;
	            e.prevValue = had ? old : null;
	            e.newValue = value;
	            if (had) {
	              e[MODIFICATION] = e.attrChange = 1;
	            } else {
	              e[ADDITION] = e.attrChange = 0;
	            }
	            dispatchEvent.call(this, e);
	          },
	          onPropertyChange = function (e) {
	            // jshint eqnull:true
	            var
	              node = e.currentTarget,
	              superSecret = node[EXPANDO_UID],
	              propertyName = e.propertyName,
	              event
	            ;
	            if (superSecret.hasOwnProperty(propertyName)) {
	              superSecret = superSecret[propertyName];
	              event = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
	              event.attrName = superSecret.name;
	              event.prevValue = superSecret.value || null;
	              event.newValue = (superSecret.value = node[propertyName] || null);
	              if (event.prevValue == null) {
	                event[ADDITION] = event.attrChange = 0;
	              } else {
	                event[MODIFICATION] = event.attrChange = 1;
	              }
	              dispatchEvent.call(node, event);
	            }
	          }
	        ;
	        descriptor.value = function (type, handler, capture) {
	          if (
	            type === DOM_ATTR_MODIFIED &&
	            this[ATTRIBUTE_CHANGED_CALLBACK] &&
	            this.setAttribute !== patchedSetAttribute
	          ) {
	            this[EXPANDO_UID] = {
	              className: {
	                name: 'class',
	                value: this.className
	              }
	            };
	            this.setAttribute = patchedSetAttribute;
	            this.removeAttribute = patchedRemoveAttribute;
	            addEventListener.call(this, 'propertychange', onPropertyChange);
	          }
	          addEventListener.call(this, type, handler, capture);
	        };
	        defineProperty(HTMLElementPrototype, ADD_EVENT_LISTENER, descriptor);
	      }());
	    } else if (!MutationObserver) {
	      documentElement[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED, DOMAttrModified);
	      documentElement.setAttribute(EXPANDO_UID, 1);
	      documentElement.removeAttribute(EXPANDO_UID);
	      if (doesNotSupportDOMAttrModified) {
	        onSubtreeModified = function (e) {
	          var
	            node = this,
	            oldAttributes,
	            newAttributes,
	            key
	          ;
	          if (node === e.target) {
	            oldAttributes = node[EXPANDO_UID];
	            node[EXPANDO_UID] = (newAttributes = getAttributesMirror(node));
	            for (key in newAttributes) {
	              if (!(key in oldAttributes)) {
	                // attribute was added
	                return callDOMAttrModified(
	                  0,
	                  node,
	                  key,
	                  oldAttributes[key],
	                  newAttributes[key],
	                  ADDITION
	                );
	              } else if (newAttributes[key] !== oldAttributes[key]) {
	                // attribute was changed
	                return callDOMAttrModified(
	                  1,
	                  node,
	                  key,
	                  oldAttributes[key],
	                  newAttributes[key],
	                  MODIFICATION
	                );
	              }
	            }
	            // checking if it has been removed
	            for (key in oldAttributes) {
	              if (!(key in newAttributes)) {
	                // attribute removed
	                return callDOMAttrModified(
	                  2,
	                  node,
	                  key,
	                  oldAttributes[key],
	                  newAttributes[key],
	                  REMOVAL
	                );
	              }
	            }
	          }
	        };
	        callDOMAttrModified = function (
	          attrChange,
	          currentTarget,
	          attrName,
	          prevValue,
	          newValue,
	          action
	        ) {
	          var e = {
	            attrChange: attrChange,
	            currentTarget: currentTarget,
	            attrName: attrName,
	            prevValue: prevValue,
	            newValue: newValue
	          };
	          e[action] = attrChange;
	          onDOMAttrModified(e);
	        };
	        getAttributesMirror = function (node) {
	          for (var
	            attr, name,
	            result = {},
	            attributes = node.attributes,
	            i = 0, length = attributes.length;
	            i < length; i++
	          ) {
	            attr = attributes[i];
	            name = attr.name;
	            if (name !== 'setAttribute') {
	              result[name] = attr.value;
	            }
	          }
	          return result;
	        };
	      }
	    }
	  
	    // set as enumerable, writable and configurable
	    document[REGISTER_ELEMENT] = function registerElement(type, options) {
	      upperType = type.toUpperCase();
	      if (!setListener) {
	        // only first time document.registerElement is used
	        // we need to set this listener
	        // setting it by default might slow down for no reason
	        setListener = true;
	        if (MutationObserver) {
	          observer = (function(attached, detached){
	            function checkEmAll(list, callback) {
	              for (var i = 0, length = list.length; i < length; callback(list[i++])){}
	            }
	            return new MutationObserver(function (records) {
	              for (var
	                current, node, newValue,
	                i = 0, length = records.length; i < length; i++
	              ) {
	                current = records[i];
	                if (current.type === 'childList') {
	                  checkEmAll(current.addedNodes, attached);
	                  checkEmAll(current.removedNodes, detached);
	                } else {
	                  node = current.target;
	                  if (notFromInnerHTMLHelper &&
	                      node[ATTRIBUTE_CHANGED_CALLBACK] &&
	                      current.attributeName !== 'style') {
	                    newValue = getAttribute.call(node, current.attributeName);
	                    if (newValue !== current.oldValue) {
	                      node[ATTRIBUTE_CHANGED_CALLBACK](
	                        current.attributeName,
	                        current.oldValue,
	                        newValue
	                      );
	                    }
	                  }
	                }
	              }
	            });
	          }(executeAction(ATTACHED), executeAction(DETACHED)));
	          observe = function (node) {
	            observer.observe(
	              node,
	              {
	                childList: true,
	                subtree: true
	              }
	            );
	            return node;
	          };
	          observe(document);
	          if (attachShadow) {
	            HTMLElementPrototype.attachShadow = function () {
	              return observe(attachShadow.apply(this, arguments));
	            };
	          }
	        } else {
	          asapQueue = [];
	          document[ADD_EVENT_LISTENER]('DOMNodeInserted', onDOMNode(ATTACHED));
	          document[ADD_EVENT_LISTENER]('DOMNodeRemoved', onDOMNode(DETACHED));
	        }
	  
	        document[ADD_EVENT_LISTENER](DOM_CONTENT_LOADED, onReadyStateChange);
	        document[ADD_EVENT_LISTENER]('readystatechange', onReadyStateChange);
	  
	        HTMLElementPrototype.cloneNode = function (deep) {
	          var
	            node = cloneNode.call(this, !!deep),
	            i = getTypeIndex(node)
	          ;
	          if (-1 < i) patch(node, protos[i]);
	          if (deep) loopAndSetup(node.querySelectorAll(query));
	          return node;
	        };
	      }
	  
	      if (-2 < (
	        indexOf.call(types, PREFIX_IS + upperType) +
	        indexOf.call(types, PREFIX_TAG + upperType)
	      )) {
	        throwTypeError(type);
	      }
	  
	      if (!validName.test(upperType) || -1 < indexOf.call(invalidNames, upperType)) {
	        throw new Error('The type ' + type + ' is invalid');
	      }
	  
	      var
	        constructor = function () {
	          return extending ?
	            document.createElement(nodeName, upperType) :
	            document.createElement(nodeName);
	        },
	        opt = options || OP,
	        extending = hOP.call(opt, EXTENDS),
	        nodeName = extending ? options[EXTENDS].toUpperCase() : upperType,
	        upperType,
	        i
	      ;
	  
	      if (extending && -1 < (
	        indexOf.call(types, PREFIX_TAG + nodeName)
	      )) {
	        throwTypeError(nodeName);
	      }
	  
	      i = types.push((extending ? PREFIX_IS : PREFIX_TAG) + upperType) - 1;
	  
	      query = query.concat(
	        query.length ? ',' : '',
	        extending ? nodeName + '[is="' + type.toLowerCase() + '"]' : nodeName
	      );
	  
	      constructor.prototype = (
	        protos[i] = hOP.call(opt, 'prototype') ?
	          opt.prototype :
	          create(HTMLElementPrototype)
	      );
	  
	      loopAndVerify(
	        document.querySelectorAll(query),
	        ATTACHED
	      );
	  
	      return constructor;
	    };
	  
	    document.createElement = (patchedCreateElement = function (localName, typeExtension) {
	      var
	        is = getIs(typeExtension),
	        node = is ?
	          createElement.call(document, localName, secondArgument(is)) :
	          createElement.call(document, localName),
	        name = '' + localName,
	        i = indexOf.call(
	          types,
	          (is ? PREFIX_IS : PREFIX_TAG) +
	          (is || name).toUpperCase()
	        ),
	        setup = -1 < i
	      ;
	      if (is) {
	        node.setAttribute('is', is = is.toLowerCase());
	        if (setup) {
	          setup = isInQSA(name.toUpperCase(), is);
	        }
	      }
	      notFromInnerHTMLHelper = !document.createElement.innerHTMLHelper;
	      if (setup) patch(node, protos[i]);
	      return node;
	    });
	  
	  }
	  
	  function ASAP() {
	    var queue = asapQueue.splice(0, asapQueue.length);
	    asapTimer = 0;
	    while (queue.length) {
	      queue.shift().call(
	        null, queue.shift()
	      );
	    }
	  }
	  
	  function loopAndVerify(list, action) {
	    for (var i = 0, length = list.length; i < length; i++) {
	      verifyAndSetupAndAction(list[i], action);
	    }
	  }
	  
	  function loopAndSetup(list) {
	    for (var i = 0, length = list.length, node; i < length; i++) {
	      node = list[i];
	      patch(node, protos[getTypeIndex(node)]);
	    }
	  }
	  
	  function executeAction(action) {
	    return function (node) {
	      if (isValidNode(node)) {
	        verifyAndSetupAndAction(node, action);
	        loopAndVerify(
	          node.querySelectorAll(query),
	          action
	        );
	      }
	    };
	  }
	  
	  function getTypeIndex(target) {
	    var
	      is = getAttribute.call(target, 'is'),
	      nodeName = target.nodeName.toUpperCase(),
	      i = indexOf.call(
	        types,
	        is ?
	            PREFIX_IS + is.toUpperCase() :
	            PREFIX_TAG + nodeName
	      )
	    ;
	    return is && -1 < i && !isInQSA(nodeName, is) ? -1 : i;
	  }
	  
	  function isInQSA(name, type) {
	    return -1 < query.indexOf(name + '[is="' + type + '"]');
	  }
	  
	  function onDOMAttrModified(e) {
	    var
	      node = e.currentTarget,
	      attrChange = e.attrChange,
	      attrName = e.attrName,
	      target = e.target,
	      addition = e[ADDITION] || 2,
	      removal = e[REMOVAL] || 3
	    ;
	    if (notFromInnerHTMLHelper &&
	        (!target || target === node) &&
	        node[ATTRIBUTE_CHANGED_CALLBACK] &&
	        attrName !== 'style' && (
	          e.prevValue !== e.newValue ||
	          // IE9, IE10, and Opera 12 gotcha
	          e.newValue === '' && (
	            attrChange === addition ||
	            attrChange === removal
	          )
	    )) {
	      node[ATTRIBUTE_CHANGED_CALLBACK](
	        attrName,
	        attrChange === addition ? null : e.prevValue,
	        attrChange === removal ? null : e.newValue
	      );
	    }
	  }
	  
	  function onDOMNode(action) {
	    var executor = executeAction(action);
	    return function (e) {
	      asapQueue.push(executor, e.target);
	      if (asapTimer) clearTimeout(asapTimer);
	      asapTimer = setTimeout(ASAP, 1);
	    };
	  }
	  
	  function onReadyStateChange(e) {
	    if (dropDomContentLoaded) {
	      dropDomContentLoaded = false;
	      e.currentTarget.removeEventListener(DOM_CONTENT_LOADED, onReadyStateChange);
	    }
	    loopAndVerify(
	      (e.target || document).querySelectorAll(query),
	      e.detail === DETACHED ? DETACHED : ATTACHED
	    );
	    if (IE8) purge();
	  }
	  
	  function patchedSetAttribute(name, value) {
	    // jshint validthis:true
	    var self = this;
	    setAttribute.call(self, name, value);
	    onSubtreeModified.call(self, {target: self});
	  }
	  
	  function setupNode(node, proto) {
	    setPrototype(node, proto);
	    if (observer) {
	      observer.observe(node, attributesObserver);
	    } else {
	      if (doesNotSupportDOMAttrModified) {
	        node.setAttribute = patchedSetAttribute;
	        node[EXPANDO_UID] = getAttributesMirror(node);
	        node[ADD_EVENT_LISTENER](DOM_SUBTREE_MODIFIED, onSubtreeModified);
	      }
	      node[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED, onDOMAttrModified);
	    }
	    if (node[CREATED_CALLBACK] && notFromInnerHTMLHelper) {
	      node.created = true;
	      node[CREATED_CALLBACK]();
	      node.created = false;
	    }
	  }
	  
	  function purge() {
	    for (var
	      node,
	      i = 0,
	      length = targets.length;
	      i < length; i++
	    ) {
	      node = targets[i];
	      if (!documentElement.contains(node)) {
	        length--;
	        targets.splice(i--, 1);
	        verifyAndSetupAndAction(node, DETACHED);
	      }
	    }
	  }
	  
	  function throwTypeError(type) {
	    throw new Error('A ' + type + ' type is already registered');
	  }
	  
	  function verifyAndSetupAndAction(node, action) {
	    var
	      fn,
	      i = getTypeIndex(node)
	    ;
	    if (-1 < i) {
	      patchIfNotAlready(node, protos[i]);
	      i = 0;
	      if (action === ATTACHED && !node[ATTACHED]) {
	        node[DETACHED] = false;
	        node[ATTACHED] = true;
	        i = 1;
	        if (IE8 && indexOf.call(targets, node) < 0) {
	          targets.push(node);
	        }
	      } else if (action === DETACHED && !node[DETACHED]) {
	        node[ATTACHED] = false;
	        node[DETACHED] = true;
	        i = 1;
	      }
	      if (i && (fn = node[action + CALLBACK])) fn.call(node);
	    }
	  }
	  
	  
	  
	  // V1 in da House!
	  function CustomElementRegistry() {}
	  
	  CustomElementRegistry.prototype = {
	    constructor: CustomElementRegistry,
	    // a workaround for the stubborn WebKit
	    define: usableCustomElements ?
	      function (name, Class, options) {
	        if (options) {
	          CERDefine(name, Class, options);
	        } else {
	          var NAME = name.toUpperCase();
	          constructors[NAME] = {
	            constructor: Class,
	            create: [NAME]
	          };
	          nodeNames.set(Class, NAME);
	          customElements.define(name, Class);
	        }
	      } :
	      CERDefine,
	    get: usableCustomElements ?
	      function (name) {
	        return customElements.get(name) || get(name);
	      } :
	      get,
	    whenDefined: usableCustomElements ?
	      function (name) {
	        return Promise.race([
	          customElements.whenDefined(name),
	          whenDefined(name)
	        ]);
	      } :
	      whenDefined
	  };
	  
	  function CERDefine(name, Class, options) {
	    var
	      is = options && options[EXTENDS] || '',
	      CProto = Class.prototype,
	      proto = create(CProto),
	      attributes = Class.observedAttributes || empty,
	      definition = {prototype: proto}
	    ;
	    // TODO: is this needed at all since it's inherited?
	    // defineProperty(proto, 'constructor', {value: Class});
	    safeProperty(proto, CREATED_CALLBACK, {
	        value: function () {
	          if (justCreated) justCreated = false;
	          else if (!this[DRECEV1]) {
	            this[DRECEV1] = true;
	            new Class(this);
	            if (CProto[CREATED_CALLBACK])
	              CProto[CREATED_CALLBACK].call(this);
	            var info = constructors[nodeNames.get(Class)];
	            if (!usableCustomElements || info.create.length > 1) {
	              notifyAttributes(this);
	            }
	          }
	      }
	    });
	    safeProperty(proto, ATTRIBUTE_CHANGED_CALLBACK, {
	      value: function (name) {
	        if (-1 < indexOf.call(attributes, name))
	          CProto[ATTRIBUTE_CHANGED_CALLBACK].apply(this, arguments);
	      }
	    });
	    if (CProto[CONNECTED_CALLBACK]) {
	      safeProperty(proto, ATTACHED_CALLBACK, {
	        value: CProto[CONNECTED_CALLBACK]
	      });
	    }
	    if (CProto[DISCONNECTED_CALLBACK]) {
	      safeProperty(proto, DETACHED_CALLBACK, {
	        value: CProto[DISCONNECTED_CALLBACK]
	      });
	    }
	    if (is) definition[EXTENDS] = is;
	    name = name.toUpperCase();
	    constructors[name] = {
	      constructor: Class,
	      create: is ? [is, secondArgument(name)] : [name]
	    };
	    nodeNames.set(Class, name);
	    document[REGISTER_ELEMENT](name.toLowerCase(), definition);
	    whenDefined(name);
	    waitingList[name].r();
	  }
	  
	  function get(name) {
	    var info = constructors[name.toUpperCase()];
	    return info && info.constructor;
	  }
	  
	  function getIs(options) {
	    return typeof options === 'string' ?
	        options : (options && options.is || '');
	  }
	  
	  function notifyAttributes(self) {
	    var
	      callback = self[ATTRIBUTE_CHANGED_CALLBACK],
	      attributes = callback ? self.attributes : empty,
	      i = attributes.length,
	      attribute
	    ;
	    while (i--) {
	      attribute =  attributes[i]; // || attributes.item(i);
	      callback.call(
	        self,
	        attribute.name || attribute.nodeName,
	        null,
	        attribute.value || attribute.nodeValue
	      );
	    }
	  }
	  
	  function whenDefined(name) {
	    name = name.toUpperCase();
	    if (!(name in waitingList)) {
	      waitingList[name] = {};
	      waitingList[name].p = new Promise(function (resolve) {
	        waitingList[name].r = resolve;
	      });
	    }
	    return waitingList[name].p;
	  }
	  
	  function polyfillV1() {
	    if (customElements) delete window.customElements;
	    defineProperty(window, 'customElements', {
	      configurable: true,
	      value: new CustomElementRegistry()
	    });
	    defineProperty(window, 'CustomElementRegistry', {
	      configurable: true,
	      value: CustomElementRegistry
	    });
	    for (var
	      patchClass = function (name) {
	        var Class = window[name];
	        if (Class) {
	          window[name] = function CustomElementsV1(self) {
	            var info, isNative;
	            if (!self) self = this;
	            if (!self[DRECEV1]) {
	              justCreated = true;
	              info = constructors[nodeNames.get(self.constructor)];
	              isNative = usableCustomElements && info.create.length === 1;
	              self = isNative ?
	                Reflect.construct(Class, empty, info.constructor) :
	                document.createElement.apply(document, info.create);
	              self[DRECEV1] = true;
	              justCreated = false;
	              if (!isNative) notifyAttributes(self);
	            }
	            return self;
	          };
	          window[name].prototype = Class.prototype;
	          try {
	            Class.prototype.constructor = window[name];
	          } catch(WebKit) {
	            fixGetClass = true;
	            defineProperty(Class, DRECEV1, {value: window[name]});
	          }
	        }
	      },
	      Classes = htmlClass.get(/^HTML[A-Z]*[a-z]/),
	      i = Classes.length;
	      i--;
	      patchClass(Classes[i])
	    ) {}
	    (document.createElement = function (name, options) {
	      var is = getIs(options);
	      return is ?
	        patchedCreateElement.call(this, name, secondArgument(is)) :
	        patchedCreateElement.call(this, name);
	    });
	  }
	  
	  // if customElements is not there at all
	  if (!customElements) polyfillV1();
	  else {
	    // if available test extends work as expected
	    try {
	      (function (DRE, options, name) {
	        options[EXTENDS] = 'a';
	        DRE.prototype = create(HTMLAnchorElement.prototype);
	        DRE.prototype.constructor = DRE;
	        window.customElements.define(name, DRE, options);
	        if (
	          getAttribute.call(document.createElement('a', {is: name}), 'is') !== name ||
	          (usableCustomElements && getAttribute.call(new DRE(), 'is') !== name)
	        ) {
	          throw options;
	        }
	      }(
	        function DRE() {
	          return Reflect.construct(HTMLAnchorElement, [], DRE);
	        },
	        {},
	        'document-register-element-a'
	      ));
	    } catch(o_O) {
	      // or force the polyfill if not
	      // and keep internal original reference
	      polyfillV1();
	    }
	  }
	  
	  try {
	    createElement.call(document, 'a', 'a');
	  } catch(FireFox) {
	    secondArgument = function (is) {
	      return {is: is};
	    };
	  }
	  
	}
	
	installCustomElements(global);
	
	module.exports = installCustomElements;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	     value: true
	});
	
	var _indexWithDeps = __webpack_require__(/*! ../lib/skatejs/index-with-deps */ 4);
	
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
	Object.defineProperty(exports, 'define', {
	     enumerable: true,
	     get: function get() {
	          return _indexWithDeps.define;
	     }
	});

/***/ },
/* 4 */
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
	
				var _define = __webpack_require__(27);
	
				var _define2 = _interopRequireDefault(_define);
	
				var _emit = __webpack_require__(29);
	
				var _emit2 = _interopRequireDefault(_emit);
	
				var _link = __webpack_require__(30);
	
				var _link2 = _interopRequireDefault(_link);
	
				var _props = __webpack_require__(21);
	
				var _props2 = _interopRequireDefault(_props);
	
				var _ready = __webpack_require__(31);
	
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
				exports.create = create;
	
				var _assign = __webpack_require__(2);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _empty = __webpack_require__(4);
	
				var _empty2 = _interopRequireDefault(_empty);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				var alwaysUndefinedIfNotANumberOrNumber = function alwaysUndefinedIfNotANumberOrNumber(val) {
					return isNaN(val) ? undefined : Number(val);
				};
				var alwaysUndefinedIfEmptyOrString = function alwaysUndefinedIfEmptyOrString(val) {
					return (0, _empty2.default)(val) ? undefined : String(val);
				};
	
				function create(def) {
					return function () {
						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
							args[_key] = arguments[_key];
						}
	
						args.unshift({}, def);
						return _assign2.default.apply(undefined, args);
					};
				}
	
				var array = exports.array = create({
					coerce: function coerce(val) {
						return Array.isArray(val) ? val : [val];
					},
					default: function _default() {
						return [];
					},
					deserialize: JSON.parse,
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
	
				// DEPRECATED
				//
				// This is the only "symbol" that must stay a string. This is because it is
				// relied upon across several versions. We should remove it, but ensure that
				// it's considered a breaking change that whatever version removes it cannot
				// be passed to vdom functions as tag names.
				var name = exports.name = '____skate_name';
	
				// Used on the Constructor
				var ctorCreateInitProps = exports.ctorCreateInitProps = '____skate_ctor_createInitProps';
				var ctorObservedAttributes = exports.ctorObservedAttributes = '____skate_ctor_observedAttributes';
				var ctorProps = exports.ctorProps = '____skate_ctor_props';
				var ctorPropsMap = exports.ctorPropsMap = '____skate_ctor_propsMap';
	
				// Used on the Element
				var props = exports.props = '____skate_props';
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
					var _ref = customElements.get(elem.localName) || {
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
	
				function resolveTagName(name) {
					// We return falsy values as some wrapped IDOM functions allow empty values.
					if (!name) {
						return name;
					}
	
					// We try and return the cached tag name, if one exists.
					if (name[_symbols.name]) {
						return name[_symbols.name];
					}
	
					// If it's a custom element, we get the tag name by constructing it and
					// caching it.
					if (name.prototype instanceof HTMLElement) {
						// eslint-disable-next-line
						var elem = new name();
						return name[_symbols.name] = elem.localName;
					}
	
					// Pass all other values through so IDOM gets what it's expecting.
					return name;
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
	
				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();
	
				var _get = function get(object, property, receiver) {
					if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
						var parent = Object.getPrototypeOf(object);if (parent === null) {
							return undefined;
						} else {
							return get(parent, property, receiver);
						}
					} else if ("value" in desc) {
						return desc.value;
					} else {
						var getter = desc.get;if (getter === undefined) {
							return undefined;
						}return getter.call(receiver);
					}
				};
	
				var _incrementalDom = __webpack_require__(8);
	
				var _symbols = __webpack_require__(6);
	
				var _assign = __webpack_require__(2);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _createSymbol = __webpack_require__(12);
	
				var _createSymbol2 = _interopRequireDefault(_createSymbol);
	
				var _data = __webpack_require__(13);
	
				var _data2 = _interopRequireDefault(_data);
	
				var _debounce = __webpack_require__(14);
	
				var _debounce2 = _interopRequireDefault(_debounce);
	
				var _getAllKeys = __webpack_require__(3);
	
				var _getAllKeys2 = _interopRequireDefault(_getAllKeys);
	
				var _getOwnPropertyDescriptors = __webpack_require__(16);
	
				var _getOwnPropertyDescriptors2 = _interopRequireDefault(_getOwnPropertyDescriptors);
	
				var _getPropsMap = __webpack_require__(17);
	
				var _getPropsMap2 = _interopRequireDefault(_getPropsMap);
	
				var _props = __webpack_require__(21);
	
				var _props2 = _interopRequireDefault(_props);
	
				var _propsInit = __webpack_require__(22);
	
				var _setCtorNativeProperty = __webpack_require__(20);
	
				var _setCtorNativeProperty2 = _interopRequireDefault(_setCtorNativeProperty);
	
				var _syncPropToAttr = __webpack_require__(26);
	
				var _syncPropToAttr2 = _interopRequireDefault(_syncPropToAttr);
	
				var _windowOrGlobal = __webpack_require__(10);
	
				var _windowOrGlobal2 = _interopRequireDefault(_windowOrGlobal);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
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
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
				var HTMLElement = _windowOrGlobal2.default.HTMLElement || function () {
					function _class() {
						_classCallCheck(this, _class);
					}
	
					return _class;
				}();
				var _prevName = (0, _createSymbol2.default)('prevName');
				var _prevOldValue = (0, _createSymbol2.default)('prevOldValue');
				var _prevNewValue = (0, _createSymbol2.default)('prevNewValue');
	
				function preventDoubleCalling(elem, name, oldValue, newValue) {
					return name === elem[_prevName] && oldValue === elem[_prevOldValue] && newValue === elem[_prevNewValue];
				}
	
				function syncPropsToAttrs(elem) {
					var props = (0, _getPropsMap2.default)(elem.constructor);
					Object.keys(props).forEach(function (propName) {
						(0, _syncPropToAttr2.default)(elem, props[propName], true);
					});
				}
	
				// TODO remove when not catering to Safari < 10.
				//
				function createNativePropertyDescriptors(Ctor) {
					var propDefs = (0, _getPropsMap2.default)(Ctor);
					return (0, _getAllKeys2.default)(propDefs).reduce(function (propDescriptors, propName) {
						propDescriptors[propName] = (0, _propsInit.createNativePropertyDescriptor)(propDefs[propName]);
						return propDescriptors;
					}, {});
				}
	
				// TODO refactor when not catering to Safari < 10.
				//
				// We should be able to simplify this where all we do is Object.defineProperty().
				function createInitProps(Ctor) {
					var props = createNativePropertyDescriptors(Ctor);
	
					return function (elem) {
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
	
							// DEPRECATED
							//
							// We'll be removing get / set callbacks on properties. Use the
							// updatedCallback() instead.
							//
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
	
				var _class2 = function (_HTMLElement) {
					_inherits(_class2, _HTMLElement);
	
					_createClass(_class2, null, [{
						key: 'observedAttributes',
	
						/**
	      * Returns unique attribute names configured with props and
	      * those set on the Component constructor if any
	      */
						get: function get() {
							var attrsOnCtor = this.hasOwnProperty(_symbols.ctorObservedAttributes) ? this[_symbols.ctorObservedAttributes] : [];
	
							var props = (0, _getPropsMap2.default)(this);
							var attrsFromLinkedProps = Object.keys(props).map(function (key) {
								return props[key].attrIn;
							}).filter(Boolean);
	
							var all = attrsFromLinkedProps.concat(attrsOnCtor).concat(_get(_class2.__proto__ || Object.getPrototypeOf(_class2), 'observedAttributes', this));
	
							return all.filter(function (item, index) {
								return all.indexOf(item) === index;
							});
						},
						set: function set(value) {
							value = Array.isArray(value) ? value : [];
							(0, _setCtorNativeProperty2.default)(this, 'observedAttributes', value);
						}
	
						// Returns superclass props overwritten with this Component props
	
					}, {
						key: 'props',
						get: function get() {
							return (0, _assign2.default)({}, _get(_class2.__proto__ || Object.getPrototypeOf(_class2), 'props', this), this[_symbols.ctorProps]);
						},
						set: function set(value) {
							(0, _setCtorNativeProperty2.default)(this, _symbols.ctorProps, value);
						}
					}]);
	
					function _class2() {
						_classCallCheck(this, _class2);
	
						var _this = _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).call(this));
	
						var constructor = _this.constructor;
	
						// Used for the ready() function so it knows when it can call its callback.
	
						_this[_symbols.created] = true;
	
						// TODO refactor to not cater to Safari < 10. This means we can depend on
						// built-in property descriptors.
						// Must be defined on constructor and not from a superclass
						if (!constructor.hasOwnProperty(_symbols.ctorCreateInitProps)) {
							(0, _setCtorNativeProperty2.default)(constructor, _symbols.ctorCreateInitProps, createInitProps(constructor));
						}
	
						// Set up a renderer that is debounced for property sets to call directly.
						_this[_symbols.rendererDebounced] = (0, _debounce2.default)(_this[_symbols.renderer].bind(_this));
	
						// Set up property lifecycle.
						var propsMapCount = (0, _getAllKeys2.default)((0, _getPropsMap2.default)(constructor)).length;
						if (propsMapCount && constructor[_symbols.ctorCreateInitProps]) {
							constructor[_symbols.ctorCreateInitProps](_this);
						}
	
						// DEPRECATED
						//
						// static render()
						if (!_this.renderCallback && constructor.render) {
							_this.renderCallback = constructor.render.bind(constructor, _this);
						}
	
						// DEPRECATED
						//
						// static created()
						//
						// Props should be set up before calling this.
						if (typeof constructor.created === 'function') {
							constructor.created(_this);
						}
	
						// DEPRECATED
						//
						// Feature has rarely been used.
						//
						// Created should be set before invoking the ready listeners.
						var elemData = (0, _data2.default)(_this);
						var readyCallbacks = elemData.readyCallbacks;
						if (readyCallbacks) {
							readyCallbacks.forEach(function (cb) {
								return cb(_this);
							});
							delete elemData.readyCallbacks;
						}
						return _this;
					}
	
					// Custom Elements v1
	
	
					_createClass(_class2, [{
						key: 'connectedCallback',
						value: function connectedCallback() {
							var constructor = this.constructor;
	
							// DEPRECATED
							//
							// No more reflecting back to attributes in favour of one-way reflection.
	
							syncPropsToAttrs(this);
	
							// Used to check whether or not the component can render.
							this[_symbols.connected] = true;
	
							// Render!
							this[_symbols.rendererDebounced]();
	
							// DEPRECATED
							//
							// static attached()
							if (typeof constructor.attached === 'function') {
								constructor.attached(this);
							}
	
							// DEPRECATED
							//
							// We can remove this once all browsers support :defined.
							this.setAttribute('defined', '');
						}
	
						// Custom Elements v1
	
					}, {
						key: 'disconnectedCallback',
						value: function disconnectedCallback() {
							var constructor = this.constructor;
	
							// Ensures the component can't be rendered while disconnected.
	
							this[_symbols.connected] = false;
	
							// DEPRECATED
							//
							// static detached()
							if (typeof constructor.detached === 'function') {
								constructor.detached(this);
							}
						}
	
						// Custom Elements v1
	
					}, {
						key: 'attributeChangedCallback',
						value: function attributeChangedCallback(name, oldValue, newValue) {
							// Polyfill calls this twice.
							if (preventDoubleCalling(this, name, oldValue, newValue)) {
								return;
							}
	
							// Set data so we can prevent double calling if the polyfill.
							this[_prevName] = name;
							this[_prevOldValue] = oldValue;
							this[_prevNewValue] = newValue;
	
							var attributeChanged = this.constructor.attributeChanged;
	
							var propertyName = (0, _data2.default)(this, 'attributeLinks')[name];
	
							if (propertyName) {
								var propData = (0, _data2.default)(this, 'props')[propertyName];
	
								// This ensures a property set doesn't cause the attribute changed
								// handler to run again once we set this flag. This only ever has a
								// chance to run when you set an attribute, it then sets a property and
								// then that causes the attribute to be set again.
								if (propData.syncingAttribute) {
									propData.syncingAttribute = false;
								} else {
									// Sync up the property.
									var propOpts = (0, _getPropsMap2.default)(this.constructor)[propertyName];
									propData.settingAttribute = true;
									var newPropVal = newValue !== null && propOpts.deserialize ? propOpts.deserialize(newValue) : newValue;
									this[propertyName] = newPropVal;
								}
							}
	
							if (attributeChanged) {
								attributeChanged(this, { name: name, newValue: newValue, oldValue: oldValue });
							}
						}
	
						// Skate
						//
						// Maps to the static updated() callback. That logic should be moved here
						// when that is finally removed.
	
					}, {
						key: 'updatedCallback',
						value: function updatedCallback(prev) {
							return this.constructor.updated(this, prev);
						}
	
						// Skate
						//
						// Maps to the static rendered() callback. That logic should be moved here
						// when that is finally removed.
	
					}, {
						key: 'renderedCallback',
						value: function renderedCallback() {
							return this.constructor.rendered(this);
						}
	
						// Skate
						//
						// Maps to the static renderer() callback. That logic should be moved here
						// when that is finally removed.
	
					}, {
						key: 'rendererCallback',
						value: function rendererCallback() {
							return this.constructor.renderer(this);
						}
	
						// Skate
						//
						// Invokes the complete render lifecycle.
	
					}, {
						key: _symbols.renderer,
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
	
						// Skate
						//
						// Calls the user-defined updated() lifecycle callback.
	
					}, {
						key: _symbols.updated,
						value: function value() {
							var prev = this[_symbols.props];
							this[_symbols.props] = (0, _props2.default)(this);
							return this.updatedCallback(prev);
						}
	
						// Skate
	
					}], [{
						key: 'extend',
						value: function extend() {
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
	
							// For inheriting from the object literal.
	
	
							var opts = (0, _getOwnPropertyDescriptors2.default)(definition);
							var prot = (0, _getOwnPropertyDescriptors2.default)(definition.prototype);
	
							// Prototype is non configurable (but is writable).
							delete opts.prototype;
	
							// Pass on static and instance members from the definition.
							Object.defineProperties(Ctor, opts);
							Object.defineProperties(Ctor.prototype, prot);
	
							return Ctor;
						}
	
						// Skate
						//
						// DEPRECATED
						//
						// Move this to rendererCallback() before removing.
	
					}, {
						key: 'updated',
						value: function updated(elem, prev) {
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
						}
	
						// Skate
						//
						// DEPRECATED
						//
						// Move this to rendererCallback() before removing.
	
					}, {
						key: 'rendered',
						value: function rendered() {}
	
						// Skate
						//
						// DEPRECATED
						//
						// Move this to rendererCallback() before removing.
	
					}, {
						key: 'renderer',
						value: function renderer(elem) {
							if (!elem.shadowRoot) {
								elem.attachShadow({ mode: 'open' });
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
						}
					}]);
	
					return _class2;
				}(HTMLElement);
	
				exports.default = _class2;
	
				/***/
			},
			/* 12 */
			/***/function (module, exports) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = createSymbol;
				function createSymbol(description) {
					return typeof Symbol === 'function' ? Symbol(description) : description;
				}
	
				/***/
			},
			/* 13 */
			/***/function (module, exports) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				exports.default = function (element) {
					var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
					var data = element.__SKATE_DATA || (element.__SKATE_DATA = {});
					return namespace && (data[namespace] || (data[namespace] = {})) || data; // eslint-disable-line no-mixed-operators
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
				exports.default = getPropsMap;
	
				var _symbols = __webpack_require__(6);
	
				var _getAllKeys = __webpack_require__(3);
	
				var _getAllKeys2 = _interopRequireDefault(_getAllKeys);
	
				var _propDefinition = __webpack_require__(18);
	
				var _propDefinition2 = _interopRequireDefault(_propDefinition);
	
				var _setCtorNativeProperty = __webpack_require__(20);
	
				var _setCtorNativeProperty2 = _interopRequireDefault(_setCtorNativeProperty);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				/**
	    * Returns a cached map of property options for the given component class.
	    * Keys in the map are the properties name which can a string or a symbol.
	    *
	    * The map is created by caching the result of: static get props
	    */
				function getPropsMap(Ctor) {
					// Must be defined on constructor and not from a superclass
					if (!Ctor.hasOwnProperty(_symbols.ctorPropsMap)) {
						(function () {
							var props = Ctor.props || {};
	
							var propsMap = (0, _getAllKeys2.default)(props).reduce(function (result, propNameOrSymbol) {
								result[propNameOrSymbol] = new _propDefinition2.default(propNameOrSymbol, props[propNameOrSymbol]);
								return result;
							}, {});
							(0, _setCtorNativeProperty2.default)(Ctor, _symbols.ctorPropsMap, propsMap);
						})();
					}
	
					return Ctor[_symbols.ctorPropsMap];
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
	
				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();
	
				var _assign = __webpack_require__(2);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _dashCase = __webpack_require__(19);
	
				var _dashCase2 = _interopRequireDefault(_dashCase);
	
				var _empty = __webpack_require__(4);
	
				var _empty2 = _interopRequireDefault(_empty);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
				/**
	    * @internal
	    * Property Definition
	    *
	    * Internal meta data and strategies for a property.
	    * Created from the options of a PropOptions config object.
	    *
	    * Once created a PropDefinition should be treated as immutable and final
	    * PropDefinitions are created and cached by Component's Class by getPropsMap()
	    *
	    * Note: some options of PropOptions no longer exist in PropDefinition
	    */
				var PropDefinition = function () {
	
					// constructor(name:string|symbol, cfg:PropOptions) {
					function PropDefinition(name, cfg) {
						_classCallCheck(this, PropDefinition);
	
						this._name = name;
	
						cfg = cfg || {};
	
						if (typeof cfg === 'function') {
							// todo: Where is documented that a config can just be the coerce function?
							cfg = { coerce: cfg };
						}
	
						this.coerce = null;
						this.get = null;
						this.set = null;
	
						// Note: initial option is truly optional and it cannot be initialized.
						// Its presence is tested using hasOwnProperty()
	
						// todo: we probabbly need to update the doc
						// from doc one would think default value is undefined
						// value was defined inside props-init.js
						this.default = null;
	
						// todo: should be JSON.stringify ?
						// value was defined inside props-init.js
						this.deserialize = function (value) {
							return value;
						};
	
						// todo: should be JSON.parse ?
						// value was defined inside props-init.js
						this.serialize = function (value) {
							return value;
						};
	
						// Merge options from PropOptions config
						(0, _assign2.default)(this, cfg);
	
						// attribute option
						if (!(0, _empty2.default)(cfg.attribute)) {
							this.attrIn = cfg.attribute;
							this.attrOut = cfg.attribute;
						}
	
						// attribute option is not a member of IPropDef
						delete this.attribute;
	
						this.attrIn = resolveAttrName(this.attrIn, name);
						this.attrOut = resolveAttrName(this.attrOut, name);
					}
	
					_createClass(PropDefinition, [{
						key: 'name',
						get: function get() {
							return this._name;
						}
					}]);
	
					return PropDefinition;
				}();
	
				exports.default = PropDefinition;
	
				function resolveAttrName(attrOption, nameOrSymbol) {
					if (attrOption === true) {
						if (typeof nameOrSymbol === 'string') {
							return (0, _dashCase2.default)(nameOrSymbol);
						}
						if ((typeof nameOrSymbol === 'undefined' ? 'undefined' : _typeof(nameOrSymbol)) === 'symbol') {
							// todo: should we even allow a symbol prop to have a linked attribute?
							console.error('attribute must be a string for property ' + nameOrSymbol.toString());
						}
					}
					if (typeof attrOption === 'string') {
						return attrOption;
					}
				}
	
				/***/
			},
			/* 19 */
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
			/* 20 */
			/***/function (module, exports) {
	
				"use strict";
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = setCtorNativeProperty;
				/**
	    * This is needed to avoid IE11 "stack size errors" when creating
	    * a new property on the constructor of an HTMLElement
	    */
				function setCtorNativeProperty(Ctor, propName, value) {
					Object.defineProperty(Ctor, propName, { configurable: true, value: value });
				}
	
				/***/
			},
			/* 21 */
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
	
				var _getPropsMap = __webpack_require__(17);
	
				var _getPropsMap2 = _interopRequireDefault(_getPropsMap);
	
				var _getAllKeys = __webpack_require__(3);
	
				var _getAllKeys2 = _interopRequireDefault(_getAllKeys);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function get(elem) {
					var props = {};
					(0, _getAllKeys2.default)((0, _getPropsMap2.default)(elem.constructor)).forEach(function (key) {
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
			/* 22 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.createNativePropertyDescriptor = createNativePropertyDescriptor;
	
				exports.default = function (opts) {
					var propDef = new _propDefinition2.default(opts);
					return function () {
						return createNativePropertyDescriptor(propDef);
					};
				};
	
				var _symbols = __webpack_require__(6);
	
				var _data = __webpack_require__(13);
	
				var _data2 = _interopRequireDefault(_data);
	
				var _empty = __webpack_require__(4);
	
				var _empty2 = _interopRequireDefault(_empty);
	
				var _getDefaultValue = __webpack_require__(23);
	
				var _getDefaultValue2 = _interopRequireDefault(_getDefaultValue);
	
				var _getInitialValue = __webpack_require__(24);
	
				var _getInitialValue2 = _interopRequireDefault(_getInitialValue);
	
				var _getPropData = __webpack_require__(25);
	
				var _getPropData2 = _interopRequireDefault(_getPropData);
	
				var _propDefinition = __webpack_require__(18);
	
				var _propDefinition2 = _interopRequireDefault(_propDefinition);
	
				var _syncPropToAttr = __webpack_require__(26);
	
				var _syncPropToAttr2 = _interopRequireDefault(_syncPropToAttr);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function createNativePropertyDescriptor(opts) {
					var name = opts.name;
	
					var prop = {
						configurable: true,
						enumerable: true
					};
	
					prop.created = function created(elem) {
						var propData = (0, _getPropData2.default)(elem, name);
						var attributeName = opts.attrIn;
						var initialValue = elem[name];
	
						// Store property to attribute link information.
						if (attributeName) {
							(0, _data2.default)(elem, 'attributeLinks')[attributeName] = name;
						}
	
						// Set up initial value if it wasn't specified.
						if ((0, _empty2.default)(initialValue)) {
							if (attributeName && elem.hasAttribute(attributeName)) {
								initialValue = opts.deserialize(elem.getAttribute(attributeName));
							} else if (opts.hasOwnProperty('initial')) {
								initialValue = (0, _getInitialValue2.default)(elem, opts);
							} else if (opts.hasOwnProperty('default')) {
								initialValue = (0, _getDefaultValue2.default)(elem, opts);
							}
						}
	
						propData.internalValue = opts.coerce ? opts.coerce(initialValue) : initialValue;
					};
	
					prop.get = function get() {
						var propData = (0, _getPropData2.default)(this, name);
						var internalValue = propData.internalValue;
	
						return typeof opts.get === 'function' ? opts.get(this, { name: name, internalValue: internalValue }) : internalValue;
					};
	
					prop.set = function set(newValue) {
						var propData = (0, _getPropData2.default)(this, name);
						propData.lastAssignedValue = newValue;
						var oldValue = propData.oldValue;
	
						if ((0, _empty2.default)(oldValue)) {
							// todo: the doc is incorrect:  When the property is initialised, oldValue will always be undefined
							// we probabbly need to update the doc
							oldValue = null;
						}
	
						if ((0, _empty2.default)(newValue)) {
							newValue = (0, _getDefaultValue2.default)(this, opts);
						}
	
						if (typeof opts.coerce === 'function') {
							newValue = opts.coerce(newValue);
						}
	
						var changeData = { name: name, newValue: newValue, oldValue: oldValue };
	
						if (typeof opts.set === 'function') {
							opts.set(this, changeData);
						}
	
						// Queue a re-render.
						this[_symbols.rendererDebounced](this);
	
						// Update prop data so we can use it next time.
						propData.internalValue = propData.oldValue = newValue;
	
						// Link up the attribute.
						if (this[_symbols.connected]) {
							(0, _syncPropToAttr2.default)(this, opts, false);
						}
					};
	
					return prop;
				}
	
				// todo: This is only used from unit tests
	
				/***/
			},
			/* 23 */
			/***/function (module, exports) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = getDefaultValue;
				function getDefaultValue(elem, opts) {
					return typeof opts.default === 'function' ? opts.default(elem, { name: opts.name }) : opts.default;
				}
	
				/***/
			},
			/* 24 */
			/***/function (module, exports) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = getInitialValue;
				function getInitialValue(elem, opts) {
					return typeof opts.initial === 'function' ? opts.initial(elem, { name: opts.name }) : opts.initial;
				}
	
				/***/
			},
			/* 25 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = getPropData;
	
				var _data = __webpack_require__(13);
	
				var _data2 = _interopRequireDefault(_data);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function getPropData(elem, name) {
					var elemData = (0, _data2.default)(elem, 'props');
					return elemData[name] || (elemData[name] = {});
				}
	
				/***/
			},
			/* 26 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = syncPropToAttr;
	
				var _empty = __webpack_require__(4);
	
				var _empty2 = _interopRequireDefault(_empty);
	
				var _getDefaultValue = __webpack_require__(23);
	
				var _getDefaultValue2 = _interopRequireDefault(_getDefaultValue);
	
				var _getInitialValue = __webpack_require__(24);
	
				var _getInitialValue2 = _interopRequireDefault(_getInitialValue);
	
				var _getPropData = __webpack_require__(25);
	
				var _getPropData2 = _interopRequireDefault(_getPropData);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function syncFirstTimeProp(elem, prop) {
					var propData = (0, _getPropData2.default)(elem, prop.name);
	
					var syncAttrValue = propData.lastAssignedValue;
					if ((0, _empty2.default)(syncAttrValue)) {
						if (prop.hasOwnProperty('initial')) {
							syncAttrValue = (0, _getInitialValue2.default)(elem, prop);
						} else if (prop.hasOwnProperty('default')) {
							syncAttrValue = (0, _getDefaultValue2.default)(elem, prop);
						}
					}
					if (!(0, _empty2.default)(syncAttrValue) && prop.serialize) {
						syncAttrValue = prop.serialize(syncAttrValue);
					}
					if (!(0, _empty2.default)(syncAttrValue)) {
						propData.syncingAttribute = true;
						elem.setAttribute(prop.attrOut, syncAttrValue);
					}
				}
	
				function syncExistingProp(elem, prop) {
					var propData = (0, _getPropData2.default)(elem, prop.name);
					var attributeName = prop.attrOut;
	
					if (attributeName && !propData.settingAttribute) {
						var internalValue = propData.internalValue;
	
						var serializedValue = prop.serialize(internalValue);
						var currentAttrValue = elem.getAttribute(attributeName);
						var serializedIsEmpty = (0, _empty2.default)(serializedValue);
						var attributeChanged = !(serializedIsEmpty && (0, _empty2.default)(currentAttrValue) || serializedValue === currentAttrValue);
	
						propData.syncingAttribute = true;
	
						var shouldRemoveAttribute = (0, _empty2.default)(propData.lastAssignedValue);
						if (shouldRemoveAttribute || serializedIsEmpty) {
							elem.removeAttribute(attributeName);
						} else {
							elem.setAttribute(attributeName, serializedValue);
						}
	
						if (!attributeChanged && propData.syncingAttribute) {
							propData.syncingAttribute = false;
						}
					}
	
					// Allow the attribute to be linked again.
					propData.settingAttribute = false;
				}
	
				function syncPropToAttr(elem, prop, isFirstSync) {
					if (prop.attrOut) {
						if (isFirstSync) {
							syncFirstTimeProp(elem, prop);
						} else {
							syncExistingProp(elem, prop);
						}
					}
				}
	
				/***/
			},
			/* 27 */
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
	
				exports.default = function () {
					var customElements = _windowOrGlobal2.default.customElements;
	
					for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
						args[_key] = arguments[_key];
					}
	
					var name = args[0],
					    Ctor = args[1];
	
					if (!customElements) {
						throw new Error('Skate requires native custom element support or a polyfill.');
					}
	
					// Support passing an anonymous definition.
					if (args.length === 1) {
						// We are checking string for now, but once we remove the ability to pass
						// an object literal, we can change this to check "function" and invert the
						// blocks of logic.
						if (typeof name === 'string') {
							throw new Error('When passing only one argument to define(), it must be a custom element constructor.');
						} else {
							Ctor = name;
							name = (0, _uniqueId2.default)();
						}
					}
	
					// Ensure there's no conflicts.
					if (customElements.get(name)) {
						name = (0, _uniqueId2.default)(name);
					}
	
					// DEPRECATED
					//
					// Object literals.
					if ((typeof Ctor === 'undefined' ? 'undefined' : _typeof(Ctor)) === 'object') {
						Ctor = _component2.default.extend(Ctor);
					}
	
					// This allows us to check this before instantiating the custom element to
					// find its name from the constructor in the vdom module, thus improving
					// performance but still falling back to a robust method.
					Ctor[_symbols.name] = name;
	
					// Sipmle define. Not supporting customised built-ins yet.
					customElements.define(name, Ctor);
	
					// The spec doesn't return but this allows for a simpler, more concise API.
					return Ctor;
				};
	
				var _symbols = __webpack_require__(6);
	
				var _component = __webpack_require__(11);
	
				var _component2 = _interopRequireDefault(_component);
	
				var _uniqueId = __webpack_require__(28);
	
				var _uniqueId2 = _interopRequireDefault(_uniqueId);
	
				var _windowOrGlobal = __webpack_require__(10);
	
				var _windowOrGlobal2 = _interopRequireDefault(_windowOrGlobal);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				/***/
			},
			/* 28 */
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
			/* 29 */
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
			/* 30 */
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
	
				var _props3 = __webpack_require__(21);
	
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
			/* 31 */
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
	
				var _data = __webpack_require__(13);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 5)(module)))

/***/ },
/* 5 */
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
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

	__webpack_require__(/*! skatejs-named-slots */1);
	__webpack_require__(/*! document-register-element */6);
	module.exports = __webpack_require__(/*! ./src/index.js */7);


/***/ },
/* 1 */
/*!*********************************************!*\
  !*** ./~/skatejs-named-slots/dist/index.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(/*! custom-event-polyfill */ 2), __webpack_require__(/*! debounce */ 3), __webpack_require__(/*! weakmap */ 5)) :
	    typeof define === 'function' && define.amd ? define(['exports', 'custom-event-polyfill', 'debounce', 'weakmap'], factory) :
	    (factory((global.skatejsNamedSlots = global.skatejsNamedSlots || {}),global.customEventPolyfill,global.debounce,global.WeakMap));
	}(this, (function (exports,customEventPolyfill,debounce,WeakMap) {
	
	debounce = 'default' in debounce ? debounce['default'] : debounce;
	WeakMap = 'default' in WeakMap ? WeakMap['default'] : WeakMap;
	
	var div = document.createElement('div');
	var shadowDomV1 = !!div.attachShadow; // eslint-disable-line import/prefer-default-export
	
	var _window$1 = window;
	var DocumentFragment = _window$1.DocumentFragment;
	
	
	function eachChildNode(node, func) {
	  if (!node) {
	    return;
	  }
	
	  var chs = node.childNodes;
	  var chsLen = chs.length;
	  for (var a = 0; a < chsLen; a++) {
	    var ret = func(chs[a], a, chs);
	    if (typeof ret !== 'undefined') {
	      return ret; // eslint-disable-line consistent-return
	    }
	  }
	}
	
	// Re-implemented to avoid Array.prototype.slice.call for performance reasons
	function reverse(arr) {
	  var reversedArray = [];
	  for (var i = arr.length - 1; i >= 0; i--) {
	    reversedArray.push(arr[i]);
	  }
	  return reversedArray;
	}
	
	/**
	 * Execute func over all child nodes or a document fragment, or a single node
	 * @param node the node or document fragment
	 * @param func a function to execute on node or the children of node, if node is a document fragment.
	 *        func may optionally append the node elsewhere, in the case of a document fragment
	 */
	function eachNodeOrFragmentNodes(node, func) {
	  if (node instanceof DocumentFragment) {
	    var chs = node.childNodes;
	    var chsLen = chs.length;
	
	    // We must iterate in reverse to handle the case where child nodes are moved elsewhere during execution
	    for (var a = chsLen - 1; a >= 0; a--) {
	      var thisNode = reverse(node.childNodes)[a];
	      func(thisNode, a);
	    }
	  } else {
	    func(node, 0);
	  }
	}
	
	var _window$3 = window;
	var Node$1 = _window$3.Node;
	
	var div$1 = document.createElement('div');
	
	function getPrototype(obj, key) {
	  var descriptor = void 0;
	
	  while (obj && !(descriptor = Object.getOwnPropertyDescriptor(obj, key))) {
	    // eslint-disable-line no-cond-assign
	    obj = Object.getPrototypeOf(obj);
	  }
	  return descriptor;
	}
	var getPropertyDescriptor = function (obj, key) {
	  if (obj instanceof Node$1) {
	    obj = div$1;
	  }
	  var proto = getPrototype(obj, key);
	
	  if (proto) {
	    var getter = proto.get;
	    var setter = proto.set;
	    var _descriptor = {
	      configurable: true,
	      enumerable: true
	    };
	
	    if (getter) {
	      _descriptor.get = getter;
	      _descriptor.set = setter;
	      return _descriptor;
	    } else if (typeof obj[key] === 'function') {
	      _descriptor.value = obj[key];
	      return _descriptor;
	    }
	  }
	
	  var descriptor = Object.getOwnPropertyDescriptor(obj, key);
	  if (descriptor && descriptor.get) {
	    return descriptor;
	  }
	};
	
	// Any code referring to this is because it has to work around this bug in
	// WebKit: https://bugs.webkit.org/show_bug.cgi?id=49739
	
	var _window$2 = window;
	var Element = _window$2.Element;
	
	var nativeParentNode = getPropertyDescriptor(Element.prototype, 'innerHTML');
	
	var canPatchNativeAccessors = !!nativeParentNode;
	
	/**
	 * See https://w3c.github.io/DOM-Parsing/#serializing
	 * @param {TextNode}
	 * @returns {string}
	 */
	function getEscapedTextContent(textNode) {
	  return textNode.textContent.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	}
	
	/**
	 * @param {TextNode}
	 * @returns {string}
	 */
	function getRawTextContent(textNode) {
	  return textNode.textContent;
	}
	
	/**
	 * @returns {string}
	 * @param {commentNode}
	 */
	function getCommentNodeOuterHtml(commentNode) {
	  return commentNode.text || "<!--" + commentNode.textContent + "-->";
	}
	
	var isSlotNode = function (node) {
	  return node.tagName === 'SLOT';
	};
	
	var _window$4 = window;
	var Node$2 = _window$4.Node;
	
	
	function findSlots(root) {
	  var slots = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	  var childNodes = root.childNodes;
	
	
	  if (!childNodes || [Node$2.ELEMENT_NODE, Node$2.DOCUMENT_FRAGMENT_NODE].indexOf(root.nodeType) === -1) {
	    return slots;
	  }
	
	  var length = childNodes.length;
	
	
	  for (var a = 0; a < length; a++) {
	    var childNode = childNodes[a];
	
	    if (isSlotNode(childNode)) {
	      slots.push(childNode);
	    }
	    findSlots(childNode, slots);
	  }
	
	  return slots;
	}
	
	var isRootNode = function (node) {
	  return node.tagName === '_SHADOW_ROOT_';
	};
	
	var pseudoArrayToArray = (function (pseudoArray) {
	  return Array.prototype.slice.call(pseudoArray);
	});
	
	var _window = window;
	var Comment = _window.Comment;
	var CustomEvent = _window.CustomEvent;
	var DOMParser = _window.DOMParser;
	var HTMLElement = _window.HTMLElement;
	var Node = _window.Node;
	var SVGElement = _window.SVGElement;
	var Text = _window.Text;
	
	var arrProto = Array.prototype;
	var forEach = arrProto.forEach;
	
	// We use a real DOM node for a shadow root. This is because the host node
	// basically becomes a virtual entry point for your element leaving the shadow
	// root the only thing that can receive instructions on how the host should
	// render to the browser.
	
	var defaultShadowRootTagName = '_shadow_root_';
	
	// * WebKit only *
	//
	// These members we need cannot override as we require native access to their
	// original values at some point.
	var polyfillAtRuntime = ['childNodes', 'parentNode'];
	
	// Some properties that should not be overridden in the Text prototype.
	var doNotOverridePropertiesInTextNodes = ['textContent'];
	
	// Some new properties that should be defined in the Text prototype.
	var defineInTextNodes = ['assignedSlot'];
	
	// Some properties that should not be overridden in the Comment prototype.
	var doNotOverridePropertiesInCommNodes = ['textContent'];
	
	// Some new properties that should be defined in the Comment prototype.
	var defineInCommNodes = [];
	
	// Nodes that should be slotted
	var slottedNodeTypes = [Node.ELEMENT_NODE, Node.TEXT_NODE];
	
	// Private data stores.
	var assignedToSlotMap = new WeakMap();
	var hostToModeMap = new WeakMap();
	var hostToRootMap = new WeakMap();
	var nodeToChildNodesMap = new WeakMap();
	var nodeToParentNodeMap = new WeakMap();
	var nodeToSlotMap = new WeakMap();
	var rootToHostMap = new WeakMap();
	var rootToSlotMap = new WeakMap();
	var slotToRootMap = new WeakMap();
	
	// Unfortunately manual DOM parsing is because of WebKit.
	var parser = new DOMParser();
	function parse(html) {
	  var tree = document.createElement('div');
	
	  // Everything not WebKit can do this easily.
	  if (canPatchNativeAccessors) {
	    tree.__innerHTML = html;
	    return tree;
	  }
	
	  var parsed = parser.parseFromString('<div>' + html + '</div>', 'text/html').body.firstChild;
	
	  while (parsed.hasChildNodes()) {
	    var firstChild = parsed.firstChild;
	    parsed.removeChild(firstChild);
	    tree.appendChild(firstChild);
	  }
	
	  // Need to import the node to initialise the custom elements from the parser.
	  return document.importNode(tree, true);
	}
	
	function staticProp(obj, name, value) {
	  Object.defineProperty(obj, name, {
	    configurable: true,
	    get: function get() {
	      return value;
	    }
	  });
	}
	
	// Slotting helpers.
	
	function arrayItem(idx) {
	  return this[idx];
	}
	
	function makeLikeNodeList(arr) {
	  arr.item = arrayItem;
	  return arr;
	}
	
	function isHostNode(node) {
	  return !!hostToRootMap.get(node);
	}
	
	function getNodeType(node) {
	  if (isHostNode(node)) {
	    return 'host';
	  }
	
	  if (isSlotNode(node)) {
	    return 'slot';
	  }
	
	  if (isRootNode(node)) {
	    return 'root';
	  }
	
	  return 'node';
	}
	
	function findClosest(node, func) {
	  while (node) {
	    if (node === document) {
	      break;
	    }
	    if (func(node)) {
	      return node;
	    }
	    node = node.parentNode;
	  }
	}
	
	function getSlotNameFromSlot(node) {
	  return node.getAttribute && node.getAttribute('name') || 'default';
	}
	
	function getSlotNameFromNode(node) {
	  return node.getAttribute && node.getAttribute('slot') || 'default';
	}
	
	function slotNodeIntoSlot(slot, node, insertBefore) {
	  // Only Text and Element nodes should be slotted.
	  if (slottedNodeTypes.indexOf(node.nodeType) === -1) {
	    return;
	  }
	
	  var assignedNodes = slot.assignedNodes();
	  var shouldGoIntoContentMode = assignedNodes.length === 0;
	  var slotInsertBeforeIndex = assignedNodes.indexOf(insertBefore);
	
	  // Assign the slot to the node internally.
	  nodeToSlotMap.set(node, slot);
	
	  // Remove the fallback content and state if we're going into content mode.
	  if (shouldGoIntoContentMode) {
	    forEach.call(slot.childNodes, function (child) {
	      return slot.__removeChild(child);
	    });
	  }
	
	  if (slotInsertBeforeIndex > -1) {
	    slot.__insertBefore(node, insertBefore !== undefined ? insertBefore : null);
	    assignedNodes.splice(slotInsertBeforeIndex, 0, node);
	  } else {
	    slot.__appendChild(node);
	    assignedNodes.push(node);
	  }
	
	  slot.____triggerSlotChangeEvent();
	}
	
	function slotNodeFromSlot(node) {
	  var slot = nodeToSlotMap.get(node);
	
	  if (slot) {
	    var assignedNodes = slot.assignedNodes();
	    var index = assignedNodes.indexOf(node);
	
	    if (index > -1) {
	      var shouldGoIntoDefaultMode = assignedNodes.length === 1;
	
	      assignedNodes.splice(index, 1);
	      nodeToSlotMap.set(node, null);
	
	      // Actually remove the child.
	      slot.__removeChild(node);
	
	      // If this was the last slotted node, then insert fallback content.
	      if (shouldGoIntoDefaultMode) {
	        forEach.call(slot.childNodes, function (child) {
	          return slot.__appendChild(child);
	        });
	      }
	
	      slot.____triggerSlotChangeEvent();
	    }
	  }
	}
	
	// Returns the index of the node in the host's childNodes.
	function indexOfNode(host, node) {
	  var chs = host.childNodes;
	  var chsLen = chs.length;
	  for (var a = 0; a < chsLen; a++) {
	    if (chs[a] === node) {
	      return a;
	    }
	  }
	  return -1;
	}
	
	// Adds the node to the list of childNodes on the host and fakes any necessary
	// information such as parentNode.
	function registerNode(host, node, insertBefore, func) {
	  var index = indexOfNode(host, insertBefore);
	  eachNodeOrFragmentNodes(node, function (eachNode, eachIndex) {
	    func(eachNode, eachIndex);
	
	    if (canPatchNativeAccessors) {
	      nodeToParentNodeMap.set(eachNode, host);
	    } else {
	      staticProp(eachNode, 'parentNode', host);
	    }
	
	    if (index > -1) {
	      arrProto.splice.call(host.childNodes, index + eachIndex, 0, eachNode);
	    } else {
	      arrProto.push.call(host.childNodes, eachNode);
	    }
	  });
	}
	
	// Cleans up registerNode().
	function unregisterNode(host, node, func) {
	  var index = indexOfNode(host, node);
	
	  if (index > -1) {
	    func(node, 0);
	
	    if (canPatchNativeAccessors) {
	      nodeToParentNodeMap.set(node, null);
	    } else {
	      staticProp(node, 'parentNode', null);
	    }
	
	    arrProto.splice.call(host.childNodes, index, 1);
	  }
	}
	
	function addNodeToNode(host, node, insertBefore) {
	  registerNode(host, node, insertBefore, function (eachNode) {
	    host.__insertBefore(eachNode, insertBefore !== undefined ? insertBefore : null);
	  });
	}
	
	function addNodeToHost(host, node, insertBefore) {
	  registerNode(host, node, insertBefore, function (eachNode) {
	    var rootNode = hostToRootMap.get(host);
	    var slotNodes = rootToSlotMap.get(rootNode);
	    var slotNode = slotNodes[getSlotNameFromNode(eachNode)];
	    if (slotNode) {
	      slotNodeIntoSlot(slotNode, eachNode, insertBefore);
	    }
	  });
	}
	
	function addSlotToRoot(root, slot) {
	  var slotName = getSlotNameFromSlot(slot);
	
	  // Ensure a slot node's childNodes are overridden at the earliest point
	  // possible for WebKit.
	  if (!canPatchNativeAccessors && !Array.isArray(slot.childNodes)) {
	    staticProp(slot, 'childNodes', pseudoArrayToArray(slot.childNodes));
	  }
	
	  rootToSlotMap.get(root)[slotName] = slot;
	
	  if (!slotToRootMap.has(slot)) {
	    slotToRootMap.set(slot, root);
	  }
	
	  eachChildNode(rootToHostMap.get(root), function (eachNode) {
	    if (!eachNode.assignedSlot && slotName === getSlotNameFromNode(eachNode)) {
	      slotNodeIntoSlot(slot, eachNode);
	    }
	  });
	}
	
	function addNodeToRoot(root, node, insertBefore) {
	  eachNodeOrFragmentNodes(node, function (child) {
	    if (isSlotNode(child)) {
	      addSlotToRoot(root, child);
	    } else {
	      var slotNodes = findSlots(child);
	      if (slotNodes) {
	        var slotNodesLen = slotNodes.length;
	        for (var a = 0; a < slotNodesLen; a++) {
	          addSlotToRoot(root, slotNodes[a]);
	        }
	      }
	    }
	  });
	  addNodeToNode(root, node, insertBefore);
	}
	
	// Adds a node to a slot. In other words, adds default content to a slot. It
	// ensures that if the slot doesn't have any assigned nodes yet, that the node
	// is actually displayed, otherwise it's just registered as child content.
	function addNodeToSlot(slot, node, insertBefore) {
	  var isInDefaultMode = slot.assignedNodes().length === 0;
	  registerNode(slot, node, insertBefore, function (eachNode) {
	    if (isInDefaultMode) {
	      slot.__insertBefore(eachNode, insertBefore !== undefined ? insertBefore : null);
	    }
	  });
	}
	
	// Removes a node from a slot (default content). It ensures that if the slot
	// doesn't have any assigned nodes yet, that the node is actually removed,
	// otherwise it's just unregistered.
	function removeNodeFromSlot(slot, node) {
	  var isInDefaultMode = slot.assignedNodes().length === 0;
	  unregisterNode(slot, node, function () {
	    if (isInDefaultMode) {
	      slot.__removeChild(node);
	    }
	  });
	}
	
	function removeNodeFromNode(host, node) {
	  unregisterNode(host, node, function () {
	    host.__removeChild(node);
	  });
	}
	
	function removeNodeFromHost(host, node) {
	  unregisterNode(host, node, function () {
	    slotNodeFromSlot(node);
	  });
	}
	
	function removeSlotFromRoot(root, node) {
	  var assignedNodes = Array.prototype.slice.call(node.assignedNodes());
	  assignedNodes.forEach(slotNodeFromSlot);
	  delete rootToSlotMap.get(root)[getSlotNameFromSlot(node)];
	  slotToRootMap.delete(node);
	}
	
	function removeNodeFromRoot(root, node) {
	  unregisterNode(root, node, function () {
	    if (isSlotNode(node)) {
	      removeSlotFromRoot(root, node);
	    } else {
	      var nodes = findSlots(node);
	      if (nodes) {
	        for (var a = 0; a < nodes.length; a++) {
	          removeSlotFromRoot(root, nodes[a]);
	        }
	      }
	    }
	    root.__removeChild(node);
	  });
	}
	
	// TODO terribly inefficient
	function getRootNode(host) {
	  if (isRootNode(host)) {
	    return host;
	  }
	
	  if (!host.parentNode) {
	    return;
	  }
	
	  return getRootNode(host.parentNode);
	}
	
	function appendChildOrInsertBefore(host, newNode, refNode) {
	  var nodeType = getNodeType(host);
	  var parentNode = newNode.parentNode;
	  var rootNode = getRootNode(host);
	
	  // Ensure childNodes is patched so we can manually update it for WebKit.
	  if (!canPatchNativeAccessors && !Array.isArray(host.childNodes)) {
	    staticProp(host, 'childNodes', pseudoArrayToArray(host.childNodes));
	  }
	
	  if (rootNode && getNodeType(newNode) === 'slot') {
	    addSlotToRoot(rootNode, newNode);
	  }
	
	  // If we append a child to a host, the host tells the shadow root to distribute
	  // it. If the root decides it doesn't need to be distributed, it is never
	  // removed from the old parent because in polyfill land we store a reference
	  // to the node but we don't move it. Due to that, we must explicitly remove the
	  // node from its old parent.
	  if (parentNode && getNodeType(parentNode) === 'host') {
	    if (canPatchNativeAccessors) {
	      nodeToParentNodeMap.set(newNode, null);
	    } else {
	      staticProp(newNode, 'parentNode', null);
	    }
	  }
	
	  // safari doesn't update its children properly for some reason, so it needs a little push
	  if (!canPatchNativeAccessors && parentNode) {
	    parentNode.removeChild(newNode);
	  }
	
	  if (nodeType === 'node') {
	    if (canPatchNativeAccessors) {
	      nodeToParentNodeMap.set(newNode, host);
	      return host.__insertBefore(newNode, refNode !== undefined ? refNode : null);
	    }
	
	    return addNodeToNode(host, newNode, refNode);
	  }
	
	  if (nodeType === 'slot') {
	    return addNodeToSlot(host, newNode, refNode);
	  }
	
	  if (nodeType === 'host') {
	    return addNodeToHost(host, newNode, refNode);
	  }
	
	  if (nodeType === 'root') {
	    return addNodeToRoot(host, newNode, refNode);
	  }
	}
	
	function syncSlotChildNodes(node) {
	  if (canPatchNativeAccessors && getNodeType(node) === 'slot' && node.__childNodes.length !== node.childNodes.length) {
	    while (node.hasChildNodes()) {
	      node.removeChild(node.firstChild);
	    }
	
	    forEach.call(node.__childNodes, function (child) {
	      return node.appendChild(child);
	    });
	  }
	}
	
	var members = {
	  // For testing purposes.
	  ____assignedNodes: {
	    get: function get() {
	      return this.______assignedNodes || (this.______assignedNodes = []);
	    }
	  },
	
	  // For testing purposes.
	  ____isInFallbackMode: {
	    get: function get() {
	      return this.assignedNodes().length === 0;
	    }
	  },
	
	  ____slotChangeListeners: {
	    get: function get() {
	      if (typeof this.______slotChangeListeners === 'undefined') {
	        this.______slotChangeListeners = 0;
	      }
	      return this.______slotChangeListeners;
	    },
	    set: function set(value) {
	      this.______slotChangeListeners = value;
	    }
	  },
	  ____triggerSlotChangeEvent: {
	    value: debounce(function callback() {
	      if (this.____slotChangeListeners) {
	        this.dispatchEvent(new CustomEvent('slotchange', {
	          bubbles: false,
	          cancelable: false
	        }));
	      }
	    })
	  },
	  addEventListener: {
	    value: function value(name, func, opts) {
	      if (name === 'slotchange' && isSlotNode(this)) {
	        this.____slotChangeListeners++;
	      }
	      return this.__addEventListener(name, func, opts);
	    }
	  },
	  appendChild: {
	    value: function value(newNode) {
	      appendChildOrInsertBefore(this, newNode);
	      return newNode;
	    }
	  },
	  assignedSlot: {
	    get: function get() {
	      var slot = nodeToSlotMap.get(this);
	
	      if (!slot) {
	        return null;
	      }
	
	      var root = slotToRootMap.get(slot);
	      var host = rootToHostMap.get(root);
	      var mode = hostToModeMap.get(host);
	
	      return mode === 'open' ? slot : null;
	    }
	  },
	  attachShadow: {
	    value: function value(opts) {
	      var _this = this;
	
	      var mode = opts && opts.mode;
	      if (mode !== 'closed' && mode !== 'open') {
	        throw new Error('You must specify { mode } as "open" or "closed" to attachShadow().');
	      }
	
	      // Return the existing shadow root if it exists.
	      var existingShadowRoot = hostToRootMap.get(this);
	      if (existingShadowRoot) {
	        return existingShadowRoot;
	      }
	
	      var lightNodes = makeLikeNodeList([].slice.call(this.childNodes));
	      var shadowRoot = document.createElement(opts.polyfillShadowRootTagName || defaultShadowRootTagName);
	
	      // Host and shadow root data.
	      hostToModeMap.set(this, mode);
	      hostToRootMap.set(this, shadowRoot);
	      rootToHostMap.set(shadowRoot, this);
	      rootToSlotMap.set(shadowRoot, {});
	
	      if (canPatchNativeAccessors) {
	        nodeToChildNodesMap.set(this, lightNodes);
	      } else {
	        staticProp(this, 'childNodes', lightNodes);
	      }
	
	      // Process light DOM.
	      lightNodes.forEach(function (node) {
	        // Existing children should be removed from being displayed, but still
	        // appear to be child nodes. This is how light DOM works; they're still
	        // child nodes but not in the composed DOM yet as there won't be any
	        // slots for them to go into.
	        _this.__removeChild(node);
	
	        // We must register the parentNode here as this has the potential to
	        // become out of sync if the node is moved before being slotted.
	        if (canPatchNativeAccessors) {
	          nodeToParentNodeMap.set(node, _this);
	        } else {
	          staticProp(node, 'parentNode', _this);
	        }
	      });
	
	      // The shadow root is actually the only child of the host.
	      return this.__appendChild(shadowRoot);
	    }
	  },
	  childElementCount: {
	    get: function get() {
	      return this.children.length;
	    }
	  },
	  childNodes: {
	    get: function get() {
	      if (canPatchNativeAccessors && getNodeType(this) === 'node') {
	        return this.__childNodes;
	      }
	      var childNodes = nodeToChildNodesMap.get(this);
	
	      if (!childNodes) {
	        nodeToChildNodesMap.set(this, childNodes = makeLikeNodeList([]));
	      }
	
	      return childNodes;
	    }
	  },
	  children: {
	    get: function get() {
	      var chs = [];
	      eachChildNode(this, function (node) {
	        if (node.nodeType === 1) {
	          chs.push(node);
	        }
	      });
	      return makeLikeNodeList(chs);
	    }
	  },
	  firstChild: {
	    get: function get() {
	      return this.childNodes[0] || null;
	    }
	  },
	  firstElementChild: {
	    get: function get() {
	      return this.children[0] || null;
	    }
	  },
	  assignedNodes: {
	    value: function value() {
	      if (isSlotNode(this)) {
	        var assigned = assignedToSlotMap.get(this);
	
	        if (!assigned) {
	          assignedToSlotMap.set(this, assigned = []);
	        }
	
	        return assigned;
	      }
	    }
	  },
	  hasChildNodes: {
	    value: function value() {
	      return this.childNodes.length > 0;
	    }
	  },
	  innerHTML: {
	    get: function get() {
	      var innerHTML = '';
	
	      var getHtmlNodeOuterHtml = function getHtmlNodeOuterHtml(node) {
	        return node.outerHTML;
	      };
	      var getOuterHtmlByNodeType = {};
	      getOuterHtmlByNodeType[Node.ELEMENT_NODE] = getHtmlNodeOuterHtml;
	      getOuterHtmlByNodeType[Node.COMMENT_NODE] = getCommentNodeOuterHtml;
	
	      // Text nodes with these ancestors should be treated as raw text
	      // See section 8.4 of
	      // https://www.w3.org/TR/2008/WD-html5-20080610/serializing.html#html-fragment
	      // Though Chrome does not adhere to spec for <noscript/>
	      var rawTextNodeNames = {
	        style: true,
	        script: true,
	        xmp: true,
	        iframe: true,
	        noembed: true,
	        noframes: true,
	        noscript: true,
	        plaintext: true
	      };
	
	      function isRawTextNode(node) {
	        return node.nodeType === Node.ELEMENT_NODE && node.nodeName.toLowerCase() in rawTextNodeNames;
	      }
	
	      var isParentNodeRawText = isRawTextNode(this);
	
	      eachChildNode(this, function (node) {
	        var getOuterHtml = void 0;
	        if (node.nodeType === Node.TEXT_NODE) {
	          if (isParentNodeRawText) {
	            getOuterHtml = getRawTextContent;
	          } else {
	            getOuterHtml = getEscapedTextContent;
	          }
	        } else {
	          getOuterHtml = getOuterHtmlByNodeType[node.nodeType] || getHtmlNodeOuterHtml;
	        }
	        innerHTML += getOuterHtml(node);
	      });
	      return innerHTML;
	    },
	    set: function set(innerHTML) {
	      var parsed = parse(innerHTML);
	
	      while (this.hasChildNodes()) {
	        this.removeChild(this.firstChild);
	      }
	
	      // when we are doing this: root.innerHTML = "<slot><div></div></slot>";
	      // slot.__childNodes is out of sync with slot.childNodes.
	      // to fix it we have to manually remove and insert them
	      var slots = findSlots(parsed);
	      forEach.call(slots, function (slot) {
	        return syncSlotChildNodes(slot);
	      });
	
	      while (parsed.hasChildNodes()) {
	        var firstChild = parsed.firstChild;
	
	        // When we polyfill everything on HTMLElement.prototype, we overwrite
	        // properties. This makes it so that parentNode reports null even though
	        // it's actually a parent of the HTML parser. For this reason,
	        // cleanNode() won't work and we must manually remove it from the
	        // parser before it is moved to the host just in case it's added as a
	        // light node but not assigned to a slot.
	        parsed.removeChild(firstChild);
	
	        this.appendChild(firstChild);
	      }
	    }
	  },
	  insertBefore: {
	    value: function value(newNode, refNode) {
	      appendChildOrInsertBefore(this, newNode, refNode);
	
	      return newNode;
	    }
	  },
	  lastChild: {
	    get: function get() {
	      var ch = this.childNodes;
	      return ch[ch.length - 1] || null;
	    }
	  },
	  lastElementChild: {
	    get: function get() {
	      var ch = this.children;
	      return ch[ch.length - 1] || null;
	    }
	  },
	  name: {
	    get: function get() {
	      return this.getAttribute('name');
	    },
	    set: function set(name) {
	      var oldName = this.name;
	      var ret = this.__setAttribute('name', name);
	
	      if (name === oldName) {
	        return ret;
	      }
	
	      if (!isSlotNode(this)) {
	        return ret;
	      }
	      var root = slotToRootMap.get(this);
	      if (root) {
	        removeSlotFromRoot(root, this);
	        addSlotToRoot(root, this);
	      }
	      return ret;
	    }
	  },
	  nextSibling: {
	    get: function get() {
	      var host = this;
	      return eachChildNode(this.parentNode, function (child, index, nodes) {
	        if (host === child) {
	          return nodes[index + 1] || null;
	        }
	      });
	    }
	  },
	  nextElementSibling: {
	    get: function get() {
	      var host = this;
	      var found = void 0;
	      return eachChildNode(this.parentNode, function (child) {
	        if (found && child.nodeType === 1) {
	          return child;
	        }
	        if (host === child) {
	          found = true;
	        }
	      });
	    }
	  },
	  outerHTML: {
	    get: function get() {
	      var name = this.tagName.toLowerCase();
	      var attributes = Array.prototype.slice.call(this.attributes).map(function (attr) {
	        return ' ' + attr.name + (attr.value ? '="' + attr.value + '"' : '');
	      }).join('');
	      return '<' + name + attributes + '>' + this.innerHTML + '</' + name + '>';
	    },
	    set: function set(outerHTML) {
	      if (this.parentNode) {
	        var parsed = parse(outerHTML);
	        this.parentNode.replaceChild(parsed.firstChild, this);
	      } else if (canPatchNativeAccessors) {
	        this.__outerHTML = outerHTML; // this will throw a native error;
	      } else {
	        throw new Error('Failed to set the \'outerHTML\' property on \'Element\': This element has no parent node.');
	      }
	    }
	  },
	  parentElement: {
	    get: function get() {
	      return findClosest(this.parentNode, function (node) {
	        return node.nodeType === 1;
	      });
	    }
	  },
	  parentNode: {
	    get: function get() {
	      return nodeToParentNodeMap.get(this) || this.__parentNode || null;
	    }
	  },
	  previousSibling: {
	    get: function get() {
	      var host = this;
	      return eachChildNode(this.parentNode, function (child, index, nodes) {
	        if (host === child) {
	          return nodes[index - 1] || null;
	        }
	      });
	    }
	  },
	  previousElementSibling: {
	    get: function get() {
	      var host = this;
	      var found = void 0;
	      return eachChildNode(this.parentNode, function (child) {
	        if (found && host === child) {
	          return found;
	        }
	        if (child.nodeType === 1) {
	          found = child;
	        }
	      });
	    }
	  },
	  removeChild: {
	    value: function value(refNode) {
	      var nodeType = getNodeType(this);
	
	      switch (nodeType) {
	        case 'node':
	          if (canPatchNativeAccessors) {
	            nodeToParentNodeMap.set(refNode, null);
	            return this.__removeChild(refNode);
	          }
	          removeNodeFromNode(this, refNode);
	          break;
	        case 'slot':
	          removeNodeFromSlot(this, refNode);
	          break;
	        case 'host':
	          removeNodeFromHost(this, refNode);
	          break;
	        case 'root':
	          removeNodeFromRoot(this, refNode);
	          break;
	        default:
	          break;
	      }
	      return refNode;
	    }
	  },
	  removeEventListener: {
	    value: function value(name, func, opts) {
	      if (name === 'slotchange' && this.____slotChangeListeners && isSlotNode(this)) {
	        this.____slotChangeListeners--;
	      }
	      return this.__removeEventListener(name, func, opts);
	    }
	  },
	  replaceChild: {
	    value: function value(newNode, refNode) {
	      this.insertBefore(newNode, refNode);
	      return this.removeChild(refNode);
	    }
	  },
	  setAttribute: {
	    value: function value(attrName, attrValue) {
	      if (attrName === 'slot') {
	        this[attrName] = attrValue;
	      }
	      if (isSlotNode(this)) {
	        if (attrName === 'name') {
	          this[attrName] = attrValue;
	        }
	      }
	      return this.__setAttribute(attrName, attrValue);
	    }
	  },
	  shadowRoot: {
	    get: function get() {
	      return hostToModeMap.get(this) === 'open' ? hostToRootMap.get(this) : null;
	    }
	  },
	  slot: {
	    get: function get() {
	      return this.getAttribute('slot');
	    },
	    set: function set(name) {
	      var oldName = this.name;
	      var ret = this.__setAttribute('slot', name);
	
	      if (oldName === name) {
	        return ret;
	      }
	
	      var slot = nodeToSlotMap.get(this);
	      var root = slot && slotToRootMap.get(slot);
	      var host = root && rootToHostMap.get(root);
	
	      if (host) {
	        removeNodeFromHost(host, this);
	        addNodeToHost(host, this);
	      }
	      return ret;
	    }
	  },
	  textContent: {
	    get: function get() {
	      var textContent = '';
	      eachChildNode(this, function (node) {
	        if (node.nodeType !== Node.COMMENT_NODE) {
	          textContent += node.textContent;
	        }
	      });
	      return textContent;
	    },
	    set: function set(textContent) {
	      while (this.hasChildNodes()) {
	        this.removeChild(this.firstChild);
	      }
	      if (!textContent) {
	        return;
	      }
	      this.appendChild(document.createTextNode(textContent));
	    }
	  }
	};
	
	var v1 = (function () {
	  var commProto = Comment.prototype;
	  var elementProto = HTMLElement.prototype;
	  var svgProto = SVGElement && SVGElement.prototype;
	  var textProto = Text.prototype;
	  var textNode = document.createTextNode('');
	  var commNode = document.createComment('');
	
	  Object.keys(members).forEach(function (memberName) {
	    var memberProperty = members[memberName];
	
	    // All properties should be configurable and enumerable.
	    memberProperty.configurable = true;
	    memberProperty.enumerable = true;
	
	    // Applying to the data properties only since we can't have writable accessor properties.
	    if (memberProperty.hasOwnProperty('value')) {
	      // eslint-disable-line no-prototype-builtins
	      memberProperty.writable = true;
	    }
	
	    // Polyfill as much as we can and work around WebKit in other areas.
	    if (canPatchNativeAccessors || polyfillAtRuntime.indexOf(memberName) === -1) {
	      var nativeDescriptor = getPropertyDescriptor(elementProto, memberName);
	      var nativeTextDescriptor = getPropertyDescriptor(textProto, memberName);
	      var nativeCommDescriptor = getPropertyDescriptor(commProto, memberName);
	      var shouldOverrideInTextNode = memberName in textNode && doNotOverridePropertiesInTextNodes.indexOf(memberName) === -1 || ~defineInTextNodes.indexOf(memberName);
	      var shouldOverrideInCommentNode = memberName in commNode && doNotOverridePropertiesInCommNodes.indexOf(memberName) === -1 || ~defineInCommNodes.indexOf(memberName);
	      var nativeMemberName = '__' + memberName;
	
	      Object.defineProperty(elementProto, memberName, memberProperty);
	      svgProto && Object.defineProperty(svgProto, memberName, memberProperty);
	
	      if (nativeDescriptor) {
	        Object.defineProperty(elementProto, nativeMemberName, nativeDescriptor);
	        svgProto && Object.defineProperty(svgProto, nativeMemberName, nativeDescriptor);
	      }
	
	      if (shouldOverrideInTextNode) {
	        Object.defineProperty(textProto, memberName, memberProperty);
	      }
	
	      if (shouldOverrideInTextNode && nativeTextDescriptor) {
	        Object.defineProperty(textProto, nativeMemberName, nativeTextDescriptor);
	      }
	
	      if (shouldOverrideInCommentNode) {
	        Object.defineProperty(commProto, memberName, memberProperty);
	      }
	
	      if (shouldOverrideInCommentNode && nativeCommDescriptor) {
	        Object.defineProperty(commProto, nativeMemberName, nativeCommDescriptor);
	      }
	    }
	  });
	});
	
	// TODO move into the skatejs-web-components package.
	if (shadowDomV1) {
	  // then we should probably not be loading this
	} else {
	  v1();
	}
	
	 // eslint-disable-line import/prefer-default-export
	
	exports.v1 = v1;
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	})));
	//# sourceMappingURL=index.js.map


/***/ },
/* 2 */
/*!**********************************************************!*\
  !*** ./~/custom-event-polyfill/custom-event-polyfill.js ***!
  \**********************************************************/
/***/ function(module, exports) {

	// Polyfill for creating CustomEvents on IE9/10/11
	
	// code pulled from:
	// https://github.com/d4tocchini/customevent-polyfill
	// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill
	
	try {
	    var ce = new window.CustomEvent('test');
	    ce.preventDefault();
	    if (ce.defaultPrevented !== true) {
	        // IE has problems with .preventDefault() on custom events
	        // http://stackoverflow.com/questions/23349191
	        throw new Error('Could not prevent default');
	    }
	} catch(e) {
	  var CustomEvent = function(event, params) {
	    var evt, origPrevent;
	    params = params || {
	      bubbles: false,
	      cancelable: false,
	      detail: undefined
	    };
	
	    evt = document.createEvent("CustomEvent");
	    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
	    origPrevent = evt.preventDefault;
	    evt.preventDefault = function () {
	      origPrevent.call(this);
	      try {
	        Object.defineProperty(this, 'defaultPrevented', {
	          get: function () {
	            return true;
	          }
	        });
	      } catch(e) {
	        this.defaultPrevented = true;
	      }
	    };
	    return evt;
	  };
	
	  CustomEvent.prototype = window.Event.prototype;
	  window.CustomEvent = CustomEvent; // expose definition to window
	}


/***/ },
/* 3 */
/*!*****************************!*\
  !*** ./~/debounce/index.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var now = __webpack_require__(/*! date-now */ 4);
	
	/**
	 * Returns a function, that, as long as it continues to be invoked, will not
	 * be triggered. The function will be called after it stops being called for
	 * N milliseconds. If `immediate` is passed, trigger the function on the
	 * leading edge, instead of the trailing.
	 *
	 * @source underscore.js
	 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
	 * @param {Function} function to wrap
	 * @param {Number} timeout in ms (`100`)
	 * @param {Boolean} whether to execute at the beginning (`false`)
	 * @api public
	 */
	
	module.exports = function debounce(func, wait, immediate){
	  var timeout, args, context, timestamp, result;
	  if (null == wait) wait = 100;
	
	  function later() {
	    var last = now() - timestamp;
	
	    if (last < wait && last > 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      if (!immediate) {
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      }
	    }
	  };
	
	  return function debounced() {
	    context = this;
	    args = arguments;
	    timestamp = now();
	    var callNow = immediate && !timeout;
	    if (!timeout) timeout = setTimeout(later, wait);
	    if (callNow) {
	      result = func.apply(context, args);
	      context = args = null;
	    }
	
	    return result;
	  };
	};


/***/ },
/* 4 */
/*!*****************************!*\
  !*** ./~/date-now/index.js ***!
  \*****************************/
/***/ function(module, exports) {

	module.exports = Date.now || now
	
	function now() {
	    return new Date().getTime()
	}


/***/ },
/* 5 */
/*!******************************!*\
  !*** ./~/weakmap/weakmap.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/* (The MIT License)
	 *
	 * Copyright (c) 2012 Brandon Benvie <http://bbenvie.com>
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
	 * associated documentation files (the 'Software'), to deal in the Software without restriction,
	 * including without limitation the rights to use, copy, modify, merge, publish, distribute,
	 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included with all copies or
	 * substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
	 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY  CLAIM,
	 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 */
	
	// Original WeakMap implementation by Gozala @ https://gist.github.com/1269991
	// Updated and bugfixed by Raynos @ https://gist.github.com/1638059
	// Expanded by Benvie @ https://github.com/Benvie/harmony-collections
	
	void function(global, undefined_, undefined){
	  var getProps = Object.getOwnPropertyNames,
	      defProp  = Object.defineProperty,
	      toSource = Function.prototype.toString,
	      create   = Object.create,
	      hasOwn   = Object.prototype.hasOwnProperty,
	      funcName = /^\n?function\s?(\w*)?_?\(/;
	
	
	  function define(object, key, value){
	    if (typeof key === 'function') {
	      value = key;
	      key = nameOf(value).replace(/_$/, '');
	    }
	    return defProp(object, key, { configurable: true, writable: true, value: value });
	  }
	
	  function nameOf(func){
	    return typeof func !== 'function'
	          ? '' : 'name' in func
	          ? func.name : toSource.call(func).match(funcName)[1];
	  }
	
	  // ############
	  // ### Data ###
	  // ############
	
	  var Data = (function(){
	    var dataDesc = { value: { writable: true, value: undefined } },
	        datalock = 'return function(k){if(k===s)return l}',
	        uids     = create(null),
	
	        createUID = function(){
	          var key = Math.random().toString(36).slice(2);
	          return key in uids ? createUID() : uids[key] = key;
	        },
	
	        globalID = createUID(),
	
	        storage = function(obj){
	          if (hasOwn.call(obj, globalID))
	            return obj[globalID];
	
	          if (!Object.isExtensible(obj))
	            throw new TypeError("Object must be extensible");
	
	          var store = create(null);
	          defProp(obj, globalID, { value: store });
	          return store;
	        };
	
	    // common per-object storage area made visible by patching getOwnPropertyNames'
	    define(Object, function getOwnPropertyNames(obj){
	      var props = getProps(obj);
	      if (hasOwn.call(obj, globalID))
	        props.splice(props.indexOf(globalID), 1);
	      return props;
	    });
	
	    function Data(){
	      var puid = createUID(),
	          secret = {};
	
	      this.unlock = function(obj){
	        var store = storage(obj);
	        if (hasOwn.call(store, puid))
	          return store[puid](secret);
	
	        var data = create(null, dataDesc);
	        defProp(store, puid, {
	          value: new Function('s', 'l', datalock)(secret, data)
	        });
	        return data;
	      }
	    }
	
	    define(Data.prototype, function get(o){ return this.unlock(o).value });
	    define(Data.prototype, function set(o, v){ this.unlock(o).value = v });
	
	    return Data;
	  }());
	
	
	  var WM = (function(data){
	    var validate = function(key){
	      if (key == null || typeof key !== 'object' && typeof key !== 'function')
	        throw new TypeError("Invalid WeakMap key");
	    }
	
	    var wrap = function(collection, value){
	      var store = data.unlock(collection);
	      if (store.value)
	        throw new TypeError("Object is already a WeakMap");
	      store.value = value;
	    }
	
	    var unwrap = function(collection){
	      var storage = data.unlock(collection).value;
	      if (!storage)
	        throw new TypeError("WeakMap is not generic");
	      return storage;
	    }
	
	    var initialize = function(weakmap, iterable){
	      if (iterable !== null && typeof iterable === 'object' && typeof iterable.forEach === 'function') {
	        iterable.forEach(function(item, i){
	          if (item instanceof Array && item.length === 2)
	            set.call(weakmap, iterable[i][0], iterable[i][1]);
	        });
	      }
	    }
	
	
	    function WeakMap(iterable){
	      if (this === global || this == null || this === WeakMap.prototype)
	        return new WeakMap(iterable);
	
	      wrap(this, new Data);
	      initialize(this, iterable);
	    }
	
	    function get(key){
	      validate(key);
	      var value = unwrap(this).get(key);
	      return value === undefined_ ? undefined : value;
	    }
	
	    function set(key, value){
	      validate(key);
	      // store a token for explicit undefined so that "has" works correctly
	      unwrap(this).set(key, value === undefined ? undefined_ : value);
	    }
	
	    function has(key){
	      validate(key);
	      return unwrap(this).get(key) !== undefined;
	    }
	
	    function delete_(key){
	      validate(key);
	      var data = unwrap(this),
	          had = data.get(key) !== undefined;
	      data.set(key, undefined);
	      return had;
	    }
	
	    function toString(){
	      unwrap(this);
	      return '[object WeakMap]';
	    }
	
	    try {
	      var src = ('return '+delete_).replace('e_', '\\u0065'),
	          del = new Function('unwrap', 'validate', src)(unwrap, validate);
	    } catch (e) {
	      var del = delete_;
	    }
	
	    var src = (''+Object).split('Object');
	    var stringifier = function toString(){
	      return src[0] + nameOf(this) + src[1];
	    };
	
	    define(stringifier, stringifier);
	
	    var prep = { __proto__: [] } instanceof Array
	      ? function(f){ f.__proto__ = stringifier }
	      : function(f){ define(f, stringifier) };
	
	    prep(WeakMap);
	
	    [toString, get, set, has, del].forEach(function(method){
	      define(WeakMap.prototype, method);
	      prep(method);
	    });
	
	    return WeakMap;
	  }(new Data));
	
	  var defaultCreator = Object.create
	    ? function(){ return Object.create(null) }
	    : function(){ return {} };
	
	  function createStorage(creator){
	    var weakmap = new WM;
	    creator || (creator = defaultCreator);
	
	    function storage(object, value){
	      if (value || arguments.length === 2) {
	        weakmap.set(object, value);
	      } else {
	        value = weakmap.get(object);
	        if (value === undefined) {
	          value = creator(object);
	          weakmap.set(object, value);
	        }
	      }
	      return value;
	    }
	
	    return storage;
	  }
	
	
	  if (true) {
	    module.exports = WM;
	  } else if (typeof exports !== 'undefined') {
	    exports.WeakMap = WM;
	  } else if (!('WeakMap' in global)) {
	    global.WeakMap = WM;
	  }
	
	  WM.createStorage = createStorage;
	  if (global.WeakMap)
	    global.WeakMap.createStorage = createStorage;
	}((0, eval)('this'));


/***/ },
/* 6 */
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
/* 7 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	     value: true
	});
	exports.PhotonCore = exports.vdom = undefined;
	
	var _definePhoton = __webpack_require__(/*! ./core/definePhoton */ 8);
	
	Object.keys(_definePhoton).forEach(function (key) {
	     if (key === "default" || key === "__esModule") return;
	     Object.defineProperty(exports, key, {
	          enumerable: true,
	          get: function get() {
	               return _definePhoton[key];
	          }
	     });
	});
	
	var _emit = __webpack_require__(/*! ./core/emit */ 13);
	
	Object.keys(_emit).forEach(function (key) {
	     if (key === "default" || key === "__esModule") return;
	     Object.defineProperty(exports, key, {
	          enumerable: true,
	          get: function get() {
	               return _emit[key];
	          }
	     });
	});
	
	var _PhotonComponent = __webpack_require__(/*! ./core/PhotonComponent */ 9);
	
	Object.keys(_PhotonComponent).forEach(function (key) {
	     if (key === "default" || key === "__esModule") return;
	     Object.defineProperty(exports, key, {
	          enumerable: true,
	          get: function get() {
	               return _PhotonComponent[key];
	          }
	     });
	});
	
	var _PropRules = __webpack_require__(/*! ./core/PropRules */ 17);
	
	Object.keys(_PropRules).forEach(function (key) {
	     if (key === "default" || key === "__esModule") return;
	     Object.defineProperty(exports, key, {
	          enumerable: true,
	          get: function get() {
	               return _PropRules[key];
	          }
	     });
	});
	
	var _PropTypes = __webpack_require__(/*! ./core/PropTypes */ 14);
	
	Object.keys(_PropTypes).forEach(function (key) {
	     if (key === "default" || key === "__esModule") return;
	     Object.defineProperty(exports, key, {
	          enumerable: true,
	          get: function get() {
	               return _PropTypes[key];
	          }
	     });
	});
	
	var _iDOMHelpers = __webpack_require__(/*! ./util/iDOMHelpers */ 18);
	
	Object.keys(_iDOMHelpers).forEach(function (key) {
	     if (key === "default" || key === "__esModule") return;
	     Object.defineProperty(exports, key, {
	          enumerable: true,
	          get: function get() {
	               return _iDOMHelpers[key];
	          }
	     });
	});
	
	var _isUtil = __webpack_require__(/*! ./util/isUtil */ 15);
	
	Object.keys(_isUtil).forEach(function (key) {
	     if (key === "default" || key === "__esModule") return;
	     Object.defineProperty(exports, key, {
	          enumerable: true,
	          get: function get() {
	               return _isUtil[key];
	          }
	     });
	});
	
	var _incrementalDom = __webpack_require__(/*! incremental-dom */ 10);
	
	var _vdom = _interopRequireWildcard(_incrementalDom);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.vdom = _vdom;
	var PhotonCore = exports.PhotonCore = {
	     Component: _PhotonComponent.PhotonComponent,
	     PropTypes: _PropTypes.PropTypes,
	     PropType: _PropTypes.PropType,
	     PropRules: _PropRules.PropRules,
	     PropRule: _PropRules.PropRule,
	     define: _definePhoton.definePhoton
	};
	//

/***/ },
/* 8 */
/*!**********************************!*\
  !*** ./src/core/definePhoton.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.definePhoton = definePhoton;
	
	var _PhotonComponent = __webpack_require__(/*! ./PhotonComponent */ 9);
	
	var _PropRules = __webpack_require__(/*! ./PropRules */ 17);
	
	var _PropTypes = __webpack_require__(/*! ./PropTypes */ 14);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Factory method: creates a new PhotonElement managed by given componentClass
	// this is then registered with customElements.define() at the end of this function.
	function definePhoton(componentClass) {
	    var baseHtmlClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : HTMLElement;
	    var extendsTag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	
	
	    var propTypes = componentClass.propTypes;
	
	    // Note: each time this function is called we create a new Class "PhotonElement" on the fly!
	
	    var PhotonElement = function (_baseHtmlClass) {
	        _inherits(PhotonElement, _baseHtmlClass);
	
	        _createClass(PhotonElement, null, [{
	            key: 'observedAttributes',
	            get: function get() {
	                return getObservedAttributes(propTypes);
	            }
	        }]);
	
	        function PhotonElement(self) {
	            var _this, _ret;
	
	            _classCallCheck(this, PhotonElement);
	
	            self = (_this = _possibleConstructorReturn(this, (PhotonElement.__proto__ || Object.getPrototypeOf(PhotonElement)).call(this, self)), _this);
	            var propsValues = {};
	            var photon = self._photon = new componentClass();
	            photon.elem = self;
	            photon.props = createProps(Object.keys(propTypes), propsValues);
	            photon.propRules = createPropRules(propTypes, propsValues, photon.mustRender);
	
	            // create element properties
	            Object.defineProperties(self, buildPropsConfig(photon));
	            // expose public methods
	            photon.publicMethods.map(function (name) {
	                var p = photon;
	                self[name] = p[name].bind(photon);
	            });
	
	            photon.configurePropRules(photon.propRules);
	            return _ret = self, _possibleConstructorReturn(_this, _ret);
	        }
	
	        _createClass(PhotonElement, [{
	            key: 'connectedCallback',
	            value: function connectedCallback() {
	                var _photon = this._photon;
	                if (!_photon._flags.isInitialized) {
	                    _photon.initialize();
	                    _photon._flags.isInitialized = true;
	                }
	                _photon.connectedCallback();
	            }
	        }, {
	            key: 'disconnectedCallback',
	            value: function disconnectedCallback() {
	                this._photon.disconnectedCallback();
	            }
	        }, {
	            key: 'attributeChangedCallback',
	            value: function attributeChangedCallback(attrName, oldVal, newVal) {
	                this._photon.attributeChangedCallback(attrName, oldVal, newVal);
	            }
	        }]);
	
	        return PhotonElement;
	    }(baseHtmlClass);
	
	    var ext = extendsTag ? { extends: extendsTag } : undefined;
	    window.customElements.define(componentClass.is, PhotonElement, ext);
	
	    return PhotonElement;
	}
	
	function getObservedAttributes(propTypes) {
	    var result = [];
	    Object.keys(propTypes).forEach(function (name) {
	        var propType = propTypes[name];
	        propType.name = name;
	        if (propType._attribute) {
	            result.push(propType._getAttrName());
	        }
	    });
	    //console.log('getObservedAttributes', result);
	    return result;
	}
	
	function createProps(names, values) {
	    var config = {};
	    names.forEach(function (name) {
	        config[name] = {
	            enumerable: true,
	            get: function get() {
	                return values[name];
	            }
	        };
	    });
	    return Object.defineProperties({}, config);
	}
	
	function createPropRules(propTypes, propsValues, changedCB) {
	    var propRules = {};
	    Object.keys(propTypes).forEach(function (name) {
	        var propType = propTypes[name];
	        propType.name = name;
	        propRules[name] = _PropRules.PropRules.create(propType, propsValues, changedCB);
	    });
	    return propRules;
	}
	
	function buildPropsConfig(photon) {
	    var config = {};
	    var propRules = photon.propRules;
	    photon._attrPropRules = {};
	    Object.keys(propRules).forEach(function (name) {
	        var rule = propRules[name];
	        photon._attrPropRules[rule.attrName] = rule;
	        config[name] = rule.getConfig(photon.elem);
	    });
	    return config;
	}

/***/ },
/* 9 */
/*!*************************************!*\
  !*** ./src/core/PhotonComponent.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PhotonComponent = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _incrementalDom = __webpack_require__(/*! incremental-dom */ 10);
	
	var d = _interopRequireWildcard(_incrementalDom);
	
	var _support = __webpack_require__(/*! ../util/support */ 12);
	
	var _emit = __webpack_require__(/*! ./../core/emit */ 13);
	
	var _PropTypes = __webpack_require__(/*! ../core/PropTypes */ 14);
	
	var _PropRules = __webpack_require__(/*! ../core/PropRules */ 17);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PhotonComponent = exports.PhotonComponent = function () {
	    function PhotonComponent() {
	        var _this = this;
	
	        _classCallCheck(this, PhotonComponent);
	
	        this.useIDom = true;
	        this.useShadowDom = true;
	        this._flags = {
	            isInitialized: false,
	            isConnected: false,
	            mustRender: false,
	            isRendering: false
	        };
	
	        this.mustRender = function () {
	            //console.log(this.elem.tagName, 'PhotonComponent.mustRender');
	            _this._flags.mustRender = true;
	            window.requestAnimationFrame(function () {
	                if (_this._flags.mustRender) {
	                    _this._flags.mustRender = false;
	                    _this.renderCycle();
	                }
	            });
	        };
	    }
	
	    _createClass(PhotonComponent, [{
	        key: 'configurePropRules',
	        value: function configurePropRules(propRules) {
	            // console.log(this.elem.tagName, 'PhotonComponent.configurePropRules');
	        }
	    }, {
	        key: 'initialize',
	        value: function initialize() {
	            var _this2 = this;
	
	            // console.log(this.elem.tagName, 'PhotonComponent.initialize');
	
	            // initialize Props
	            var propRules = this.propRules;
	            Object.keys(propRules).forEach(function (name) {
	                propRules[name]._initialize(_this2.elem);
	            });
	        }
	    }, {
	        key: 'connectedCallback',
	        value: function connectedCallback() {
	            // console.log(this.elem.tagName, 'PhotonComponent.connectedCallback');
	            this._flags.isConnected = true;
	            this.mustRender();
	        }
	    }, {
	        key: 'disconnectedCallback',
	        value: function disconnectedCallback() {
	            // console.log(this.elem.tagName, 'PhotonComponent.disconnectedCallback');
	            this._flags.isConnected = false;
	        }
	    }, {
	        key: 'attributeChangedCallback',
	        value: function attributeChangedCallback(attrName, oldVal, newVal) {
	            var rule = this._attrPropRules[attrName];
	            //console.log(this.elem.tagName, 'PhotonComponent.attributeChangedCallback', attrName, oldVal, newVal, rule);
	            if (rule) {
	                var changed = rule._setValue(rule.deserialize(newVal));
	                if (changed) {
	                    rule._syncAttr(this.elem, rule._reflAttr);
	                    if (rule._onChange) {
	                        rule._onChange(rule.val);
	                    }
	                    this.mustRender();
	                }
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render(self) {
	            //template method
	        }
	    }, {
	        key: 'renderCycle',
	        value: function renderCycle() {
	            if (this._flags.isRendering || !this._flags.isConnected) {
	                return;
	            }
	            this._flags.isRendering = true;
	
	            // Try and get the current shadow root (will be setup if not).
	            var sr = this.shadowRoot;
	
	            // Setup the shadow root if it hasn't been setup yet.
	            if (!sr) {
	                var elem = this.elem;
	                if (this.useShadowDom && _support.shadowDomV1) {
	                    sr = elem.attachShadow({ mode: 'open' });
	                }
	                // else if (shadowDomV0) {
	                //     sr = elem.createShadowRoot();
	                // }
	                else {
	                        sr = elem;
	                    }
	                this.shadowRoot = sr;
	            }
	
	            if (this.useIDom) {
	                d.patch(sr, this.render, this);
	            } else {
	                if (this.render(this)) {
	                    console.warn(this.elem.tagName + ' useIDom=false');
	                }
	            }
	
	            this._flags.isRendering = false;
	        }
	    }, {
	        key: 'emit',
	        value: function emit(name, detail) {
	            (0, _emit.emitCustomEvent)(this.elem, name, { detail: detail });
	        }
	    }, {
	        key: 'getElementsByTagName',
	        value: function getElementsByTagName(name) {
	            return this.shadowRoot.firstChild ? this.shadowRoot.firstChild.getElementsByTagName(name) : [];
	        }
	    }, {
	        key: 'getElementByTagName',
	        value: function getElementByTagName(name) {
	            var found = this.getElementsByTagName(name);
	            if (found && found.length > 0) {
	                return found[0];
	            }
	            return undefined;
	        }
	    }, {
	        key: 'renderTagDangerously',
	        value: function renderTagDangerously(tag, attrs, content) {
	            var params = [tag, null, null];
	            if (attrs) {
	                Object.keys(attrs).forEach(function (attr) {
	                    params.push(attr);
	                    params.push(attrs[attr]);
	                });
	            }
	            var el = d.elementOpen.apply(this, params);
	            if (el.__innerHTML !== content) {
	                el.__innerHTML = content;
	                el.innerHTML = content;
	            }
	            d.skip();
	            d.elementClose(tag);
	        }
	    }, {
	        key: 'publicMethods',
	        get: function get() {
	            return [];
	        }
	    }], [{
	        key: 'is',
	        get: function get() {
	            return '';
	        }
	    }, {
	        key: 'propTypes',
	        get: function get() {
	            return {};
	        }
	    }]);

	    return PhotonComponent;
	}();

/***/ },
/* 10 */
/*!*******************************************************!*\
  !*** ./~/incremental-dom/dist/incremental-dom-cjs.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
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
	 * A constructor function that will create blank objects.
	 * @constructor
	 */
	function Blank() {}
	
	Blank.prototype = Object.create(null);
	
	/**
	 * Used to prevent property collisions between our "map" and its prototype.
	 * @param {!Object<string, *>} map The map to check.
	 * @param {string} property The property to check.
	 * @return {boolean} Whether map has property.
	 */
	var has = function (map, property) {
	  return hasOwnProperty.call(map, property);
	};
	
	/**
	 * Creates an map object without a prototype.
	 * @return {!Object}
	 */
	var createMap = function () {
	  return new Blank();
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
	   * Whether or not the statics have been applied for the node yet.
	   * {boolean}
	   */
	  this.staticsApplied = false;
	
	  /**
	   * The key used to identify this node, used to preserve DOM nodes when they
	   * move within their parent.
	   * @const
	   */
	  this.key = key;
	
	  /**
	   * Keeps track of children within this node by their key.
	   * {!Object<string, !Element>}
	   */
	  this.keyMap = createMap();
	
	  /**
	   * Whether or not the keyMap is currently valid.
	   * @type {boolean}
	   */
	  this.keyMapValid = true;
	
	  /**
	   * Whether or the associated node is, or contains, a focused Element.
	   * @type {boolean}
	   */
	  this.focused = false;
	
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
	var initData = function (node, nodeName, key) {
	  var data = new NodeData(nodeName, key);
	  node['__incrementalDOMData'] = data;
	  return data;
	};
	
	/**
	 * Retrieves the NodeData object for a Node, creating it if necessary.
	 *
	 * @param {?Node} node The Node to retrieve the data for.
	 * @return {!NodeData} The NodeData for this Node.
	 */
	var getData = function (node) {
	  importNode(node);
	  return node['__incrementalDOMData'];
	};
	
	/**
	 * Imports node and its subtree, initializing caches.
	 *
	 * @param {?Node} node The Node to import.
	 */
	var importNode = function (node) {
	  if (node['__incrementalDOMData']) {
	    return;
	  }
	
	  var isElement = node instanceof Element;
	  var nodeName = isElement ? node.localName : node.nodeName;
	  var key = isElement ? node.getAttribute('key') : null;
	  var data = initData(node, nodeName, key);
	
	  if (key) {
	    getData(node.parentNode).keyMap[key] = node;
	  }
	
	  if (isElement) {
	    var attributes = node.attributes;
	    var attrs = data.attrs;
	    var newAttrs = data.newAttrs;
	    var attrsArr = data.attrsArr;
	
	    for (var i = 0; i < attributes.length; i += 1) {
	      var attr = attributes[i];
	      var name = attr.name;
	      var value = attr.value;
	
	      attrs[name] = value;
	      newAttrs[name] = undefined;
	      attrsArr.push(name);
	      attrsArr.push(value);
	    }
	  }
	
	  for (var child = node.firstChild; child; child = child.nextSibling) {
	    importNode(child);
	  }
	};
	
	/**
	 * Gets the namespace to create an element (of a given tag) in.
	 * @param {string} tag The tag to get the namespace for.
	 * @param {?Node} parent
	 * @return {?string} The namespace to create the tag in.
	 */
	var getNamespaceForTag = function (tag, parent) {
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
	 * @return {!Element}
	 */
	var createElement = function (doc, parent, tag, key) {
	  var namespace = getNamespaceForTag(tag, parent);
	  var el = undefined;
	
	  if (namespace) {
	    el = doc.createElementNS(namespace, tag);
	  } else {
	    el = doc.createElement(tag);
	  }
	
	  initData(el, tag, key);
	
	  return el;
	};
	
	/**
	 * Creates a Text Node.
	 * @param {Document} doc The document with which to create the Element.
	 * @return {!Text}
	 */
	var createText = function (doc) {
	  var node = doc.createTextNode('');
	  initData(node, '#text', null);
	  return node;
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
	  * Keeps track whether or not we are in an attributes declaration (after
	  * elementOpenStart, but before elementOpenEnd).
	  * @type {boolean}
	  */
	var inAttributes = false;
	
	/**
	  * Keeps track whether or not we are in an element that should not have its
	  * children cleared.
	  * @type {boolean}
	  */
	var inSkip = false;
	
	/**
	 * Makes sure that there is a current patch context.
	 * @param {string} functionName
	 * @param {*} context
	 */
	var assertInPatch = function (functionName, context) {
	  if (!context) {
	    throw new Error('Cannot call ' + functionName + '() unless in patch.');
	  }
	};
	
	/**
	 * Makes sure that a patch closes every node that it opened.
	 * @param {?Node} openElement
	 * @param {!Node|!DocumentFragment} root
	 */
	var assertNoUnclosedTags = function (openElement, root) {
	  if (openElement === root) {
	    return;
	  }
	
	  var currentElement = openElement;
	  var openTags = [];
	  while (currentElement && currentElement !== root) {
	    openTags.push(currentElement.nodeName.toLowerCase());
	    currentElement = currentElement.parentNode;
	  }
	
	  throw new Error('One or more tags were not closed:\n' + openTags.join('\n'));
	};
	
	/**
	 * Makes sure that the caller is not where attributes are expected.
	 * @param {string} functionName
	 */
	var assertNotInAttributes = function (functionName) {
	  if (inAttributes) {
	    throw new Error(functionName + '() can not be called between ' + 'elementOpenStart() and elementOpenEnd().');
	  }
	};
	
	/**
	 * Makes sure that the caller is not inside an element that has declared skip.
	 * @param {string} functionName
	 */
	var assertNotInSkip = function (functionName) {
	  if (inSkip) {
	    throw new Error(functionName + '() may not be called inside an element ' + 'that has called skip().');
	  }
	};
	
	/**
	 * Makes sure that the caller is where attributes are expected.
	 * @param {string} functionName
	 */
	var assertInAttributes = function (functionName) {
	  if (!inAttributes) {
	    throw new Error(functionName + '() can only be called after calling ' + 'elementOpenStart().');
	  }
	};
	
	/**
	 * Makes sure the patch closes virtual attributes call
	 */
	var assertVirtualAttributesClosed = function () {
	  if (inAttributes) {
	    throw new Error('elementOpenEnd() must be called after calling ' + 'elementOpenStart().');
	  }
	};
	
	/**
	  * Makes sure that tags are correctly nested.
	  * @param {string} nodeName
	  * @param {string} tag
	  */
	var assertCloseMatchesOpenTag = function (nodeName, tag) {
	  if (nodeName !== tag) {
	    throw new Error('Received a call to close "' + tag + '" but "' + nodeName + '" was open.');
	  }
	};
	
	/**
	 * Makes sure that no children elements have been declared yet in the current
	 * element.
	 * @param {string} functionName
	 * @param {?Node} previousNode
	 */
	var assertNoChildrenDeclaredYet = function (functionName, previousNode) {
	  if (previousNode !== null) {
	    throw new Error(functionName + '() must come before any child ' + 'declarations inside the current element.');
	  }
	};
	
	/**
	 * Checks that a call to patchOuter actually patched the element.
	 * @param {?Node} startNode The value for the currentNode when the patch
	 *     started.
	 * @param {?Node} currentNode The currentNode when the patch finished.
	 * @param {?Node} expectedNextNode The Node that is expected to follow the
	 *    currentNode after the patch;
	 * @param {?Node} expectedPrevNode The Node that is expected to preceed the
	 *    currentNode after the patch.
	 */
	var assertPatchElementNoExtras = function (startNode, currentNode, expectedNextNode, expectedPrevNode) {
	  var wasUpdated = currentNode.nextSibling === expectedNextNode && currentNode.previousSibling === expectedPrevNode;
	  var wasChanged = currentNode.nextSibling === startNode.nextSibling && currentNode.previousSibling === expectedPrevNode;
	  var wasRemoved = currentNode === startNode;
	
	  if (!wasUpdated && !wasChanged && !wasRemoved) {
	    throw new Error('There must be exactly one top level call corresponding ' + 'to the patched element.');
	  }
	};
	
	/**
	 * Updates the state of being in an attribute declaration.
	 * @param {boolean} value
	 * @return {boolean} the previous value.
	 */
	var setInAttributes = function (value) {
	  var previous = inAttributes;
	  inAttributes = value;
	  return previous;
	};
	
	/**
	 * Updates the state of being in a skip element.
	 * @param {boolean} value
	 * @return {boolean} the previous value.
	 */
	var setInSkip = function (value) {
	  var previous = inSkip;
	  inSkip = value;
	  return previous;
	};
	
	/**
	 * Copyright 2016 The Incremental DOM Authors. All Rights Reserved.
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
	 * @param {!Node} node
	 * @return {boolean} True if the node the root of a document, false otherwise.
	 */
	var isDocumentRoot = function (node) {
	  // For ShadowRoots, check if they are a DocumentFragment instead of if they
	  // are a ShadowRoot so that this can work in 'use strict' if ShadowRoots are
	  // not supported.
	  return node instanceof Document || node instanceof DocumentFragment;
	};
	
	/**
	 * @param {!Node} node The node to start at, inclusive.
	 * @param {?Node} root The root ancestor to get until, exclusive.
	 * @return {!Array<!Node>} The ancestry of DOM nodes.
	 */
	var getAncestry = function (node, root) {
	  var ancestry = [];
	  var cur = node;
	
	  while (cur !== root) {
	    ancestry.push(cur);
	    cur = cur.parentNode;
	  }
	
	  return ancestry;
	};
	
	/**
	 * @param {!Node} node
	 * @return {!Node} The root node of the DOM tree that contains node.
	 */
	var getRoot = function (node) {
	  var cur = node;
	  var prev = cur;
	
	  while (cur) {
	    prev = cur;
	    cur = cur.parentNode;
	  }
	
	  return prev;
	};
	
	/**
	 * @param {!Node} node The node to get the activeElement for.
	 * @return {?Element} The activeElement in the Document or ShadowRoot
	 *     corresponding to node, if present.
	 */
	var getActiveElement = function (node) {
	  var root = getRoot(node);
	  return isDocumentRoot(root) ? root.activeElement : null;
	};
	
	/**
	 * Gets the path of nodes that contain the focused node in the same document as
	 * a reference node, up until the root.
	 * @param {!Node} node The reference node to get the activeElement for.
	 * @param {?Node} root The root to get the focused path until.
	 * @return {!Array<Node>}
	 */
	var getFocusedPath = function (node, root) {
	  var activeElement = getActiveElement(node);
	
	  if (!activeElement || !node.contains(activeElement)) {
	    return [];
	  }
	
	  return getAncestry(activeElement, root);
	};
	
	/**
	 * Like insertBefore, but instead instead of moving the desired node, instead
	 * moves all the other nodes after.
	 * @param {?Node} parentNode
	 * @param {!Node} node
	 * @param {?Node} referenceNode
	 */
	var moveBefore = function (parentNode, node, referenceNode) {
	  var insertReferenceNode = node.nextSibling;
	  var cur = referenceNode;
	
	  while (cur !== node) {
	    var next = cur.nextSibling;
	    parentNode.insertBefore(cur, insertReferenceNode);
	    cur = next;
	  }
	};
	
	/** @type {?Context} */
	var context = null;
	
	/** @type {?Node} */
	var currentNode = null;
	
	/** @type {?Node} */
	var currentParent = null;
	
	/** @type {?Document} */
	var doc = null;
	
	/**
	 * @param {!Array<Node>} focusPath The nodes to mark.
	 * @param {boolean} focused Whether or not they are focused.
	 */
	var markFocused = function (focusPath, focused) {
	  for (var i = 0; i < focusPath.length; i += 1) {
	    getData(focusPath[i]).focused = focused;
	  }
	};
	
	/**
	 * Returns a patcher function that sets up and restores a patch context,
	 * running the run function with the provided data.
	 * @param {function((!Element|!DocumentFragment),!function(T),T=): ?Node} run
	 * @return {function((!Element|!DocumentFragment),!function(T),T=): ?Node}
	 * @template T
	 */
	var patchFactory = function (run) {
	  /**
	   * TODO(moz): These annotations won't be necessary once we switch to Closure
	   * Compiler's new type inference. Remove these once the switch is done.
	   *
	   * @param {(!Element|!DocumentFragment)} node
	   * @param {!function(T)} fn
	   * @param {T=} data
	   * @return {?Node} node
	   * @template T
	   */
	  var f = function (node, fn, data) {
	    var prevContext = context;
	    var prevDoc = doc;
	    var prevCurrentNode = currentNode;
	    var prevCurrentParent = currentParent;
	    var previousInAttributes = false;
	    var previousInSkip = false;
	
	    context = new Context();
	    doc = node.ownerDocument;
	    currentParent = node.parentNode;
	
	    if (process.env.NODE_ENV !== 'production') {
	      previousInAttributes = setInAttributes(false);
	      previousInSkip = setInSkip(false);
	    }
	
	    var focusPath = getFocusedPath(node, currentParent);
	    markFocused(focusPath, true);
	    var retVal = run(node, fn, data);
	    markFocused(focusPath, false);
	
	    if (process.env.NODE_ENV !== 'production') {
	      assertVirtualAttributesClosed();
	      setInAttributes(previousInAttributes);
	      setInSkip(previousInSkip);
	    }
	
	    context.notifyChanges();
	
	    context = prevContext;
	    doc = prevDoc;
	    currentNode = prevCurrentNode;
	    currentParent = prevCurrentParent;
	
	    return retVal;
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
	 * @return {!Node} The patched node.
	 * @template T
	 */
	var patchInner = patchFactory(function (node, fn, data) {
	  currentNode = node;
	
	  enterNode();
	  fn(data);
	  exitNode();
	
	  if (process.env.NODE_ENV !== 'production') {
	    assertNoUnclosedTags(currentNode, node);
	  }
	
	  return node;
	});
	
	/**
	 * Patches an Element with the the provided function. Exactly one top level
	 * element call should be made corresponding to `node`.
	 * @param {!Element} node The Element where the patch should start.
	 * @param {!function(T)} fn A function containing elementOpen/elementClose/etc.
	 *     calls that describe the DOM. This should have at most one top level
	 *     element call.
	 * @param {T=} data An argument passed to fn to represent DOM state.
	 * @return {?Node} The node if it was updated, its replacedment or null if it
	 *     was removed.
	 * @template T
	 */
	var patchOuter = patchFactory(function (node, fn, data) {
	  var startNode = /** @type {!Element} */{ nextSibling: node };
	  var expectedNextNode = null;
	  var expectedPrevNode = null;
	
	  if (process.env.NODE_ENV !== 'production') {
	    expectedNextNode = node.nextSibling;
	    expectedPrevNode = node.previousSibling;
	  }
	
	  currentNode = startNode;
	  fn(data);
	
	  if (process.env.NODE_ENV !== 'production') {
	    assertPatchElementNoExtras(startNode, currentNode, expectedNextNode, expectedPrevNode);
	  }
	
	  if (node !== currentNode && node.parentNode) {
	    removeChild(currentParent, node, getData(currentParent).keyMap);
	  }
	
	  return startNode === currentNode ? null : currentNode;
	});
	
	/**
	 * Checks whether or not the current node matches the specified nodeName and
	 * key.
	 *
	 * @param {!Node} matchNode A node to match the data to.
	 * @param {?string} nodeName The nodeName for this node.
	 * @param {?string=} key An optional key that identifies a node.
	 * @return {boolean} True if the node matches, false otherwise.
	 */
	var matches = function (matchNode, nodeName, key) {
	  var data = getData(matchNode);
	
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
	 */
	var alignWithDOM = function (nodeName, key) {
	  if (currentNode && matches(currentNode, nodeName, key)) {
	    return;
	  }
	
	  var parentData = getData(currentParent);
	  var currentNodeData = currentNode && getData(currentNode);
	  var keyMap = parentData.keyMap;
	  var node = undefined;
	
	  // Check to see if the node has moved within the parent.
	  if (key) {
	    var keyNode = keyMap[key];
	    if (keyNode) {
	      if (matches(keyNode, nodeName, key)) {
	        node = keyNode;
	      } else if (keyNode === currentNode) {
	        context.markDeleted(keyNode);
	      } else {
	        removeChild(currentParent, keyNode, keyMap);
	      }
	    }
	  }
	
	  // Create the node if it doesn't exist.
	  if (!node) {
	    if (nodeName === '#text') {
	      node = createText(doc);
	    } else {
	      node = createElement(doc, currentParent, nodeName, key);
	    }
	
	    if (key) {
	      keyMap[key] = node;
	    }
	
	    context.markCreated(node);
	  }
	
	  // Re-order the node into the right position, preserving focus if either
	  // node or currentNode are focused by making sure that they are not detached
	  // from the DOM.
	  if (getData(node).focused) {
	    // Move everything else before the node.
	    moveBefore(currentParent, node, currentNode);
	  } else if (currentNodeData && currentNodeData.key && !currentNodeData.focused) {
	    // Remove the currentNode, which can always be added back since we hold a
	    // reference through the keyMap. This prevents a large number of moves when
	    // a keyed item is removed or moved backwards in the DOM.
	    currentParent.replaceChild(node, currentNode);
	    parentData.keyMapValid = false;
	  } else {
	    currentParent.insertBefore(node, currentNode);
	  }
	
	  currentNode = node;
	};
	
	/**
	 * @param {?Node} node
	 * @param {?Node} child
	 * @param {?Object<string, !Element>} keyMap
	 */
	var removeChild = function (node, child, keyMap) {
	  node.removeChild(child);
	  context.markDeleted( /** @type {!Node}*/child);
	
	  var key = getData(child).key;
	  if (key) {
	    delete keyMap[key];
	  }
	};
	
	/**
	 * Clears out any unvisited Nodes, as the corresponding virtual element
	 * functions were never called for them.
	 */
	var clearUnvisitedDOM = function () {
	  var node = currentParent;
	  var data = getData(node);
	  var keyMap = data.keyMap;
	  var keyMapValid = data.keyMapValid;
	  var child = node.lastChild;
	  var key = undefined;
	
	  if (child === currentNode && keyMapValid) {
	    return;
	  }
	
	  while (child !== currentNode) {
	    removeChild(node, child, keyMap);
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
	var enterNode = function () {
	  currentParent = currentNode;
	  currentNode = null;
	};
	
	/**
	 * @return {?Node} The next Node to be patched.
	 */
	var getNextNode = function () {
	  if (currentNode) {
	    return currentNode.nextSibling;
	  } else {
	    return currentParent.firstChild;
	  }
	};
	
	/**
	 * Changes to the next sibling of the current node.
	 */
	var nextNode = function () {
	  currentNode = getNextNode();
	};
	
	/**
	 * Changes to the parent of the current node, removing any unvisited children.
	 */
	var exitNode = function () {
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
	 * @return {!Element} The corresponding Element.
	 */
	var coreElementOpen = function (tag, key) {
	  nextNode();
	  alignWithDOM(tag, key);
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
	var coreElementClose = function () {
	  if (process.env.NODE_ENV !== 'production') {
	    setInSkip(false);
	  }
	
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
	var coreText = function () {
	  nextNode();
	  alignWithDOM('#text', null);
	  return (/** @type {!Text} */currentNode
	  );
	};
	
	/**
	 * Gets the current Element being patched.
	 * @return {!Element}
	 */
	var currentElement = function () {
	  if (process.env.NODE_ENV !== 'production') {
	    assertInPatch('currentElement', context);
	    assertNotInAttributes('currentElement');
	  }
	  return (/** @type {!Element} */currentParent
	  );
	};
	
	/**
	 * @return {Node} The Node that will be evaluated for the next instruction.
	 */
	var currentPointer = function () {
	  if (process.env.NODE_ENV !== 'production') {
	    assertInPatch('currentPointer', context);
	    assertNotInAttributes('currentPointer');
	  }
	  return getNextNode();
	};
	
	/**
	 * Skips the children in a subtree, allowing an Element to be closed without
	 * clearing out the children.
	 */
	var skip = function () {
	  if (process.env.NODE_ENV !== 'production') {
	    assertNoChildrenDeclaredYet('skip', currentNode);
	    setInSkip(true);
	  }
	  currentNode = currentParent.lastChild;
	};
	
	/**
	 * Skips the next Node to be patched, moving the pointer forward to the next
	 * sibling of the current pointer.
	 */
	var skipNode = nextNode;
	
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
	  default: '__default'
	};
	
	/**
	 * @param {string} name
	 * @return {string|undefined} The namespace to use for the attribute.
	 */
	var getNamespace = function (name) {
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
	var applyAttr = function (el, name, value) {
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
	var applyProp = function (el, name, value) {
	  el[name] = value;
	};
	
	/**
	 * Applies a value to a style declaration. Supports CSS custom properties by
	 * setting properties containing a dash using CSSStyleDeclaration.setProperty.
	 * @param {CSSStyleDeclaration} style
	 * @param {!string} prop
	 * @param {*} value
	 */
	var setStyleValue = function (style, prop, value) {
	  if (prop.indexOf('-') >= 0) {
	    style.setProperty(prop, /** @type {string} */value);
	  } else {
	    style[prop] = value;
	  }
	};
	
	/**
	 * Applies a style to an Element. No vendor prefix expansion is done for
	 * property names/values.
	 * @param {!Element} el
	 * @param {string} name The attribute's name.
	 * @param {*} style The style to set. Either a string of css or an object
	 *     containing property-value pairs.
	 */
	var applyStyle = function (el, name, style) {
	  if (typeof style === 'string') {
	    el.style.cssText = style;
	  } else {
	    el.style.cssText = '';
	    var elStyle = el.style;
	    var obj = /** @type {!Object<string,string>} */style;
	
	    for (var prop in obj) {
	      if (has(obj, prop)) {
	        setStyleValue(elStyle, prop, obj[prop]);
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
	var applyAttributeTyped = function (el, name, value) {
	  var type = typeof value;
	
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
	var updateAttribute = function (el, name, value) {
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
	
	attributes['style'] = applyStyle;
	
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
	 * @param {...*} var_args, Attribute name/value pairs of the dynamic attributes
	 *     for the Element.
	 * @return {!Element} The corresponding Element.
	 */
	var elementOpen = function (tag, key, statics, var_args) {
	  if (process.env.NODE_ENV !== 'production') {
	    assertNotInAttributes('elementOpen');
	    assertNotInSkip('elementOpen');
	  }
	
	  var node = coreElementOpen(tag, key);
	  var data = getData(node);
	
	  if (!data.staticsApplied) {
	    if (statics) {
	      for (var _i = 0; _i < statics.length; _i += 2) {
	        var name = /** @type {string} */statics[_i];
	        var value = statics[_i + 1];
	        updateAttribute(node, name, value);
	      }
	    }
	    // Down the road, we may want to keep track of the statics array to use it
	    // as an additional signal about whether a node matches or not. For now,
	    // just use a marker so that we do not reapply statics.
	    data.staticsApplied = true;
	  }
	
	  /*
	   * Checks to see if one or more attributes have changed for a given Element.
	   * When no attributes have changed, this is much faster than checking each
	   * individual argument. When attributes have changed, the overhead of this is
	   * minimal.
	   */
	  var attrsArr = data.attrsArr;
	  var newAttrs = data.newAttrs;
	  var isNew = !attrsArr.length;
	  var i = ATTRIBUTES_OFFSET;
	  var j = 0;
	
	  for (; i < arguments.length; i += 2, j += 2) {
	    var _attr = arguments[i];
	    if (isNew) {
	      attrsArr[j] = _attr;
	      newAttrs[_attr] = undefined;
	    } else if (attrsArr[j] !== _attr) {
	      break;
	    }
	
	    var value = arguments[i + 1];
	    if (isNew || attrsArr[j + 1] !== value) {
	      attrsArr[j + 1] = value;
	      updateAttribute(node, _attr, value);
	    }
	  }
	
	  if (i < arguments.length || j < attrsArr.length) {
	    for (; i < arguments.length; i += 1, j += 1) {
	      attrsArr[j] = arguments[i];
	    }
	
	    if (j < attrsArr.length) {
	      attrsArr.length = j;
	    }
	
	    /*
	     * Actually perform the attribute update.
	     */
	    for (i = 0; i < attrsArr.length; i += 2) {
	      var name = /** @type {string} */attrsArr[i];
	      var value = attrsArr[i + 1];
	      newAttrs[name] = value;
	    }
	
	    for (var _attr2 in newAttrs) {
	      updateAttribute(node, _attr2, newAttrs[_attr2]);
	      newAttrs[_attr2] = undefined;
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
	var elementOpenStart = function (tag, key, statics) {
	  if (process.env.NODE_ENV !== 'production') {
	    assertNotInAttributes('elementOpenStart');
	    setInAttributes(true);
	  }
	
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
	var attr = function (name, value) {
	  if (process.env.NODE_ENV !== 'production') {
	    assertInAttributes('attr');
	  }
	
	  argsBuilder.push(name);
	  argsBuilder.push(value);
	};
	
	/**
	 * Closes an open tag started with elementOpenStart.
	 * @return {!Element} The corresponding Element.
	 */
	var elementOpenEnd = function () {
	  if (process.env.NODE_ENV !== 'production') {
	    assertInAttributes('elementOpenEnd');
	    setInAttributes(false);
	  }
	
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
	var elementClose = function (tag) {
	  if (process.env.NODE_ENV !== 'production') {
	    assertNotInAttributes('elementClose');
	  }
	
	  var node = coreElementClose();
	
	  if (process.env.NODE_ENV !== 'production') {
	    assertCloseMatchesOpenTag(getData(node).nodeName, tag);
	  }
	
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
	 * @param {...*} var_args Attribute name/value pairs of the dynamic attributes
	 *     for the Element.
	 * @return {!Element} The corresponding Element.
	 */
	var elementVoid = function (tag, key, statics, var_args) {
	  elementOpen.apply(null, arguments);
	  return elementClose(tag);
	};
	
	/**
	 * Declares a virtual Text at this point in the document.
	 *
	 * @param {string|number|boolean} value The value of the Text.
	 * @param {...(function((string|number|boolean)):string)} var_args
	 *     Functions to format the value which are called only when the value has
	 *     changed.
	 * @return {!Text} The corresponding text node.
	 */
	var text = function (value, var_args) {
	  if (process.env.NODE_ENV !== 'production') {
	    assertNotInAttributes('text');
	    assertNotInSkip('text');
	  }
	
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
	exports.currentPointer = currentPointer;
	exports.skip = skip;
	exports.skipNode = skipNode;
	exports.elementVoid = elementVoid;
	exports.elementOpenStart = elementOpenStart;
	exports.elementOpenEnd = elementOpenEnd;
	exports.elementOpen = elementOpen;
	exports.elementClose = elementClose;
	exports.text = text;
	exports.attr = attr;
	exports.symbols = symbols;
	exports.attributes = attributes;
	exports.applyAttr = applyAttr;
	exports.applyProp = applyProp;
	exports.notifications = notifications;
	exports.importNode = importNode;
	
	//# sourceMappingURL=incremental-dom-cjs.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 11)))

/***/ },
/* 11 */
/*!******************************!*\
  !*** ./~/process/browser.js ***!
  \******************************/
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 12 */
/*!*****************************!*\
  !*** ./src/util/support.js ***!
  \*****************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var doc = document;
	var win = window;
	var div = doc.createElement('div');
	var customElementsV0 = exports.customElementsV0 = !!doc.registerElement;
	var customElementsV1 = exports.customElementsV1 = !!win.customElements;
	var shadowDomV0 = exports.shadowDomV0 = !!div.createShadowRoot;
	var shadowDomV1 = exports.shadowDomV1 = !!div.attachShadow;
	
	console.log('customElementsV0', customElementsV0);
	console.log('customElementsV1', customElementsV1);
	console.log('shadowDomV0', shadowDomV0);
	console.log('shadowDomV1', shadowDomV1);

/***/ },
/* 13 */
/*!**************************!*\
  !*** ./src/core/emit.js ***!
  \**************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.emitCustomEvent = emitCustomEvent;
	
	
	var CustomEvent = function (Event) {
	    if (Event) {
	        try {
	            new Event();
	        } catch (e) {
	            return undefined;
	        }
	    }
	    return Event;
	}(window.CustomEvent);
	
	function createCustomEvent(name) {
	    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    if (CustomEvent) {
	        return new CustomEvent(name, opts);
	    }
	    var e = document.createEvent('CustomEvent');
	
	    e.initCustomEvent(name, opts.bubbles || false, opts.cancelable || false, opts.detail);
	    return e;
	}
	
	function emitCustomEvent(elem, name) {
	    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	    if (opts.bubbles === undefined) {
	        opts.bubbles = false;
	    }
	    if (opts.cancelable === undefined) {
	        opts.cancelable = false;
	    }
	    console.log('emit CustomEvent', name, opts.detail);
	    return elem.dispatchEvent(createCustomEvent(name, opts));
	}

/***/ },
/* 14 */
/*!*******************************!*\
  !*** ./src/core/PropTypes.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PropType = exports.PropTypes = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _isUtil = __webpack_require__(/*! ../util/isUtil */ 15);
	
	var _snakeCase = __webpack_require__(/*! ../util/snakeCase */ 16);
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PropTypes = exports.PropTypes = {
	    bool: function bool() {
	        return new PropType('bool');
	    },
	    number: function number() {
	        return new PropType('number');
	    },
	    string: function string() {
	        return new PropType('string');
	    },
	    object: function object() {
	        return new PropType('object');
	    },
	    arrayOf: function arrayOf(_arrayOf) {
	        return new PropArrayOf(_arrayOf);
	    }
	};
	
	var PropType = exports.PropType = function () {
	    function PropType(type) {
	        _classCallCheck(this, PropType);
	
	        this._type = type;
	    }
	
	    _createClass(PropType, [{
	        key: 'nullable',
	        value: function nullable() {
	            this._nullable = true;
	            return this;
	        }
	    }, {
	        key: 'attribute',
	        value: function attribute(val) {
	            this._attribute = (0, _isUtil.isString)(val) && val ? val : true;
	            return this;
	        }
	    }, {
	        key: 'reflect',
	        value: function reflect(val) {
	            this._reflect = (0, _isUtil.isString)(val) && val ? val : true;
	            return this;
	        }
	    }, {
	        key: '_getAttrName',
	        value: function _getAttrName() {
	            return this._attrName = (0, _isUtil.isString)(this._attribute) ? String(this._attribute) : (0, _snakeCase.snakeCase)(this.name);
	        }
	    }]);
	
	    return PropType;
	}();
	
	var PropArrayOf = function (_PropType) {
	    _inherits(PropArrayOf, _PropType);
	
	    function PropArrayOf(arrayOf) {
	        _classCallCheck(this, PropArrayOf);
	
	        var _this = _possibleConstructorReturn(this, (PropArrayOf.__proto__ || Object.getPrototypeOf(PropArrayOf)).call(this, 'arrayOf'));
	
	        _this._arrayOf = arrayOf;
	        return _this;
	    }
	
	    return PropArrayOf;
	}(PropType);

/***/ },
/* 15 */
/*!****************************!*\
  !*** ./src/util/isUtil.js ***!
  \****************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.noValue = noValue;
	exports.hasValue = hasValue;
	exports.isBoolean = isBoolean;
	exports.isNumber = isNumber;
	exports.isNumNaN = isNumNaN;
	exports.isString = isString;
	exports.noEmptyString = noEmptyString;
	function noValue(val) {
	    return val === null || typeof val === 'undefined';
	}
	function hasValue(val) {
	    return val !== null && typeof val !== 'undefined';
	}
	function isBoolean(val) {
	    return typeof val === 'boolean';
	}
	function isNumber(val) {
	    return typeof val === 'number';
	}
	function isNumNaN(val) {
	    return typeof val === 'number' && isNaN(val);
	}
	function isString(val) {
	    return typeof val === 'string';
	}
	function noEmptyString(val) {
	    return typeof val === 'string' && val.length > 0;
	}

/***/ },
/* 16 */
/*!*******************************!*\
  !*** ./src/util/snakeCase.js ***!
  \*******************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.snakeCase = snakeCase;
	
	
	//convert from camelCase to snake-case
	function snakeCase(str) {
	    return str.split(/([A-Z])/).reduce(function (one, two, idx) {
	        var dash = !one || idx % 2 === 0 ? '' : '-';
	        return '' + one + dash + two.toLowerCase();
	    });
	}

/***/ },
/* 17 */
/*!*******************************!*\
  !*** ./src/core/PropRules.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PropRules = exports.PropRule = undefined;
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _isUtil = __webpack_require__(/*! ../util/isUtil */ 15);
	
	var _PropTypes = __webpack_require__(/*! ./PropTypes */ 14);
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PropRule = exports.PropRule = function () {
	
	    //_nullable:boolean;
	
	    function PropRule(propType, propsValues, changedCB) {
	        _classCallCheck(this, PropRule);
	
	        this._attribute = false;
	        this._nullTo = null;
	        this._nanTo = NaN;
	
	        this._propsValues = propsValues;
	        this._changedCB = changedCB;
	        this._name = propType.name;
	
	        //this._nullable = propType._nullable;
	        this._attribute = propType._attribute;
	        this._attrName = propType._attrName;
	
	        this._reflect = propType._reflect;
	        if (this._reflect) {
	            if ((0, _isUtil.isString)(this._reflect)) {
	                this._reflAttr = String(this._reflect);
	            }
	        }
	    }
	
	    _createClass(PropRule, [{
	        key: 'nullTo',
	        value: function nullTo(v) {
	            this._nullTo = v;
	            return this;
	        }
	    }, {
	        key: 'nanTo',
	        value: function nanTo(v) {
	            this._nanTo = v;
	            return this;
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(fn) {
	            this._onChange = fn;
	            return this;
	        }
	
	        ////////
	
	        // get value():any {
	        //     return this.val;
	        // }
	
	    }, {
	        key: '_setValue',
	        value: function _setValue(v) {
	            if (this.equals(v)) {
	                //console.log('IGNORE PropRule.setValue', this._name, v);
	                return false;
	            } else {
	                //console.log('PropRule.setValue', this._name, v);
	                this.val = this.coerce(v);
	                return true;
	            }
	        }
	    }, {
	        key: '_setValueAndNotify',
	        value: function _setValueAndNotify(v, elem) {
	            var changed = this._setValue(v);
	            if (changed) {
	                if (this._onChange) {
	                    this._onChange(this.val);
	                }
	                this._changedCB(); //mustRender
	                if (this._attribute && this._reflect) {
	                    this._syncAttr(elem, this._attrName);
	                    this._syncAttr(elem, this._reflAttr);
	                }
	            }
	            return changed;
	        }
	    }, {
	        key: '_syncAttr',
	        value: function _syncAttr(elem, attrName) {
	            if (attrName) {
	                var serialized = this.serialize(this.val);
	                if ((0, _isUtil.noValue)(serialized)) {
	                    elem.removeAttribute(attrName);
	                } else {
	                    elem.setAttribute(attrName, serialized);
	                }
	            }
	        }
	    }, {
	        key: 'coerce',
	        value: function coerce(v) {
	            if ((0, _isUtil.noValue)(v)) {
	                return this._nullTo;
	            }
	            return v;
	        }
	    }, {
	        key: 'serialize',
	        value: function serialize(v) {
	            return (0, _isUtil.noValue)(v) ? null : v.toString();
	        }
	    }, {
	        key: 'deserialize',
	        value: function deserialize(v) {
	            return (0, _isUtil.noValue)(v) ? this._nullTo : v;
	        }
	    }, {
	        key: 'equals',
	        value: function equals(v) {
	            return this.val === this.coerce(v);
	        }
	    }, {
	        key: 'getConfig',
	        value: function getConfig(elem) {
	            var _this = this;
	
	            this._configed = true;
	            return {
	                enumerable: true,
	                get: function get() {
	                    return _this.val;
	                },
	                set: function set(v) {
	                    _this._setValueAndNotify(v, elem);
	                }
	            };
	        }
	    }, {
	        key: '_initialize',
	        value: function _initialize(elem) {
	            this._setValueAndNotify(this.coerce(this.val), elem);
	        }
	    }, {
	        key: 'val',
	        get: function get() {
	            return this._propsValues[this._name];
	        },
	        set: function set(v) {
	            this._propsValues[this._name] = v;
	        }
	    }, {
	        key: 'name',
	        get: function get() {
	            return this._name;
	        }
	    }, {
	        key: 'attrName',
	        get: function get() {
	            return this._attrName;
	        }
	    }]);
	
	    return PropRule;
	}();
	
	var ObjRule = function (_PropRule) {
	    _inherits(ObjRule, _PropRule);
	
	    function ObjRule() {
	        _classCallCheck(this, ObjRule);
	
	        return _possibleConstructorReturn(this, (ObjRule.__proto__ || Object.getPrototypeOf(ObjRule)).apply(this, arguments));
	    }
	
	    _createClass(ObjRule, [{
	        key: 'coerce',
	        value: function coerce(v) {
	            return (0, _isUtil.noValue)(v) ? this._nullTo : v;
	        }
	    }, {
	        key: 'serialize',
	        value: function serialize(v) {
	            return JSON.stringify(v);
	        }
	    }, {
	        key: 'deserialize',
	        value: function deserialize(v) {
	            if (v == null) {
	                return null;
	            }
	            return JSON.parse(v);
	        }
	    }]);
	
	    return ObjRule;
	}(PropRule);
	
	var BoolNullRule = function (_PropRule2) {
	    _inherits(BoolNullRule, _PropRule2);
	
	    function BoolNullRule() {
	        _classCallCheck(this, BoolNullRule);
	
	        return _possibleConstructorReturn(this, (BoolNullRule.__proto__ || Object.getPrototypeOf(BoolNullRule)).apply(this, arguments));
	    }
	
	    _createClass(BoolNullRule, [{
	        key: 'coerce',
	        value: function coerce(v) {
	            if ((0, _isUtil.noValue)(v)) {
	                return this._nullTo;
	            }
	            if ((0, _isUtil.isString)(v)) {
	                if (v === 'false' || v === '0' || v === 'NaN') {
	                    return false;
	                }
	            }
	            return !!v;
	        }
	
	        //attribute = 'true', 'false' or missing for null
	
	    }, {
	        key: 'serialize',
	        value: function serialize(v) {
	            return (0, _isUtil.noValue)(v) ? null : v.toString();
	        }
	    }, {
	        key: 'deserialize',
	        value: function deserialize(v) {
	            return this.coerce(v);
	        }
	    }]);
	
	    return BoolNullRule;
	}(PropRule);
	
	var BoolRule = function (_BoolNullRule) {
	    _inherits(BoolRule, _BoolNullRule);
	
	    function BoolRule(propType, propsValues, changedCB) {
	        _classCallCheck(this, BoolRule);
	
	        var _this4 = _possibleConstructorReturn(this, (BoolRule.__proto__ || Object.getPrototypeOf(BoolRule)).call(this, propType, propsValues, changedCB));
	
	        _this4._nullTo = false;
	        _this4.val = false;
	        return _this4;
	    }
	
	    //attribute exists for true and is missing for false
	
	
	    _createClass(BoolRule, [{
	        key: 'serialize',
	        value: function serialize(v) {
	            return v ? '' : null;
	        }
	    }, {
	        key: 'deserialize',
	        value: function deserialize(v) {
	            if (v === '') {
	                return true;
	            }
	            return _get(BoolRule.prototype.__proto__ || Object.getPrototypeOf(BoolRule.prototype), 'deserialize', this).call(this, v);
	        }
	    }]);
	
	    return BoolRule;
	}(BoolNullRule);
	
	var NumNullRule = function (_PropRule3) {
	    _inherits(NumNullRule, _PropRule3);
	
	    function NumNullRule() {
	        _classCallCheck(this, NumNullRule);
	
	        return _possibleConstructorReturn(this, (NumNullRule.__proto__ || Object.getPrototypeOf(NumNullRule)).apply(this, arguments));
	    }
	
	    _createClass(NumNullRule, [{
	        key: 'coerce',
	        value: function coerce(v) {
	            return (0, _isUtil.noValue)(v) ? this._nullTo : isNaN(v) ? this._nanTo : Number(v);
	        }
	    }, {
	        key: 'deserialize',
	        value: function deserialize(v) {
	            return this.coerce(v);
	        }
	    }, {
	        key: 'equals',
	        value: function equals(v) {
	            return this.val === v || (0, _isUtil.isNumNaN)(this.val) && (0, _isUtil.isNumNaN)(v);
	        }
	    }]);
	
	    return NumNullRule;
	}(PropRule);
	
	var NumRule = function (_NumNullRule) {
	    _inherits(NumRule, _NumNullRule);
	
	    function NumRule(propType, propsValues, changedCB) {
	        _classCallCheck(this, NumRule);
	
	        var _this6 = _possibleConstructorReturn(this, (NumRule.__proto__ || Object.getPrototypeOf(NumRule)).call(this, propType, propsValues, changedCB));
	
	        _this6._nullTo = 0;
	        _this6.val = 0;
	        return _this6;
	    }
	
	    return NumRule;
	}(NumNullRule);
	
	var StrNullRule = function (_PropRule4) {
	    _inherits(StrNullRule, _PropRule4);
	
	    function StrNullRule() {
	        _classCallCheck(this, StrNullRule);
	
	        return _possibleConstructorReturn(this, (StrNullRule.__proto__ || Object.getPrototypeOf(StrNullRule)).apply(this, arguments));
	    }
	
	    _createClass(StrNullRule, [{
	        key: 'coerce',
	        value: function coerce(v) {
	            return (0, _isUtil.noValue)(v) ? this._nullTo : String(v);
	        }
	    }, {
	        key: 'deserialize',
	        value: function deserialize(v) {
	            return this.coerce(v);
	        }
	    }]);
	
	    return StrNullRule;
	}(PropRule);
	
	var StrRule = function (_StrNullRule) {
	    _inherits(StrRule, _StrNullRule);
	
	    function StrRule(propType, propsValues, changedCB) {
	        _classCallCheck(this, StrRule);
	
	        var _this8 = _possibleConstructorReturn(this, (StrRule.__proto__ || Object.getPrototypeOf(StrRule)).call(this, propType, propsValues, changedCB));
	
	        _this8._nullTo = '';
	        _this8.val = '';
	        return _this8;
	    }
	
	    return StrRule;
	}(StrNullRule);
	
	var ArrayOfStringRule = function (_PropRule5) {
	    _inherits(ArrayOfStringRule, _PropRule5);
	
	    function ArrayOfStringRule() {
	        _classCallCheck(this, ArrayOfStringRule);
	
	        return _possibleConstructorReturn(this, (ArrayOfStringRule.__proto__ || Object.getPrototypeOf(ArrayOfStringRule)).apply(this, arguments));
	    }
	
	    _createClass(ArrayOfStringRule, [{
	        key: 'coerce',
	        value: function coerce(v) {
	            if ((0, _isUtil.noValue)(v)) {
	                return this._nullTo;
	            }
	            if (typeof v === 'string') {
	                var vals = v.split(',').map(function (v) {
	                    return v.trim();
	                });
	                v = vals.length === 2 ? vals : this._nullTo;
	            }
	            return v;
	        }
	    }, {
	        key: 'deserialize',
	        value: function deserialize(v) {
	            if (v == null) {
	                return this._nullTo;
	            }
	            return v.split(',').map(function (s) {
	                return s.trim();
	            });
	        }
	    }, {
	        key: 'equals',
	        value: function equals(v) {
	            return this.serialize(this.val) === this.serialize(this.coerce(v));
	        }
	    }]);
	
	    return ArrayOfStringRule;
	}(PropRule);
	
	var PropRules = exports.PropRules = function () {
	    function PropRules() {
	        _classCallCheck(this, PropRules);
	    }
	
	    _createClass(PropRules, null, [{
	        key: 'create',
	        value: function create(propType, propsValues, changedCB) {
	            var clazz = void 0;
	            var nullable = propType._nullable;
	            switch (propType._type) {
	                case 'object':
	                    clazz = ObjRule;
	                    break;
	                case 'bool':
	                    clazz = nullable ? BoolNullRule : BoolRule;
	                    break;
	                case 'number':
	                    clazz = nullable ? NumNullRule : NumRule;
	                    break;
	                case 'string':
	                    clazz = nullable ? StrNullRule : StrRule;
	                    break;
	                // case 'arrayOf':
	                //     clazz = ArrayOfRule;
	                //     break;
	                case 'arrayOf':
	                    if (propType._arrayOf === 'string') {
	                        clazz = ArrayOfStringRule;
	                    } else {
	                        throw 'arrayOf: ' + propType._arrayOf + ' not implemented yet';
	                    }
	                    break;
	                default:
	                    throw 'Invalid PropType: ' + propType._type;
	            }
	            return new clazz(propType, propsValues, changedCB);
	        }
	    }]);

	    return PropRules;
	}();

/***/ },
/* 18 */
/*!*********************************!*\
  !*** ./src/util/iDOMHelpers.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _incrementalDom = __webpack_require__(/*! incremental-dom */ 10);
	
	var runtime = {};
	
	runtime.attr = function (value, attrName) {
	    IncrementalDOM.attr(attrName, value);
	};
	
	runtime.forOwn = function (object, iterator) {
	    var hasOwn = Object.prototype.hasOwnProperty;
	    for (var prop in object) {
	        if (hasOwn.call(object, prop)) {
	            iterator(object[prop], prop);
	        }
	    }
	};
	
	runtime.jsxWrapper = function (elementClosure, args) {
	    var wrapper = args ? function () {
	        return elementClosure.apply(this, args);
	    } : jsxClosure;
	    wrapper.__jsxDOMWrapper = true;
	    return wrapper;
	};
	
	runtime.renderArbitrary = function _renderArbitrary(child) {
	    var type = typeof child === 'undefined' ? 'undefined' : _typeof(child);
	    if (type === 'number' || type === 'string' || type === 'object' && child instanceof String) {
	        (0, _incrementalDom.text)(child);
	    } else if (type === 'function' && child.__jsxDOMWrapper) {
	        child();
	    } else if (Array.isArray(child)) {
	        child.forEach(_renderArbitrary);
	    } else if (type === 'object' && String(child) === '[object Object]') {
	        runtime.forOwn(child, _renderArbitrary);
	    }
	};
	
	exports.iDOMHelpers = runtime;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=photon-core.js.map
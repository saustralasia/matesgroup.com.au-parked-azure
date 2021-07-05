(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./node_modules/@popperjs/core/lib/createPopper.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/createPopper.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "popperGenerator": () => (/* binding */ popperGenerator),
/* harmony export */   "createPopper": () => (/* binding */ createPopper),
/* harmony export */   "detectOverflow": () => (/* reexport safe */ _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_13__.default)
/* harmony export */ });
/* harmony import */ var _dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom-utils/getCompositeRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-utils/listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom-utils/getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/orderModifiers.js */ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js");
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/debounce.js */ "./node_modules/@popperjs/core/lib/utils/debounce.js");
/* harmony import */ var _utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/validateModifiers.js */ "./node_modules/@popperjs/core/lib/utils/validateModifiers.js");
/* harmony import */ var _utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/uniqueBy.js */ "./node_modules/@popperjs/core/lib/utils/uniqueBy.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/mergeByName.js */ "./node_modules/@popperjs/core/lib/utils/mergeByName.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@popperjs/core/lib/enums.js");














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign(Object.assign({}, DEFAULT_OPTIONS), defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign(Object.assign(Object.assign({}, defaultOptions), state.options), options);
        state.scrollParents = {
          reference: (0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(reference) ? (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__.default)(reference) : reference.contextElement ? (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__.default)(reference.contextElement) : [],
          popper: (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__.default)(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = (0,_utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_2__.default)((0,_utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_3__.default)([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (true) {
          var modifiers = (0,_utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_4__.default)([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          (0,_utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_5__.default)(modifiers);

          if ((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__.default)(state.options.placement) === _enums_js__WEBPACK_IMPORTED_MODULE_7__.auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = (0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_8__.default)(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: (0,_dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_9__.default)(reference, (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__.default)(popper), state.options.strategy === 'fixed'),
          popper: (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_11__.default)(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: (0,_utils_debounce_js__WEBPACK_IMPORTED_MODULE_12__.default)(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/contains.js":
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/contains.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contains)
/* harmony export */ });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isShadowRoot)(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBoundingClientRect)
/* harmony export */ });
function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getClippingRect)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _getViewportRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getViewportRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js");
/* harmony import */ var _getDocumentRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js");
/* harmony import */ var _listScrollParents_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");














function getInnerBoundingClientRect(element) {
  var rect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__.default)(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === _enums_js__WEBPACK_IMPORTED_MODULE_1__.viewport ? (0,_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__.default)((0,_getViewportRect_js__WEBPACK_IMPORTED_MODULE_3__.default)(element)) : (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isHTMLElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent) : (0,_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__.default)((0,_getDocumentRect_js__WEBPACK_IMPORTED_MODULE_5__.default)((0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__.default)(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = (0,_listScrollParents_js__WEBPACK_IMPORTED_MODULE_7__.default)((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_8__.default)(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf((0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_9__.default)(element).position) >= 0;
  var clipperElement = canEscapeClipping && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isHTMLElement)(element) ? (0,_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__.default)(element) : element;

  if (!(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clippingParent) && (0,_contains_js__WEBPACK_IMPORTED_MODULE_11__.default)(clippingParent, clipperElement) && (0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_12__.default)(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = Math.max(rect.top, accRect.top);
    accRect.right = Math.min(rect.right, accRect.right);
    accRect.bottom = Math.min(rect.bottom, accRect.bottom);
    accRect.left = Math.max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCompositeRect)
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getNodeScroll_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getNodeScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");






 // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__.default)(offsetParent);
  var rect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_1__.default)(elementOrVirtualElement);
  var isOffsetParentAnElement = (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_2__.isHTMLElement)(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_3__.default)(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_4__.default)(documentElement)) {
      scroll = (0,_getNodeScroll_js__WEBPACK_IMPORTED_MODULE_5__.default)(offsetParent);
    }

    if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_2__.isHTMLElement)(offsetParent)) {
      offsets = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_1__.default)(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_6__.default)(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getComputedStyle)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getComputedStyle(element) {
  return (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(element).getComputedStyle(element);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDocumentElement)
/* harmony export */ });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return (((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDocumentRect)
/* harmony export */ });
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");



 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var html = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__.default)(element);
  var winScroll = (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_1__.default)(element);
  var body = element.ownerDocument.body;
  var width = Math.max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = Math.max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__.default)(element);
  var y = -winScroll.scrollTop;

  if ((0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_3__.default)(body || html).direction === 'rtl') {
    x += Math.max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getHTMLElementScroll)
/* harmony export */ });
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getLayoutRect)
/* harmony export */ });
// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function getLayoutRect(element) {
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: element.offsetWidth,
    height: element.offsetHeight
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getNodeName)
/* harmony export */ });
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getNodeScroll)
/* harmony export */ });
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getHTMLElementScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js");




function getNodeScroll(node) {
  if (node === (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(node) || !(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(node)) {
    return (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__.default)(node);
  } else {
    return (0,_getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__.default)(node);
  }
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOffsetParent)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _isTableElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isTableElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");








function getTrueOffsetParent(element) {
  if (!(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
  (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__.default)(element).position === 'fixed') {
    return null;
  }

  var offsetParent = element.offsetParent;

  if (offsetParent) {
    var html = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__.default)(offsetParent);

    if ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_3__.default)(offsetParent) === 'body' && (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__.default)(offsetParent).position === 'static' && (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__.default)(html).position !== 'static') {
      return html;
    }
  }

  return offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var currentNode = (0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_4__.default)(element);

  while ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(currentNode) && ['html', 'body'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_3__.default)(currentNode)) < 0) {
    var css = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__.default)(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.

    if (css.transform !== 'none' || css.perspective !== 'none' || css.willChange && css.willChange !== 'auto') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_5__.default)(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && (0,_isTableElement_js__WEBPACK_IMPORTED_MODULE_6__.default)(offsetParent) && (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__.default)(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_3__.default)(offsetParent) === 'body' && (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__.default)(offsetParent).position === 'static') {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getParentNode)
/* harmony export */ });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");


function getParentNode(element) {
  if ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__.default)(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    // $FlowFixMe[incompatible-return]: need a better way to handle this...
    element.host || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__.default)(element) // fallback

  );
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getScrollParent)
/* harmony export */ });
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__.default)(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(node) && (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__.default)(node)) {
    return node;
  }

  return getScrollParent((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_3__.default)(node));
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getViewportRect)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");



function getViewportRect(element) {
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(element);
  var html = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__.default)(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__.default)(element),
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js":
/*!****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWindow)
/* harmony export */ });
/*:: import type { Window } from '../types'; */

/*:: declare function getWindow(node: Node | Window): Window; */
function getWindow(node) {
  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWindowScroll)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getWindowScroll(node) {
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWindowScrollBarX)
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__.default)(element)).left + (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__.default)(element).scrollLeft;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isElement": () => (/* binding */ isElement),
/* harmony export */   "isHTMLElement": () => (/* binding */ isHTMLElement),
/* harmony export */   "isShadowRoot": () => (/* binding */ isShadowRoot)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

/*:: declare function isElement(node: mixed): boolean %checks(node instanceof
  Element); */

function isElement(node) {
  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
/*:: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
  HTMLElement); */


function isHTMLElement(node) {
  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
/*:: declare function isShadowRoot(node: mixed): boolean %checks(node instanceof
  ShadowRoot); */


function isShadowRoot(node) {
  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isScrollParent)
/* harmony export */ });
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__.default)(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isTableElement)
/* harmony export */ });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__.default)(element)) >= 0;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js":
/*!************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ listScrollParents)
/* harmony export */ });
/* harmony import */ var _getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");





/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  if (list === void 0) {
    list = [];
  }

  var scrollParent = (0,_getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__.default)(element);
  var isBody = (0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__.default)(scrollParent) === 'body';
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_2__.default)(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_3__.default)(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_4__.default)(target)));
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/enums.js":
/*!**************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/enums.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "top": () => (/* binding */ top),
/* harmony export */   "bottom": () => (/* binding */ bottom),
/* harmony export */   "right": () => (/* binding */ right),
/* harmony export */   "left": () => (/* binding */ left),
/* harmony export */   "auto": () => (/* binding */ auto),
/* harmony export */   "basePlacements": () => (/* binding */ basePlacements),
/* harmony export */   "start": () => (/* binding */ start),
/* harmony export */   "end": () => (/* binding */ end),
/* harmony export */   "clippingParents": () => (/* binding */ clippingParents),
/* harmony export */   "viewport": () => (/* binding */ viewport),
/* harmony export */   "popper": () => (/* binding */ popper),
/* harmony export */   "reference": () => (/* binding */ reference),
/* harmony export */   "variationPlacements": () => (/* binding */ variationPlacements),
/* harmony export */   "placements": () => (/* binding */ placements),
/* harmony export */   "beforeRead": () => (/* binding */ beforeRead),
/* harmony export */   "read": () => (/* binding */ read),
/* harmony export */   "afterRead": () => (/* binding */ afterRead),
/* harmony export */   "beforeMain": () => (/* binding */ beforeMain),
/* harmony export */   "main": () => (/* binding */ main),
/* harmony export */   "afterMain": () => (/* binding */ afterMain),
/* harmony export */   "beforeWrite": () => (/* binding */ beforeWrite),
/* harmony export */   "write": () => (/* binding */ write),
/* harmony export */   "afterWrite": () => (/* binding */ afterWrite),
/* harmony export */   "modifierPhases": () => (/* binding */ modifierPhases)
/* harmony export */ });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "afterMain": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.afterMain),
/* harmony export */   "afterRead": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.afterRead),
/* harmony export */   "afterWrite": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.afterWrite),
/* harmony export */   "auto": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.auto),
/* harmony export */   "basePlacements": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements),
/* harmony export */   "beforeMain": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.beforeMain),
/* harmony export */   "beforeRead": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.beforeRead),
/* harmony export */   "beforeWrite": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.beforeWrite),
/* harmony export */   "bottom": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom),
/* harmony export */   "clippingParents": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.clippingParents),
/* harmony export */   "end": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.end),
/* harmony export */   "left": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.left),
/* harmony export */   "main": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.main),
/* harmony export */   "modifierPhases": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.modifierPhases),
/* harmony export */   "placements": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.placements),
/* harmony export */   "popper": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper),
/* harmony export */   "read": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.read),
/* harmony export */   "reference": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.reference),
/* harmony export */   "right": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.right),
/* harmony export */   "start": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.start),
/* harmony export */   "top": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.top),
/* harmony export */   "variationPlacements": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements),
/* harmony export */   "viewport": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.viewport),
/* harmony export */   "write": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.write),
/* harmony export */   "applyStyles": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.applyStyles),
/* harmony export */   "arrow": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.arrow),
/* harmony export */   "computeStyles": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.computeStyles),
/* harmony export */   "eventListeners": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.eventListeners),
/* harmony export */   "flip": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.flip),
/* harmony export */   "hide": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.hide),
/* harmony export */   "offset": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.offset),
/* harmony export */   "popperOffsets": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.popperOffsets),
/* harmony export */   "preventOverflow": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.preventOverflow),
/* harmony export */   "popperGenerator": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_2__.popperGenerator),
/* harmony export */   "detectOverflow": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "createPopperBase": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_2__.createPopper),
/* harmony export */   "createPopper": () => (/* reexport safe */ _popper_js__WEBPACK_IMPORTED_MODULE_4__.createPopper),
/* harmony export */   "createPopperLite": () => (/* reexport safe */ _popper_lite_js__WEBPACK_IMPORTED_MODULE_5__.createPopper)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/index.js */ "./node_modules/@popperjs/core/lib/modifiers/index.js");
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _popper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popper.js */ "./node_modules/@popperjs/core/lib/popper.js");
/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popper-lite.js */ "./node_modules/@popperjs/core/lib/popper-lite.js");

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || !(0,_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__.default)(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || !(0,_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__.default)(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/arrow.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/arrow.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dom-utils/contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");









 // eslint-disable-next-line import/no-unused-modules

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__.default)(state.placement);
  var axis = (0,_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_1__.default)(basePlacement);
  var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_2__.left, _enums_js__WEBPACK_IMPORTED_MODULE_2__.right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = state.modifiersData[name + "#persistent"].padding;
  var arrowRect = (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_3__.default)(arrowElement);
  var minProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_2__.top : _enums_js__WEBPACK_IMPORTED_MODULE_2__.left;
  var maxProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_2__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_2__.right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_4__.default)(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_5__.default)(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element,
      _options$padding = options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (true) {
    if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_6__.isHTMLElement)(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!(0,_dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_7__.default)(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
  state.modifiersData[name + "#persistent"] = {
    padding: (0,_utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_8__.default)(typeof padding !== 'number' ? padding : (0,_utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_9__.default)(padding, _enums_js__WEBPACK_IMPORTED_MODULE_2__.basePlacements))
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapToStyles": () => (/* binding */ mapToStyles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");





 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: Math.round(x * dpr) / dpr || 0,
    y: Math.round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets ? roundOffsetsByDPR(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = _enums_js__WEBPACK_IMPORTED_MODULE_0__.left;
  var sideY = _enums_js__WEBPACK_IMPORTED_MODULE_0__.top;
  var win = window;

  if (adaptive) {
    var offsetParent = (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_1__.default)(popper);

    if (offsetParent === (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__.default)(popper)) {
      offsetParent = (0,_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__.default)(popper);
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

    /*:: offsetParent = (offsetParent: Element); */


    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__.top) {
      sideY = _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom;
      y -= offsetParent.clientHeight - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__.left) {
      sideX = _enums_js__WEBPACK_IMPORTED_MODULE_0__.right;
      x -= offsetParent.clientWidth - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (true) {
    var transitionProperty = (0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__.default)(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_5__.default)(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign(Object.assign({}, state.styles.popper), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign(Object.assign({}, state.styles.arrow), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/flip.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/flip.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getOppositePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getOppositeVariationPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/computeAutoPlacement.js */ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if ((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__.default)(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.auto) {
    return [];
  }

  var oppositePlacement = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__.default)(placement);
  return [(0,_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__.default)(placement), oppositePlacement, (0,_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__.default)(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__.default)(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [(0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__.default)(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__.default)(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.auto ? (0,_utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__.default)(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__.default)(placement);

    var isStartVariation = (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_5__.default)(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.start;
    var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_1__.top, _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_6__.default)(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_1__.right : _enums_js__WEBPACK_IMPORTED_MODULE_1__.left : isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_1__.top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__.default)(mainVariationSide);
    }

    var altVariationSide = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__.default)(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/hide.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/hide.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [_enums_js__WEBPACK_IMPORTED_MODULE_0__.top, _enums_js__WEBPACK_IMPORTED_MODULE_0__.right, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom, _enums_js__WEBPACK_IMPORTED_MODULE_0__.left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__.default)(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__.default)(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyStyles": () => (/* reexport safe */ _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "arrow": () => (/* reexport safe */ _arrow_js__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "computeStyles": () => (/* reexport safe */ _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "eventListeners": () => (/* reexport safe */ _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "flip": () => (/* reexport safe */ _flip_js__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "hide": () => (/* reexport safe */ _hide_js__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "offset": () => (/* reexport safe */ _offset_js__WEBPACK_IMPORTED_MODULE_6__.default),
/* harmony export */   "popperOffsets": () => (/* reexport safe */ _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__.default),
/* harmony export */   "preventOverflow": () => (/* reexport safe */ _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__.default)
/* harmony export */ });
/* harmony import */ var _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony import */ var _arrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow.js */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _flip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flip.js */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _hide_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hide.js */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _offset_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offset.js */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preventOverflow.js */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");










/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/offset.js":
/*!*************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/offset.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "distanceAndSkiddingToXY": () => (/* binding */ distanceAndSkiddingToXY),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");


function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__.default)(placement);
  var invertDistance = [_enums_js__WEBPACK_IMPORTED_MODULE_1__.left, _enums_js__WEBPACK_IMPORTED_MODULE_1__.top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign(Object.assign({}, rects), {}, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [_enums_js__WEBPACK_IMPORTED_MODULE_1__.left, _enums_js__WEBPACK_IMPORTED_MODULE_1__.right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = _enums_js__WEBPACK_IMPORTED_MODULE_1__.placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = (0,_utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getAltAxis.js */ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");











function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_0__.default)(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__.default)(state.placement);
  var variation = (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_2__.default)(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = (0,_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__.default)(basePlacement);
  var altAxis = (0,_utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_4__.default)(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign(Object.assign({}, state.rects), {}, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var mainSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.top : _enums_js__WEBPACK_IMPORTED_MODULE_5__.left;
    var altSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_5__.right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_5__.start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_5__.start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__.default)(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : (0,_utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_7__.default)();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.default)(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_9__.default)(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
    var preventedOffset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.default)(tether ? Math.min(min, tetherMin) : min, offset, tether ? Math.max(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _mainSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.top : _enums_js__WEBPACK_IMPORTED_MODULE_5__.left;

    var _altSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_5__.right;

    var _offset = popperOffsets[altAxis];

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var _preventedOffset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.default)(_min, _offset, _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper-lite.js":
/*!********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper-lite.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPopper": () => (/* binding */ createPopper),
/* harmony export */   "popperGenerator": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_4__.popperGenerator),
/* harmony export */   "defaultModifiers": () => (/* binding */ defaultModifiers),
/* harmony export */   "detectOverflow": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_5__.default)
/* harmony export */ });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");





var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__.default, _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__.default, _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__.default, _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__.default];
var createPopper = /*#__PURE__*/(0,_createPopper_js__WEBPACK_IMPORTED_MODULE_4__.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPopper": () => (/* binding */ createPopper),
/* harmony export */   "popperGenerator": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_9__.popperGenerator),
/* harmony export */   "defaultModifiers": () => (/* binding */ defaultModifiers),
/* harmony export */   "detectOverflow": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_10__.default),
/* harmony export */   "createPopperLite": () => (/* reexport safe */ _popper_lite_js__WEBPACK_IMPORTED_MODULE_11__.createPopper),
/* harmony export */   "applyStyles": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.applyStyles),
/* harmony export */   "arrow": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.arrow),
/* harmony export */   "computeStyles": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.computeStyles),
/* harmony export */   "eventListeners": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.eventListeners),
/* harmony export */   "flip": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.flip),
/* harmony export */   "hide": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.hide),
/* harmony export */   "offset": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.offset),
/* harmony export */   "popperOffsets": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.popperOffsets),
/* harmony export */   "preventOverflow": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.preventOverflow)
/* harmony export */ });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony import */ var _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/offset.js */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifiers/flip.js */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modifiers/preventOverflow.js */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony import */ var _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modifiers/arrow.js */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modifiers/hide.js */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./popper-lite.js */ "./node_modules/@popperjs/core/lib/popper-lite.js");
/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modifiers/index.js */ "./node_modules/@popperjs/core/lib/modifiers/index.js");










var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__.default, _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__.default, _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__.default, _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__.default, _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_4__.default, _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_5__.default, _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_6__.default, _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_7__.default, _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_8__.default];
var createPopper = /*#__PURE__*/(0,_createPopper_js__WEBPACK_IMPORTED_MODULE_9__.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ computeAutoPlacement)
/* harmony export */ });
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");





/*:: type OverflowsMap = { [ComputedPlacement]: number }; */

/*;; type OverflowsMap = { [key in ComputedPlacement]: number }; */
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.placements : _options$allowedAutoP;
  var variation = (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__.default)(placement);
  var placements = variation ? flipVariations ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements : _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements.filter(function (placement) {
    return (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__.default)(placement) === variation;
  }) : _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (true) {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = (0,_detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__.default)(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[(0,_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__.default)(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeOffsets.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ computeOffsets)
/* harmony export */ });
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? (0,_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__.default)(placement) : null;
  var variation = placement ? (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__.default)(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? (0,_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__.default)(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case _enums_js__WEBPACK_IMPORTED_MODULE_2__.start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case _enums_js__WEBPACK_IMPORTED_MODULE_2__.end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/debounce.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/debounce.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ debounce)
/* harmony export */ });
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/detectOverflow.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ detectOverflow)
/* harmony export */ });
/* harmony import */ var _dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getClippingRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _computeOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");
/* harmony import */ var _rectToClientRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _expandToHashMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = (0,_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_1__.default)(typeof padding !== 'number' ? padding : (0,_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_2__.default)(padding, _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements));
  var altContext = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.reference : _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = (0,_dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_3__.default)((0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(element) ? element : element.contextElement || (0,_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__.default)(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = (0,_dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_6__.default)(referenceElement);
  var popperOffsets = (0,_computeOffsets_js__WEBPACK_IMPORTED_MODULE_7__.default)({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = (0,_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_8__.default)(Object.assign(Object.assign({}, popperRect), popperOffsets));
  var elementClientRect = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [_enums_js__WEBPACK_IMPORTED_MODULE_0__.right, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [_enums_js__WEBPACK_IMPORTED_MODULE_0__.top, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ expandToHashMap)
/* harmony export */ });
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/format.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/format.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js":
/*!*************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getAltAxis.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getAltAxis)
/* harmony export */ });
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBasePlacement)
/* harmony export */ });

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getFreshSideObject)
/* harmony export */ });
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMainAxisFromPlacement)
/* harmony export */ });
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOppositePlacement)
/* harmony export */ });
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOppositeVariationPlacement)
/* harmony export */ });
var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getVariation.js":
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getVariation.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getVariation)
/* harmony export */ });
function getVariation(placement) {
  return placement.split('-')[1];
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergeByName.js":
/*!**************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergeByName.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergeByName)
/* harmony export */ });
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign(Object.assign(Object.assign({}, existing), current), {}, {
      options: Object.assign(Object.assign({}, existing.options), current.options),
      data: Object.assign(Object.assign({}, existing.data), current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergePaddingObject)
/* harmony export */ });
/* harmony import */ var _getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");

function mergePaddingObject(paddingObject) {
  return Object.assign(Object.assign({}, (0,_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__.default)()), paddingObject);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/orderModifiers.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ orderModifiers)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return _enums_js__WEBPACK_IMPORTED_MODULE_0__.modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rectToClientRect)
/* harmony export */ });
function rectToClientRect(rect) {
  return Object.assign(Object.assign({}, rect), {}, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/uniqueBy.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/uniqueBy.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ uniqueBy)
/* harmony export */ });
function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/validateModifiers.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/validateModifiers.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateModifiers)
/* harmony export */ });
/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format.js */ "./node_modules/@popperjs/core/lib/utils/format.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");


var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__.default)(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__.default)(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

        case 'phase':
          if (_enums_js__WEBPACK_IMPORTED_MODULE_1__.modifierPhases.indexOf(modifier.phase) < 0) {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__.default)(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enums_js__WEBPACK_IMPORTED_MODULE_1__.modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__.default)(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__.default)(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__.default)(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/within.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/within.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ within)
/* harmony export */ });
function within(min, value, max) {
  return Math.max(min, Math.min(value, max));
}

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! owl.carousel */ "./node_modules/owl.carousel/dist/owl.carousel.js");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

__webpack_require__(/*! ./lib/jquery.mousewheel */ "./resources/js/lib/jquery.mousewheel.js");

__webpack_require__(/*! ./other */ "./resources/js/other.js");

 // window.Vue = require('vue');

(function () {
  window.addEventListener('DOMContentLoaded', onDOMReady);
  if (document.readyState === 'interactive' || document.readyState === 'complete') onDOMReady();

  function onDOMReady() {
    var loopingImageWrappers = document.querySelectorAll('.looping-images-wrapper');

    for (var i = 0; i < loopingImageWrappers.length; i++) {
      startLooping(loopingImageWrappers[i]);
    }
  }

  function startLooping(wrapper) {
    var currentImageIndex = 0;
    var imageElements = wrapper.querySelectorAll('img');
    var loadedImageElements = [];

    var _loop = function _loop(i) {
      var image = imageElements[i];

      if (image.complete) {
        loadedImageElements.push(image);
      } else {
        image.addEventListener('load', function () {
          loadedImageElements.push(image);
        });
      }
    };

    for (var i = 0; i < imageElements.length; i++) {
      _loop(i);
    }

    setInterval(function () {
      if (currentImageIndex + 1 <= loadedImageElements.length) {
        for (var _i = 0; _i < loadedImageElements.length; _i++) {
          var image = loadedImageElements[_i];

          if (_i === currentImageIndex) {
            image.classList.add('reveal');
            image.classList.remove('hide');
          } else {
            image.classList.remove('reveal');
            image.classList.add('hide');
          }
        }

        if (currentImageIndex < imageElements.length - 1) {
          currentImageIndex++;
        } else {
          currentImageIndex = 0;
        }
      }
    }, 4000);
  }
})();

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */
try {
  // window.Popper = require('popper.js').default;
  window.$ = __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); // window.Popper = require('popper.js/dist/umd/popper.js').default;

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
// window.axios = require('axios');
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/js/lib/jquery.mousewheel.js":
/*!***********************************************!*\
  !*** ./resources/js/lib/jquery.mousewheel.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * jQuery Mousewheel 3.1.13
 * Copyright OpenJS Foundation and other contributors
 */
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  var toFix = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      toBind = "onwheel" in window.document || window.document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      slice = Array.prototype.slice,
      nullLowestDeltaTimeout,
      lowestDelta;

  if ($.event.fixHooks) {
    for (var i = toFix.length; i;) {
      $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
    }
  }

  var special = $.event.special.mousewheel = {
    version: "3.1.12",
    setup: function setup() {
      if (this.addEventListener) {
        for (var i = toBind.length; i;) {
          this.addEventListener(toBind[--i], handler, false);
        }
      } else {
        this.onmousewheel = handler;
      } // Store the line height and page height for this particular element


      $.data(this, "mousewheel-line-height", special.getLineHeight(this));
      $.data(this, "mousewheel-page-height", special.getPageHeight(this));
    },
    teardown: function teardown() {
      if (this.removeEventListener) {
        for (var i = toBind.length; i;) {
          this.removeEventListener(toBind[--i], handler, false);
        }
      } else {
        this.onmousewheel = null;
      } // Clean up the data we added to the element


      $.removeData(this, "mousewheel-line-height");
      $.removeData(this, "mousewheel-page-height");
    },
    getLineHeight: function getLineHeight(elem) {
      var $elem = $(elem),
          $parent = $elem["offsetParent" in $.fn ? "offsetParent" : "parent"]();

      if (!$parent.length) {
        $parent = $("body");
      }

      return parseInt($parent.css("fontSize"), 10) || parseInt($elem.css("fontSize"), 10) || 16;
    },
    getPageHeight: function getPageHeight(elem) {
      return $(elem).height();
    },
    settings: {
      adjustOldDeltas: true,
      // see shouldAdjustOldDeltas() below
      normalizeOffset: true // calls getBoundingClientRect for each event

    }
  };
  $.fn.extend({
    mousewheel: function mousewheel(fn) {
      return fn ? this.on("mousewheel", fn) : this.trigger("mousewheel");
    },
    unmousewheel: function unmousewheel(fn) {
      return this.off("mousewheel", fn);
    }
  });

  function handler(event) {
    var orgEvent = event || window.event,
        args = slice.call(arguments, 1),
        delta = 0,
        deltaX = 0,
        deltaY = 0,
        absDelta = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel"; // Old school scrollwheel delta

    if ("detail" in orgEvent) {
      deltaY = orgEvent.detail * -1;
    }

    if ("wheelDelta" in orgEvent) {
      deltaY = orgEvent.wheelDelta;
    }

    if ("wheelDeltaY" in orgEvent) {
      deltaY = orgEvent.wheelDeltaY;
    }

    if ("wheelDeltaX" in orgEvent) {
      deltaX = orgEvent.wheelDeltaX * -1;
    } // Firefox < 17 horizontal scrolling related to DOMMouseScroll event


    if ("axis" in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
      deltaX = deltaY * -1;
      deltaY = 0;
    } // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy


    delta = deltaY === 0 ? deltaX : deltaY; // New school wheel delta (wheel event)

    if ("deltaY" in orgEvent) {
      deltaY = orgEvent.deltaY * -1;
      delta = deltaY;
    }

    if ("deltaX" in orgEvent) {
      deltaX = orgEvent.deltaX;

      if (deltaY === 0) {
        delta = deltaX * -1;
      }
    } // No change actually happened, no reason to go any further


    if (deltaY === 0 && deltaX === 0) {
      return;
    } // Need to convert lines and pages to pixels if we aren't already in pixels
    // There are three delta modes:
    //   * deltaMode 0 is by pixels, nothing to do
    //   * deltaMode 1 is by lines
    //   * deltaMode 2 is by pages


    if (orgEvent.deltaMode === 1) {
      var lineHeight = $.data(this, "mousewheel-line-height");
      delta *= lineHeight;
      deltaY *= lineHeight;
      deltaX *= lineHeight;
    } else if (orgEvent.deltaMode === 2) {
      var pageHeight = $.data(this, "mousewheel-page-height");
      delta *= pageHeight;
      deltaY *= pageHeight;
      deltaX *= pageHeight;
    } // Store lowest absolute delta to normalize the delta values


    absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));

    if (!lowestDelta || absDelta < lowestDelta) {
      lowestDelta = absDelta; // Adjust older deltas if necessary

      if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
        lowestDelta /= 40;
      }
    } // Adjust older deltas if necessary


    if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
      // Divide all the things by 40!
      delta /= 40;
      deltaX /= 40;
      deltaY /= 40;
    } // Get a whole, normalized value for the deltas


    delta = Math[delta >= 1 ? "floor" : "ceil"](delta / lowestDelta);
    deltaX = Math[deltaX >= 1 ? "floor" : "ceil"](deltaX / lowestDelta);
    deltaY = Math[deltaY >= 1 ? "floor" : "ceil"](deltaY / lowestDelta); // Normalise offsetX and offsetY properties

    if (special.settings.normalizeOffset && this.getBoundingClientRect) {
      var boundingRect = this.getBoundingClientRect();
      event.offsetX = event.clientX - boundingRect.left;
      event.offsetY = event.clientY - boundingRect.top;
    } // Add information to the event object


    event.deltaX = deltaX;
    event.deltaY = deltaY;
    event.deltaFactor = lowestDelta; // Go ahead and set deltaMode to 0 since we converted to pixels
    // Although this is a little odd since we overwrite the deltaX/Y
    // properties with normalized deltas.

    event.deltaMode = 0; // Add event and delta to the front of the arguments

    args.unshift(event, delta, deltaX, deltaY); // Clearout lowestDelta after sometime to better
    // handle multiple device types that give different
    // a different lowestDelta
    // Ex: trackpad = 3 and mouse wheel = 120

    if (nullLowestDeltaTimeout) {
      window.clearTimeout(nullLowestDeltaTimeout);
    }

    nullLowestDeltaTimeout = window.setTimeout(nullLowestDelta, 200);
    return ($.event.dispatch || $.event.handle).apply(this, args);
  }

  function nullLowestDelta() {
    lowestDelta = null;
  }

  function shouldAdjustOldDeltas(orgEvent, absDelta) {
    // If this is an older event and the delta is divisable by 120,
    // then we are assuming that the browser is treating this as an
    // older mouse wheel event and that we should divide the deltas
    // by 40 to try and get a more usable deltaFactor.
    // Side note, this actually impacts the reported scroll distance
    // in older browsers and can cause scrolling to be slower than native.
    // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
    return special.settings.adjustOldDeltas && orgEvent.type === "mousewheel" && absDelta % 120 === 0;
  }
});

/***/ }),

/***/ "./resources/js/other.js":
/*!*******************************!*\
  !*** ./resources/js/other.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * falgun: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var falgun = falgun || [];
 *   falgun.push(readyFunction);
 */
!function (t) {
  var e = {};

  function n(r) {
    if (e[r]) return e[r].exports;
    var i = e[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
  }

  n.m = t, n.c = e, n.d = function (t, e, r) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var i in t) {
      n.d(r, i, function (e) {
        return t[e];
      }.bind(null, i));
    }
    return r;
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return n.d(e, "a", e), e;
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.p = "", n(n.s = 120);
}([function (t, e) {
  t.exports = function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };
}, function (t, e) {
  var n = Array.isArray;
  t.exports = n;
}, function (t, e, n) {
  "use strict";

  var r = n(14);
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var i = {
    IX2EngineActionTypes: !0,
    IX2EngineConstants: !0
  };
  e.IX2EngineConstants = e.IX2EngineActionTypes = void 0;
  var o = n(171);
  Object.keys(o).forEach(function (t) {
    "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: function get() {
        return o[t];
      }
    }));
  });
  var a = n(172);
  Object.keys(a).forEach(function (t) {
    "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: function get() {
        return a[t];
      }
    }));
  });
  var u = n(173);
  Object.keys(u).forEach(function (t) {
    "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: function get() {
        return u[t];
      }
    }));
  });
  var c = r(n(174));
  e.IX2EngineActionTypes = c;
  var s = r(n(175));
  e.IX2EngineConstants = s;
}, function (t, e, n) {
  (function (e) {
    var n = "object",
        r = function r(t) {
      return t && t.Math == Math && t;
    };

    t.exports = r((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) == n && globalThis) || r((typeof window === "undefined" ? "undefined" : _typeof(window)) == n && window) || r((typeof self === "undefined" ? "undefined" : _typeof(self)) == n && self) || r(_typeof(e) == n && e) || Function("return this")();
  }).call(this, n(23));
}, function (t, e, n) {
  "use strict";

  var r = {},
      i = {},
      o = [],
      a = window.falgun || [],
      u = __webpack_provided_window_dot_jQuery,
      c = u(window),
      s = u(document),
      f = u.isFunction,
      l = r._ = n(123),
      d = r.tram = n(65) && u.tram,
      p = !1,
      v = !1;

  function h(t) {
    r.env() && (f(t.design) && c.on("__wf_design", t.design), f(t.preview) && c.on("__wf_preview", t.preview)), f(t.destroy) && c.on("__wf_destroy", t.destroy), t.ready && f(t.ready) && function (t) {
      if (p) return void t.ready();
      if (l.contains(o, t.ready)) return;
      o.push(t.ready);
    }(t);
  }

  function E(t) {
    f(t.design) && c.off("__wf_design", t.design), f(t.preview) && c.off("__wf_preview", t.preview), f(t.destroy) && c.off("__wf_destroy", t.destroy), t.ready && f(t.ready) && function (t) {
      o = l.filter(o, function (e) {
        return e !== t.ready;
      });
    }(t);
  }

  d.config.hideBackface = !1, d.config.keepInherited = !0, r.define = function (t, e, n) {
    i[t] && E(i[t]);
    var r = i[t] = e(u, l, n) || {};
    return h(r), r;
  }, r.require = function (t) {
    return i[t];
  }, r.push = function (t) {
    p ? f(t) && t() : a.push(t);
  }, r.env = function (t) {
    var e = window.__wf_design,
        n = void 0 !== e;
    return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window.falgunEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : n;
  };

  var g,
      _ = navigator.userAgent.toLowerCase(),
      y = r.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
      m = r.env.chrome = /chrome/.test(_) && /Google/.test(navigator.vendor) && parseInt(_.match(/chrome\/(\d+)\./)[1], 10),
      I = r.env.ios = /(ipod|iphone|ipad)/.test(_);

  r.env.safari = /safari/.test(_) && !m && !I, y && s.on("touchstart mousedown", function (t) {
    g = t.target;
  }), r.validClick = y ? function (t) {
    return t === g || u.contains(t, g);
  } : function () {
    return !0;
  };
  var T,
      b = "resize.falgun orientationchange.falgun load.falgun";

  function O(t, e) {
    var n = [],
        r = {};
    return r.up = l.throttle(function (t) {
      l.each(n, function (e) {
        e(t);
      });
    }), t && e && t.on(e, r.up), r.on = function (t) {
      "function" == typeof t && (l.contains(n, t) || n.push(t));
    }, r.off = function (t) {
      n = arguments.length ? l.filter(n, function (e) {
        return e !== t;
      }) : [];
    }, r;
  }

  function w(t) {
    f(t) && t();
  }

  function A() {
    T && (T.reject(), c.off("load", T.resolve)), T = new u.Deferred(), c.on("load", T.resolve);
  }

  r.resize = O(c, b), r.scroll = O(c, "scroll.falgun resize.falgun orientationchange.falgun load.falgun"), r.redraw = O(), r.location = function (t) {
    window.location = t;
  }, r.env() && (r.location = function () {}), r.ready = function () {
    p = !0, v ? (v = !1, l.each(i, h)) : l.each(o, w), l.each(a, w), r.resize.up();
  }, r.load = function (t) {
    T.then(t);
  }, r.destroy = function (t) {
    t = t || {}, v = !0, c.triggerHandler("__wf_destroy"), null != t.domready && (p = t.domready), l.each(i, E), r.resize.off(), r.scroll.off(), r.redraw.off(), o = [], a = [], "pending" === T.state() && A();
  }, u(r.ready), A(), t.exports = window.falgun = r;
}, function (t, e, n) {
  var r = n(89),
      i = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
      o = r || i || Function("return this")();
  t.exports = o;
}, function (t, e) {
  t.exports = function (t) {
    var e = _typeof(t);

    return null != t && ("object" == e || "function" == e);
  };
}, function (t, e, n) {
  var r = n(178),
      i = n(232),
      o = n(59),
      a = n(1),
      u = n(241);

  t.exports = function (t) {
    return "function" == typeof t ? t : null == t ? o : "object" == _typeof(t) ? a(t) ? i(t[0], t[1]) : r(t) : u(t);
  };
}, function (t, e, n) {
  var r = n(190),
      i = n(195);

  t.exports = function (t, e) {
    var n = i(t, e);
    return r(n) ? n : void 0;
  };
}, function (t, e) {
  t.exports = function (t) {
    return null != t && "object" == _typeof(t);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(14);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.IX2VanillaUtils = e.IX2VanillaPlugins = e.IX2ElementsReducer = e.IX2EasingUtils = e.IX2Easings = e.IX2BrowserSupport = void 0;
  var i = r(n(44));
  e.IX2BrowserSupport = i;
  var o = r(n(106));
  e.IX2Easings = o;
  var a = r(n(108));
  e.IX2EasingUtils = a;
  var u = r(n(248));
  e.IX2ElementsReducer = u;
  var c = r(n(110));
  e.IX2VanillaPlugins = c;
  var s = r(n(250));
  e.IX2VanillaUtils = s;
}, function (t, e, n) {
  var r = n(20),
      i = n(191),
      o = n(192),
      a = "[object Null]",
      u = "[object Undefined]",
      c = r ? r.toStringTag : void 0;

  t.exports = function (t) {
    return null == t ? void 0 === t ? u : a : c && c in Object(t) ? i(t) : o(t);
  };
}, function (t, e, n) {
  var r = n(88),
      i = n(52);

  t.exports = function (t) {
    return null != t && i(t.length) && !r(t);
  };
}, function (t, e) {
  function n(t) {
    return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }

  function r(e) {
    return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = r = function r(t) {
      return n(t);
    } : t.exports = r = function r(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t);
    }, r(e);
  }

  t.exports = r;
}, function (t, e) {
  t.exports = function (t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var n in t) {
      if (Object.prototype.hasOwnProperty.call(t, n)) {
        var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
        r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n];
      }
    }
    return e["default"] = t, e;
  };
}, function (t, e, n) {
  var r = n(16);
  t.exports = !r(function () {
    return 7 != Object.defineProperty({}, "a", {
      get: function get() {
        return 7;
      }
    }).a;
  });
}, function (t, e) {
  t.exports = function (t) {
    try {
      return !!t();
    } catch (t) {
      return !0;
    }
  };
}, function (t, e) {
  var n = {}.hasOwnProperty;

  t.exports = function (t, e) {
    return n.call(t, e);
  };
}, function (t, e, n) {
  var r = n(15),
      i = n(38),
      o = n(67);
  t.exports = r ? function (t, e, n) {
    return i.f(t, e, o(1, n));
  } : function (t, e, n) {
    return t[e] = n, t;
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
  };
  e.clone = c, e.addLast = l, e.addFirst = d, e.removeLast = p, e.removeFirst = v, e.insert = h, e.removeAt = E, e.replaceAt = g, e.getIn = _, e.set = y, e.setIn = m, e.update = I, e.updateIn = T, e.merge = b, e.mergeDeep = O, e.mergeIn = w, e.omit = A, e.addDefaults = S;
  /*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   */

  var i = "INVALID_ARGS";

  function o(t) {
    throw new Error(t);
  }

  function a(t) {
    var e = Object.keys(t);
    return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
  }

  var u = {}.hasOwnProperty;

  function c(t) {
    if (Array.isArray(t)) return t.slice();

    for (var e = a(t), n = {}, r = 0; r < e.length; r++) {
      var i = e[r];
      n[i] = t[i];
    }

    return n;
  }

  function s(t, e, n) {
    var r = n;
    null == r && o(i);

    for (var u = !1, l = arguments.length, d = Array(l > 3 ? l - 3 : 0), p = 3; p < l; p++) {
      d[p - 3] = arguments[p];
    }

    for (var v = 0; v < d.length; v++) {
      var h = d[v];

      if (null != h) {
        var E = a(h);
        if (E.length) for (var g = 0; g <= E.length; g++) {
          var _ = E[g];

          if (!t || void 0 === r[_]) {
            var y = h[_];
            e && f(r[_]) && f(y) && (y = s(t, e, r[_], y)), void 0 !== y && y !== r[_] && (u || (u = !0, r = c(r)), r[_] = y);
          }
        }
      }
    }

    return r;
  }

  function f(t) {
    var e = void 0 === t ? "undefined" : r(t);
    return null != t && ("object" === e || "function" === e);
  }

  function l(t, e) {
    return Array.isArray(e) ? t.concat(e) : t.concat([e]);
  }

  function d(t, e) {
    return Array.isArray(e) ? e.concat(t) : [e].concat(t);
  }

  function p(t) {
    return t.length ? t.slice(0, t.length - 1) : t;
  }

  function v(t) {
    return t.length ? t.slice(1) : t;
  }

  function h(t, e, n) {
    return t.slice(0, e).concat(Array.isArray(n) ? n : [n]).concat(t.slice(e));
  }

  function E(t, e) {
    return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1));
  }

  function g(t, e, n) {
    if (t[e] === n) return t;

    for (var r = t.length, i = Array(r), o = 0; o < r; o++) {
      i[o] = t[o];
    }

    return i[e] = n, i;
  }

  function _(t, e) {
    if (!Array.isArray(e) && o(i), null != t) {
      for (var n = t, r = 0; r < e.length; r++) {
        var a = e[r];
        if (void 0 === (n = null != n ? n[a] : void 0)) return n;
      }

      return n;
    }
  }

  function y(t, e, n) {
    var r = null == t ? "number" == typeof e ? [] : {} : t;
    if (r[e] === n) return r;
    var i = c(r);
    return i[e] = n, i;
  }

  function m(t, e, n) {
    return e.length ? function t(e, n, r, i) {
      var o = void 0,
          a = n[i];
      o = i === n.length - 1 ? r : t(f(e) && f(e[a]) ? e[a] : "number" == typeof n[i + 1] ? [] : {}, n, r, i + 1);
      return y(e, a, o);
    }(t, e, n, 0) : n;
  }

  function I(t, e, n) {
    return y(t, e, n(null == t ? void 0 : t[e]));
  }

  function T(t, e, n) {
    return m(t, e, n(_(t, e)));
  }

  function b(t, e, n, r, i, o) {
    for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) {
      u[c - 6] = arguments[c];
    }

    return u.length ? s.call.apply(s, [null, !1, !1, t, e, n, r, i, o].concat(u)) : s(!1, !1, t, e, n, r, i, o);
  }

  function O(t, e, n, r, i, o) {
    for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) {
      u[c - 6] = arguments[c];
    }

    return u.length ? s.call.apply(s, [null, !1, !0, t, e, n, r, i, o].concat(u)) : s(!1, !0, t, e, n, r, i, o);
  }

  function w(t, e, n, r, i, o, a) {
    var u = _(t, e);

    null == u && (u = {});

    for (var c = arguments.length, f = Array(c > 7 ? c - 7 : 0), l = 7; l < c; l++) {
      f[l - 7] = arguments[l];
    }

    return m(t, e, f.length ? s.call.apply(s, [null, !1, !1, u, n, r, i, o, a].concat(f)) : s(!1, !1, u, n, r, i, o, a));
  }

  function A(t, e) {
    for (var n = Array.isArray(e) ? e : [e], r = !1, i = 0; i < n.length; i++) {
      if (u.call(t, n[i])) {
        r = !0;
        break;
      }
    }

    if (!r) return t;

    for (var o = {}, c = a(t), s = 0; s < c.length; s++) {
      var f = c[s];
      n.indexOf(f) >= 0 || (o[f] = t[f]);
    }

    return o;
  }

  function S(t, e, n, r, i, o) {
    for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) {
      u[c - 6] = arguments[c];
    }

    return u.length ? s.call.apply(s, [null, !0, !1, t, e, n, r, i, o].concat(u)) : s(!0, !1, t, e, n, r, i, o);
  }

  var x = {
    clone: c,
    addLast: l,
    addFirst: d,
    removeLast: p,
    removeFirst: v,
    insert: h,
    removeAt: E,
    replaceAt: g,
    getIn: _,
    set: y,
    setIn: m,
    update: I,
    updateIn: T,
    merge: b,
    mergeDeep: O,
    mergeIn: w,
    omit: A,
    addDefaults: S
  };
  e["default"] = x;
}, function (t, e, n) {
  var r = n(5).Symbol;
  t.exports = r;
}, function (t, e, n) {
  var r = n(36),
      i = 1 / 0;

  t.exports = function (t) {
    if ("string" == typeof t || r(t)) return t;
    var e = t + "";
    return "0" == e && 1 / t == -i ? "-0" : e;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(125);

  function i(t, e) {
    var n = document.createEvent("CustomEvent");
    n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n);
  }

  var o = __webpack_provided_window_dot_jQuery,
      a = {},
      u = {
    reset: function reset(t, e) {
      r.triggers.reset(t, e);
    },
    intro: function intro(t, e) {
      r.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE");
    },
    outro: function outro(t, e) {
      r.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE");
    }
  };
  a.triggers = {}, a.types = {
    INTRO: "w-ix-intro.w-ix",
    OUTRO: "w-ix-outro.w-ix"
  }, o.extend(a.triggers, u), t.exports = a;
}, function (t, e) {
  var n;

  n = function () {
    return this;
  }();

  try {
    n = n || new Function("return this")();
  } catch (t) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
  }

  t.exports = n;
}, function (t, e) {
  t.exports = function (t) {
    return "object" == _typeof(t) ? null !== t : "function" == typeof t;
  };
}, function (t, e, n) {
  var r = n(24);

  t.exports = function (t) {
    if (!r(t)) throw TypeError(String(t) + " is not an object");
    return t;
  };
}, function (t, e, n) {
  var r = n(3),
      i = n(39),
      o = n(137),
      a = r["__core-js_shared__"] || i("__core-js_shared__", {});
  (t.exports = function (t, e) {
    return a[t] || (a[t] = void 0 !== e ? e : {});
  })("versions", []).push({
    version: "3.1.3",
    mode: o ? "pure" : "global",
    copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)"
  });
}, function (t, e) {
  t.exports = function (t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t;
  };
}, function (t, e) {
  function n() {
    return t.exports = n = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];

        for (var r in n) {
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
      }

      return t;
    }, n.apply(this, arguments);
  }

  t.exports = n;
}, function (t, e, n) {
  var r = n(180),
      i = n(181),
      o = n(182),
      a = n(183),
      u = n(184);

  function c(t) {
    var e = -1,
        n = null == t ? 0 : t.length;

    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }

  c.prototype.clear = r, c.prototype["delete"] = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c;
}, function (t, e, n) {
  var r = n(45);

  t.exports = function (t, e) {
    for (var n = t.length; n--;) {
      if (r(t[n][0], e)) return n;
    }

    return -1;
  };
}, function (t, e, n) {
  var r = n(8)(Object, "create");
  t.exports = r;
}, function (t, e, n) {
  var r = n(204);

  t.exports = function (t, e) {
    var n = t.__data__;
    return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
  };
}, function (t, e, n) {
  var r = n(96),
      i = n(53),
      o = n(12);

  t.exports = function (t) {
    return o(t) ? r(t) : i(t);
  };
}, function (t, e, n) {
  var r = n(222),
      i = n(9),
      o = Object.prototype,
      a = o.hasOwnProperty,
      u = o.propertyIsEnumerable,
      c = r(function () {
    return arguments;
  }()) ? r : function (t) {
    return i(t) && a.call(t, "callee") && !u.call(t, "callee");
  };
  t.exports = c;
}, function (t, e, n) {
  var r = n(1),
      i = n(58),
      o = n(233),
      a = n(236);

  t.exports = function (t, e) {
    return r(t) ? t : i(t, e) ? [t] : o(a(t));
  };
}, function (t, e, n) {
  var r = n(11),
      i = n(9),
      o = "[object Symbol]";

  t.exports = function (t) {
    return "symbol" == _typeof(t) || i(t) && r(t) == o;
  };
}, function (t, e, n) {
  var r = n(133),
      i = n(135);

  t.exports = function (t) {
    return r(i(t));
  };
}, function (t, e, n) {
  var r = n(15),
      i = n(69),
      o = n(25),
      a = n(68),
      u = Object.defineProperty;
  e.f = r ? u : function (t, e, n) {
    if (o(t), e = a(e, !0), o(n), i) try {
      return u(t, e, n);
    } catch (t) {}
    if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
    return "value" in n && (t[e] = n.value), t;
  };
}, function (t, e, n) {
  var r = n(3),
      i = n(18);

  t.exports = function (t, e) {
    try {
      i(r, t, e);
    } catch (n) {
      r[t] = e;
    }

    return e;
  };
}, function (t, e) {
  t.exports = {};
}, function (t, e) {
  t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
}, function (t, e, n) {
  "use strict";

  n.r(e), n.d(e, "ActionTypes", function () {
    return o;
  }), n.d(e, "default", function () {
    return a;
  });
  var r = n(79),
      i = n(166),
      o = {
    INIT: "@@redux/INIT"
  };

  function a(t, e, n) {
    var u;

    if ("function" == typeof e && void 0 === n && (n = e, e = void 0), void 0 !== n) {
      if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
      return n(a)(t, e);
    }

    if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
    var c = t,
        s = e,
        f = [],
        l = f,
        d = !1;

    function p() {
      l === f && (l = f.slice());
    }

    function v() {
      return s;
    }

    function h(t) {
      if ("function" != typeof t) throw new Error("Expected listener to be a function.");
      var e = !0;
      return p(), l.push(t), function () {
        if (e) {
          e = !1, p();
          var n = l.indexOf(t);
          l.splice(n, 1);
        }
      };
    }

    function E(t) {
      if (!Object(r["default"])(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
      if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
      if (d) throw new Error("Reducers may not dispatch actions.");

      try {
        d = !0, s = c(s, t);
      } finally {
        d = !1;
      }

      for (var e = f = l, n = 0; n < e.length; n++) {
        e[n]();
      }

      return t;
    }

    return E({
      type: o.INIT
    }), (u = {
      dispatch: E,
      subscribe: h,
      getState: v,
      replaceReducer: function replaceReducer(t) {
        if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
        c = t, E({
          type: o.INIT
        });
      }
    })[i["default"]] = function () {
      var t,
          e = h;
      return (t = {
        subscribe: function subscribe(t) {
          if ("object" != _typeof(t)) throw new TypeError("Expected the observer to be an object.");

          function n() {
            t.next && t.next(v());
          }

          return n(), {
            unsubscribe: e(n)
          };
        }
      })[i["default"]] = function () {
        return this;
      }, t;
    }, u;
  }
}, function (t, e, n) {
  "use strict";

  function r() {
    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) {
      e[n] = arguments[n];
    }

    if (0 === e.length) return function (t) {
      return t;
    };
    if (1 === e.length) return e[0];
    var r = e[e.length - 1],
        i = e.slice(0, -1);
    return function () {
      return i.reduceRight(function (t, e) {
        return e(t);
      }, r.apply(void 0, arguments));
    };
  }

  n.r(e), n.d(e, "default", function () {
    return r;
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.TRANSFORM_STYLE_PREFIXED = e.TRANSFORM_PREFIXED = e.FLEX_PREFIXED = e.ELEMENT_MATCHES = e.withBrowser = e.IS_BROWSER_ENV = void 0;
  var i = r(n(85)),
      o = "undefined" != typeof window;
  e.IS_BROWSER_ENV = o;

  var a = function a(t, e) {
    return o ? t() : e;
  };

  e.withBrowser = a;
  var u = a(function () {
    return (0, i["default"])(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function (t) {
      return t in Element.prototype;
    });
  });
  e.ELEMENT_MATCHES = u;
  var c = a(function () {
    var t = document.createElement("i"),
        e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];

    try {
      for (var n = e.length, r = 0; r < n; r++) {
        var i = e[r];
        if (t.style.display = i, t.style.display === i) return i;
      }

      return "";
    } catch (t) {
      return "";
    }
  }, "flex");
  e.FLEX_PREFIXED = c;
  var s = a(function () {
    var t = document.createElement("i");
    if (null == t.style.transform) for (var e = ["Webkit", "Moz", "ms"], n = e.length, r = 0; r < n; r++) {
      var i = e[r] + "Transform";
      if (void 0 !== t.style[i]) return i;
    }
    return "transform";
  }, "transform");
  e.TRANSFORM_PREFIXED = s;
  var f = s.split("transform")[0],
      l = f ? f + "TransformStyle" : "transformStyle";
  e.TRANSFORM_STYLE_PREFIXED = l;
}, function (t, e) {
  t.exports = function (t, e) {
    return t === e || t != t && e != e;
  };
}, function (t, e, n) {
  var r = n(8)(n(5), "Map");
  t.exports = r;
}, function (t, e, n) {
  var r = n(196),
      i = n(203),
      o = n(205),
      a = n(206),
      u = n(207);

  function c(t) {
    var e = -1,
        n = null == t ? 0 : t.length;

    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }

  c.prototype.clear = r, c.prototype["delete"] = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c;
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = e.length, i = t.length; ++n < r;) {
      t[i + n] = e[n];
    }

    return t;
  };
}, function (t, e, n) {
  (function (t) {
    var r = n(5),
        i = n(223),
        o = e && !e.nodeType && e,
        a = o && "object" == _typeof(t) && t && !t.nodeType && t,
        u = a && a.exports === o ? r.Buffer : void 0,
        c = (u ? u.isBuffer : void 0) || i;
    t.exports = c;
  }).call(this, n(97)(t));
}, function (t, e) {
  var n = 9007199254740991,
      r = /^(?:0|[1-9]\d*)$/;

  t.exports = function (t, e) {
    var i = _typeof(t);

    return !!(e = null == e ? n : e) && ("number" == i || "symbol" != i && r.test(t)) && t > -1 && t % 1 == 0 && t < e;
  };
}, function (t, e, n) {
  var r = n(224),
      i = n(225),
      o = n(226),
      a = o && o.isTypedArray,
      u = a ? i(a) : r;
  t.exports = u;
}, function (t, e) {
  var n = 9007199254740991;

  t.exports = function (t) {
    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n;
  };
}, function (t, e, n) {
  var r = n(54),
      i = n(227),
      o = Object.prototype.hasOwnProperty;

  t.exports = function (t) {
    if (!r(t)) return i(t);
    var e = [];

    for (var n in Object(t)) {
      o.call(t, n) && "constructor" != n && e.push(n);
    }

    return e;
  };
}, function (t, e) {
  var n = Object.prototype;

  t.exports = function (t) {
    var e = t && t.constructor;
    return t === ("function" == typeof e && e.prototype || n);
  };
}, function (t, e, n) {
  var r = n(228),
      i = n(46),
      o = n(229),
      a = n(230),
      u = n(99),
      c = n(11),
      s = n(90),
      f = s(r),
      l = s(i),
      d = s(o),
      p = s(a),
      v = s(u),
      h = c;
  (r && "[object DataView]" != h(new r(new ArrayBuffer(1))) || i && "[object Map]" != h(new i()) || o && "[object Promise]" != h(o.resolve()) || a && "[object Set]" != h(new a()) || u && "[object WeakMap]" != h(new u())) && (h = function h(t) {
    var e = c(t),
        n = "[object Object]" == e ? t.constructor : void 0,
        r = n ? s(n) : "";
    if (r) switch (r) {
      case f:
        return "[object DataView]";

      case l:
        return "[object Map]";

      case d:
        return "[object Promise]";

      case p:
        return "[object Set]";

      case v:
        return "[object WeakMap]";
    }
    return e;
  }), t.exports = h;
}, function (t, e, n) {
  var r = n(57);

  t.exports = function (t, e, n) {
    var i = null == t ? void 0 : r(t, e);
    return void 0 === i ? n : i;
  };
}, function (t, e, n) {
  var r = n(35),
      i = n(21);

  t.exports = function (t, e) {
    for (var n = 0, o = (e = r(e, t)).length; null != t && n < o;) {
      t = t[i(e[n++])];
    }

    return n && n == o ? t : void 0;
  };
}, function (t, e, n) {
  var r = n(1),
      i = n(36),
      o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      a = /^\w*$/;

  t.exports = function (t, e) {
    if (r(t)) return !1;

    var n = _typeof(t);

    return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || a.test(t) || !o.test(t) || null != e && t in Object(e);
  };
}, function (t, e) {
  t.exports = function (t) {
    return t;
  };
}, function (t, e, n) {
  var r = n(6),
      i = n(36),
      o = NaN,
      a = /^\s+|\s+$/g,
      u = /^[-+]0x[0-9a-f]+$/i,
      c = /^0b[01]+$/i,
      s = /^0o[0-7]+$/i,
      f = parseInt;

  t.exports = function (t) {
    if ("number" == typeof t) return t;
    if (i(t)) return o;

    if (r(t)) {
      var e = "function" == typeof t.valueOf ? t.valueOf() : t;
      t = r(e) ? e + "" : e;
    }

    if ("string" != typeof t) return 0 === t ? t : +t;
    t = t.replace(a, "");
    var n = c.test(t);
    return n || s.test(t) ? f(t.slice(2), n ? 2 : 8) : u.test(t) ? o : +t;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.mediaQueriesDefined = e.viewportWidthChanged = e.actionListPlaybackChanged = e.elementStateChanged = e.instanceRemoved = e.instanceStarted = e.instanceAdded = e.parameterChanged = e.animationFrameChanged = e.eventStateChanged = e.testFrameRendered = e.eventListenerAdded = e.clearRequested = e.stopRequested = e.playbackRequested = e.previewRequested = e.sessionStopped = e.sessionStarted = e.sessionInitialized = e.rawDataImported = void 0;
  var i = r(n(28)),
      o = n(2),
      a = n(10),
      u = o.IX2EngineActionTypes,
      c = u.IX2_RAW_DATA_IMPORTED,
      s = u.IX2_SESSION_INITIALIZED,
      f = u.IX2_SESSION_STARTED,
      l = u.IX2_SESSION_STOPPED,
      d = u.IX2_PREVIEW_REQUESTED,
      p = u.IX2_PLAYBACK_REQUESTED,
      v = u.IX2_STOP_REQUESTED,
      h = u.IX2_CLEAR_REQUESTED,
      E = u.IX2_EVENT_LISTENER_ADDED,
      g = u.IX2_TEST_FRAME_RENDERED,
      _ = u.IX2_EVENT_STATE_CHANGED,
      y = u.IX2_ANIMATION_FRAME_CHANGED,
      m = u.IX2_PARAMETER_CHANGED,
      I = u.IX2_INSTANCE_ADDED,
      T = u.IX2_INSTANCE_STARTED,
      b = u.IX2_INSTANCE_REMOVED,
      O = u.IX2_ELEMENT_STATE_CHANGED,
      w = u.IX2_ACTION_LIST_PLAYBACK_CHANGED,
      A = u.IX2_VIEWPORT_WIDTH_CHANGED,
      S = u.IX2_MEDIA_QUERIES_DEFINED,
      x = a.IX2VanillaUtils.reifyState;

  e.rawDataImported = function (t) {
    return {
      type: c,
      payload: (0, i["default"])({}, x(t))
    };
  };

  e.sessionInitialized = function (t) {
    var e = t.hasBoundaryNodes;
    return {
      type: s,
      payload: {
        hasBoundaryNodes: e
      }
    };
  };

  e.sessionStarted = function () {
    return {
      type: f
    };
  };

  e.sessionStopped = function () {
    return {
      type: l
    };
  };

  e.previewRequested = function (t) {
    var e = t.rawData,
        n = t.defer;
    return {
      type: d,
      payload: {
        defer: n,
        rawData: e
      }
    };
  };

  e.playbackRequested = function (t) {
    var e = t.actionTypeId,
        n = void 0 === e ? o.ActionTypeConsts.GENERAL_START_ACTION : e,
        r = t.actionListId,
        i = t.actionItemId,
        a = t.eventId,
        u = t.allowEvents,
        c = t.immediate,
        s = t.testManual,
        f = t.verbose,
        l = t.rawData;
    return {
      type: p,
      payload: {
        actionTypeId: n,
        actionListId: r,
        actionItemId: i,
        testManual: s,
        eventId: a,
        allowEvents: u,
        immediate: c,
        verbose: f,
        rawData: l
      }
    };
  };

  e.stopRequested = function (t) {
    return {
      type: v,
      payload: {
        actionListId: t
      }
    };
  };

  e.clearRequested = function () {
    return {
      type: h
    };
  };

  e.eventListenerAdded = function (t, e) {
    return {
      type: E,
      payload: {
        target: t,
        listenerParams: e
      }
    };
  };

  e.testFrameRendered = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
    return {
      type: g,
      payload: {
        step: t
      }
    };
  };

  e.eventStateChanged = function (t, e) {
    return {
      type: _,
      payload: {
        stateKey: t,
        newState: e
      }
    };
  };

  e.animationFrameChanged = function (t, e) {
    return {
      type: y,
      payload: {
        now: t,
        parameters: e
      }
    };
  };

  e.parameterChanged = function (t, e) {
    return {
      type: m,
      payload: {
        key: t,
        value: e
      }
    };
  };

  e.instanceAdded = function (t) {
    return {
      type: I,
      payload: (0, i["default"])({}, t)
    };
  };

  e.instanceStarted = function (t, e) {
    return {
      type: T,
      payload: {
        instanceId: t,
        time: e
      }
    };
  };

  e.instanceRemoved = function (t) {
    return {
      type: b,
      payload: {
        instanceId: t
      }
    };
  };

  e.elementStateChanged = function (t, e, n, r) {
    return {
      type: O,
      payload: {
        elementId: t,
        actionTypeId: e,
        current: n,
        actionItem: r
      }
    };
  };

  e.actionListPlaybackChanged = function (t) {
    var e = t.actionListId,
        n = t.isPlaying;
    return {
      type: w,
      payload: {
        actionListId: e,
        isPlaying: n
      }
    };
  };

  e.viewportWidthChanged = function (t) {
    var e = t.width,
        n = t.mediaQueries;
    return {
      type: A,
      payload: {
        width: e,
        mediaQueries: n
      }
    };
  };

  e.mediaQueriesDefined = function () {
    return {
      type: S
    };
  };
}, function (t, e, n) {
  var r = n(117),
      i = n(63);

  function o(t, e) {
    this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0;
  }

  o.prototype = r(i.prototype), o.prototype.constructor = o, t.exports = o;
}, function (t, e) {
  t.exports = function () {};
}, function (t, e, n) {
  var r = n(117),
      i = n(63),
      o = 4294967295;

  function a(t) {
    this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = o, this.__views__ = [];
  }

  a.prototype = r(i.prototype), a.prototype.constructor = a, t.exports = a;
}, function (t, e, n) {
  "use strict";

  var r = n(0)(n(13));

  window.tram = function (t) {
    function e(t, e) {
      return new F.Bare().init(t, e);
    }

    function n(t) {
      return t.replace(/[A-Z]/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }

    function i(t) {
      var e = parseInt(t.slice(1), 16);
      return [e >> 16 & 255, e >> 8 & 255, 255 & e];
    }

    function o(t, e, n) {
      return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1);
    }

    function a() {}

    function u(t, e, n) {
      s("Units do not match [" + t + "]: " + e + ", " + n);
    }

    function c(t, e, n) {
      if (void 0 !== e && (n = e), void 0 === t) return n;
      var r = n;
      return $.test(t) || !Z.test(t) ? r = parseInt(t, 10) : Z.test(t) && (r = 1e3 * parseFloat(t)), 0 > r && (r = 0), r == r ? r : n;
    }

    function s(t) {
      H.debug && window && window.console.warn(t);
    }

    var f = function (t, e, n) {
      function i(t) {
        return "object" == (0, r["default"])(t);
      }

      function o(t) {
        return "function" == typeof t;
      }

      function a() {}

      return function r(u, c) {
        function s() {
          var t = new f();
          return o(t.init) && t.init.apply(t, arguments), t;
        }

        function f() {}

        c === n && (c = u, u = Object), s.Bare = f;
        var l,
            d = a[t] = u[t],
            p = f[t] = s[t] = new a();
        return p.constructor = s, s.mixin = function (e) {
          return f[t] = s[t] = r(s, e)[t], s;
        }, s.open = function (t) {
          if (l = {}, o(t) ? l = t.call(s, p, d, s, u) : i(t) && (l = t), i(l)) for (var n in l) {
            e.call(l, n) && (p[n] = l[n]);
          }
          return o(p.init) || (p.init = u), s;
        }, s.open(c);
      };
    }("prototype", {}.hasOwnProperty),
        l = {
      ease: ["ease", function (t, e, n, r) {
        var i = (t /= r) * t,
            o = i * t;
        return e + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * t);
      }],
      "ease-in": ["ease-in", function (t, e, n, r) {
        var i = (t /= r) * t,
            o = i * t;
        return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i);
      }],
      "ease-out": ["ease-out", function (t, e, n, r) {
        var i = (t /= r) * t,
            o = i * t;
        return e + n * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t);
      }],
      "ease-in-out": ["ease-in-out", function (t, e, n, r) {
        var i = (t /= r) * t,
            o = i * t;
        return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i);
      }],
      linear: ["linear", function (t, e, n, r) {
        return n * t / r + e;
      }],
      "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (t, e, n, r) {
        return n * (t /= r) * t + e;
      }],
      "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (t, e, n, r) {
        return -n * (t /= r) * (t - 2) + e;
      }],
      "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (t, e, n, r) {
        return (t /= r / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e;
      }],
      "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (t, e, n, r) {
        return n * (t /= r) * t * t + e;
      }],
      "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (t, e, n, r) {
        return n * ((t = t / r - 1) * t * t + 1) + e;
      }],
      "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (t, e, n, r) {
        return (t /= r / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e;
      }],
      "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (t, e, n, r) {
        return n * (t /= r) * t * t * t + e;
      }],
      "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (t, e, n, r) {
        return -n * ((t = t / r - 1) * t * t * t - 1) + e;
      }],
      "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (t, e, n, r) {
        return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e;
      }],
      "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (t, e, n, r) {
        return n * (t /= r) * t * t * t * t + e;
      }],
      "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (t, e, n, r) {
        return n * ((t = t / r - 1) * t * t * t * t + 1) + e;
      }],
      "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (t, e, n, r) {
        return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e;
      }],
      "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (t, e, n, r) {
        return -n * Math.cos(t / r * (Math.PI / 2)) + n + e;
      }],
      "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (t, e, n, r) {
        return n * Math.sin(t / r * (Math.PI / 2)) + e;
      }],
      "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (t, e, n, r) {
        return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + e;
      }],
      "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (t, e, n, r) {
        return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e;
      }],
      "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (t, e, n, r) {
        return t === r ? e + n : n * (1 - Math.pow(2, -10 * t / r)) + e;
      }],
      "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (t, e, n, r) {
        return 0 === t ? e : t === r ? e + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e;
      }],
      "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (t, e, n, r) {
        return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e;
      }],
      "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (t, e, n, r) {
        return n * Math.sqrt(1 - (t = t / r - 1) * t) + e;
      }],
      "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (t, e, n, r) {
        return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
      }],
      "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (t, e, n, r, i) {
        return void 0 === i && (i = 1.70158), n * (t /= r) * t * ((i + 1) * t - i) + e;
      }],
      "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (t, e, n, r, i) {
        return void 0 === i && (i = 1.70158), n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e;
      }],
      "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (t, e, n, r, i) {
        return void 0 === i && (i = 1.70158), (t /= r / 2) < 1 ? n / 2 * t * t * ((1 + (i *= 1.525)) * t - i) + e : n / 2 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e;
      }]
    },
        d = {
      "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
      "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
      "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
    },
        p = document,
        v = window,
        h = "bkwld-tram",
        E = /[\-\.0-9]/g,
        g = /[A-Z]/,
        _ = "number",
        y = /^(rgb|#)/,
        m = /(em|cm|mm|in|pt|pc|px)$/,
        I = /(em|cm|mm|in|pt|pc|px|%)$/,
        T = /(deg|rad|turn)$/,
        b = "unitless",
        O = /(all|none) 0s ease 0s/,
        w = /^(width|height)$/,
        A = " ",
        S = p.createElement("a"),
        x = ["Webkit", "Moz", "O", "ms"],
        R = ["-webkit-", "-moz-", "-o-", "-ms-"],
        N = function N(t) {
      if (t in S.style) return {
        dom: t,
        css: t
      };
      var e,
          n,
          r = "",
          i = t.split("-");

      for (e = 0; e < i.length; e++) {
        r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
      }

      for (e = 0; e < x.length; e++) {
        if ((n = x[e] + r) in S.style) return {
          dom: n,
          css: R[e] + t
        };
      }
    },
        C = e.support = {
      bind: Function.prototype.bind,
      transform: N("transform"),
      transition: N("transition"),
      backface: N("backface-visibility"),
      timing: N("transition-timing-function")
    };

    if (C.transition) {
      var L = C.timing.dom;
      if (S.style[L] = l["ease-in-back"][0], !S.style[L]) for (var D in d) {
        l[D][0] = d[D];
      }
    }

    var P = e.frame = function () {
      var t = v.requestAnimationFrame || v.webkitRequestAnimationFrame || v.mozRequestAnimationFrame || v.oRequestAnimationFrame || v.msRequestAnimationFrame;
      return t && C.bind ? t.bind(v) : function (t) {
        v.setTimeout(t, 16);
      };
    }(),
        M = e.now = function () {
      var t = v.performance,
          e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
      return e && C.bind ? e.bind(t) : Date.now || function () {
        return +new Date();
      };
    }(),
        j = f(function (e) {
      function i(t, e) {
        var n = function (t) {
          for (var e = -1, n = t ? t.length : 0, r = []; ++e < n;) {
            var i = t[e];
            i && r.push(i);
          }

          return r;
        }(("" + t).split(A)),
            r = n[0];

        e = e || {};
        var i = Q[r];
        if (!i) return s("Unsupported property: " + r);

        if (!e.weak || !this.props[r]) {
          var o = i[0],
              a = this.props[r];
          return a || (a = this.props[r] = new o.Bare()), a.init(this.$el, n, i, e), a;
        }
      }

      function o(t, e, n) {
        if (t) {
          var o = (0, r["default"])(t);
          if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == o && e) return this.timer = new W({
            duration: t,
            context: this,
            complete: a
          }), void (this.active = !0);

          if ("string" == o && e) {
            switch (t) {
              case "hide":
                f.call(this);
                break;

              case "stop":
                u.call(this);
                break;

              case "redraw":
                l.call(this);
                break;

              default:
                i.call(this, t, n && n[1]);
            }

            return a.call(this);
          }

          if ("function" == o) return void t.call(this, this);

          if ("object" == o) {
            var s = 0;
            p.call(this, t, function (t, e) {
              t.span > s && (s = t.span), t.stop(), t.animate(e);
            }, function (t) {
              "wait" in t && (s = c(t.wait, 0));
            }), d.call(this), s > 0 && (this.timer = new W({
              duration: s,
              context: this
            }), this.active = !0, e && (this.timer.complete = a));
            var v = this,
                h = !1,
                E = {};
            P(function () {
              p.call(v, t, function (t) {
                t.active && (h = !0, E[t.name] = t.nextStyle);
              }), h && v.$el.css(E);
            });
          }
        }
      }

      function a() {
        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
          var t = this.queue.shift();
          o.call(this, t.options, !0, t.args);
        }
      }

      function u(t) {
        var e;
        this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof t ? (e = {})[t] = 1 : e = "object" == (0, r["default"])(t) && null != t ? t : this.props, p.call(this, e, v), d.call(this);
      }

      function f() {
        u.call(this), this.el.style.display = "none";
      }

      function l() {
        this.el.offsetHeight;
      }

      function d() {
        var t,
            e,
            n = [];

        for (t in this.upstream && n.push(this.upstream), this.props) {
          (e = this.props[t]).active && n.push(e.string);
        }

        n = n.join(","), this.style !== n && (this.style = n, this.el.style[C.transition.dom] = n);
      }

      function p(t, e, r) {
        var o,
            a,
            u,
            c,
            s = e !== v,
            f = {};

        for (o in t) {
          u = t[o], o in q ? (f.transform || (f.transform = {}), f.transform[o] = u) : (g.test(o) && (o = n(o)), o in Q ? f[o] = u : (c || (c = {}), c[o] = u));
        }

        for (o in f) {
          if (u = f[o], !(a = this.props[o])) {
            if (!s) continue;
            a = i.call(this, o);
          }

          e.call(this, a, u);
        }

        r && c && r.call(this, c);
      }

      function v(t) {
        t.stop();
      }

      function E(t, e) {
        t.set(e);
      }

      function _(t) {
        this.$el.css(t);
      }

      function y(t, n) {
        e[t] = function () {
          return this.children ? function (t, e) {
            var n,
                r = this.children.length;

            for (n = 0; r > n; n++) {
              t.apply(this.children[n], e);
            }

            return this;
          }.call(this, n, arguments) : (this.el && n.apply(this, arguments), this);
        };
      }

      e.init = function (e) {
        if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, H.keepInherited && !H.fallback) {
          var n = Y(this.el, "transition");
          n && !O.test(n) && (this.upstream = n);
        }

        C.backface && H.hideBackface && z(this.el, C.backface.css, "hidden");
      }, y("add", i), y("start", o), y("wait", function (t) {
        t = c(t, 0), this.active ? this.queue.push({
          options: t
        }) : (this.timer = new W({
          duration: t,
          context: this,
          complete: a
        }), this.active = !0);
      }), y("then", function (t) {
        return this.active ? (this.queue.push({
          options: t,
          args: arguments
        }), void (this.timer.complete = a)) : s("No active transition timer. Use start() or wait() before then().");
      }), y("next", a), y("stop", u), y("set", function (t) {
        u.call(this, t), p.call(this, t, E, _);
      }), y("show", function (t) {
        "string" != typeof t && (t = "block"), this.el.style.display = t;
      }), y("hide", f), y("redraw", l), y("destroy", function () {
        u.call(this), t.removeData(this.el, h), this.$el = this.el = null;
      });
    }),
        F = f(j, function (e) {
      function n(e, n) {
        var r = t.data(e, h) || t.data(e, h, new j.Bare());
        return r.el || r.init(e), n ? r.start(n) : r;
      }

      e.init = function (e, r) {
        var i = t(e);
        if (!i.length) return this;
        if (1 === i.length) return n(i[0], r);
        var o = [];
        return i.each(function (t, e) {
          o.push(n(e, r));
        }), this.children = o, this;
      };
    }),
        k = f(function (t) {
      function e() {
        var t = this.get();
        this.update("auto");
        var e = this.get();
        return this.update(t), e;
      }

      function n(t) {
        var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
        return (e ? o(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
      }

      var i = 500,
          a = "ease",
          u = 0;
      t.init = function (t, e, n, r) {
        this.$el = t, this.el = t[0];
        var o = e[0];
        n[2] && (o = n[2]), K[o] && (o = K[o]), this.name = o, this.type = n[1], this.duration = c(e[1], this.duration, i), this.ease = function (t, e, n) {
          return void 0 !== e && (n = e), t in l ? t : n;
        }(e[2], this.ease, a), this.delay = c(e[3], this.delay, u), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = w.test(this.name), this.unit = r.unit || this.unit || H.defaultUnit, this.angle = r.angle || this.angle || H.defaultAngle, H.fallback || r.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + A + this.duration + "ms" + ("ease" != this.ease ? A + l[this.ease][0] : "") + (this.delay ? A + this.delay + "ms" : ""));
      }, t.set = function (t) {
        t = this.convert(t, this.type), this.update(t), this.redraw();
      }, t.transition = function (t) {
        this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t;
      }, t.fallback = function (t) {
        var n = this.el.style[this.name] || this.convert(this.get(), this.type);
        t = this.convert(t, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new V({
          from: n,
          to: t,
          duration: this.duration,
          delay: this.delay,
          ease: this.ease,
          update: this.update,
          context: this
        });
      }, t.get = function () {
        return Y(this.el, this.name);
      }, t.update = function (t) {
        z(this.el, this.name, t);
      }, t.stop = function () {
        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, z(this.el, this.name, this.get()));
        var t = this.tween;
        t && t.context && t.destroy();
      }, t.convert = function (t, e) {
        if ("auto" == t && this.auto) return t;
        var i,
            o = "number" == typeof t,
            a = "string" == typeof t;

        switch (e) {
          case _:
            if (o) return t;
            if (a && "" === t.replace(E, "")) return +t;
            i = "number(unitless)";
            break;

          case y:
            if (a) {
              if ("" === t && this.original) return this.original;
              if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : n(t);
            }

            i = "hex or rgb string";
            break;

          case m:
            if (o) return t + this.unit;
            if (a && e.test(t)) return t;
            i = "number(px) or string(unit)";
            break;

          case I:
            if (o) return t + this.unit;
            if (a && e.test(t)) return t;
            i = "number(px) or string(unit or %)";
            break;

          case T:
            if (o) return t + this.angle;
            if (a && e.test(t)) return t;
            i = "number(deg) or string(angle)";
            break;

          case b:
            if (o) return t;
            if (a && I.test(t)) return t;
            i = "number(unitless) or string(unit or %)";
        }

        return function (t, e) {
          s("Type warning: Expected: [" + t + "] Got: [" + (0, r["default"])(e) + "] " + e);
        }(i, t), t;
      }, t.redraw = function () {
        this.el.offsetHeight;
      };
    }),
        X = f(k, function (t, e) {
      t.init = function () {
        e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), y));
      };
    }),
        G = f(k, function (t, e) {
      t.init = function () {
        e.init.apply(this, arguments), this.animate = this.fallback;
      }, t.get = function () {
        return this.$el[this.name]();
      }, t.update = function (t) {
        this.$el[this.name](t);
      };
    }),
        U = f(k, function (t, e) {
      function n(t, e) {
        var n, r, i, o, a;

        for (n in t) {
          i = (o = q[n])[0], r = o[1] || n, a = this.convert(t[n], i), e.call(this, r, a, i);
        }
      }

      t.init = function () {
        e.init.apply(this, arguments), this.current || (this.current = {}, q.perspective && H.perspective && (this.current.perspective = H.perspective, z(this.el, this.name, this.style(this.current)), this.redraw()));
      }, t.set = function (t) {
        n.call(this, t, function (t, e) {
          this.current[t] = e;
        }), z(this.el, this.name, this.style(this.current)), this.redraw();
      }, t.transition = function (t) {
        var e = this.values(t);
        this.tween = new B({
          current: this.current,
          values: e,
          duration: this.duration,
          delay: this.delay,
          ease: this.ease
        });
        var n,
            r = {};

        for (n in this.current) {
          r[n] = n in e ? e[n] : this.current[n];
        }

        this.active = !0, this.nextStyle = this.style(r);
      }, t.fallback = function (t) {
        var e = this.values(t);
        this.tween = new B({
          current: this.current,
          values: e,
          duration: this.duration,
          delay: this.delay,
          ease: this.ease,
          update: this.update,
          context: this
        });
      }, t.update = function () {
        z(this.el, this.name, this.style(this.current));
      }, t.style = function (t) {
        var e,
            n = "";

        for (e in t) {
          n += e + "(" + t[e] + ") ";
        }

        return n;
      }, t.values = function (t) {
        var e,
            r = {};
        return n.call(this, t, function (t, n, i) {
          r[t] = n, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, i));
        }), r;
      };
    }),
        V = f(function (e) {
      function n() {
        var t,
            e,
            r,
            i = c.length;
        if (i) for (P(n), e = M(), t = i; t--;) {
          (r = c[t]) && r.render(e);
        }
      }

      var r = {
        ease: l.ease[1],
        from: 0,
        to: 1
      };
      e.init = function (t) {
        this.duration = t.duration || 0, this.delay = t.delay || 0;
        var e = t.ease || r.ease;
        l[e] && (e = l[e][1]), "function" != typeof e && (e = r.ease), this.ease = e, this.update = t.update || a, this.complete = t.complete || a, this.context = t.context || this, this.name = t.name;
        var n = t.from,
            i = t.to;
        void 0 === n && (n = r.from), void 0 === i && (i = r.to), this.unit = t.unit || "", "number" == typeof n && "number" == typeof i ? (this.begin = n, this.change = i - n) : this.format(i, n), this.value = this.begin + this.unit, this.start = M(), !1 !== t.autoplay && this.play();
      }, e.play = function () {
        var t;
        this.active || (this.start || (this.start = M()), this.active = !0, t = this, 1 === c.push(t) && P(n));
      }, e.stop = function () {
        var e, n, r;
        this.active && (this.active = !1, e = this, (r = t.inArray(e, c)) >= 0 && (n = c.slice(r + 1), c.length = r, n.length && (c = c.concat(n))));
      }, e.render = function (t) {
        var e,
            n = t - this.start;

        if (this.delay) {
          if (n <= this.delay) return;
          n -= this.delay;
        }

        if (n < this.duration) {
          var r = this.ease(n, 0, 1, this.duration);
          return e = this.startRGB ? function (t, e, n) {
            return o(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]));
          }(this.startRGB, this.endRGB, r) : function (t) {
            return Math.round(t * s) / s;
          }(this.begin + r * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value);
        }

        e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy();
      }, e.format = function (t, e) {
        if (e += "", "#" == (t += "").charAt(0)) return this.startRGB = i(e), this.endRGB = i(t), this.endHex = t, this.begin = 0, void (this.change = 1);

        if (!this.unit) {
          var n = e.replace(E, "");
          n !== t.replace(E, "") && u("tween", e, t), this.unit = n;
        }

        e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e;
      }, e.destroy = function () {
        this.stop(), this.context = null, this.ease = this.update = this.complete = a;
      };
      var c = [],
          s = 1e3;
    }),
        W = f(V, function (t) {
      t.init = function (t) {
        this.duration = t.duration || 0, this.complete = t.complete || a, this.context = t.context, this.play();
      }, t.render = function (t) {
        t - this.start < this.duration || (this.complete.call(this.context), this.destroy());
      };
    }),
        B = f(V, function (t, e) {
      t.init = function (t) {
        var e, n;

        for (e in this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current, t.values) {
          n = t.values[e], this.current[e] !== n && this.tweens.push(new V({
            name: e,
            from: this.current[e],
            to: n,
            duration: t.duration,
            delay: t.delay,
            ease: t.ease,
            autoplay: !1
          }));
        }

        this.play();
      }, t.render = function (t) {
        var e,
            n,
            r = !1;

        for (e = this.tweens.length; e--;) {
          (n = this.tweens[e]).context && (n.render(t), this.current[n.name] = n.value, r = !0);
        }

        return r ? void (this.update && this.update.call(this.context)) : this.destroy();
      }, t.destroy = function () {
        if (e.destroy.call(this), this.tweens) {
          var t;

          for (t = this.tweens.length; t--;) {
            this.tweens[t].destroy();
          }

          this.tweens = null, this.current = null;
        }
      };
    }),
        H = e.config = {
      debug: !1,
      defaultUnit: "px",
      defaultAngle: "deg",
      keepInherited: !1,
      hideBackface: !1,
      perspective: "",
      fallback: !C.transition,
      agentTests: []
    };

    e.fallback = function (t) {
      if (!C.transition) return H.fallback = !0;
      H.agentTests.push("(" + t + ")");
      var e = new RegExp(H.agentTests.join("|"), "i");
      H.fallback = e.test(navigator.userAgent);
    }, e.fallback("6.0.[2-5] Safari"), e.tween = function (t) {
      return new V(t);
    }, e.delay = function (t, e, n) {
      return new W({
        complete: e,
        duration: t,
        context: n
      });
    }, t.fn.tram = function (t) {
      return e.call(null, this, t);
    };
    var z = t.style,
        Y = t.css,
        K = {
      transform: C.transform && C.transform.css
    },
        Q = {
      color: [X, y],
      background: [X, y, "background-color"],
      "outline-color": [X, y],
      "border-color": [X, y],
      "border-top-color": [X, y],
      "border-right-color": [X, y],
      "border-bottom-color": [X, y],
      "border-left-color": [X, y],
      "border-width": [k, m],
      "border-top-width": [k, m],
      "border-right-width": [k, m],
      "border-bottom-width": [k, m],
      "border-left-width": [k, m],
      "border-spacing": [k, m],
      "letter-spacing": [k, m],
      margin: [k, m],
      "margin-top": [k, m],
      "margin-right": [k, m],
      "margin-bottom": [k, m],
      "margin-left": [k, m],
      padding: [k, m],
      "padding-top": [k, m],
      "padding-right": [k, m],
      "padding-bottom": [k, m],
      "padding-left": [k, m],
      "outline-width": [k, m],
      opacity: [k, _],
      top: [k, I],
      right: [k, I],
      bottom: [k, I],
      left: [k, I],
      "font-size": [k, I],
      "text-indent": [k, I],
      "word-spacing": [k, I],
      width: [k, I],
      "min-width": [k, I],
      "max-width": [k, I],
      height: [k, I],
      "min-height": [k, I],
      "max-height": [k, I],
      "line-height": [k, b],
      "scroll-top": [G, _, "scrollTop"],
      "scroll-left": [G, _, "scrollLeft"]
    },
        q = {};
    C.transform && (Q.transform = [U], q = {
      x: [I, "translateX"],
      y: [I, "translateY"],
      rotate: [T],
      rotateX: [T],
      rotateY: [T],
      scale: [_],
      scaleX: [_],
      scaleY: [_],
      skew: [T],
      skewX: [T],
      skewY: [T]
    }), C.transform && C.backface && (q.z = [I, "translateZ"], q.rotateZ = [T], q.scaleZ = [_], q.perspective = [m]);
    var $ = /ms/,
        Z = /s|\./;
    return t.tram = e;
  }(__webpack_provided_window_dot_jQuery);
}, function (t, e, n) {
  var r = n(15),
      i = n(132),
      o = n(67),
      a = n(37),
      u = n(68),
      c = n(17),
      s = n(69),
      f = Object.getOwnPropertyDescriptor;
  e.f = r ? f : function (t, e) {
    if (t = a(t), e = u(e, !0), s) try {
      return f(t, e);
    } catch (t) {}
    if (c(t, e)) return o(!i.f.call(t, e), t[e]);
  };
}, function (t, e) {
  t.exports = function (t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e
    };
  };
}, function (t, e, n) {
  var r = n(24);

  t.exports = function (t, e) {
    if (!r(t)) return t;
    var n, i;
    if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
    if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t))) return i;
    if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
    throw TypeError("Can't convert object to primitive value");
  };
}, function (t, e, n) {
  var r = n(15),
      i = n(16),
      o = n(70);
  t.exports = !r && !i(function () {
    return 7 != Object.defineProperty(o("div"), "a", {
      get: function get() {
        return 7;
      }
    }).a;
  });
}, function (t, e, n) {
  var r = n(3),
      i = n(24),
      o = r.document,
      a = i(o) && i(o.createElement);

  t.exports = function (t) {
    return a ? o.createElement(t) : {};
  };
}, function (t, e, n) {
  var r = n(26);
  t.exports = r("native-function-to-string", Function.toString);
}, function (t, e, n) {
  var r = n(26),
      i = n(73),
      o = r("keys");

  t.exports = function (t) {
    return o[t] || (o[t] = i(t));
  };
}, function (t, e) {
  var n = 0,
      r = Math.random();

  t.exports = function (t) {
    return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + r).toString(36);
  };
}, function (t, e, n) {
  var r = n(142),
      i = n(3),
      o = function o(t) {
    return "function" == typeof t ? t : void 0;
  };

  t.exports = function (t, e) {
    return arguments.length < 2 ? o(r[t]) || o(i[t]) : r[t] && r[t][e] || i[t] && i[t][e];
  };
}, function (t, e, n) {
  var r = n(17),
      i = n(37),
      o = n(76).indexOf,
      a = n(40);

  t.exports = function (t, e) {
    var n,
        u = i(t),
        c = 0,
        s = [];

    for (n in u) {
      !r(a, n) && r(u, n) && s.push(n);
    }

    for (; e.length > c;) {
      r(u, n = e[c++]) && (~o(s, n) || s.push(n));
    }

    return s;
  };
}, function (t, e, n) {
  var r = n(37),
      i = n(144),
      o = n(145),
      a = function a(t) {
    return function (e, n, a) {
      var u,
          c = r(e),
          s = i(c.length),
          f = o(a, s);

      if (t && n != n) {
        for (; s > f;) {
          if ((u = c[f++]) != u) return !0;
        }
      } else for (; s > f; f++) {
        if ((t || f in c) && c[f] === n) return t || f || 0;
      }

      return !t && -1;
    };
  };

  t.exports = {
    includes: a(!0),
    indexOf: a(!1)
  };
}, function (t, e) {
  var n = Math.ceil,
      r = Math.floor;

  t.exports = function (t) {
    return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t);
  };
}, function (t, e, n) {
  "use strict";

  n.r(e);
  var r = n(42);
  n.d(e, "createStore", function () {
    return r["default"];
  });
  var i = n(81);
  n.d(e, "combineReducers", function () {
    return i["default"];
  });
  var o = n(83);
  n.d(e, "bindActionCreators", function () {
    return o["default"];
  });
  var a = n(84);
  n.d(e, "applyMiddleware", function () {
    return a["default"];
  });
  var u = n(43);
  n.d(e, "compose", function () {
    return u["default"];
  });
  n(82);
}, function (t, e, n) {
  "use strict";

  n.r(e);
  var r = n(158),
      i = n(163),
      o = n(165),
      a = "[object Object]",
      u = Function.prototype,
      c = Object.prototype,
      s = u.toString,
      f = c.hasOwnProperty,
      l = s.call(Object);

  e["default"] = function (t) {
    if (!Object(o["default"])(t) || Object(r["default"])(t) != a) return !1;
    var e = Object(i["default"])(t);
    if (null === e) return !0;
    var n = f.call(e, "constructor") && e.constructor;
    return "function" == typeof n && n instanceof n && s.call(n) == l;
  };
}, function (t, e, n) {
  "use strict";

  n.r(e);
  var r = n(159)["default"].Symbol;
  e["default"] = r;
}, function (t, e, n) {
  "use strict";

  n.r(e), n.d(e, "default", function () {
    return o;
  });
  var r = n(42);
  n(79), n(82);

  function i(t, e) {
    var n = e && e.type;
    return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.';
  }

  function o(t) {
    for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
      var a = e[o];
      0, "function" == typeof t[a] && (n[a] = t[a]);
    }

    var u,
        c = Object.keys(n);

    try {
      !function (t) {
        Object.keys(t).forEach(function (e) {
          var n = t[e];
          if (void 0 === n(void 0, {
            type: r.ActionTypes.INIT
          })) throw new Error('Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
          if (void 0 === n(void 0, {
            type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
          })) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + r.ActionTypes.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.');
        });
      }(n);
    } catch (t) {
      u = t;
    }

    return function () {
      var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
          e = arguments[1];
      if (u) throw u;

      for (var r = !1, o = {}, a = 0; a < c.length; a++) {
        var s = c[a],
            f = n[s],
            l = t[s],
            d = f(l, e);

        if (void 0 === d) {
          var p = i(s, e);
          throw new Error(p);
        }

        o[s] = d, r = r || d !== l;
      }

      return r ? o : t;
    };
  }
}, function (t, e, n) {
  "use strict";

  function r(t) {
    "undefined" != typeof console && "function" == typeof console.error && console.error(t);

    try {
      throw new Error(t);
    } catch (t) {}
  }

  n.r(e), n.d(e, "default", function () {
    return r;
  });
}, function (t, e, n) {
  "use strict";

  function r(t, e) {
    return function () {
      return e(t.apply(void 0, arguments));
    };
  }

  function i(t, e) {
    if ("function" == typeof t) return r(t, e);
    if ("object" != _typeof(t) || null === t) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : _typeof(t)) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');

    for (var n = Object.keys(t), i = {}, o = 0; o < n.length; o++) {
      var a = n[o],
          u = t[a];
      "function" == typeof u && (i[a] = r(u, e));
    }

    return i;
  }

  n.r(e), n.d(e, "default", function () {
    return i;
  });
}, function (t, e, n) {
  "use strict";

  n.r(e), n.d(e, "default", function () {
    return o;
  });

  var r = n(43),
      i = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];

      for (var r in n) {
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }
    }

    return t;
  };

  function o() {
    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) {
      e[n] = arguments[n];
    }

    return function (t) {
      return function (n, o, a) {
        var u,
            c = t(n, o, a),
            s = c.dispatch,
            f = {
          getState: c.getState,
          dispatch: function dispatch(t) {
            return s(t);
          }
        };
        return u = e.map(function (t) {
          return t(f);
        }), s = r["default"].apply(void 0, u)(c.dispatch), i({}, c, {
          dispatch: s
        });
      };
    };
  }
}, function (t, e, n) {
  var r = n(86)(n(243));
  t.exports = r;
}, function (t, e, n) {
  var r = n(7),
      i = n(12),
      o = n(33);

  t.exports = function (t) {
    return function (e, n, a) {
      var u = Object(e);

      if (!i(e)) {
        var c = r(n, 3);
        e = o(e), n = function n(t) {
          return c(u[t], t, u);
        };
      }

      var s = t(e, n, a);
      return s > -1 ? u[c ? e[s] : s] : void 0;
    };
  };
}, function (t, e, n) {
  var r = n(29),
      i = n(185),
      o = n(186),
      a = n(187),
      u = n(188),
      c = n(189);

  function s(t) {
    var e = this.__data__ = new r(t);
    this.size = e.size;
  }

  s.prototype.clear = i, s.prototype["delete"] = o, s.prototype.get = a, s.prototype.has = u, s.prototype.set = c, t.exports = s;
}, function (t, e, n) {
  var r = n(11),
      i = n(6),
      o = "[object AsyncFunction]",
      a = "[object Function]",
      u = "[object GeneratorFunction]",
      c = "[object Proxy]";

  t.exports = function (t) {
    if (!i(t)) return !1;
    var e = r(t);
    return e == a || e == u || e == o || e == c;
  };
}, function (t, e, n) {
  (function (e) {
    var n = "object" == _typeof(e) && e && e.Object === Object && e;
    t.exports = n;
  }).call(this, n(23));
}, function (t, e) {
  var n = Function.prototype.toString;

  t.exports = function (t) {
    if (null != t) {
      try {
        return n.call(t);
      } catch (t) {}

      try {
        return t + "";
      } catch (t) {}
    }

    return "";
  };
}, function (t, e, n) {
  var r = n(208),
      i = n(9);

  t.exports = function t(e, n, o, a, u) {
    return e === n || (null == e || null == n || !i(e) && !i(n) ? e != e && n != n : r(e, n, o, a, t, u));
  };
}, function (t, e, n) {
  var r = n(209),
      i = n(212),
      o = n(213),
      a = 1,
      u = 2;

  t.exports = function (t, e, n, c, s, f) {
    var l = n & a,
        d = t.length,
        p = e.length;
    if (d != p && !(l && p > d)) return !1;
    var v = f.get(t),
        h = f.get(e);
    if (v && h) return v == e && h == t;

    var E = -1,
        g = !0,
        _ = n & u ? new r() : void 0;

    for (f.set(t, e), f.set(e, t); ++E < d;) {
      var y = t[E],
          m = e[E];
      if (c) var I = l ? c(m, y, E, e, t, f) : c(y, m, E, t, e, f);

      if (void 0 !== I) {
        if (I) continue;
        g = !1;
        break;
      }

      if (_) {
        if (!i(e, function (t, e) {
          if (!o(_, e) && (y === t || s(y, t, n, c, f))) return _.push(e);
        })) {
          g = !1;
          break;
        }
      } else if (y !== m && !s(y, m, n, c, f)) {
        g = !1;
        break;
      }
    }

    return f["delete"](t), f["delete"](e), g;
  };
}, function (t, e, n) {
  var r = n(48),
      i = n(1);

  t.exports = function (t, e, n) {
    var o = e(t);
    return i(t) ? o : r(o, n(t));
  };
}, function (t, e, n) {
  var r = n(220),
      i = n(95),
      o = Object.prototype.propertyIsEnumerable,
      a = Object.getOwnPropertySymbols,
      u = a ? function (t) {
    return null == t ? [] : (t = Object(t), r(a(t), function (e) {
      return o.call(t, e);
    }));
  } : i;
  t.exports = u;
}, function (t, e) {
  t.exports = function () {
    return [];
  };
}, function (t, e, n) {
  var r = n(221),
      i = n(34),
      o = n(1),
      a = n(49),
      u = n(50),
      c = n(51),
      s = Object.prototype.hasOwnProperty;

  t.exports = function (t, e) {
    var n = o(t),
        f = !n && i(t),
        l = !n && !f && a(t),
        d = !n && !f && !l && c(t),
        p = n || f || l || d,
        v = p ? r(t.length, String) : [],
        h = v.length;

    for (var E in t) {
      !e && !s.call(t, E) || p && ("length" == E || l && ("offset" == E || "parent" == E) || d && ("buffer" == E || "byteLength" == E || "byteOffset" == E) || u(E, h)) || v.push(E);
    }

    return v;
  };
}, function (t, e) {
  t.exports = function (t) {
    return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
      enumerable: !0,
      get: function get() {
        return t.l;
      }
    }), Object.defineProperty(t, "id", {
      enumerable: !0,
      get: function get() {
        return t.i;
      }
    }), t.webpackPolyfill = 1), t;
  };
}, function (t, e) {
  t.exports = function (t, e) {
    return function (n) {
      return t(e(n));
    };
  };
}, function (t, e, n) {
  var r = n(8)(n(5), "WeakMap");
  t.exports = r;
}, function (t, e, n) {
  var r = n(6);

  t.exports = function (t) {
    return t == t && !r(t);
  };
}, function (t, e) {
  t.exports = function (t, e) {
    return function (n) {
      return null != n && n[t] === e && (void 0 !== e || t in Object(n));
    };
  };
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) {
      i[n] = e(t[n], n, t);
    }

    return i;
  };
}, function (t, e) {
  t.exports = function (t) {
    return function (e) {
      return null == e ? void 0 : e[t];
    };
  };
}, function (t, e) {
  t.exports = function (t, e, n, r) {
    for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;) {
      if (e(t[o], o, t)) return o;
    }

    return -1;
  };
}, function (t, e, n) {
  var r = n(244);

  t.exports = function (t) {
    var e = r(t),
        n = e % 1;
    return e == e ? n ? e - n : e : 0;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.inQuad = function (t) {
    return Math.pow(t, 2);
  }, e.outQuad = function (t) {
    return -(Math.pow(t - 1, 2) - 1);
  }, e.inOutQuad = function (t) {
    if ((t /= .5) < 1) return .5 * Math.pow(t, 2);
    return -.5 * ((t -= 2) * t - 2);
  }, e.inCubic = function (t) {
    return Math.pow(t, 3);
  }, e.outCubic = function (t) {
    return Math.pow(t - 1, 3) + 1;
  }, e.inOutCubic = function (t) {
    if ((t /= .5) < 1) return .5 * Math.pow(t, 3);
    return .5 * (Math.pow(t - 2, 3) + 2);
  }, e.inQuart = function (t) {
    return Math.pow(t, 4);
  }, e.outQuart = function (t) {
    return -(Math.pow(t - 1, 4) - 1);
  }, e.inOutQuart = function (t) {
    if ((t /= .5) < 1) return .5 * Math.pow(t, 4);
    return -.5 * ((t -= 2) * Math.pow(t, 3) - 2);
  }, e.inQuint = function (t) {
    return Math.pow(t, 5);
  }, e.outQuint = function (t) {
    return Math.pow(t - 1, 5) + 1;
  }, e.inOutQuint = function (t) {
    if ((t /= .5) < 1) return .5 * Math.pow(t, 5);
    return .5 * (Math.pow(t - 2, 5) + 2);
  }, e.inSine = function (t) {
    return 1 - Math.cos(t * (Math.PI / 2));
  }, e.outSine = function (t) {
    return Math.sin(t * (Math.PI / 2));
  }, e.inOutSine = function (t) {
    return -.5 * (Math.cos(Math.PI * t) - 1);
  }, e.inExpo = function (t) {
    return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
  }, e.outExpo = function (t) {
    return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
  }, e.inOutExpo = function (t) {
    if (0 === t) return 0;
    if (1 === t) return 1;
    if ((t /= .5) < 1) return .5 * Math.pow(2, 10 * (t - 1));
    return .5 * (2 - Math.pow(2, -10 * --t));
  }, e.inCirc = function (t) {
    return -(Math.sqrt(1 - t * t) - 1);
  }, e.outCirc = function (t) {
    return Math.sqrt(1 - Math.pow(t - 1, 2));
  }, e.inOutCirc = function (t) {
    if ((t /= .5) < 1) return -.5 * (Math.sqrt(1 - t * t) - 1);
    return .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
  }, e.outBounce = function (t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
  }, e.inBack = function (t) {
    return t * t * ((o + 1) * t - o);
  }, e.outBack = function (t) {
    return (t -= 1) * t * ((o + 1) * t + o) + 1;
  }, e.inOutBack = function (t) {
    var e = o;
    if ((t /= .5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * .5;
    return .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
  }, e.inElastic = function (t) {
    var e = o,
        n = 0,
        r = 1;
    if (0 === t) return 0;
    if (1 === t) return 1;
    n || (n = .3);
    r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
    return -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n);
  }, e.outElastic = function (t) {
    var e = o,
        n = 0,
        r = 1;
    if (0 === t) return 0;
    if (1 === t) return 1;
    n || (n = .3);
    r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
    return r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1;
  }, e.inOutElastic = function (t) {
    var e = o,
        n = 0,
        r = 1;
    if (0 === t) return 0;
    if (2 == (t /= .5)) return 1;
    n || (n = .3 * 1.5);
    r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
    if (t < 1) return r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5;
    return r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1;
  }, e.swingFromTo = function (t) {
    var e = o;
    return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
  }, e.swingFrom = function (t) {
    return t * t * ((o + 1) * t - o);
  }, e.swingTo = function (t) {
    return (t -= 1) * t * ((o + 1) * t + o) + 1;
  }, e.bounce = function (t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
  }, e.bouncePast = function (t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
  }, e.easeInOut = e.easeOut = e.easeIn = e.ease = void 0;
  var i = r(n(107)),
      o = 1.70158,
      a = (0, i["default"])(.25, .1, .25, 1);
  e.ease = a;
  var u = (0, i["default"])(.42, 0, 1, 1);
  e.easeIn = u;
  var c = (0, i["default"])(0, 0, .58, 1);
  e.easeOut = c;
  var s = (0, i["default"])(.42, 0, .58, 1);
  e.easeInOut = s;
}, function (t, e) {
  var n = 4,
      r = .001,
      i = 1e-7,
      o = 10,
      a = 11,
      u = 1 / (a - 1),
      c = "function" == typeof Float32Array;

  function s(t, e) {
    return 1 - 3 * e + 3 * t;
  }

  function f(t, e) {
    return 3 * e - 6 * t;
  }

  function l(t) {
    return 3 * t;
  }

  function d(t, e, n) {
    return ((s(e, n) * t + f(e, n)) * t + l(e)) * t;
  }

  function p(t, e, n) {
    return 3 * s(e, n) * t * t + 2 * f(e, n) * t + l(e);
  }

  t.exports = function (t, e, s, f) {
    if (!(0 <= t && t <= 1 && 0 <= s && s <= 1)) throw new Error("bezier x values must be in [0, 1] range");
    var l = c ? new Float32Array(a) : new Array(a);
    if (t !== e || s !== f) for (var v = 0; v < a; ++v) {
      l[v] = d(v * u, t, s);
    }

    function h(e) {
      for (var c = 0, f = 1, v = a - 1; f !== v && l[f] <= e; ++f) {
        c += u;
      }

      var h = c + (e - l[--f]) / (l[f + 1] - l[f]) * u,
          E = p(h, t, s);
      return E >= r ? function (t, e, r, i) {
        for (var o = 0; o < n; ++o) {
          var a = p(e, r, i);
          if (0 === a) return e;
          e -= (d(e, r, i) - t) / a;
        }

        return e;
      }(e, h, t, s) : 0 === E ? h : function (t, e, n, r, a) {
        var u,
            c,
            s = 0;

        do {
          (u = d(c = e + (n - e) / 2, r, a) - t) > 0 ? n = c : e = c;
        } while (Math.abs(u) > i && ++s < o);

        return c;
      }(e, c, c + u, t, s);
    }

    return function (n) {
      return t === e && s === f ? n : 0 === n ? 0 : 1 === n ? 1 : d(h(n), e, f);
    };
  };
}, function (t, e, n) {
  "use strict";

  var r = n(0)(n(109)),
      i = n(0),
      o = n(14);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.optimizeFloat = c, e.createBezierEasing = function (t) {
    return u["default"].apply(void 0, (0, r["default"])(t));
  }, e.applyEasing = function (t, e, n) {
    if (0 === e) return 0;
    if (1 === e) return 1;
    if (n) return c(e > 0 ? n(e) : e);
    return c(e > 0 && t && a[t] ? a[t](e) : e);
  };
  var a = o(n(106)),
      u = i(n(107));

  function c(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
        r = Math.pow(n, e),
        i = Number(Math.round(t * r) / r);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
}, function (t, e, n) {
  var r = n(245),
      i = n(246),
      o = n(247);

  t.exports = function (t) {
    return r(t) || i(t) || o();
  };
}, function (t, e, n) {
  "use strict";

  var r = n(0)(n(27));
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.isPluginType = function (t) {
    return t === o.ActionTypeConsts.PLUGIN_LOTTIE;
  }, e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginDuration = e.getPluginOrigin = e.getPluginConfig = void 0;
  var i = n(249),
      o = n(2),
      a = n(44),
      u = (0, r["default"])({}, o.ActionTypeConsts.PLUGIN_LOTTIE, {
    getConfig: i.getPluginConfig,
    getOrigin: i.getPluginOrigin,
    getDuration: i.getPluginDuration,
    getDestination: i.getPluginDestination,
    createInstance: i.createPluginInstance,
    render: i.renderPlugin,
    clear: i.clearPlugin
  });

  var c = function c(t) {
    return function (e) {
      if (!a.IS_BROWSER_ENV) return function () {
        return null;
      };
      var n = u[e];
      if (!n) throw new Error("IX2 no plugin configured for: ".concat(e));
      var r = n[t];
      if (!r) throw new Error("IX2 invalid plugin method: ".concat(t));
      return r;
    };
  },
      s = c("getConfig");

  e.getPluginConfig = s;
  var f = c("getOrigin");
  e.getPluginOrigin = f;
  var l = c("getDuration");
  e.getPluginDuration = l;
  var d = c("getDestination");
  e.getPluginDestination = d;
  var p = c("createInstance");
  e.createPluginInstance = p;
  var v = c("render");
  e.renderPlugin = v;
  var h = c("clear");
  e.clearPlugin = h;
}, function (t, e, n) {
  var r = n(112),
      i = n(256)(r);
  t.exports = i;
}, function (t, e, n) {
  var r = n(254),
      i = n(33);

  t.exports = function (t, e) {
    return t && r(t, e, i);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(260);
  e.__esModule = !0, e["default"] = void 0;
  var i = r(n(261))["default"];
  e["default"] = i;
}, function (t, e, n) {
  "use strict";

  var r = n(0)(n(109)),
      i = n(14),
      o = n(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.observeRequests = function (t) {
    P({
      store: t,
      select: function select(t) {
        var e = t.ixRequest;
        return e.preview;
      },
      onChange: et
    }), P({
      store: t,
      select: function select(t) {
        var e = t.ixRequest;
        return e.playback;
      },
      onChange: rt
    }), P({
      store: t,
      select: function select(t) {
        var e = t.ixRequest;
        return e.stop;
      },
      onChange: it
    }), P({
      store: t,
      select: function select(t) {
        var e = t.ixRequest;
        return e.clear;
      },
      onChange: ot
    });
  }, e.startEngine = at, e.stopEngine = ut, e.stopAllActionGroups = ht, e.stopActionGroup = Et, e.startActionGroup = gt;

  var a = o(n(28)),
      u = o(n(264)),
      c = o(n(85)),
      s = o(n(56)),
      f = o(n(265)),
      l = o(n(271)),
      d = o(n(283)),
      p = o(n(284)),
      v = o(n(285)),
      h = o(n(288)),
      E = o(n(113)),
      g = n(2),
      _ = n(10),
      y = n(61),
      m = i(n(291)),
      I = o(n(292)),
      T = Object.keys(g.QuickEffectIds),
      b = function b(t) {
    return T.includes(t);
  },
      O = g.IX2EngineConstants,
      w = O.COLON_DELIMITER,
      A = O.BOUNDARY_SELECTOR,
      S = O.HTML_ELEMENT,
      x = O.RENDER_GENERAL,
      R = O.W_MOD_IX,
      N = _.IX2VanillaUtils,
      C = N.getAffectedElements,
      L = N.getElementId,
      D = N.getDestinationValues,
      P = N.observeStore,
      M = N.getInstanceId,
      j = N.renderHTMLElement,
      F = N.clearAllStyles,
      k = N.getMaxDurationItemIndex,
      X = N.getComputedStyle,
      G = N.getInstanceOrigin,
      U = N.reduceListToGroup,
      V = N.shouldNamespaceEventParameter,
      W = N.getNamespacedParameterId,
      B = N.shouldAllowMediaQuery,
      H = N.cleanupHTMLElement,
      z = N.stringifyTarget,
      Y = N.mediaQueriesEqual,
      K = _.IX2VanillaPlugins,
      Q = K.isPluginType,
      q = K.createPluginInstance,
      $ = K.getPluginDuration,
      Z = navigator.userAgent,
      J = Z.match(/iPad/i) || Z.match(/iPhone/),
      tt = 12;

  function et(t, e) {
    var n = t.rawData,
        r = function r() {
      at({
        store: e,
        rawData: n,
        allowEvents: !0
      }), nt();
    };

    t.defer ? setTimeout(r, 0) : r();
  }

  function nt() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }

  function rt(t, e) {
    var n = t.actionTypeId,
        r = t.actionListId,
        i = t.actionItemId,
        o = t.eventId,
        a = t.allowEvents,
        u = t.immediate,
        c = t.testManual,
        s = t.verbose,
        f = void 0 === s || s,
        l = t.rawData;

    if (r && i && l && u) {
      var d = l.actionLists[r];
      d && (l = U({
        actionList: d,
        actionItemId: i,
        rawData: l
      }));
    }

    if (at({
      store: e,
      rawData: l,
      allowEvents: a,
      testManual: c
    }), r && n === g.ActionTypeConsts.GENERAL_START_ACTION || b(n)) {
      Et({
        store: e,
        actionListId: r
      }), vt({
        store: e,
        actionListId: r,
        eventId: o
      });
      var p = gt({
        store: e,
        eventId: o,
        actionListId: r,
        immediate: u,
        verbose: f
      });
      f && p && e.dispatch((0, y.actionListPlaybackChanged)({
        actionListId: r,
        isPlaying: !u
      }));
    }
  }

  function it(t, e) {
    var n = t.actionListId;
    n ? Et({
      store: e,
      actionListId: n
    }) : ht({
      store: e
    }), ut(e);
  }

  function ot(t, e) {
    ut(e), F({
      store: e,
      elementApi: m
    });
  }

  function at(t) {
    var e,
        n = t.store,
        i = t.rawData,
        o = t.allowEvents,
        a = t.testManual,
        u = n.getState().ixSession;
    i && n.dispatch((0, y.rawDataImported)(i)), u.active || (n.dispatch((0, y.sessionInitialized)({
      hasBoundaryNodes: Boolean(document.querySelector(A))
    })), o && (function (t) {
      var e = t.getState().ixData.eventTypeMap;
      ft(t), (0, v["default"])(e, function (e, n) {
        var i = I["default"][n];
        i ? function (t) {
          var e = t.logic,
              n = t.store,
              i = t.events;
          !function (t) {
            if (J) {
              var e = {},
                  n = "";

              for (var r in t) {
                var i = t[r],
                    o = i.eventTypeId,
                    a = i.target,
                    u = m.getQuerySelector(a);
                e[u] || o !== g.EventTypeConsts.MOUSE_CLICK && o !== g.EventTypeConsts.MOUSE_SECOND_CLICK || (e[u] = !0, n += u + "{cursor: pointer;touch-action: manipulation;}");
              }

              if (n) {
                var c = document.createElement("style");
                c.textContent = n, document.body.appendChild(c);
              }
            }
          }(i);
          var o = e.types,
              a = e.handler,
              u = n.getState().ixData,
              l = u.actionLists,
              d = lt(i, pt);

          if ((0, f["default"])(d)) {
            (0, v["default"])(d, function (t, e) {
              var o = i[e],
                  a = o.action,
                  f = o.id,
                  d = o.mediaQueries,
                  p = void 0 === d ? u.mediaQueryKeys : d,
                  v = a.config.actionListId;

              if (Y(p, u.mediaQueryKeys) || n.dispatch((0, y.mediaQueriesDefined)()), a.actionTypeId === g.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
                var h = Array.isArray(o.config) ? o.config : [o.config];
                h.forEach(function (e) {
                  var i = e.continuousParameterGroupId,
                      o = (0, s["default"])(l, "".concat(v, ".continuousParameterGroups"), []),
                      a = (0, c["default"])(o, function (t) {
                    var e = t.id;
                    return e === i;
                  }),
                      u = (e.smoothing || 0) / 100,
                      d = (e.restingState || 0) / 100;
                  a && t.forEach(function (t, i) {
                    var o = f + w + i;
                    !function (t) {
                      var e = t.store,
                          n = t.eventStateKey,
                          i = t.eventTarget,
                          o = t.eventId,
                          a = t.eventConfig,
                          u = t.actionListId,
                          c = t.parameterGroup,
                          f = t.smoothing,
                          l = t.restingValue,
                          d = e.getState(),
                          p = d.ixData,
                          v = d.ixSession,
                          h = p.events[o],
                          E = h.eventTypeId,
                          g = {},
                          _ = {},
                          y = [],
                          I = c.continuousActionGroups,
                          T = c.id;
                      V(E, a) && (T = W(n, T));
                      var b = v.hasBoundaryNodes && i ? m.getClosestElement(i, A) : null;
                      I.forEach(function (t) {
                        var e = t.keyframe,
                            n = t.actionItems;
                        n.forEach(function (t) {
                          var n = t.actionTypeId,
                              o = t.config.target;

                          if (o) {
                            var a = o.boundaryMode ? b : null,
                                u = z(o) + w + n;

                            if (_[u] = function () {
                              var t,
                                  e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                  n = arguments.length > 1 ? arguments[1] : void 0,
                                  i = arguments.length > 2 ? arguments[2] : void 0,
                                  o = (0, r["default"])(e);
                              return o.some(function (e, r) {
                                return e.keyframe === n && (t = r, !0);
                              }), null == t && (t = o.length, o.push({
                                keyframe: n,
                                actionItems: []
                              })), o[t].actionItems.push(i), o;
                            }(_[u], e, t), !g[u]) {
                              g[u] = !0;
                              var c = t.config;
                              C({
                                config: c,
                                event: h,
                                eventTarget: i,
                                elementRoot: a,
                                elementApi: m
                              }).forEach(function (t) {
                                y.push({
                                  element: t,
                                  key: u
                                });
                              });
                            }
                          }
                        });
                      }), y.forEach(function (t) {
                        var n = t.element,
                            r = t.key,
                            i = _[r],
                            a = (0, s["default"])(i, "[0].actionItems[0]", {}),
                            c = a.actionTypeId,
                            d = Q(c) ? q(c)(n, a) : null,
                            p = D({
                          element: n,
                          actionItem: a,
                          elementApi: m
                        }, d);

                        _t({
                          store: e,
                          element: n,
                          eventId: o,
                          actionListId: u,
                          actionItem: a,
                          destination: p,
                          continuous: !0,
                          parameterId: T,
                          actionGroups: i,
                          smoothing: f,
                          restingValue: l,
                          pluginInstance: d
                        });
                      });
                    }({
                      store: n,
                      eventStateKey: o,
                      eventTarget: t,
                      eventId: f,
                      eventConfig: e,
                      actionListId: v,
                      parameterGroup: a,
                      smoothing: u,
                      restingValue: d
                    });
                  });
                });
              }

              (a.actionTypeId === g.ActionTypeConsts.GENERAL_START_ACTION || b(a.actionTypeId)) && vt({
                store: n,
                actionListId: v,
                eventId: f
              });
            });

            var p = function p(t) {
              var e = n.getState(),
                  r = e.ixSession;
              dt(d, function (e, o, c) {
                var s = i[o],
                    f = r.eventState[c],
                    l = s.action,
                    d = s.mediaQueries,
                    p = void 0 === d ? u.mediaQueryKeys : d;

                if (B(p, r.mediaQueryKey)) {
                  var v = function v() {
                    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = a({
                      store: n,
                      element: e,
                      event: s,
                      eventConfig: r,
                      nativeEvent: t,
                      eventStateKey: c
                    }, f);
                    (0, E["default"])(i, f) || n.dispatch((0, y.eventStateChanged)(c, i));
                  };

                  if (l.actionTypeId === g.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
                    var h = Array.isArray(s.config) ? s.config : [s.config];
                    h.forEach(v);
                  } else v();
                }
              });
            },
                _ = (0, h["default"])(p, tt),
                I = function I(t) {
              var e = t.target,
                  r = void 0 === e ? document : e,
                  i = t.types,
                  o = t.throttle;
              i.split(" ").filter(Boolean).forEach(function (t) {
                var e = o ? _ : p;
                r.addEventListener(t, e), n.dispatch((0, y.eventListenerAdded)(r, [t, e]));
              });
            };

            Array.isArray(o) ? o.forEach(I) : "string" == typeof o && I(e);
          }
        }({
          logic: i,
          store: t,
          events: e
        }) : console.warn("IX2 event type not configured: ".concat(n));
      }), t.getState().ixSession.eventListeners.length && function (t) {
        var e = function e() {
          ft(t);
        };

        st.forEach(function (n) {
          window.addEventListener(n, e), t.dispatch((0, y.eventListenerAdded)(window, [n, e]));
        }), e();
      }(t);
    }(n), -1 === (e = document.documentElement).className.indexOf(R) && (e.className += " ".concat(R)), n.getState().ixSession.hasDefinedMediaQueries && function (t) {
      P({
        store: t,
        select: function select(t) {
          return t.ixSession.mediaQueryKey;
        },
        onChange: function onChange() {
          ut(t), F({
            store: t,
            elementApi: m
          }), at({
            store: t,
            allowEvents: !0
          }), nt();
        }
      });
    }(n)), n.dispatch((0, y.sessionStarted)()), function (t, e) {
      !function n(r) {
        var i = t.getState(),
            o = i.ixSession,
            a = i.ixParameters;
        o.active && (t.dispatch((0, y.animationFrameChanged)(r, a)), e ? function (t, e) {
          var n = P({
            store: t,
            select: function select(t) {
              return t.ixSession.tick;
            },
            onChange: function onChange(t) {
              e(t), n();
            }
          });
        }(t, n) : requestAnimationFrame(n));
      }(window.performance.now());
    }(n, a));
  }

  function ut(t) {
    var e = t.getState().ixSession;
    e.active && (e.eventListeners.forEach(ct), t.dispatch((0, y.sessionStopped)()));
  }

  function ct(t) {
    var e = t.target,
        n = t.listenerParams;
    e.removeEventListener.apply(e, n);
  }

  var st = ["resize", "orientationchange"];

  function ft(t) {
    var e = t.getState(),
        n = e.ixSession,
        r = e.ixData,
        i = window.innerWidth;

    if (i !== n.viewportWidth) {
      var o = r.mediaQueries;
      t.dispatch((0, y.viewportWidthChanged)({
        width: i,
        mediaQueries: o
      }));
    }
  }

  var lt = function lt(t, e) {
    return (0, l["default"])((0, p["default"])(t, e), d["default"]);
  },
      dt = function dt(t, e) {
    (0, v["default"])(t, function (t, n) {
      t.forEach(function (t, r) {
        e(t, n, n + w + r);
      });
    });
  },
      pt = function pt(t) {
    var e = {
      target: t.target,
      targets: t.targets
    };
    return C({
      config: e,
      elementApi: m
    });
  };

  function vt(t) {
    var e = t.store,
        n = t.actionListId,
        r = t.eventId,
        i = e.getState(),
        o = i.ixData,
        a = i.ixSession,
        u = o.actionLists,
        c = o.events[r],
        f = u[n];

    if (f && f.useFirstGroupAsInitialState) {
      var l = (0, s["default"])(f, "actionItemGroups[0].actionItems", []),
          d = (0, s["default"])(c, "mediaQueries", o.mediaQueryKeys);
      if (!B(d, a.mediaQueryKey)) return;
      l.forEach(function (t) {
        var i,
            o = t.config,
            a = t.actionTypeId,
            u = !0 === (null == o ? void 0 : null === (i = o.target) || void 0 === i ? void 0 : i.useEventTarget) ? {
          target: c.target,
          targets: c.targets
        } : o,
            s = C({
          config: u,
          event: c,
          elementApi: m
        }),
            f = Q(a);
        s.forEach(function (i) {
          var o = f ? q(a)(i, t) : null;

          _t({
            destination: D({
              element: i,
              actionItem: t,
              elementApi: m
            }, o),
            immediate: !0,
            store: e,
            element: i,
            eventId: r,
            actionItem: t,
            actionListId: n,
            pluginInstance: o
          });
        });
      });
    }
  }

  function ht(t) {
    var e = t.store,
        n = e.getState().ixInstances;
    (0, v["default"])(n, function (t) {
      if (!t.continuous) {
        var n = t.actionListId,
            r = t.verbose;
        yt(t, e), r && e.dispatch((0, y.actionListPlaybackChanged)({
          actionListId: n,
          isPlaying: !1
        }));
      }
    });
  }

  function Et(t) {
    var e = t.store,
        n = t.eventId,
        r = t.eventTarget,
        i = t.eventStateKey,
        o = t.actionListId,
        a = e.getState(),
        u = a.ixInstances,
        c = a.ixSession.hasBoundaryNodes && r ? m.getClosestElement(r, A) : null;
    (0, v["default"])(u, function (t) {
      var r = (0, s["default"])(t, "actionItem.config.target.boundaryMode"),
          a = !i || t.eventStateKey === i;

      if (t.actionListId === o && t.eventId === n && a) {
        if (c && r && !m.elementContains(c, t.element)) return;
        yt(t, e), t.verbose && e.dispatch((0, y.actionListPlaybackChanged)({
          actionListId: o,
          isPlaying: !1
        }));
      }
    });
  }

  function gt(t) {
    var e,
        n = t.store,
        r = t.eventId,
        i = t.eventTarget,
        o = t.eventStateKey,
        a = t.actionListId,
        u = t.groupIndex,
        c = void 0 === u ? 0 : u,
        f = t.immediate,
        l = t.verbose,
        d = n.getState(),
        p = d.ixData,
        v = d.ixSession,
        h = p.events[r] || {},
        E = h.mediaQueries,
        g = void 0 === E ? p.mediaQueryKeys : E,
        _ = (0, s["default"])(p, "actionLists.".concat(a), {}),
        y = _.actionItemGroups,
        I = _.useFirstGroupAsInitialState;

    if (!y || !y.length) return !1;
    c >= y.length && (0, s["default"])(h, "config.loop") && (c = 0), 0 === c && I && c++;
    var T = (0 === c || 1 === c && I) && b(null === (e = h.action) || void 0 === e ? void 0 : e.actionTypeId) ? h.config.delay : void 0,
        O = (0, s["default"])(y, [c, "actionItems"], []);
    if (!O.length) return !1;
    if (!B(g, v.mediaQueryKey)) return !1;
    var w = v.hasBoundaryNodes && i ? m.getClosestElement(i, A) : null,
        S = k(O),
        x = !1;
    return O.forEach(function (t, e) {
      var u = t.config,
          s = t.actionTypeId,
          d = Q(s),
          p = u.target;

      if (p) {
        var v = p.boundaryMode ? w : null;
        C({
          config: u,
          event: h,
          eventTarget: i,
          elementRoot: v,
          elementApi: m
        }).forEach(function (u, p) {
          var v = d ? q(s)(u, t) : null,
              h = d ? $(s)(u, t) : null;
          x = !0;

          var E = S === e && 0 === p,
              g = X({
            element: u,
            actionItem: t
          }),
              _ = D({
            element: u,
            actionItem: t,
            elementApi: m
          }, v);

          _t({
            store: n,
            element: u,
            actionItem: t,
            eventId: r,
            eventTarget: i,
            eventStateKey: o,
            actionListId: a,
            groupIndex: c,
            isCarrier: E,
            computedStyle: g,
            destination: _,
            immediate: f,
            verbose: l,
            pluginInstance: v,
            pluginDuration: h,
            instanceDelay: T
          });
        });
      }
    }), x;
  }

  function _t(t) {
    var e = t.store,
        n = t.computedStyle,
        r = (0, u["default"])(t, ["store", "computedStyle"]),
        i = !r.continuous,
        o = r.element,
        c = r.actionItem,
        s = r.immediate,
        f = r.pluginInstance,
        l = M(),
        d = e.getState(),
        p = d.ixElements,
        v = d.ixSession,
        h = L(p, o),
        E = (p[h] || {}).refState,
        g = m.getRefType(o),
        _ = G(o, E, n, c, m, f);

    e.dispatch((0, y.instanceAdded)((0, a["default"])({
      instanceId: l,
      elementId: h,
      origin: _,
      refType: g
    }, r))), mt(document.body, "ix2-animation-started", l), s ? function (t, e) {
      var n = t.getState().ixParameters;
      t.dispatch((0, y.instanceStarted)(e, 0)), t.dispatch((0, y.animationFrameChanged)(performance.now(), n)), It(t.getState().ixInstances[e], t);
    }(e, l) : (P({
      store: e,
      select: function select(t) {
        return t.ixInstances[l];
      },
      onChange: It
    }), i && e.dispatch((0, y.instanceStarted)(l, v.tick)));
  }

  function yt(t, e) {
    mt(document.body, "ix2-animation-stopping", {
      instanceId: t.id,
      state: e.getState()
    });
    var n = t.elementId,
        r = t.actionItem,
        i = e.getState().ixElements[n] || {},
        o = i.ref;
    i.refType === S && H(o, r, m), e.dispatch((0, y.instanceRemoved)(t.id));
  }

  function mt(t, e, n) {
    var r = document.createEvent("CustomEvent");
    r.initCustomEvent(e, !0, !0, n), t.dispatchEvent(r);
  }

  function It(t, e) {
    var n = t.active,
        r = t.continuous,
        i = t.complete,
        o = t.elementId,
        a = t.actionItem,
        u = t.actionTypeId,
        c = t.renderType,
        s = t.current,
        f = t.groupIndex,
        l = t.eventId,
        d = t.eventTarget,
        p = t.eventStateKey,
        v = t.actionListId,
        h = t.isCarrier,
        E = t.styleProp,
        g = t.verbose,
        _ = t.pluginInstance,
        I = e.getState(),
        T = I.ixData,
        b = I.ixSession,
        O = (T.events[l] || {}).mediaQueries,
        w = void 0 === O ? T.mediaQueryKeys : O;

    if (B(w, b.mediaQueryKey) && (r || n || i)) {
      if (s || c === x && i) {
        e.dispatch((0, y.elementStateChanged)(o, u, s, a));
        var A = e.getState().ixElements[o] || {},
            R = A.ref,
            N = A.refType,
            C = A.refState,
            L = C && C[u];

        switch (N) {
          case S:
            j(R, C, L, l, a, E, m, c, _);
        }
      }

      if (i) {
        if (h) {
          var D = gt({
            store: e,
            eventId: l,
            eventTarget: d,
            eventStateKey: p,
            actionListId: v,
            groupIndex: f + 1,
            verbose: g
          });
          g && !D && e.dispatch((0, y.actionListPlaybackChanged)({
            actionListId: v,
            isPlaying: !1
          }));
        }

        yt(t, e);
      }
    }
  }
}, function (t, e, n) {
  var r = n(116);

  t.exports = function (t, e, n) {
    "__proto__" == e && r ? r(t, e, {
      configurable: !0,
      enumerable: !0,
      value: n,
      writable: !0
    }) : t[e] = n;
  };
}, function (t, e, n) {
  var r = n(8),
      i = function () {
    try {
      var t = r(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch (t) {}
  }();

  t.exports = i;
}, function (t, e, n) {
  var r = n(6),
      i = Object.create,
      o = function () {
    function t() {}

    return function (e) {
      if (!r(e)) return {};
      if (i) return i(e);
      t.prototype = e;
      var n = new t();
      return t.prototype = void 0, n;
    };
  }();

  t.exports = o;
}, function (t, e, n) {
  var r = n(305),
      i = n(306),
      o = r ? function (t) {
    return r.get(t);
  } : i;
  t.exports = o;
}, function (t, e, n) {
  var r = n(307),
      i = Object.prototype.hasOwnProperty;

  t.exports = function (t) {
    for (var e = t.name + "", n = r[e], o = i.call(r, e) ? n.length : 0; o--;) {
      var a = n[o],
          u = a.func;
      if (null == u || u == t) return a.name;
    }

    return e;
  };
}, function (t, e, n) {
  n(121), n(122), n(124), n(22), n(126), n(314), n(315), n(316), n(317), n(318), n(323), t.exports = n(324);
}, function (t, e, n) {
  "use strict";

  var r = n(0)(n(13));
  !function () {
    if ("undefined" != typeof window) {
      var t = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
          e = !!t && parseInt(t[1], 10) >= 16;

      if (!("objectFit" in document.documentElement.style != !1) || e) {
        var n = function n(t) {
          var e = t.parentNode;
          !function (t) {
            var e = window.getComputedStyle(t, null),
                n = e.getPropertyValue("position"),
                r = e.getPropertyValue("overflow"),
                i = e.getPropertyValue("display");
            n && "static" !== n || (t.style.position = "relative"), "hidden" !== r && (t.style.overflow = "hidden"), i && "inline" !== i || (t.style.display = "block"), 0 === t.clientHeight && (t.style.height = "100%"), -1 === t.className.indexOf("object-fit-polyfill") && (t.className += " object-fit-polyfill");
          }(e), function (t) {
            var e = window.getComputedStyle(t, null),
                n = {
              "max-width": "none",
              "max-height": "none",
              "min-width": "0px",
              "min-height": "0px",
              top: "auto",
              right: "auto",
              bottom: "auto",
              left: "auto",
              "margin-top": "0px",
              "margin-right": "0px",
              "margin-bottom": "0px",
              "margin-left": "0px"
            };

            for (var r in n) {
              e.getPropertyValue(r) !== n[r] && (t.style[r] = n[r]);
            }
          }(t), t.style.position = "absolute", t.style.height = "100%", t.style.width = "auto", t.clientWidth > e.clientWidth ? (t.style.top = "0", t.style.marginTop = "0", t.style.left = "50%", t.style.marginLeft = t.clientWidth / -2 + "px") : (t.style.width = "100%", t.style.height = "auto", t.style.left = "0", t.style.marginLeft = "0", t.style.top = "50%", t.style.marginTop = t.clientHeight / -2 + "px");
        },
            i = function i(t) {
          if (void 0 === t || t instanceof Event) t = document.querySelectorAll("[data-object-fit]");else if (t && t.nodeName) t = [t];else {
            if ("object" !== (0, r["default"])(t) || !t.length || !t[0].nodeName) return !1;
            t = t;
          }

          for (var i = 0; i < t.length; i++) {
            if (t[i].nodeName) {
              var o = t[i].nodeName.toLowerCase();

              if ("img" === o) {
                if (e) continue;
                t[i].complete ? n(t[i]) : t[i].addEventListener("load", function () {
                  n(this);
                });
              } else "video" === o ? t[i].readyState > 0 ? n(t[i]) : t[i].addEventListener("loadedmetadata", function () {
                n(this);
              }) : n(t[i]);
            }
          }

          return !0;
        };

        "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", i) : i(), window.addEventListener("resize", i), window.objectFitPolyfill = i;
      } else window.objectFitPolyfill = function () {
        return !1;
      };
    }
  }();
}, function (t, e, n) {
  "use strict";

  var r = n(4);
  r.define("brand", t.exports = function (t) {
    var e,
        n = {},
        i = document,
        o = t("html"),
        a = t("body"),
        u = ".w-falgun-badge",
        c = window.location,
        s = /PhantomJS/i.test(navigator.userAgent),
        f = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

    function l() {
      var n = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || Boolean(i.webkitFullscreenElement);
      t(e).attr("style", n ? "display: none !important;" : "");
    }

    function d() {
      var t = a.children(u),
          n = t.length && t.get(0) === e,
          i = r.env("editor");
      n ? i && t.remove() : (t.length && t.remove(), i || a.append(e));
    }

    return n.ready = function () {
      var n,
          r,
          a,
          u = o.attr("data-wf-status"),
          p = o.attr("data-wf-domain") || "";
      /\.falgun\.io$/i.test(p) && c.hostname !== p && (u = !0), u && !s && (e = e || (n = t('<a class="w-falgun-badge"></a>').attr("href", "https://falgun.com?utm_campaign=brandjs"), r = t("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/falgun-badge-icon.f67cd735e3.svg").attr("alt", "").css({
        marginRight: "8px",
        width: "16px"
      }), a = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/falgun-badge-text.6faa6a38cd.svg").attr("alt", "Made in falgun"), n.append(r, a), n[0]), d(), setTimeout(d, 500), t(i).off(f, l).on(f, l));
    }, n;
  });
}, function (t, e, n) {
  "use strict";

  var r = window.$,
      i = n(65) && r.tram;
  /*!
   * falgun._ (aka) Underscore.js 1.6.0 (custom build)
   * _.each
   * _.map
   * _.find
   * _.filter
   * _.any
   * _.contains
   * _.delay
   * _.defer
   * _.throttle (falgun)
   * _.debounce
   * _.keys
   * _.has
   * _.now
   *
   * http://underscorejs.org
   * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Underscore may be freely distributed under the MIT license.
   * @license MIT
   */

  t.exports = function () {
    var t = {
      VERSION: "1.6.0-falgun"
    },
        e = {},
        n = Array.prototype,
        r = Object.prototype,
        o = Function.prototype,
        a = (n.push, n.slice),
        u = (n.concat, r.toString, r.hasOwnProperty),
        c = n.forEach,
        s = n.map,
        f = (n.reduce, n.reduceRight, n.filter),
        l = (n.every, n.some),
        d = n.indexOf,
        p = (n.lastIndexOf, Array.isArray, Object.keys),
        v = (o.bind, t.each = t.forEach = function (n, r, i) {
      if (null == n) return n;
      if (c && n.forEach === c) n.forEach(r, i);else if (n.length === +n.length) {
        for (var o = 0, a = n.length; o < a; o++) {
          if (r.call(i, n[o], o, n) === e) return;
        }
      } else {
        var u = t.keys(n);

        for (o = 0, a = u.length; o < a; o++) {
          if (r.call(i, n[u[o]], u[o], n) === e) return;
        }
      }
      return n;
    });
    t.map = t.collect = function (t, e, n) {
      var r = [];
      return null == t ? r : s && t.map === s ? t.map(e, n) : (v(t, function (t, i, o) {
        r.push(e.call(n, t, i, o));
      }), r);
    }, t.find = t.detect = function (t, e, n) {
      var r;
      return h(t, function (t, i, o) {
        if (e.call(n, t, i, o)) return r = t, !0;
      }), r;
    }, t.filter = t.select = function (t, e, n) {
      var r = [];
      return null == t ? r : f && t.filter === f ? t.filter(e, n) : (v(t, function (t, i, o) {
        e.call(n, t, i, o) && r.push(t);
      }), r);
    };

    var h = t.some = t.any = function (n, r, i) {
      r || (r = t.identity);
      var o = !1;
      return null == n ? o : l && n.some === l ? n.some(r, i) : (v(n, function (t, n, a) {
        if (o || (o = r.call(i, t, n, a))) return e;
      }), !!o);
    };

    t.contains = t.include = function (t, e) {
      return null != t && (d && t.indexOf === d ? -1 != t.indexOf(e) : h(t, function (t) {
        return t === e;
      }));
    }, t.delay = function (t, e) {
      var n = a.call(arguments, 2);
      return setTimeout(function () {
        return t.apply(null, n);
      }, e);
    }, t.defer = function (e) {
      return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)));
    }, t.throttle = function (t) {
      var e, n, r;
      return function () {
        e || (e = !0, n = arguments, r = this, i.frame(function () {
          e = !1, t.apply(r, n);
        }));
      };
    }, t.debounce = function (e, n, r) {
      var i,
          o,
          a,
          u,
          c,
          s = function s() {
        var f = t.now() - u;
        f < n ? i = setTimeout(s, n - f) : (i = null, r || (c = e.apply(a, o), a = o = null));
      };

      return function () {
        a = this, o = arguments, u = t.now();
        var f = r && !i;
        return i || (i = setTimeout(s, n)), f && (c = e.apply(a, o), a = o = null), c;
      };
    }, t.defaults = function (e) {
      if (!t.isObject(e)) return e;

      for (var n = 1, r = arguments.length; n < r; n++) {
        var i = arguments[n];

        for (var o in i) {
          void 0 === e[o] && (e[o] = i[o]);
        }
      }

      return e;
    }, t.keys = function (e) {
      if (!t.isObject(e)) return [];
      if (p) return p(e);
      var n = [];

      for (var r in e) {
        t.has(e, r) && n.push(r);
      }

      return n;
    }, t.has = function (t, e) {
      return u.call(t, e);
    }, t.isObject = function (t) {
      return t === Object(t);
    }, t.now = Date.now || function () {
      return new Date().getTime();
    }, t.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g
    };

    var E = /(.)^/,
        g = {
      "'": "'",
      "\\": "\\",
      "\r": "r",
      "\n": "n",
      "\u2028": "u2028",
      "\u2029": "u2029"
    },
        _ = /\\|'|\r|\n|\u2028|\u2029/g,
        y = function y(t) {
      return "\\" + g[t];
    };

    return t.template = function (e, n, r) {
      !n && r && (n = r), n = t.defaults({}, n, t.templateSettings);
      var i = RegExp([(n.escape || E).source, (n.interpolate || E).source, (n.evaluate || E).source].join("|") + "|$", "g"),
          o = 0,
          a = "__p+='";
      e.replace(i, function (t, n, r, i, u) {
        return a += e.slice(o, u).replace(_, y), o = u + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : i && (a += "';\n" + i + "\n__p+='"), t;
      }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";

      try {
        var u = new Function(n.variable || "obj", "_", a);
      } catch (t) {
        throw t.source = a, t;
      }

      var c = function c(e) {
        return u.call(this, e, t);
      },
          s = n.variable || "obj";

      return c.source = "function(" + s + "){\n" + a + "}", c;
    }, t;
  }();
}, function (t, e, n) {
  "use strict";

  var r = n(4);
  r.define("edit", t.exports = function (t, e, n) {
    if (n = n || {}, (r.env("test") || r.env("frame")) && !n.fixture && !function () {
      try {
        return window.top.__Cypress__;
      } catch (t) {
        return !1;
      }
    }()) return {
      exit: 1
    };

    var i,
        o = t(window),
        a = t(document.documentElement),
        u = document.location,
        c = "hashchange",
        s = n.load || function () {
      i = !0, window.falgunEditor = !0, o.off(c, l), function (t) {
        var e = window.document.createElement("iframe");
        e.src = "https://falgun.com/site/third-party-cookie-check.html", e.style.display = "none", e.sandbox = "allow-scripts allow-same-origin";

        var n = function n(r) {
          "WF_third_party_cookies_unsupported" === r.data ? (g(e, n), t(!1)) : "WF_third_party_cookies_supported" === r.data && (g(e, n), t(!0));
        };

        e.onerror = function () {
          g(e, n), t(!1);
        }, window.addEventListener("message", n, !1), window.document.body.appendChild(e);
      }(function (e) {
        t.ajax({
          url: E("https://editor-api.falgun.com/api/editor/view"),
          data: {
            siteId: a.attr("data-wf-site")
          },
          xhrFields: {
            withCredentials: !0
          },
          dataType: "json",
          crossDomain: !0,
          success: d(e)
        });
      });
    },
        f = !1;

    try {
      f = localStorage && localStorage.getItem && localStorage.getItem("falgunEditor");
    } catch (t) {}

    function l() {
      i || /\?edit/.test(u.hash) && s();
    }

    function d(t) {
      return function (e) {
        e ? (e.thirdPartyCookiesSupported = t, p(h(e.bugReporterScriptPath), function () {
          p(h(e.scriptPath), function () {
            window.falgunEditor(e);
          });
        })) : console.error("Could not load editor data");
      };
    }

    function p(e, n) {
      t.ajax({
        type: "GET",
        url: e,
        dataType: "script",
        cache: !0
      }).then(n, v);
    }

    function v(t, e, n) {
      throw console.error("Could not load editor script: " + e), n;
    }

    function h(t) {
      return t.indexOf("//") >= 0 ? t : E("https://editor-api.falgun.com" + t);
    }

    function E(t) {
      return t.replace(/([^:])\/\//g, "$1/");
    }

    function g(t, e) {
      window.removeEventListener("message", e, !1), t.remove();
    }

    return f ? s() : u.search ? (/[?&](edit)(?:[=&?]|$)/.test(u.search) || /\?edit$/.test(u.href)) && s() : o.on(c, l).triggerHandler(c), {};
  });
}, function (t, e, n) {
  "use strict";

  var r = __webpack_provided_window_dot_jQuery,
      i = {},
      o = [],
      a = {
    reset: function reset(t, e) {
      e.__wf_intro = null;
    },
    intro: function intro(t, e) {
      e.__wf_intro || (e.__wf_intro = !0, r(e).triggerHandler(i.types.INTRO));
    },
    outro: function outro(t, e) {
      e.__wf_intro && (e.__wf_intro = null, r(e).triggerHandler(i.types.OUTRO));
    }
  };
  i.triggers = {}, i.types = {
    INTRO: "w-ix-intro.w-ix",
    OUTRO: "w-ix-outro.w-ix"
  }, i.init = function () {
    for (var t = o.length, e = 0; e < t; e++) {
      var n = o[e];
      n[0](0, n[1]);
    }

    o = [], r.extend(i.triggers, a);
  }, i.async = function () {
    for (var t in a) {
      var e = a[t];
      a.hasOwnProperty(t) && (i.triggers[t] = function (t, n) {
        o.push([e, n]);
      });
    }
  }, i.async(), t.exports = i;
}, function (t, e, n) {
  "use strict";

  var r = n(4),
      i = n(127);
  i.setEnv(r.env), r.define("ix2", t.exports = function () {
    return i;
  });
}, function (t, e, n) {
  "use strict";

  var r = n(14),
      i = n(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.setEnv = function (t) {
    t() && (0, u.observeRequests)(s);
  }, e.init = function (t) {
    f(), (0, u.startEngine)({
      store: s,
      rawData: t,
      allowEvents: !0
    });
  }, e.destroy = f, e.actions = e.store = void 0, n(128);
  var o = n(78),
      a = i(n(169)),
      u = n(114),
      c = r(n(61));
  e.actions = c;
  var s = (0, o.createStore)(a["default"]);

  function f() {
    (0, u.stopEngine)(s);
  }

  e.store = s;
}, function (t, e, n) {
  t.exports = n(129);
}, function (t, e, n) {
  n(130);
  var r = n(155);
  t.exports = r("Array", "includes");
}, function (t, e, n) {
  "use strict";

  var r = n(131),
      i = n(76).includes,
      o = n(148);
  r({
    target: "Array",
    proto: !0
  }, {
    includes: function includes(t) {
      return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  }), o("includes");
}, function (t, e, n) {
  var r = n(3),
      i = n(66).f,
      o = n(18),
      a = n(136),
      u = n(39),
      c = n(140),
      s = n(147);

  t.exports = function (t, e) {
    var n,
        f,
        l,
        d,
        p,
        v = t.target,
        h = t.global,
        E = t.stat;
    if (n = h ? r : E ? r[v] || u(v, {}) : (r[v] || {}).prototype) for (f in e) {
      if (d = e[f], l = t.noTargetGet ? (p = i(n, f)) && p.value : n[f], !s(h ? f : v + (E ? "." : "#") + f, t.forced) && void 0 !== l) {
        if (_typeof(d) == _typeof(l)) continue;
        c(d, l);
      }

      (t.sham || l && l.sham) && o(d, "sham", !0), a(n, f, d, t);
    }
  };
}, function (t, e, n) {
  "use strict";

  var r = {}.propertyIsEnumerable,
      i = Object.getOwnPropertyDescriptor,
      o = i && !r.call({
    1: 2
  }, 1);
  e.f = o ? function (t) {
    var e = i(this, t);
    return !!e && e.enumerable;
  } : r;
}, function (t, e, n) {
  var r = n(16),
      i = n(134),
      o = "".split;
  t.exports = r(function () {
    return !Object("z").propertyIsEnumerable(0);
  }) ? function (t) {
    return "String" == i(t) ? o.call(t, "") : Object(t);
  } : Object;
}, function (t, e) {
  var n = {}.toString;

  t.exports = function (t) {
    return n.call(t).slice(8, -1);
  };
}, function (t, e) {
  t.exports = function (t) {
    if (null == t) throw TypeError("Can't call method on " + t);
    return t;
  };
}, function (t, e, n) {
  var r = n(3),
      i = n(26),
      o = n(18),
      a = n(17),
      u = n(39),
      c = n(71),
      s = n(138),
      f = s.get,
      l = s.enforce,
      d = String(c).split("toString");
  i("inspectSource", function (t) {
    return c.call(t);
  }), (t.exports = function (t, e, n, i) {
    var c = !!i && !!i.unsafe,
        s = !!i && !!i.enumerable,
        f = !!i && !!i.noTargetGet;
    "function" == typeof n && ("string" != typeof e || a(n, "name") || o(n, "name", e), l(n).source = d.join("string" == typeof e ? e : "")), t !== r ? (c ? !f && t[e] && (s = !0) : delete t[e], s ? t[e] = n : o(t, e, n)) : s ? t[e] = n : u(e, n);
  })(Function.prototype, "toString", function () {
    return "function" == typeof this && f(this).source || c.call(this);
  });
}, function (t, e) {
  t.exports = !1;
}, function (t, e, n) {
  var r,
      i,
      o,
      a = n(139),
      u = n(3),
      c = n(24),
      s = n(18),
      f = n(17),
      l = n(72),
      d = n(40),
      p = u.WeakMap;

  if (a) {
    var v = new p(),
        h = v.get,
        E = v.has,
        g = v.set;
    r = function r(t, e) {
      return g.call(v, t, e), e;
    }, i = function i(t) {
      return h.call(v, t) || {};
    }, o = function o(t) {
      return E.call(v, t);
    };
  } else {
    var _ = l("state");

    d[_] = !0, r = function r(t, e) {
      return s(t, _, e), e;
    }, i = function i(t) {
      return f(t, _) ? t[_] : {};
    }, o = function o(t) {
      return f(t, _);
    };
  }

  t.exports = {
    set: r,
    get: i,
    has: o,
    enforce: function enforce(t) {
      return o(t) ? i(t) : r(t, {});
    },
    getterFor: function getterFor(t) {
      return function (e) {
        var n;
        if (!c(e) || (n = i(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
        return n;
      };
    }
  };
}, function (t, e, n) {
  var r = n(3),
      i = n(71),
      o = r.WeakMap;
  t.exports = "function" == typeof o && /native code/.test(i.call(o));
}, function (t, e, n) {
  var r = n(17),
      i = n(141),
      o = n(66),
      a = n(38);

  t.exports = function (t, e) {
    for (var n = i(e), u = a.f, c = o.f, s = 0; s < n.length; s++) {
      var f = n[s];
      r(t, f) || u(t, f, c(e, f));
    }
  };
}, function (t, e, n) {
  var r = n(74),
      i = n(143),
      o = n(146),
      a = n(25);

  t.exports = r("Reflect", "ownKeys") || function (t) {
    var e = i.f(a(t)),
        n = o.f;
    return n ? e.concat(n(t)) : e;
  };
}, function (t, e, n) {
  t.exports = n(3);
}, function (t, e, n) {
  var r = n(75),
      i = n(41).concat("length", "prototype");

  e.f = Object.getOwnPropertyNames || function (t) {
    return r(t, i);
  };
}, function (t, e, n) {
  var r = n(77),
      i = Math.min;

  t.exports = function (t) {
    return t > 0 ? i(r(t), 9007199254740991) : 0;
  };
}, function (t, e, n) {
  var r = n(77),
      i = Math.max,
      o = Math.min;

  t.exports = function (t, e) {
    var n = r(t);
    return n < 0 ? i(n + e, 0) : o(n, e);
  };
}, function (t, e) {
  e.f = Object.getOwnPropertySymbols;
}, function (t, e, n) {
  var r = n(16),
      i = /#|\.prototype\./,
      o = function o(t, e) {
    var n = u[a(t)];
    return n == s || n != c && ("function" == typeof e ? r(e) : !!e);
  },
      a = o.normalize = function (t) {
    return String(t).replace(i, ".").toLowerCase();
  },
      u = o.data = {},
      c = o.NATIVE = "N",
      s = o.POLYFILL = "P";

  t.exports = o;
}, function (t, e, n) {
  var r = n(149),
      i = n(151),
      o = n(18),
      a = r("unscopables"),
      u = Array.prototype;
  null == u[a] && o(u, a, i(null)), t.exports = function (t) {
    u[a][t] = !0;
  };
}, function (t, e, n) {
  var r = n(3),
      i = n(26),
      o = n(73),
      a = n(150),
      u = r.Symbol,
      c = i("wks");

  t.exports = function (t) {
    return c[t] || (c[t] = a && u[t] || (a ? u : o)("Symbol." + t));
  };
}, function (t, e, n) {
  var r = n(16);
  t.exports = !!Object.getOwnPropertySymbols && !r(function () {
    return !String(Symbol());
  });
}, function (t, e, n) {
  var r = n(25),
      i = n(152),
      o = n(41),
      a = n(40),
      u = n(154),
      c = n(70),
      s = n(72)("IE_PROTO"),
      f = function f() {},
      _l = function l() {
    var t,
        e = c("iframe"),
        n = o.length;

    for (e.style.display = "none", u.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), _l = t.F; n--;) {
      delete _l.prototype[o[n]];
    }

    return _l();
  };

  t.exports = Object.create || function (t, e) {
    var n;
    return null !== t ? (f.prototype = r(t), n = new f(), f.prototype = null, n[s] = t) : n = _l(), void 0 === e ? n : i(n, e);
  }, a[s] = !0;
}, function (t, e, n) {
  var r = n(15),
      i = n(38),
      o = n(25),
      a = n(153);
  t.exports = r ? Object.defineProperties : function (t, e) {
    o(t);

    for (var n, r = a(e), u = r.length, c = 0; u > c;) {
      i.f(t, n = r[c++], e[n]);
    }

    return t;
  };
}, function (t, e, n) {
  var r = n(75),
      i = n(41);

  t.exports = Object.keys || function (t) {
    return r(t, i);
  };
}, function (t, e, n) {
  var r = n(74);
  t.exports = r("document", "documentElement");
}, function (t, e, n) {
  var r = n(3),
      i = n(156),
      o = Function.call;

  t.exports = function (t, e, n) {
    return i(o, r[t].prototype[e], n);
  };
}, function (t, e, n) {
  var r = n(157);

  t.exports = function (t, e, n) {
    if (r(t), void 0 === e) return t;

    switch (n) {
      case 0:
        return function () {
          return t.call(e);
        };

      case 1:
        return function (n) {
          return t.call(e, n);
        };

      case 2:
        return function (n, r) {
          return t.call(e, n, r);
        };

      case 3:
        return function (n, r, i) {
          return t.call(e, n, r, i);
        };
    }

    return function () {
      return t.apply(e, arguments);
    };
  };
}, function (t, e) {
  t.exports = function (t) {
    if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
    return t;
  };
}, function (t, e, n) {
  "use strict";

  n.r(e);
  var r = n(80),
      i = n(161),
      o = n(162),
      a = "[object Null]",
      u = "[object Undefined]",
      c = r["default"] ? r["default"].toStringTag : void 0;

  e["default"] = function (t) {
    return null == t ? void 0 === t ? u : a : c && c in Object(t) ? Object(i["default"])(t) : Object(o["default"])(t);
  };
}, function (t, e, n) {
  "use strict";

  n.r(e);
  var r = n(160),
      i = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
      o = r["default"] || i || Function("return this")();
  e["default"] = o;
}, function (t, e, n) {
  "use strict";

  n.r(e), function (t) {
    var n = "object" == _typeof(t) && t && t.Object === Object && t;
    e["default"] = n;
  }.call(this, n(23));
}, function (t, e, n) {
  "use strict";

  n.r(e);
  var r = n(80),
      i = Object.prototype,
      o = i.hasOwnProperty,
      a = i.toString,
      u = r["default"] ? r["default"].toStringTag : void 0;

  e["default"] = function (t) {
    var e = o.call(t, u),
        n = t[u];

    try {
      t[u] = void 0;
      var r = !0;
    } catch (t) {}

    var i = a.call(t);
    return r && (e ? t[u] = n : delete t[u]), i;
  };
}, function (t, e, n) {
  "use strict";

  n.r(e);
  var r = Object.prototype.toString;

  e["default"] = function (t) {
    return r.call(t);
  };
}, function (t, e, n) {
  "use strict";

  n.r(e);
  var r = n(164),
      i = Object(r["default"])(Object.getPrototypeOf, Object);
  e["default"] = i;
}, function (t, e, n) {
  "use strict";

  n.r(e), e["default"] = function (t, e) {
    return function (n) {
      return t(e(n));
    };
  };
}, function (t, e, n) {
  "use strict";

  n.r(e), e["default"] = function (t) {
    return null != t && "object" == _typeof(t);
  };
}, function (t, e, n) {
  "use strict";

  n.r(e), function (t, r) {
    var i,
        o = n(168);
    i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : r;
    var a = Object(o["default"])(i);
    e["default"] = a;
  }.call(this, n(23), n(167)(t));
}, function (t, e) {
  t.exports = function (t) {
    if (!t.webpackPolyfill) {
      var e = Object.create(t);
      e.children || (e.children = []), Object.defineProperty(e, "loaded", {
        enumerable: !0,
        get: function get() {
          return e.l;
        }
      }), Object.defineProperty(e, "id", {
        enumerable: !0,
        get: function get() {
          return e.i;
        }
      }), Object.defineProperty(e, "exports", {
        enumerable: !0
      }), e.webpackPolyfill = 1;
    }

    return e;
  };
}, function (t, e, n) {
  "use strict";

  function r(t) {
    var e,
        n = t.Symbol;
    return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable", e;
  }

  n.r(e), n.d(e, "default", function () {
    return r;
  });
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e["default"] = void 0;
  var r = n(78),
      i = n(170),
      o = n(176),
      a = n(177),
      u = n(10),
      c = n(262),
      s = n(263),
      f = u.IX2ElementsReducer.ixElements,
      l = (0, r.combineReducers)({
    ixData: i.ixData,
    ixRequest: o.ixRequest,
    ixSession: a.ixSession,
    ixElements: f,
    ixInstances: c.ixInstances,
    ixParameters: s.ixParameters
  });
  e["default"] = l;
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ixData = void 0;
  var r = n(2).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;

  e.ixData = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
        e = arguments.length > 1 ? arguments[1] : void 0;

    switch (e.type) {
      case r:
        return e.payload.ixData || Object.freeze({});

      default:
        return t;
    }
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.QuickEffectDirectionConsts = e.QuickEffectIds = e.EventLimitAffectedElements = e.EventContinuousMouseAxes = e.EventBasedOn = e.EventAppliesTo = e.EventTypeConsts = void 0;
  e.EventTypeConsts = {
    falgunnavbar_OPEN: "falgunnavbar_OPEN",
    falgunnavbar_CLOSE: "falgunnavbar_CLOSE",
    TAB_ACTIVE: "TAB_ACTIVE",
    TAB_INACTIVE: "TAB_INACTIVE",
    SLIDER_ACTIVE: "SLIDER_ACTIVE",
    SLIDER_INACTIVE: "SLIDER_INACTIVE",
    DROPDOWN_OPEN: "DROPDOWN_OPEN",
    DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
    MOUSE_CLICK: "MOUSE_CLICK",
    MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
    MOUSE_DOWN: "MOUSE_DOWN",
    MOUSE_UP: "MOUSE_UP",
    MOUSE_OVER: "MOUSE_OVER",
    MOUSE_OUT: "MOUSE_OUT",
    MOUSE_MOVE: "MOUSE_MOVE",
    MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
    SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
    SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
    SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
    ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
    ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
    PAGE_START: "PAGE_START",
    PAGE_FINISH: "PAGE_FINISH",
    PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
    PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
    PAGE_SCROLL: "PAGE_SCROLL"
  };
  e.EventAppliesTo = {
    ELEMENT: "ELEMENT",
    CLASS: "CLASS",
    PAGE: "PAGE"
  };
  e.EventBasedOn = {
    ELEMENT: "ELEMENT",
    VIEWPORT: "VIEWPORT"
  };
  e.EventContinuousMouseAxes = {
    X_AXIS: "X_AXIS",
    Y_AXIS: "Y_AXIS"
  };
  e.EventLimitAffectedElements = {
    CHILDREN: "CHILDREN",
    SIBLINGS: "SIBLINGS",
    IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
  };
  e.QuickEffectIds = {
    FADE_EFFECT: "FADE_EFFECT",
    SLIDE_EFFECT: "SLIDE_EFFECT",
    GROW_EFFECT: "GROW_EFFECT",
    SHRINK_EFFECT: "SHRINK_EFFECT",
    SPIN_EFFECT: "SPIN_EFFECT",
    FLY_EFFECT: "FLY_EFFECT",
    POP_EFFECT: "POP_EFFECT",
    FLIP_EFFECT: "FLIP_EFFECT",
    JIGGLE_EFFECT: "JIGGLE_EFFECT",
    PULSE_EFFECT: "PULSE_EFFECT",
    DROP_EFFECT: "DROP_EFFECT",
    BLINK_EFFECT: "BLINK_EFFECT",
    BOUNCE_EFFECT: "BOUNCE_EFFECT",
    FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
    FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
    RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
    JELLO_EFFECT: "JELLO_EFFECT",
    GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
    SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
    PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
  };
  e.QuickEffectDirectionConsts = {
    LEFT: "LEFT",
    RIGHT: "RIGHT",
    BOTTOM: "BOTTOM",
    TOP: "TOP",
    BOTTOM_LEFT: "BOTTOM_LEFT",
    BOTTOM_RIGHT: "BOTTOM_RIGHT",
    TOP_RIGHT: "TOP_RIGHT",
    TOP_LEFT: "TOP_LEFT",
    CLOCKWISE: "CLOCKWISE",
    COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ActionAppliesTo = e.ActionTypeConsts = void 0;
  e.ActionTypeConsts = {
    TRANSFORM_MOVE: "TRANSFORM_MOVE",
    TRANSFORM_SCALE: "TRANSFORM_SCALE",
    TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
    TRANSFORM_SKEW: "TRANSFORM_SKEW",
    STYLE_OPACITY: "STYLE_OPACITY",
    STYLE_SIZE: "STYLE_SIZE",
    STYLE_FILTER: "STYLE_FILTER",
    STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
    STYLE_BORDER: "STYLE_BORDER",
    STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
    PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
    GENERAL_DISPLAY: "GENERAL_DISPLAY",
    GENERAL_START_ACTION: "GENERAL_START_ACTION",
    GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
    GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
    GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
    GENERAL_LOOP: "GENERAL_LOOP",
    STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
  };
  e.ActionAppliesTo = {
    ELEMENT: "ELEMENT",
    ELEMENT_CLASS: "ELEMENT_CLASS",
    TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.InteractionTypeConsts = void 0;
  e.InteractionTypeConsts = {
    MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
    MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
    MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
    SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
    SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
    MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
    PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
    PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
    PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
    falgunnavbar_INTERACTION: "falgunnavbar_INTERACTION",
    DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
    ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
    TAB_INTERACTION: "TAB_INTERACTION",
    SLIDER_INTERACTION: "SLIDER_INTERACTION"
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.IX2_TEST_FRAME_RENDERED = e.IX2_MEDIA_QUERIES_DEFINED = e.IX2_VIEWPORT_WIDTH_CHANGED = e.IX2_ACTION_LIST_PLAYBACK_CHANGED = e.IX2_ELEMENT_STATE_CHANGED = e.IX2_INSTANCE_REMOVED = e.IX2_INSTANCE_STARTED = e.IX2_INSTANCE_ADDED = e.IX2_PARAMETER_CHANGED = e.IX2_ANIMATION_FRAME_CHANGED = e.IX2_EVENT_STATE_CHANGED = e.IX2_EVENT_LISTENER_ADDED = e.IX2_CLEAR_REQUESTED = e.IX2_STOP_REQUESTED = e.IX2_PLAYBACK_REQUESTED = e.IX2_PREVIEW_REQUESTED = e.IX2_SESSION_STOPPED = e.IX2_SESSION_STARTED = e.IX2_SESSION_INITIALIZED = e.IX2_RAW_DATA_IMPORTED = void 0;
  e.IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
  e.IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
  e.IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
  e.IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
  e.IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
  e.IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
  e.IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
  e.IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
  e.IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
  e.IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
  e.IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
  e.IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
  e.IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
  e.IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
  e.IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
  e.IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
  e.IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
  e.IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
  e.IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
  e.IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED";
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.RENDER_PLUGIN = e.RENDER_STYLE = e.RENDER_GENERAL = e.RENDER_TRANSFORM = e.ABSTRACT_NODE = e.PLAIN_OBJECT = e.HTML_ELEMENT = e.PRESERVE_3D = e.PARENT = e.SIBLINGS = e.IMMEDIATE_CHILDREN = e.CHILDREN = e.BAR_DELIMITER = e.COLON_DELIMITER = e.COMMA_DELIMITER = e.AUTO = e.WILL_CHANGE = e.FLEX = e.DISPLAY = e.COLOR = e.BORDER_COLOR = e.BACKGROUND = e.BACKGROUND_COLOR = e.HEIGHT = e.WIDTH = e.FILTER = e.OPACITY = e.SKEW_Y = e.SKEW_X = e.SKEW = e.ROTATE_Z = e.ROTATE_Y = e.ROTATE_X = e.SCALE_3D = e.SCALE_Z = e.SCALE_Y = e.SCALE_X = e.TRANSLATE_3D = e.TRANSLATE_Z = e.TRANSLATE_Y = e.TRANSLATE_X = e.TRANSFORM = e.CONFIG_UNIT = e.CONFIG_Z_UNIT = e.CONFIG_Y_UNIT = e.CONFIG_X_UNIT = e.CONFIG_VALUE = e.CONFIG_Z_VALUE = e.CONFIG_Y_VALUE = e.CONFIG_X_VALUE = e.BOUNDARY_SELECTOR = e.W_MOD_IX = e.W_MOD_JS = e.WF_PAGE = e.IX2_ID_DELIMITER = void 0;
  e.IX2_ID_DELIMITER = "|";
  e.WF_PAGE = "data-wf-page";
  e.W_MOD_JS = "w-mod-js";
  e.W_MOD_IX = "w-mod-ix";
  e.BOUNDARY_SELECTOR = ".w-dyn-item";
  e.CONFIG_X_VALUE = "xValue";
  e.CONFIG_Y_VALUE = "yValue";
  e.CONFIG_Z_VALUE = "zValue";
  e.CONFIG_VALUE = "value";
  e.CONFIG_X_UNIT = "xUnit";
  e.CONFIG_Y_UNIT = "yUnit";
  e.CONFIG_Z_UNIT = "zUnit";
  e.CONFIG_UNIT = "unit";
  e.TRANSFORM = "transform";
  e.TRANSLATE_X = "translateX";
  e.TRANSLATE_Y = "translateY";
  e.TRANSLATE_Z = "translateZ";
  e.TRANSLATE_3D = "translate3d";
  e.SCALE_X = "scaleX";
  e.SCALE_Y = "scaleY";
  e.SCALE_Z = "scaleZ";
  e.SCALE_3D = "scale3d";
  e.ROTATE_X = "rotateX";
  e.ROTATE_Y = "rotateY";
  e.ROTATE_Z = "rotateZ";
  e.SKEW = "skew";
  e.SKEW_X = "skewX";
  e.SKEW_Y = "skewY";
  e.OPACITY = "opacity";
  e.FILTER = "filter";
  e.WIDTH = "width";
  e.HEIGHT = "height";
  e.BACKGROUND_COLOR = "backgroundColor";
  e.BACKGROUND = "background";
  e.BORDER_COLOR = "borderColor";
  e.COLOR = "color";
  e.DISPLAY = "display";
  e.FLEX = "flex";
  e.WILL_CHANGE = "willChange";
  e.AUTO = "AUTO";
  e.COMMA_DELIMITER = ",";
  e.COLON_DELIMITER = ":";
  e.BAR_DELIMITER = "|";
  e.CHILDREN = "CHILDREN";
  e.IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
  e.SIBLINGS = "SIBLINGS";
  e.PARENT = "PARENT";
  e.PRESERVE_3D = "preserve-3d";
  e.HTML_ELEMENT = "HTML_ELEMENT";
  e.PLAIN_OBJECT = "PLAIN_OBJECT";
  e.ABSTRACT_NODE = "ABSTRACT_NODE";
  e.RENDER_TRANSFORM = "RENDER_TRANSFORM";
  e.RENDER_GENERAL = "RENDER_GENERAL";
  e.RENDER_STYLE = "RENDER_STYLE";
  e.RENDER_PLUGIN = "RENDER_PLUGIN";
}, function (t, e, n) {
  "use strict";

  var r,
      i = n(0)(n(27)),
      o = n(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ixRequest = void 0;
  var a = o(n(28)),
      u = n(2),
      c = n(19),
      s = u.IX2EngineActionTypes,
      f = s.IX2_PREVIEW_REQUESTED,
      l = s.IX2_PLAYBACK_REQUESTED,
      d = s.IX2_STOP_REQUESTED,
      p = s.IX2_CLEAR_REQUESTED,
      v = {
    preview: {},
    playback: {},
    stop: {},
    clear: {}
  },
      h = Object.create(null, (r = {}, (0, i["default"])(r, f, {
    value: "preview"
  }), (0, i["default"])(r, l, {
    value: "playback"
  }), (0, i["default"])(r, d, {
    value: "stop"
  }), (0, i["default"])(r, p, {
    value: "clear"
  }), r));

  e.ixRequest = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
        e = arguments.length > 1 ? arguments[1] : void 0;

    if (e.type in h) {
      var n = [h[e.type]];
      return (0, c.setIn)(t, [n], (0, a["default"])({}, e.payload));
    }

    return t;
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ixSession = void 0;
  var r = n(2),
      i = n(19),
      o = r.IX2EngineActionTypes,
      a = o.IX2_SESSION_INITIALIZED,
      u = o.IX2_SESSION_STARTED,
      c = o.IX2_TEST_FRAME_RENDERED,
      s = o.IX2_SESSION_STOPPED,
      f = o.IX2_EVENT_LISTENER_ADDED,
      l = o.IX2_EVENT_STATE_CHANGED,
      d = o.IX2_ANIMATION_FRAME_CHANGED,
      p = o.IX2_ACTION_LIST_PLAYBACK_CHANGED,
      v = o.IX2_VIEWPORT_WIDTH_CHANGED,
      h = o.IX2_MEDIA_QUERIES_DEFINED,
      E = {
    active: !1,
    tick: 0,
    eventListeners: [],
    eventState: {},
    playbackState: {},
    viewportWidth: 0,
    mediaQueryKey: null,
    hasBoundaryNodes: !1,
    hasDefinedMediaQueries: !1
  };

  e.ixSession = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
        e = arguments.length > 1 ? arguments[1] : void 0;

    switch (e.type) {
      case a:
        var n = e.payload.hasBoundaryNodes;
        return (0, i.set)(t, "hasBoundaryNodes", n);

      case u:
        return (0, i.set)(t, "active", !0);

      case c:
        var r = e.payload.step,
            o = void 0 === r ? 20 : r;
        return (0, i.set)(t, "tick", t.tick + o);

      case s:
        return E;

      case d:
        var g = e.payload.now;
        return (0, i.set)(t, "tick", g);

      case f:
        var _ = (0, i.addLast)(t.eventListeners, e.payload);

        return (0, i.set)(t, "eventListeners", _);

      case l:
        var y = e.payload,
            m = y.stateKey,
            I = y.newState;
        return (0, i.setIn)(t, ["eventState", m], I);

      case p:
        var T = e.payload,
            b = T.actionListId,
            O = T.isPlaying;
        return (0, i.setIn)(t, ["playbackState", b], O);

      case v:
        for (var w = e.payload, A = w.width, S = w.mediaQueries, x = S.length, R = null, N = 0; N < x; N++) {
          var C = S[N],
              L = C.key,
              D = C.min,
              P = C.max;

          if (A >= D && A <= P) {
            R = L;
            break;
          }
        }

        return (0, i.merge)(t, {
          viewportWidth: A,
          mediaQueryKey: R
        });

      case h:
        return (0, i.set)(t, "hasDefinedMediaQueries", !0);

      default:
        return t;
    }
  };
}, function (t, e, n) {
  var r = n(179),
      i = n(231),
      o = n(101);

  t.exports = function (t) {
    var e = i(t);
    return 1 == e.length && e[0][2] ? o(e[0][0], e[0][1]) : function (n) {
      return n === t || r(n, t, e);
    };
  };
}, function (t, e, n) {
  var r = n(87),
      i = n(91),
      o = 1,
      a = 2;

  t.exports = function (t, e, n, u) {
    var c = n.length,
        s = c,
        f = !u;
    if (null == t) return !s;

    for (t = Object(t); c--;) {
      var l = n[c];
      if (f && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1;
    }

    for (; ++c < s;) {
      var d = (l = n[c])[0],
          p = t[d],
          v = l[1];

      if (f && l[2]) {
        if (void 0 === p && !(d in t)) return !1;
      } else {
        var h = new r();
        if (u) var E = u(p, v, d, t, e, h);
        if (!(void 0 === E ? i(v, p, o | a, u, h) : E)) return !1;
      }
    }

    return !0;
  };
}, function (t, e) {
  t.exports = function () {
    this.__data__ = [], this.size = 0;
  };
}, function (t, e, n) {
  var r = n(30),
      i = Array.prototype.splice;

  t.exports = function (t) {
    var e = this.__data__,
        n = r(e, t);
    return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0));
  };
}, function (t, e, n) {
  var r = n(30);

  t.exports = function (t) {
    var e = this.__data__,
        n = r(e, t);
    return n < 0 ? void 0 : e[n][1];
  };
}, function (t, e, n) {
  var r = n(30);

  t.exports = function (t) {
    return r(this.__data__, t) > -1;
  };
}, function (t, e, n) {
  var r = n(30);

  t.exports = function (t, e) {
    var n = this.__data__,
        i = r(n, t);
    return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this;
  };
}, function (t, e, n) {
  var r = n(29);

  t.exports = function () {
    this.__data__ = new r(), this.size = 0;
  };
}, function (t, e) {
  t.exports = function (t) {
    var e = this.__data__,
        n = e["delete"](t);
    return this.size = e.size, n;
  };
}, function (t, e) {
  t.exports = function (t) {
    return this.__data__.get(t);
  };
}, function (t, e) {
  t.exports = function (t) {
    return this.__data__.has(t);
  };
}, function (t, e, n) {
  var r = n(29),
      i = n(46),
      o = n(47),
      a = 200;

  t.exports = function (t, e) {
    var n = this.__data__;

    if (n instanceof r) {
      var u = n.__data__;
      if (!i || u.length < a - 1) return u.push([t, e]), this.size = ++n.size, this;
      n = this.__data__ = new o(u);
    }

    return n.set(t, e), this.size = n.size, this;
  };
}, function (t, e, n) {
  var r = n(88),
      i = n(193),
      o = n(6),
      a = n(90),
      u = /^\[object .+?Constructor\]$/,
      c = Function.prototype,
      s = Object.prototype,
      f = c.toString,
      l = s.hasOwnProperty,
      d = RegExp("^" + f.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

  t.exports = function (t) {
    return !(!o(t) || i(t)) && (r(t) ? d : u).test(a(t));
  };
}, function (t, e, n) {
  var r = n(20),
      i = Object.prototype,
      o = i.hasOwnProperty,
      a = i.toString,
      u = r ? r.toStringTag : void 0;

  t.exports = function (t) {
    var e = o.call(t, u),
        n = t[u];

    try {
      t[u] = void 0;
      var r = !0;
    } catch (t) {}

    var i = a.call(t);
    return r && (e ? t[u] = n : delete t[u]), i;
  };
}, function (t, e) {
  var n = Object.prototype.toString;

  t.exports = function (t) {
    return n.call(t);
  };
}, function (t, e, n) {
  var r,
      i = n(194),
      o = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";

  t.exports = function (t) {
    return !!o && o in t;
  };
}, function (t, e, n) {
  var r = n(5)["__core-js_shared__"];
  t.exports = r;
}, function (t, e) {
  t.exports = function (t, e) {
    return null == t ? void 0 : t[e];
  };
}, function (t, e, n) {
  var r = n(197),
      i = n(29),
      o = n(46);

  t.exports = function () {
    this.size = 0, this.__data__ = {
      hash: new r(),
      map: new (o || i)(),
      string: new r()
    };
  };
}, function (t, e, n) {
  var r = n(198),
      i = n(199),
      o = n(200),
      a = n(201),
      u = n(202);

  function c(t) {
    var e = -1,
        n = null == t ? 0 : t.length;

    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }

  c.prototype.clear = r, c.prototype["delete"] = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c;
}, function (t, e, n) {
  var r = n(31);

  t.exports = function () {
    this.__data__ = r ? r(null) : {}, this.size = 0;
  };
}, function (t, e) {
  t.exports = function (t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e;
  };
}, function (t, e, n) {
  var r = n(31),
      i = "__lodash_hash_undefined__",
      o = Object.prototype.hasOwnProperty;

  t.exports = function (t) {
    var e = this.__data__;

    if (r) {
      var n = e[t];
      return n === i ? void 0 : n;
    }

    return o.call(e, t) ? e[t] : void 0;
  };
}, function (t, e, n) {
  var r = n(31),
      i = Object.prototype.hasOwnProperty;

  t.exports = function (t) {
    var e = this.__data__;
    return r ? void 0 !== e[t] : i.call(e, t);
  };
}, function (t, e, n) {
  var r = n(31),
      i = "__lodash_hash_undefined__";

  t.exports = function (t, e) {
    var n = this.__data__;
    return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? i : e, this;
  };
}, function (t, e, n) {
  var r = n(32);

  t.exports = function (t) {
    var e = r(this, t)["delete"](t);
    return this.size -= e ? 1 : 0, e;
  };
}, function (t, e) {
  t.exports = function (t) {
    var e = _typeof(t);

    return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
  };
}, function (t, e, n) {
  var r = n(32);

  t.exports = function (t) {
    return r(this, t).get(t);
  };
}, function (t, e, n) {
  var r = n(32);

  t.exports = function (t) {
    return r(this, t).has(t);
  };
}, function (t, e, n) {
  var r = n(32);

  t.exports = function (t, e) {
    var n = r(this, t),
        i = n.size;
    return n.set(t, e), this.size += n.size == i ? 0 : 1, this;
  };
}, function (t, e, n) {
  var r = n(87),
      i = n(92),
      o = n(214),
      a = n(218),
      u = n(55),
      c = n(1),
      s = n(49),
      f = n(51),
      l = 1,
      d = "[object Arguments]",
      p = "[object Array]",
      v = "[object Object]",
      h = Object.prototype.hasOwnProperty;

  t.exports = function (t, e, n, E, g, _) {
    var y = c(t),
        m = c(e),
        I = y ? p : u(t),
        T = m ? p : u(e),
        b = (I = I == d ? v : I) == v,
        O = (T = T == d ? v : T) == v,
        w = I == T;

    if (w && s(t)) {
      if (!s(e)) return !1;
      y = !0, b = !1;
    }

    if (w && !b) return _ || (_ = new r()), y || f(t) ? i(t, e, n, E, g, _) : o(t, e, I, n, E, g, _);

    if (!(n & l)) {
      var A = b && h.call(t, "__wrapped__"),
          S = O && h.call(e, "__wrapped__");

      if (A || S) {
        var x = A ? t.value() : t,
            R = S ? e.value() : e;
        return _ || (_ = new r()), g(x, R, n, E, _);
      }
    }

    return !!w && (_ || (_ = new r()), a(t, e, n, E, g, _));
  };
}, function (t, e, n) {
  var r = n(47),
      i = n(210),
      o = n(211);

  function a(t) {
    var e = -1,
        n = null == t ? 0 : t.length;

    for (this.__data__ = new r(); ++e < n;) {
      this.add(t[e]);
    }
  }

  a.prototype.add = a.prototype.push = i, a.prototype.has = o, t.exports = a;
}, function (t, e) {
  var n = "__lodash_hash_undefined__";

  t.exports = function (t) {
    return this.__data__.set(t, n), this;
  };
}, function (t, e) {
  t.exports = function (t) {
    return this.__data__.has(t);
  };
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = null == t ? 0 : t.length; ++n < r;) {
      if (e(t[n], n, t)) return !0;
    }

    return !1;
  };
}, function (t, e) {
  t.exports = function (t, e) {
    return t.has(e);
  };
}, function (t, e, n) {
  var r = n(20),
      i = n(215),
      o = n(45),
      a = n(92),
      u = n(216),
      c = n(217),
      s = 1,
      f = 2,
      l = "[object Boolean]",
      d = "[object Date]",
      p = "[object Error]",
      v = "[object Map]",
      h = "[object Number]",
      E = "[object RegExp]",
      g = "[object Set]",
      _ = "[object String]",
      y = "[object Symbol]",
      m = "[object ArrayBuffer]",
      I = "[object DataView]",
      T = r ? r.prototype : void 0,
      b = T ? T.valueOf : void 0;

  t.exports = function (t, e, n, r, T, O, w) {
    switch (n) {
      case I:
        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
        t = t.buffer, e = e.buffer;

      case m:
        return !(t.byteLength != e.byteLength || !O(new i(t), new i(e)));

      case l:
      case d:
      case h:
        return o(+t, +e);

      case p:
        return t.name == e.name && t.message == e.message;

      case E:
      case _:
        return t == e + "";

      case v:
        var A = u;

      case g:
        var S = r & s;
        if (A || (A = c), t.size != e.size && !S) return !1;
        var x = w.get(t);
        if (x) return x == e;
        r |= f, w.set(t, e);
        var R = a(A(t), A(e), r, T, O, w);
        return w["delete"](t), R;

      case y:
        if (b) return b.call(t) == b.call(e);
    }

    return !1;
  };
}, function (t, e, n) {
  var r = n(5).Uint8Array;
  t.exports = r;
}, function (t, e) {
  t.exports = function (t) {
    var e = -1,
        n = Array(t.size);
    return t.forEach(function (t, r) {
      n[++e] = [r, t];
    }), n;
  };
}, function (t, e) {
  t.exports = function (t) {
    var e = -1,
        n = Array(t.size);
    return t.forEach(function (t) {
      n[++e] = t;
    }), n;
  };
}, function (t, e, n) {
  var r = n(219),
      i = 1,
      o = Object.prototype.hasOwnProperty;

  t.exports = function (t, e, n, a, u, c) {
    var s = n & i,
        f = r(t),
        l = f.length;
    if (l != r(e).length && !s) return !1;

    for (var d = l; d--;) {
      var p = f[d];
      if (!(s ? p in e : o.call(e, p))) return !1;
    }

    var v = c.get(t),
        h = c.get(e);
    if (v && h) return v == e && h == t;
    var E = !0;
    c.set(t, e), c.set(e, t);

    for (var g = s; ++d < l;) {
      var _ = t[p = f[d]],
          y = e[p];
      if (a) var m = s ? a(y, _, p, e, t, c) : a(_, y, p, t, e, c);

      if (!(void 0 === m ? _ === y || u(_, y, n, a, c) : m)) {
        E = !1;
        break;
      }

      g || (g = "constructor" == p);
    }

    if (E && !g) {
      var I = t.constructor,
          T = e.constructor;
      I != T && "constructor" in t && "constructor" in e && !("function" == typeof I && I instanceof I && "function" == typeof T && T instanceof T) && (E = !1);
    }

    return c["delete"](t), c["delete"](e), E;
  };
}, function (t, e, n) {
  var r = n(93),
      i = n(94),
      o = n(33);

  t.exports = function (t) {
    return r(t, o, i);
  };
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
      var a = t[n];
      e(a, n, t) && (o[i++] = a);
    }

    return o;
  };
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = Array(t); ++n < t;) {
      r[n] = e(n);
    }

    return r;
  };
}, function (t, e, n) {
  var r = n(11),
      i = n(9),
      o = "[object Arguments]";

  t.exports = function (t) {
    return i(t) && r(t) == o;
  };
}, function (t, e) {
  t.exports = function () {
    return !1;
  };
}, function (t, e, n) {
  var r = n(11),
      i = n(52),
      o = n(9),
      a = {};
  a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function (t) {
    return o(t) && i(t.length) && !!a[r(t)];
  };
}, function (t, e) {
  t.exports = function (t) {
    return function (e) {
      return t(e);
    };
  };
}, function (t, e, n) {
  (function (t) {
    var r = n(89),
        i = e && !e.nodeType && e,
        o = i && "object" == _typeof(t) && t && !t.nodeType && t,
        a = o && o.exports === i && r.process,
        u = function () {
      try {
        var t = o && o.require && o.require("util").types;

        return t || a && a.binding && a.binding("util");
      } catch (t) {}
    }();

    t.exports = u;
  }).call(this, n(97)(t));
}, function (t, e, n) {
  var r = n(98)(Object.keys, Object);
  t.exports = r;
}, function (t, e, n) {
  var r = n(8)(n(5), "DataView");
  t.exports = r;
}, function (t, e, n) {
  var r = n(8)(n(5), "Promise");
  t.exports = r;
}, function (t, e, n) {
  var r = n(8)(n(5), "Set");
  t.exports = r;
}, function (t, e, n) {
  var r = n(100),
      i = n(33);

  t.exports = function (t) {
    for (var e = i(t), n = e.length; n--;) {
      var o = e[n],
          a = t[o];
      e[n] = [o, a, r(a)];
    }

    return e;
  };
}, function (t, e, n) {
  var r = n(91),
      i = n(56),
      o = n(238),
      a = n(58),
      u = n(100),
      c = n(101),
      s = n(21),
      f = 1,
      l = 2;

  t.exports = function (t, e) {
    return a(t) && u(e) ? c(s(t), e) : function (n) {
      var a = i(n, t);
      return void 0 === a && a === e ? o(n, t) : r(e, a, f | l);
    };
  };
}, function (t, e, n) {
  var r = n(234),
      i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      o = /\\(\\)?/g,
      a = r(function (t) {
    var e = [];
    return 46 === t.charCodeAt(0) && e.push(""), t.replace(i, function (t, n, r, i) {
      e.push(r ? i.replace(o, "$1") : n || t);
    }), e;
  });
  t.exports = a;
}, function (t, e, n) {
  var r = n(235),
      i = 500;

  t.exports = function (t) {
    var e = r(t, function (t) {
      return n.size === i && n.clear(), t;
    }),
        n = e.cache;
    return e;
  };
}, function (t, e, n) {
  var r = n(47),
      i = "Expected a function";

  function o(t, e) {
    if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i);

    var n = function n() {
      var r = arguments,
          i = e ? e.apply(this, r) : r[0],
          o = n.cache;
      if (o.has(i)) return o.get(i);
      var a = t.apply(this, r);
      return n.cache = o.set(i, a) || o, a;
    };

    return n.cache = new (o.Cache || r)(), n;
  }

  o.Cache = r, t.exports = o;
}, function (t, e, n) {
  var r = n(237);

  t.exports = function (t) {
    return null == t ? "" : r(t);
  };
}, function (t, e, n) {
  var r = n(20),
      i = n(102),
      o = n(1),
      a = n(36),
      u = 1 / 0,
      c = r ? r.prototype : void 0,
      s = c ? c.toString : void 0;

  t.exports = function t(e) {
    if ("string" == typeof e) return e;
    if (o(e)) return i(e, t) + "";
    if (a(e)) return s ? s.call(e) : "";
    var n = e + "";
    return "0" == n && 1 / e == -u ? "-0" : n;
  };
}, function (t, e, n) {
  var r = n(239),
      i = n(240);

  t.exports = function (t, e) {
    return null != t && i(t, e, r);
  };
}, function (t, e) {
  t.exports = function (t, e) {
    return null != t && e in Object(t);
  };
}, function (t, e, n) {
  var r = n(35),
      i = n(34),
      o = n(1),
      a = n(50),
      u = n(52),
      c = n(21);

  t.exports = function (t, e, n) {
    for (var s = -1, f = (e = r(e, t)).length, l = !1; ++s < f;) {
      var d = c(e[s]);
      if (!(l = null != t && n(t, d))) break;
      t = t[d];
    }

    return l || ++s != f ? l : !!(f = null == t ? 0 : t.length) && u(f) && a(d, f) && (o(t) || i(t));
  };
}, function (t, e, n) {
  var r = n(103),
      i = n(242),
      o = n(58),
      a = n(21);

  t.exports = function (t) {
    return o(t) ? r(a(t)) : i(t);
  };
}, function (t, e, n) {
  var r = n(57);

  t.exports = function (t) {
    return function (e) {
      return r(e, t);
    };
  };
}, function (t, e, n) {
  var r = n(104),
      i = n(7),
      o = n(105),
      a = Math.max;

  t.exports = function (t, e, n) {
    var u = null == t ? 0 : t.length;
    if (!u) return -1;
    var c = null == n ? 0 : o(n);
    return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c);
  };
}, function (t, e, n) {
  var r = n(60),
      i = 1 / 0,
      o = 1.7976931348623157e308;

  t.exports = function (t) {
    return t ? (t = r(t)) === i || t === -i ? (t < 0 ? -1 : 1) * o : t == t ? t : 0 : 0 === t ? t : 0;
  };
}, function (t, e) {
  t.exports = function (t) {
    if (Array.isArray(t)) {
      for (var e = 0, n = new Array(t.length); e < t.length; e++) {
        n[e] = t[e];
      }

      return n;
    }
  };
}, function (t, e) {
  t.exports = function (t) {
    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
  };
}, function (t, e) {
  t.exports = function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.createElementState = I, e.mergeActionState = T, e.ixElements = void 0;
  var r = n(19),
      i = n(2),
      o = i.IX2EngineConstants,
      a = (o.HTML_ELEMENT, o.PLAIN_OBJECT),
      u = (o.ABSTRACT_NODE, o.CONFIG_X_VALUE),
      c = o.CONFIG_Y_VALUE,
      s = o.CONFIG_Z_VALUE,
      f = o.CONFIG_VALUE,
      l = o.CONFIG_X_UNIT,
      d = o.CONFIG_Y_UNIT,
      p = o.CONFIG_Z_UNIT,
      v = o.CONFIG_UNIT,
      h = i.IX2EngineActionTypes,
      E = h.IX2_SESSION_STOPPED,
      g = h.IX2_INSTANCE_ADDED,
      _ = h.IX2_ELEMENT_STATE_CHANGED,
      y = {},
      m = "refState";

  function I(t, e, n, i, o) {
    var u = n === a ? (0, r.getIn)(o, ["config", "target", "objectId"]) : null;
    return (0, r.mergeIn)(t, [i], {
      id: i,
      ref: e,
      refId: u,
      refType: n
    });
  }

  function T(t, e, n, i, o) {
    var a = function (t) {
      var e = t.config;
      return b.reduce(function (t, n) {
        var r = n[0],
            i = n[1],
            o = e[r],
            a = e[i];
        return null != o && null != a && (t[i] = a), t;
      }, {});
    }(o),
        u = [e, m, n];

    return (0, r.mergeIn)(t, u, i, a);
  }

  e.ixElements = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};

    switch (e.type) {
      case E:
        return y;

      case g:
        var n = e.payload,
            i = n.elementId,
            o = n.element,
            a = n.origin,
            u = n.actionItem,
            c = n.refType,
            s = u.actionTypeId,
            f = t;
        return (0, r.getIn)(f, [i, o]) !== o && (f = I(f, o, c, i, u)), T(f, i, s, a, u);

      case _:
        var l = e.payload;
        return T(t, l.elementId, l.actionTypeId, l.current, l.actionItem);

      default:
        return t;
    }
  };

  var b = [[u, l], [c, d], [s, p], [f, v]];
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginOrigin = e.getPluginDuration = e.getPluginConfig = void 0;

  e.getPluginConfig = function (t) {
    return t.value;
  };

  e.getPluginDuration = function (t, e) {
    if ("auto" !== e.config.duration) return null;
    var n = parseFloat(t.getAttribute("data-duration"));
    return n > 0 ? 1e3 * n : 1e3 * parseFloat(t.getAttribute("data-default-duration"));
  };

  e.getPluginOrigin = function (t) {
    return t || {
      value: 0
    };
  };

  e.getPluginDestination = function (t) {
    return {
      value: t.value
    };
  };

  e.createPluginInstance = function (t) {
    var e = window.falgun.require("lottie").createInstance(t);

    return e.stop(), e.setSubframe(!0), e;
  };

  e.renderPlugin = function (t, e, n) {
    if (t) {
      var r = e[n.actionTypeId].value / 100;
      t.goToFrame(t.frames * r);
    }
  };

  e.clearPlugin = function (t) {
    window.falgun.require("lottie").createInstance(t).stop();
  };
}, function (t, e, n) {
  "use strict";

  var r,
      i,
      o,
      a = n(0),
      u = a(n(13)),
      c = a(n(27)),
      s = n(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.getInstanceId = function () {
    return "i" + vt++;
  }, e.getElementId = function (t, e) {
    for (var n in t) {
      var r = t[n];
      if (r && r.ref === e) return r.id;
    }

    return "e" + ht++;
  }, e.reifyState = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = t.events,
        n = t.actionLists,
        r = t.site,
        i = (0, l["default"])(e, function (t, e) {
      var n = e.eventTypeId;
      return t[n] || (t[n] = {}), t[n][e.id] = e, t;
    }, {}),
        o = r && r.mediaQueries,
        a = [];
    o ? a = o.map(function (t) {
      return t.key;
    }) : (o = [], console.warn("IX2 missing mediaQueries in site data"));
    return {
      ixData: {
        events: e,
        actionLists: n,
        eventTypeMap: i,
        mediaQueries: o,
        mediaQueryKeys: a
      }
    };
  }, e.observeStore = function (t) {
    var e = t.store,
        n = t.select,
        r = t.onChange,
        i = t.comparator,
        o = void 0 === i ? Et : i,
        a = e.getState,
        u = (0, e.subscribe)(function () {
      var t = n(a());
      if (null == t) return void u();
      o(t, c) || r(c = t, e);
    }),
        c = n(a());
    return u;
  }, e.getAffectedElements = _t, e.getComputedStyle = function (t) {
    var e = t.element,
        n = t.actionItem;
    if (!_.IS_BROWSER_ENV) return {};

    switch (n.actionTypeId) {
      case it:
      case ot:
      case at:
      case ut:
      case ct:
        return window.getComputedStyle(e);

      default:
        return {};
    }
  }, e.getInstanceOrigin = function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = arguments.length > 3 ? arguments[3] : void 0,
        i = (arguments.length > 4 ? arguments[4] : void 0).getStyle,
        o = r.actionTypeId,
        a = r.config;
    if ((0, g.isPluginType)(o)) return (0, g.getPluginOrigin)(o)(e[o]);

    switch (o) {
      case Z:
      case J:
      case tt:
      case et:
        return e[o] || bt[o];

      case rt:
        return mt(e[o], r.config.filters);

      case nt:
        return {
          value: (0, f["default"])(parseFloat(i(t, N)), 1)
        };

      case it:
        var u,
            c,
            s = i(t, L),
            l = i(t, D);
        return u = a.widthUnit === W ? yt.test(s) ? parseFloat(s) : parseFloat(n.width) : (0, f["default"])(parseFloat(s), parseFloat(n.width)), c = a.heightUnit === W ? yt.test(l) ? parseFloat(l) : parseFloat(n.height) : (0, f["default"])(parseFloat(l), parseFloat(n.height)), {
          widthValue: u,
          heightValue: c
        };

      case ot:
      case at:
      case ut:
        return function (t) {
          var e = t.element,
              n = t.actionTypeId,
              r = t.computedStyle,
              i = t.getStyle,
              o = lt[n],
              a = i(e, o),
              u = St.test(a) ? a : r[o],
              c = function (t, e) {
            var n = t.exec(e);
            return n ? n[1] : "";
          }(xt, u).split(B);

          return {
            rValue: (0, f["default"])(parseInt(c[0], 10), 255),
            gValue: (0, f["default"])(parseInt(c[1], 10), 255),
            bValue: (0, f["default"])(parseInt(c[2], 10), 255),
            aValue: (0, f["default"])(parseFloat(c[3]), 1)
          };
        }({
          element: t,
          actionTypeId: o,
          computedStyle: n,
          getStyle: i
        });

      case ct:
        return {
          value: (0, f["default"])(i(t, U), n.display)
        };

      case st:
        return e[o] || {
          value: 0
        };

      default:
        return;
    }
  }, e.getDestinationValues = function (t) {
    var e = t.element,
        n = t.actionItem,
        r = t.elementApi,
        i = n.actionTypeId;
    if ((0, g.isPluginType)(i)) return (0, g.getPluginDestination)(i)(n.config);

    switch (i) {
      case Z:
      case J:
      case tt:
      case et:
        var o = n.config,
            a = o.xValue,
            u = o.yValue,
            c = o.zValue;
        return {
          xValue: a,
          yValue: u,
          zValue: c
        };

      case it:
        var s = r.getStyle,
            f = r.setStyle,
            l = r.getProperty,
            d = n.config,
            p = d.widthUnit,
            v = d.heightUnit,
            h = n.config,
            E = h.widthValue,
            y = h.heightValue;
        if (!_.IS_BROWSER_ENV) return {
          widthValue: E,
          heightValue: y
        };

        if (p === W) {
          var m = s(e, L);
          f(e, L, ""), E = l(e, "offsetWidth"), f(e, L, m);
        }

        if (v === W) {
          var I = s(e, D);
          f(e, D, ""), y = l(e, "offsetHeight"), f(e, D, I);
        }

        return {
          widthValue: E,
          heightValue: y
        };

      case ot:
      case at:
      case ut:
        var T = n.config,
            b = T.rValue,
            O = T.gValue,
            w = T.bValue,
            A = T.aValue;
        return {
          rValue: b,
          gValue: O,
          bValue: w,
          aValue: A
        };

      case rt:
        return n.config.filters.reduce(It, {});

      default:
        var S = n.config.value;
        return {
          value: S
        };
    }
  }, e.getRenderType = Tt, e.getStyleProp = function (t, e) {
    return t === Q ? e.replace("STYLE_", "").toLowerCase() : null;
  }, e.renderHTMLElement = function (t, e, n, r, i, o, a, u, c) {
    switch (u) {
      case Y:
        return function (t, e, n, r, i) {
          var o = At.map(function (t) {
            var n = bt[t],
                r = e[t] || {},
                i = r.xValue,
                o = void 0 === i ? n.xValue : i,
                a = r.yValue,
                u = void 0 === a ? n.yValue : a,
                c = r.zValue,
                s = void 0 === c ? n.zValue : c,
                f = r.xUnit,
                l = void 0 === f ? "" : f,
                d = r.yUnit,
                p = void 0 === d ? "" : d,
                v = r.zUnit,
                h = void 0 === v ? "" : v;

            switch (t) {
              case Z:
                return "".concat(T, "(").concat(o).concat(l, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");

              case J:
                return "".concat(b, "(").concat(o).concat(l, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");

              case tt:
                return "".concat(O, "(").concat(o).concat(l, ") ").concat(w, "(").concat(u).concat(p, ") ").concat(A, "(").concat(s).concat(h, ")");

              case et:
                return "".concat(S, "(").concat(o).concat(l, ", ").concat(u).concat(p, ")");

              default:
                return "";
            }
          }).join(" "),
              a = i.setStyle;
          Rt(t, _.TRANSFORM_PREFIXED, i), a(t, _.TRANSFORM_PREFIXED, o), u = r, c = n, s = u.actionTypeId, f = c.xValue, l = c.yValue, d = c.zValue, (s === Z && void 0 !== d || s === J && void 0 !== d || s === tt && (void 0 !== f || void 0 !== l)) && a(t, _.TRANSFORM_STYLE_PREFIXED, x);
          var u, c, s, f, l, d;
        }(t, e, n, i, a);

      case Q:
        return function (t, e, n, r, i, o) {
          var a = o.setStyle,
              u = r.actionTypeId,
              c = r.config;

          switch (u) {
            case it:
              var s = r.config,
                  f = s.widthUnit,
                  d = void 0 === f ? "" : f,
                  p = s.heightUnit,
                  v = void 0 === p ? "" : p,
                  h = n.widthValue,
                  E = n.heightValue;
              void 0 !== h && (d === W && (d = "px"), Rt(t, L, o), a(t, L, h + d)), void 0 !== E && (v === W && (v = "px"), Rt(t, D, o), a(t, D, E + v));
              break;

            case rt:
              !function (t, e, n, r) {
                var i = (0, l["default"])(e, function (t, e, r) {
                  return "".concat(t, " ").concat(r, "(").concat(e).concat(wt(r, n), ")");
                }, ""),
                    o = r.setStyle;
                Rt(t, C, r), o(t, C, i);
              }(t, n, c, o);
              break;

            case ot:
            case at:
            case ut:
              var g = lt[u],
                  _ = Math.round(n.rValue),
                  y = Math.round(n.gValue),
                  m = Math.round(n.bValue),
                  I = n.aValue;

              Rt(t, g, o), a(t, g, I >= 1 ? "rgb(".concat(_, ",").concat(y, ",").concat(m, ")") : "rgba(".concat(_, ",").concat(y, ",").concat(m, ",").concat(I, ")"));
              break;

            default:
              var T = c.unit,
                  b = void 0 === T ? "" : T;
              Rt(t, i, o), a(t, i, n.value + b);
          }
        }(t, 0, n, i, o, a);

      case K:
        return function (t, e, n) {
          var r = n.setStyle;

          switch (e.actionTypeId) {
            case ct:
              var i = e.config.value;
              return void (i === R && _.IS_BROWSER_ENV ? r(t, U, _.FLEX_PREFIXED) : r(t, U, i));
          }
        }(t, i, a);

      case q:
        var s = i.actionTypeId;
        if ((0, g.isPluginType)(s)) return (0, g.renderPlugin)(s)(c, e, i);
    }
  }, e.clearAllStyles = function (t) {
    var e = t.store,
        n = t.elementApi,
        r = e.getState().ixData,
        i = r.events,
        o = void 0 === i ? {} : i,
        a = r.actionLists,
        u = void 0 === a ? {} : a;
    Object.keys(o).forEach(function (t) {
      var e = o[t],
          r = e.action.config,
          i = r.actionListId,
          a = u[i];
      a && Ct({
        actionList: a,
        event: e,
        elementApi: n
      });
    }), Object.keys(u).forEach(function (t) {
      Ct({
        actionList: u[t],
        elementApi: n
      });
    });
  }, e.cleanupHTMLElement = function (t, e, n) {
    var r = n.setStyle,
        i = n.getStyle,
        o = e.actionTypeId;

    if (o === it) {
      var a = e.config;
      a.widthUnit === W && r(t, L, ""), a.heightUnit === W && r(t, D, "");
    }

    i(t, V) && Dt({
      effect: Nt,
      actionTypeId: o,
      elementApi: n
    })(t);
  }, e.getMaxDurationItemIndex = Mt, e.getActionListProgress = function (t, e) {
    var n = t.actionItemGroups,
        r = t.useFirstGroupAsInitialState,
        i = e.actionItem,
        o = e.verboseTimeElapsed,
        a = void 0 === o ? 0 : o,
        u = 0,
        c = 0;
    return n.forEach(function (t, e) {
      if (!r || 0 !== e) {
        var n = t.actionItems,
            o = n[Mt(n)],
            s = o.config,
            f = o.actionTypeId;
        i.id === o.id && (c = u + a);
        var l = Tt(f) === K ? 0 : s.duration;
        u += s.delay + l;
      }
    }), u > 0 ? (0, E.optimizeFloat)(c / u) : 0;
  }, e.reduceListToGroup = function (t) {
    var e = t.actionList,
        n = t.actionItemId,
        r = t.rawData,
        i = e.actionItemGroups,
        o = e.continuousParameterGroups,
        a = [],
        u = function u(t) {
      return a.push((0, p.mergeIn)(t, ["config"], {
        delay: 0,
        duration: 0
      })), t.id === n;
    };

    return i && i.some(function (t) {
      return t.actionItems.some(u);
    }), o && o.some(function (t) {
      return t.continuousActionGroups.some(function (t) {
        return t.actionItems.some(u);
      });
    }), (0, p.setIn)(r, ["actionLists"], (0, c["default"])({}, e.id, {
      id: e.id,
      actionItemGroups: [{
        actionItems: a
      }]
    }));
  }, e.shouldNamespaceEventParameter = function (t, e) {
    var n = e.basedOn;
    return t === h.EventTypeConsts.SCROLLING_IN_VIEW && (n === h.EventBasedOn.ELEMENT || null == n) || t === h.EventTypeConsts.MOUSE_MOVE && n === h.EventBasedOn.ELEMENT;
  }, e.getNamespacedParameterId = function (t, e) {
    return t + H + e;
  }, e.shouldAllowMediaQuery = function (t, e) {
    if (null == e) return !0;
    return -1 !== t.indexOf(e);
  }, e.mediaQueriesEqual = function (t, e) {
    return (0, v["default"])(t && t.sort(), e && e.sort());
  }, e.stringifyTarget = function (t) {
    if ("string" == typeof t) return t;
    var e = t.id,
        n = void 0 === e ? "" : e,
        r = t.selector,
        i = void 0 === r ? "" : r,
        o = t.useEventTarget;
    return n + z + i + z + (void 0 === o ? "" : o);
  }, e.getItemConfigByKey = void 0;

  var f = s(n(251)),
      l = s(n(252)),
      d = s(n(258)),
      p = n(19),
      v = s(n(113)),
      h = n(2),
      E = n(108),
      g = n(110),
      _ = n(44),
      y = h.IX2EngineConstants,
      m = y.BACKGROUND,
      I = y.TRANSFORM,
      T = y.TRANSLATE_3D,
      b = y.SCALE_3D,
      O = y.ROTATE_X,
      w = y.ROTATE_Y,
      A = y.ROTATE_Z,
      S = y.SKEW,
      x = y.PRESERVE_3D,
      R = y.FLEX,
      N = y.OPACITY,
      C = y.FILTER,
      L = y.WIDTH,
      D = y.HEIGHT,
      P = y.BACKGROUND_COLOR,
      M = y.BORDER_COLOR,
      j = y.COLOR,
      F = y.CHILDREN,
      k = y.IMMEDIATE_CHILDREN,
      X = y.SIBLINGS,
      G = y.PARENT,
      U = y.DISPLAY,
      V = y.WILL_CHANGE,
      W = y.AUTO,
      B = y.COMMA_DELIMITER,
      H = y.COLON_DELIMITER,
      z = y.BAR_DELIMITER,
      Y = y.RENDER_TRANSFORM,
      K = y.RENDER_GENERAL,
      Q = y.RENDER_STYLE,
      q = y.RENDER_PLUGIN,
      $ = h.ActionTypeConsts,
      Z = $.TRANSFORM_MOVE,
      J = $.TRANSFORM_SCALE,
      tt = $.TRANSFORM_ROTATE,
      et = $.TRANSFORM_SKEW,
      nt = $.STYLE_OPACITY,
      rt = $.STYLE_FILTER,
      it = $.STYLE_SIZE,
      ot = $.STYLE_BACKGROUND_COLOR,
      at = $.STYLE_BORDER,
      ut = $.STYLE_TEXT_COLOR,
      ct = $.GENERAL_DISPLAY,
      st = "OBJECT_VALUE",
      ft = function ft(t) {
    return t.trim();
  },
      lt = Object.freeze((r = {}, (0, c["default"])(r, ot, P), (0, c["default"])(r, at, M), (0, c["default"])(r, ut, j), r)),
      dt = Object.freeze((i = {}, (0, c["default"])(i, _.TRANSFORM_PREFIXED, I), (0, c["default"])(i, P, m), (0, c["default"])(i, N, N), (0, c["default"])(i, C, C), (0, c["default"])(i, L, L), (0, c["default"])(i, D, D), i)),
      pt = {},
      vt = 1;

  var ht = 1;

  var Et = function Et(t, e) {
    return t === e;
  };

  function gt(t) {
    var e = (0, u["default"])(t);
    return "string" === e ? {
      id: t
    } : null != t && "object" === e ? {
      id: t.id,
      objectId: t.objectId,
      selector: t.selector,
      selectorGuids: t.selectorGuids,
      appliesTo: t.appliesTo,
      useEventTarget: t.useEventTarget
    } : {};
  }

  function _t(t) {
    var e,
        n,
        r,
        i = t.config,
        o = t.event,
        a = t.eventTarget,
        u = t.elementRoot,
        c = t.elementApi;
    if (!c) throw new Error("IX2 missing elementApi");
    var s = i.targets;
    if (Array.isArray(s) && s.length > 0) return s.reduce(function (t, e) {
      return t.concat(_t({
        config: {
          target: e
        },
        event: o,
        eventTarget: a,
        elementRoot: u,
        elementApi: c
      }));
    }, []);
    var f = c.getValidDocument,
        l = c.getQuerySelector,
        d = c.queryDocument,
        p = c.getChildElements,
        v = c.getSiblingElements,
        E = c.matchSelector,
        g = c.elementContains,
        y = c.isSiblingNode,
        m = i.target;
    if (!m) return [];
    var I = gt(m),
        T = I.id,
        b = I.objectId,
        O = I.selector,
        w = I.selectorGuids,
        A = I.appliesTo,
        S = I.useEventTarget;
    if (b) return [pt[b] || (pt[b] = {})];

    if (A === h.EventAppliesTo.PAGE) {
      var x = f(T);
      return x ? [x] : [];
    }

    var R,
        N,
        C,
        L = (null !== (e = null == o ? void 0 : null === (n = o.action) || void 0 === n ? void 0 : null === (r = n.config) || void 0 === r ? void 0 : r.affectedElements) && void 0 !== e ? e : {})[T || O] || {},
        D = Boolean(L.id || L.selector),
        P = o && l(gt(o.target));

    if (D ? (R = L.limitAffectedElements, N = P, C = l(L)) : N = C = l({
      id: T,
      selector: O,
      selectorGuids: w
    }), o && S) {
      var M = a && (C || !0 === S) ? [a] : d(P);

      if (C) {
        if (S === G) return d(C).filter(function (t) {
          return M.some(function (e) {
            return g(t, e);
          });
        });
        if (S === F) return d(C).filter(function (t) {
          return M.some(function (e) {
            return g(e, t);
          });
        });
        if (S === X) return d(C).filter(function (t) {
          return M.some(function (e) {
            return y(e, t);
          });
        });
      }

      return M;
    }

    return null == N || null == C ? [] : _.IS_BROWSER_ENV && u ? d(C).filter(function (t) {
      return u.contains(t);
    }) : R === F ? d(N, C) : R === k ? p(d(N)).filter(E(C)) : R === X ? v(d(N)).filter(E(C)) : d(C);
  }

  var yt = /px/,
      mt = function mt(t, e) {
    return e.reduce(function (t, e) {
      return null == t[e.type] && (t[e.type] = Ot[e.type]), t;
    }, t || {});
  };

  var It = function It(t, e) {
    return e && (t[e.type] = e.value || 0), t;
  };

  function Tt(t) {
    return /^TRANSFORM_/.test(t) ? Y : /^STYLE_/.test(t) ? Q : /^GENERAL_/.test(t) ? K : /^PLUGIN_/.test(t) ? q : void 0;
  }

  e.getItemConfigByKey = function (t, e, n) {
    if ((0, g.isPluginType)(t)) return (0, g.getPluginConfig)(t)(n, e);

    switch (t) {
      case rt:
        var r = (0, d["default"])(n.filters, function (t) {
          return t.type === e;
        });
        return r ? r.value : 0;

      default:
        return n[e];
    }
  };

  var bt = (o = {}, (0, c["default"])(o, Z, Object.freeze({
    xValue: 0,
    yValue: 0,
    zValue: 0
  })), (0, c["default"])(o, J, Object.freeze({
    xValue: 1,
    yValue: 1,
    zValue: 1
  })), (0, c["default"])(o, tt, Object.freeze({
    xValue: 0,
    yValue: 0,
    zValue: 0
  })), (0, c["default"])(o, et, Object.freeze({
    xValue: 0,
    yValue: 0
  })), o),
      Ot = Object.freeze({
    blur: 0,
    "hue-rotate": 0,
    invert: 0,
    grayscale: 0,
    saturate: 100,
    sepia: 0,
    contrast: 100,
    brightness: 100
  }),
      wt = function wt(t, e) {
    var n = (0, d["default"])(e.filters, function (e) {
      return e.type === t;
    });
    if (n && n.unit) return n.unit;

    switch (t) {
      case "blur":
        return "px";

      case "hue-rotate":
        return "deg";

      default:
        return "%";
    }
  },
      At = Object.keys(bt);

  var St = /^rgb/,
      xt = RegExp("rgba?".concat("\\(([^)]+)\\)"));

  function Rt(t, e, n) {
    if (_.IS_BROWSER_ENV) {
      var r = dt[e];

      if (r) {
        var i = n.getStyle,
            o = n.setStyle,
            a = i(t, V);

        if (a) {
          var u = a.split(B).map(ft);
          -1 === u.indexOf(r) && o(t, V, u.concat(r).join(B));
        } else o(t, V, r);
      }
    }
  }

  function Nt(t, e, n) {
    if (_.IS_BROWSER_ENV) {
      var r = dt[e];

      if (r) {
        var i = n.getStyle,
            o = n.setStyle,
            a = i(t, V);
        a && -1 !== a.indexOf(r) && o(t, V, a.split(B).map(ft).filter(function (t) {
          return t !== r;
        }).join(B));
      }
    }
  }

  function Ct(t) {
    var e = t.actionList,
        n = void 0 === e ? {} : e,
        r = t.event,
        i = t.elementApi,
        o = n.actionItemGroups,
        a = n.continuousParameterGroups;
    o && o.forEach(function (t) {
      Lt({
        actionGroup: t,
        event: r,
        elementApi: i
      });
    }), a && a.forEach(function (t) {
      t.continuousActionGroups.forEach(function (t) {
        Lt({
          actionGroup: t,
          event: r,
          elementApi: i
        });
      });
    });
  }

  function Lt(t) {
    var e = t.actionGroup,
        n = t.event,
        r = t.elementApi;
    e.actionItems.forEach(function (t) {
      var e,
          i = t.actionTypeId,
          o = t.config;
      e = (0, g.isPluginType)(i) ? (0, g.clearPlugin)(i) : Dt({
        effect: Pt,
        actionTypeId: i,
        elementApi: r
      }), _t({
        config: o,
        event: n,
        elementApi: r
      }).forEach(e);
    });
  }

  var Dt = function Dt(t) {
    var e = t.effect,
        n = t.actionTypeId,
        r = t.elementApi;
    return function (t) {
      switch (n) {
        case Z:
        case J:
        case tt:
        case et:
          e(t, _.TRANSFORM_PREFIXED, r);
          break;

        case rt:
          e(t, C, r);
          break;

        case nt:
          e(t, N, r);
          break;

        case it:
          e(t, L, r), e(t, D, r);
          break;

        case ot:
        case at:
        case ut:
          e(t, lt[n], r);
          break;

        case ct:
          e(t, U, r);
      }
    };
  };

  function Pt(t, e, n) {
    var r = n.setStyle;
    Nt(t, e, n), r(t, e, ""), e === _.TRANSFORM_PREFIXED && r(t, _.TRANSFORM_STYLE_PREFIXED, "");
  }

  function Mt(t) {
    var e = 0,
        n = 0;
    return t.forEach(function (t, r) {
      var i = t.config,
          o = i.delay + i.duration;
      o >= e && (e = o, n = r);
    }), n;
  }
}, function (t, e) {
  t.exports = function (t, e) {
    return null == t || t != t ? e : t;
  };
}, function (t, e, n) {
  var r = n(253),
      i = n(111),
      o = n(7),
      a = n(257),
      u = n(1);

  t.exports = function (t, e, n) {
    var c = u(t) ? r : a,
        s = arguments.length < 3;
    return c(t, o(e, 4), n, s, i);
  };
}, function (t, e) {
  t.exports = function (t, e, n, r) {
    var i = -1,
        o = null == t ? 0 : t.length;

    for (r && o && (n = t[++i]); ++i < o;) {
      n = e(n, t[i], i, t);
    }

    return n;
  };
}, function (t, e, n) {
  var r = n(255)();
  t.exports = r;
}, function (t, e) {
  t.exports = function (t) {
    return function (e, n, r) {
      for (var i = -1, o = Object(e), a = r(e), u = a.length; u--;) {
        var c = a[t ? u : ++i];
        if (!1 === n(o[c], c, o)) break;
      }

      return e;
    };
  };
}, function (t, e, n) {
  var r = n(12);

  t.exports = function (t, e) {
    return function (n, i) {
      if (null == n) return n;
      if (!r(n)) return t(n, i);

      for (var o = n.length, a = e ? o : -1, u = Object(n); (e ? a-- : ++a < o) && !1 !== i(u[a], a, u);) {
        ;
      }

      return n;
    };
  };
}, function (t, e) {
  t.exports = function (t, e, n, r, i) {
    return i(t, function (t, i, o) {
      n = r ? (r = !1, t) : e(n, t, i, o);
    }), n;
  };
}, function (t, e, n) {
  var r = n(86)(n(259));
  t.exports = r;
}, function (t, e, n) {
  var r = n(104),
      i = n(7),
      o = n(105),
      a = Math.max,
      u = Math.min;

  t.exports = function (t, e, n) {
    var c = null == t ? 0 : t.length;
    if (!c) return -1;
    var s = c - 1;
    return void 0 !== n && (s = o(n), s = n < 0 ? a(c + s, 0) : u(s, c - 1)), r(t, i(e, 3), s, !0);
  };
}, function (t, e) {
  t.exports = function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };
}, function (t, e, n) {
  "use strict";

  var r = Object.prototype.hasOwnProperty;

  function i(t, e) {
    return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e;
  }

  t.exports = function (t, e) {
    if (i(t, e)) return !0;
    if ("object" != _typeof(t) || null === t || "object" != _typeof(e) || null === e) return !1;
    var n = Object.keys(t),
        o = Object.keys(e);
    if (n.length !== o.length) return !1;

    for (var a = 0; a < n.length; a++) {
      if (!r.call(e, n[a]) || !i(t[n[a]], e[n[a]])) return !1;
    }

    return !0;
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ixInstances = void 0;

  var r = n(2),
      i = n(10),
      o = n(19),
      a = r.IX2EngineActionTypes,
      u = a.IX2_RAW_DATA_IMPORTED,
      c = a.IX2_SESSION_STOPPED,
      s = a.IX2_INSTANCE_ADDED,
      f = a.IX2_INSTANCE_STARTED,
      l = a.IX2_INSTANCE_REMOVED,
      d = a.IX2_ANIMATION_FRAME_CHANGED,
      p = i.IX2EasingUtils,
      v = p.optimizeFloat,
      h = p.applyEasing,
      E = p.createBezierEasing,
      g = r.IX2EngineConstants.RENDER_GENERAL,
      _ = i.IX2VanillaUtils,
      y = _.getItemConfigByKey,
      m = _.getRenderType,
      I = _.getStyleProp,
      T = function T(t, e) {
    var n = t.position,
        r = t.parameterId,
        i = t.actionGroups,
        a = t.destinationKeys,
        u = t.smoothing,
        c = t.restingValue,
        s = t.actionTypeId,
        f = t.customEasingFn,
        l = e.payload.parameters,
        d = Math.max(1 - u, .01),
        p = l[r];
    null == p && (d = 1, p = c);

    var E,
        g,
        _,
        m,
        I = Math.max(p, 0) || 0,
        T = v(I - n),
        b = v(n + T * d),
        O = 100 * b;

    if (b === n && t.current) return t;

    for (var w = 0, A = i.length; w < A; w++) {
      var S = i[w],
          x = S.keyframe,
          R = S.actionItems;

      if (0 === w && (E = R[0]), O >= x) {
        E = R[0];
        var N = i[w + 1],
            C = N && O !== x;
        g = C ? N.actionItems[0] : null, C && (_ = x / 100, m = (N.keyframe - x) / 100);
      }
    }

    var L = {};
    if (E && !g) for (var D = 0, P = a.length; D < P; D++) {
      var M = a[D];
      L[M] = y(s, M, E.config);
    } else if (E && g && void 0 !== _ && void 0 !== m) for (var j = (b - _) / m, F = E.config.easing, k = h(F, j, f), X = 0, G = a.length; X < G; X++) {
      var U = a[X],
          V = y(s, U, E.config),
          W = (y(s, U, g.config) - V) * k + V;
      L[U] = W;
    }
    return (0, o.merge)(t, {
      position: b,
      current: L
    });
  },
      b = function b(t, e) {
    var n = t,
        r = n.active,
        i = n.origin,
        a = n.start,
        u = n.immediate,
        c = n.renderType,
        s = n.verbose,
        f = n.actionItem,
        l = n.destination,
        d = n.destinationKeys,
        p = n.pluginDuration,
        E = n.instanceDelay,
        _ = n.customEasingFn,
        y = f.config.easing,
        m = f.config,
        I = m.duration,
        T = m.delay;
    null != p && (I = p), T = null != E ? E : T, c === g ? I = 0 : u && (I = T = 0);
    var b = e.payload.now;

    if (r && i) {
      var O = b - (a + T);

      if (s) {
        var w = b - a,
            A = I + T,
            S = v(Math.min(Math.max(0, w / A), 1));
        t = (0, o.set)(t, "verboseTimeElapsed", A * S);
      }

      if (O < 0) return t;
      var x = v(Math.min(Math.max(0, O / I), 1)),
          R = h(y, x, _),
          N = {},
          C = null;
      return d.length && (C = d.reduce(function (t, e) {
        var n = l[e],
            r = parseFloat(i[e]) || 0,
            o = (parseFloat(n) - r) * R + r;
        return t[e] = o, t;
      }, {})), N.current = C, N.position = x, 1 === x && (N.active = !1, N.complete = !0), (0, o.merge)(t, N);
    }

    return t;
  };

  e.ixInstances = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
        e = arguments.length > 1 ? arguments[1] : void 0;

    switch (e.type) {
      case u:
        return e.payload.ixInstances || Object.freeze({});

      case c:
        return Object.freeze({});

      case s:
        var n = e.payload,
            r = n.instanceId,
            i = n.elementId,
            a = n.actionItem,
            p = n.eventId,
            v = n.eventTarget,
            h = n.eventStateKey,
            g = n.actionListId,
            _ = n.groupIndex,
            y = n.isCarrier,
            O = n.origin,
            w = n.destination,
            A = n.immediate,
            S = n.verbose,
            x = n.continuous,
            R = n.parameterId,
            N = n.actionGroups,
            C = n.smoothing,
            L = n.restingValue,
            D = n.pluginInstance,
            P = n.pluginDuration,
            M = n.instanceDelay,
            j = a.actionTypeId,
            F = m(j),
            k = I(F, j),
            X = Object.keys(w).filter(function (t) {
          return null != w[t];
        }),
            G = a.config.easing;
        return (0, o.set)(t, r, {
          id: r,
          elementId: i,
          active: !1,
          position: 0,
          start: 0,
          origin: O,
          destination: w,
          destinationKeys: X,
          immediate: A,
          verbose: S,
          current: null,
          actionItem: a,
          actionTypeId: j,
          eventId: p,
          eventTarget: v,
          eventStateKey: h,
          actionListId: g,
          groupIndex: _,
          renderType: F,
          isCarrier: y,
          styleProp: k,
          continuous: x,
          parameterId: R,
          actionGroups: N,
          smoothing: C,
          restingValue: L,
          pluginInstance: D,
          pluginDuration: P,
          instanceDelay: M,
          customEasingFn: Array.isArray(G) && 4 === G.length ? E(G) : void 0
        });

      case f:
        var U = e.payload,
            V = U.instanceId,
            W = U.time;
        return (0, o.mergeIn)(t, [V], {
          active: !0,
          complete: !1,
          start: W
        });

      case l:
        var B = e.payload.instanceId;
        if (!t[B]) return t;

        for (var H = {}, z = Object.keys(t), Y = z.length, K = 0; K < Y; K++) {
          var Q = z[K];
          Q !== B && (H[Q] = t[Q]);
        }

        return H;

      case d:
        for (var q = t, $ = Object.keys(t), Z = $.length, J = 0; J < Z; J++) {
          var tt = $[J],
              et = t[tt],
              nt = et.continuous ? T : b;
          q = (0, o.set)(q, tt, nt(et, e));
        }

        return q;

      default:
        return t;
    }
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ixParameters = void 0;
  var r = n(2).IX2EngineActionTypes,
      i = r.IX2_RAW_DATA_IMPORTED,
      o = r.IX2_SESSION_STOPPED,
      a = r.IX2_PARAMETER_CHANGED;

  e.ixParameters = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = arguments.length > 1 ? arguments[1] : void 0;

    switch (e.type) {
      case i:
        return e.payload.ixParameters || {};

      case o:
        return {};

      case a:
        var n = e.payload,
            r = n.key,
            u = n.value;
        return t[r] = u, t;

      default:
        return t;
    }
  };
}, function (t, e) {
  t.exports = function (t, e) {
    if (null == t) return {};
    var n,
        r,
        i = {},
        o = Object.keys(t);

    for (r = 0; r < o.length; r++) {
      n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
    }

    return i;
  };
}, function (t, e, n) {
  var r = n(53),
      i = n(55),
      o = n(12),
      a = n(266),
      u = n(267),
      c = "[object Map]",
      s = "[object Set]";

  t.exports = function (t) {
    if (null == t) return 0;
    if (o(t)) return a(t) ? u(t) : t.length;
    var e = i(t);
    return e == c || e == s ? t.size : r(t).length;
  };
}, function (t, e, n) {
  var r = n(11),
      i = n(1),
      o = n(9),
      a = "[object String]";

  t.exports = function (t) {
    return "string" == typeof t || !i(t) && o(t) && r(t) == a;
  };
}, function (t, e, n) {
  var r = n(268),
      i = n(269),
      o = n(270);

  t.exports = function (t) {
    return i(t) ? o(t) : r(t);
  };
}, function (t, e, n) {
  var r = n(103)("length");
  t.exports = r;
}, function (t, e) {
  var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");

  t.exports = function (t) {
    return n.test(t);
  };
}, function (t, e) {
  var n = "[\\ud800-\\udfff]",
      r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      i = "\\ud83c[\\udffb-\\udfff]",
      o = "[^\\ud800-\\udfff]",
      a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      c = "(?:" + r + "|" + i + ")" + "?",
      s = "[\\ufe0e\\ufe0f]?" + c + ("(?:\\u200d(?:" + [o, a, u].join("|") + ")[\\ufe0e\\ufe0f]?" + c + ")*"),
      f = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")",
      l = RegExp(i + "(?=" + i + ")|" + f + s, "g");

  t.exports = function (t) {
    for (var e = l.lastIndex = 0; l.test(t);) {
      ++e;
    }

    return e;
  };
}, function (t, e, n) {
  var r = n(7),
      i = n(272),
      o = n(273);

  t.exports = function (t, e) {
    return o(t, i(r(e)));
  };
}, function (t, e) {
  var n = "Expected a function";

  t.exports = function (t) {
    if ("function" != typeof t) throw new TypeError(n);
    return function () {
      var e = arguments;

      switch (e.length) {
        case 0:
          return !t.call(this);

        case 1:
          return !t.call(this, e[0]);

        case 2:
          return !t.call(this, e[0], e[1]);

        case 3:
          return !t.call(this, e[0], e[1], e[2]);
      }

      return !t.apply(this, e);
    };
  };
}, function (t, e, n) {
  var r = n(102),
      i = n(7),
      o = n(274),
      a = n(277);

  t.exports = function (t, e) {
    if (null == t) return {};
    var n = r(a(t), function (t) {
      return [t];
    });
    return e = i(e), o(t, n, function (t, n) {
      return e(t, n[0]);
    });
  };
}, function (t, e, n) {
  var r = n(57),
      i = n(275),
      o = n(35);

  t.exports = function (t, e, n) {
    for (var a = -1, u = e.length, c = {}; ++a < u;) {
      var s = e[a],
          f = r(t, s);
      n(f, s) && i(c, o(s, t), f);
    }

    return c;
  };
}, function (t, e, n) {
  var r = n(276),
      i = n(35),
      o = n(50),
      a = n(6),
      u = n(21);

  t.exports = function (t, e, n, c) {
    if (!a(t)) return t;

    for (var s = -1, f = (e = i(e, t)).length, l = f - 1, d = t; null != d && ++s < f;) {
      var p = u(e[s]),
          v = n;
      if ("__proto__" === p || "constructor" === p || "prototype" === p) return t;

      if (s != l) {
        var h = d[p];
        void 0 === (v = c ? c(h, p, d) : void 0) && (v = a(h) ? h : o(e[s + 1]) ? [] : {});
      }

      r(d, p, v), d = d[p];
    }

    return t;
  };
}, function (t, e, n) {
  var r = n(115),
      i = n(45),
      o = Object.prototype.hasOwnProperty;

  t.exports = function (t, e, n) {
    var a = t[e];
    o.call(t, e) && i(a, n) && (void 0 !== n || e in t) || r(t, e, n);
  };
}, function (t, e, n) {
  var r = n(93),
      i = n(278),
      o = n(280);

  t.exports = function (t) {
    return r(t, o, i);
  };
}, function (t, e, n) {
  var r = n(48),
      i = n(279),
      o = n(94),
      a = n(95),
      u = Object.getOwnPropertySymbols ? function (t) {
    for (var e = []; t;) {
      r(e, o(t)), t = i(t);
    }

    return e;
  } : a;
  t.exports = u;
}, function (t, e, n) {
  var r = n(98)(Object.getPrototypeOf, Object);
  t.exports = r;
}, function (t, e, n) {
  var r = n(96),
      i = n(281),
      o = n(12);

  t.exports = function (t) {
    return o(t) ? r(t, !0) : i(t);
  };
}, function (t, e, n) {
  var r = n(6),
      i = n(54),
      o = n(282),
      a = Object.prototype.hasOwnProperty;

  t.exports = function (t) {
    if (!r(t)) return o(t);
    var e = i(t),
        n = [];

    for (var u in t) {
      ("constructor" != u || !e && a.call(t, u)) && n.push(u);
    }

    return n;
  };
}, function (t, e) {
  t.exports = function (t) {
    var e = [];
    if (null != t) for (var n in Object(t)) {
      e.push(n);
    }
    return e;
  };
}, function (t, e, n) {
  var r = n(53),
      i = n(55),
      o = n(34),
      a = n(1),
      u = n(12),
      c = n(49),
      s = n(54),
      f = n(51),
      l = "[object Map]",
      d = "[object Set]",
      p = Object.prototype.hasOwnProperty;

  t.exports = function (t) {
    if (null == t) return !0;
    if (u(t) && (a(t) || "string" == typeof t || "function" == typeof t.splice || c(t) || f(t) || o(t))) return !t.length;
    var e = i(t);
    if (e == l || e == d) return !t.size;
    if (s(t)) return !r(t).length;

    for (var n in t) {
      if (p.call(t, n)) return !1;
    }

    return !0;
  };
}, function (t, e, n) {
  var r = n(115),
      i = n(112),
      o = n(7);

  t.exports = function (t, e) {
    var n = {};
    return e = o(e, 3), i(t, function (t, i, o) {
      r(n, i, e(t, i, o));
    }), n;
  };
}, function (t, e, n) {
  var r = n(286),
      i = n(111),
      o = n(287),
      a = n(1);

  t.exports = function (t, e) {
    return (a(t) ? r : i)(t, o(e));
  };
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t);) {
      ;
    }

    return t;
  };
}, function (t, e, n) {
  var r = n(59);

  t.exports = function (t) {
    return "function" == typeof t ? t : r;
  };
}, function (t, e, n) {
  var r = n(289),
      i = n(6),
      o = "Expected a function";

  t.exports = function (t, e, n) {
    var a = !0,
        u = !0;
    if ("function" != typeof t) throw new TypeError(o);
    return i(n) && (a = "leading" in n ? !!n.leading : a, u = "trailing" in n ? !!n.trailing : u), r(t, e, {
      leading: a,
      maxWait: e,
      trailing: u
    });
  };
}, function (t, e, n) {
  var r = n(6),
      i = n(290),
      o = n(60),
      a = "Expected a function",
      u = Math.max,
      c = Math.min;

  t.exports = function (t, e, n) {
    var s,
        f,
        l,
        d,
        p,
        v,
        h = 0,
        E = !1,
        g = !1,
        _ = !0;

    if ("function" != typeof t) throw new TypeError(a);

    function y(e) {
      var n = s,
          r = f;
      return s = f = void 0, h = e, d = t.apply(r, n);
    }

    function m(t) {
      var n = t - v;
      return void 0 === v || n >= e || n < 0 || g && t - h >= l;
    }

    function I() {
      var t = i();
      if (m(t)) return T(t);
      p = setTimeout(I, function (t) {
        var n = e - (t - v);
        return g ? c(n, l - (t - h)) : n;
      }(t));
    }

    function T(t) {
      return p = void 0, _ && s ? y(t) : (s = f = void 0, d);
    }

    function b() {
      var t = i(),
          n = m(t);

      if (s = arguments, f = this, v = t, n) {
        if (void 0 === p) return function (t) {
          return h = t, p = setTimeout(I, e), E ? y(t) : d;
        }(v);
        if (g) return clearTimeout(p), p = setTimeout(I, e), y(v);
      }

      return void 0 === p && (p = setTimeout(I, e)), d;
    }

    return e = o(e) || 0, r(n) && (E = !!n.leading, l = (g = "maxWait" in n) ? u(o(n.maxWait) || 0, e) : l, _ = "trailing" in n ? !!n.trailing : _), b.cancel = function () {
      void 0 !== p && clearTimeout(p), h = 0, s = v = f = p = void 0;
    }, b.flush = function () {
      return void 0 === p ? d : T(i());
    }, b;
  };
}, function (t, e, n) {
  var r = n(5);

  t.exports = function () {
    return r.Date.now();
  };
}, function (t, e, n) {
  "use strict";

  var r = n(0)(n(13));
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.setStyle = function (t, e, n) {
    t.style[e] = n;
  }, e.getStyle = function (t, e) {
    return t.style[e];
  }, e.getProperty = function (t, e) {
    return t[e];
  }, e.matchSelector = function (t) {
    return function (e) {
      return e[a](t);
    };
  }, e.getQuerySelector = function (t) {
    var e = t.id,
        n = t.selector;

    if (e) {
      var r = e;

      if (-1 !== e.indexOf(c)) {
        var i = e.split(c),
            o = i[0];
        if (r = i[1], o !== document.documentElement.getAttribute(l)) return null;
      }

      return '[data-w-id="'.concat(r, '"], [data-w-id^="').concat(r, '_instance"]');
    }

    return n;
  }, e.getValidDocument = function (t) {
    if (null == t || t === document.documentElement.getAttribute(l)) return document;
    return null;
  }, e.queryDocument = function (t, e) {
    return Array.prototype.slice.call(document.querySelectorAll(e ? t + " " + e : t));
  }, e.elementContains = function (t, e) {
    return t.contains(e);
  }, e.isSiblingNode = function (t, e) {
    return t !== e && t.parentNode === e.parentNode;
  }, e.getChildElements = function (t) {
    for (var e = [], n = 0, r = (t || []).length; n < r; n++) {
      var i = t[n].children,
          o = i.length;
      if (o) for (var a = 0; a < o; a++) {
        e.push(i[a]);
      }
    }

    return e;
  }, e.getSiblingElements = function () {
    for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = [], r = 0, i = t.length; r < i; r++) {
      var o = t[r].parentNode;

      if (o && o.children && o.children.length && -1 === n.indexOf(o)) {
        n.push(o);

        for (var a = o.firstElementChild; null != a;) {
          -1 === t.indexOf(a) && e.push(a), a = a.nextElementSibling;
        }
      }
    }

    return e;
  }, e.getRefType = function (t) {
    if (null != t && "object" == (0, r["default"])(t)) return t instanceof Element ? s : f;
    return null;
  }, e.getClosestElement = void 0;
  var i = n(10),
      o = n(2),
      a = i.IX2BrowserSupport.ELEMENT_MATCHES,
      u = o.IX2EngineConstants,
      c = u.IX2_ID_DELIMITER,
      s = u.HTML_ELEMENT,
      f = u.PLAIN_OBJECT,
      l = u.WF_PAGE;
  var d = Element.prototype.closest ? function (t, e) {
    return document.documentElement.contains(t) ? t.closest(e) : null;
  } : function (t, e) {
    if (!document.documentElement.contains(t)) return null;
    var n = t;

    do {
      if (n[a] && n[a](e)) return n;
      n = n.parentNode;
    } while (null != n);

    return null;
  };
  e.getClosestElement = d;
}, function (t, e, n) {
  "use strict";

  var r,
      i = n(0),
      o = i(n(27)),
      a = i(n(13)),
      u = n(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e["default"] = void 0;

  var c,
      s,
      f,
      l = u(n(28)),
      d = u(n(293)),
      p = u(n(56)),
      v = u(n(312)),
      h = n(2),
      E = n(114),
      g = n(61),
      _ = n(10),
      y = h.EventTypeConsts,
      m = y.MOUSE_CLICK,
      I = y.MOUSE_SECOND_CLICK,
      T = y.MOUSE_DOWN,
      b = y.MOUSE_UP,
      O = y.MOUSE_OVER,
      w = y.MOUSE_OUT,
      A = y.DROPDOWN_CLOSE,
      S = y.DROPDOWN_OPEN,
      x = y.SLIDER_ACTIVE,
      R = y.SLIDER_INACTIVE,
      N = y.TAB_ACTIVE,
      C = y.TAB_INACTIVE,
      L = y.falgunnavbar_CLOSE,
      D = y.falgunnavbar_OPEN,
      P = y.MOUSE_MOVE,
      M = y.PAGE_SCROLL_DOWN,
      j = y.SCROLL_INTO_VIEW,
      F = y.SCROLL_OUT_OF_VIEW,
      k = y.PAGE_SCROLL_UP,
      X = y.SCROLLING_IN_VIEW,
      G = y.PAGE_FINISH,
      U = y.ECOMMERCE_CART_CLOSE,
      V = y.ECOMMERCE_CART_OPEN,
      W = y.PAGE_START,
      B = y.PAGE_SCROLL,
      H = "COMPONENT_ACTIVE",
      z = "COMPONENT_INACTIVE",
      Y = h.IX2EngineConstants.COLON_DELIMITER,
      K = _.IX2VanillaUtils.getNamespacedParameterId,
      Q = function Q(t) {
    return function (e) {
      return !("object" !== (0, a["default"])(e) || !t(e)) || e;
    };
  },
      q = Q(function (t) {
    return t.element === t.nativeEvent.target;
  }),
      $ = Q(function (t) {
    var e = t.element,
        n = t.nativeEvent;
    return e.contains(n.target);
  }),
      Z = (0, d["default"])([q, $]),
      J = function J(t, e) {
    if (e) {
      var n = t.getState().ixData.events[e];
      if (n && !at[n.eventTypeId]) return n;
    }

    return null;
  },
      tt = function tt(t, e) {
    var n = t.store,
        r = t.event,
        i = t.element,
        o = t.eventStateKey,
        a = r.action,
        u = r.id,
        c = a.config,
        s = c.actionListId,
        f = c.autoStopEventId,
        l = J(n, f);
    return l && (0, E.stopActionGroup)({
      store: n,
      eventId: f,
      eventTarget: i,
      eventStateKey: f + Y + o.split(Y)[1],
      actionListId: (0, p["default"])(l, "action.config.actionListId")
    }), (0, E.stopActionGroup)({
      store: n,
      eventId: u,
      eventTarget: i,
      eventStateKey: o,
      actionListId: s
    }), (0, E.startActionGroup)({
      store: n,
      eventId: u,
      eventTarget: i,
      eventStateKey: o,
      actionListId: s
    }), e;
  },
      et = function et(t, e) {
    return function (n, r) {
      return !0 === t(n, r) ? e(n, r) : r;
    };
  },
      nt = {
    handler: et(Z, tt)
  },
      rt = (0, l["default"])({}, nt, {
    types: [H, z].join(" ")
  }),
      it = [{
    target: window,
    types: "resize orientationchange",
    throttle: !0
  }, {
    target: document,
    types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
    throttle: !0
  }],
      ot = {
    types: it
  },
      at = {
    PAGE_START: W,
    PAGE_FINISH: G
  },
      ut = (c = void 0 !== window.pageXOffset, s = "CSS1Compat" === document.compatMode ? document.documentElement : document.body, function () {
    return {
      scrollLeft: c ? window.pageXOffset : s.scrollLeft,
      scrollTop: c ? window.pageYOffset : s.scrollTop,
      stiffScrollTop: (0, v["default"])(c ? window.pageYOffset : s.scrollTop, 0, s.scrollHeight - window.innerHeight),
      scrollWidth: s.scrollWidth,
      scrollHeight: s.scrollHeight,
      clientWidth: s.clientWidth,
      clientHeight: s.clientHeight,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    };
  }),
      ct = function ct(t) {
    var e = t.element,
        n = t.nativeEvent,
        r = n.type,
        i = n.target,
        o = n.relatedTarget,
        a = e.contains(i);
    if ("mouseover" === r && a) return !0;
    var u = e.contains(o);
    return !("mouseout" !== r || !a || !u);
  },
      st = function st(t) {
    var e,
        n,
        r = t.element,
        i = t.event.config,
        o = ut(),
        a = o.clientWidth,
        u = o.clientHeight,
        c = i.scrollOffsetValue,
        s = "PX" === i.scrollOffsetUnit ? c : u * (c || 0) / 100;
    return e = r.getBoundingClientRect(), n = {
      left: 0,
      top: s,
      right: a,
      bottom: u - s
    }, !(e.left > n.right || e.right < n.left || e.top > n.bottom || e.bottom < n.top);
  },
      ft = function ft(t) {
    return function (e, n) {
      var r = e.nativeEvent.type,
          i = -1 !== [H, z].indexOf(r) ? r === H : n.isActive,
          o = (0, l["default"])({}, n, {
        isActive: i
      });
      return n && o.isActive === n.isActive ? o : t(e, o) || o;
    };
  },
      lt = function lt(t) {
    return function (e, n) {
      var r = {
        elementHovered: ct(e)
      };
      return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) && t(e, r) || r;
    };
  },
      dt = function dt(t) {
    return function (e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = ut(),
          i = r.stiffScrollTop,
          o = r.scrollHeight,
          a = r.innerHeight,
          u = e.event,
          c = u.config,
          s = u.eventTypeId,
          f = c.scrollOffsetValue,
          d = "PX" === c.scrollOffsetUnit,
          p = o - a,
          v = Number((i / p).toFixed(2));
      if (n && n.percentTop === v) return n;
      var h,
          E,
          g = (d ? f : a * (f || 0) / 100) / p,
          _ = 0;
      n && (h = v > n.percentTop, _ = (E = n.scrollingDown !== h) ? v : n.anchorTop);
      var y = s === M ? v >= _ + g : v <= _ - g,
          m = (0, l["default"])({}, n, {
        percentTop: v,
        inBounds: y,
        anchorTop: _,
        scrollingDown: h
      });
      return n && y && (E || m.inBounds !== n.inBounds) && t(e, m) || m;
    };
  },
      pt = function pt(t) {
    return function (e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        clickCount: 0
      },
          r = {
        clickCount: n.clickCount % 2 + 1
      };
      return r.clickCount !== n.clickCount && t(e, r) || r;
    };
  },
      vt = function vt() {
    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
    return (0, l["default"])({}, rt, {
      handler: et(t ? Z : q, ft(function (t, e) {
        return e.isActive ? nt.handler(t, e) : e;
      }))
    });
  },
      ht = function ht() {
    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
    return (0, l["default"])({}, rt, {
      handler: et(t ? Z : q, ft(function (t, e) {
        return e.isActive ? e : nt.handler(t, e);
      }))
    });
  },
      Et = (0, l["default"])({}, ot, {
    handler: (f = function f(t, e) {
      var n = e.elementVisible,
          r = t.event;
      return !t.store.getState().ixData.events[r.action.config.autoStopEventId] && e.triggered ? e : r.eventTypeId === j === n ? (tt(t), (0, l["default"])({}, e, {
        triggered: !0
      })) : e;
    }, function (t, e) {
      var n = (0, l["default"])({}, e, {
        elementVisible: st(t)
      });
      return (e ? n.elementVisible !== e.elementVisible : n.elementVisible) && f(t, n) || n;
    })
  }),
      gt = (r = {}, (0, o["default"])(r, x, vt()), (0, o["default"])(r, R, ht()), (0, o["default"])(r, S, vt()), (0, o["default"])(r, A, ht()), (0, o["default"])(r, D, vt(!1)), (0, o["default"])(r, L, ht(!1)), (0, o["default"])(r, N, vt()), (0, o["default"])(r, C, ht()), (0, o["default"])(r, V, {
    types: "ecommerce-cart-open",
    handler: et(Z, tt)
  }), (0, o["default"])(r, U, {
    types: "ecommerce-cart-close",
    handler: et(Z, tt)
  }), (0, o["default"])(r, m, {
    types: "click",
    handler: et(Z, pt(function (t, e) {
      var n,
          r,
          i,
          o = e.clickCount;
      r = (n = t).store, i = n.event.action.config.autoStopEventId, Boolean(J(r, i)) ? 1 === o && tt(t) : tt(t);
    }))
  }), (0, o["default"])(r, I, {
    types: "click",
    handler: et(Z, pt(function (t, e) {
      2 === e.clickCount && tt(t);
    }))
  }), (0, o["default"])(r, T, (0, l["default"])({}, nt, {
    types: "mousedown"
  })), (0, o["default"])(r, b, (0, l["default"])({}, nt, {
    types: "mouseup"
  })), (0, o["default"])(r, O, {
    types: "mouseover mouseout",
    handler: et(Z, lt(function (t, e) {
      e.elementHovered && tt(t);
    }))
  }), (0, o["default"])(r, w, {
    types: "mouseover mouseout",
    handler: et(Z, lt(function (t, e) {
      e.elementHovered || tt(t);
    }))
  }), (0, o["default"])(r, P, {
    types: "mousemove mouseout scroll",
    handler: function handler(t) {
      var e = t.store,
          n = t.element,
          r = t.eventConfig,
          i = t.nativeEvent,
          o = t.eventStateKey,
          a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0
      },
          u = r.basedOn,
          c = r.selectedAxis,
          s = r.continuousParameterGroupId,
          f = r.reverse,
          l = r.restingState,
          d = void 0 === l ? 0 : l,
          p = i.clientX,
          v = void 0 === p ? a.clientX : p,
          E = i.clientY,
          _ = void 0 === E ? a.clientY : E,
          y = i.pageX,
          m = void 0 === y ? a.pageX : y,
          I = i.pageY,
          T = void 0 === I ? a.pageY : I,
          b = "X_AXIS" === c,
          O = "mouseout" === i.type,
          w = d / 100,
          A = s,
          S = !1;

      switch (u) {
        case h.EventBasedOn.VIEWPORT:
          w = b ? Math.min(v, window.innerWidth) / window.innerWidth : Math.min(_, window.innerHeight) / window.innerHeight;
          break;

        case h.EventBasedOn.PAGE:
          var x = ut(),
              R = x.scrollLeft,
              N = x.scrollTop,
              C = x.scrollWidth,
              L = x.scrollHeight;
          w = b ? Math.min(R + m, C) / C : Math.min(N + T, L) / L;
          break;

        case h.EventBasedOn.ELEMENT:
        default:
          A = K(o, s);
          var D = 0 === i.type.indexOf("mouse");
          if (D && !0 !== Z({
            element: n,
            nativeEvent: i
          })) break;
          var P = n.getBoundingClientRect(),
              M = P.left,
              j = P.top,
              F = P.width,
              k = P.height;
          if (!D && !function (t, e) {
            return t.left > e.left && t.left < e.right && t.top > e.top && t.top < e.bottom;
          }({
            left: v,
            top: _
          }, P)) break;
          S = !0, w = b ? (v - M) / F : (_ - j) / k;
      }

      return O && (w > .95 || w < .05) && (w = Math.round(w)), (u !== h.EventBasedOn.ELEMENT || S || S !== a.elementHovered) && (w = f ? 1 - w : w, e.dispatch((0, g.parameterChanged)(A, w))), {
        elementHovered: S,
        clientX: v,
        clientY: _,
        pageX: m,
        pageY: T
      };
    }
  }), (0, o["default"])(r, B, {
    types: it,
    handler: function handler(t) {
      var e = t.store,
          n = t.eventConfig,
          r = n.continuousParameterGroupId,
          i = n.reverse,
          o = ut(),
          a = o.scrollTop / (o.scrollHeight - o.clientHeight);
      a = i ? 1 - a : a, e.dispatch((0, g.parameterChanged)(r, a));
    }
  }), (0, o["default"])(r, X, {
    types: it,
    handler: function handler(t) {
      var e = t.element,
          n = t.store,
          r = t.eventConfig,
          i = t.eventStateKey,
          o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        scrollPercent: 0
      },
          a = ut(),
          u = a.scrollLeft,
          c = a.scrollTop,
          s = a.scrollWidth,
          f = a.scrollHeight,
          l = a.clientHeight,
          d = r.basedOn,
          p = r.selectedAxis,
          v = r.continuousParameterGroupId,
          E = r.startsEntering,
          _ = r.startsExiting,
          y = r.addEndOffset,
          m = r.addStartOffset,
          I = r.addOffsetValue,
          T = void 0 === I ? 0 : I,
          b = r.endOffsetValue,
          O = void 0 === b ? 0 : b,
          w = "X_AXIS" === p;

      if (d === h.EventBasedOn.VIEWPORT) {
        var A = w ? u / s : c / f;
        return A !== o.scrollPercent && n.dispatch((0, g.parameterChanged)(v, A)), {
          scrollPercent: A
        };
      }

      var S = K(i, v),
          x = e.getBoundingClientRect(),
          R = (m ? T : 0) / 100,
          N = (y ? O : 0) / 100;
      R = E ? R : 1 - R, N = _ ? N : 1 - N;
      var C = x.top + Math.min(x.height * R, l),
          L = x.top + x.height * N - C,
          D = Math.min(l + L, f),
          P = Math.min(Math.max(0, l - C), D) / D;
      return P !== o.scrollPercent && n.dispatch((0, g.parameterChanged)(S, P)), {
        scrollPercent: P
      };
    }
  }), (0, o["default"])(r, j, Et), (0, o["default"])(r, F, Et), (0, o["default"])(r, M, (0, l["default"])({}, ot, {
    handler: dt(function (t, e) {
      e.scrollingDown && tt(t);
    })
  })), (0, o["default"])(r, k, (0, l["default"])({}, ot, {
    handler: dt(function (t, e) {
      e.scrollingDown || tt(t);
    })
  })), (0, o["default"])(r, G, {
    types: "readystatechange IX2_PAGE_UPDATE",
    handler: et(q, function (t) {
      return function (e, n) {
        var r = {
          finished: "complete" === document.readyState
        };
        return !r.finished || n && n.finshed || t(e), r;
      };
    }(tt))
  }), (0, o["default"])(r, W, {
    types: "readystatechange IX2_PAGE_UPDATE",
    handler: et(q, function (t) {
      return function (e, n) {
        return n || t(e), {
          started: !0
        };
      };
    }(tt))
  }), r);

  e["default"] = gt;
}, function (t, e, n) {
  var r = n(294)();
  t.exports = r;
}, function (t, e, n) {
  var r = n(62),
      i = n(295),
      o = n(118),
      a = n(119),
      u = n(1),
      c = n(308),
      s = "Expected a function",
      f = 8,
      l = 32,
      d = 128,
      p = 256;

  t.exports = function (t) {
    return i(function (e) {
      var n = e.length,
          i = n,
          v = r.prototype.thru;

      for (t && e.reverse(); i--;) {
        var h = e[i];
        if ("function" != typeof h) throw new TypeError(s);
        if (v && !E && "wrapper" == a(h)) var E = new r([], !0);
      }

      for (i = E ? i : n; ++i < n;) {
        h = e[i];

        var g = a(h),
            _ = "wrapper" == g ? o(h) : void 0;

        E = _ && c(_[0]) && _[1] == (d | f | l | p) && !_[4].length && 1 == _[9] ? E[a(_[0])].apply(E, _[3]) : 1 == h.length && c(h) ? E[g]() : E.thru(h);
      }

      return function () {
        var t = arguments,
            r = t[0];
        if (E && 1 == t.length && u(r)) return E.plant(r).value();

        for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;) {
          o = e[i].call(this, o);
        }

        return o;
      };
    });
  };
}, function (t, e, n) {
  var r = n(296),
      i = n(299),
      o = n(301);

  t.exports = function (t) {
    return o(i(t, void 0, r), t + "");
  };
}, function (t, e, n) {
  var r = n(297);

  t.exports = function (t) {
    return null != t && t.length ? r(t, 1) : [];
  };
}, function (t, e, n) {
  var r = n(48),
      i = n(298);

  t.exports = function t(e, n, o, a, u) {
    var c = -1,
        s = e.length;

    for (o || (o = i), u || (u = []); ++c < s;) {
      var f = e[c];
      n > 0 && o(f) ? n > 1 ? t(f, n - 1, o, a, u) : r(u, f) : a || (u[u.length] = f);
    }

    return u;
  };
}, function (t, e, n) {
  var r = n(20),
      i = n(34),
      o = n(1),
      a = r ? r.isConcatSpreadable : void 0;

  t.exports = function (t) {
    return o(t) || i(t) || !!(a && t && t[a]);
  };
}, function (t, e, n) {
  var r = n(300),
      i = Math.max;

  t.exports = function (t, e, n) {
    return e = i(void 0 === e ? t.length - 1 : e, 0), function () {
      for (var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u); ++a < u;) {
        c[a] = o[e + a];
      }

      a = -1;

      for (var s = Array(e + 1); ++a < e;) {
        s[a] = o[a];
      }

      return s[e] = n(c), r(t, this, s);
    };
  };
}, function (t, e) {
  t.exports = function (t, e, n) {
    switch (n.length) {
      case 0:
        return t.call(e);

      case 1:
        return t.call(e, n[0]);

      case 2:
        return t.call(e, n[0], n[1]);

      case 3:
        return t.call(e, n[0], n[1], n[2]);
    }

    return t.apply(e, n);
  };
}, function (t, e, n) {
  var r = n(302),
      i = n(304)(r);
  t.exports = i;
}, function (t, e, n) {
  var r = n(303),
      i = n(116),
      o = n(59),
      a = i ? function (t, e) {
    return i(t, "toString", {
      configurable: !0,
      enumerable: !1,
      value: r(e),
      writable: !0
    });
  } : o;
  t.exports = a;
}, function (t, e) {
  t.exports = function (t) {
    return function () {
      return t;
    };
  };
}, function (t, e) {
  var n = 800,
      r = 16,
      i = Date.now;

  t.exports = function (t) {
    var e = 0,
        o = 0;
    return function () {
      var a = i(),
          u = r - (a - o);

      if (o = a, u > 0) {
        if (++e >= n) return arguments[0];
      } else e = 0;

      return t.apply(void 0, arguments);
    };
  };
}, function (t, e, n) {
  var r = n(99),
      i = r && new r();
  t.exports = i;
}, function (t, e) {
  t.exports = function () {};
}, function (t, e) {
  t.exports = {};
}, function (t, e, n) {
  var r = n(64),
      i = n(118),
      o = n(119),
      a = n(309);

  t.exports = function (t) {
    var e = o(t),
        n = a[e];
    if ("function" != typeof n || !(e in r.prototype)) return !1;
    if (t === n) return !0;
    var u = i(n);
    return !!u && t === u[0];
  };
}, function (t, e, n) {
  var r = n(64),
      i = n(62),
      o = n(63),
      a = n(1),
      u = n(9),
      c = n(310),
      s = Object.prototype.hasOwnProperty;

  function f(t) {
    if (u(t) && !a(t) && !(t instanceof r)) {
      if (t instanceof i) return t;
      if (s.call(t, "__wrapped__")) return c(t);
    }

    return new i(t);
  }

  f.prototype = o.prototype, f.prototype.constructor = f, t.exports = f;
}, function (t, e, n) {
  var r = n(64),
      i = n(62),
      o = n(311);

  t.exports = function (t) {
    if (t instanceof r) return t.clone();
    var e = new i(t.__wrapped__, t.__chain__);
    return e.__actions__ = o(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e;
  };
}, function (t, e) {
  t.exports = function (t, e) {
    var n = -1,
        r = t.length;

    for (e || (e = Array(r)); ++n < r;) {
      e[n] = t[n];
    }

    return e;
  };
}, function (t, e, n) {
  var r = n(313),
      i = n(60);

  t.exports = function (t, e, n) {
    return void 0 === n && (n = e, e = void 0), void 0 !== n && (n = (n = i(n)) == n ? n : 0), void 0 !== e && (e = (e = i(e)) == e ? e : 0), r(i(t), e, n);
  };
}, function (t, e) {
  t.exports = function (t, e, n) {
    return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(4);
  r.define("links", t.exports = function (t, e) {
    var n,
        i,
        o,
        a = {},
        u = t(window),
        c = r.env(),
        s = window.location,
        f = document.createElement("a"),
        l = "w--current",
        d = /index\.(html|php)$/,
        p = /\/$/;

    function v(e) {
      var r = n && e.getAttribute("href-disabled") || e.getAttribute("href");

      if (f.href = r, !(r.indexOf(":") >= 0)) {
        var a = t(e);

        if (f.hash.length > 1 && f.host + f.pathname === s.host + s.pathname) {
          if (!/^#[a-zA-Z0-9\-\_]+$/.test(f.hash)) return;
          var u = t(f.hash);
          u.length && i.push({
            link: a,
            sec: u,
            active: !1
          });
        } else if ("#" !== r && "" !== r) {
          var c = f.href === s.href || r === o || d.test(r) && p.test(o);
          E(a, l, c);
        }
      }
    }

    function h() {
      var t = u.scrollTop(),
          n = u.height();
      e.each(i, function (e) {
        var r = e.link,
            i = e.sec,
            o = i.offset().top,
            a = i.outerHeight(),
            u = .5 * n,
            c = i.is(":visible") && o + a - u >= t && o + u <= t + n;
        e.active !== c && (e.active = c, E(r, l, c));
      });
    }

    function E(t, e, n) {
      var r = t.hasClass(e);
      n && r || (n || r) && (n ? t.addClass(e) : t.removeClass(e));
    }

    return a.ready = a.design = a.preview = function () {
      n = c && r.env("design"), o = r.env("slug") || s.pathname || "", r.scroll.off(h), i = [];

      for (var t = document.links, e = 0; e < t.length; ++e) {
        v(t[e]);
      }

      i.length && (r.scroll.on(h), h());
    }, a;
  });
}, function (t, e, n) {
  "use strict";

  var r = n(4);
  r.define("scroll", t.exports = function (t) {
    var e = {
      WF_CLICK_EMPTY: "click.wf-empty-link",
      WF_CLICK_SCROLL: "click.wf-scroll"
    },
        n = window.location,
        i = function () {
      try {
        return Boolean(window.frameElement);
      } catch (t) {
        return !0;
      }
    }() ? null : window.history,
        o = t(window),
        a = t(document),
        u = t(document.body),
        c = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (t) {
      window.setTimeout(t, 15);
    },
        s = r.env("editor") ? ".w-editor-body" : "body",
        f = "header, " + s + " > .header, " + s + " > .w-nav:not([data-no-scroll])",
        l = 'a[href="#"]',
        d = 'a[href*="#"]:not(.w-tab-link):not(' + l + ")";

    var p = /^#[a-zA-Z0-9][\w:.-]*$/;

    function v(e) {
      var a = e.currentTarget;

      if (!(r.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(a.className))) {
        var s,
            l = (s = a, p.test(s.hash) && s.host + s.pathname === n.host + n.pathname ? a.hash : "");

        if ("" !== l) {
          var d = t(l);
          d.length && (e && (e.preventDefault(), e.stopPropagation()), function (t) {
            if (n.hash !== t && i && i.pushState && (!r.env.chrome || "file:" !== n.protocol)) {
              var e = i.state && i.state.hash;
              e !== t && i.pushState({
                hash: t
              }, "", t);
            }
          }(l), window.setTimeout(function () {
            !function (e) {
              var n = o.scrollTop(),
                  r = function (e) {
                var n = t(f),
                    r = "fixed" === n.css("position") ? n.outerHeight() : 0,
                    i = e.offset().top - r;

                if ("mid" === e.data("scroll")) {
                  var a = o.height() - r,
                      u = e.outerHeight();
                  u < a && (i -= Math.round((a - u) / 2));
                }

                return i;
              }(e);

              if (n === r) return;

              var i = function (t, e, n) {
                if (document.body.hasAttribute("data-wf-reduce-scroll-motion") && ("none" === document.body.getAttribute("data-wf-scroll-motion") || "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) return 0;
                var r = 1;
                return u.add(t).each(function (t, e) {
                  var n = parseFloat(e.getAttribute("data-scroll-time"));
                  !isNaN(n) && n >= 0 && (r = n);
                }), (472.143 * Math.log(Math.abs(e - n) + 125) - 2e3) * r;
              }(e, n, r),
                  a = Date.now();

              c(function t() {
                var e = Date.now() - a;
                window.scroll(0, function (t, e, n, r) {
                  return n > r ? e : t + (e - t) * ((i = n / r) < .5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1);
                  var i;
                }(n, r, e, i)), e <= i && c(t);
              });
            }(d);
          }, e ? 0 : 300));
        }
      }
    }

    return {
      ready: function ready() {
        var t = e.WF_CLICK_EMPTY,
            n = e.WF_CLICK_SCROLL;
        a.on(n, d, v), a.on(t, l, function (t) {
          t.preventDefault();
        });
      }
    };
  });
}, function (t, e, n) {
  "use strict";

  n(4).define("touch", t.exports = function (t) {
    var e = {},
        n = window.getSelection;

    function r(e) {
      var r,
          i,
          o = !1,
          a = !1,
          u = Math.min(Math.round(.04 * window.innerWidth), 40);

      function c(t) {
        var e = t.touches;
        e && e.length > 1 || (o = !0, e ? (a = !0, r = e[0].clientX) : r = t.clientX, i = r);
      }

      function s(e) {
        if (o) {
          if (a && "mousemove" === e.type) return e.preventDefault(), void e.stopPropagation();
          var r = e.touches,
              c = r ? r[0].clientX : e.clientX,
              s = c - i;
          i = c, Math.abs(s) > u && n && "" === String(n()) && (!function (e, n, r) {
            var i = t.Event(e, {
              originalEvent: n
            });
            t(n.target).trigger(i, r);
          }("swipe", e, {
            direction: s > 0 ? "right" : "left"
          }), l());
        }
      }

      function f(t) {
        if (o) return o = !1, a && "mouseup" === t.type ? (t.preventDefault(), t.stopPropagation(), void (a = !1)) : void 0;
      }

      function l() {
        o = !1;
      }

      e.addEventListener("touchstart", c, !1), e.addEventListener("touchmove", s, !1), e.addEventListener("touchend", f, !1), e.addEventListener("touchcancel", l, !1), e.addEventListener("mousedown", c, !1), e.addEventListener("mousemove", s, !1), e.addEventListener("mouseup", f, !1), e.addEventListener("mouseout", l, !1), this.destroy = function () {
        e.removeEventListener("touchstart", c, !1), e.removeEventListener("touchmove", s, !1), e.removeEventListener("touchend", f, !1), e.removeEventListener("touchcancel", l, !1), e.removeEventListener("mousedown", c, !1), e.removeEventListener("mousemove", s, !1), e.removeEventListener("mouseup", f, !1), e.removeEventListener("mouseout", l, !1), e = null;
      };
    }

    return t.event.special.tap = {
      bindType: "click",
      delegateType: "click"
    }, e.init = function (e) {
      return (e = "string" == typeof e ? t(e).get(0) : e) ? new r(e) : null;
    }, e.instance = e.init(document), e;
  });
}, function (t, e, n) {
  "use strict";

  var r = n(4),
      i = n(22),
      o = {
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    ESCAPE: 27,
    SPACE: 32,
    ENTER: 13,
    HOME: 36,
    END: 35
  },
      a = !0,
      u = /^#[a-zA-Z0-9\-_]+$/;
  r.define("dropdown", t.exports = function (t, e) {
    var n,
        c,
        s = e.debounce,
        f = {},
        l = r.env(),
        d = !1,
        p = r.env.touch,
        v = ".w-dropdown",
        h = "w--open",
        E = i.triggers,
        g = 900,
        _ = "focusout" + v,
        y = "keydown" + v,
        m = "mouseenter" + v,
        I = "mousemove" + v,
        T = "mouseleave" + v,
        b = (p ? "click" : "mouseup") + v,
        O = "w-close" + v,
        w = "setting" + v,
        A = t(document);

    function S() {
      n = l && r.env("design"), (c = A.find(v)).each(x);
    }

    function x(e, i) {
      var c = t(i),
          f = t.data(i, v);
      f || (f = t.data(i, v, {
        open: !1,
        el: c,
        config: {},
        selectedIdx: -1
      })), f.toggle = f.el.children(".w-dropdown-toggle"), f.list = f.el.children(".w-dropdown-list"), f.links = f.list.find("a:not(.w-dropdown .w-dropdown a)"), f.complete = function (t) {
        return function () {
          t.list.removeClass(h), t.toggle.removeClass(h), t.manageZ && t.el.css("z-index", "");
        };
      }(f), f.mouseLeave = function (t) {
        return function () {
          t.hovering = !1, t.links.is(":focus") || L(t);
        };
      }(f), f.mouseUpOutside = function (e) {
        e.mouseUpOutside && A.off(b, e.mouseUpOutside);
        return s(function (n) {
          if (e.open) {
            var i = t(n.target);

            if (!i.closest(".w-dropdown-toggle").length) {
              var o = -1 === t.inArray(e.el[0], i.parents(v)),
                  a = r.env("editor");

              if (o) {
                if (a) {
                  var u = 1 === i.parents().length && 1 === i.parents("svg").length,
                      c = i.parents(".w-editor-bem-EditorHoverControls").length;
                  if (u || c) return;
                }

                L(e);
              }
            }
          }
        });
      }(f), f.mouseMoveOutside = function (e) {
        return s(function (n) {
          if (e.open) {
            var r = t(n.target),
                i = -1 === t.inArray(e.el[0], r.parents(v));

            if (i) {
              var o = r.parents(".w-editor-bem-EditorHoverControls").length,
                  a = r.parents(".w-editor-bem-RTToolbar").length,
                  u = t(".w-editor-bem-EditorOverlay"),
                  c = u.find(".w-editor-edit-outline").length || u.find(".w-editor-bem-RTToolbar").length;
              if (o || a || c) return;
              e.hovering = !1, L(e);
            }
          }
        });
      }(f), R(f);
      var p = f.toggle.attr("id"),
          E = f.list.attr("id");
      p || (p = "w-dropdown-toggle-" + e), E || (E = "w-dropdown-list-" + e), f.toggle.attr("id", p), f.toggle.attr("aria-controls", E), f.toggle.attr("aria-haspopup", "menu"), f.toggle.attr("aria-expanded", "false"), "BUTTON" !== f.toggle.prop("tagName") && (f.toggle.attr("role", "button"), f.toggle.attr("tabindex") || f.toggle.attr("tabindex", "0")), f.list.attr("id", E), f.list.attr("aria-labelledby", p), f.links.each(function (t, e) {
        e.hasAttribute("tabindex") || e.setAttribute("tabindex", "0"), u.test(e.hash) && e.addEventListener("click", L.bind(null, f));
      }), f.el.off(v), f.toggle.off(v), f.nav && f.nav.off(v);
      var g = N(f, a);
      n && f.el.on(w, function (t) {
        return function (e, n) {
          n = n || {}, R(t), !0 === n.open && C(t), !1 === n.open && L(t, {
            immediate: !0
          });
        };
      }(f)), n || (l && (f.hovering = !1, L(f)), f.config.hover && f.toggle.on(m, function (t) {
        return function () {
          t.hovering = !0, C(t);
        };
      }(f)), f.el.on(O, g), f.el.on(y, function (t) {
        return function (e) {
          if (!n && !d && t.open) switch (t.selectedIdx = t.links.index(document.activeElement), e.keyCode) {
            case o.HOME:
              if (!t.open) return;
              return t.selectedIdx = 0, D(t), e.preventDefault();

            case o.END:
              if (!t.open) return;
              return t.selectedIdx = t.links.length - 1, D(t), e.preventDefault();

            case o.ESCAPE:
              return L(t), t.toggle.focus(), e.stopPropagation();

            case o.ARROW_RIGHT:
            case o.ARROW_DOWN:
              return t.selectedIdx = Math.min(t.links.length - 1, t.selectedIdx + 1), D(t), e.preventDefault();

            case o.ARROW_LEFT:
            case o.ARROW_UP:
              return t.selectedIdx = Math.max(-1, t.selectedIdx - 1), D(t), e.preventDefault();
          }
        };
      }(f)), f.el.on(_, function (t) {
        return s(function (e) {
          var n = e.relatedTarget,
              r = e.target,
              i = t.el[0],
              o = i.contains(n) || i.contains(r);
          return o || L(t), e.stopPropagation();
        });
      }(f)), f.toggle.on(b, g), f.toggle.on(y, function (t) {
        var e = N(t, a);
        return function (r) {
          if (!n && !d) {
            if (!t.open) switch (r.keyCode) {
              case o.ARROW_UP:
              case o.ARROW_DOWN:
                return r.stopPropagation();
            }

            switch (r.keyCode) {
              case o.SPACE:
              case o.ENTER:
                return e(), r.stopPropagation(), r.preventDefault();
            }
          }
        };
      }(f)), f.nav = f.el.closest(".w-nav"), f.nav.on(O, g));
    }

    function R(t) {
      var e = Number(t.el.css("z-index"));
      t.manageZ = e === g || e === g + 1, t.config = {
        hover: (!0 === t.el.attr("data-hover") || "1" === t.el.attr("data-hover")) && !p,
        delay: Number(t.el.attr("data-delay")) || 0
      };
    }

    function N(t, e) {
      return s(function (n) {
        if (t.open || n && "w-close" === n.type) return L(t, {
          forceClose: e
        });
        C(t);
      });
    }

    function C(e) {
      if (!e.open) {
        !function (e) {
          var n = e.el[0];
          c.each(function (e, r) {
            var i = t(r);
            i.is(n) || i.has(n).length || i.triggerHandler(O);
          });
        }(e), e.open = !0, e.list.addClass(h), e.toggle.addClass(h), e.toggle.attr("aria-expanded", "true"), E.intro(0, e.el[0]), r.redraw.up(), e.manageZ && e.el.css("z-index", g + 1);
        var i = r.env("editor");
        n || A.on(b, e.mouseUpOutside), e.hovering && !i && e.el.on(T, e.mouseLeave), e.hovering && i && A.on(I, e.mouseMoveOutside), window.clearTimeout(e.delayId);
      }
    }

    function L(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = e.immediate,
          r = e.forceClose;

      if (t.open && (!t.config.hover || !t.hovering || r)) {
        t.toggle.attr("aria-expanded", "false"), t.open = !1;
        var i = t.config;
        if (E.outro(0, t.el[0]), A.off(b, t.mouseUpOutside), A.off(I, t.mouseMoveOutside), t.el.off(T, t.mouseLeave), window.clearTimeout(t.delayId), !i.delay || n) return t.complete();
        t.delayId = window.setTimeout(t.complete, i.delay);
      }
    }

    function D(t) {
      t.links[t.selectedIdx] && t.links[t.selectedIdx].focus();
    }

    return f.ready = S, f.design = function () {
      d && A.find(v).each(function (e, n) {
        t(n).triggerHandler(O);
      }), d = !1, S();
    }, f.preview = function () {
      d = !0, S();
    }, f;
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0)(n(319)),
      i = n(4);
  i.define("forms", t.exports = function (t, e) {
    var n,
        o,
        a,
        u,
        c,
        s = {},
        f = t(document),
        l = window.location,
        d = window.XDomainRequest && !window.atob,
        p = ".w-form",
        v = /e(-)?mail/i,
        h = /^\S+@\S+$/,
        E = window.alert,
        g = i.env(),
        _ = /list-manage[1-9]?.com/i,
        y = e.debounce(function () {
      E("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.");
    }, 100);

    function m(e, n) {
      var r = t(n),
          i = t.data(n, p);
      i || (i = t.data(n, p, {
        form: r
      })), I(i);
      var a = r.closest("div.w-form");
      i.done = a.find("> .w-form-done"), i.fail = a.find("> .w-form-fail"), i.fileUploads = a.find(".w-file-upload"), i.fileUploads.each(function (e) {
        !function (e, n) {
          if (!n.fileUploads || !n.fileUploads[e]) return;

          var r,
              i = t(n.fileUploads[e]),
              o = i.find("> .w-file-upload-default"),
              a = i.find("> .w-file-upload-uploading"),
              u = i.find("> .w-file-upload-success"),
              s = i.find("> .w-file-upload-error"),
              f = o.find(".w-file-upload-input"),
              l = o.find(".w-file-upload-label"),
              d = l.children(),
              p = s.find(".w-file-upload-error-msg"),
              v = u.find(".w-file-upload-file"),
              h = u.find(".w-file-remove-link"),
              E = v.find(".w-file-upload-file-name"),
              _ = p.attr("data-w-size-error"),
              y = p.attr("data-w-type-error"),
              m = p.attr("data-w-generic-error");

          if (g) f.on("click", function (t) {
            t.preventDefault();
          }), l.on("click", function (t) {
            t.preventDefault();
          }), d.on("click", function (t) {
            t.preventDefault();
          });else {
            h.on("click", function () {
              f.removeAttr("data-value"), f.val(""), E.html(""), o.toggle(!0), u.toggle(!1);
            }), f.on("change", function (i) {
              (r = i.target && i.target.files && i.target.files[0]) && (o.toggle(!1), s.toggle(!1), a.toggle(!0), E.text(r.name), S() || T(n), n.fileUploads[e].uploading = !0, function (e, n) {
                var r = {
                  name: e.name,
                  size: e.size
                };
                t.ajax({
                  type: "POST",
                  url: c,
                  data: r,
                  dataType: "json",
                  crossDomain: !0
                }).done(function (t) {
                  n(null, t);
                }).fail(function (t) {
                  n(t);
                });
              }(r, w));
            });
            var b = l.outerHeight();
            f.height(b), f.width(1);
          }

          function O(t) {
            var r = t.responseJSON && t.responseJSON.msg,
                i = m;
            "string" == typeof r && 0 === r.indexOf("InvalidFileTypeError") ? i = y : "string" == typeof r && 0 === r.indexOf("MaxFileSizeError") && (i = _), p.text(i), f.removeAttr("data-value"), f.val(""), a.toggle(!1), o.toggle(!0), s.toggle(!0), n.fileUploads[e].uploading = !1, S() || I(n);
          }

          function w(e, n) {
            if (e) return O(e);
            var i = n.fileName,
                o = n.postData,
                a = n.fileId,
                u = n.s3Url;
            f.attr("data-value", a), function (e, n, r, i, o) {
              var a = new FormData();

              for (var u in n) {
                a.append(u, n[u]);
              }

              a.append("file", r, i), t.ajax({
                type: "POST",
                url: e,
                data: a,
                processData: !1,
                contentType: !1
              }).done(function () {
                o(null);
              }).fail(function (t) {
                o(t);
              });
            }(u, o, r, i, A);
          }

          function A(t) {
            if (t) return O(t);
            a.toggle(!1), u.css("display", "inline-block"), n.fileUploads[e].uploading = !1, S() || I(n);
          }

          function S() {
            var t = n.fileUploads && n.fileUploads.toArray() || [];
            return t.some(function (t) {
              return t.uploading;
            });
          }
        }(e, i);
      });
      var u = i.action = r.attr("action");
      i.handler = null, i.redirect = r.attr("data-redirect"), _.test(u) ? i.handler = w : u || (o ? i.handler = O : y());
    }

    function I(t) {
      var e = t.btn = t.form.find(':input[type="submit"]');
      t.wait = t.btn.attr("data-wait") || null, t.success = !1, e.prop("disabled", !1), t.label && e.val(t.label);
    }

    function T(t) {
      var e = t.btn,
          n = t.wait;
      e.prop("disabled", !0), n && (t.label = e.val(), e.val(n));
    }

    function b(e, n) {
      var r = null;
      return n = n || {}, e.find(':input:not([type="submit"]):not([type="file"])').each(function (i, o) {
        var a = t(o),
            u = a.attr("type"),
            c = a.attr("data-name") || a.attr("name") || "Field " + (i + 1),
            s = a.val();
        if ("checkbox" === u) s = a.is(":checked");else if ("radio" === u) {
          if (null === n[c] || "string" == typeof n[c]) return;
          s = e.find('input[name="' + a.attr("name") + '"]:checked').val() || null;
        }
        "string" == typeof s && (s = t.trim(s)), n[c] = s, r = r || function (t, e, n, r) {
          var i = null;
          "password" === e ? i = "Passwords cannot be submitted." : t.attr("required") ? r ? v.test(t.attr("type")) && (h.test(r) || (i = "Please enter a valid email address for: " + n)) : i = "Please fill out the required field: " + n : "g-recaptcha-response" !== n || r || (i = "Please confirm youâ€™re not a robot.");
          return i;
        }(a, u, c, s);
      }), r;
    }

    function O(e) {
      I(e);
      var n = e.form,
          r = {
        name: n.attr("data-name") || n.attr("name") || "Untitled Form",
        source: l.href,
        test: i.env(),
        fields: {},
        fileUploads: {},
        dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(n.html())
      };
      S(e);
      var a = b(n, r.fields);
      if (a) return E(a);
      r.fileUploads = function (e) {
        var n = {};
        return e.find(':input[type="file"]').each(function (e, r) {
          var i = t(r),
              o = i.attr("data-name") || i.attr("name") || "File " + (e + 1),
              a = i.attr("data-value");
          "string" == typeof a && (a = t.trim(a)), n[o] = a;
        }), n;
      }(n), T(e), o ? t.ajax({
        url: u,
        type: "POST",
        data: r,
        dataType: "json",
        crossDomain: !0
      }).done(function (t) {
        t && 200 === t.code && (e.success = !0), A(e);
      }).fail(function () {
        A(e);
      }) : A(e);
    }

    function w(n) {
      I(n);
      var r = n.form,
          i = {};

      if (!/^https/.test(l.href) || /^https/.test(n.action)) {
        S(n);
        var o,
            a = b(r, i);
        if (a) return E(a);
        T(n), e.each(i, function (t, e) {
          v.test(e) && (i.EMAIL = t), /^((full[ _-]?)?name)$/i.test(e) && (o = t), /^(first[ _-]?name)$/i.test(e) && (i.FNAME = t), /^(last[ _-]?name)$/i.test(e) && (i.LNAME = t);
        }), o && !i.FNAME && (o = o.split(" "), i.FNAME = o[0], i.LNAME = i.LNAME || o[1]);
        var u = n.action.replace("/post?", "/post-json?") + "&c=?",
            c = u.indexOf("u=") + 2;
        c = u.substring(c, u.indexOf("&", c));
        var s = u.indexOf("id=") + 3;
        s = u.substring(s, u.indexOf("&", s)), i["b_" + c + "_" + s] = "", t.ajax({
          url: u,
          data: i,
          dataType: "jsonp"
        }).done(function (t) {
          n.success = "success" === t.result || /already/.test(t.msg), n.success || console.info("MailChimp error: " + t.msg), A(n);
        }).fail(function () {
          A(n);
        });
      } else r.attr("method", "post");
    }

    function A(t) {
      var e = t.form,
          n = t.redirect,
          r = t.success;
      r && n ? i.location(n) : (t.done.toggle(r), t.fail.toggle(!r), e.toggle(!r), I(t));
    }

    function S(t) {
      t.evt && t.evt.preventDefault(), t.evt = null;
    }

    return s.ready = s.design = s.preview = function () {
      !function () {
        o = t("html").attr("data-wf-site"), u = "https://falgun.com/api/v1/form/" + o, d && u.indexOf("https://falgun.com") >= 0 && (u = u.replace("https://falgun.com", "http://formdata.falgun.com"));
        if (c = "".concat(u, "/signFile"), !(n = t(p + " form")).length) return;
        n.each(m);
      }(), g || a || function () {
        a = !0, f.on("submit", p + " form", function (e) {
          var n = t.data(this, p);
          n.handler && (n.evt = e, n.handler(n));
        });
        var e = [["checkbox", ".w-checkbox-input"], ["radio", ".w-radio-input"]];
        f.on("change", p + ' form input[type="checkbox"]:not(.w-checkbox-input)', function (e) {
          t(e.target).siblings(".w-checkbox-input").toggleClass("w--redirected-checked");
        }), f.on("change", p + ' form input[type="radio"]', function (e) {
          t('input[name="'.concat(e.target.name, '"]:not(').concat(".w-checkbox-input", ")")).map(function (e, n) {
            return t(n).siblings(".w-radio-input").removeClass("w--redirected-checked");
          });
          var n = t(e.target);
          n.hasClass("w-radio-input") || n.siblings(".w-radio-input").addClass("w--redirected-checked");
        }), e.forEach(function (e) {
          var n = (0, r["default"])(e, 2),
              i = n[0],
              o = n[1];
          f.on("focus", p + ' form input[type="'.concat(i, '"]:not(') + o + ")", function (e) {
            t(e.target).siblings(o).addClass("w--redirected-focus");
          }), f.on("blur", p + ' form input[type="'.concat(i, '"]:not(') + o + ")", function (e) {
            t(e.target).siblings(o).removeClass("w--redirected-focus");
          });
        });
      }();
    }, s;
  });
}, function (t, e, n) {
  var r = n(320),
      i = n(321),
      o = n(322);

  t.exports = function (t, e) {
    return r(t) || i(t, e) || o();
  };
}, function (t, e) {
  t.exports = function (t) {
    if (Array.isArray(t)) return t;
  };
}, function (t, e) {
  t.exports = function (t, e) {
    var n = [],
        r = !0,
        i = !1,
        o = void 0;

    try {
      for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) {
        ;
      }
    } catch (t) {
      i = !0, o = t;
    } finally {
      try {
        r || null == u["return"] || u["return"]();
      } finally {
        if (i) throw o;
      }
    }

    return n;
  };
}, function (t, e) {
  t.exports = function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
}, function (t, e, n) {
  "use strict";

  var r = n(4),
      i = n(22),
      o = {
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    ESCAPE: 27,
    SPACE: 32,
    ENTER: 13,
    HOME: 36,
    END: 35
  };
  r.define("falgunnavbar", t.exports = function (t, e) {
    var n,
        a,
        u,
        c,
        s = {},
        f = t.tram,
        l = t(window),
        d = t(document),
        p = e.debounce,
        v = r.env(),
        h = '<div class="w-nav-overlay" data-wf-ignore />',
        E = ".w-nav",
        g = "w--open",
        _ = "w--nav-dropdown-open",
        y = "w--nav-dropdown-toggle-open",
        m = "w--nav-dropdown-list-open",
        I = "w--nav-link-open",
        T = i.triggers,
        b = t();

    function O() {
      r.resize.off(w);
    }

    function w() {
      a.each(M);
    }

    function A(n, r) {
      var i = t(r),
          a = t.data(r, E);
      a || (a = t.data(r, E, {
        open: !1,
        el: i,
        config: {},
        selectedIdx: -1
      })), a.menu = i.find(".w-nav-menu"), a.links = a.menu.find(".w-nav-link"), a.dropdowns = a.menu.find(".w-dropdown"), a.dropdownToggle = a.menu.find(".w-dropdown-toggle"), a.dropdownList = a.menu.find(".w-dropdown-list"), a.button = i.find(".w-nav-button"), a.falgunconta = i.find(".w-falgunconta"), a.overlayfalguncontaId = "w-nav-overlay-" + n, a.outside = function (e) {
        e.outside && d.off("click" + E, e.outside);
        return function (n) {
          var r = t(n.target);
          c && r.closest(".w-editor-bem-EditorOverlay").length || P(e, r);
        };
      }(a);
      var s = i.find(".w-nav-brand");
      s && "/" === s.attr("href") && null == s.attr("aria-label") && s.attr("aria-label", "home"), a.button.attr("style", "-webkit-user-select: text;"), null == a.button.attr("aria-label") && a.button.attr("aria-label", "menu"), a.button.attr("role", "button"), a.button.attr("tabindex", "0"), a.button.attr("aria-controls", a.overlayfalguncontaId), a.button.attr("aria-haspopup", "menu"), a.button.attr("aria-expanded", "false"), a.el.off(E), a.button.off(E), a.menu.off(E), R(a), u ? (x(a), a.el.on("setting" + E, function (t) {
        return function (n, r) {
          r = r || {};
          var i = l.width();
          R(t), !0 === r.open && X(t, !0), !1 === r.open && U(t, !0), t.open && e.defer(function () {
            i !== l.width() && C(t);
          });
        };
      }(a))) : (!function (e) {
        if (e.overlay) return;
        e.overlay = t(h).appendTo(e.el), e.overlay.attr("id", e.overlayfalguncontaId), e.parent = e.menu.parent(), U(e, !0);
      }(a), a.button.on("click" + E, L(a)), a.menu.on("click" + E, "a", D(a)), a.button.on("keydown" + E, function (t) {
        return function (e) {
          switch (e.keyCode) {
            case o.SPACE:
            case o.ENTER:
              return L(t)(), e.preventDefault(), e.stopPropagation();

            case o.ESCAPE:
              return U(t), e.preventDefault(), e.stopPropagation();

            case o.ARROW_RIGHT:
            case o.ARROW_DOWN:
            case o.HOME:
            case o.END:
              return t.open ? (e.keyCode === o.END ? t.selectedIdx = t.links.length - 1 : t.selectedIdx = 0, N(t), e.preventDefault(), e.stopPropagation()) : (e.preventDefault(), e.stopPropagation());
          }
        };
      }(a)), a.el.on("keydown" + E, function (t) {
        return function (e) {
          if (t.open) switch (t.selectedIdx = t.links.index(document.activeElement), e.keyCode) {
            case o.HOME:
            case o.END:
              return e.keyCode === o.END ? t.selectedIdx = t.links.length - 1 : t.selectedIdx = 0, N(t), e.preventDefault(), e.stopPropagation();

            case o.ESCAPE:
              return U(t), t.button.focus(), e.preventDefault(), e.stopPropagation();

            case o.ARROW_LEFT:
            case o.ARROW_UP:
              return t.selectedIdx = Math.max(-1, t.selectedIdx - 1), N(t), e.preventDefault(), e.stopPropagation();

            case o.ARROW_RIGHT:
            case o.ARROW_DOWN:
              return t.selectedIdx = Math.min(t.links.length - 1, t.selectedIdx + 1), N(t), e.preventDefault(), e.stopPropagation();
          }
        };
      }(a))), M(n, r);
    }

    function S(e, n) {
      var r = t.data(n, E);
      r && (x(r), t.removeData(n, E));
    }

    function x(t) {
      t.overlay && (U(t, !0), t.overlay.remove(), t.overlay = null);
    }

    function R(t) {
      var n = {},
          r = t.config || {},
          i = n.animation = t.el.attr("data-animation") || "default";
      n.animOver = /^over/.test(i), n.animDirect = /left$/.test(i) ? -1 : 1, r.animation !== i && t.open && e.defer(C, t), n.easing = t.el.attr("data-easing") || "ease", n.easing2 = t.el.attr("data-easing2") || "ease";
      var o = t.el.attr("data-duration");
      n.duration = null != o ? Number(o) : 400, n.docHeight = t.el.attr("data-doc-height"), t.config = n;
    }

    function N(t) {
      if (t.links[t.selectedIdx]) {
        var e = t.links[t.selectedIdx];
        e.focus(), D(e);
      }
    }

    function C(t) {
      t.open && (U(t, !0), X(t, !0));
    }

    function L(t) {
      return p(function () {
        t.open ? U(t) : X(t);
      });
    }

    function D(e) {
      return function (n) {
        var i = t(this).attr("href");
        r.validClick(n.currentTarget) ? i && 0 === i.indexOf("#") && e.open && U(e) : n.preventDefault();
      };
    }

    s.ready = s.design = s.preview = function () {
      if (u = v && r.env("design"), c = r.env("editor"), n = t(document.body), !(a = d.find(E)).length) return;
      a.each(A), O(), r.resize.on(w);
    }, s.destroy = function () {
      b = t(), O(), a && a.length && a.each(S);
    };
    var P = p(function (t, e) {
      if (t.open) {
        var n = e.closest(".w-nav-menu");
        t.menu.is(n) || U(t);
      }
    });

    function M(e, n) {
      var r = t.data(n, E),
          i = r.collapsed = "none" !== r.button.css("display");

      if (!r.open || i || u || U(r, !0), r.falgunconta.length) {
        var o = function (e) {
          var n = e.falgunconta.css(j);
          "none" === n && (n = "");
          return function (e, r) {
            (r = t(r)).css(j, ""), "none" === r.css(j) && r.css(j, n);
          };
        }(r);

        r.links.each(o), r.dropdowns.each(o);
      }

      r.open && G(r);
    }

    var j = "max-width";

    function F(t, e) {
      e.setAttribute("data-nav-menu-open", "");
    }

    function k(t, e) {
      e.removeAttribute("data-nav-menu-open");
    }

    function X(t, e) {
      if (!t.open) {
        t.open = !0, t.menu.each(F), t.links.addClass(I), t.dropdowns.addClass(_), t.dropdownToggle.addClass(y), t.dropdownList.addClass(m), t.button.addClass(g);
        var n = t.config;
        ("none" === n.animation || !f.support.transform || n.duration <= 0) && (e = !0);
        var i = G(t),
            o = t.menu.outerHeight(!0),
            a = t.menu.outerWidth(!0),
            c = t.el.height(),
            s = t.el[0];
        if (M(0, s), T.intro(0, s), r.redraw.up(), u || d.on("click" + E, t.outside), e) v();else {
          var l = "transform " + n.duration + "ms " + n.easing;
          if (t.overlay && (b = t.menu.prev(), t.overlay.show().append(t.menu)), n.animOver) return f(t.menu).add(l).set({
            x: n.animDirect * a,
            height: i
          }).start({
            x: 0
          }).then(v), void (t.overlay && t.overlay.width(a));
          var p = c + o;
          f(t.menu).add(l).set({
            y: -p
          }).start({
            y: 0
          }).then(v);
        }
      }

      function v() {
        t.button.attr("aria-expanded", "true");
      }
    }

    function G(t) {
      var e = t.config,
          r = e.docHeight ? d.height() : n.height();
      return e.animOver ? t.menu.height(r) : "fixed" !== t.el.css("position") && (r -= t.el.outerHeight(!0)), t.overlay && t.overlay.height(r), r;
    }

    function U(t, e) {
      if (t.open) {
        t.open = !1, t.button.removeClass(g);
        var n = t.config;
        if (("none" === n.animation || !f.support.transform || n.duration <= 0) && (e = !0), T.outro(0, t.el[0]), d.off("click" + E, t.outside), e) return f(t.menu).stop(), void c();
        var r = "transform " + n.duration + "ms " + n.easing2,
            i = t.menu.outerHeight(!0),
            o = t.menu.outerWidth(!0),
            a = t.el.height();
        if (n.animOver) f(t.menu).add(r).start({
          x: o * n.animDirect
        }).then(c);else {
          var u = a + i;
          f(t.menu).add(r).start({
            y: -u
          }).then(c);
        }
      }

      function c() {
        t.menu.height(""), f(t.menu).set({
          x: 0,
          y: 0
        }), t.menu.each(k), t.links.removeClass(I), t.dropdowns.removeClass(_), t.dropdownToggle.removeClass(y), t.dropdownList.removeClass(m), t.overlay && t.overlay.children().length && (b.length ? t.menu.insertAfter(b) : t.menu.prependTo(t.parent), t.overlay.attr("style", "").hide()), t.el.triggerHandler("w-close"), t.button.attr("aria-expanded", "false");
      }
    }

    return s;
  });
}, function (t, e, n) {
  "use strict";

  var r = n(4),
      i = n(22),
      o = {
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    SPACE: 32,
    ENTER: 13,
    HOME: 36,
    END: 35
  },
      a = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
  r.define("slider", t.exports = function (t, e) {
    var n,
        u,
        c,
        s,
        f = {},
        l = t.tram,
        d = t(document),
        p = r.env(),
        v = ".w-slider",
        h = '<div class="w-slider-dot" data-wf-ignore />',
        E = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
        g = i.triggers;

    function _() {
      (n = d.find(v)).length && (n.each(I), s = null, c || (y(), r.resize.on(m), r.redraw.on(f.redraw)));
    }

    function y() {
      r.resize.off(m), r.redraw.off(f.redraw);
    }

    function m() {
      n.filter(":visible").each(D);
    }

    function I(e, n) {
      var r = t(n),
          i = t.data(n, v);
      i || (i = t.data(n, v, {
        index: 0,
        depth: 1,
        hasFocus: {
          keyboard: !1,
          mouse: !1
        },
        el: r,
        config: {}
      })), i.mask = r.children(".w-slider-mask"), i.left = r.children(".w-slider-arrow-left"), i.right = r.children(".w-slider-arrow-right"), i.nav = r.children(".w-slider-nav"), i.slides = i.mask.children(".w-slide"), i.slides.each(g.reset), s && (i.maskWidth = 0), void 0 === r.attr("role") && r.attr("role", "region"), void 0 === r.attr("aria-label") && r.attr("aria-label", "carousel");
      var o = i.mask.attr("id");
      if (o || (o = "w-slider-mask-" + e, i.mask.attr("id", o)), i.ariaLiveLabel = t(E).appendTo(i.mask), i.left.attr("role", "button"), i.left.attr("tabindex", "0"), i.left.attr("aria-controls", o), void 0 === i.left.attr("aria-label") && i.left.attr("aria-label", "previous slide"), i.right.attr("role", "button"), i.right.attr("tabindex", "0"), i.right.attr("aria-controls", o), void 0 === i.right.attr("aria-label") && i.right.attr("aria-label", "next slide"), !l.support.transform) return i.left.hide(), i.right.hide(), i.nav.hide(), void (c = !0);
      i.el.off(v), i.left.off(v), i.right.off(v), i.nav.off(v), T(i), u ? (i.el.on("setting" + v, N(i)), R(i), i.hasTimer = !1) : (i.el.on("swipe" + v, N(i)), i.left.on("click" + v, A(i)), i.right.on("click" + v, S(i)), i.left.on("keydown" + v, w(i, A)), i.right.on("keydown" + v, w(i, S)), i.nav.on("keydown" + v, "> div", N(i)), i.config.autoplay && !i.hasTimer && (i.hasTimer = !0, i.timerCount = 1, x(i)), i.el.on("mouseenter" + v, O(i, !0, "mouse")), i.el.on("focusin" + v, O(i, !0, "keyboard")), i.el.on("mouseleave" + v, O(i, !1, "mouse")), i.el.on("focusout" + v, O(i, !1, "keyboard"))), i.nav.on("click" + v, "> div", N(i)), p || i.mask.contents().filter(function () {
        return 3 === this.nodeType;
      }).remove();
      var a = r.filter(":hidden");
      a.show();
      var f = r.parents(":hidden");
      f.show(), D(e, n), a.css("display", ""), f.css("display", "");
    }

    function T(t) {
      var e = {
        crossOver: 0
      };
      e.animation = t.el.attr("data-animation") || "slide", "outin" === e.animation && (e.animation = "cross", e.crossOver = .5), e.easing = t.el.attr("data-easing") || "ease";
      var n = t.el.attr("data-duration");

      if (e.duration = null != n ? parseInt(n, 10) : 500, b(t.el.attr("data-infinite")) && (e.infinite = !0), b(t.el.attr("data-disable-swipe")) && (e.disableSwipe = !0), b(t.el.attr("data-hide-arrows")) ? e.hideArrows = !0 : t.config.hideArrows && (t.left.show(), t.right.show()), b(t.el.attr("data-autoplay"))) {
        e.autoplay = !0, e.delay = parseInt(t.el.attr("data-delay"), 10) || 2e3, e.timerMax = parseInt(t.el.attr("data-autoplay-limit"), 10);
        var r = "mousedown" + v + " touchstart" + v;
        u || t.el.off(r).one(r, function () {
          R(t);
        });
      }

      var i = t.right.width();
      e.edge = i ? i + 40 : 100, t.config = e;
    }

    function b(t) {
      return "1" === t || "true" === t;
    }

    function O(e, n, r) {
      return function (i) {
        if (n) e.hasFocus[r] = n;else {
          if (t.contains(e.el.get(0), i.relatedTarget)) return;
          if (e.hasFocus[r] = n, e.hasFocus.mouse && "keyboard" === r || e.hasFocus.keyboard && "mouse" === r) return;
        }
        n ? (e.ariaLiveLabel.attr("aria-live", "polite"), e.hasTimer && R(e)) : (e.ariaLiveLabel.attr("aria-live", "off"), e.hasTimer && x(e));
      };
    }

    function w(t, e) {
      return function (n) {
        switch (n.keyCode) {
          case o.SPACE:
          case o.ENTER:
            return e(t)(), n.preventDefault(), n.stopPropagation();
        }
      };
    }

    function A(t) {
      return function () {
        L(t, {
          index: t.index - 1,
          vector: -1
        });
      };
    }

    function S(t) {
      return function () {
        L(t, {
          index: t.index + 1,
          vector: 1
        });
      };
    }

    function x(t) {
      R(t);
      var e = t.config,
          n = e.timerMax;
      n && t.timerCount++ > n || (t.timerId = window.setTimeout(function () {
        null == t.timerId || u || (S(t)(), x(t));
      }, e.delay));
    }

    function R(t) {
      window.clearTimeout(t.timerId), t.timerId = null;
    }

    function N(n) {
      return function (i, a) {
        a = a || {};
        var c = n.config;

        if (u && "setting" === i.type) {
          if ("prev" === a.select) return A(n)();
          if ("next" === a.select) return S(n)();
          if (T(n), P(n), null == a.select) return;
          !function (n, r) {
            var i = null;
            r === n.slides.length && (_(), P(n)), e.each(n.anchors, function (e, n) {
              t(e.els).each(function (e, o) {
                t(o).index() === r && (i = n);
              });
            }), null != i && L(n, {
              index: i,
              immediate: !0
            });
          }(n, a.select);
        } else {
          if ("swipe" === i.type) {
            if (c.disableSwipe) return;
            if (r.env("editor")) return;
            return "left" === a.direction ? S(n)() : "right" === a.direction ? A(n)() : void 0;
          }

          if (n.nav.has(i.target).length) {
            var s = t(i.target).index();
            if ("click" === i.type && L(n, {
              index: s
            }), "keydown" === i.type) switch (i.keyCode) {
              case o.ENTER:
              case o.SPACE:
                L(n, {
                  index: s
                }), i.preventDefault();
                break;

              case o.ARROW_LEFT:
              case o.ARROW_UP:
                C(n.nav, Math.max(s - 1, 0)), i.preventDefault();
                break;

              case o.ARROW_RIGHT:
              case o.ARROW_DOWN:
                C(n.nav, Math.min(s + 1, n.pages)), i.preventDefault();
                break;

              case o.HOME:
                C(n.nav, 0), i.preventDefault();
                break;

              case o.END:
                C(n.nav, n.pages), i.preventDefault();
                break;

              default:
                return;
            }
          }
        }
      };
    }

    function C(t, e) {
      var n = t.children().eq(e).focus();
      t.children().not(n);
    }

    function L(e, n) {
      n = n || {};
      var r = e.config,
          i = e.anchors;
      e.previous = e.index;
      var o = n.index,
          c = {};
      o < 0 ? (o = i.length - 1, r.infinite && (c.x = -e.endX, c.from = 0, c.to = i[0].width)) : o >= i.length && (o = 0, r.infinite && (c.x = i[i.length - 1].width, c.from = -i[i.length - 1].x, c.to = c.from - c.x)), e.index = o;
      var f = e.nav.children().eq(o).addClass("w-active").attr("aria-selected", "true").attr("tabindex", "0");
      e.nav.children().not(f).removeClass("w-active").attr("aria-selected", "false").attr("tabindex", "-1"), r.hideArrows && (e.index === i.length - 1 ? e.right.hide() : e.right.show(), 0 === e.index ? e.left.hide() : e.left.show());

      var d = e.offsetX || 0,
          p = e.offsetX = -i[e.index].x,
          v = {
        x: p,
        opacity: 1,
        visibility: ""
      },
          h = t(i[e.index].els),
          E = t(i[e.previous] && i[e.previous].els),
          _ = e.slides.not(h),
          y = r.animation,
          m = r.easing,
          I = Math.round(r.duration),
          T = n.vector || (e.index > e.previous ? 1 : -1),
          b = "opacity " + I + "ms " + m,
          O = "transform " + I + "ms " + m;

      if (h.find(a).removeAttr("tabindex"), h.removeAttr("aria-hidden"), h.find("*").removeAttr("aria-hidden"), _.find(a).attr("tabindex", "-1"), _.attr("aria-hidden", "true"), _.find("*").attr("aria-hidden", "true"), u || (h.each(g.intro), _.each(g.outro)), n.immediate && !s) return l(h).set(v), void S();

      if (e.index !== e.previous) {
        if (e.ariaLiveLabel.text("Slide ".concat(o + 1, " of ").concat(i.length, ".")), "cross" === y) {
          var w = Math.round(I - I * r.crossOver),
              A = Math.round(I - w);
          return b = "opacity " + w + "ms " + m, l(E).set({
            visibility: ""
          }).add(b).start({
            opacity: 0
          }), void l(h).set({
            visibility: "",
            x: p,
            opacity: 0,
            zIndex: e.depth++
          }).add(b).wait(A).then({
            opacity: 1
          }).then(S);
        }

        if ("fade" === y) return l(E).set({
          visibility: ""
        }).stop(), void l(h).set({
          visibility: "",
          x: p,
          opacity: 0,
          zIndex: e.depth++
        }).add(b).start({
          opacity: 1
        }).then(S);
        if ("over" === y) return v = {
          x: e.endX
        }, l(E).set({
          visibility: ""
        }).stop(), void l(h).set({
          visibility: "",
          zIndex: e.depth++,
          x: p + i[e.index].width * T
        }).add(O).start({
          x: p
        }).then(S);
        r.infinite && c.x ? (l(e.slides.not(E)).set({
          visibility: "",
          x: c.x
        }).add(O).start({
          x: p
        }), l(E).set({
          visibility: "",
          x: c.from
        }).add(O).start({
          x: c.to
        }), e.shifted = E) : (r.infinite && e.shifted && (l(e.shifted).set({
          visibility: "",
          x: d
        }), e.shifted = null), l(e.slides).set({
          visibility: ""
        }).add(O).start({
          x: p
        }));
      }

      function S() {
        h = t(i[e.index].els), _ = e.slides.not(h), "slide" !== y && (v.visibility = "hidden"), l(_).set(v);
      }
    }

    function D(e, n) {
      var r = t.data(n, v);
      if (r) return function (t) {
        var e = t.mask.width();
        if (t.maskWidth !== e) return t.maskWidth = e, !0;
        return !1;
      }(r) ? P(r) : void (u && function (e) {
        var n = 0;
        if (e.slides.each(function (e, r) {
          n += t(r).outerWidth(!0);
        }), e.slidesWidth !== n) return e.slidesWidth = n, !0;
        return !1;
      }(r) && P(r));
    }

    function P(e) {
      var n = 1,
          r = 0,
          i = 0,
          o = 0,
          a = e.maskWidth,
          c = a - e.config.edge;
      c < 0 && (c = 0), e.anchors = [{
        els: [],
        x: 0,
        width: 0
      }], e.slides.each(function (u, s) {
        i - r > c && (n++, r += a, e.anchors[n - 1] = {
          els: [],
          x: i,
          width: 0
        }), o = t(s).outerWidth(!0), i += o, e.anchors[n - 1].width += o, e.anchors[n - 1].els.push(s);
        var f = u + 1 + " of " + e.slides.length;
        t(s).attr("aria-label", f), t(s).attr("role", "group");
      }), e.endX = i, u && (e.pages = null), e.nav.length && e.pages !== n && (e.pages = n, function (e) {
        var n,
            r = [],
            i = e.el.attr("data-nav-spacing");
        i && (i = parseFloat(i) + "px");

        for (var o = 0, a = e.pages; o < a; o++) {
          (n = t(h)).attr("aria-label", "Show slide " + (o + 1) + " of " + a).attr("aria-selected", "false").attr("role", "button").attr("tabindex", "-1"), e.nav.hasClass("w-num") && n.text(o + 1), null != i && n.css({
            "margin-left": i,
            "margin-right": i
          }), r.push(n);
        }

        e.nav.empty().append(r);
      }(e));
      var s = e.index;
      s >= n && (s = n - 1), L(e, {
        immediate: !0,
        index: s
      });
    }

    return f.ready = function () {
      u = r.env("design"), _();
    }, f.design = function () {
      u = !0, _();
    }, f.preview = function () {
      u = !1, _();
    }, f.redraw = function () {
      s = !0, _();
    }, f.destroy = y, f;
  });
}]);
/**
* ----------------------------------------------------------------------
* falgun: Interactions 2.0: Init
*/

falgun.require('ix2').init({
  "events": {
    "e": {
      "id": "e",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "SCROLLING_IN_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main"],
      "target": {
        "id": "5ee84c04edf3bef07be99a27|10a4fd44-1384-8edc-c229-17f907abf256",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "5ee84c04edf3bef07be99a27|10a4fd44-1384-8edc-c229-17f907abf256",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      }],
      "config": [{
        "continuousParameterGroupId": "a-p",
        "smoothing": 7,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1592974819610
    },
    "e-7": {
      "id": "e-7",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-4",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-6"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "5ef3dc5234c46213e10bf329",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "5ef3dc5234c46213e10bf329",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1594350879660
    },
    "e-8": {
      "id": "e-8",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-5",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-9"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "selector": ".accordion-item-trigger",
        "originalId": "5ee831dab622baec2cd925ce|ee7d4185-03e6-c93a-c409-a95889d8d753",
        "appliesTo": "CLASS"
      },
      "targets": [{
        "selector": ".accordion-item-trigger",
        "originalId": "5ee831dab622baec2cd925ce|ee7d4185-03e6-c93a-c409-a95889d8d753",
        "appliesTo": "CLASS"
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1528409847320
    },
    "e-9": {
      "id": "e-9",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "MOUSE_SECOND_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-6",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-8"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "selector": ".accordion-item-trigger",
        "originalId": "5ee831dab622baec2cd925ce|ee7d4185-03e6-c93a-c409-a95889d8d753",
        "appliesTo": "CLASS"
      },
      "targets": [{
        "selector": ".accordion-item-trigger",
        "originalId": "5ee831dab622baec2cd925ce|ee7d4185-03e6-c93a-c409-a95889d8d753",
        "appliesTo": "CLASS"
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1528409847320
    },
    "e-10": {
      "id": "e-10",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "MOUSE_OVER",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-9",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-11"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "22a3484f-c825-fc0e-3b3a-303bdfbd8df6",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "22a3484f-c825-fc0e-3b3a-303bdfbd8df6",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": 0,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1599514273450
    },
    "e-11": {
      "id": "e-11",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "MOUSE_OUT",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-10",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-10"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "22a3484f-c825-fc0e-3b3a-303bdfbd8df6",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "22a3484f-c825-fc0e-3b3a-303bdfbd8df6",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1599514273451
    }
  },
  "actionLists": {
    "a": {
      "id": "a",
      "title": "Parallax",
      "continuousParameterGroups": [{
        "id": "a-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": true,
                "id": "5ee84c04edf3bef07be99a27|10a4fd44-1384-8edc-c229-17f907abf256"
              },
              "yValue": 150,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": true,
                "id": "5ee84c04edf3bef07be99a27|10a4fd44-1384-8edc-c229-17f907abf256"
              },
              "yValue": -75,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }]
      }],
      "createdOn": 1592974841112
    },
    "a-4": {
      "id": "a-4",
      "title": "Fade Up",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-4-n",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "30fd073d-036e-4d29-e916-79de3a60efcf"
            },
            "yValue": 10,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-4-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "30fd073d-036e-4d29-e916-79de3a60efcf"
            },
            "value": 0.25,
            "unit": ""
          }
        }, {
          "id": "a-4-n-5",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "30fd073d-036e-4d29-e916-79de3a60efd1"
            },
            "yValue": 5,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-4-n-7",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "30fd073d-036e-4d29-e916-79de3a60efd1"
            },
            "value": 0,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-4-n-3",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 300,
            "target": {
              "id": "30fd073d-036e-4d29-e916-79de3a60efcf"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-4-n-4",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 300,
            "target": {
              "id": "30fd073d-036e-4d29-e916-79de3a60efcf"
            },
            "value": 1,
            "unit": ""
          }
        }, {
          "id": "a-4-n-8",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 300,
            "target": {
              "id": "30fd073d-036e-4d29-e916-79de3a60efd1"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-4-n-6",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 100,
            "easing": "",
            "duration": 300,
            "target": {
              "id": "30fd073d-036e-4d29-e916-79de3a60efd1"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "useFirstGroupAsInitialState": true,
      "createdOn": 1594350800195
    },
    "a-5": {
      "id": "a-5",
      "title": "Accordion open",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-5-n",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "SIBLINGS",
              "selector": ".accordion-item-content",
              "selectorGuids": ["1f74942c-d2cb-42b9-419a-00f92e673ba5"]
            },
            "heightValue": 0,
            "widthUnit": "PX",
            "heightUnit": "PX",
            "locked": false
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-5-n-2",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "inOutCubic",
            "duration": 200,
            "target": {
              "useEventTarget": "SIBLINGS",
              "selector": ".accordion-item-content",
              "selectorGuids": ["1f74942c-d2cb-42b9-419a-00f92e673ba5"]
            },
            "widthUnit": "PX",
            "heightUnit": "AUTO",
            "locked": false
          }
        }, {
          "id": "a-5-n-3",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "easeIn",
            "duration": 250,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".accordion-item-arrow",
              "selectorGuids": ["4d397a3b-a1ac-bbe9-1fda-aa9f951bb8e3"]
            },
            "zValue": 180,
            "xUnit": "DEG",
            "yUnit": "DEG",
            "zUnit": "DEG"
          }
        }]
      }],
      "useFirstGroupAsInitialState": true,
      "createdOn": 1528409854007
    },
    "a-6": {
      "id": "a-6",
      "title": "Accordion close",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-6-n",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "inSine",
            "duration": 200,
            "target": {
              "useEventTarget": "SIBLINGS",
              "selector": ".accordion-item-content",
              "selectorGuids": ["1f74942c-d2cb-42b9-419a-00f92e673ba5"]
            },
            "heightValue": 0,
            "widthUnit": "PX",
            "heightUnit": "PX",
            "locked": false
          }
        }, {
          "id": "a-6-n-2",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "easeIn",
            "duration": 250,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".accordion-item-arrow",
              "selectorGuids": ["4d397a3b-a1ac-bbe9-1fda-aa9f951bb8e3"]
            },
            "zValue": 0,
            "xUnit": "DEG",
            "yUnit": "DEG",
            "zUnit": "DEG"
          }
        }]
      }],
      "useFirstGroupAsInitialState": false,
      "createdOn": 1528410038765
    },
    "a-9": {
      "id": "a-9",
      "title": "Card Expand",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-9-n",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "bouncePast",
            "duration": 500,
            "target": {
              "useEventTarget": true,
              "id": "22a3484f-c825-fc0e-3b3a-303bdfbd8df6"
            },
            "xValue": 1.05,
            "yValue": 1.05,
            "locked": true
          }
        }]
      }],
      "useFirstGroupAsInitialState": false,
      "createdOn": 1599514330573
    },
    "a-10": {
      "id": "a-10",
      "title": "Card Collapse",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-10-n",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "easeIn",
            "duration": 200,
            "target": {
              "useEventTarget": true,
              "id": "22a3484f-c825-fc0e-3b3a-303bdfbd8df6"
            },
            "xValue": 1,
            "yValue": 1,
            "locked": true
          }
        }]
      }],
      "useFirstGroupAsInitialState": false,
      "createdOn": 1599514598500
    }
  },
  "site": {
    "mediaQueries": [{
      "key": "main",
      "min": 992,
      "max": 10000
    }, {
      "key": "medium",
      "min": 768,
      "max": 991
    }, {
      "key": "small",
      "min": 480,
      "max": 767
    }, {
      "key": "tiny",
      "min": 0,
      "max": 479
    }]
  }
});

/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Alert": () => (/* binding */ Alert),
/* harmony export */   "Button": () => (/* binding */ Button),
/* harmony export */   "Carousel": () => (/* binding */ Carousel),
/* harmony export */   "Collapse": () => (/* binding */ Collapse),
/* harmony export */   "Dropdown": () => (/* binding */ Dropdown),
/* harmony export */   "Modal": () => (/* binding */ Modal),
/* harmony export */   "Popover": () => (/* binding */ Popover),
/* harmony export */   "ScrollSpy": () => (/* binding */ ScrollSpy),
/* harmony export */   "Tab": () => (/* binding */ Tab),
/* harmony export */   "Toast": () => (/* binding */ Toast),
/* harmony export */   "Tooltip": () => (/* binding */ Tooltip)
/* harmony export */ });
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @popperjs/core */ "./node_modules/@popperjs/core/lib/index.js");
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @popperjs/core */ "./node_modules/@popperjs/core/lib/popper.js");
/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/*!
  * Bootstrap v5.0.0-beta1 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */



function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta1): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
var MAX_UID = 1000000;
var MILLISECONDS_MULTIPLIER = 1000;
var TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

var toType = function toType(obj) {
  if (obj === null || obj === undefined) {
    return "" + obj;
  }

  return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */


var getUID = function getUID(prefix) {
  do {
    prefix += Math.floor(Math.random() * MAX_UID);
  } while (document.getElementById(prefix));

  return prefix;
};

var getSelector = function getSelector(element) {
  var selector = element.getAttribute('data-bs-target');

  if (!selector || selector === '#') {
    var hrefAttr = element.getAttribute('href');
    selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
  }

  return selector;
};

var getSelectorFromElement = function getSelectorFromElement(element) {
  var selector = getSelector(element);

  if (selector) {
    return document.querySelector(selector) ? selector : null;
  }

  return null;
};

var getElementFromSelector = function getElementFromSelector(element) {
  var selector = getSelector(element);
  return selector ? document.querySelector(selector) : null;
};

var getTransitionDurationFromElement = function getTransitionDurationFromElement(element) {
  if (!element) {
    return 0;
  } // Get transition-duration of the element


  var _window$getComputedSt = window.getComputedStyle(element),
      transitionDuration = _window$getComputedSt.transitionDuration,
      transitionDelay = _window$getComputedSt.transitionDelay;

  var floatTransitionDuration = Number.parseFloat(transitionDuration);
  var floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  } // If multiple durations are defined, take the first


  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};

var triggerTransitionEnd = function triggerTransitionEnd(element) {
  element.dispatchEvent(new Event(TRANSITION_END));
};

var isElement = function isElement(obj) {
  return (obj[0] || obj).nodeType;
};

var emulateTransitionEnd = function emulateTransitionEnd(element, duration) {
  var called = false;
  var durationPadding = 5;
  var emulatedDuration = duration + durationPadding;

  function listener() {
    called = true;
    element.removeEventListener(TRANSITION_END, listener);
  }

  element.addEventListener(TRANSITION_END, listener);
  setTimeout(function () {
    if (!called) {
      triggerTransitionEnd(element);
    }
  }, emulatedDuration);
};

var typeCheckConfig = function typeCheckConfig(componentName, config, configTypes) {
  Object.keys(configTypes).forEach(function (property) {
    var expectedTypes = configTypes[property];
    var value = config[property];
    var valueType = value && isElement(value) ? 'element' : toType(value);

    if (!new RegExp(expectedTypes).test(valueType)) {
      throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
    }
  });
};

var isVisible = function isVisible(element) {
  if (!element) {
    return false;
  }

  if (element.style && element.parentNode && element.parentNode.style) {
    var elementStyle = getComputedStyle(element);
    var parentNodeStyle = getComputedStyle(element.parentNode);
    return elementStyle.display !== 'none' && parentNodeStyle.display !== 'none' && elementStyle.visibility !== 'hidden';
  }

  return false;
};

var findShadowRoot = function findShadowRoot(element) {
  if (!document.documentElement.attachShadow) {
    return null;
  } // Can find the shadow root otherwise it'll return the document


  if (typeof element.getRootNode === 'function') {
    var root = element.getRootNode();
    return root instanceof ShadowRoot ? root : null;
  }

  if (element instanceof ShadowRoot) {
    return element;
  } // when we don't find a shadow root


  if (!element.parentNode) {
    return null;
  }

  return findShadowRoot(element.parentNode);
};

var noop = function noop() {
  return function () {};
};

var reflow = function reflow(element) {
  return element.offsetHeight;
};

var getjQuery = function getjQuery() {
  var _window = window,
      jQuery = __webpack_provided_window_dot_jQuery;

  if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
    return jQuery;
  }

  return null;
};

var onDOMContentLoaded = function onDOMContentLoaded(callback) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
};

var isRTL = document.documentElement.dir === 'rtl';

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta1): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */
var mapData = function () {
  var storeData = {};
  var id = 1;
  return {
    set: function set(element, key, data) {
      if (typeof element.bsKey === 'undefined') {
        element.bsKey = {
          key: key,
          id: id
        };
        id++;
      }

      storeData[element.bsKey.id] = data;
    },
    get: function get(element, key) {
      if (!element || typeof element.bsKey === 'undefined') {
        return null;
      }

      var keyProperties = element.bsKey;

      if (keyProperties.key === key) {
        return storeData[keyProperties.id];
      }

      return null;
    },
    delete: function _delete(element, key) {
      if (typeof element.bsKey === 'undefined') {
        return;
      }

      var keyProperties = element.bsKey;

      if (keyProperties.key === key) {
        delete storeData[keyProperties.id];
        delete element.bsKey;
      }
    }
  };
}();

var Data = {
  setData: function setData(instance, key, data) {
    mapData.set(instance, key, data);
  },
  getData: function getData(instance, key) {
    return mapData.get(instance, key);
  },
  removeData: function removeData(instance, key) {
    mapData.delete(instance, key);
  }
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta1): dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
var stripNameRegex = /\..*/;
var stripUidRegex = /::\d+$/;
var eventRegistry = {}; // Events storage

var uidEvent = 1;
var customEvents = {
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
};
var nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
/**
 * ------------------------------------------------------------------------
 * Private methods
 * ------------------------------------------------------------------------
 */

function getUidEvent(element, uid) {
  return uid && uid + "::" + uidEvent++ || element.uidEvent || uidEvent++;
}

function getEvent(element) {
  var uid = getUidEvent(element);
  element.uidEvent = uid;
  eventRegistry[uid] = eventRegistry[uid] || {};
  return eventRegistry[uid];
}

function bootstrapHandler(element, fn) {
  return function handler(event) {
    event.delegateTarget = element;

    if (handler.oneOff) {
      EventHandler.off(element, event.type, fn);
    }

    return fn.apply(element, [event]);
  };
}

function bootstrapDelegationHandler(element, selector, fn) {
  return function handler(event) {
    var domElements = element.querySelectorAll(selector);

    for (var target = event.target; target && target !== this; target = target.parentNode) {
      for (var i = domElements.length; i--;) {
        if (domElements[i] === target) {
          event.delegateTarget = target;

          if (handler.oneOff) {
            EventHandler.off(element, event.type, fn);
          }

          return fn.apply(target, [event]);
        }
      }
    } // To please ESLint


    return null;
  };
}

function findHandler(events, handler, delegationSelector) {
  if (delegationSelector === void 0) {
    delegationSelector = null;
  }

  var uidEventList = Object.keys(events);

  for (var i = 0, len = uidEventList.length; i < len; i++) {
    var event = events[uidEventList[i]];

    if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
      return event;
    }
  }

  return null;
}

function normalizeParams(originalTypeEvent, handler, delegationFn) {
  var delegation = typeof handler === 'string';
  var originalHandler = delegation ? delegationFn : handler; // allow to get the native events from namespaced events ('click.bs.button' --> 'click')

  var typeEvent = originalTypeEvent.replace(stripNameRegex, '');
  var custom = customEvents[typeEvent];

  if (custom) {
    typeEvent = custom;
  }

  var isNative = nativeEvents.has(typeEvent);

  if (!isNative) {
    typeEvent = originalTypeEvent;
  }

  return [delegation, originalHandler, typeEvent];
}

function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
  if (typeof originalTypeEvent !== 'string' || !element) {
    return;
  }

  if (!handler) {
    handler = delegationFn;
    delegationFn = null;
  }

  var _normalizeParams = normalizeParams(originalTypeEvent, handler, delegationFn),
      delegation = _normalizeParams[0],
      originalHandler = _normalizeParams[1],
      typeEvent = _normalizeParams[2];

  var events = getEvent(element);
  var handlers = events[typeEvent] || (events[typeEvent] = {});
  var previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

  if (previousFn) {
    previousFn.oneOff = previousFn.oneOff && oneOff;
    return;
  }

  var uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
  var fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
  fn.delegationSelector = delegation ? handler : null;
  fn.originalHandler = originalHandler;
  fn.oneOff = oneOff;
  fn.uidEvent = uid;
  handlers[uid] = fn;
  element.addEventListener(typeEvent, fn, delegation);
}

function removeHandler(element, events, typeEvent, handler, delegationSelector) {
  var fn = findHandler(events[typeEvent], handler, delegationSelector);

  if (!fn) {
    return;
  }

  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
  delete events[typeEvent][fn.uidEvent];
}

function removeNamespacedHandlers(element, events, typeEvent, namespace) {
  var storeElementEvent = events[typeEvent] || {};
  Object.keys(storeElementEvent).forEach(function (handlerKey) {
    if (handlerKey.includes(namespace)) {
      var event = storeElementEvent[handlerKey];
      removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
    }
  });
}

var EventHandler = {
  on: function on(element, event, handler, delegationFn) {
    addHandler(element, event, handler, delegationFn, false);
  },
  one: function one(element, event, handler, delegationFn) {
    addHandler(element, event, handler, delegationFn, true);
  },
  off: function off(element, originalTypeEvent, handler, delegationFn) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    var _normalizeParams2 = normalizeParams(originalTypeEvent, handler, delegationFn),
        delegation = _normalizeParams2[0],
        originalHandler = _normalizeParams2[1],
        typeEvent = _normalizeParams2[2];

    var inNamespace = typeEvent !== originalTypeEvent;
    var events = getEvent(element);
    var isNamespace = originalTypeEvent.startsWith('.');

    if (typeof originalHandler !== 'undefined') {
      // Simplest case: handler is passed, remove that listener ONLY.
      if (!events || !events[typeEvent]) {
        return;
      }

      removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
      return;
    }

    if (isNamespace) {
      Object.keys(events).forEach(function (elementEvent) {
        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
      });
    }

    var storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(function (keyHandlers) {
      var handlerKey = keyHandlers.replace(stripUidRegex, '');

      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
        var event = storeElementEvent[keyHandlers];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  },
  trigger: function trigger(element, event, args) {
    if (typeof event !== 'string' || !element) {
      return null;
    }

    var $ = getjQuery();
    var typeEvent = event.replace(stripNameRegex, '');
    var inNamespace = event !== typeEvent;
    var isNative = nativeEvents.has(typeEvent);
    var jQueryEvent;
    var bubbles = true;
    var nativeDispatch = true;
    var defaultPrevented = false;
    var evt = null;

    if (inNamespace && $) {
      jQueryEvent = $.Event(event, args);
      $(element).trigger(jQueryEvent);
      bubbles = !jQueryEvent.isPropagationStopped();
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
      defaultPrevented = jQueryEvent.isDefaultPrevented();
    }

    if (isNative) {
      evt = document.createEvent('HTMLEvents');
      evt.initEvent(typeEvent, bubbles, true);
    } else {
      evt = new CustomEvent(event, {
        bubbles: bubbles,
        cancelable: true
      });
    } // merge custom information in our event


    if (typeof args !== 'undefined') {
      Object.keys(args).forEach(function (key) {
        Object.defineProperty(evt, key, {
          get: function get() {
            return args[key];
          }
        });
      });
    }

    if (defaultPrevented) {
      evt.preventDefault();
    }

    if (nativeDispatch) {
      element.dispatchEvent(evt);
    }

    if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
      jQueryEvent.preventDefault();
    }

    return evt;
  }
};

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var VERSION = '5.0.0-beta1';

var BaseComponent = /*#__PURE__*/function () {
  function BaseComponent(element) {
    if (!element) {
      return;
    }

    this._element = element;
    Data.setData(element, this.constructor.DATA_KEY, this);
  }

  var _proto = BaseComponent.prototype;

  _proto.dispose = function dispose() {
    Data.removeData(this._element, this.constructor.DATA_KEY);
    this._element = null;
  }
  /** Static */
  ;

  BaseComponent.getInstance = function getInstance(element) {
    return Data.getData(element, this.DATA_KEY);
  };

  _createClass(BaseComponent, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION;
    }
  }]);

  return BaseComponent;
}();

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'alert';
var DATA_KEY = 'bs.alert';
var EVENT_KEY = "." + DATA_KEY;
var DATA_API_KEY = '.data-api';
var SELECTOR_DISMISS = '[data-bs-dismiss="alert"]';
var EVENT_CLOSE = "close" + EVENT_KEY;
var EVENT_CLOSED = "closed" + EVENT_KEY;
var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
var CLASSNAME_ALERT = 'alert';
var CLASSNAME_FADE = 'fade';
var CLASSNAME_SHOW = 'show';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Alert = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(Alert, _BaseComponent);

  function Alert() {
    return _BaseComponent.apply(this, arguments) || this;
  }

  var _proto = Alert.prototype;

  // Public
  _proto.close = function close(element) {
    var rootElement = element ? this._getRootElement(element) : this._element;

    var customEvent = this._triggerCloseEvent(rootElement);

    if (customEvent === null || customEvent.defaultPrevented) {
      return;
    }

    this._removeElement(rootElement);
  } // Private
  ;

  _proto._getRootElement = function _getRootElement(element) {
    return getElementFromSelector(element) || element.closest("." + CLASSNAME_ALERT);
  };

  _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
    return EventHandler.trigger(element, EVENT_CLOSE);
  };

  _proto._removeElement = function _removeElement(element) {
    var _this = this;

    element.classList.remove(CLASSNAME_SHOW);

    if (!element.classList.contains(CLASSNAME_FADE)) {
      this._destroyElement(element);

      return;
    }

    var transitionDuration = getTransitionDurationFromElement(element);
    EventHandler.one(element, TRANSITION_END, function () {
      return _this._destroyElement(element);
    });
    emulateTransitionEnd(element, transitionDuration);
  };

  _proto._destroyElement = function _destroyElement(element) {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }

    EventHandler.trigger(element, EVENT_CLOSED);
  } // Static
  ;

  Alert.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      var data = Data.getData(this, DATA_KEY);

      if (!data) {
        data = new Alert(this);
      }

      if (config === 'close') {
        data[config](this);
      }
    });
  };

  Alert.handleDismiss = function handleDismiss(alertInstance) {
    return function (event) {
      if (event) {
        event.preventDefault();
      }

      alertInstance.close(this);
    };
  };

  _createClass(Alert, null, [{
    key: "DATA_KEY",
    // Getters
    get: function get() {
      return DATA_KEY;
    }
  }]);

  return Alert;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DISMISS, Alert.handleDismiss(new Alert()));
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Alert to jQuery only if jQuery is present
 */

onDOMContentLoaded(function () {
  var $ = getjQuery();
  /* istanbul ignore if */

  if ($) {
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    $.fn[NAME] = Alert.jQueryInterface;
    $.fn[NAME].Constructor = Alert;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Alert.jQueryInterface;
    };
  }
});

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$1 = 'button';
var DATA_KEY$1 = 'bs.button';
var EVENT_KEY$1 = "." + DATA_KEY$1;
var DATA_API_KEY$1 = '.data-api';
var CLASS_NAME_ACTIVE = 'active';
var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="button"]';
var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$1 + DATA_API_KEY$1;
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Button = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(Button, _BaseComponent);

  function Button() {
    return _BaseComponent.apply(this, arguments) || this;
  }

  var _proto = Button.prototype;

  // Public
  _proto.toggle = function toggle() {
    // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
    this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE));
  } // Static
  ;

  Button.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      var data = Data.getData(this, DATA_KEY$1);

      if (!data) {
        data = new Button(this);
      }

      if (config === 'toggle') {
        data[config]();
      }
    });
  };

  _createClass(Button, null, [{
    key: "DATA_KEY",
    // Getters
    get: function get() {
      return DATA_KEY$1;
    }
  }]);

  return Button;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE, function (event) {
  event.preventDefault();
  var button = event.target.closest(SELECTOR_DATA_TOGGLE);
  var data = Data.getData(button, DATA_KEY$1);

  if (!data) {
    data = new Button(button);
  }

  data.toggle();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Button to jQuery only if jQuery is present
 */

onDOMContentLoaded(function () {
  var $ = getjQuery();
  /* istanbul ignore if */

  if ($) {
    var JQUERY_NO_CONFLICT = $.fn[NAME$1];
    $.fn[NAME$1] = Button.jQueryInterface;
    $.fn[NAME$1].Constructor = Button;

    $.fn[NAME$1].noConflict = function () {
      $.fn[NAME$1] = JQUERY_NO_CONFLICT;
      return Button.jQueryInterface;
    };
  }
});

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta1): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
function normalizeData(val) {
  if (val === 'true') {
    return true;
  }

  if (val === 'false') {
    return false;
  }

  if (val === Number(val).toString()) {
    return Number(val);
  }

  if (val === '' || val === 'null') {
    return null;
  }

  return val;
}

function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, function (chr) {
    return "-" + chr.toLowerCase();
  });
}

var Manipulator = {
  setDataAttribute: function setDataAttribute(element, key, value) {
    element.setAttribute("data-bs-" + normalizeDataKey(key), value);
  },
  removeDataAttribute: function removeDataAttribute(element, key) {
    element.removeAttribute("data-bs-" + normalizeDataKey(key));
  },
  getDataAttributes: function getDataAttributes(element) {
    if (!element) {
      return {};
    }

    var attributes = {};
    Object.keys(element.dataset).filter(function (key) {
      return key.startsWith('bs');
    }).forEach(function (key) {
      var pureKey = key.replace(/^bs/, '');
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
      attributes[pureKey] = normalizeData(element.dataset[key]);
    });
    return attributes;
  },
  getDataAttribute: function getDataAttribute(element, key) {
    return normalizeData(element.getAttribute("data-bs-" + normalizeDataKey(key)));
  },
  offset: function offset(element) {
    var rect = element.getBoundingClientRect();
    return {
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft
    };
  },
  position: function position(element) {
    return {
      top: element.offsetTop,
      left: element.offsetLeft
    };
  }
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta1): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */
var NODE_TEXT = 3;
var SelectorEngine = {
  matches: function matches(element, selector) {
    return element.matches(selector);
  },
  find: function find(selector, element) {
    var _ref;

    if (element === void 0) {
      element = document.documentElement;
    }

    return (_ref = []).concat.apply(_ref, Element.prototype.querySelectorAll.call(element, selector));
  },
  findOne: function findOne(selector, element) {
    if (element === void 0) {
      element = document.documentElement;
    }

    return Element.prototype.querySelector.call(element, selector);
  },
  children: function children(element, selector) {
    var _ref2;

    var children = (_ref2 = []).concat.apply(_ref2, element.children);

    return children.filter(function (child) {
      return child.matches(selector);
    });
  },
  parents: function parents(element, selector) {
    var parents = [];
    var ancestor = element.parentNode;

    while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
      if (this.matches(ancestor, selector)) {
        parents.push(ancestor);
      }

      ancestor = ancestor.parentNode;
    }

    return parents;
  },
  prev: function prev(element, selector) {
    var previous = element.previousElementSibling;

    while (previous) {
      if (previous.matches(selector)) {
        return [previous];
      }

      previous = previous.previousElementSibling;
    }

    return [];
  },
  next: function next(element, selector) {
    var next = element.nextElementSibling;

    while (next) {
      if (this.matches(next, selector)) {
        return [next];
      }

      next = next.nextElementSibling;
    }

    return [];
  }
};

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$2 = 'carousel';
var DATA_KEY$2 = 'bs.carousel';
var EVENT_KEY$2 = "." + DATA_KEY$2;
var DATA_API_KEY$2 = '.data-api';
var ARROW_LEFT_KEY = 'ArrowLeft';
var ARROW_RIGHT_KEY = 'ArrowRight';
var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

var SWIPE_THRESHOLD = 40;
var Default = {
  interval: 5000,
  keyboard: true,
  slide: false,
  pause: 'hover',
  wrap: true,
  touch: true
};
var DefaultType = {
  interval: '(number|boolean)',
  keyboard: 'boolean',
  slide: '(boolean|string)',
  pause: '(string|boolean)',
  wrap: 'boolean',
  touch: 'boolean'
};
var DIRECTION_NEXT = 'next';
var DIRECTION_PREV = 'prev';
var DIRECTION_LEFT = 'left';
var DIRECTION_RIGHT = 'right';
var EVENT_SLIDE = "slide" + EVENT_KEY$2;
var EVENT_SLID = "slid" + EVENT_KEY$2;
var EVENT_KEYDOWN = "keydown" + EVENT_KEY$2;
var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$2;
var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$2;
var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$2;
var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$2;
var EVENT_TOUCHEND = "touchend" + EVENT_KEY$2;
var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$2;
var EVENT_POINTERUP = "pointerup" + EVENT_KEY$2;
var EVENT_DRAG_START = "dragstart" + EVENT_KEY$2;
var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$2 + DATA_API_KEY$2;
var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$2 + DATA_API_KEY$2;
var CLASS_NAME_CAROUSEL = 'carousel';
var CLASS_NAME_ACTIVE$1 = 'active';
var CLASS_NAME_SLIDE = 'slide';
var CLASS_NAME_END = 'carousel-item-end';
var CLASS_NAME_START = 'carousel-item-start';
var CLASS_NAME_NEXT = 'carousel-item-next';
var CLASS_NAME_PREV = 'carousel-item-prev';
var CLASS_NAME_POINTER_EVENT = 'pointer-event';
var SELECTOR_ACTIVE = '.active';
var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
var SELECTOR_ITEM = '.carousel-item';
var SELECTOR_ITEM_IMG = '.carousel-item img';
var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
var SELECTOR_INDICATORS = '.carousel-indicators';
var SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
var PointerType = {
  TOUCH: 'touch',
  PEN: 'pen'
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Carousel = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(Carousel, _BaseComponent);

  function Carousel(element, config) {
    var _this;

    _this = _BaseComponent.call(this, element) || this;
    _this._items = null;
    _this._interval = null;
    _this._activeElement = null;
    _this._isPaused = false;
    _this._isSliding = false;
    _this.touchTimeout = null;
    _this.touchStartX = 0;
    _this.touchDeltaX = 0;
    _this._config = _this._getConfig(config);
    _this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, _this._element);
    _this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
    _this._pointerEvent = Boolean(window.PointerEvent);

    _this._addEventListeners();

    return _this;
  } // Getters


  var _proto = Carousel.prototype;

  // Public
  _proto.next = function next() {
    if (!this._isSliding) {
      this._slide(DIRECTION_NEXT);
    }
  };

  _proto.nextWhenVisible = function nextWhenVisible() {
    // Don't call next when the page isn't visible
    // or the carousel or its parent isn't visible
    if (!document.hidden && isVisible(this._element)) {
      this.next();
    }
  };

  _proto.prev = function prev() {
    if (!this._isSliding) {
      this._slide(DIRECTION_PREV);
    }
  };

  _proto.pause = function pause(event) {
    if (!event) {
      this._isPaused = true;
    }

    if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
      triggerTransitionEnd(this._element);
      this.cycle(true);
    }

    clearInterval(this._interval);
    this._interval = null;
  };

  _proto.cycle = function cycle(event) {
    if (!event) {
      this._isPaused = false;
    }

    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }

    if (this._config && this._config.interval && !this._isPaused) {
      this._updateInterval();

      this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
    }
  };

  _proto.to = function to(index) {
    var _this2 = this;

    this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

    var activeIndex = this._getItemIndex(this._activeElement);

    if (index > this._items.length - 1 || index < 0) {
      return;
    }

    if (this._isSliding) {
      EventHandler.one(this._element, EVENT_SLID, function () {
        return _this2.to(index);
      });
      return;
    }

    if (activeIndex === index) {
      this.pause();
      this.cycle();
      return;
    }

    var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

    this._slide(direction, this._items[index]);
  };

  _proto.dispose = function dispose() {
    _BaseComponent.prototype.dispose.call(this);

    EventHandler.off(this._element, EVENT_KEY$2);
    this._items = null;
    this._config = null;
    this._interval = null;
    this._isPaused = null;
    this._isSliding = null;
    this._activeElement = null;
    this._indicatorsElement = null;
  } // Private
  ;

  _proto._getConfig = function _getConfig(config) {
    config = _extends({}, Default, config);
    typeCheckConfig(NAME$2, config, DefaultType);
    return config;
  };

  _proto._handleSwipe = function _handleSwipe() {
    var absDeltax = Math.abs(this.touchDeltaX);

    if (absDeltax <= SWIPE_THRESHOLD) {
      return;
    }

    var direction = absDeltax / this.touchDeltaX;
    this.touchDeltaX = 0; // swipe left

    if (direction > 0) {
      this.prev();
    } // swipe right


    if (direction < 0) {
      this.next();
    }
  };

  _proto._addEventListeners = function _addEventListeners() {
    var _this3 = this;

    if (this._config.keyboard) {
      EventHandler.on(this._element, EVENT_KEYDOWN, function (event) {
        return _this3._keydown(event);
      });
    }

    if (this._config.pause === 'hover') {
      EventHandler.on(this._element, EVENT_MOUSEENTER, function (event) {
        return _this3.pause(event);
      });
      EventHandler.on(this._element, EVENT_MOUSELEAVE, function (event) {
        return _this3.cycle(event);
      });
    }

    if (this._config.touch && this._touchSupported) {
      this._addTouchEventListeners();
    }
  };

  _proto._addTouchEventListeners = function _addTouchEventListeners() {
    var _this4 = this;

    var start = function start(event) {
      if (_this4._pointerEvent && PointerType[event.pointerType.toUpperCase()]) {
        _this4.touchStartX = event.clientX;
      } else if (!_this4._pointerEvent) {
        _this4.touchStartX = event.touches[0].clientX;
      }
    };

    var move = function move(event) {
      // ensure swiping with one touch and not pinching
      if (event.touches && event.touches.length > 1) {
        _this4.touchDeltaX = 0;
      } else {
        _this4.touchDeltaX = event.touches[0].clientX - _this4.touchStartX;
      }
    };

    var end = function end(event) {
      if (_this4._pointerEvent && PointerType[event.pointerType.toUpperCase()]) {
        _this4.touchDeltaX = event.clientX - _this4.touchStartX;
      }

      _this4._handleSwipe();

      if (_this4._config.pause === 'hover') {
        // If it's a touch-enabled device, mouseenter/leave are fired as
        // part of the mouse compatibility events on first tap - the carousel
        // would stop cycling until user tapped out of it;
        // here, we listen for touchend, explicitly pause the carousel
        // (as if it's the second time we tap on it, mouseenter compat event
        // is NOT fired) and after a timeout (to allow for mouse compatibility
        // events to fire) we explicitly restart cycling
        _this4.pause();

        if (_this4.touchTimeout) {
          clearTimeout(_this4.touchTimeout);
        }

        _this4.touchTimeout = setTimeout(function (event) {
          return _this4.cycle(event);
        }, TOUCHEVENT_COMPAT_WAIT + _this4._config.interval);
      }
    };

    SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(function (itemImg) {
      EventHandler.on(itemImg, EVENT_DRAG_START, function (e) {
        return e.preventDefault();
      });
    });

    if (this._pointerEvent) {
      EventHandler.on(this._element, EVENT_POINTERDOWN, function (event) {
        return start(event);
      });
      EventHandler.on(this._element, EVENT_POINTERUP, function (event) {
        return end(event);
      });

      this._element.classList.add(CLASS_NAME_POINTER_EVENT);
    } else {
      EventHandler.on(this._element, EVENT_TOUCHSTART, function (event) {
        return start(event);
      });
      EventHandler.on(this._element, EVENT_TOUCHMOVE, function (event) {
        return move(event);
      });
      EventHandler.on(this._element, EVENT_TOUCHEND, function (event) {
        return end(event);
      });
    }
  };

  _proto._keydown = function _keydown(event) {
    if (/input|textarea/i.test(event.target.tagName)) {
      return;
    }

    switch (event.key) {
      case ARROW_LEFT_KEY:
        event.preventDefault();
        this.prev();
        break;

      case ARROW_RIGHT_KEY:
        event.preventDefault();
        this.next();
        break;
    }
  };

  _proto._getItemIndex = function _getItemIndex(element) {
    this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
    return this._items.indexOf(element);
  };

  _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
    var isNextDirection = direction === DIRECTION_NEXT;
    var isPrevDirection = direction === DIRECTION_PREV;

    var activeIndex = this._getItemIndex(activeElement);

    var lastItemIndex = this._items.length - 1;
    var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

    if (isGoingToWrap && !this._config.wrap) {
      return activeElement;
    }

    var delta = direction === DIRECTION_PREV ? -1 : 1;
    var itemIndex = (activeIndex + delta) % this._items.length;
    return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
  };

  _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
    var targetIndex = this._getItemIndex(relatedTarget);

    var fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));

    return EventHandler.trigger(this._element, EVENT_SLIDE, {
      relatedTarget: relatedTarget,
      direction: eventDirectionName,
      from: fromIndex,
      to: targetIndex
    });
  };

  _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
    if (this._indicatorsElement) {
      var indicators = SelectorEngine.find(SELECTOR_ACTIVE, this._indicatorsElement);

      for (var i = 0; i < indicators.length; i++) {
        indicators[i].classList.remove(CLASS_NAME_ACTIVE$1);
      }

      var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

      if (nextIndicator) {
        nextIndicator.classList.add(CLASS_NAME_ACTIVE$1);
      }
    }
  };

  _proto._updateInterval = function _updateInterval() {
    var element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

    if (!element) {
      return;
    }

    var elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);

    if (elementInterval) {
      this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
      this._config.interval = elementInterval;
    } else {
      this._config.interval = this._config.defaultInterval || this._config.interval;
    }
  };

  _proto._slide = function _slide(direction, element) {
    var _this5 = this;

    var activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

    var activeElementIndex = this._getItemIndex(activeElement);

    var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

    var nextElementIndex = this._getItemIndex(nextElement);

    var isCycling = Boolean(this._interval);
    var directionalClassName;
    var orderClassName;
    var eventDirectionName;

    if (direction === DIRECTION_NEXT) {
      directionalClassName = CLASS_NAME_START;
      orderClassName = CLASS_NAME_NEXT;
      eventDirectionName = DIRECTION_LEFT;
    } else {
      directionalClassName = CLASS_NAME_END;
      orderClassName = CLASS_NAME_PREV;
      eventDirectionName = DIRECTION_RIGHT;
    }

    if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$1)) {
      this._isSliding = false;
      return;
    }

    var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

    if (slideEvent.defaultPrevented) {
      return;
    }

    if (!activeElement || !nextElement) {
      // Some weirdness is happening, so we bail
      return;
    }

    this._isSliding = true;

    if (isCycling) {
      this.pause();
    }

    this._setActiveIndicatorElement(nextElement);

    this._activeElement = nextElement;

    if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);
      var transitionDuration = getTransitionDurationFromElement(activeElement);
      EventHandler.one(activeElement, TRANSITION_END, function () {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE$1);
        activeElement.classList.remove(CLASS_NAME_ACTIVE$1, orderClassName, directionalClassName);
        _this5._isSliding = false;
        setTimeout(function () {
          EventHandler.trigger(_this5._element, EVENT_SLID, {
            relatedTarget: nextElement,
            direction: eventDirectionName,
            from: activeElementIndex,
            to: nextElementIndex
          });
        }, 0);
      });
      emulateTransitionEnd(activeElement, transitionDuration);
    } else {
      activeElement.classList.remove(CLASS_NAME_ACTIVE$1);
      nextElement.classList.add(CLASS_NAME_ACTIVE$1);
      this._isSliding = false;
      EventHandler.trigger(this._element, EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });
    }

    if (isCycling) {
      this.cycle();
    }
  } // Static
  ;

  Carousel.carouselInterface = function carouselInterface(element, config) {
    var data = Data.getData(element, DATA_KEY$2);

    var _config = _extends({}, Default, Manipulator.getDataAttributes(element));

    if (typeof config === 'object') {
      _config = _extends({}, _config, config);
    }

    var action = typeof config === 'string' ? config : _config.slide;

    if (!data) {
      data = new Carousel(element, _config);
    }

    if (typeof config === 'number') {
      data.to(config);
    } else if (typeof action === 'string') {
      if (typeof data[action] === 'undefined') {
        throw new TypeError("No method named \"" + action + "\"");
      }

      data[action]();
    } else if (_config.interval && _config.ride) {
      data.pause();
      data.cycle();
    }
  };

  Carousel.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      Carousel.carouselInterface(this, config);
    });
  };

  Carousel.dataApiClickHandler = function dataApiClickHandler(event) {
    var target = getElementFromSelector(this);

    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }

    var config = _extends({}, Manipulator.getDataAttributes(target), Manipulator.getDataAttributes(this));

    var slideIndex = this.getAttribute('data-bs-slide-to');

    if (slideIndex) {
      config.interval = false;
    }

    Carousel.carouselInterface(target, config);

    if (slideIndex) {
      Data.getData(target, DATA_KEY$2).to(slideIndex);
    }

    event.preventDefault();
  };

  _createClass(Carousel, null, [{
    key: "Default",
    get: function get() {
      return Default;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return DATA_KEY$2;
    }
  }]);

  return Carousel;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
EventHandler.on(window, EVENT_LOAD_DATA_API, function () {
  var carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

  for (var i = 0, len = carousels.length; i < len; i++) {
    Carousel.carouselInterface(carousels[i], Data.getData(carousels[i], DATA_KEY$2));
  }
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Carousel to jQuery only if jQuery is present
 */

onDOMContentLoaded(function () {
  var $ = getjQuery();
  /* istanbul ignore if */

  if ($) {
    var JQUERY_NO_CONFLICT = $.fn[NAME$2];
    $.fn[NAME$2] = Carousel.jQueryInterface;
    $.fn[NAME$2].Constructor = Carousel;

    $.fn[NAME$2].noConflict = function () {
      $.fn[NAME$2] = JQUERY_NO_CONFLICT;
      return Carousel.jQueryInterface;
    };
  }
});

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$3 = 'collapse';
var DATA_KEY$3 = 'bs.collapse';
var EVENT_KEY$3 = "." + DATA_KEY$3;
var DATA_API_KEY$3 = '.data-api';
var Default$1 = {
  toggle: true,
  parent: ''
};
var DefaultType$1 = {
  toggle: 'boolean',
  parent: '(string|element)'
};
var EVENT_SHOW = "show" + EVENT_KEY$3;
var EVENT_SHOWN = "shown" + EVENT_KEY$3;
var EVENT_HIDE = "hide" + EVENT_KEY$3;
var EVENT_HIDDEN = "hidden" + EVENT_KEY$3;
var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$3 + DATA_API_KEY$3;
var CLASS_NAME_SHOW = 'show';
var CLASS_NAME_COLLAPSE = 'collapse';
var CLASS_NAME_COLLAPSING = 'collapsing';
var CLASS_NAME_COLLAPSED = 'collapsed';
var WIDTH = 'width';
var HEIGHT = 'height';
var SELECTOR_ACTIVES = '.show, .collapsing';
var SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="collapse"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Collapse = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(Collapse, _BaseComponent);

  function Collapse(element, config) {
    var _this;

    _this = _BaseComponent.call(this, element) || this;
    _this._isTransitioning = false;
    _this._config = _this._getConfig(config);
    _this._triggerArray = SelectorEngine.find(SELECTOR_DATA_TOGGLE$1 + "[href=\"#" + element.id + "\"]," + (SELECTOR_DATA_TOGGLE$1 + "[data-bs-target=\"#" + element.id + "\"]"));
    var toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$1);

    for (var i = 0, len = toggleList.length; i < len; i++) {
      var elem = toggleList[i];
      var selector = getSelectorFromElement(elem);
      var filterElement = SelectorEngine.find(selector).filter(function (foundElem) {
        return foundElem === element;
      });

      if (selector !== null && filterElement.length) {
        _this._selector = selector;

        _this._triggerArray.push(elem);
      }
    }

    _this._parent = _this._config.parent ? _this._getParent() : null;

    if (!_this._config.parent) {
      _this._addAriaAndCollapsedClass(_this._element, _this._triggerArray);
    }

    if (_this._config.toggle) {
      _this.toggle();
    }

    return _this;
  } // Getters


  var _proto = Collapse.prototype;

  // Public
  _proto.toggle = function toggle() {
    if (this._element.classList.contains(CLASS_NAME_SHOW)) {
      this.hide();
    } else {
      this.show();
    }
  };

  _proto.show = function show() {
    var _this2 = this;

    if (this._isTransitioning || this._element.classList.contains(CLASS_NAME_SHOW)) {
      return;
    }

    var actives;
    var activesData;

    if (this._parent) {
      actives = SelectorEngine.find(SELECTOR_ACTIVES, this._parent).filter(function (elem) {
        if (typeof _this2._config.parent === 'string') {
          return elem.getAttribute('data-bs-parent') === _this2._config.parent;
        }

        return elem.classList.contains(CLASS_NAME_COLLAPSE);
      });

      if (actives.length === 0) {
        actives = null;
      }
    }

    var container = SelectorEngine.findOne(this._selector);

    if (actives) {
      var tempActiveData = actives.find(function (elem) {
        return container !== elem;
      });
      activesData = tempActiveData ? Data.getData(tempActiveData, DATA_KEY$3) : null;

      if (activesData && activesData._isTransitioning) {
        return;
      }
    }

    var startEvent = EventHandler.trigger(this._element, EVENT_SHOW);

    if (startEvent.defaultPrevented) {
      return;
    }

    if (actives) {
      actives.forEach(function (elemActive) {
        if (container !== elemActive) {
          Collapse.collapseInterface(elemActive, 'hide');
        }

        if (!activesData) {
          Data.setData(elemActive, DATA_KEY$3, null);
        }
      });
    }

    var dimension = this._getDimension();

    this._element.classList.remove(CLASS_NAME_COLLAPSE);

    this._element.classList.add(CLASS_NAME_COLLAPSING);

    this._element.style[dimension] = 0;

    if (this._triggerArray.length) {
      this._triggerArray.forEach(function (element) {
        element.classList.remove(CLASS_NAME_COLLAPSED);
        element.setAttribute('aria-expanded', true);
      });
    }

    this.setTransitioning(true);

    var complete = function complete() {
      _this2._element.classList.remove(CLASS_NAME_COLLAPSING);

      _this2._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);

      _this2._element.style[dimension] = '';

      _this2.setTransitioning(false);

      EventHandler.trigger(_this2._element, EVENT_SHOWN);
    };

    var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    var scrollSize = "scroll" + capitalizedDimension;
    var transitionDuration = getTransitionDurationFromElement(this._element);
    EventHandler.one(this._element, TRANSITION_END, complete);
    emulateTransitionEnd(this._element, transitionDuration);
    this._element.style[dimension] = this._element[scrollSize] + "px";
  };

  _proto.hide = function hide() {
    var _this3 = this;

    if (this._isTransitioning || !this._element.classList.contains(CLASS_NAME_SHOW)) {
      return;
    }

    var startEvent = EventHandler.trigger(this._element, EVENT_HIDE);

    if (startEvent.defaultPrevented) {
      return;
    }

    var dimension = this._getDimension();

    this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
    reflow(this._element);

    this._element.classList.add(CLASS_NAME_COLLAPSING);

    this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);

    var triggerArrayLength = this._triggerArray.length;

    if (triggerArrayLength > 0) {
      for (var i = 0; i < triggerArrayLength; i++) {
        var trigger = this._triggerArray[i];
        var elem = getElementFromSelector(trigger);

        if (elem && !elem.classList.contains(CLASS_NAME_SHOW)) {
          trigger.classList.add(CLASS_NAME_COLLAPSED);
          trigger.setAttribute('aria-expanded', false);
        }
      }
    }

    this.setTransitioning(true);

    var complete = function complete() {
      _this3.setTransitioning(false);

      _this3._element.classList.remove(CLASS_NAME_COLLAPSING);

      _this3._element.classList.add(CLASS_NAME_COLLAPSE);

      EventHandler.trigger(_this3._element, EVENT_HIDDEN);
    };

    this._element.style[dimension] = '';
    var transitionDuration = getTransitionDurationFromElement(this._element);
    EventHandler.one(this._element, TRANSITION_END, complete);
    emulateTransitionEnd(this._element, transitionDuration);
  };

  _proto.setTransitioning = function setTransitioning(isTransitioning) {
    this._isTransitioning = isTransitioning;
  };

  _proto.dispose = function dispose() {
    _BaseComponent.prototype.dispose.call(this);

    this._config = null;
    this._parent = null;
    this._triggerArray = null;
    this._isTransitioning = null;
  } // Private
  ;

  _proto._getConfig = function _getConfig(config) {
    config = _extends({}, Default$1, config);
    config.toggle = Boolean(config.toggle); // Coerce string values

    typeCheckConfig(NAME$3, config, DefaultType$1);
    return config;
  };

  _proto._getDimension = function _getDimension() {
    return this._element.classList.contains(WIDTH) ? WIDTH : HEIGHT;
  };

  _proto._getParent = function _getParent() {
    var _this4 = this;

    var parent = this._config.parent;

    if (isElement(parent)) {
      // it's a jQuery object
      if (typeof parent.jquery !== 'undefined' || typeof parent[0] !== 'undefined') {
        parent = parent[0];
      }
    } else {
      parent = SelectorEngine.findOne(parent);
    }

    var selector = SELECTOR_DATA_TOGGLE$1 + "[data-bs-parent=\"" + parent + "\"]";
    SelectorEngine.find(selector, parent).forEach(function (element) {
      var selected = getElementFromSelector(element);

      _this4._addAriaAndCollapsedClass(selected, [element]);
    });
    return parent;
  };

  _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
    if (!element || !triggerArray.length) {
      return;
    }

    var isOpen = element.classList.contains(CLASS_NAME_SHOW);
    triggerArray.forEach(function (elem) {
      if (isOpen) {
        elem.classList.remove(CLASS_NAME_COLLAPSED);
      } else {
        elem.classList.add(CLASS_NAME_COLLAPSED);
      }

      elem.setAttribute('aria-expanded', isOpen);
    });
  } // Static
  ;

  Collapse.collapseInterface = function collapseInterface(element, config) {
    var data = Data.getData(element, DATA_KEY$3);

    var _config = _extends({}, Default$1, Manipulator.getDataAttributes(element), typeof config === 'object' && config ? config : {});

    if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
      _config.toggle = false;
    }

    if (!data) {
      data = new Collapse(element, _config);
    }

    if (typeof config === 'string') {
      if (typeof data[config] === 'undefined') {
        throw new TypeError("No method named \"" + config + "\"");
      }

      data[config]();
    }
  };

  Collapse.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      Collapse.collapseInterface(this, config);
    });
  };

  _createClass(Collapse, null, [{
    key: "Default",
    get: function get() {
      return Default$1;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return DATA_KEY$3;
    }
  }]);

  return Collapse;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$1, function (event) {
  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
  if (event.target.tagName === 'A') {
    event.preventDefault();
  }

  var triggerData = Manipulator.getDataAttributes(this);
  var selector = getSelectorFromElement(this);
  var selectorElements = SelectorEngine.find(selector);
  selectorElements.forEach(function (element) {
    var data = Data.getData(element, DATA_KEY$3);
    var config;

    if (data) {
      // update parent attribute
      if (data._parent === null && typeof triggerData.parent === 'string') {
        data._config.parent = triggerData.parent;
        data._parent = data._getParent();
      }

      config = 'toggle';
    } else {
      config = triggerData;
    }

    Collapse.collapseInterface(element, config);
  });
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Collapse to jQuery only if jQuery is present
 */

onDOMContentLoaded(function () {
  var $ = getjQuery();
  /* istanbul ignore if */

  if ($) {
    var JQUERY_NO_CONFLICT = $.fn[NAME$3];
    $.fn[NAME$3] = Collapse.jQueryInterface;
    $.fn[NAME$3].Constructor = Collapse;

    $.fn[NAME$3].noConflict = function () {
      $.fn[NAME$3] = JQUERY_NO_CONFLICT;
      return Collapse.jQueryInterface;
    };
  }
});

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$4 = 'dropdown';
var DATA_KEY$4 = 'bs.dropdown';
var EVENT_KEY$4 = "." + DATA_KEY$4;
var DATA_API_KEY$4 = '.data-api';
var ESCAPE_KEY = 'Escape';
var SPACE_KEY = 'Space';
var TAB_KEY = 'Tab';
var ARROW_UP_KEY = 'ArrowUp';
var ARROW_DOWN_KEY = 'ArrowDown';
var RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEY + "|" + ARROW_DOWN_KEY + "|" + ESCAPE_KEY);
var EVENT_HIDE$1 = "hide" + EVENT_KEY$4;
var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$4;
var EVENT_SHOW$1 = "show" + EVENT_KEY$4;
var EVENT_SHOWN$1 = "shown" + EVENT_KEY$4;
var EVENT_CLICK = "click" + EVENT_KEY$4;
var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$4 + DATA_API_KEY$4;
var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$4 + DATA_API_KEY$4;
var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$4 + DATA_API_KEY$4;
var CLASS_NAME_DISABLED = 'disabled';
var CLASS_NAME_SHOW$1 = 'show';
var CLASS_NAME_DROPUP = 'dropup';
var CLASS_NAME_DROPEND = 'dropend';
var CLASS_NAME_DROPSTART = 'dropstart';
var CLASS_NAME_NAVBAR = 'navbar';
var SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="dropdown"]';
var SELECTOR_FORM_CHILD = '.dropdown form';
var SELECTOR_MENU = '.dropdown-menu';
var SELECTOR_NAVBAR_NAV = '.navbar-nav';
var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
var PLACEMENT_TOP = isRTL ? 'top-end' : 'top-start';
var PLACEMENT_TOPEND = isRTL ? 'top-start' : 'top-end';
var PLACEMENT_BOTTOM = isRTL ? 'bottom-end' : 'bottom-start';
var PLACEMENT_BOTTOMEND = isRTL ? 'bottom-start' : 'bottom-end';
var PLACEMENT_RIGHT = isRTL ? 'left-start' : 'right-start';
var PLACEMENT_LEFT = isRTL ? 'right-start' : 'left-start';
var Default$2 = {
  offset: 0,
  flip: true,
  boundary: 'clippingParents',
  reference: 'toggle',
  display: 'dynamic',
  popperConfig: null
};
var DefaultType$2 = {
  offset: '(number|string|function)',
  flip: 'boolean',
  boundary: '(string|element)',
  reference: '(string|element)',
  display: 'string',
  popperConfig: '(null|object)'
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Dropdown = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(Dropdown, _BaseComponent);

  function Dropdown(element, config) {
    var _this;

    _this = _BaseComponent.call(this, element) || this;
    _this._popper = null;
    _this._config = _this._getConfig(config);
    _this._menu = _this._getMenuElement();
    _this._inNavbar = _this._detectNavbar();

    _this._addEventListeners();

    return _this;
  } // Getters


  var _proto = Dropdown.prototype;

  // Public
  _proto.toggle = function toggle() {
    if (this._element.disabled || this._element.classList.contains(CLASS_NAME_DISABLED)) {
      return;
    }

    var isActive = this._element.classList.contains(CLASS_NAME_SHOW$1);

    Dropdown.clearMenus();

    if (isActive) {
      return;
    }

    this.show();
  };

  _proto.show = function show() {
    if (this._element.disabled || this._element.classList.contains(CLASS_NAME_DISABLED) || this._menu.classList.contains(CLASS_NAME_SHOW$1)) {
      return;
    }

    var parent = Dropdown.getParentFromElement(this._element);
    var relatedTarget = {
      relatedTarget: this._element
    };
    var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, relatedTarget);

    if (showEvent.defaultPrevented) {
      return;
    } // Totally disable Popper for Dropdowns in Navbar


    if (!this._inNavbar) {
      if (typeof _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ === 'undefined') {
        throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
      }

      var referenceElement = this._element;

      if (this._config.reference === 'parent') {
        referenceElement = parent;
      } else if (isElement(this._config.reference)) {
        referenceElement = this._config.reference; // Check if it's jQuery element

        if (typeof this._config.reference.jquery !== 'undefined') {
          referenceElement = this._config.reference[0];
        }
      }

      this._popper = (0,_popperjs_core__WEBPACK_IMPORTED_MODULE_1__.createPopper)(referenceElement, this._menu, this._getPopperConfig());
    } // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


    if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) {
      var _ref;

      (_ref = []).concat.apply(_ref, document.body.children).forEach(function (elem) {
        return EventHandler.on(elem, 'mouseover', null, noop());
      });
    }

    this._element.focus();

    this._element.setAttribute('aria-expanded', true);

    this._menu.classList.toggle(CLASS_NAME_SHOW$1);

    this._element.classList.toggle(CLASS_NAME_SHOW$1);

    EventHandler.trigger(parent, EVENT_SHOWN$1, relatedTarget);
  };

  _proto.hide = function hide() {
    if (this._element.disabled || this._element.classList.contains(CLASS_NAME_DISABLED) || !this._menu.classList.contains(CLASS_NAME_SHOW$1)) {
      return;
    }

    var parent = Dropdown.getParentFromElement(this._element);
    var relatedTarget = {
      relatedTarget: this._element
    };
    var hideEvent = EventHandler.trigger(parent, EVENT_HIDE$1, relatedTarget);

    if (hideEvent.defaultPrevented) {
      return;
    }

    if (this._popper) {
      this._popper.destroy();
    }

    this._menu.classList.toggle(CLASS_NAME_SHOW$1);

    this._element.classList.toggle(CLASS_NAME_SHOW$1);

    EventHandler.trigger(parent, EVENT_HIDDEN$1, relatedTarget);
  };

  _proto.dispose = function dispose() {
    _BaseComponent.prototype.dispose.call(this);

    EventHandler.off(this._element, EVENT_KEY$4);
    this._menu = null;

    if (this._popper) {
      this._popper.destroy();

      this._popper = null;
    }
  };

  _proto.update = function update() {
    this._inNavbar = this._detectNavbar();

    if (this._popper) {
      this._popper.update();
    }
  } // Private
  ;

  _proto._addEventListeners = function _addEventListeners() {
    var _this2 = this;

    EventHandler.on(this._element, EVENT_CLICK, function (event) {
      event.preventDefault();
      event.stopPropagation();

      _this2.toggle();
    });
  };

  _proto._getConfig = function _getConfig(config) {
    config = _extends({}, this.constructor.Default, Manipulator.getDataAttributes(this._element), config);
    typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
    return config;
  };

  _proto._getMenuElement = function _getMenuElement() {
    return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
  };

  _proto._getPlacement = function _getPlacement() {
    var parentDropdown = this._element.parentNode;

    if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
      return PLACEMENT_RIGHT;
    }

    if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
      return PLACEMENT_LEFT;
    } // We need to trim the value because custom properties can also include spaces


    var isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
      return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
    }

    return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
  };

  _proto._detectNavbar = function _detectNavbar() {
    return this._element.closest("." + CLASS_NAME_NAVBAR) !== null;
  };

  _proto._getPopperConfig = function _getPopperConfig() {
    var popperConfig = {
      placement: this._getPlacement(),
      modifiers: [{
        name: 'preventOverflow',
        options: {
          altBoundary: this._config.flip,
          rootBoundary: this._config.boundary
        }
      }]
    }; // Disable Popper if we have a static display

    if (this._config.display === 'static') {
      popperConfig.modifiers = [{
        name: 'applyStyles',
        enabled: false
      }];
    }

    return _extends({}, popperConfig, this._config.popperConfig);
  } // Static
  ;

  Dropdown.dropdownInterface = function dropdownInterface(element, config) {
    var data = Data.getData(element, DATA_KEY$4);

    var _config = typeof config === 'object' ? config : null;

    if (!data) {
      data = new Dropdown(element, _config);
    }

    if (typeof config === 'string') {
      if (typeof data[config] === 'undefined') {
        throw new TypeError("No method named \"" + config + "\"");
      }

      data[config]();
    }
  };

  Dropdown.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      Dropdown.dropdownInterface(this, config);
    });
  };

  Dropdown.clearMenus = function clearMenus(event) {
    if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY)) {
      return;
    }

    var toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$2);

    for (var i = 0, len = toggles.length; i < len; i++) {
      var parent = Dropdown.getParentFromElement(toggles[i]);
      var context = Data.getData(toggles[i], DATA_KEY$4);
      var relatedTarget = {
        relatedTarget: toggles[i]
      };

      if (event && event.type === 'click') {
        relatedTarget.clickEvent = event;
      }

      if (!context) {
        continue;
      }

      var dropdownMenu = context._menu;

      if (!toggles[i].classList.contains(CLASS_NAME_SHOW$1)) {
        continue;
      }

      if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.key === TAB_KEY) && dropdownMenu.contains(event.target)) {
        continue;
      }

      var hideEvent = EventHandler.trigger(parent, EVENT_HIDE$1, relatedTarget);

      if (hideEvent.defaultPrevented) {
        continue;
      } // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support


      if ('ontouchstart' in document.documentElement) {
        var _ref2;

        (_ref2 = []).concat.apply(_ref2, document.body.children).forEach(function (elem) {
          return EventHandler.off(elem, 'mouseover', null, noop());
        });
      }

      toggles[i].setAttribute('aria-expanded', 'false');

      if (context._popper) {
        context._popper.destroy();
      }

      dropdownMenu.classList.remove(CLASS_NAME_SHOW$1);
      toggles[i].classList.remove(CLASS_NAME_SHOW$1);
      EventHandler.trigger(parent, EVENT_HIDDEN$1, relatedTarget);
    }
  };

  Dropdown.getParentFromElement = function getParentFromElement(element) {
    return getElementFromSelector(element) || element.parentNode;
  };

  Dropdown.dataApiKeydownHandler = function dataApiKeydownHandler(event) {
    // If not input/textarea:
    //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
    // If input/textarea:
    //  - If space key => not a dropdown command
    //  - If key is other than escape
    //    - If key is not up or down => not a dropdown command
    //    - If trigger inside the menu => not a dropdown command
    if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    if (this.disabled || this.classList.contains(CLASS_NAME_DISABLED)) {
      return;
    }

    var parent = Dropdown.getParentFromElement(this);
    var isActive = this.classList.contains(CLASS_NAME_SHOW$1);

    if (event.key === ESCAPE_KEY) {
      var button = this.matches(SELECTOR_DATA_TOGGLE$2) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$2)[0];
      button.focus();
      Dropdown.clearMenus();
      return;
    }

    if (!isActive || event.key === SPACE_KEY) {
      Dropdown.clearMenus();
      return;
    }

    var items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, parent).filter(isVisible);

    if (!items.length) {
      return;
    }

    var index = items.indexOf(event.target); // Up

    if (event.key === ARROW_UP_KEY && index > 0) {
      index--;
    } // Down


    if (event.key === ARROW_DOWN_KEY && index < items.length - 1) {
      index++;
    } // index is -1 if the first keydown is an ArrowUp


    index = index === -1 ? 0 : index;
    items[index].focus();
  };

  _createClass(Dropdown, null, [{
    key: "Default",
    get: function get() {
      return Default$2;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$2;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return DATA_KEY$4;
    }
  }]);

  return Dropdown;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$4, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$2, function (event) {
  event.preventDefault();
  event.stopPropagation();
  Dropdown.dropdownInterface(this, 'toggle');
});
EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_FORM_CHILD, function (e) {
  return e.stopPropagation();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Dropdown to jQuery only if jQuery is present
 */

onDOMContentLoaded(function () {
  var $ = getjQuery();
  /* istanbul ignore if */

  if ($) {
    var JQUERY_NO_CONFLICT = $.fn[NAME$4];
    $.fn[NAME$4] = Dropdown.jQueryInterface;
    $.fn[NAME$4].Constructor = Dropdown;

    $.fn[NAME$4].noConflict = function () {
      $.fn[NAME$4] = JQUERY_NO_CONFLICT;
      return Dropdown.jQueryInterface;
    };
  }
});

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$5 = 'modal';
var DATA_KEY$5 = 'bs.modal';
var EVENT_KEY$5 = "." + DATA_KEY$5;
var DATA_API_KEY$5 = '.data-api';
var ESCAPE_KEY$1 = 'Escape';
var Default$3 = {
  backdrop: true,
  keyboard: true,
  focus: true
};
var DefaultType$3 = {
  backdrop: '(boolean|string)',
  keyboard: 'boolean',
  focus: 'boolean'
};
var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
var EVENT_RESIZE = "resize" + EVENT_KEY$5;
var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY$5;
var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$5 + DATA_API_KEY$5;
var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
var CLASS_NAME_BACKDROP = 'modal-backdrop';
var CLASS_NAME_OPEN = 'modal-open';
var CLASS_NAME_FADE = 'fade';
var CLASS_NAME_SHOW$2 = 'show';
var CLASS_NAME_STATIC = 'modal-static';
var SELECTOR_DIALOG = '.modal-dialog';
var SELECTOR_MODAL_BODY = '.modal-body';
var SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="modal"]';
var SELECTOR_DATA_DISMISS = '[data-bs-dismiss="modal"]';
var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
var SELECTOR_STICKY_CONTENT = '.sticky-top';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Modal = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(Modal, _BaseComponent);

  function Modal(element, config) {
    var _this;

    _this = _BaseComponent.call(this, element) || this;
    _this._config = _this._getConfig(config);
    _this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, element);
    _this._backdrop = null;
    _this._isShown = false;
    _this._isBodyOverflowing = false;
    _this._ignoreBackdropClick = false;
    _this._isTransitioning = false;
    _this._scrollbarWidth = 0;
    return _this;
  } // Getters


  var _proto = Modal.prototype;

  // Public
  _proto.toggle = function toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  };

  _proto.show = function show(relatedTarget) {
    var _this2 = this;

    if (this._isShown || this._isTransitioning) {
      return;
    }

    if (this._element.classList.contains(CLASS_NAME_FADE)) {
      this._isTransitioning = true;
    }

    var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, {
      relatedTarget: relatedTarget
    });

    if (this._isShown || showEvent.defaultPrevented) {
      return;
    }

    this._isShown = true;

    this._checkScrollbar();

    this._setScrollbar();

    this._adjustDialog();

    this._setEscapeEvent();

    this._setResizeEvent();

    EventHandler.on(this._element, EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event) {
      return _this2.hide(event);
    });
    EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, function () {
      EventHandler.one(_this2._element, EVENT_MOUSEUP_DISMISS, function (event) {
        if (event.target === _this2._element) {
          _this2._ignoreBackdropClick = true;
        }
      });
    });

    this._showBackdrop(function () {
      return _this2._showElement(relatedTarget);
    });
  };

  _proto.hide = function hide(event) {
    var _this3 = this;

    if (event) {
      event.preventDefault();
    }

    if (!this._isShown || this._isTransitioning) {
      return;
    }

    var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);

    if (hideEvent.defaultPrevented) {
      return;
    }

    this._isShown = false;

    var transition = this._element.classList.contains(CLASS_NAME_FADE);

    if (transition) {
      this._isTransitioning = true;
    }

    this._setEscapeEvent();

    this._setResizeEvent();

    EventHandler.off(document, EVENT_FOCUSIN);

    this._element.classList.remove(CLASS_NAME_SHOW$2);

    EventHandler.off(this._element, EVENT_CLICK_DISMISS);
    EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);

    if (transition) {
      var transitionDuration = getTransitionDurationFromElement(this._element);
      EventHandler.one(this._element, TRANSITION_END, function (event) {
        return _this3._hideModal(event);
      });
      emulateTransitionEnd(this._element, transitionDuration);
    } else {
      this._hideModal();
    }
  };

  _proto.dispose = function dispose() {
    [window, this._element, this._dialog].forEach(function (htmlElement) {
      return EventHandler.off(htmlElement, EVENT_KEY$5);
    });

    _BaseComponent.prototype.dispose.call(this);
    /**
     * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
     * Do not move `document` in `htmlElements` array
     * It will remove `EVENT_CLICK_DATA_API` event that should remain
     */


    EventHandler.off(document, EVENT_FOCUSIN);
    this._config = null;
    this._dialog = null;
    this._backdrop = null;
    this._isShown = null;
    this._isBodyOverflowing = null;
    this._ignoreBackdropClick = null;
    this._isTransitioning = null;
    this._scrollbarWidth = null;
  };

  _proto.handleUpdate = function handleUpdate() {
    this._adjustDialog();
  } // Private
  ;

  _proto._getConfig = function _getConfig(config) {
    config = _extends({}, Default$3, config);
    typeCheckConfig(NAME$5, config, DefaultType$3);
    return config;
  };

  _proto._showElement = function _showElement(relatedTarget) {
    var _this4 = this;

    var transition = this._element.classList.contains(CLASS_NAME_FADE);

    var modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

    if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
      // Don't move modal's DOM position
      document.body.appendChild(this._element);
    }

    this._element.style.display = 'block';

    this._element.removeAttribute('aria-hidden');

    this._element.setAttribute('aria-modal', true);

    this._element.setAttribute('role', 'dialog');

    this._element.scrollTop = 0;

    if (modalBody) {
      modalBody.scrollTop = 0;
    }

    if (transition) {
      reflow(this._element);
    }

    this._element.classList.add(CLASS_NAME_SHOW$2);

    if (this._config.focus) {
      this._enforceFocus();
    }

    var transitionComplete = function transitionComplete() {
      if (_this4._config.focus) {
        _this4._element.focus();
      }

      _this4._isTransitioning = false;
      EventHandler.trigger(_this4._element, EVENT_SHOWN$2, {
        relatedTarget: relatedTarget
      });
    };

    if (transition) {
      var transitionDuration = getTransitionDurationFromElement(this._dialog);
      EventHandler.one(this._dialog, TRANSITION_END, transitionComplete);
      emulateTransitionEnd(this._dialog, transitionDuration);
    } else {
      transitionComplete();
    }
  };

  _proto._enforceFocus = function _enforceFocus() {
    var _this5 = this;

    EventHandler.off(document, EVENT_FOCUSIN); // guard against infinite focus loop

    EventHandler.on(document, EVENT_FOCUSIN, function (event) {
      if (document !== event.target && _this5._element !== event.target && !_this5._element.contains(event.target)) {
        _this5._element.focus();
      }
    });
  };

  _proto._setEscapeEvent = function _setEscapeEvent() {
    var _this6 = this;

    if (this._isShown) {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, function (event) {
        if (_this6._config.keyboard && event.key === ESCAPE_KEY$1) {
          event.preventDefault();

          _this6.hide();
        } else if (!_this6._config.keyboard && event.key === ESCAPE_KEY$1) {
          _this6._triggerBackdropTransition();
        }
      });
    } else {
      EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS);
    }
  };

  _proto._setResizeEvent = function _setResizeEvent() {
    var _this7 = this;

    if (this._isShown) {
      EventHandler.on(window, EVENT_RESIZE, function () {
        return _this7._adjustDialog();
      });
    } else {
      EventHandler.off(window, EVENT_RESIZE);
    }
  };

  _proto._hideModal = function _hideModal() {
    var _this8 = this;

    this._element.style.display = 'none';

    this._element.setAttribute('aria-hidden', true);

    this._element.removeAttribute('aria-modal');

    this._element.removeAttribute('role');

    this._isTransitioning = false;

    this._showBackdrop(function () {
      document.body.classList.remove(CLASS_NAME_OPEN);

      _this8._resetAdjustments();

      _this8._resetScrollbar();

      EventHandler.trigger(_this8._element, EVENT_HIDDEN$2);
    });
  };

  _proto._removeBackdrop = function _removeBackdrop() {
    this._backdrop.parentNode.removeChild(this._backdrop);

    this._backdrop = null;
  };

  _proto._showBackdrop = function _showBackdrop(callback) {
    var _this9 = this;

    var animate = this._element.classList.contains(CLASS_NAME_FADE) ? CLASS_NAME_FADE : '';

    if (this._isShown && this._config.backdrop) {
      this._backdrop = document.createElement('div');
      this._backdrop.className = CLASS_NAME_BACKDROP;

      if (animate) {
        this._backdrop.classList.add(animate);
      }

      document.body.appendChild(this._backdrop);
      EventHandler.on(this._element, EVENT_CLICK_DISMISS, function (event) {
        if (_this9._ignoreBackdropClick) {
          _this9._ignoreBackdropClick = false;
          return;
        }

        if (event.target !== event.currentTarget) {
          return;
        }

        if (_this9._config.backdrop === 'static') {
          _this9._triggerBackdropTransition();
        } else {
          _this9.hide();
        }
      });

      if (animate) {
        reflow(this._backdrop);
      }

      this._backdrop.classList.add(CLASS_NAME_SHOW$2);

      if (!animate) {
        callback();
        return;
      }

      var backdropTransitionDuration = getTransitionDurationFromElement(this._backdrop);
      EventHandler.one(this._backdrop, TRANSITION_END, callback);
      emulateTransitionEnd(this._backdrop, backdropTransitionDuration);
    } else if (!this._isShown && this._backdrop) {
      this._backdrop.classList.remove(CLASS_NAME_SHOW$2);

      var callbackRemove = function callbackRemove() {
        _this9._removeBackdrop();

        callback();
      };

      if (this._element.classList.contains(CLASS_NAME_FADE)) {
        var _backdropTransitionDuration = getTransitionDurationFromElement(this._backdrop);

        EventHandler.one(this._backdrop, TRANSITION_END, callbackRemove);
        emulateTransitionEnd(this._backdrop, _backdropTransitionDuration);
      } else {
        callbackRemove();
      }
    } else {
      callback();
    }
  };

  _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
    var _this10 = this;

    var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);

    if (hideEvent.defaultPrevented) {
      return;
    }

    var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

    if (!isModalOverflowing) {
      this._element.style.overflowY = 'hidden';
    }

    this._element.classList.add(CLASS_NAME_STATIC);

    var modalTransitionDuration = getTransitionDurationFromElement(this._dialog);
    EventHandler.off(this._element, TRANSITION_END);
    EventHandler.one(this._element, TRANSITION_END, function () {
      _this10._element.classList.remove(CLASS_NAME_STATIC);

      if (!isModalOverflowing) {
        EventHandler.one(_this10._element, TRANSITION_END, function () {
          _this10._element.style.overflowY = '';
        });
        emulateTransitionEnd(_this10._element, modalTransitionDuration);
      }
    });
    emulateTransitionEnd(this._element, modalTransitionDuration);

    this._element.focus();
  } // ----------------------------------------------------------------------
  // the following methods are used to handle overflowing modals
  // ----------------------------------------------------------------------
  ;

  _proto._adjustDialog = function _adjustDialog() {
    var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

    if (!this._isBodyOverflowing && isModalOverflowing && !isRTL || this._isBodyOverflowing && !isModalOverflowing && isRTL) {
      this._element.style.paddingLeft = this._scrollbarWidth + "px";
    }

    if (this._isBodyOverflowing && !isModalOverflowing && !isRTL || !this._isBodyOverflowing && isModalOverflowing && isRTL) {
      this._element.style.paddingRight = this._scrollbarWidth + "px";
    }
  };

  _proto._resetAdjustments = function _resetAdjustments() {
    this._element.style.paddingLeft = '';
    this._element.style.paddingRight = '';
  };

  _proto._checkScrollbar = function _checkScrollbar() {
    var rect = document.body.getBoundingClientRect();
    this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
    this._scrollbarWidth = this._getScrollbarWidth();
  };

  _proto._setScrollbar = function _setScrollbar() {
    var _this11 = this;

    if (this._isBodyOverflowing) {
      // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
      //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
      // Adjust fixed content padding
      SelectorEngine.find(SELECTOR_FIXED_CONTENT).forEach(function (element) {
        var actualPadding = element.style.paddingRight;
        var calculatedPadding = window.getComputedStyle(element)['padding-right'];
        Manipulator.setDataAttribute(element, 'padding-right', actualPadding);
        element.style.paddingRight = Number.parseFloat(calculatedPadding) + _this11._scrollbarWidth + "px";
      }); // Adjust sticky content margin

      SelectorEngine.find(SELECTOR_STICKY_CONTENT).forEach(function (element) {
        var actualMargin = element.style.marginRight;
        var calculatedMargin = window.getComputedStyle(element)['margin-right'];
        Manipulator.setDataAttribute(element, 'margin-right', actualMargin);
        element.style.marginRight = Number.parseFloat(calculatedMargin) - _this11._scrollbarWidth + "px";
      }); // Adjust body padding

      var actualPadding = document.body.style.paddingRight;
      var calculatedPadding = window.getComputedStyle(document.body)['padding-right'];
      Manipulator.setDataAttribute(document.body, 'padding-right', actualPadding);
      document.body.style.paddingRight = Number.parseFloat(calculatedPadding) + this._scrollbarWidth + "px";
    }

    document.body.classList.add(CLASS_NAME_OPEN);
  };

  _proto._resetScrollbar = function _resetScrollbar() {
    // Restore fixed content padding
    SelectorEngine.find(SELECTOR_FIXED_CONTENT).forEach(function (element) {
      var padding = Manipulator.getDataAttribute(element, 'padding-right');

      if (typeof padding !== 'undefined') {
        Manipulator.removeDataAttribute(element, 'padding-right');
        element.style.paddingRight = padding;
      }
    }); // Restore sticky content and navbar-toggler margin

    SelectorEngine.find("" + SELECTOR_STICKY_CONTENT).forEach(function (element) {
      var margin = Manipulator.getDataAttribute(element, 'margin-right');

      if (typeof margin !== 'undefined') {
        Manipulator.removeDataAttribute(element, 'margin-right');
        element.style.marginRight = margin;
      }
    }); // Restore body padding

    var padding = Manipulator.getDataAttribute(document.body, 'padding-right');

    if (typeof padding === 'undefined') {
      document.body.style.paddingRight = '';
    } else {
      Manipulator.removeDataAttribute(document.body, 'padding-right');
      document.body.style.paddingRight = padding;
    }
  };

  _proto._getScrollbarWidth = function _getScrollbarWidth() {
    // thx d.walsh
    var scrollDiv = document.createElement('div');
    scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  } // Static
  ;

  Modal.jQueryInterface = function jQueryInterface(config, relatedTarget) {
    return this.each(function () {
      var data = Data.getData(this, DATA_KEY$5);

      var _config = _extends({}, Default$3, Manipulator.getDataAttributes(this), typeof config === 'object' && config ? config : {});

      if (!data) {
        data = new Modal(this, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config](relatedTarget);
      }
    });
  };

  _createClass(Modal, null, [{
    key: "Default",
    get: function get() {
      return Default$3;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return DATA_KEY$5;
    }
  }]);

  return Modal;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE$3, function (event) {
  var _this12 = this;

  var target = getElementFromSelector(this);

  if (this.tagName === 'A' || this.tagName === 'AREA') {
    event.preventDefault();
  }

  EventHandler.one(target, EVENT_SHOW$2, function (showEvent) {
    if (showEvent.defaultPrevented) {
      // only register focus restorer if modal will actually get shown
      return;
    }

    EventHandler.one(target, EVENT_HIDDEN$2, function () {
      if (isVisible(_this12)) {
        _this12.focus();
      }
    });
  });
  var data = Data.getData(target, DATA_KEY$5);

  if (!data) {
    var config = _extends({}, Manipulator.getDataAttributes(target), Manipulator.getDataAttributes(this));

    data = new Modal(target, config);
  }

  data.show(this);
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Modal to jQuery only if jQuery is present
 */

onDOMContentLoaded(function () {
  var $ = getjQuery();
  /* istanbul ignore if */

  if ($) {
    var JQUERY_NO_CONFLICT = $.fn[NAME$5];
    $.fn[NAME$5] = Modal.jQueryInterface;
    $.fn[NAME$5].Constructor = Modal;

    $.fn[NAME$5].noConflict = function () {
      $.fn[NAME$5] = JQUERY_NO_CONFLICT;
      return Modal.jQueryInterface;
    };
  }
});

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-beta1): util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
var uriAttrs = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
 */

var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi;
/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 *
 * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
 */

var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

var allowedAttribute = function allowedAttribute(attr, allowedAttributeList) {
  var attrName = attr.nodeName.toLowerCase();

  if (allowedAttributeList.includes(attrName)) {
    if (uriAttrs.has(attrName)) {
      return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
    }

    return true;
  }

  var regExp = allowedAttributeList.filter(function (attrRegex) {
    return attrRegex instanceof RegExp;
  }); // Check if a regular expression validates the attribute.

  for (var i = 0, len = regExp.length; i < len; i++) {
    if (attrName.match(regExp[i])) {
      return true;
    }
  }

  return false;
};

var DefaultAllowlist = {
  // Global attributes allowed on any supplied element below.
  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
  a: ['target', 'href', 'title', 'rel'],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};
function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
  var _ref;

  if (!unsafeHtml.length) {
    return unsafeHtml;
  }

  if (sanitizeFn && typeof sanitizeFn === 'function') {
    return sanitizeFn(unsafeHtml);
  }

  var domParser = new window.DOMParser();
  var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
  var allowlistKeys = Object.keys(allowList);

  var elements = (_ref = []).concat.apply(_ref, createdDocument.body.querySelectorAll('*'));

  var _loop = function _loop(i, len) {
    var _ref2;

    var el = elements[i];
    var elName = el.nodeName.toLowerCase();

    if (!allowlistKeys.includes(elName)) {
      el.parentNode.removeChild(el);
      return "continue";
    }

    var attributeList = (_ref2 = []).concat.apply(_ref2, el.attributes);

    var allowedAttributes = [].concat(allowList['*'] || [], allowList[elName] || []);
    attributeList.forEach(function (attr) {
      if (!allowedAttribute(attr, allowedAttributes)) {
        el.removeAttribute(attr.nodeName);
      }
    });
  };

  for (var i = 0, len = elements.length; i < len; i++) {
    var _ret = _loop(i);

    if (_ret === "continue") continue;
  }

  return createdDocument.body.innerHTML;
}

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$6 = 'tooltip';
var DATA_KEY$6 = 'bs.tooltip';
var EVENT_KEY$6 = "." + DATA_KEY$6;
var CLASS_PREFIX = 'bs-tooltip';
var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
var DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
var DefaultType$4 = {
  animation: 'boolean',
  template: 'string',
  title: '(string|element|function)',
  trigger: 'string',
  delay: '(number|object)',
  html: 'boolean',
  selector: '(string|boolean)',
  placement: '(string|function)',
  container: '(string|element|boolean)',
  fallbackPlacements: '(null|array)',
  boundary: '(string|element)',
  customClass: '(string|function)',
  sanitize: 'boolean',
  sanitizeFn: '(null|function)',
  allowList: 'object',
  popperConfig: '(null|object)'
};
var AttachmentMap = {
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: isRTL ? 'left' : 'right',
  BOTTOM: 'bottom',
  LEFT: isRTL ? 'right' : 'left'
};
var Default$4 = {
  animation: true,
  template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
  trigger: 'hover focus',
  title: '',
  delay: 0,
  html: false,
  selector: false,
  placement: 'top',
  container: false,
  fallbackPlacements: null,
  boundary: 'clippingParents',
  customClass: '',
  sanitize: true,
  sanitizeFn: null,
  allowList: DefaultAllowlist,
  popperConfig: null
};
var Event$1 = {
  HIDE: "hide" + EVENT_KEY$6,
  HIDDEN: "hidden" + EVENT_KEY$6,
  SHOW: "show" + EVENT_KEY$6,
  SHOWN: "shown" + EVENT_KEY$6,
  INSERTED: "inserted" + EVENT_KEY$6,
  CLICK: "click" + EVENT_KEY$6,
  FOCUSIN: "focusin" + EVENT_KEY$6,
  FOCUSOUT: "focusout" + EVENT_KEY$6,
  MOUSEENTER: "mouseenter" + EVENT_KEY$6,
  MOUSELEAVE: "mouseleave" + EVENT_KEY$6
};
var CLASS_NAME_FADE$1 = 'fade';
var CLASS_NAME_MODAL = 'modal';
var CLASS_NAME_SHOW$3 = 'show';
var HOVER_STATE_SHOW = 'show';
var HOVER_STATE_OUT = 'out';
var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
var TRIGGER_HOVER = 'hover';
var TRIGGER_FOCUS = 'focus';
var TRIGGER_CLICK = 'click';
var TRIGGER_MANUAL = 'manual';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Tooltip = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(Tooltip, _BaseComponent);

  function Tooltip(element, config) {
    var _this;

    if (typeof _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ === 'undefined') {
      throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
    }

    _this = _BaseComponent.call(this, element) || this; // private

    _this._isEnabled = true;
    _this._timeout = 0;
    _this._hoverState = '';
    _this._activeTrigger = {};
    _this._popper = null; // Protected

    _this.config = _this._getConfig(config);
    _this.tip = null;

    _this._setListeners();

    return _this;
  } // Getters


  var _proto = Tooltip.prototype;

  // Public
  _proto.enable = function enable() {
    this._isEnabled = true;
  };

  _proto.disable = function disable() {
    this._isEnabled = false;
  };

  _proto.toggleEnabled = function toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  };

  _proto.toggle = function toggle(event) {
    if (!this._isEnabled) {
      return;
    }

    if (event) {
      var dataKey = this.constructor.DATA_KEY;
      var context = Data.getData(event.delegateTarget, dataKey);

      if (!context) {
        context = new this.constructor(event.delegateTarget, this._getDelegateConfig());
        Data.setData(event.delegateTarget, dataKey, context);
      }

      context._activeTrigger.click = !context._activeTrigger.click;

      if (context._isWithActiveTrigger()) {
        context._enter(null, context);
      } else {
        context._leave(null, context);
      }
    } else {
      if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$3)) {
        this._leave(null, this);

        return;
      }

      this._enter(null, this);
    }
  };

  _proto.dispose = function dispose() {
    clearTimeout(this._timeout);
    EventHandler.off(this._element, this.constructor.EVENT_KEY);
    EventHandler.off(this._element.closest("." + CLASS_NAME_MODAL), 'hide.bs.modal', this._hideModalHandler);

    if (this.tip) {
      this.tip.parentNode.removeChild(this.tip);
    }

    this._isEnabled = null;
    this._timeout = null;
    this._hoverState = null;
    this._activeTrigger = null;

    if (this._popper) {
      this._popper.destroy();
    }

    this._popper = null;
    this.config = null;
    this.tip = null;

    _BaseComponent.prototype.dispose.call(this);
  };

  _proto.show = function show() {
    var _this2 = this;

    if (this._element.style.display === 'none') {
      throw new Error('Please use show on visible elements');
    }

    if (this.isWithContent() && this._isEnabled) {
      var showEvent = EventHandler.trigger(this._element, this.constructor.Event.SHOW);
      var shadowRoot = findShadowRoot(this._element);
      var isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);

      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      }

      var tip = this.getTipElement();
      var tipId = getUID(this.constructor.NAME);
      tip.setAttribute('id', tipId);

      this._element.setAttribute('aria-describedby', tipId);

      this.setContent();

      if (this.config.animation) {
        tip.classList.add(CLASS_NAME_FADE$1);
      }

      var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this._element) : this.config.placement;

      var attachment = this._getAttachment(placement);

      this._addAttachmentClass(attachment);

      var container = this._getContainer();

      Data.setData(tip, this.constructor.DATA_KEY, this);

      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.appendChild(tip);
      }

      EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
      this._popper = (0,_popperjs_core__WEBPACK_IMPORTED_MODULE_1__.createPopper)(this._element, tip, this._getPopperConfig(attachment));
      tip.classList.add(CLASS_NAME_SHOW$3);
      var customClass = typeof this.config.customClass === 'function' ? this.config.customClass() : this.config.customClass;

      if (customClass) {
        var _tip$classList;

        (_tip$classList = tip.classList).add.apply(_tip$classList, customClass.split(' '));
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement) {
        var _ref;

        (_ref = []).concat.apply(_ref, document.body.children).forEach(function (element) {
          EventHandler.on(element, 'mouseover', noop());
        });
      }

      var complete = function complete() {
        var prevHoverState = _this2._hoverState;
        _this2._hoverState = null;
        EventHandler.trigger(_this2._element, _this2.constructor.Event.SHOWN);

        if (prevHoverState === HOVER_STATE_OUT) {
          _this2._leave(null, _this2);
        }
      };

      if (this.tip.classList.contains(CLASS_NAME_FADE$1)) {
        var transitionDuration = getTransitionDurationFromElement(this.tip);
        EventHandler.one(this.tip, TRANSITION_END, complete);
        emulateTransitionEnd(this.tip, transitionDuration);
      } else {
        complete();
      }
    }
  };

  _proto.hide = function hide() {
    var _this3 = this;

    if (!this._popper) {
      return;
    }

    var tip = this.getTipElement();

    var complete = function complete() {
      if (_this3._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
        tip.parentNode.removeChild(tip);
      }

      _this3._cleanTipClass();

      _this3._element.removeAttribute('aria-describedby');

      EventHandler.trigger(_this3._element, _this3.constructor.Event.HIDDEN);

      if (_this3._popper) {
        _this3._popper.destroy();

        _this3._popper = null;
      }
    };

    var hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);

    if (hideEvent.defaultPrevented) {
      return;
    }

    tip.classList.remove(CLASS_NAME_SHOW$3); // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support

    if ('ontouchstart' in document.documentElement) {
      var _ref2;

      (_ref2 = []).concat.apply(_ref2, document.body.children).forEach(function (element) {
        return EventHandler.off(element, 'mouseover', noop);
      });
    }

    this._activeTrigger[TRIGGER_CLICK] = false;
    this._activeTrigger[TRIGGER_FOCUS] = false;
    this._activeTrigger[TRIGGER_HOVER] = false;

    if (this.tip.classList.contains(CLASS_NAME_FADE$1)) {
      var transitionDuration = getTransitionDurationFromElement(tip);
      EventHandler.one(tip, TRANSITION_END, complete);
      emulateTransitionEnd(tip, transitionDuration);
    } else {
      complete();
    }

    this._hoverState = '';
  };

  _proto.update = function update() {
    if (this._popper !== null) {
      this._popper.update();
    }
  } // Protected
  ;

  _proto.isWithContent = function isWithContent() {
    return Boolean(this.getTitle());
  };

  _proto.getTipElement = function getTipElement() {
    if (this.tip) {
      return this.tip;
    }

    var element = document.createElement('div');
    element.innerHTML = this.config.template;
    this.tip = element.children[0];
    return this.tip;
  };

  _proto.setContent = function setContent() {
    var tip = this.getTipElement();
    this.setElementContent(SelectorEngine.findOne(SELECTOR_TOOLTIP_INNER, tip), this.getTitle());
    tip.classList.remove(CLASS_NAME_FADE$1, CLASS_NAME_SHOW$3);
  };

  _proto.setElementContent = function setElementContent(element, content) {
    if (element === null) {
      return;
    }

    if (typeof content === 'object' && isElement(content)) {
      if (content.jquery) {
        content = content[0];
      } // content is a DOM node or a jQuery


      if (this.config.html) {
        if (content.parentNode !== element) {
          element.innerHTML = '';
          element.appendChild(content);
        }
      } else {
        element.textContent = content.textContent;
      }

      return;
    }

    if (this.config.html) {
      if (this.config.sanitize) {
        content = sanitizeHtml(content, this.config.allowList, this.config.sanitizeFn);
      }

      element.innerHTML = content;
    } else {
      element.textContent = content;
    }
  };

  _proto.getTitle = function getTitle() {
    var title = this._element.getAttribute('data-bs-original-title');

    if (!title) {
      title = typeof this.config.title === 'function' ? this.config.title.call(this._element) : this.config.title;
    }

    return title;
  };

  _proto.updateAttachment = function updateAttachment(attachment) {
    if (attachment === 'right') {
      return 'end';
    }

    if (attachment === 'left') {
      return 'start';
    }

    return attachment;
  } // Private
  ;

  _proto._getPopperConfig = function _getPopperConfig(attachment) {
    var _this4 = this;

    var flipModifier = {
      name: 'flip',
      options: {
        altBoundary: true
      }
    };

    if (this.config.fallbackPlacements) {
      flipModifier.options.fallbackPlacements = this.config.fallbackPlacements;
    }

    var defaultBsConfig = {
      placement: attachment,
      modifiers: [flipModifier, {
        name: 'preventOverflow',
        options: {
          rootBoundary: this.config.boundary
        }
      }, {
        name: 'arrow',
        options: {
          element: "." + this.constructor.NAME + "-arrow"
        }
      }, {
        name: 'onChange',
        enabled: true,
        phase: 'afterWrite',
        fn: function fn(data) {
          return _this4._handlePopperPlacementChange(data);
        }
      }],
      onFirstUpdate: function onFirstUpdate(data) {
        if (data.options.placement !== data.placement) {
          _this4._handlePopperPlacementChange(data);
        }
      }
    };
    return _extends({}, defaultBsConfig, this.config.popperConfig);
  };

  _proto._addAttachmentClass = function _addAttachmentClass(attachment) {
    this.getTipElement().classList.add(CLASS_PREFIX + "-" + this.updateAttachment(attachment));
  };

  _proto._getContainer = function _getContainer() {
    if (this.config.container === false) {
      return document.body;
    }

    if (isElement(this.config.container)) {
      return this.config.container;
    }

    return SelectorEngine.findOne(this.config.container);
  };

  _proto._getAttachment = function _getAttachment(placement) {
    return AttachmentMap[placement.toUpperCase()];
  };

  _proto._setListeners = function _setListeners() {
    var _this5 = this;

    var triggers = this.config.trigger.split(' ');
    triggers.forEach(function (trigger) {
      if (trigger === 'click') {
        EventHandler.on(_this5._element, _this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
          return _this5.toggle(event);
        });
      } else if (trigger !== TRIGGER_MANUAL) {
        var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
        var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
        EventHandler.on(_this5._element, eventIn, _this5.config.selector, function (event) {
          return _this5._enter(event);
        });
        EventHandler.on(_this5._element, eventOut, _this5.config.selector, function (event) {
          return _this5._leave(event);
        });
      }
    });

    this._hideModalHandler = function () {
      if (_this5._element) {
        _this5.hide();
      }
    };

    EventHandler.on(this._element.closest("." + CLASS_NAME_MODAL), 'hide.bs.modal', this._hideModalHandler);

    if (this.config.selector) {
      this.config = _extends({}, this.config, {
        trigger: 'manual',
        selector: ''
      });
    } else {
      this._fixTitle();
    }
  };

  _proto._fixTitle = function _fixTitle() {
    var title = this._element.getAttribute('title');

    var originalTitleType = typeof this._element.getAttribute('data-bs-original-title');

    if (title || originalTitleType !== 'string') {
      this._element.setAttribute('data-bs-original-title', title || '');

      if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) {
        this._element.setAttribute('aria-label', title);
      }

      this._element.setAttribute('title', '');
    }
  };

  _proto._enter = function _enter(event, context) {
    var dataKey = this.constructor.DATA_KEY;
    context = context || Data.getData(event.delegateTarget, dataKey);

    if (!context) {
      context = new this.constructor(event.delegateTarget, this._getDelegateConfig());
      Data.setData(event.delegateTarget, dataKey, context);
    }

    if (event) {
      context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
    }

    if (context.getTipElement().classList.contains(CLASS_NAME_SHOW$3) || context._hoverState === HOVER_STATE_SHOW) {
      context._hoverState = HOVER_STATE_SHOW;
      return;
    }

    clearTimeout(context._timeout);
    context._hoverState = HOVER_STATE_SHOW;

    if (!context.config.delay || !context.config.delay.show) {
      context.show();
      return;
    }

    context._timeout = setTimeout(function () {
      if (context._hoverState === HOVER_STATE_SHOW) {
        context.show();
      }
    }, context.config.delay.show);
  };

  _proto._leave = function _leave(event, context) {
    var dataKey = this.constructor.DATA_KEY;
    context = context || Data.getData(event.delegateTarget, dataKey);

    if (!context) {
      context = new this.constructor(event.delegateTarget, this._getDelegateConfig());
      Data.setData(event.delegateTarget, dataKey, context);
    }

    if (event) {
      context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
    }

    if (context._isWithActiveTrigger()) {
      return;
    }

    clearTimeout(context._timeout);
    context._hoverState = HOVER_STATE_OUT;

    if (!context.config.delay || !context.config.delay.hide) {
      context.hide();
      return;
    }

    context._timeout = setTimeout(function () {
      if (context._hoverState === HOVER_STATE_OUT) {
        context.hide();
      }
    }, context.config.delay.hide);
  };

  _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
    for (var trigger in this._activeTrigger) {
      if (this._activeTrigger[trigger]) {
        return true;
      }
    }

    return false;
  };

  _proto._getConfig = function _getConfig(config) {
    var dataAttributes = Manipulator.getDataAttributes(this._element);
    Object.keys(dataAttributes).forEach(function (dataAttr) {
      if (DISALLOWED_ATTRIBUTES.has(dataAttr)) {
        delete dataAttributes[dataAttr];
      }
    });

    if (config && typeof config.container === 'object' && config.container.jquery) {
      config.container = config.container[0];
    }

    config = _extends({}, this.constructor.Default, dataAttributes, typeof config === 'object' && config ? config : {});

    if (typeof config.delay === 'number') {
      config.delay = {
        show: config.delay,
        hide: config.delay
      };
    }

    if (typeof config.title === 'number') {
      config.title = config.title.toString();
    }

    if (typeof config.content === 'number') {
      config.content = config.content.toString();
    }

    typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

    if (config.sanitize) {
      config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
    }

    return config;
  };

  _proto._getDelegateConfig = function _getDelegateConfig() {
    var config = {};

    if (this.config) {
      for (var key in this.config) {
        if (this.constructor.Default[key] !== this.config[key]) {
          config[key] = this.config[key];
        }
      }
    }

    return config;
  };

  _proto._cleanTipClass = function _cleanTipClass() {
    var tip = this.getTipElement();
    var tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX);

    if (tabClass !== null && tabClass.length > 0) {
      tabClass.map(function (token) {
        return token.trim();
      }).forEach(function (tClass) {
        return tip.classList.remove(tClass);
      });
    }
  };

  _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
    var state = popperData.state;

    if (!state) {
      return;
    }

    this.tip = state.elements.popper;

    this._cleanTipClass();

    this._addAttachmentClass(this._getAttachment(state.placement));
  } // Static
  ;

  Tooltip.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      var data = Data.getData(this, DATA_KEY$6);

      var _config = typeof config === 'object' && config;

      if (!data && /dispose|hide/.test(config)) {
        return;
      }

      if (!data) {
        data = new Tooltip(this, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config]();
      }
    });
  };

  _createClass(Tooltip, null, [{
    key: "Default",
    get: function get() {
      return Default$4;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$6;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return DATA_KEY$6;
    }
  }, {
    key: "Event",
    get: function get() {
      return Event$1;
    }
  }, {
    key: "EVENT_KEY",
    get: function get() {
      return EVENT_KEY$6;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$4;
    }
  }]);

  return Tooltip;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tooltip to jQuery only if jQuery is present
 */


onDOMContentLoaded(function () {
  var $ = getjQuery();
  /* istanbul ignore if */

  if ($) {
    var JQUERY_NO_CONFLICT = $.fn[NAME$6];
    $.fn[NAME$6] = Tooltip.jQueryInterface;
    $.fn[NAME$6].Constructor = Tooltip;

    $.fn[NAME$6].noConflict = function () {
      $.fn[NAME$6] = JQUERY_NO_CONFLICT;
      return Tooltip.jQueryInterface;
    };
  }
});

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$7 = 'popover';
var DATA_KEY$7 = 'bs.popover';
var EVENT_KEY$7 = "." + DATA_KEY$7;
var CLASS_PREFIX$1 = 'bs-popover';
var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

var Default$5 = _extends({}, Tooltip.Default, {
  placement: 'right',
  trigger: 'click',
  content: '',
  template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>'
});

var DefaultType$5 = _extends({}, Tooltip.DefaultType, {
  content: '(string|element|function)'
});

var Event$2 = {
  HIDE: "hide" + EVENT_KEY$7,
  HIDDEN: "hidden" + EVENT_KEY$7,
  SHOW: "show" + EVENT_KEY$7,
  SHOWN: "shown" + EVENT_KEY$7,
  INSERTED: "inserted" + EVENT_KEY$7,
  CLICK: "click" + EVENT_KEY$7,
  FOCUSIN: "focusin" + EVENT_KEY$7,
  FOCUSOUT: "focusout" + EVENT_KEY$7,
  MOUSEENTER: "mouseenter" + EVENT_KEY$7,
  MOUSELEAVE: "mouseleave" + EVENT_KEY$7
};
var CLASS_NAME_FADE$2 = 'fade';
var CLASS_NAME_SHOW$4 = 'show';
var SELECTOR_TITLE = '.popover-header';
var SELECTOR_CONTENT = '.popover-body';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Popover = /*#__PURE__*/function (_Tooltip) {
  _inheritsLoose(Popover, _Tooltip);

  function Popover() {
    return _Tooltip.apply(this, arguments) || this;
  }

  var _proto = Popover.prototype;

  // Overrides
  _proto.isWithContent = function isWithContent() {
    return this.getTitle() || this._getContent();
  };

  _proto.setContent = function setContent() {
    var tip = this.getTipElement(); // we use append for html objects to maintain js events

    this.setElementContent(SelectorEngine.findOne(SELECTOR_TITLE, tip), this.getTitle());

    var content = this._getContent();

    if (typeof content === 'function') {
      content = content.call(this._element);
    }

    this.setElementContent(SelectorEngine.findOne(SELECTOR_CONTENT, tip), content);
    tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$4);
  } // Private
  ;

  _proto._addAttachmentClass = function _addAttachmentClass(attachment) {
    this.getTipElement().classList.add(CLASS_PREFIX$1 + "-" + this.updateAttachment(attachment));
  };

  _proto._getContent = function _getContent() {
    return this._element.getAttribute('data-bs-content') || this.config.content;
  };

  _proto._cleanTipClass = function _cleanTipClass() {
    var tip = this.getTipElement();
    var tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX$1);

    if (tabClass !== null && tabClass.length > 0) {
      tabClass.map(function (token) {
        return token.trim();
      }).forEach(function (tClass) {
        return tip.classList.remove(tClass);
      });
    }
  } // Static
  ;

  Popover.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      var data = Data.getData(this, DATA_KEY$7);

      var _config = typeof config === 'object' ? config : null;

      if (!data && /dispose|hide/.test(config)) {
        return;
      }

      if (!data) {
        data = new Popover(this, _config);
        Data.setData(this, DATA_KEY$7, data);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config]();
      }
    });
  };

  _createClass(Popover, null, [{
    key: "Default",
    // Getters
    get: function get() {
      return Default$5;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$7;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return DATA_KEY$7;
    }
  }, {
    key: "Event",
    get: function get() {
      return Event$2;
    }
  }, {
    key: "EVENT_KEY",
    get: function get() {
      return EVENT_KEY$7;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$5;
    }
  }]);

  return Popover;
}(Tooltip);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Popover to jQuery only if jQuery is present
 */


onDOMContentLoaded(function () {
  var $ = getjQuery();
  /* istanbul ignore if */

  if ($) {
    var JQUERY_NO_CONFLICT = $.fn[NAME$7];
    $.fn[NAME$7] = Popover.jQueryInterface;
    $.fn[NAME$7].Constructor = Popover;

    $.fn[NAME$7].noConflict = function () {
      $.fn[NAME$7] = JQUERY_NO_CONFLICT;
      return Popover.jQueryInterface;
    };
  }
});

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$8 = 'scrollspy';
var DATA_KEY$8 = 'bs.scrollspy';
var EVENT_KEY$8 = "." + DATA_KEY$8;
var DATA_API_KEY$6 = '.data-api';
var Default$6 = {
  offset: 10,
  method: 'auto',
  target: ''
};
var DefaultType$6 = {
  offset: 'number',
  method: 'string',
  target: '(string|element)'
};
var EVENT_ACTIVATE = "activate" + EVENT_KEY$8;
var EVENT_SCROLL = "scroll" + EVENT_KEY$8;
var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$8 + DATA_API_KEY$6;
var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
var CLASS_NAME_ACTIVE$2 = 'active';
var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
var SELECTOR_NAV_LINKS = '.nav-link';
var SELECTOR_NAV_ITEMS = '.nav-item';
var SELECTOR_LIST_ITEMS = '.list-group-item';
var SELECTOR_DROPDOWN = '.dropdown';
var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
var METHOD_OFFSET = 'offset';
var METHOD_POSITION = 'position';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var ScrollSpy = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(ScrollSpy, _BaseComponent);

  function ScrollSpy(element, config) {
    var _this;

    _this = _BaseComponent.call(this, element) || this;
    _this._scrollElement = element.tagName === 'BODY' ? window : element;
    _this._config = _this._getConfig(config);
    _this._selector = _this._config.target + " " + SELECTOR_NAV_LINKS + ", " + _this._config.target + " " + SELECTOR_LIST_ITEMS + ", " + _this._config.target + " ." + CLASS_NAME_DROPDOWN_ITEM;
    _this._offsets = [];
    _this._targets = [];
    _this._activeTarget = null;
    _this._scrollHeight = 0;
    EventHandler.on(_this._scrollElement, EVENT_SCROLL, function (event) {
      return _this._process(event);
    });

    _this.refresh();

    _this._process();

    return _this;
  } // Getters


  var _proto = ScrollSpy.prototype;

  // Public
  _proto.refresh = function refresh() {
    var _this2 = this;

    var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
    var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
    var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
    this._offsets = [];
    this._targets = [];
    this._scrollHeight = this._getScrollHeight();
    var targets = SelectorEngine.find(this._selector);
    targets.map(function (element) {
      var targetSelector = getSelectorFromElement(element);
      var target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;

      if (target) {
        var targetBCR = target.getBoundingClientRect();

        if (targetBCR.width || targetBCR.height) {
          return [Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
        }
      }

      return null;
    }).filter(function (item) {
      return item;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).forEach(function (item) {
      _this2._offsets.push(item[0]);

      _this2._targets.push(item[1]);
    });
  };

  _proto.dispose = function dispose() {
    _BaseComponent.prototype.dispose.call(this);

    EventHandler.off(this._scrollElement, EVENT_KEY$8);
    this._scrollElement = null;
    this._config = null;
    this._selector = null;
    this._offsets = null;
    this._targets = null;
    this._activeTarget = null;
    this._scrollHeight = null;
  } // Private
  ;

  _proto._getConfig = function _getConfig(config) {
    config = _extends({}, Default$6, typeof config === 'object' && config ? config : {});

    if (typeof config.target !== 'string' && isElement(config.target)) {
      var id = config.target.id;

      if (!id) {
        id = getUID(NAME$8);
        config.target.id = id;
      }

      config.target = "#" + id;
    }

    typeCheckConfig(NAME$8, config, DefaultType$6);
    return config;
  };

  _proto._getScrollTop = function _getScrollTop() {
    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
  };

  _proto._getScrollHeight = function _getScrollHeight() {
    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  };

  _proto._getOffsetHeight = function _getOffsetHeight() {
    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
  };

  _proto._process = function _process() {
    var scrollTop = this._getScrollTop() + this._config.offset;

    var scrollHeight = this._getScrollHeight();

    var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

    if (this._scrollHeight !== scrollHeight) {
      this.refresh();
    }

    if (scrollTop >= maxScroll) {
      var target = this._targets[this._targets.length - 1];

      if (this._activeTarget !== target) {
        this._activate(target);
      }

      return;
    }

    if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
      this._activeTarget = null;

      this._clear();

      return;
    }

    for (var i = this._offsets.length; i--;) {
      var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

      if (isActiveTarget) {
        this._activate(this._targets[i]);
      }
    }
  };

  _proto._activate = function _activate(target) {
    this._activeTarget = target;

    this._clear();

    var queries = this._selector.split(',').map(function (selector) {
      return selector + "[data-bs-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
    });

    var link = SelectorEngine.findOne(queries.join(','));

    if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
      SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE, link.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$2);
      link.classList.add(CLASS_NAME_ACTIVE$2);
    } else {
      // Set triggered link as active
      link.classList.add(CLASS_NAME_ACTIVE$2);
      SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP).forEach(function (listGroup) {
        // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        SelectorEngine.prev(listGroup, SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).forEach(function (item) {
          return item.classList.add(CLASS_NAME_ACTIVE$2);
        }); // Handle special case when .nav-link is inside .nav-item

        SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach(function (navItem) {
          SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach(function (item) {
            return item.classList.add(CLASS_NAME_ACTIVE$2);
          });
        });
      });
    }

    EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
      relatedTarget: target
    });
  };

  _proto._clear = function _clear() {
    SelectorEngine.find(this._selector).filter(function (node) {
      return node.classList.contains(CLASS_NAME_ACTIVE$2);
    }).forEach(function (node) {
      return node.classList.remove(CLASS_NAME_ACTIVE$2);
    });
  } // Static
  ;

  ScrollSpy.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      var data = Data.getData(this, DATA_KEY$8);

      var _config = typeof config === 'object' && config;

      if (!data) {
        data = new ScrollSpy(this, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config]();
      }
    });
  };

  _createClass(ScrollSpy, null, [{
    key: "Default",
    get: function get() {
      return Default$6;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return DATA_KEY$8;
    }
  }]);

  return ScrollSpy;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(window, EVENT_LOAD_DATA_API$1, function () {
  SelectorEngine.find(SELECTOR_DATA_SPY).forEach(function (spy) {
    return new ScrollSpy(spy, Manipulator.getDataAttributes(spy));
  });
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .ScrollSpy to jQuery only if jQuery is present
 */

onDOMContentLoaded(function () {
  var $ = getjQuery();
  /* istanbul ignore if */

  if ($) {
    var JQUERY_NO_CONFLICT = $.fn[NAME$8];
    $.fn[NAME$8] = ScrollSpy.jQueryInterface;
    $.fn[NAME$8].Constructor = ScrollSpy;

    $.fn[NAME$8].noConflict = function () {
      $.fn[NAME$8] = JQUERY_NO_CONFLICT;
      return ScrollSpy.jQueryInterface;
    };
  }
});

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$9 = 'tab';
var DATA_KEY$9 = 'bs.tab';
var EVENT_KEY$9 = "." + DATA_KEY$9;
var DATA_API_KEY$7 = '.data-api';
var EVENT_HIDE$3 = "hide" + EVENT_KEY$9;
var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$9;
var EVENT_SHOW$3 = "show" + EVENT_KEY$9;
var EVENT_SHOWN$3 = "shown" + EVENT_KEY$9;
var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$9 + DATA_API_KEY$7;
var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
var CLASS_NAME_ACTIVE$3 = 'active';
var CLASS_NAME_DISABLED$1 = 'disabled';
var CLASS_NAME_FADE$3 = 'fade';
var CLASS_NAME_SHOW$5 = 'show';
var SELECTOR_DROPDOWN$1 = '.dropdown';
var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
var SELECTOR_ACTIVE$1 = '.active';
var SELECTOR_ACTIVE_UL = ':scope > li > .active';
var SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
var SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Tab = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(Tab, _BaseComponent);

  function Tab() {
    return _BaseComponent.apply(this, arguments) || this;
  }

  var _proto = Tab.prototype;

  // Public
  _proto.show = function show() {
    var _this = this;

    if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE$3) || this._element.classList.contains(CLASS_NAME_DISABLED$1)) {
      return;
    }

    var previous;
    var target = getElementFromSelector(this._element);

    var listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP$1);

    if (listElement) {
      var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE$1;
      previous = SelectorEngine.find(itemSelector, listElement);
      previous = previous[previous.length - 1];
    }

    var hideEvent = null;

    if (previous) {
      hideEvent = EventHandler.trigger(previous, EVENT_HIDE$3, {
        relatedTarget: this._element
      });
    }

    var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
      relatedTarget: previous
    });

    if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) {
      return;
    }

    this._activate(this._element, listElement);

    var complete = function complete() {
      EventHandler.trigger(previous, EVENT_HIDDEN$3, {
        relatedTarget: _this._element
      });
      EventHandler.trigger(_this._element, EVENT_SHOWN$3, {
        relatedTarget: previous
      });
    };

    if (target) {
      this._activate(target, target.parentNode, complete);
    } else {
      complete();
    }
  } // Private
  ;

  _proto._activate = function _activate(element, container, callback) {
    var _this2 = this;

    var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE$1);
    var active = activeElements[0];
    var isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$3);

    var complete = function complete() {
      return _this2._transitionComplete(element, active, callback);
    };

    if (active && isTransitioning) {
      var transitionDuration = getTransitionDurationFromElement(active);
      active.classList.remove(CLASS_NAME_SHOW$5);
      EventHandler.one(active, TRANSITION_END, complete);
      emulateTransitionEnd(active, transitionDuration);
    } else {
      complete();
    }
  };

  _proto._transitionComplete = function _transitionComplete(element, active, callback) {
    if (active) {
      active.classList.remove(CLASS_NAME_ACTIVE$3);
      var dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);

      if (dropdownChild) {
        dropdownChild.classList.remove(CLASS_NAME_ACTIVE$3);
      }

      if (active.getAttribute('role') === 'tab') {
        active.setAttribute('aria-selected', false);
      }
    }

    element.classList.add(CLASS_NAME_ACTIVE$3);

    if (element.getAttribute('role') === 'tab') {
      element.setAttribute('aria-selected', true);
    }

    reflow(element);

    if (element.classList.contains(CLASS_NAME_FADE$3)) {
      element.classList.add(CLASS_NAME_SHOW$5);
    }

    if (element.parentNode && element.parentNode.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
      var dropdownElement = element.closest(SELECTOR_DROPDOWN$1);

      if (dropdownElement) {
        SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE$1).forEach(function (dropdown) {
          return dropdown.classList.add(CLASS_NAME_ACTIVE$3);
        });
      }

      element.setAttribute('aria-expanded', true);
    }

    if (callback) {
      callback();
    }
  } // Static
  ;

  Tab.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      var data = Data.getData(this, DATA_KEY$9) || new Tab(this);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config]();
      }
    });
  };

  _createClass(Tab, null, [{
    key: "DATA_KEY",
    // Getters
    get: function get() {
      return DATA_KEY$9;
    }
  }]);

  return Tab;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$4, function (event) {
  event.preventDefault();
  var data = Data.getData(this, DATA_KEY$9) || new Tab(this);
  data.show();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tab to jQuery only if jQuery is present
 */

onDOMContentLoaded(function () {
  var $ = getjQuery();
  /* istanbul ignore if */

  if ($) {
    var JQUERY_NO_CONFLICT = $.fn[NAME$9];
    $.fn[NAME$9] = Tab.jQueryInterface;
    $.fn[NAME$9].Constructor = Tab;

    $.fn[NAME$9].noConflict = function () {
      $.fn[NAME$9] = JQUERY_NO_CONFLICT;
      return Tab.jQueryInterface;
    };
  }
});

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME$a = 'toast';
var DATA_KEY$a = 'bs.toast';
var EVENT_KEY$a = "." + DATA_KEY$a;
var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$a;
var EVENT_HIDE$4 = "hide" + EVENT_KEY$a;
var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$a;
var EVENT_SHOW$4 = "show" + EVENT_KEY$a;
var EVENT_SHOWN$4 = "shown" + EVENT_KEY$a;
var CLASS_NAME_FADE$4 = 'fade';
var CLASS_NAME_HIDE = 'hide';
var CLASS_NAME_SHOW$6 = 'show';
var CLASS_NAME_SHOWING = 'showing';
var DefaultType$7 = {
  animation: 'boolean',
  autohide: 'boolean',
  delay: 'number'
};
var Default$7 = {
  animation: true,
  autohide: true,
  delay: 5000
};
var SELECTOR_DATA_DISMISS$1 = '[data-bs-dismiss="toast"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Toast = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(Toast, _BaseComponent);

  function Toast(element, config) {
    var _this;

    _this = _BaseComponent.call(this, element) || this;
    _this._config = _this._getConfig(config);
    _this._timeout = null;

    _this._setListeners();

    return _this;
  } // Getters


  var _proto = Toast.prototype;

  // Public
  _proto.show = function show() {
    var _this2 = this;

    var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4);

    if (showEvent.defaultPrevented) {
      return;
    }

    this._clearTimeout();

    if (this._config.animation) {
      this._element.classList.add(CLASS_NAME_FADE$4);
    }

    var complete = function complete() {
      _this2._element.classList.remove(CLASS_NAME_SHOWING);

      _this2._element.classList.add(CLASS_NAME_SHOW$6);

      EventHandler.trigger(_this2._element, EVENT_SHOWN$4);

      if (_this2._config.autohide) {
        _this2._timeout = setTimeout(function () {
          _this2.hide();
        }, _this2._config.delay);
      }
    };

    this._element.classList.remove(CLASS_NAME_HIDE);

    reflow(this._element);

    this._element.classList.add(CLASS_NAME_SHOWING);

    if (this._config.animation) {
      var transitionDuration = getTransitionDurationFromElement(this._element);
      EventHandler.one(this._element, TRANSITION_END, complete);
      emulateTransitionEnd(this._element, transitionDuration);
    } else {
      complete();
    }
  };

  _proto.hide = function hide() {
    var _this3 = this;

    if (!this._element.classList.contains(CLASS_NAME_SHOW$6)) {
      return;
    }

    var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);

    if (hideEvent.defaultPrevented) {
      return;
    }

    var complete = function complete() {
      _this3._element.classList.add(CLASS_NAME_HIDE);

      EventHandler.trigger(_this3._element, EVENT_HIDDEN$4);
    };

    this._element.classList.remove(CLASS_NAME_SHOW$6);

    if (this._config.animation) {
      var transitionDuration = getTransitionDurationFromElement(this._element);
      EventHandler.one(this._element, TRANSITION_END, complete);
      emulateTransitionEnd(this._element, transitionDuration);
    } else {
      complete();
    }
  };

  _proto.dispose = function dispose() {
    this._clearTimeout();

    if (this._element.classList.contains(CLASS_NAME_SHOW$6)) {
      this._element.classList.remove(CLASS_NAME_SHOW$6);
    }

    EventHandler.off(this._element, EVENT_CLICK_DISMISS$1);

    _BaseComponent.prototype.dispose.call(this);

    this._config = null;
  } // Private
  ;

  _proto._getConfig = function _getConfig(config) {
    config = _extends({}, Default$7, Manipulator.getDataAttributes(this._element), typeof config === 'object' && config ? config : {});
    typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
    return config;
  };

  _proto._setListeners = function _setListeners() {
    var _this4 = this;

    EventHandler.on(this._element, EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function () {
      return _this4.hide();
    });
  };

  _proto._clearTimeout = function _clearTimeout() {
    clearTimeout(this._timeout);
    this._timeout = null;
  } // Static
  ;

  Toast.jQueryInterface = function jQueryInterface(config) {
    return this.each(function () {
      var data = Data.getData(this, DATA_KEY$a);

      var _config = typeof config === 'object' && config;

      if (!data) {
        data = new Toast(this, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"" + config + "\"");
        }

        data[config](this);
      }
    });
  };

  _createClass(Toast, null, [{
    key: "DefaultType",
    get: function get() {
      return DefaultType$7;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$7;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return DATA_KEY$a;
    }
  }]);

  return Toast;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Toast to jQuery only if jQuery is present
 */


onDOMContentLoaded(function () {
  var $ = getjQuery();
  /* istanbul ignore if */

  if ($) {
    var JQUERY_NO_CONFLICT = $.fn[NAME$a];
    $.fn[NAME$a] = Toast.jQueryInterface;
    $.fn[NAME$a].Constructor = Toast;

    $.fn[NAME$a].noConflict = function () {
      $.fn[NAME$a] = JQUERY_NO_CONFLICT;
      return Toast.jQueryInterface;
    };
  }
});


//# sourceMappingURL=bootstrap.esm.js.map


/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/owl.carousel/dist/owl.carousel.js":
/*!********************************************************!*\
  !*** ./node_modules/owl.carousel/dist/owl.carousel.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from being retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
			}
		};

		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,
		checkVisibility: true,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',
		slideTransition: '',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		filter: [ 'width', 'settings' ],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				// TODO: Should be computed from number of min width items in stage
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat > 0) {
				// Switch to only using appended clones
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
				repeat -= 1;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: [ 'items' ],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			this.$stage.children('.center').removeClass('center');
			if (this.settings.center) {
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];

	/**
	 * Create the stage DOM element
	 */
	Owl.prototype.initializeStage = function() {
		this.$stage = this.$element.find('.' + this.settings.stageClass);

		// if the stage is already in the DOM, grab it and skip stage initialization
		if (this.$stage.length) {
			return;
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + '>', {
			"class": this.settings.stageClass
		}).wrap( $( '<div/>', {
			"class": this.settings.stageOuterClass
		}));

		// append stage
		this.$element.append(this.$stage.parent());
	};

	/**
	 * Create item DOM elements
	 */
	Owl.prototype.initializeItems = function() {
		var $items = this.$element.find('.owl-item');

		// if the items are already in the DOM, grab them and skip item initialization
		if ($items.length) {
			this._items = $items.get().map(function(item) {
				return $(item);
			});

			this._mergers = this._items.map(function() {
				return 1;
			});

			this.refresh();

			return;
		}

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.isVisible()) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);
	};

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.initializeStage();
		this.initializeItems();

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * @returns {Boolean} visibility of $element
	 *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
	 *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
	 */
	Owl.prototype.isVisible = function() {
		return this.settings.checkVisibility
			? this.$element.is(':visible')
			: true;
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.isVisible()) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
		}

		if (this.settings.touchDrag){
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() { return false; });
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				// on a right pull, check on previous index
				// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's' + (
					this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''
				)
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			if (iterator) {
				reciprocalItemsWidth = this._items[--iterator].width();
				elementWidth = this.$element.width();
				while (iterator--) {
					reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
					if (reciprocalItemsWidth > elementWidth) {
						break;
					}
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.isVisible()) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			console.warn('Can not detect viewport width.');
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();
		this.$stage.remove();
		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([ event ]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([ event ]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function() {
		if (this._interval) {
			return;
		}

		this._visible = this._core.isVisible();
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function() {
		if (this._core.isVisible() === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};

	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);
					//TODO: Need documentation for this new option
					if (settings.lazyLoadEager > 0) {
						n += settings.lazyLoadEager;
						// If the carousel is looping also preload images that are to the "left"
						if (settings.loop) {
              position -= settings.lazyLoadEager;
              n++;
            }
					}

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false,
		lazyLoadEager: 0
	};

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
                url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src') || $element.attr('data-srcset');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
            } else if ($element.is('source')) {
                $element.one('load.owl.lazy', $.proxy(function() {
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this)).attr('srcset', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url("' + url + '")',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		this._previousHeight = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
		this._intervalId = null;
		var refThis = this;

		// These changes have been taken from a PR by gavrochelegnou proposed in #1575
		// and have been made compatible with the latest jQuery version
		$(window).on('load', function() {
			if (refThis._core.settings.autoHeight) {
				refThis.update();
			}
		});

		// Autoresize the height of the carousel when window is resized
		// When carousel has images, the height is dependent on the width
		// and should also change on resize
		$(window).resize(function() {
			if (refThis._core.settings.autoHeight) {
				if (refThis._intervalId != null) {
					clearTimeout(refThis._intervalId);
				}

				refThis._intervalId = setTimeout(function() {
					refThis.update();
				}, 250);
			}
		});

	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			lazyLoadEnabled = this._core.settings.lazyLoad,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		$.each(visible, function(index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
			maxheight = this._previousHeight;
		}

		this._previousHeight = maxheight;

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] !== 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/**
 * Video Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {
			var type = (function() {
					if (target.attr('data-vimeo-id')) {
						return 'vimeo';
					} else if (target.attr('data-vzaar-id')) {
						return 'vzaar'
					} else {
						return 'youtube';
					}
				})(),
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');

		if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = $('<div/>',{
						"class": 'owl-video-tn ' + lazyClass,
						"srcType": path
					});
				} else {
					tnLink = $( '<div/>', {
						"class": "owl-video-tn",
						"style": 'opacity:1;background-image:url(' + path + ')'
					});
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap( $( '<div/>', {
			"class": "owl-video-wrapper",
			"style": dimensions
		}));

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html,
			iframe;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		html = $( '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>' );
		html.attr( 'height', height );
		html.attr( 'width', width );
		if (video.type === 'youtube') {
			html.attr( 'src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id );
		} else if (video.type === 'vimeo') {
			html.attr( 'src', '//player.vimeo.com/video/' + video.id + '?autoplay=1' );
		} else if (video.type === 'vzaar') {
			html.attr( 'src', '//view.vzaar.com/' + video.id + '/player?autoplay=true' );
		}

		iframe = $(html).wrap( '<div class="owl-video-frame" />' ).insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
				document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @author Tom De Caluwé
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay timeout id.
		 * @type {Number}
		 */
		this._call = null;

		/**
		 * Depending on the state of the plugin, this variable contains either
		 * the start time of the timer or the current timer value if it's
		 * paused. Since we start in a paused state we initialize the timer
		 * value.
		 * @type {Number}
		 */
		this._time = 0;

		/**
		 * Stores the timeout currently used.
		 * @type {Number}
		 */
		this._timeout = 0;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = true;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position' && this._paused) {
					// Reset the timer. This code is triggered when the position
					// of the carousel was changed through user interaction.
					this._time = 0;
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function(e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Transition to the next slide and set a timeout for the next transition.
	 * @private
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype._next = function(speed) {
		this._call = window.setTimeout(
			$.proxy(this._next, this, speed),
			this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
		);

		if (this._core.is('interacting') || document.hidden) {
			return;
		}
		this._core.next(speed || this._core.settings.autoplaySpeed);
	}

	/**
	 * Reads the current timer value when the timer is playing.
	 * @public
	 */
	Autoplay.prototype.read = function() {
		return new Date().getTime() - this._time;
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		var elapsed;

		if (!this._core.is('rotating')) {
			this._core.enter('rotating');
		}

		timeout = timeout || this._core.settings.autoplayTimeout;

		// Calculate the elapsed time since the last transition. If the carousel
		// wasn't playing this calculation will yield zero.
		elapsed = Math.min(this._time % (this._timeout || timeout), timeout);

		if (this._paused) {
			// Start the clock.
			this._time = this.read();
			this._paused = false;
		} else {
			// Clear the active timeout to allow replacement.
			window.clearTimeout(this._call);
		}

		// Adjust the origin of the timer to match the new timeout value.
		this._time += this.read() % timeout - elapsed;

		this._timeout = timeout;
		this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		if (this._core.is('rotating')) {
			// Reset the clock.
			this._time = 0;
			this._paused = true;

			window.clearTimeout(this._call);
			this._core.leave('rotating');
		}
	};

	/**
	 * Pauses the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		if (this._core.is('rotating') && !this._paused) {
			// Pause the clock.
			this._time = this.read();
			this._paused = true;

			window.clearTimeout(this._call);
		}
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [
			'<span aria-label="' + 'Previous' + '">&#x2039;</span>',
			'<span aria-label="' + 'Next' + '">&#x203a;</span>'
		],
		navSpeed: false,
		navElement: 'button type="button" role="presentation"',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [
			'owl-prev',
			'owl-next'
		],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var override,
			settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.next(settings.navSpeed);
			}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [ $('<button role="button">')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'button', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$absolute)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		/*$el.on('focusin', function() {
			$(document).off(".carousel");

			$(document).on('keydown.carousel', function(e) {
				if(e.keyCode == 37) {
					$el.trigger('prev.owl')
				}
				if(e.keyCode == 39) {
					$el.trigger('next.owl')
				}
			});
		});*/

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override, settings;
		settings = this._core.settings;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			if (control === '$relative' && settings.navContainer) {
				this._controls[control].html('');
			} else {
				this._controls[control].remove();
			}
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function(page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function(item, hash) {
							return item === current ? hash : null;
						}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.3.4
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	var style = $('<support>').get(0).style,
		prefixes = 'Webkit Moz O ms'.split(' '),
		events = {
			transition: {
				end: {
					WebkitTransition: 'webkitTransitionEnd',
					MozTransition: 'transitionend',
					OTransition: 'oTransitionEnd',
					transition: 'transitionend'
				}
			},
			animation: {
				end: {
					WebkitAnimation: 'webkitAnimationEnd',
					MozAnimation: 'animationend',
					OAnimation: 'oAnimationEnd',
					animation: 'animationend'
				}
			}
		},
		tests = {
			csstransforms: function() {
				return !!test('transform');
			},
			csstransforms3d: function() {
				return !!test('perspective');
			},
			csstransitions: function() {
				return !!test('transition');
			},
			cssanimations: function() {
				return !!test('animation');
			}
		};

	function test(property, prefixed) {
		var result = false,
			upper = property.charAt(0).toUpperCase() + property.slice(1);

		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
			if (style[property] !== undefined) {
				result = prefixed ? property : true;
				return false;
			}
		});

		return result;
	}

	function prefixed(property) {
		return test(property, true);
	}

	if (tests.csstransitions()) {
		/* jshint -W053 */
		$.support.transition = new String(prefixed('transition'))
		$.support.transition.end = events.transition.end[ $.support.transition ];
	}

	if (tests.cssanimations()) {
		/* jshint -W053 */
		$.support.animation = new String(prefixed('animation'))
		$.support.animation.end = events.animation.end[ $.support.animation ];
	}

	if (tests.csstransforms()) {
		/* jshint -W053 */
		$.support.transform = new String(prefixed('transform'));
		$.support.transform3d = tests.csstransforms3d();
	}

})(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);


/***/ })

},
0,[["./resources/js/app.js","/js/manifest","/js/vendor"],["./resources/sass/app.scss","/js/manifest","/js/vendor"]]]);
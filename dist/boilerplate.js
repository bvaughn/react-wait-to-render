(function webpackUniversalModuleDefinition(root, factory) {
  if(typeof exports === 'object' && typeof module === 'object')
    module.exports = factory(require("react"));
  else if(typeof define === 'function' && define.amd)
    define(["React"], factory);
  else if(typeof exports === 'object')
    exports["Boilerplate"] = factory(require("react"));
  else
    root["Boilerplate"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/  // The module cache
/******/  var installedModules = {};
/******/
/******/  // The require function
/******/  function __webpack_require__(moduleId) {
/******/
/******/    // Check if module is in cache
/******/    if(installedModules[moduleId])
/******/      return installedModules[moduleId].exports;
/******/
/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      exports: {},
/******/      id: moduleId,
/******/      loaded: false
/******/    };
/******/
/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/    // Flag the module as loaded
/******/    module.loaded = true;
/******/
/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }
/******/
/******/
/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;
/******/
/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;
/******/
/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "";
/******/
/******/  // Load entry module and return exports
/******/  return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }
  
  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _WaitToRenderDecoratorJsx = __webpack_require__(1);
  
  var _WaitToRenderDecoratorJsx2 = _interopRequireDefault(_WaitToRenderDecoratorJsx);
  
  exports['default'] = _WaitToRenderDecoratorJsx2['default'];
  
  _defaults(exports, _interopExportWildcard(_WaitToRenderDecoratorJsx, _defaults));
  
  var _WaitToRenderDecoratorJsx = __webpack_require__(32);
  
  _defaults(exports, _interopExportWildcard(_WaitToRenderDecoratorJsx, _defaults));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactPureRenderFunction = __webpack_require__(3);
  
  var _reactPureRenderFunction2 = _interopRequireDefault(_reactPureRenderFunction);
  
  var _LoadingIndicatorJsx = __webpack_require__(5);
  
  var _LoadingIndicatorJsx2 = _interopRequireDefault(_LoadingIndicatorJsx);
  
  var _haveAllPropertiesLoaded = __webpack_require__(6);
  
  var _haveAllPropertiesLoaded2 = _interopRequireDefault(_haveAllPropertiesLoaded);
  
  /**
   * Decorates a component and displays a loading indicator until component dependencies have pre-loaded.
   *
   * Components can make use of a special :isLoading property to explicitly control creation.
   * If :isLoading is false the decorated component will not be created (even if all other properties are defined).
   * If :isLoading is true the decorated component will be created (even if all other properties are undefined).
   * If there is no :isLoading property then the component will be created only once all properties are defined.
   *
   * Components can also specify a value for :isVisible to control whether anything (including the loading indicator) is shown.
   * This property can be useful for deferred components such as modal dialogs.
   * A loading graphic should not be shown for such components unless they're actually supposed to be visible.
   *
   * Usage example:
   * <WaitToRenderDecorator
   *   wrappedComponent={SomeComponentClass}
   *   someRequiredProperty={...}
   *   anotherRequiredProperty={...} />
   */
  
  var WaitToRenderDecorator = (function (_Component) {
    _inherits(WaitToRenderDecorator, _Component);
  
    function WaitToRenderDecorator() {
      _classCallCheck(this, WaitToRenderDecorator);
  
      _get(Object.getPrototypeOf(WaitToRenderDecorator.prototype), 'constructor', this).apply(this, arguments);
  
      this.shouldComponentUpdate = _reactPureRenderFunction2['default'];
    }
  
    _createClass(WaitToRenderDecorator, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var isVisible = _props.isVisible;
        var loadingIndicator = _props.loadingIndicator;
  
        if (isVisible === false) {
          return null;
        } else if (!(0, _haveAllPropertiesLoaded2['default'])(this.props)) {
          return loadingIndicator;
        } else {
          var _props2 = this.props;
          var WrappedComponent = _props2.wrappedComponent;
  
          var props = _objectWithoutProperties(_props2, ['wrappedComponent']);
  
          return _react2['default'].createElement(WrappedComponent, props);
        }
      }
    }], [{
      key: 'propTypes',
      value: {
        /** Main React component for page. */
        wrappedComponent: _react.PropTypes.any.isRequired,
  
        /** Allows finer-grained control over when decorated component is rendered. */
        isLoading: _react.PropTypes.bool,
  
        /** Allows finer-grained control over when loading indicator or component should be shown. */
        isVisible: _react.PropTypes.bool,
  
        /** Optional loading indicator (overrides default). */
        loadingIndicator: _react.PropTypes.node.isRequired
      },
      enumerable: true
    }, {
      key: 'defaultProps',
      value: {
        loadingIndicator: _react2['default'].createElement(_LoadingIndicatorJsx2['default'], null)
      },
      enumerable: true
    }]);
  
    return WaitToRenderDecorator;
  })(_react.Component);
  
  exports['default'] = WaitToRenderDecorator;
  module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

  module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  exports.__esModule = true;
  exports['default'] = shouldPureComponentUpdate;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _shallowEqual = __webpack_require__(4);
  
  var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
  
  function shouldPureComponentUpdate(nextProps, nextState) {
    return !(0, _shallowEqual2['default'])(this.props, nextProps) || !(0, _shallowEqual2['default'])(this.state, nextState);
  }
  
  module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

  'use strict';
  
  exports.__esModule = true;
  exports['default'] = shallowEqual;
  
  function shallowEqual(objA, objB) {
    if (objA === objB) {
      return true;
    }
  
    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
      return false;
    }
  
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
  
    if (keysA.length !== keysB.length) {
      return false;
    }
  
    // Test for A's keys different from B.
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    for (var i = 0; i < keysA.length; i++) {
      if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
        return false;
      }
    }
  
    return true;
  }
  
  module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = LoadingIndicator;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  /**
   * Default loading indicator for WaitToRenderDecorator.
   */
  
  function LoadingIndicator() {
    return _react2['default'].createElement(
      'div',
      { className: 'LoadingIndicator' },
      'Loading...'
    );
  }
  
  module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = haveAllPropertiesLoaded;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectValues = __webpack_require__(7);
  
  var _objectValues2 = _interopRequireDefault(_objectValues);
  
  /**
   * Helper function for WaitToRenderDecorator and WaitToRenderDecorator.
   * Looks at component properties and decides if the decorated component can be rendered safely.
   */
  
  function haveAllPropertiesLoaded(props) {
    var isLoading = props.isLoading;
  
    return isLoading === false || isLoading !== true && (0, _objectValues2['default'])(props).filter(function (value) {
      return value === undefined;
    }).length === 0;
  }
  
  module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var define = __webpack_require__(8);
  
  var implementation = __webpack_require__(12);
  var getPolyfill = __webpack_require__(30);
  var shim = __webpack_require__(31);
  
  define(implementation, {
    getPolyfill: getPolyfill,
    implementation: implementation,
    shim: shim
  });
  
  module.exports = implementation;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var keys = __webpack_require__(9);
  var foreach = __webpack_require__(11);
  var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';
  
  var toStr = Object.prototype.toString;
  
  var isFunction = function (fn) {
    return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
  };
  
  var arePropertyDescriptorsSupported = function () {
    var obj = {};
    try {
      Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
          /* eslint-disable no-unused-vars, no-restricted-syntax */
          for (var _ in obj) { return false; }
          /* eslint-enable no-unused-vars, no-restricted-syntax */
      return obj.x === obj;
    } catch (e) { /* this is IE 8. */
      return false;
    }
  };
  var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();
  
  var defineProperty = function (object, name, value, predicate) {
    if (name in object && (!isFunction(predicate) || !predicate())) {
      return;
    }
    if (supportsDescriptors) {
      Object.defineProperty(object, name, {
        configurable: true,
        enumerable: false,
        value: value,
        writable: true
      });
    } else {
      object[name] = value;
    }
  };
  
  var defineProperties = function (object, map) {
    var predicates = arguments.length > 2 ? arguments[2] : {};
    var props = keys(map);
    if (hasSymbols) {
      props = props.concat(Object.getOwnPropertySymbols(map));
    }
    foreach(props, function (name) {
      defineProperty(object, name, map[name], predicates[name]);
    });
  };
  
  defineProperties.supportsDescriptors = !!supportsDescriptors;
  
  module.exports = defineProperties;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  // modified from https://github.com/es-shims/es5-shim
  var has = Object.prototype.hasOwnProperty;
  var toStr = Object.prototype.toString;
  var slice = Array.prototype.slice;
  var isArgs = __webpack_require__(10);
  var hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString');
  var hasProtoEnumBug = function () {}.propertyIsEnumerable('prototype');
  var dontEnums = [
    'toString',
    'toLocaleString',
    'valueOf',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'constructor'
  ];
  var equalsConstructorPrototype = function (o) {
    var ctor = o.constructor;
    return ctor && ctor.prototype === o;
  };
  var blacklistedKeys = {
    $console: true,
    $frame: true,
    $frameElement: true,
    $frames: true,
    $parent: true,
    $self: true,
    $webkitIndexedDB: true,
    $webkitStorageInfo: true,
    $window: true
  };
  var hasAutomationEqualityBug = (function () {
    /* global window */
    if (typeof window === 'undefined') { return false; }
    for (var k in window) {
      try {
        if (!blacklistedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
          try {
            equalsConstructorPrototype(window[k]);
          } catch (e) {
            return true;
          }
        }
      } catch (e) {
        return true;
      }
    }
    return false;
  }());
  var equalsConstructorPrototypeIfNotBuggy = function (o) {
    /* global window */
    if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
      return equalsConstructorPrototype(o);
    }
    try {
      return equalsConstructorPrototype(o);
    } catch (e) {
      return false;
    }
  };
  
  var keysShim = function keys(object) {
    var isObject = object !== null && typeof object === 'object';
    var isFunction = toStr.call(object) === '[object Function]';
    var isArguments = isArgs(object);
    var isString = isObject && toStr.call(object) === '[object String]';
    var theKeys = [];
  
    if (!isObject && !isFunction && !isArguments) {
      throw new TypeError('Object.keys called on a non-object');
    }
  
    var skipProto = hasProtoEnumBug && isFunction;
    if (isString && object.length > 0 && !has.call(object, 0)) {
      for (var i = 0; i < object.length; ++i) {
        theKeys.push(String(i));
      }
    }
  
    if (isArguments && object.length > 0) {
      for (var j = 0; j < object.length; ++j) {
        theKeys.push(String(j));
      }
    } else {
      for (var name in object) {
        if (!(skipProto && name === 'prototype') && has.call(object, name)) {
          theKeys.push(String(name));
        }
      }
    }
  
    if (hasDontEnumBug) {
      var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
  
      for (var k = 0; k < dontEnums.length; ++k) {
        if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
          theKeys.push(dontEnums[k]);
        }
      }
    }
    return theKeys;
  };
  
  keysShim.shim = function shimObjectKeys() {
    if (Object.keys) {
      var keysWorksWithArguments = (function () {
        // Safari 5.0 bug
        return (Object.keys(arguments) || '').length === 2;
      }(1, 2));
      if (!keysWorksWithArguments) {
        var originalKeys = Object.keys;
        Object.keys = function keys(object) {
          if (isArgs(object)) {
            return originalKeys(slice.call(object));
          } else {
            return originalKeys(object);
          }
        };
      }
    } else {
      Object.keys = keysShim;
    }
    return Object.keys || keysShim;
  };
  
  module.exports = keysShim;


/***/ },
/* 10 */
/***/ function(module, exports) {

  'use strict';
  
  var toStr = Object.prototype.toString;
  
  module.exports = function isArguments(value) {
    var str = toStr.call(value);
    var isArgs = str === '[object Arguments]';
    if (!isArgs) {
      isArgs = str !== '[object Array]' &&
        value !== null &&
        typeof value === 'object' &&
        typeof value.length === 'number' &&
        value.length >= 0 &&
        toStr.call(value.callee) === '[object Function]';
    }
    return isArgs;
  };


/***/ },
/* 11 */
/***/ function(module, exports) {

  
  var hasOwn = Object.prototype.hasOwnProperty;
  var toString = Object.prototype.toString;
  
  module.exports = function forEach (obj, fn, ctx) {
      if (toString.call(fn) !== '[object Function]') {
          throw new TypeError('iterator must be a function');
      }
      var l = obj.length;
      if (l === +l) {
          for (var i = 0; i < l; i++) {
              fn.call(ctx, obj[i], i, obj);
          }
      } else {
          for (var k in obj) {
              if (hasOwn.call(obj, k)) {
                  fn.call(ctx, obj[k], k, obj);
              }
          }
      }
  };
  


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var ES = __webpack_require__(13);
  var has = __webpack_require__(29);
  var bind = __webpack_require__(25);
  var isEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
  
  module.exports = function values(O) {
    var obj = ES.RequireObjectCoercible(O);
    var vals = [];
    for (var key in obj) {
      if (has(obj, key) && isEnumerable(obj, key)) {
        vals.push(obj[key]);
      }
    }
    return vals;
  };


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var ES6 = __webpack_require__(14);
  var assign = __webpack_require__(16);
  
  var ES7 = assign(ES6, {
    // https://github.com/tc39/ecma262/pull/60
    SameValueNonNumber: function SameValueNonNumber(x, y) {
      if (typeof x === 'number' || typeof x !== typeof y) {
        throw new TypeError('SameValueNonNumber requires two non-number values of the same type.');
      }
      return this.SameValue(x, y);
    }
  });
  
  module.exports = ES7;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var toStr = Object.prototype.toString;
  var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';
  var symbolToStr = hasSymbols ? Symbol.prototype.toString : toStr;
  
  var $isNaN = Number.isNaN || function (a) { return a !== a; };
  var $isFinite = __webpack_require__(15);
  var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
  
  var assign = __webpack_require__(16);
  var sign = __webpack_require__(17);
  var mod = __webpack_require__(18);
  var isPrimitive = __webpack_require__(19);
  var toPrimitive = __webpack_require__(20);
  var parseInteger = parseInt;
  var bind = __webpack_require__(25);
  var strSlice = bind.call(Function.call, String.prototype.slice);
  var isBinary = bind.call(Function.call, RegExp.prototype.test, /^0b[01]+$/i);
  var isOctal = bind.call(Function.call, RegExp.prototype.test, /^0o[0-7]+$/i);
  
  var ES5 = __webpack_require__(26);
  
  var hasRegExpMatcher = __webpack_require__(28);
  
  // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-abstract-operations
  var ES6 = assign(assign({}, ES5), {
  
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-call-f-v-args
    Call: function Call(F, V) {
      var args = arguments.length > 2 ? arguments[2] : [];
      if (!this.IsCallable(F)) {
        throw new TypeError(F + ' is not a function');
      }
      return F.apply(V, args);
    },
  
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toprimitive
    ToPrimitive: toPrimitive,
  
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toboolean
    // ToBoolean: ES5.ToBoolean,
  
    // http://www.ecma-international.org/ecma-262/6.0/#sec-tonumber
    ToNumber: function ToNumber(argument) {
      var value = isPrimitive(argument) ? argument : toPrimitive(argument, 'number');
      if (typeof value === 'symbol') {
        throw new TypeError('Cannot convert a Symbol value to a number');
      }
      if (typeof value === 'string') {
        if (isBinary(value)) {
          return Number(parseInteger(strSlice(value, 2), 2));
        } else if (isOctal(value)) {
          return Number(parseInteger(strSlice(value, 2), 8));
        }
      }
      return Number(value);
    },
  
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tointeger
    // ToInteger: ES5.ToNumber,
  
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint32
    // ToInt32: ES5.ToInt32,
  
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint32
    // ToUint32: ES5.ToUint32,
  
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint16
    ToInt16: function ToInt16(argument) {
      var int16bit = this.ToUint16(argument);
      return int16bit >= 0x8000 ? int16bit - 0x10000 : int16bit;
    },
  
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint16
    // ToUint16: ES5.ToUint16,
  
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint8
    ToInt8: function ToInt8(argument) {
      var int8bit = this.ToUint8(argument);
      return int8bit >= 0x80 ? int8bit - 0x100 : int8bit;
    },
  
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8
    ToUint8: function ToUint8(argument) {
      var number = this.ToNumber(argument);
      if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
      var posInt = sign(number) * Math.floor(Math.abs(number));
      return mod(posInt, 0x100);
    },
  
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8clamp
    ToUint8Clamp: function ToUint8Clamp(argument) {
      var number = this.ToNumber(argument);
      if ($isNaN(number) || number <= 0) { return 0; }
      if (number >= 0xFF) { return 0xFF; }
      var f = Math.floor(argument);
      if (f + 0.5 < number) { return f + 1; }
      if (number < f + 0.5) { return f; }
      if (f % 2 !== 0) { return f + 1; }
      return f;
    },
  
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tostring
    ToString: function ToString(argument) {
      if (typeof argument === 'symbol') {
        throw new TypeError('Cannot convert a Symbol value to a string');
      }
      return String(argument);
    },
  
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toobject
    ToObject: function ToObject(value) {
      this.RequireObjectCoercible(value);
      return Object(value);
    },
  
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
    ToPropertyKey: function ToPropertyKey(argument) {
      var key = this.ToPrimitive(argument, String);
      return typeof key === 'symbol' ? symbolToStr.call(key) : this.ToString(key);
    },
  
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
    ToLength: function ToLength(argument) {
      var len = this.ToInteger(argument);
      if (len <= 0) { return 0; } // includes converting -0 to +0
      if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
      return len;
    },
  
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-canonicalnumericindexstring
    CanonicalNumericIndexString: function CanonicalNumericIndexString(argument) {
      if (toStr.call(argument) !== '[object String]') {
        throw new TypeError('must be a string');
      }
      if (argument === '-0') { return -0; }
      var n = this.ToNumber(argument);
      if (this.SameValue(this.ToString(n), argument)) { return n; }
    },
  
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-requireobjectcoercible
    RequireObjectCoercible: ES5.CheckObjectCoercible,
  
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
    IsArray: Array.isArray || function IsArray(argument) {
      return toStr.call(argument) === '[object Array]';
    },
  
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-iscallable
    // IsCallable: ES5.IsCallable,
  
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
    IsConstructor: function IsConstructor(argument) {
      return this.IsCallable(argument); // unfortunately there's no way to truly check this without try/catch `new argument`
    },
  
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isextensible-o
    IsExtensible: function IsExtensible(obj) {
      if (!Object.preventExtensions) { return true; }
      if (isPrimitive(obj)) {
        return false;
      }
      return Object.isExtensible(obj);
    },
  
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isinteger
    IsInteger: function IsInteger(argument) {
      if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
        return false;
      }
      var abs = Math.abs(argument);
      return Math.floor(abs) === abs;
    },
  
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ispropertykey
    IsPropertyKey: function IsPropertyKey(argument) {
      return typeof argument === 'string' || typeof argument === 'symbol';
    },
  
    // http://www.ecma-international.org/ecma-262/6.0/#sec-isregexp
    IsRegExp: function IsRegExp(argument) {
      if (!argument || typeof argument !== 'object') {
        return false;
      }
      if (hasSymbols) {
        var isRegExp = RegExp[Symbol.match];
        if (typeof isRegExp !== 'undefined') {
          return ES5.ToBoolean(isRegExp);
        }
      }
      return hasRegExpMatcher(argument);
    },
  
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevalue
    // SameValue: ES5.SameValue,
  
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero
    SameValueZero: function SameValueZero(x, y) {
      return (x === y) || ($isNaN(x) && $isNaN(y));
    }
  });
  
  delete ES6.CheckObjectCoercible; // renamed in ES6 to RequireObjectCoercible
  
  module.exports = ES6;


/***/ },
/* 15 */
/***/ function(module, exports) {

  var $isNaN = Number.isNaN || function (a) { return a !== a; };
  
  module.exports = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };


/***/ },
/* 16 */
/***/ function(module, exports) {

  var has = Object.prototype.hasOwnProperty;
  module.exports = Object.assign || function assign(target, source) {
    for (var key in source) {
      if (has.call(source, key)) {
        target[key] = source[key];
      }
    }
    return target;
  };


/***/ },
/* 17 */
/***/ function(module, exports) {

  module.exports = function sign(number) {
    return number >= 0 ? 1 : -1;
  };


/***/ },
/* 18 */
/***/ function(module, exports) {

  module.exports = function mod(number, modulo) {
    var remain = number % modulo;
    return Math.floor(remain >= 0 ? remain : remain + modulo);
  };


/***/ },
/* 19 */
/***/ function(module, exports) {

  module.exports = function isPrimitive(value) {
    return value === null || (typeof value !== 'function' && typeof value !== 'object');
  };


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';
  
  var isPrimitive = __webpack_require__(21);
  var isCallable = __webpack_require__(22);
  var isDate = __webpack_require__(23);
  var isSymbol = __webpack_require__(24);
  
  var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
    if (O == null) {
      throw new TypeError('Cannot call method on ' + O);
    }
    if (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {
      throw new TypeError('hint must be "string" or "number"');
    }
    var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
    var method, result, i;
    for (i = 0; i < methodNames.length; ++i) {
      method = O[methodNames[i]];
      if (isCallable(method)) {
        result = method.call(O);
        if (isPrimitive(result)) {
          return result;
        }
      }
    }
    throw new TypeError('No default value');
  };
  
  // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toprimitive
  module.exports = function ToPrimitive(input, PreferredType) {
    if (isPrimitive(input)) {
      return input;
    }
    var hint = 'default';
    if (arguments.length > 1) {
      if (PreferredType === String) {
        hint = 'string';
      } else if (PreferredType === Number) {
        hint = 'number';
      }
    }
  
    var exoticToPrim;
    if (hasSymbols) {
      if (Symbol.toPrimitive) {
        throw new TypeError('Symbol.toPrimitive not supported yet');
        // exoticToPrim = this.GetMethod(input, Symbol.toPrimitive);
      } else if (isSymbol(input)) {
        exoticToPrim = Symbol.prototype.valueOf;
      }
    }
    if (typeof exoticToPrim !== 'undefined') {
      var result = exoticToPrim.call(input, hint);
      if (isPrimitive(result)) {
        return result;
      }
      throw new TypeError('unable to convert exotic object to primitive');
    }
    if (hint === 'default' && (isDate(input) || isSymbol(input))) {
      hint = 'string';
    }
    return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
  };


/***/ },
/* 21 */
/***/ function(module, exports) {

  module.exports = function isPrimitive(value) {
    return value === null || (typeof value !== 'function' && typeof value !== 'object');
  };


/***/ },
/* 22 */
/***/ function(module, exports) {

  'use strict';
  
  var fnToStr = Function.prototype.toString;
  var tryFunctionObject = function tryFunctionObject(value) {
    try {
      fnToStr.call(value);
      return true;
    } catch (e) {
      return false;
    }
  };
  var toStr = Object.prototype.toString;
  var fnClass = '[object Function]';
  var genClass = '[object GeneratorFunction]';
  var constructorRegex = /\s*class /;
  var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
  
  module.exports = function isCallable(value) {
    if (!value) { return false; }
    if (typeof value !== 'function' && typeof value !== 'object') { return false; }
    if (constructorRegex.test(value)) { return false; }
    if (hasToStringTag) { return tryFunctionObject(value); }
    var strClass = toStr.call(value);
    return strClass === fnClass || strClass === genClass;
  };


/***/ },
/* 23 */
/***/ function(module, exports) {

  'use strict';
  
  var getDay = Date.prototype.getDay;
  var tryDateObject = function tryDateObject(value) {
    try {
      getDay.call(value);
      return true;
    } catch (e) {
      return false;
    }
  };
  
  var toStr = Object.prototype.toString;
  var dateClass = '[object Date]';
  var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
  
  module.exports = function isDateObject(value) {
    if (typeof value !== 'object' || value === null) { return false; }
    return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
  };


/***/ },
/* 24 */
/***/ function(module, exports) {

  'use strict';
  
  var toStr = Object.prototype.toString;
  var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';
  
  if (hasSymbols) {
    var symToStr = Symbol.prototype.toString;
    var symStringRegex = /^Symbol\(.*\)$/;
    var isSymbolObject = function isSymbolObject(value) {
      if (typeof value.valueOf() !== 'symbol') { return false; }
      return symStringRegex.test(symToStr.call(value));
    };
    module.exports = function isSymbol(value) {
      if (typeof value === 'symbol') { return true; }
      if (toStr.call(value) !== '[object Symbol]') { return false; }
      try {
        return isSymbolObject(value);
      } catch (e) {
        return false;
      }
    };
  } else {
    module.exports = function isSymbol(value) {
      // this environment does not support Symbols.
      return false;
    };
  }


/***/ },
/* 25 */
/***/ function(module, exports) {

  var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
  var slice = Array.prototype.slice;
  var toStr = Object.prototype.toString;
  var funcType = '[object Function]';
  
  module.exports = function bind(that) {
      var target = this;
      if (typeof target !== 'function' || toStr.call(target) !== funcType) {
          throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slice.call(arguments, 1);
  
      var binder = function () {
          if (this instanceof bound) {
              var result = target.apply(
                  this,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return this;
          } else {
              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );
          }
      };
  
      var boundLength = Math.max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
          boundArgs.push('$' + i);
      }
  
      var bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);
  
      if (target.prototype) {
          var Empty = function Empty() {};
          Empty.prototype = target.prototype;
          bound.prototype = new Empty();
          Empty.prototype = null;
      }
  
      return bound;
  };
  


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var $isNaN = Number.isNaN || function (a) { return a !== a; };
  var $isFinite = __webpack_require__(15);
  
  var sign = __webpack_require__(17);
  var mod = __webpack_require__(18);
  
  var IsCallable = __webpack_require__(22);
  var toPrimitive = __webpack_require__(27);
  
  // https://es5.github.io/#x9
  var ES5 = {
    ToPrimitive: toPrimitive,
  
    ToBoolean: function ToBoolean(value) {
      return Boolean(value);
    },
    ToNumber: function ToNumber(value) {
      return Number(value);
    },
    ToInteger: function ToInteger(value) {
      var number = this.ToNumber(value);
      if ($isNaN(number)) { return 0; }
      if (number === 0 || !$isFinite(number)) { return number; }
      return sign(number) * Math.floor(Math.abs(number));
    },
    ToInt32: function ToInt32(x) {
      return this.ToNumber(x) >> 0;
    },
    ToUint32: function ToUint32(x) {
      return this.ToNumber(x) >>> 0;
    },
    ToUint16: function ToUint16(value) {
      var number = this.ToNumber(value);
      if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
      var posInt = sign(number) * Math.floor(Math.abs(number));
      return mod(posInt, 0x10000);
    },
    ToString: function ToString(value) {
      return String(value);
    },
    ToObject: function ToObject(value) {
      this.CheckObjectCoercible(value);
      return Object(value);
    },
    CheckObjectCoercible: function CheckObjectCoercible(value, optMessage) {
      /* jshint eqnull:true */
      if (value == null) {
        throw new TypeError(optMessage || 'Cannot call method on ' + value);
      }
      return value;
    },
    IsCallable: IsCallable,
    SameValue: function SameValue(x, y) {
      if (x === y) { // 0 === -0, but they are not identical.
        if (x === 0) { return 1 / x === 1 / y; }
        return true;
      }
          return $isNaN(x) && $isNaN(y);
    }
  };
  
  module.exports = ES5;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var toStr = Object.prototype.toString;
  
  var isPrimitive = __webpack_require__(21);
  
  var isCallable = __webpack_require__(22);
  
  // https://es5.github.io/#x8.12
  var ES5internalSlots = {
    '[[DefaultValue]]': function (O, hint) {
      if (!hint) {
        hint = toStr.call(O) === '[object Date]' ? String : Number;
      }
  
      if (hint === String || hint === Number) {
        var methods = hint === String ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
        var value, i;
        for (i = 0; i < methods.length; ++i) {
          if (isCallable(O[methods[i]])) {
            value = O[methods[i]]();
            if (isPrimitive(value)) {
              return value;
            }
          }
        }
        throw new TypeError('No default value');
      }
      throw new TypeError('invalid [[DefaultValue]] hint supplied');
    }
  };
  
  // https://es5.github.io/#x9
  module.exports = function ToPrimitive(input, PreferredType) {
    if (isPrimitive(input)) {
      return input;
    }
    if (arguments.length < 2) {
      PreferredType = toStr.call(input) === '[object Date]' ? String : Number;
    }
    if (PreferredType === String) {
      return String(input);
    } else if (PreferredType === Number) {
      return Number(input);
    } else {
      throw new TypeError('invalid PreferredType supplied');
    }
    return ES5internalSlots['[[DefaultValue]]'](input, PreferredType);
  };


/***/ },
/* 28 */
/***/ function(module, exports) {

  'use strict';
  
  var regexExec = RegExp.prototype.exec;
  var tryRegexExec = function tryRegexExec(value) {
    try {
      regexExec.call(value);
      return true;
    } catch (e) {
      return false;
    }
  };
  var toStr = Object.prototype.toString;
  var regexClass = '[object RegExp]';
  var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
  
  module.exports = function isRegex(value) {
    if (typeof value !== 'object') { return false; }
    return hasToStringTag ? tryRegexExec(value) : toStr.call(value) === regexClass;
  };


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  var bind = __webpack_require__(25);
  
  module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var implementation = __webpack_require__(12);
  
  module.exports = function getPolyfill() {
    return typeof Object.values === 'function' ? Object.values : implementation;
  };


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var getPolyfill = __webpack_require__(30);
  var define = __webpack_require__(8);
  
  module.exports = function shimValues() {
    var polyfill = getPolyfill();
    define(Object, { values: polyfill }, { values: function () { return Object.values !== polyfill; } });
    return polyfill;
  };


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  exports['default'] = WaitToRenderDecorator;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactPureRenderFunction = __webpack_require__(3);
  
  var _reactPureRenderFunction2 = _interopRequireDefault(_reactPureRenderFunction);
  
  var _LoadingIndicatorJsx = __webpack_require__(5);
  
  var _LoadingIndicatorJsx2 = _interopRequireDefault(_LoadingIndicatorJsx);
  
  var _haveAllPropertiesLoaded = __webpack_require__(6);
  
  var _haveAllPropertiesLoaded2 = _interopRequireDefault(_haveAllPropertiesLoaded);
  
  /**
   * Decorates a component class so that instances of it will display a loading indicator until dependencies have pre-loaded.
   * See <WaitToRenderDecorator> documentation for more information on how the decorated component works.
   */
  
  function WaitToRenderDecorator(WrappedComponent) {
    var componentDisplayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  
    return (function (_Component) {
      _inherits(DecoratedWaitToRenderDecorator, _Component);
  
      function DecoratedWaitToRenderDecorator() {
        _classCallCheck(this, DecoratedWaitToRenderDecorator);
  
        _get(Object.getPrototypeOf(DecoratedWaitToRenderDecorator.prototype), 'constructor', this).apply(this, arguments);
  
        this.shouldComponentUpdate = _reactPureRenderFunction2['default'];
      }
  
      _createClass(DecoratedWaitToRenderDecorator, [{
        key: 'render',
        value: function render() {
          var isVisible = this.props.isVisible;
  
          var LoadingIndicator = WrappedComponent.loadingIndicator || _react2['default'].createElement(_LoadingIndicatorJsx2['default'], null);
  
          if (isVisible === false) {
            return null;
          } else if (!(0, _haveAllPropertiesLoaded2['default'])(this.props)) {
            return LoadingIndicator;
          } else {
            return _react2['default'].createElement(WrappedComponent, this.props);
          }
        }
      }], [{
        key: 'displayName',
  
        // Used by React devtools when generating DOM tree
        value: 'DecoratedDeferred(' + componentDisplayName + ')',
  
        // Expose decorated class for testing convenience
        enumerable: true
      }, {
        key: 'WrappedComponent',
        value: WrappedComponent,
        enumerable: true
      }]);
  
      return DecoratedWaitToRenderDecorator;
    })(_react.Component);
  }
  
  module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=boilerplate.js.map

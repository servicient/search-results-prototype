'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Template = require('../Template.js');

var _Template2 = _interopRequireDefault(_Template);

var _utils = require('../../lib/utils.js');

var _map = require('lodash/collection/map');

var _map2 = _interopRequireDefault(_map);

var _cloneDeep = require('lodash/lang/cloneDeep');

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _isEqual = require('lodash/lang/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurrentRefinedValues = function (_React$Component) {
  _inherits(CurrentRefinedValues, _React$Component);

  function CurrentRefinedValues() {
    _classCallCheck(this, CurrentRefinedValues);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CurrentRefinedValues).apply(this, arguments));
  }

  _createClass(CurrentRefinedValues, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _isEqual2.default)(this.props.refinements, nextProps.refinements);
    }
  }, {
    key: '_clearAllElement',
    value: function _clearAllElement(position, requestedPosition) {
      if (requestedPosition !== position) {
        return undefined;
      }
      return _jsx('a', {
        className: this.props.cssClasses.clearAll,
        href: this.props.clearAllURL,
        onClick: handleClick(this.props.clearAllClick)
      }, void 0, _react2.default.createElement(_Template2.default, _extends({ templateKey: 'clearAll' }, this.props.templateProps)));
    }
  }, {
    key: '_refinementElement',
    value: function _refinementElement(refinement, i) {
      var attribute = this.props.attributes[refinement.attributeName] || {};
      var templateData = getTemplateData(attribute, refinement, this.props.cssClasses);
      var customTemplateProps = getCustomTemplateProps(attribute);
      var key = refinement.attributeName + (refinement.operator ? refinement.operator : ':') + (refinement.exclude ? refinement.exclude : '') + refinement.name;
      return _jsx('div', {
        className: this.props.cssClasses.item
      }, key, _jsx('a', {
        className: this.props.cssClasses.link,
        href: this.props.clearRefinementURLs[i],
        onClick: handleClick(this.props.clearRefinementClicks[i])
      }, void 0, _react2.default.createElement(_Template2.default, _extends({ data: templateData, templateKey: 'item' }, this.props.templateProps, customTemplateProps))));
    }
  }, {
    key: 'render',
    value: function render() {
      return _jsx('div', {}, void 0, this._clearAllElement('before', this.props.clearAllPosition), _jsx('div', {
        className: this.props.cssClasses.list
      }, void 0, (0, _map2.default)(this.props.refinements, this._refinementElement, this)), this._clearAllElement('after', this.props.clearAllPosition));
    }
  }]);

  return CurrentRefinedValues;
}(_react2.default.Component);

function getCustomTemplateProps(attribute) {
  var customTemplateProps = {};
  if (attribute.template !== undefined) {
    customTemplateProps.templates = {
      item: attribute.template
    };
  }
  if (attribute.transformData !== undefined) {
    customTemplateProps.transformData = attribute.transformData;
  }
  return customTemplateProps;
}

function getTemplateData(attribute, _refinement, cssClasses) {
  var templateData = (0, _cloneDeep2.default)(_refinement);

  templateData.cssClasses = cssClasses;
  if (attribute.label !== undefined) {
    templateData.label = attribute.label;
  }
  if (templateData.operator !== undefined) {
    templateData.displayOperator = templateData.operator;
    if (templateData.operator === '>=') {
      templateData.displayOperator = '&ge;';
    }
    if (templateData.operator === '<=') {
      templateData.displayOperator = '&le;';
    }
  }

  return templateData;
}

function handleClick(cb) {
  return function (e) {
    if ((0, _utils.isSpecialClick)(e)) {
      // do not alter the default browser behavior
      // if one special key is down
      return;
    }
    e.preventDefault();
    cb();
  };
}

exports.default = CurrentRefinedValues;
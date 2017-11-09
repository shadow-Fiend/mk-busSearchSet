webpackJsonp([0],{

/***/ 1532:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(2);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mkMetaEngine = __webpack_require__(257);

var _index = __webpack_require__(583);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var C = (_dec = (0, _mkMetaEngine.wrapper)(_index2.default), _dec(_class = function (_Component) {
	(0, _inherits3.default)(C, _Component);

	function C() {
		(0, _classCallCheck3.default)(this, C);
		return (0, _possibleConstructorReturn3.default)(this, (C.__proto__ || (0, _getPrototypeOf2.default)(C)).apply(this, arguments));
	}

	(0, _createClass3.default)(C, [{
		key: 'render',
		value: function render() {
			return this.props.monkeyKing((0, _extends3.default)({}, this.props, { path: 'root' }));
		}
	}]);
	return C;
}(_react.Component)) || _class);
exports.default = C;
module.exports = exports['default'];

/***/ }),

/***/ 1533:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(2);

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = __webpack_require__(579);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(580);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

exports.default = creator;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mkMetaEngine = __webpack_require__(257);

var _config = __webpack_require__(581);

var _config2 = _interopRequireDefault(_config);

var _immutable = __webpack_require__(169);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CB = void 0;

var action = function action(option) {
    var _this = this;

    (0, _classCallCheck3.default)(this, action);

    this.onInit = function (_ref) {
        var component = _ref.component,
            injections = _ref.injections;

        _this.component = component;
        _this.injections = injections;

        if (_this.component.props.setOkListener) {
            _this.component.props.setOkListener(_this.onOk);
        }
        CB = _this.component.props.handleEditCb;
        injections.reduce('init', _this.component.props.rowInfo);
    };

    this.handleChange = function (type) {
        return function (e) {
            var metaAction = _this.metaAction;

            if (type == 'keyValue') {
                var value = void 0;
                if (e && e.target && e.target.value) {
                    value = e.target.value;
                }
                _this.injections.reduce('changeKeyValue', value.split(' '));
            }
        };
    };

    this.handleClear = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var rowInfo, response;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        rowInfo = _this.metaAction.gf('data.rowInfo');

                        if (!(!rowInfo.get('extKeys') || !rowInfo.get('extKeys').length)) {
                            _context.next = 4;
                            break;
                        }

                        _this.metaAction.toast('error', '此业务没有关键字');
                        return _context.abrupt('return');

                    case 4:
                        _context.next = 6;
                        return _this.webapi.search.clearExtKeys({ businessCode: rowInfo.get('businessCode') });

                    case 6:
                        response = _context.sent;


                        if (response) {
                            _this.metaAction.toast('success', '清除推荐关键字成功!');
                            _this.injections.reduce('clearValue');
                            CB({ result: true });
                        }

                    case 8:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    this.onOk = function () {
        var rowInfo = _this.metaAction.gf('data.rowInfo').toJS(),
            keyValue = rowInfo.keys,
            keyValue1 = [];
        keyValue.map(function (o, i) {
            if (!!o) {
                keyValue1.push(o);
            }
        });

        rowInfo.keys = keyValue1;

        return { result: true, value: (0, _immutable.fromJS)(rowInfo) };
    };

    this.metaAction = option.metaAction;
    this.config = _config2.default.current;
    this.webapi = this.config.webapi;
};

function creator(option) {
    var metaAction = new _mkMetaEngine.action(option),
        o = new action((0, _extends3.default)({}, option, { metaAction: metaAction })),
        ret = (0, _extends3.default)({}, metaAction, o);

    metaAction.config({ metaHandlers: ret });

    return ret;
}
module.exports = exports['default'];

/***/ }),

/***/ 1534:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(2);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

exports.default = creator;

var _immutable = __webpack_require__(169);

var _mkMetaEngine = __webpack_require__(257);

var _config = __webpack_require__(581);

var _config2 = _interopRequireDefault(_config);

var _data = __webpack_require__(584);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = function reducer(option) {
    var _this = this;

    (0, _classCallCheck3.default)(this, reducer);

    this.init = function (state, rowInfo) {
        var initState = (0, _data.getInitState)();
        if (rowInfo) {
            initState.data.keyValue = rowInfo.keys;
            initState.data.clearValue = rowInfo.extKeys;
            initState.data.rowInfo = rowInfo;
        }
        return _this.metaReducer.init(state, initState);
    };

    this.changeKeyValue = function (state, value) {
        state = _this.metaReducer.sf(state, 'data.keyValue', value);
        var rowInfo = _this.metaReducer.gf(state, 'data.rowInfo');
        rowInfo = rowInfo.set('keys', value);
        state = _this.metaReducer.sf(state, 'data.rowInfo', rowInfo);
        return state;
    };

    this.clearValue = function (state) {
        state = _this.metaReducer.sf(state, 'data.clearValue', '');
        var rowInfo = _this.metaReducer.gf(state, 'data.rowInfo');
        rowInfo = rowInfo.set('extKeys', []);
        state = _this.metaReducer.sf(state, 'data.rowInfo', rowInfo);
        return state;
    };

    this.metaReducer = option.metaReducer;
    this.config = _config2.default.current;
};

function creator(option) {
    var metaReducer = new _mkMetaEngine.reducer(option),
        o = new reducer((0, _extends3.default)({}, option, { metaReducer: metaReducer }));

    return (0, _extends3.default)({}, metaReducer, o);
}
module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=busSearchSet.ea4a82d6.chunk.js.map
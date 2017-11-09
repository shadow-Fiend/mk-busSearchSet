webpackJsonp([1],{

/***/ 1535:
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

var _index = __webpack_require__(585);

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

/***/ 1536:
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

var _config = __webpack_require__(582);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var action = function action(option) {
    var _this = this;

    (0, _classCallCheck3.default)(this, action);

    this.onInit = function (_ref) {
        var component = _ref.component,
            injections = _ref.injections;

        _this.component = component;
        _this.injections = injections;
        injections.reduce('init');
        _this.load();
    };

    this.load = function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(pagination) {
            var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var response;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _this.webapi.search.query();

                        case 2:
                            response = _context.sent;

                            response.filter = filter;
                            _this.injections.reduce('load', response);

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }));

        return function (_x) {
            return _ref2.apply(this, arguments);
        };
    }();

    this.handleFresh = function (type) {
        return function () {
            if (type == 'fresh') {
                _this.load();
            }
        };
    };

    this.handleRefresh = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var response;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return _this.webapi.search.refresh({});

                    case 2:
                        response = _context2.sent;

                        if (response) {
                            _this.metaAction.toast('success', '关键字全部重新生成成功!');
                        } else {
                            _this.metaAction.toast('error', '关键字全部重新生成失败!');
                        }

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, _this);
    }));

    this.handleSearch = function (type) {
        return function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(e) {
                var metaAction, value, allManualKeys, searchValue, response;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                metaAction = _this.metaAction, value = void 0;


                                if (e && e.target && e.target.value) {
                                    value = e.target.value;
                                }

                                if (!(type == 'search')) {
                                    _context3.next = 13;
                                    break;
                                }

                                allManualKeys = metaAction.gf('data.allManualKeys') ? metaAction.gf('data.allManualKeys').toJS() : [], searchValue = [];

                                if (value) {
                                    _context3.next = 8;
                                    break;
                                }

                                searchValue = allManualKeys;
                                _context3.next = 12;
                                break;

                            case 8:
                                _context3.next = 10;
                                return _this.webapi.search.searchBussiness(value);

                            case 10:
                                response = _context3.sent;


                                if (response && response.length) {
                                    response.map(function (o) {
                                        allManualKeys.map(function (item) {
                                            if (o.businessCode == item.businessCode) {
                                                searchValue.push(item);
                                            }
                                        });
                                    });
                                }

                            case 12:
                                _this.injections.reduce('searchKeys', searchValue, type, value);

                            case 13:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, _this);
            }));

            return function (_x3) {
                return _ref4.apply(this, arguments);
            };
        }();
    };

    this.editRow = function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            var _args$pop, rowIndex, row, ret, response;

            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _args$pop = args.pop(), rowIndex = _args$pop.rowIndex;
                            row = _this.metaAction.gf('data.list.' + rowIndex).toJS();
                            _context4.next = 4;
                            return _this.metaAction.modal('show', {
                                title: '',
                                children: _this.metaAction.loadApp('busSearchSet', {
                                    store: _this.component.props.store,
                                    rowInfo: row,
                                    handleEditCb: _this.handleEditCb(_this.injections, rowIndex)
                                })
                            });

                        case 4:
                            ret = _context4.sent;

                            if (!ret.result) {
                                _context4.next = 10;
                                break;
                            }

                            _context4.next = 8;
                            return _this.webapi.search.update({ businessCode: ret.value.get('businessCode'), keys: ret.value.get('keys') });

                        case 8:
                            response = _context4.sent;


                            if (response) {
                                _this.metaAction.toast('success', '关键字编辑成功!');
                                _this.injections.reduce('editRow', rowIndex, ret.value);
                            }

                        case 10:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, _this);
        }));

        return function () {
            return _ref5.apply(this, arguments);
        };
    }();

    this.handleEditCb = function (injections, rowIndex) {
        return function (data) {
            if (data && data.result) {
                injections.reduce('clearEditKeys', rowIndex);
            }
        };
    };

    this.getListRowsCount = function () {
        return _this.metaAction.gf('data.list').size;
    };

    this.pageChanged = function (current, pageSize) {
        var filter = _this.metaAction.gf(data.filter).toJS();
        _this.load({ current: current, pageSize: pageSize }, filter);
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

/***/ 1537:
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

var _config = __webpack_require__(582);

var _config2 = _interopRequireDefault(_config);

var _data = __webpack_require__(586);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = function reducer(option) {
    var _this = this;

    (0, _classCallCheck3.default)(this, reducer);

    this.init = function (state, option) {
        var initState = (0, _data.getInitState)();
        return _this.metaReducer.init(state, initState);
    };

    this.load = function (state, response) {
        state = _this.metaReducer.sf(state, 'data.list', (0, _immutable.fromJS)(response.list));
        state = _this.metaReducer.sf(state, 'data.allManualKeys', (0, _immutable.fromJS)(response.list));
        //        state = this.metaReducer.sf(state, 'data.pagination', fromJS(response.pagination))
        //        state = this.metaReducer.sf(state, 'data.filter', fromJS(response.filter))
        return state;
    };

    this.searchKeys = function (state, searchValue, type, value) {
        state = _this.metaReducer.sf(state, 'data.list', (0, _immutable.fromJS)(searchValue));
        state = _this.metaReducer.sf(state, 'data.' + type, value);
        return state;
    };

    this.editRow = function (state, rowIndex, value) {
        var list = _this.metaReducer.gf(state, 'data.list');
        list = list.set(rowIndex, value);
        state = _this.metaReducer.sf(state, 'data.list', list);
        return state;
    };

    this.clearEditKeys = function (state, rowIndex) {
        var list = _this.metaReducer.gf(state, 'data.list'),
            editRow = list.get('rowIndex');
        list = list.setIn([rowIndex, 'extKeys'], []);
        state = _this.metaReducer.sf(state, 'data.list', list);
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
//# sourceMappingURL=bussinessSearch.ea4a82d6.chunk.js.map
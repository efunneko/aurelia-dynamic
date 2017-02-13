define('app',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);

      this.placeholder = "App placeholder";
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.title = "Fun With Aurelia";
      config.map([{ route: '', redirect: 'home/page/1' }, { route: 'home', redirect: 'home/page/1' }, { route: 'home/page', redirect: 'home/page/1' }, { route: 'home/page/:pageNum', name: 'home', moduleId: 'home' }]);
      config.mapUnknownRoutes('not-found');
    };

    return App;
  }();
});
define('data-manager',['exports', 'aurelia-framework', 'aurelia-fetch-client', './models/survey', './environment', './survey-data'], function (exports, _aureliaFramework, _aureliaFetchClient, _survey, _environment, _surveyData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DataManager = undefined;

  var _environment2 = _interopRequireDefault(_environment);

  var _surveyData2 = _interopRequireDefault(_surveyData);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var DataManager = exports.DataManager = (_dec = (0, _aureliaFramework.inject)(_aureliaFetchClient.HttpClient), _dec(_class = function () {
    function DataManager(httpClient) {
      _classCallCheck(this, DataManager);

      this.survey = null;

      this.httpClient = httpClient.configure(function (config) {
        config.useStandardConfiguration().withBaseUrl(_environment2.default.contactsUrl);
      });
    }

    DataManager.prototype.getSurvey = function getSurvey() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (!_this.survey) {
          _this.survey = _survey.Survey.fromObject(_surveyData2.default);
        }
        resolve(_this.survey);
      });
    };

    return DataManager;
  }()) || _class);
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('footer',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Footer = exports.Footer = function () {
    function Footer() {
      _classCallCheck(this, Footer);

      this.message = "This is the footer";
      this.name = "";
      this.age = "";
    }

    Footer.prototype.submit = function submit() {
      console.log("Got:", this.name, this.age);
      this.name = "It's me";
    };

    return Footer;
  }();
});
define('group-view',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var GroupView = exports.GroupView = function () {
    function GroupView() {
      _classCallCheck(this, GroupView);

      this.group = null;
    }

    GroupView.prototype.activate = function activate(group) {
      this.group = group;
    };

    return GroupView;
  }();

  ;
});
define('header',["exports", "aurelia-framework", "./scoreboard"], function (exports, _aureliaFramework, _scoreboard) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Header = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2;

  var Header = exports.Header = (_dec = (0, _aureliaFramework.inject)(_scoreboard.ScoreBoard), _dec2 = (0, _aureliaFramework.computedFrom)('scoreboard.totalScore'), _dec3 = (0, _aureliaFramework.computedFrom)('scoreboard.notifications'), _dec(_class = (_class2 = function () {
    function Header(scoreboard) {
      _classCallCheck(this, Header);

      this.scoreboard = scoreboard;
      this.message = "This is the header";
    }

    _createClass(Header, [{
      key: "score",
      get: function get() {
        return this.scoreboard.totalScore;
      }
    }, {
      key: "scoreNotifications",
      get: function get() {
        return this.scoreboard.notifications;
      }
    }]);

    return Header;
  }(), (_applyDecoratedDescriptor(_class2.prototype, "score", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "score"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "scoreNotifications", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "scoreNotifications"), _class2.prototype)), _class2)) || _class);
});
define('home',['exports', 'aurelia-framework', './data-manager', 'aurelia-router'], function (exports, _aureliaFramework, _dataManager, _aureliaRouter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Home = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Home = exports.Home = (_dec = (0, _aureliaFramework.inject)(_dataManager.DataManager, _aureliaRouter.Router), _dec(_class = function () {
    function Home(dataManager, router) {
      _classCallCheck(this, Home);

      this.pageIdx = 0;
      this.survey = null;

      this.dataManager = dataManager;
      this.router = router;
    }

    Home.prototype.activate = function activate(params) {
      var _this = this;

      if (params.pageNum && params.pageNum > 1) {
        this.pageIdx = params.pageNum - 1;
      } else {
        this.pageIdx = 0;
      }

      return this.dataManager.getSurvey().then(function (survey) {
        _this.survey = survey;
        console.log("Survey:", survey);
      });
    };

    Home.prototype.getNext = function getNext() {};

    Home.prototype.getPrev = function getPrev() {};

    return Home;
  }()) || _class);
  ;
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().plugin('aurelia-animator-css').plugin('aurelia-bootstrap').feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('page-view',['exports', 'aurelia-framework', './models/page'], function (exports, _aureliaFramework, _page) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Home = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Home = exports.Home = function () {
    function Home() {
      _classCallCheck(this, Home);

      this.page = null;
    }

    Home.prototype.activate = function activate(page) {
      console.log("Page:", page);
      this.page = page;
    };

    return Home;
  }();

  ;
});
define('question-view',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var QuestionView = exports.QuestionView = function () {
    function QuestionView() {
      _classCallCheck(this, QuestionView);

      this.question = null;
    }

    QuestionView.prototype.activate = function activate(question) {
      this.question = question;
    };

    return QuestionView;
  }();

  ;
});
define('scoreboard',["exports", "./models/answer", "aurelia-framework"], function (exports, _answer, _aureliaFramework) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ScoreBoard = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ScoreBoard = exports.ScoreBoard = function () {
    function ScoreBoard() {
      _classCallCheck(this, ScoreBoard);

      this.answers = {};
      this.notifications = [];
      this.totalScore = 0;

      console.log("New scoreboard");
    }

    ScoreBoard.prototype.answerQuestion = function answerQuestion(answer) {
      var ansObj = _answer.Answer.fromObject(answer);
      var lastTotal = this.totalScore;

      if (this.answers[ansObj.name] && this.answers[ansObj.name].score) {
        this.totalScore -= this.answers[ansObj.name].score;
      }

      this.totalScore += ansObj.score;
      this.answers[ansObj.name] = ansObj;

      var lastDelta = this.totalScore - lastTotal;
      if (lastDelta != 0) {
        this.addScoreChangeNotification(lastDelta);
      }
    };

    ScoreBoard.prototype.getAnswer = function getAnswer(questionName) {
      return this.answers[questionName];
    };

    ScoreBoard.prototype.addScoreChangeNotification = function addScoreChangeNotification(amount) {
      var _this = this;

      var notification = amount < 0 ? amount.toString() : "+" + amount.toString();
      this.notifications.push(notification);
      setTimeout(function () {
        _this.notifications.splice(0, 1);
      }, 2500);
      console.log(this.notifications);
    };

    return ScoreBoard;
  }();
});
define('survey-data',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "This is a test survey",
    description: "Ask about this and that",
    pages: [{
      name: "Page 1",
      backSymbol: "eye",
      description: "Ask about address",
      group: {
        name: "Home address",
        border: true,
        items: [{
          type: "text",
          name: "text input"
        }, {
          type: "number",
          scoreType: "scale",
          scoreData: [{ upTo: 10, scale: 1 }, { upTo: 20, scale: 0.5 }, { upTo: 40, scale: 0.25 }, { upTo: 100, scale: 0.125 }],
          name: "number-input"
        }, {
          type: "number-grid",
          scoreType: "scale",
          scoreData: [{ upTo: 10, scale: 1 }, { upTo: 20, scale: 0.5 }, { upTo: 40, scale: 0.25 }, { upTo: 100, scale: 0.125 }],
          columns: [{ name: "Inside", scale: 1 }, { name: "Outside", scale: 1 }],
          rows: [{ name: "Balls", scale: 1 }, { name: "Chairs", scale: 2 }, { name: "Desks", scale: 3 }, { name: "Stools", scale: 4 }],
          name: "number-grid"
        }, {
          type: "select",
          options: [{ name: "--choose-one--", scoreData: 0 }, { name: "one", scoreData: 1 }, { name: "two", scoreData: 2 }, { name: "three", scoreData: 3 }, { name: "three-3", scoreData: 4 }],
          name: "select-on-page-1"
        }, {
          type: "radio",
          options: [{ name: "one-r", scoreData: 0 }, { name: "two-r", scoreData: 2 }, { name: "three-r", scoreData: 4 }],
          name: "radio-on-page-1"
        }, {
          type: "checkbox-grid",
          columns: [{ name: "With Ketchup", scoreData: 1 }, { name: "With Mustard", scoreData: 2 }, { name: "With Relish", scoreData: 3 }],
          rows: [{ name: "Hamburger", scoreData: 1 }, { name: "Hotdog", scoreData: 2 }, { name: "Fries", scoreData: 3 }, { name: "Ice Cream", scoreData: 4 }, { name: "A big plate of well cooked sausages", scoreData: 5 }],
          name: "condiments"
        }, {
          type: "text",
          name: "another text input"
        }]
      }
    }, {
      name: "Page 2",
      backSymbol: "venus-mars",
      description: "Other details",
      group: {
        name: "Home address",
        border: false,
        items: [{
          type: "group",
          border: true,
          name: "Test group",
          items: [{
            type: "select",
            options: [{ name: "cat", scoreData: 1 }, { name: "dog", scoreData: 2 }, { name: "horse", scoreData: 3 }],
            name: "animal"
          }, {
            type: "radio",
            options: [{ name: "pizza", scoreData: 1 }, { name: "hotdog", scoreData: 2 }, { name: "poutine", scoreData: 3 }],
            name: "food"
          }]
        }, {
          type: "group",
          border: true,
          name: "Test group 2",
          items: [{
            type: "text",
            name: "text input"
          }, {
            type: "select",
            options: [{ name: "one", scoreData: 1 }, { name: "two", scoreData: 2 }, { name: "three", scoreData: 3 }],
            name: "select-on-page-2"
          }, {
            type: "radio",
            options: [{ name: "one-r", scoreData: 1 }, { name: "two-r", scoreData: 1 }, { name: "three-r", scoreData: 1 }],
            name: "radio-on-page-2"
          }, {
            type: "text",
            name: "another text input"
          }]
        }]
      }
    }, {
      name: "Lots of radios",
      backSymbol: "heart-o",
      description: "Other details",
      group: {
        name: "Some information",
        border: true,
        items: [{
          type: "text",
          name: "another text input"
        }]
      }
    }]

  };
});
define('header/score',['exports', 'aurelia-framework', '../scoreboard'], function (exports, _aureliaFramework, _scoreboard) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SelectWidget = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _dec, _class;

  var SelectWidget = exports.SelectWidget = (_dec = (0, _aureliaFramework.inject)(_scoreboard.ScoreBoard), _dec(_class = function () {
    function SelectWidget(scoreboard) {
      _classCallCheck(this, SelectWidget);

      this.score = 0;

      this.scoreboard = scoreboard;
    }

    SelectWidget.prototype.activate = function activate(obj) {};

    _createClass(SelectWidget, [{
      key: 'score',
      set: function set(val) {
        this.score = val;
      }
    }]);

    return SelectWidget;
  }()) || _class);
});
define('question-widgets/checkbox-grid-widget',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var CheckboxGrid = exports.CheckboxGrid = function () {
    function CheckboxGrid() {
      _classCallCheck(this, CheckboxGrid);

      this.question = {};
      this.checkboxes = {};
    }

    CheckboxGrid.prototype.activate = function activate(obj) {
      this.question = obj;

      for (var _iterator = obj.rows, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var row = _ref;

        var cb = {};
        for (var _iterator2 = obj.columns, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
          var _ref2;

          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
          }

          var col = _ref2;

          var scoreData = 0;
          if (row.scoreData) {
            scoreData = row.scoreData;
          }
          if (col.scoreData) {
            scoreData *= col.scoreData;
          }
          cb[col.name] = {
            name: obj.name + "." + row.name + "." + col.name,
            scoreData: scoreData,
            value: false
          };
        }
        this.checkboxes[row.name] = cb;
      }
    };

    return CheckboxGrid;
  }();

  ;
});
define('question-widgets/checkbox-widget',['exports', 'aurelia-framework', '../scoreboard'], function (exports, _aureliaFramework, _scoreboard) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CheckboxWidget = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _class, _desc, _value, _class2, _descriptor;

  var CheckboxWidget = exports.CheckboxWidget = (_dec = (0, _aureliaFramework.inject)(_scoreboard.ScoreBoard, Element), _dec(_class = (_class2 = function () {
    function CheckboxWidget(scoreboard, element) {
      _classCallCheck(this, CheckboxWidget);

      this.question = {};

      _initDefineProp(this, 'value', _descriptor, this);

      this.scoreboard = scoreboard;
      this.element = element;
    }

    CheckboxWidget.prototype.activate = function activate(obj) {
      this.question = obj;
      var answer = this.scoreboard.getAnswer(this.question.name);
      if (answer) {
        this.value = answer.value;
      }
    };

    CheckboxWidget.prototype.valueChanged = function valueChanged(newVal, oldVal) {

      this.scoreboard.answerQuestion({
        value: newVal,
        name: this.question.name,
        scoreData: this.question.scoreData,
        scoreType: this.question.scoreType
      });
    };

    CheckboxWidget.prototype.boxClick = function boxClick(checkbox) {
      this.value = this.value ? false : true;
    };

    CheckboxWidget.prototype.attached = function attached() {
      var self = this;
      this.element.addEventListener('click', function (e) {
        self.boxClick();
      });
    };

    CheckboxWidget.prototype.detached = function detached() {
      var self = this;
      this.element.removeEventListener('click', function (e) {
        self.boxClick();
      });
    };

    return CheckboxWidget;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class);
  ;
});
define('question-widgets/number-grid-widget',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var NumberGrid = exports.NumberGrid = function () {
    function NumberGrid() {
      _classCallCheck(this, NumberGrid);

      this.question = {};
      this.numbers = {};
    }

    NumberGrid.prototype.activate = function activate(obj) {
      this.question = obj;

      for (var _iterator = obj.rows, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var row = _ref;

        var num = {};
        for (var _iterator2 = obj.columns, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
          var _ref2;

          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
          }

          var col = _ref2;

          var scale = 0;
          if (row.scale) {
            scale = row.scale;
          }
          if (col.scale) {
            scale *= col.scale;
          }

          var scoreData = [];
          for (var _iterator3 = obj.scoreData, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
            var _ref3;

            if (_isArray3) {
              if (_i3 >= _iterator3.length) break;
              _ref3 = _iterator3[_i3++];
            } else {
              _i3 = _iterator3.next();
              if (_i3.done) break;
              _ref3 = _i3.value;
            }

            var entry = _ref3;

            var newEntry = Object.assign({}, entry);
            newEntry.scale *= scale;
            scoreData.push(newEntry);
          }

          num[col.name] = {
            name: obj.name + "." + row.name + "." + col.name,
            scoreType: obj.scoreType,
            scoreData: scoreData,
            value: 0
          };
        }
        this.numbers[row.name] = num;
      }
    };

    return NumberGrid;
  }();

  ;
});
define('question-widgets/number-widget',['exports', 'aurelia-framework', '../scoreboard'], function (exports, _aureliaFramework, _scoreboard) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SelectWidget = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _class, _desc, _value, _class2, _descriptor;

  function isNavigationOrSelectionKey(e) {
    if ([46, 8, 9, 27, 110, 190].indexOf(e.keyCode) !== -1 || [65, 67, 86, 88].indexOf(e.keyCode) !== -1 && (e.ctrlKey === true || e.metaKey === true) || e.keyCode >= 35 && e.keyCode <= 40) {
      return true;
    }
    return false;
  }

  function keydown(e) {
    if (isNavigationOrSelectionKey(e)) {
      return;
    }
    if ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  }

  var SelectWidget = exports.SelectWidget = (_dec = (0, _aureliaFramework.inject)(_scoreboard.ScoreBoard, Element), _dec(_class = (_class2 = function () {
    function SelectWidget(scoreboard, element) {
      _classCallCheck(this, SelectWidget);

      this.question = {};

      _initDefineProp(this, 'value', _descriptor, this);

      this.scoreboard = scoreboard;
      this.element = element;
    }

    SelectWidget.prototype.activate = function activate(obj) {
      this.question = obj;
      var answer = this.scoreboard.getAnswer(this.question.name);
      if (answer) {
        this.value = answer.value;
      }
    };

    SelectWidget.prototype.valueChanged = function valueChanged(newVal, oldVal) {
      this.scoreboard.answerQuestion({
        name: this.question.name,
        value: newVal,
        scoreType: this.question.scoreType,
        scoreData: this.question.scoreData
      });
    };

    SelectWidget.prototype.attached = function attached() {
      this.element.addEventListener('keydown', keydown);
    };

    SelectWidget.prototype.detached = function detached() {
      this.element.removeEventListener('keydown', keydown);
    };

    SelectWidget.prototype.addOne = function addOne() {
      this.value++;
    };

    SelectWidget.prototype.subtractOne = function subtractOne() {
      if (this.value > 0 || this.question.allowNegative) {
        this.value--;
      }
    };

    return SelectWidget;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 0;
    }
  })), _class2)) || _class);
});
define('question-widgets/radio-widget',['exports', 'aurelia-framework', '../scoreboard'], function (exports, _aureliaFramework, _scoreboard) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RadioWidget = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _class, _desc, _value, _class2, _descriptor;

  var RadioWidget = exports.RadioWidget = (_dec = (0, _aureliaFramework.inject)(_scoreboard.ScoreBoard, Element), _dec(_class = (_class2 = function () {
    function RadioWidget(scoreboard, element) {
      _classCallCheck(this, RadioWidget);

      this.question = {};

      _initDefineProp(this, 'value', _descriptor, this);

      this.scoreboard = scoreboard;
      this.element = element;
    }

    RadioWidget.prototype.activate = function activate(obj) {
      this.question = obj;
      var answer = this.scoreboard.getAnswer(this.question.name);
      if (answer) {
        this.value = answer.value;
      }
    };

    RadioWidget.prototype.valueChanged = function valueChanged(newVal, oldVal) {
      var selected = this.question.options[newVal];
      this.scoreboard.answerQuestion({
        name: this.question.name,
        value: newVal,
        scoreType: selected.scoreType,
        scoreData: selected.scoreData
      });
    };

    RadioWidget.prototype.radioClick = function radioClick(radioButton, index) {
      this.value = index;
    };

    RadioWidget.prototype.attached = function attached() {
      var _this = this;

      var elements = this.element.getElementsByClassName("radio-button");

      var _loop = function _loop(i) {
        var el = elements[i];
        var self = _this;
        console.log("Adding handler for ", i, el);
        el.addEventListener('click', function (e) {
          self.radioClick(el, i);
        });
      };

      for (var i = 0; i < elements.length; i++) {
        _loop(i);
      }
    };

    RadioWidget.prototype.detached = function detached() {
      var _this2 = this;

      var elements = this.element.getElementsByClassName("radio-button");

      var _loop2 = function _loop2(i) {
        var el = elements[i];
        var self = _this2;
        el.removeEventListener('click', function (e) {
          self.radioClick(el, i);
        });
      };

      for (var i = 0; i < elements.length; i++) {
        _loop2(i);
      }
    };

    return RadioWidget;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return -1;
    }
  })), _class2)) || _class);
});
define('question-widgets/select-widget',['exports', 'aurelia-framework', '../scoreboard'], function (exports, _aureliaFramework, _scoreboard) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SelectWidget = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _class, _desc, _value, _class2, _descriptor;

  var SelectWidget = exports.SelectWidget = (_dec = (0, _aureliaFramework.inject)(_scoreboard.ScoreBoard), _dec(_class = (_class2 = function () {
    function SelectWidget(scoreboard) {
      _classCallCheck(this, SelectWidget);

      this.question = {};

      _initDefineProp(this, 'value', _descriptor, this);

      this.scoreboard = scoreboard;
    }

    SelectWidget.prototype.activate = function activate(obj) {
      this.question = obj;
      var answer = this.scoreboard.getAnswer(this.question.name);
      if (answer) {
        this.value = answer.value;
      }
    };

    SelectWidget.prototype.valueChanged = function valueChanged(newVal, oldVal) {
      if (newVal < 0) {
        this.scoreboard.answerQuestion({
          name: this.question.name,
          value: newVal,
          scoreType: undefined,
          scoreData: 0
        });
      } else {
        var selected = this.question.options[newVal];
        this.scoreboard.answerQuestion({
          name: this.question.name,
          value: newVal,
          scoreType: selected.scoreType,
          scoreData: selected.scoreData
        });
      }
    };

    return SelectWidget;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return "";
    }
  })), _class2)) || _class);
});
define('question-widgets/text-widget',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var TextWidget = exports.TextWidget = function () {
    function TextWidget() {
      _classCallCheck(this, TextWidget);

      this.name = "";
      this.value = "";
    }

    TextWidget.prototype.activate = function activate(obj) {
      this.name = obj.name;
    };

    return TextWidget;
  }();
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('models/answer',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Answer = exports.Answer = function () {
    function Answer() {
      _classCallCheck(this, Answer);

      this.name = "";
      this.value = null;
      this.score = null;
    }

    Answer.fromObject = function fromObject(src) {
      var obj = Object.assign(new Answer(), src);
      obj.computeScore();
      return obj;
    };

    Answer.prototype.computeScore = function computeScore() {
      if (!this.scoreType) {
        this.score = this.value ? this.scoreData : 0;
      } else if (this.scoreType == "scale") {
        var lastUpTo = 0;
        var score = 0;
        for (var _iterator = this.scoreData, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var entry = _ref;

          var numToAdd = void 0;
          if (this.value > entry.upTo) {
            score += (entry.upTo - lastUpTo) * entry.scale;
          } else {
            score += (this.value - lastUpTo) * entry.scale;
            break;
          }
          lastUpTo = entry.upTo;
          console.log(entry, score);
        }
        this.score = score;
      }
    };

    return Answer;
  }();
});
define('models/group',["exports", "./question"], function (exports, _question) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Group = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Group = exports.Group = function () {
    function Group() {
      _classCallCheck(this, Group);

      this.name = "";
      this.border = false;
      this.items = [];
    }

    Group.fromObject = function fromObject(src) {
      var group = Object.assign(new Group(), src);
      var tmpItems = group.items;
      console.log(tmpItems);
      group.items = [];
      console.log(tmpItems);
      for (var _iterator = tmpItems, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var item = _ref;

        if (item.type === "group") {
          group.items.push(Group.fromObject(item));
        } else {
          console.log("Adding quest", item);
          group.items.push(_question.Question.fromObject(item));
        }
      }
      return group;
    };

    return Group;
  }();
});
define('models/page',["exports", "./group"], function (exports, _group) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Page = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Page = exports.Page = function () {
    function Page() {
      _classCallCheck(this, Page);

      this.name = "";
      this.description = "";
      this.group = {};
    }

    Page.fromObject = function fromObject(src) {
      var page = Object.assign(new Page(), src);
      page.group = _group.Group.fromObject(page.group);
      return page;
    };

    return Page;
  }();
});
define('models/question',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Question = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Question = exports.Question = function () {
    function Question(scoreboard) {
      _classCallCheck(this, Question);

      this.scoreboard = scoreboard;
    }

    Question.fromObject = function fromObject(src) {
      var obj = Object.assign(new Question(), src);
      obj.learnAnswer();
      return obj;
    };

    Question.prototype.learnAnswer = function learnAnswer() {};

    Question.prototype.answerQuestion = function answerQuestion(answer) {
      this.answer = Answer.fromObject(answer);
      this.scoreboard(this.answer);
    };

    return Question;
  }();
});
define('models/survey',["exports", "./page"], function (exports, _page) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Survey = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Survey = exports.Survey = function () {
    function Survey() {
      _classCallCheck(this, Survey);

      this.name = "";
      this.description = "";
      this.pages = [];
    }

    Survey.fromObject = function fromObject(src) {
      var survey = Object.assign(new Survey(), src);
      survey.pages = survey.pages.map(_page.Page.fromObject);
      return survey;
    };

    return Survey;
  }();
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"app.css\"></require><div class=\"container\"><compose view-model=\"header\"></compose><div class=\"page-host\"><router-view></router-view></div><compose view-model=\"footer\"></compose></div></template>"; });
define('text!app.css', ['module'], function(module) { module.exports = "/*\n@media screen and ( min-width: 320px ){\n    html {\n        font-size: 150%;\n    }\n}\n\n@media screen and ( max-width: 830px ){\n    body {\n        margin: 50px 15px 0 15px;\n    }\n}\n*/\n\nbody {\n    margin: auto;\n    //max-width: 800px;\n    margin-top: 50px;\n}\n\n.body-background {\n    position: fixed;\n    top: calc(50px + 20vh);\n    left: 0px;\n    z-index: -1;\n    width: 100%;\n    text-align: center;\n    vertical-align: middle;\n}\n\n.body-background-symbol {\n    color: #b56f6f;\n    opacity: 0.5;\n    font-size: 50vw;\n    text-shadow: 4px 4px 8px rgba(0,0,0,0.8);\n    transform: rotate(30deg);\n}\n\ntd, th {\n    padding: 5px;\n}\n\nlabel {\n    color: #222;\n}\n\n.left-align {\n    text-align: left;\n}\n\n.right-align {\n    text-align: right;\n}\n\n.inline-half {\n    display: inline-block;\n    width: 50%;\n}\n\n.page-host {\n    //max-width: 800px;\n}\n\n.question {\n    margin: 20px 0px;\n}\n\n.group-with-border {\n    border:  1px solid rgba(181,111,111,0.3);\n    padding: 15px;\n    margin: 10px 0px;\n    box-shadow: 0px 2px 8px rgba(0,0,0, 0.2);\n    background-color: rgba(255,255,255,0.8);\n}\n\n.group-no-border {\n    padding: 0px;\n    margin: 10px 0px;\n}\n\n.radio-button {\n    cursor: pointer;\n    align-items: middle;\n    display: flex;\n    margin: 4px 10px;\n}\n\n.radio-circle {\n    font-size: 160%;\n    color: #009688;\n    margin-right: 10px;\n}\n\n.checkbox-box {\n    font-size: 200%;\n    color: #009688;\n}\n\n.number-widget-minus, .number-widget-plus, .number-widget-input {\n    display: inline-block;\n    border:  1px solid #888;\n    height: 1.5em;\n}\n\n.number-widget-minus, .number-widget-plus {\n    width: 1.5em;\n    text-align: center;\n    background-color: #009688;\n    color: white;\n    cursor: pointer;\n    -webkit-user-select: none;  \n    -moz-user-select: none;    \n    -ms-user-select: none;      \n    user-select: none;\n}\n\n.number-widget-minus {\n    border-radius: 4px 0px 0px 4px;\n    font-weight: bold;\n    margin-left: 8px;\n}\n\n.number-widget-plus {\n    border-radius: 0px 4px 4px 0px;\n    margin-right: 8px;\n}\n\n.number-widget-input {\n    min-width: 2.5em;\n    padding: 0px 5px 0px 8px;\n    text-align: right;\n    border-left: none;\n    border-right: none;\n}\n"; });
define('text!footer.html', ['module'], function(module) { module.exports = "<template><div>My Footer</div></template>"; });
define('text!header.css', ['module'], function(module) { module.exports = ".dheader {\n    position: fixed;\n    top:      0px;\n    z-index:  1;\n    padding:  8px;\n    background-color: white;\n    box-shadow: 0px 2px 5px rgba(0,0,0, 0.3);\n    margin: auto;\n    width: 800px;\n}\n\n.dheader-content {\n    width: 100%;\n}\n\n.header {\n    position: fixed;\n    top: 0;\n    height: 5em;\n    max-width: 800px;\n    width: calc(100% - 15px);\n    z-index: 10;\n}\n\n.header-content {\n    padding: 2px 10px;\n    width: 100%;\n    height: 100%;\n    background-color: #ffdd88;\n    z-index: 10;\n    box-shadow: 0px 2px 8px rgba(0,0,0,0.3);\n}\n\n.header-title {\n    position: absolute;\n    bottom: 15px;\n    font-size: 200%;\n    margin: 4px 0px 0px 10px;\n    \n}\n\n\n@media screen and ( max-width: 830px ){\n    .header {\n        margin-right: 15px;\n    }\n}\n\n.header-score-notification {\n    position:         absolute;\n    top:              -1000px;\n    right:            20vw;\n    padding:          8px;\n    border-radius:    3px;\n    background-color: #fbb;\n    min-width:        2.5em;\n    text-align:       center;\n}\n\n.header-score-notification.au-enter-active { \n  animation: riseAndFade 2.5s; \n  overflow: hidden; \n} \n \n@keyframes riseAndFade { \n    0% {\n        top: 10px;\n        opacity: 1;\n        box-shadow: 0px 0px 4px 2px rgba(255,255,0, 0.8);\n    }\n    10% {\n        box-shadow: 0px 0px 14px 22px rgba(255,255,0, 0.2);\n    }\n    30% {\n        box-shadow: 0px 0px 14px 22px rgba(255,255,0, 0);\n    }\n    100% {\n        top: -10px;\n        opacity: 0;\n        box-shadow: 0px 0px 14px 22px rgba(255,255,0, 0);\n    } \n} \n \n"; });
define('text!group-view.html', ['module'], function(module) { module.exports = "<template><div class=\"form-group\"><div if.bind=\"group.border == true\" class=\"group-with-border\">${group.name}<div repeat.for=\"item of group.items\"><compose if.bind=\"item.constructor.name === 'Group'\" model.bind=\"item\" view-model=\"group-view\"></compose><compose if.bind=\"item.constructor.name != 'Group'\" model.bind=\"item\" view-model=\"question-view\"></compose></div></div><div if.bind=\"group.border == false\" class=\"group-no-border\">${group.name}<div repeat.for=\"item of group.items\"><compose if.bind=\"item.constructor.name === 'Group'\" model.bind=\"item\" view-model=\"group-view\"></compose><compose if.bind=\"item.constructor.name != 'Group'\" model.bind=\"item\" view-model=\"question-view\"></compose></div></div></div></template>"; });
define('text!header.html', ['module'], function(module) { module.exports = "<template><require from=\"header.css\"></require><nav class=\"navbar navbar-default navbar-fixed-top\"><div class=\"container\"><ul class=\"nav navbar-nav pull-right\"><li class=\"navbar-brand\">Current Score: ${score}</li></ul><div class=\"header-score-notification au-animate\" repeat.for=\"notification of scoreNotifications\">${notification}</div></div></nav></template>"; });
define('text!home.html', ['module'], function(module) { module.exports = "<template><compose view-model=\"page-view\" model.bind=\"survey.pages[pageIdx]\"></compose><div class=\"inline-half left-align\"><a if.bind=\"pageIdx > 0\" href=\"${router.generate('home', {pageNum: pageIdx})}\">&lt; ${survey.pages[pageIdx-1].name}</a></div><div class=\"inline-half right-align\"><a if.bind=\"survey.pages[pageIdx+1]\" href=\"${router.generate('home', {pageNum: pageIdx+2})}\">${survey.pages[pageIdx+1].name} &gt;</a></div></template>"; });
define('text!page-view.html', ['module'], function(module) { module.exports = "<template><div if.bind=\"page.backSymbol\" class=\"body-background\"><i class=\"fa fa-${page.backSymbol} body-background-symbol\"></i></div><h1>${page.name}</h1><compose view-model=\"group-view\" model.bind=\"page.group\"></compose></template>"; });
define('text!question-view.html', ['module'], function(module) { module.exports = "<template><div class=\"question\"><compose model.bind=\"question\" view-model=\"./question-widgets/${question.type}-widget\"></compose></div></template>"; });
define('text!header/score.html', ['module'], function(module) { module.exports = "<template>Score: ${score}</template>"; });
define('text!question-widgets/checkbox-grid-widget.html', ['module'], function(module) { module.exports = "<template><table><tr><th>Question</th><th repeat.for=\"column of question.columns\" class=\"text-center\">${column.name}</th></tr><tr repeat.for=\"row of question.rows\"><td>${row.name}</td><td repeat.for=\"column of question.columns\" class=\"text-center\"><compose model.bind=\"checkboxes[row.name][column.name]\" view-model=\"./checkbox-widget\"></compose></td></tr></table></template>"; });
define('text!question-widgets/checkbox-widget.html', ['module'], function(module) { module.exports = "<template><div class=\"checkbox-widget\"><span if.bind=\"label\">${label}</span> <i if.bind=\"value\" class=\"checkbox-box fa fa-check-square\"></i> <i if.bind=\"!value\" class=\"checkbox-box fa fa-square-o\"></i></div></template>"; });
define('text!question-widgets/number-grid-widget.html', ['module'], function(module) { module.exports = "<template><table><tr><th>Question</th><th repeat.for=\"column of question.columns\" class=\"text-center\">${column.name}</th></tr><tr repeat.for=\"row of question.rows\"><td>${row.name}</td><td repeat.for=\"column of question.columns\" class=\"text-center\"><compose model.bind=\"numbers[row.name][column.name]\" view-model=\"./number-widget\"></compose></td></tr></table></template>"; });
define('text!question-widgets/number-widget.html', ['module'], function(module) { module.exports = "<template><div class=\"number-widget-minus\" click.delegate=\"subtractOne()\">-</div><div class=\"number-widget-input\" innerhtml.bind=\"value\" contenteditable=\"true\"></div><div class=\"number-widget-plus\" click.delegate=\"addOne()\">+</div></template>"; });
define('text!question-widgets/radio-widget.html', ['module'], function(module) { module.exports = "<template><div repeat.for=\"option of question.options\"><div class=\"radio-button\"><i if.bind=\"value == $index\" class=\"radio-circle fa fa-check-circle\"></i> <i if.bind=\"value != $index\" class=\"radio-circle fa fa-circle-o\"></i> <span>${option.name}</span></div></div></template>"; });
define('text!question-widgets/select-widget.html', ['module'], function(module) { module.exports = "<template><select value.bind=\"value\"><option value=\"-1\">--Select ${question.name}--</option><option repeat.for=\"option of question.options\" value=\"${$index}\">${option.name}</option></select></template>"; });
define('text!question-widgets/text-widget.html', ['module'], function(module) { module.exports = "<template><input md-label=\"${name}\" value.bind=\"value\"></template>"; });
define('text!page.html', ['module'], function(module) { module.exports = "<template><div if.bind=\"backSymbol\" class=\"body-background\"><i class=\"fa fa-${backSymbol} body-background-symbol\"></i></div><h1>${page.name}</h1><compose view-model=\"group-view\" model.bind=\"page.group\"></compose></template>"; });
//# sourceMappingURL=app-bundle.js.map
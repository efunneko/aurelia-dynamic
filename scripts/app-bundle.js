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
define('header',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Header = exports.Header = function Header() {
    _classCallCheck(this, Header);

    this.message = "This is the header";
  };
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
    aurelia.use.standardConfiguration().plugin('aurelia-materialize-bridge', function (b) {
      return b.useAll();
    }).feature('resources');

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
      console.log(question);
      this.question = question;
    };

    return QuestionView;
  }();

  ;
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
      description: "Ask about address",
      group: {
        name: "Home address",
        border: true,
        items: [{
          type: "text",
          name: "text input",
          value: ""
        }, {
          type: "select",
          options: ["one", "two", "three", "three-3"],
          name: "select",
          value: ""
        }, {
          type: "radio",
          options: ["one-r", "two-r", "three-r"],
          name: "radio",
          value: ""
        }, {
          type: "checkbox-grid",
          columns: [{ name: "With Ketchup" }, { name: "With Mustard" }, { name: "With Relish" }],
          rows: [{ name: "Hamburger" }, { name: "Hotdog" }, { name: "Fries" }, { name: "Ice Cream" }, { name: "A big plate of well cooked sausages" }],
          name: "condiments",
          value: ""
        }, {
          type: "text",
          name: "another text input",
          value: ""
        }]
      }
    }, {
      name: "Page 2",
      description: "Other details",
      group: {
        name: "Home address",
        border: true,
        items: [{
          type: "text",
          name: "text input",
          value: ""
        }, {
          type: "select",
          options: ["one", "two", "three"],
          name: "select",
          value: ""
        }, {
          type: "radio",
          options: ["one-r", "two-r", "three-r"],
          name: "radio",
          value: ""
        }, {
          type: "text",
          name: "another text input",
          value: ""
        }]
      }
    }, {
      name: "Lots of radios",
      description: "Other details",
      group: {
        name: "Some information",
        border: true,
        items: [{
          type: "radio",
          options: ["option-1", "option-2", "option-3", "option-4", "option-5", "option-6", "option-7", "option-8", "option-9", "option-10", "option-11", "option-12", "option-13", "option-14", "option-15", "option-16", "option-17", "option-18", "option-19", "option-20"],
          name: "radio",
          value: ""
        }, {
          type: "select",
          options: ["one", "two", "three"],
          name: "select",
          value: ""
        }, {
          type: "radio",
          options: ["one-r", "two-r", "three-r"],
          name: "radio",
          value: ""
        }, {
          type: "text",
          name: "another text input",
          value: ""
        }]
      }
    }]

  };
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

          cb[col.name] = {
            name: obj.name + "." + row.name + "." + col.name,
            value: false
          };
        }
        this.checkboxes[row.name] = cb;
      }
      console.log(this.checkboxes);
    };

    return CheckboxGrid;
  }();

  ;
});
define('question-widgets/checkbox-grid',["exports"], function (exports) {
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

      this.name = "";
      this.value = "";
    }

    CheckboxGrid.prototype.activate = function activate(obj) {
      this.name = obj.name;
    };

    return CheckboxGrid;
  }();
});
define('question-widgets/radio-widget',["exports", "aurelia-framework"], function (exports, _aureliaFramework) {
  "use strict";

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

  var _desc, _value, _class, _descriptor;

  var RadioWidget = exports.RadioWidget = (_class = function () {
    function RadioWidget() {
      _classCallCheck(this, RadioWidget);

      this.options = [];
      this.name = "";

      _initDefineProp(this, "value", _descriptor, this);
    }

    RadioWidget.prototype.activate = function activate(obj) {
      this.options = obj.options;
      this.name = obj.name;
    };

    RadioWidget.prototype.valueChanged = function valueChanged(oldVal, newVal) {
      console.log(oldVal, newVal);
    };

    return RadioWidget;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "value", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return "";
    }
  })), _class);
});
define('question-widgets/select-widget',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var SelectWidget = exports.SelectWidget = function () {
    function SelectWidget() {
      _classCallCheck(this, SelectWidget);

      this.options = [];
      this.name = "";
      this.value = "";
    }

    SelectWidget.prototype.activate = function activate(obj) {
      this.options = obj.options;
      this.name = obj.name;
    };

    return SelectWidget;
  }();
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
define('models/question',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Question = exports.Question = function () {
    function Question() {
      _classCallCheck(this, Question);

      this.name = "";
      this.value = null;
      this.type = null;
      this.text = "";
      this.details = {};
    }

    Question.fromObject = function fromObject(src) {
      return Object.assign(new Question(), src);
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
define('question-widgets/checkbox-widget',["exports", "aurelia-framework"], function (exports, _aureliaFramework) {
  "use strict";

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

  var _desc, _value, _class, _descriptor;

  var CheckboxWidget = exports.CheckboxWidget = (_class = function () {
    function CheckboxWidget() {
      _classCallCheck(this, CheckboxWidget);

      this.question = {};

      _initDefineProp(this, "value", _descriptor, this);
    }

    CheckboxWidget.prototype.activate = function activate(obj) {
      this.question = obj;
    };

    CheckboxWidget.prototype.valueChanged = function valueChanged(newVal, oldVal) {
      console.log("Changed", this.question.name, oldVal, newVal);
    };

    return CheckboxWidget;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "value", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  })), _class);
  ;
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"app.css\"></require><h1>${message}</h1><div class=\"header\"><compose view-model=\"header\"></compose></div><div class=\"page-host\"><router-view></router-view></div><div class=\"footer\"><compose view-model=\"footer\"></compose></div></template>"; });
define('text!app.css', ['module'], function(module) { module.exports = ".left-align {\n    text-align: left;\n}\n\n.right-align {\n    text-align: right;\n}\n\n.inline-half {\n    display: inline-block;\n    width: 50%;\n}\n\n.page-host {\n    max-width: 800px;\n    margin:    auto;\n}\n\n.group-border {\n    border:  1px solid #aaa;\n    padding: 8px;\n}\n"; });
define('text!footer.html', ['module'], function(module) { module.exports = "<template><div>My Footer</div></template>"; });
define('text!group-view.html', ['module'], function(module) { module.exports = "<template><div><div class=\"${group.border ? 'group-border' : ''}\">Group ${group.name}<div repeat.for=\"item of group.items\"><compose if.bind=\"item.constructor.name === 'Group'\" model.bind=\"item\" view-model=\"group-view\"></compose><compose if.bind=\"item.constructor.name != 'Group'\" model.bind=\"item\" view-model=\"question-view\"></compose></div></div></div></template>"; });
define('text!header.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
define('text!home.html', ['module'], function(module) { module.exports = "<template><compose view-model=\"page-view\" model.bind=\"survey.pages[pageIdx]\"></compose><div class=\"inline-half left-align\" bind.if=\"pageIdx > 0\"><a href=\"${router.generate('home', {pageNum: pageIdx})}\">${survey.pages[pageIdx-1].name}</a></div><div class=\"inline-half right-align\" bind.if=\"survey.pages[pageIdx+1]\"><a href=\"${router.generate('home', {pageNum: pageIdx+2})}\">${survey.pages[pageIdx+1].name}</a></div></template>"; });
define('text!page-view.html', ['module'], function(module) { module.exports = "<template>Page ${page.name}<compose view-model=\"group-view\" model.bind=\"page.group\"></compose></template>"; });
define('text!question-view.html', ['module'], function(module) { module.exports = "<template><div><compose model.bind=\"question\" view-model=\"./question-widgets/${question.type}-widget\"></compose></div></template>"; });
define('text!question-widgets/checkbox-grid-widget.html', ['module'], function(module) { module.exports = "<template><table><tr><th>Question</th><th repeat.for=\"column of question.columns\">${column.name}</th></tr><tr repeat.for=\"row of question.rows\"><td>${row.name}</td><td repeat.for=\"column of question.columns\"><compose model.bind=\"checkboxes[row.name][column.name]\" view-model=\"./checkbox-widget\"></compose></td></tr></table></template>"; });
define('text!question-widgets/radio-widget.html', ['module'], function(module) { module.exports = "<template><div repeat.for=\"option of options\"><md-radio md-name=\"${name}\" md-value=\"${option}\" md-checked.bind=\"value\">${option}</md-radio></div>${value}</template>"; });
define('text!question-widgets/select-widget.html', ['module'], function(module) { module.exports = "<template><select md-select=\"label: select a value\" value.bind=\"value\"><option repeat.for=\"option of options\" value=\"${option}\">${option}</option></select></template>"; });
define('text!question-widgets/text-widget.html', ['module'], function(module) { module.exports = "<template><md-input md-label=\"${name}\" md-value.bind=\"value\"></md-input></template>"; });
define('text!question-widgets/checkbox-widget.html', ['module'], function(module) { module.exports = "<template><md-checkbox md-filled-in=\"true\" md-checked.bind=\"value\"></md-checkbox></template>"; });
//# sourceMappingURL=app-bundle.js.map
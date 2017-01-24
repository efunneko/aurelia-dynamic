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
      config.map([{ route: '', redirect: 'home' }, { route: 'home', name: 'home', moduleId: 'home', nav: true, title: 'Home' }]);
      config.mapUnknownRoutes('not-found');
    };

    return App;
  }();
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
define('home',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Home = exports.Home = function Home() {
    _classCallCheck(this, Home);

    this.stuff = {
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
    };
    this.placeholder = "Home is where the heart is";
  };

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
    aurelia.use.standardConfiguration().feature('resources');

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
define('radio',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var RadioWidget = exports.RadioWidget = function () {
    function RadioWidget() {
      _classCallCheck(this, RadioWidget);

      this.options = [];
      this.name = "";
      this.value = "";
    }

    RadioWidget.prototype.activate = function activate(obj) {
      this.options = obj.options;
      this.name = obj.name;
    };

    return RadioWidget;
  }();
});
define('select',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Select = exports.Select = function () {
    function Select() {
      _classCallCheck(this, Select);

      this.options = [];
      this.name = "";
      this.value = "";
    }

    Select.prototype.activate = function activate(obj) {
      this.options = obj.options;
      this.name = obj.name;
    };

    return Select;
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
define('select-widget',["exports"], function (exports) {
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
define('radio-widget',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var RadioWidget = exports.RadioWidget = function () {
    function RadioWidget() {
      _classCallCheck(this, RadioWidget);

      this.options = [];
      this.name = "";
      this.value = "";
    }

    RadioWidget.prototype.activate = function activate(obj) {
      this.options = obj.options;
      this.name = obj.name;
    };

    return RadioWidget;
  }();
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"app.css\"></require><h1>${message}</h1><div class=\"header\"><compose view-model=\"header\"></compose></div><div class=\"page-host\"><router-view></router-view></div><div class=\"footer\"><compose view-model=\"footer\"></compose></div></template>"; });
define('text!app.css', ['module'], function(module) { module.exports = " "; });
define('text!footer.html', ['module'], function(module) { module.exports = "<template><form submit.delegate=\"submit()\"><input value.bind=\"name\"> <input value.bind=\"age & throttle:1000\"> <button type=\"submit\">Submit</button> ${age}</form></template>"; });
define('text!header.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
define('text!home.html', ['module'], function(module) { module.exports = "<template><div repeat.for=\"item of stuff.items\"><compose if.bind=\"item.type === 'radio'\" view-model=\"radio-widget\" model.bind=\"item\"></compose><compose if.bind=\"item.type === 'select'\" view-model=\"select-widget\" model.bind=\"item\"></compose>hi</div>${placeholder}</template>"; });
define('text!radio.html', ['module'], function(module) { module.exports = "<template><div repeat.for=\"option of options\"><input type=\"radio\" name.bind=\"name\">${option}</div></template>"; });
define('text!select.html', ['module'], function(module) { module.exports = "<template><select>here</select></template>"; });
define('text!select-widget.html', ['module'], function(module) { module.exports = "<template><select value.bind=\"value\"><option repeat.for=\"option of options\">${option}</option></select></template>"; });
define('text!radio-widget.html', ['module'], function(module) { module.exports = "<template><div repeat.for=\"option of options\"><input type=\"radio\" name.bind=\"name\">${option}</div></template>"; });
//# sourceMappingURL=app-bundle.js.map
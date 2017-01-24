export class App {
  constructor() {
    this.placeholder = "App placeholder";
  }
  
  configureRouter(config, router) {
  	this.router = router;
  	config.title = "Fun With Aurelia";
  	config.map([
      { route: '', redirect: 'home' },
      { route: 'home', name: 'home', moduleId: 'home', nav: true, title: 'Home' },
  	]);
    config.mapUnknownRoutes('not-found');
  }
}

export class App {
  constructor() {
    this.placeholder = "App placeholder";
  }
  
  configureRouter(config, router) {
  	this.router = router;
  	config.title = "Fun With Aurelia";
  	config.map([
      { route: '', redirect: 'home/page/1' },
      { route: 'home', redirect: 'home/page/1' },
      { route: 'home/page', redirect: 'home/page/1' },
      { route: 'home/page/:pageNum', name: 'home', moduleId: 'home' },
  	]);
    config.mapUnknownRoutes('not-found');
  }
}

import {RouterConfiguration, Router} from 'aurelia-router';

export class App {
  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Coding Parts';
    config.map([
      { route: ['', 'search', 'search/list'], moduleId: 'pages/search', nav: true, title: 'Search libraries', name: 'default' },
      { route: 'syncstatus', moduleId: 'pages/syncstatus', nav: true, title: 'Sync Status', name:'syncstatus' },
      { route: 'something', moduleId: 'something', nav: true, title: 'something', name:'something' }
    ]);

    config.mapUnknownRoutes('not-found');
  }
}

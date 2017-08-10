import {RouterConfiguration, Router} from 'aurelia-router';

export class Search {
  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: [''], moduleId: 'pages/search/list', nav: true, title: 'Search libraries', name: 'search-index' },
      { route: 'test', moduleId: 'pages/search/test', nav: true, title: 'Search test', name:'search-test' }
    ]);
  }
}
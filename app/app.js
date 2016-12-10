(function() {
  'use strict';

  angular.module('studentdb-test', [
    'ui.router',
    'api.students',
    'components.students'
  ])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/students");
  });
})();

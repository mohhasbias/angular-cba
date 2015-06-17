/**
 * Created by rumaisyah on 6/15/2015.
 */

(function () {
  'use strict';

  angular.module('SparkMobileApp')
    .config(setDefaultRoute)
    .run(attachFastClick);

  setDefaultRoute.$inject = ['$urlRouterProvider', '$stateProvider'];
  function setDefaultRoute($urlRouterProvider, $stateProvider){
    $stateProvider.state('404',{
      url: '/404',
      template: '<h1>Not Found</h1>'
    });

    $urlRouterProvider.otherwise('/404');

    $urlRouterProvider.when('', '/hello');
  }

  function attachFastClick(){
    FastClick.attach(document.body);
  }
})();


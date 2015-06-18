/**
 * Created by rumaisyah on 6/15/2015.
 */

(function () {
  'use strict';

  angular.module('app.hello')
    .config(setFaqRoute);

  setFaqRoute.$inject = ['$stateProvider'];
  function setFaqRoute($stateProvider){
    $stateProvider
      .state('hello', {
        url: '/hello',
        templateUrl: 'app/hello/hello.html',
        controller: 'helloController',
        controllerAs: 'vm'
      });
  }
})();


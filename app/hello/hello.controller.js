/**
 * Created by rumaisyah on 6/18/2015.
 */

(function () {
  'use strict';

  angular.module('app.hello')
    .controller('helloController', helloController);

  helloController.$inject = ['$state'];
  function helloController($state){
    var vm = this;

    vm.filepath = $state.current.templateUrl;
  }
})();
(function() {
  'use strict';
  angular.module('MsgApp', [])
  .controller('MsgController',MsgController)
  .filter('loves', LovesFilter)
  .filter('truth', TruthFilter);
  MsgController.$inject = ['$scope','lovesFilter'];

  function MsgController ($scope, lovesFilter) {
    $scope.name="Heena";
    $scope.stateOfBeing = "hungry";


    $scope.sayMessage = function () {
      return "Heena likes to eat healthy snacks at night";
    };
    $scope.sayLovesMessage = function () {
      var msg = "Heena likes to eat healthy snacks at night";
      msg = lovesFilter(msg);
      return msg;
    };

    $scope.feedDragon = function () {
      $scope.stateOfBeing = "fed";
    };
  }

  function LovesFilter() {
    return function (input) {
      input = input || "";
      input = input.replace("likes","loves");
      return input;
    };
  }

  function TruthFilter() {
    return function (input, target, replace) {
      input = input || "";
      input = input.replace(target,replace);
      return input;
    };
  }
})();

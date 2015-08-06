'use strict';

angular.module('dsTmApp.screens')
  .controller('LoginController', function($state, TM_stateConst, $scope) {

   $scope.login = function login() {
     $state.go(TM_stateConst.ONBOARDING);
   };

  });

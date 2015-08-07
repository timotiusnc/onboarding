'use strict';

angular.module('dsTmApp.screens')
  .controller('OnboardingLayout', function($scope, TM_stateConst, $state) {
    $scope.curStep = '0';
    $scope.nextStep = function() {
      $scope.curStep++;
      if ($scope.curStep >= 3) {
        $state.go(TM_stateConst.ONBOARDING_FINISH);
      }
    };
  });

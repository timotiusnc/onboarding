'use strict';

angular.module('dsTmApp')
  .directive('dsTmStepsIndicator', function() {
    return {
      templateUrl: 'src/shared-directives/steps-indicator/steps-indicator.de.html',
      restrict: 'E',
      scope: {
        curStep: '=',
        numSteps: '='
      },
      controller: 'StepsIndicatorCtrl'
    };
  })
  .controller('StepsIndicatorCtrl', function($scope, _) {
    $scope.steps = _.range($scope.numSteps);
  });

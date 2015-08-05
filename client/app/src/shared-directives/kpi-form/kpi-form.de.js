'use strict';

angular.module('dsTmApp.components')
  .directive('dsTmKpiForm', function() {
    return {
      templateUrl: 'src/shared-directives/kpi-form/kpi-form.de.html',
      restrict: 'E',
      scope: {
        model: '=',
        onSave: '&'
      },
      controller: 'KpiFormCtrl'
    };
  })
  .controller('KpiFormCtrl', function($scope) {
    $scope.model = [
      {
        title: 'Handled inquiry',
        type: 'amount',
        value: 0,
        checked: false
      },
      {
        title: 'Email response time',
        type: 'time',
        value_min: 0,
        value_sec: 0,
        checked: false
      },
      {
        title: 'Mention response time',
        type: 'time',
        value_min: 0,
        value_sec: 0,
        checked: false
      }
    ];

    $scope.getNumber = function(num) {
      var retval = [];
      for (var i=0; i<num; ++i) {
        retval.push(i);
      }

      return retval;
    };

    $scope.save = function() {
      $scope.onSave({'kpis': $scope.model});
    };
  });

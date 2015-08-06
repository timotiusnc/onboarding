'use strict';

angular.module('dsTmApp.components')
  .directive('dsTmAccountConfig', function() {
    return {
      templateUrl: 'src/shared-directives/account-config/account-config.de.html',
      restrict: 'E',
      controller: 'AccountConfigCtrl'
    };
  })
  .controller('AccountConfigCtrl', function($scope){
    $scope.teams = ['Team CS BCA', 'TEAM SOCIAL MEDIA BCA'];
  });
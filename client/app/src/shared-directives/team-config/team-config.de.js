'use strict';

angular.module('dsTmApp.components')
  .directive('dsTmTeamConfig', function() {
    return {
      templateUrl: 'src/shared-directives/team-config/team-config.de.html',
      restrict: 'E',
      controller: 'TeamConfigCtrl'
    };
  })
  .controller('TeamConfigCtrl', function($scope, TeamInputDialogService) {
    $scope.showTeamInputDialog = showTeamInputDialog;

    function showTeamInputDialog(){
      TeamInputDialogService.open().then(function(ans){
        console.log(ans);
      });
    }
  });

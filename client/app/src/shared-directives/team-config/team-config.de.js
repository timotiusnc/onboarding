'use strict';

angular.module('dsTmApp.components')
  .directive('dsTmTeamConfig', function() {
    return {
      templateUrl: 'src/shared-directives/team-config/team-config.de.html',
      restrict: 'E',
      controller: 'TeamConfigCtrl'
    };
  })
  .controller('TeamConfigCtrl', function($scope, TeamInputDialogService, TeamService) {
    $scope.showTeamInputDialog = showTeamInputDialog;
    $scope.teams = TeamService.teams;

    function showTeamInputDialog(){
      TeamInputDialogService.open().then(function(ans){
        $scope.teams.push({ name: ans, socmeds: [] });
      });
    }
  });

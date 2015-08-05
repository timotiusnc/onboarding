'use strict';

angular.module('dsTmApp.components')
  .directive('dsTmTeamList', function() {
    return {
      templateUrl: 'src/shared-directives/team-config/team-list/team-list.de.html',
      scope:{
        teams: '='
      },
      restrict: 'E',
      controller: 'TeamListCtrl'
    };
  })
  .controller('TeamListCtrl', function($scope) {
    $scope.removeTeam = removeTeam;

    function removeTeam(teamName){
      var index = $scope.teams.indexOf(teamName);
      $scope.teams.splice(index, 1);
    }
  });
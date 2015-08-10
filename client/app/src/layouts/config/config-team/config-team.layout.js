'use strict';

angular.module('dsTmApp.screens')
  .controller('ConfigTeamCtrl', function($state, $scope, TeamService, SocmedService, AccountAddDialog) {
  	$scope.teams = TeamService.teams;
    $scope.accounts = function() { return SocmedService.getAvailable(); };
    $scope.isAuthorShown = false;

    $scope.addAccount = function() {
      AccountAddDialog.open();
    };

    $scope.showAuthor = function() {
      $scope.isAuthorShown = true;
    };

    console.log('team_id', $state.params.team_id);
  });

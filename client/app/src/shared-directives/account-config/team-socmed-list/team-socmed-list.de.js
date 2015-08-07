'use strict';

angular.module('dsTmApp.components')
  .directive('dsTmTeamSocmedList', function() {
    return {
      templateUrl: 'src/shared-directives/account-config/team-socmed-list/team-socmed-list.de.html',
      scope: {
        team: '='
      },
      restrict: 'E',
      controller: 'SocmedListCtrl'
    };
  })
  .controller('SocmedListCtrl', function($scope, AccountAddDialog, _, SocmedService){
    $scope.assignAccount = assignAccount;
    $scope.removeSocmed = removeSocmed;

    function removeSocmed(socmed){
      $scope.team.socmeds = _.reject($scope.team.socmeds, socmed);
    }

    function assignAccount(){
      AccountAddDialog.open().then(function(x) {
        if ($scope.team.socmeds.indexOf(x) < 0) $scope.team.socmeds.push(x);
        SocmedService.owned = _.union(SocmedService.owned, [x]);
      });
    }
  });

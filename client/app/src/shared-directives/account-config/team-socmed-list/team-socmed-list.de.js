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
  .controller('SocmedListCtrl', function($scope, AccountAddDialog){
    $scope.socmeds = [];
    $scope.assignAccount = assignAccount;
    $scope.removeSocmed = removeSocmed;

    function removeSocmed(socmedName){
      var index = $scope.socmeds.indexOf(socmedName);
      $scope.socmeds.splice(index, 1);
    }

    function assignAccount(){
      AccountAddDialog.open();
      $scope.socmeds.push('@HaloBCA' + $scope.socmeds.length);
    }
  });

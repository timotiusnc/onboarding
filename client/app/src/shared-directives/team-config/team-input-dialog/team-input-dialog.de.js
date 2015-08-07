'use strict';

angular.module('dsTmApp.components')
  .service('TeamInputDialogService', function($mdDialog) {
    this.open = function(ev) {
      return $mdDialog.show({
        templateUrl: 'src/shared-directives/team-config/team-input-dialog/team-input-dialog.de.html',
        targetEvent: ev,
        controller: 'TeamInputDialogCtrl'
      });
    };
  })
  .controller('TeamInputDialogCtrl', function($scope, $mdDialog){
    $scope.teamName = '';
    $scope.onCreated = function(){
      $mdDialog.hide($scope.teamName);
    };
  });
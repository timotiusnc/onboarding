'use strict';

angular.module('dsTmApp')
  .service('UserDetailDialog', function($mdDialog, _, SocmedService) {

    this.open = function(targetEvent) {
      return $mdDialog.show({
        targetEvent: targetEvent,
        templateUrl: 'src/shared-services/user-detail-dialog/user-detail-dialog.html',
        controller: ['$scope', '$mdDialog', function ($scope, $mdDialog) {

          $scope.close = function () {
            $mdDialog.hide();
          };

        }]
      });
    };

  });

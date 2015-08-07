'use strict';

angular.module('dsTmApp')
  .service('AccountAddDialog', function($mdDialog, _, SocmedService) {

    this.open = function(targetEvent) {
      return $mdDialog.show({
        targetEvent: targetEvent,
        templateUrl: 'src/shared-services/account-add-dialog/account-add-dialog.html',
        controller: ['$scope', '$mdDialog', function ($scope, $mdDialog) {

          $scope.selected = null;

          $scope.search = {
            source: 'Facebook'
          };

          $scope.facebook = function () {
            $scope.search.source = 'Facebook';
          };

          $scope.twitter = function () {
            $scope.search.source = 'Twitter';
          };

          $scope.select = function (account) {
            $scope.selected = account;
          };

          $scope.add = function () {
            return $mdDialog.hide($scope.selected);
          };

          $scope.close = function () {
            return $mdDialog.hide();
          };   

          $scope.accounts = SocmedService.available;

        }]
      });
    };

  });

'use strict';

angular.module('dsTmApp')
  .service('AccountAddDialog', function($mdDialog, _) {

    this.open = function(targetEvent) {
      return $mdDialog.show({
        targetEvent: targetEvent,
        templateUrl: 'src/shared-services/account-add-dialog/account-add-dialog.html',
        controller: ['$scope', '$mdDialog', function ($scope, $mdDialog) {

          $scope.selected = {};

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
            $mdDialog.hide();
          };

          $scope.close = function () {
            $mdDialog.hide();
          };   

          $scope.accounts = [
            {
              id: 1,
              username: 'HaloBCA',
              source: 'Twitter'
            },
            {
              id: 2,
              username: 'BizGuideBCA',
              source: 'Facebook'
            },
            {
              id: 3,
              username: 'BizGuideBCA',
              source: 'Twitter'
            }
          ];

        }]
      });
    };

  });

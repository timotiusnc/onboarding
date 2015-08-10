'use strict';

angular.module('dsTmApp')
  .service('AccountAddDialog', function($mdDialog, _, SocmedService, $window) {

    this.open = function(targetEvent) {
      return $mdDialog.show({
        targetEvent: targetEvent,
        templateUrl: 'src/shared-services/account-add-dialog/account-add-dialog.html',
        controller: ['$scope', '$mdDialog', function ($scope, $mdDialog) {

          $scope.selected = null;

          $scope.search = {
            source: 'NONE'
          };

          $scope.facebook = function () {
            $scope.search.source = 'NONE';
            var popup = $window.open('facebook-login.html', '_blank', 'width=400,height=300');
            popup.login = function() {
              SocmedService.populateFb();
              popup.close();
              $scope.search.source = 'Facebook';
              $scope.$apply();
            };
          };

          $scope.twitter = function () {
            $scope.search.source = 'NONE';
            var popup = $window.open('twitter-login.html', '_blank', 'width=400,height=300');
            popup.login = function() {
              SocmedService.populateTw();
              popup.close();
              $scope.search.source = 'Twitter';
              $scope.$apply();
            };
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

          $scope.accounts = function() { console.log('called', SocmedService.getAvailable()); return SocmedService.getAvailable(); };

        }]
      });
    };

  });

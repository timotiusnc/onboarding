'use strict';

angular.module('dsTmApp')
  .directive('memberConfig', function() {
    return {
      templateUrl: 'src/shared-directives/member-config/member-config.html',
      restrict: 'E',
      scope: {
      },
      controller: 'MemberConfigCtrl'
    };
  })
  .controller('MemberConfigCtrl', function($scope, _) {

    var newUser = {
      email: '',
      role: '',
      accounts: []
    };

    $scope.users = [];
    $scope.users.push(_.clone(newUser, true));

    $scope.addUser = function () {
      $scope.users.push(_.clone(newUser, true));
    };

  });

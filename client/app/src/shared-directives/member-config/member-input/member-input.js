'use strict';

angular.module('dsTmApp')
  .directive('memberInput', function() {
    return {
      templateUrl: 'src/shared-directives/member-config/member-input/member-input.html',
      restrict: 'E',
      scope: {
        user: '='
      },
      controller: 'MemberInputCtrl'
    };
  })
  .controller('MemberInputCtrl', function($scope, _) {

    var newAccount = {
      id: -1,
      role: '',
    }

    $scope.user.accounts.push(_.clone(newAccount, true));

    $scope.addAccount = function (account) {
      $scope.user.accounts.push(_.clone(newAccount, true));
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

  });

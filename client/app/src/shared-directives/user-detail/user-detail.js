'use strict';

angular.module('dsTmApp')
  .directive('userDetail', function() {
    return {
      templateUrl: 'src/shared-directives/user-detail/user-detail.html',
      restrict: 'E',
      scope: {
      },
      controller: 'UserDetailCtrl'
    };
  })
  .controller('UserDetailCtrl', function($scope, _) {

    $scope.user = {
      id: '700',
      username: 'Bonding James',
      email: 'bonding.james@700.com',
      last_seen: 'July 7, 2007 07:07 AM',
      accounts: [
        {
          id: 1,
          username: 'HaloBCA',
          source: 'Twitter',
          role: 'admin'
        },
        {
          id: 2,
          username: 'BizGuideBCA',
          source: 'Facebook',
          role: 'member'
        },
        {
          id: 3,
          username: 'BizGuideBCA',
          source: 'Twitter',
          role: 'admin'
        }
      ]
    }

  });

'use strict';

angular.module('dsTmApp')
  .directive('userList', function() {
    return {
      templateUrl: 'src/shared-directives/user-list/user-list.html',
      restrict: 'E',
      scope: {
      },
      controller: 'UserListCtrl'
    };
  })
  .controller('UserListCtrl', function($scope, $mdDialog, _) {

    $scope.search = { username: '' };

    $scope.toProperCase = function (str) {
      return _.startCase(str);
    };

    $scope.userClick = function (ev) {
      return $mdDialog.show({
        template: '<md-dialog aria-label="user-detail" class="md-padding"><user-detail></user-detail></md-dialog>',
        targetEvent: ev,
      });
    };

    $scope.users = [
      {
        id: '700',
        username: 'Bonding James',
        email: 'bonding.james@700.com',
        last_seen: 'July 7, 2007 07:07 AM',
        account: {
          id: 1,
          username: 'HaloBCA',
          source: 'Twitter',
          role: 'admin'
        }
      },
      {
        id: '701',
        username: 'Bending James',
        email: 'bonding.james@700.com',
        last_seen: 'July 7, 2007 07:07 AM',
        account: {
          id: 1,
          username: 'HaloBCA',
          source: 'Twitter',
          role: 'admin'
        }
      },
      {
        id: '702',
        username: 'Branding James',
        email: 'bonding.james@700.com',
        last_seen: 'July 7, 2007 07:07 AM',
        account: {
          id: 1,
          username: 'HaloBCA',
          source: 'Twitter',
          role: 'admin'
        }
      },
      {
        id: '703',
        username: 'Bounding James',
        email: 'bonding.james@700.com',
        last_seen: 'July 7, 2007 07:07 AM',
        account: {
          id: 1,
          username: 'HaloBCA',
          source: 'Twitter',
          role: 'admin'
        }
      },
      {
        id: '704',
        username: 'Binding James',
        email: 'bonding.james@700.com',
        last_seen: 'July 7, 2007 07:07 AM',
        account: {
          id: 1,
          username: 'HaloBCA',
          source: 'Twitter',
          role: 'admin'
        }
      },
      {
        id: '705',
        username: 'Breaking James',
        email: 'bonding.james@700.com',
        last_seen: 'July 7, 2007 07:07 AM',
        account: {
          id: 1,
          username: 'HaloBCA',
          source: 'Twitter',
          role: 'admin'
        }
      },
      {
        id: '2323',
        username: 'Breaking James',
        email: 'bonding.james@700.com',
        last_seen: 'July 7, 2007 07:07 AM',
        account: {
          id: 1,
          username: 'HaloBCA',
          source: 'Twitter',
          role: 'admin'
        }
      },
      {
        id: '990',
        username: 'Breaking James',
        email: 'bonding.james@700.com',
        last_seen: 'July 7, 2007 07:07 AM',
        account: {
          id: 1,
          username: 'HaloBCA',
          source: 'Twitter',
          role: 'admin'
        }
      },
      {
        id: '989',
        username: 'Breaking James',
        email: 'bonding.james@700.com',
        last_seen: 'July 7, 2007 07:07 AM',
        account: {
          id: 1,
          username: 'HaloBCA',
          source: 'Twitter',
          role: 'admin'
        }
      },
      {
        id: '678',
        username: 'Breaking James',
        email: 'bonding.james@700.com',
        last_seen: 'July 7, 2007 07:07 AM',
        account: {
          id: 1,
          username: 'HaloBCA',
          source: 'Twitter',
          role: 'admin'
        }
      },
      {
        id: '546',
        username: 'Breaking James',
        email: 'bonding.james@700.com',
        last_seen: 'July 7, 2007 07:07 AM',
        account: {
          id: 1,
          username: 'HaloBCA',
          source: 'Twitter',
          role: 'admin'
        }
      },
      {
        id: '345',
        username: 'Breaking James',
        email: 'bonding.james@700.com',
        last_seen: 'July 7, 2007 07:07 AM',
        account: {
          id: 1,
          username: 'HaloBCA',
          source: 'Twitter',
          role: 'admin'
        }
      },
      {
        id: '45',
        username: 'Breaking James',
        email: 'bonding.james@700.com',
        last_seen: 'July 7, 2007 07:07 AM',
        account: {
          id: 1,
          username: 'HaloBCA',
          source: 'Twitter',
          role: 'admin'
        }
      }
    ];

  });

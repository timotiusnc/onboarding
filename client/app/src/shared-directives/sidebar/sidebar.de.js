'use strict';

angular.module('dsTmApp.components')
  .directive('dsTmSidebar', function() {
    return {
      templateUrl: 'src/shared-directives/sidebar/sidebar.de.html',
      restrict: 'E'
    };
  });

'use strict';

angular.module('dsTmApp.screens')
  .controller('MainLayout', function($scope, $mdUtil, $mdSidenav, $log) {
  	$scope.toggleSidebar = buildToggler('left');

  	function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle();
          },300);
      return debounceFn;
    }
  });

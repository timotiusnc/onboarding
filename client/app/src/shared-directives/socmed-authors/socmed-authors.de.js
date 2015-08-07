'use strict';

angular.module('dsTmApp.components')
  .directive('dsTmSocmedAuthors', function() {
    return {
        templateUrl: 'src/shared-directives/socmed-authors/socmed-authors.de.html',
        restrict: 'E',
        controller: 'SocmedAuthorsCtrl'
    };
  })
  .controller('SocmedAuthorsCtrl', function($scope, _){
    $scope.users = [{name: 'Mark Dolor', role: 'Admin'}, {name: 'Suzan Sit Amet', role: 'Member'}, {name: 'Maria Sit', role: 'Member'}];
    $scope.addUser = addUser;
    $scope.deleteUser = deleteUser;

    function addUser(){
      $scope.users.push({name: 'NewUser' + $scope.users.length, role: 'Member'});
    }

    function deleteUser(name){
      _.remove($scope.users, function(user){
        return user.name === name;
      });
    }
  });
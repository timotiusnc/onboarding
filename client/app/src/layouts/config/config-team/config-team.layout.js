'use strict';

angular.module('dsTmApp.screens')
  .controller('ConfigTeamCtrl', function($state) {
    console.log('team_id', $state.params.team_id);
  });

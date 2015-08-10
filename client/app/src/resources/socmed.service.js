'use strict';

angular.module('dsTmApp')
  .service('TeamService', function() {
    return {
      teams: []
    };
  })
  .service('SocmedService', function(_, TeamService) {
    var fbs = [
      { id: 0, username: 'BizGuide BCA', source: 'Facebook'},
      { id: 1, username: 'Halo BCA', source: 'Facebook'}
    ];
    var tws = [
        { id: 2, username: 'HaloBCA', source: 'Twitter'},
    ];
    var available = [];

    return {
      getOwned: getOwned,
      getAvailable: getAvailable,
      populateFb: populateFb,
      populateTw: populateTw,
    };

    function getAvailable () {
      return available;
    }

    function populateFb () {
      available = _.chain(available).union(fbs).value();
      console.log(available);
    }

    function populateTw () {
      available = _.chain(available).union(tws).value();
      console.log(available);
    }

    function getOwned () {
      return _.chain(TeamService.teams)
              .map(function(t) { return t.socmeds; })
              .union();
    }
  });

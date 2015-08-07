'use strict';

angular.module('dsTmApp')
  .service('TeamService', function() {
    return {
      teams: []
    };
  })
  .service('SocmedService', function(_, TeamService) {
    var available = [
        { id: 0, username: 'BizGuideBCA', source: 'Facebook'},
        { id: 1, username: 'BizGuideBCA', source: 'Twitter'},
        { id: 2, username: 'HaloBCA', source: 'Twitter'},
    ];

    return {
      getOwned: getOwned,
      available: available,
    };

    function getOwned () {
      return _.chain(TeamService.teams)
              .map(function(t) { return t.socmeds; })
              .union();
    }
  });

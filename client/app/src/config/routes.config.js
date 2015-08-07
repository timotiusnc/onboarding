'use strict';

angular
  .module('dsTmApp')
  .constant('TM_stateConst', {
    RT: 'rt',
    WORKSPACE: 'rt.workspace',
    QUEUE: 'rt.queue',
    CONFIG: 'rt.config',
    CONFIG_TEAM: 'rt.config-team',
    ONBOARDING: 'onboarding',
    ONBOARDING_FINISH:'onboardingfinish'
  })
  .config(function ($stateProvider, $urlRouterProvider, TM_stateConst) {
    $urlRouterProvider
      .otherwise('/login');

    // Now set up the states
    $stateProvider
      .state(TM_stateConst.RT, {
        url: '/',
        templateUrl: 'src/layouts/main.layout.html',
        controller: 'MainLayout'
      })
      .state(TM_stateConst.WORKSPACE, {
        url: '^/workspace',
        templateUrl: 'src/layouts/workspace/workspace.layout.html',
        controller: 'WorkspaceLayout'
      })
      .state(TM_stateConst.ONBOARDING, {
        url: '^/onboarding',
        templateUrl: 'src/layouts/onboarding/onboarding.layout.html',
        controller: 'OnboardingLayout'
      })
      .state(TM_stateConst.ONBOARDING_FINISH, {
        url: '/finish',
        templateUrl: 'src/layouts/onboarding-finish/onboarding-finish.layout.html',
        controller: 'OnboardingFinishLayoutCtrl'
      })
      .state(TM_stateConst.CONFIG, {
        url: '^/config',
        templateUrl: 'src/layouts/config/config.layout.html',
        controller: 'ConfigCtrl'
      })
      .state(TM_stateConst.CONFIG_TEAM, {
        url: '^/config/{team_id}',
        templateUrl: 'src/layouts/config/config-team/config-team.layout.html',
        controller: 'ConfigTeamCtrl'
      })
      .state('login', {
        url: '^/login',
        templateUrl: 'src/layouts/login.html',
        controller: 'LoginController'
      });
  });

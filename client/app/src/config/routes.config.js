'use strict';

angular
  .module('dsTmApp')
  .constant('TM_stateConst', {
    RT: 'rt',
    WORKSPACE: 'rt.workspace',
    QUEUE: 'rt.queue',
    ONBOARDING: 'rt.onboarding'
  })
  .config(function ($stateProvider, $urlRouterProvider, TM_stateConst) {
    $urlRouterProvider
      .otherwise('/');

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
      });
  });

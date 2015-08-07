'use strict';

angular
  .module('dsTmApp')
  .constant('TM_stateConst', {
    RT: 'rt',
    WORKSPACE: 'rt.workspace',
    QUEUE: 'rt.queue',
    ONBOARDING: 'onboarding',
    ONBOARDING_FINISH:'onboardingfinish'
  })
  .config(function ($stateProvider, $urlRouterProvider, TM_stateConst) {
    $urlRouterProvider
      .otherwise('/onboarding');

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
      .state('login', {
        url: '^/login',
        templateUrl: 'src/layouts/login.html',
        controller: 'LoginController'
      });
  });

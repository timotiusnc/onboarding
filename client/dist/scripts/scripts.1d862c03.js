"use strict";angular.module("dsTmApp.components",["angularMoment","angular.filter","infinite-scroll","dsTmApp.i18n","ngResource"]),angular.module("dsTmApp.models",["dsTmApp.ext.lodash","angularMoment"]),angular.module("dsTmApp.screens",["dsTmApp.components","ui.router"]),angular.module("dsTmApp.i18n",["pascalprecht.translate"]).constant("TM_lang",{en:"en",id:"id"}),angular.module("dsTmApp.ext.lodash",[]).constant("_",window._),angular.module("dsTmApp.ext.jquery",[]).constant("$",window.$),angular.module("dsTmApp",["ngMaterial","dsTmApp.screens","dsTmApp.models","dsTmApp.components","dsTmApp.i18n","dsTmApp.ext.lodash","dsTmApp.ext.jquery","angucomplete-alt","ngSanitize","ngMessages","ngCookies","infinite-scroll"]).constant("TM_REF",{TWEETS:"https://dazzling-fire-5123.firebaseio.com/tweets",MESSAGES:"https://dazzling-fire-5123.firebaseio.com/messages"}).run(function(){}),angular.module("dsTmApp").config(["$translateProvider","TM_lang",function(a,b){a.preferredLanguage(b.en)}]),angular.module("dsTmApp").config(["$logProvider",function(a){var b="DS_CONF_VAL(LOG_DISABLED)",c=b.indexOf("LOG_DISABLED")>=0,d=c||"true"!==b;a.debugEnabled(d)}]),angular.module("dsTmApp").constant("amTimeAgoConfig",{preprocess:"utc"}),angular.module("dsTmApp").constant("TM_stateConst",{RT:"rt",WORKSPACE:"rt.workspace",QUEUE:"rt.queue",CONFIG:"rt.config",CONFIG_TEAM:"rt.config-team",ONBOARDING:"onboarding",ONBOARDING_FINISH:"onboardingfinish"}).config(["$stateProvider","$urlRouterProvider","TM_stateConst",function(a,b,c){b.otherwise("/login"),a.state(c.RT,{url:"/",templateUrl:"src/layouts/main.layout.html",controller:"MainLayout"}).state(c.WORKSPACE,{url:"^/workspace",templateUrl:"src/layouts/workspace/workspace.layout.html",controller:"WorkspaceLayout"}).state(c.ONBOARDING,{url:"^/onboarding",templateUrl:"src/layouts/onboarding/onboarding.layout.html",controller:"OnboardingLayout"}).state(c.ONBOARDING_FINISH,{url:"/finish",templateUrl:"src/layouts/onboarding-finish/onboarding-finish.layout.html",controller:"OnboardingFinishLayoutCtrl"}).state(c.CONFIG,{url:"^/config",templateUrl:"src/layouts/config/config.layout.html",controller:"ConfigCtrl"}).state(c.CONFIG_TEAM,{url:"^/config/{team_id}",templateUrl:"src/layouts/config/config-team/config-team.layout.html",controller:"ConfigTeamCtrl"}).state("login",{url:"^/login",templateUrl:"src/layouts/login.html",controller:"LoginController"})}]),angular.module("dsTmApp").config(["$compileProvider",function(a){a.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|data):/)}]),angular.module("dsTmApp.i18n").config(["$translateProvider","TM_lang",function(a,b){a.translations(b.en,{})}]),angular.module("dsTmApp.i18n").config(["$translateProvider","TM_lang",function(a,b){a.translations(b.id,{})}]),angular.module("dsTmApp.screens").controller("ConfigTeamCtrl",["$state","$scope","TeamService","SocmedService","AccountAddDialog",function(a,b,c,d,e){b.teams=c.teams,b.accounts=d.available,b.isAuthorShown=!1,b.addAccount=function(){e.open()},b.showAuthor=function(){b.isAuthorShown=!0},console.log("team_id",a.params.team_id)}]),angular.module("dsTmApp.screens").controller("ConfigCtrl",function(){}),angular.module("dsTmApp.screens").controller("LoginController",["$state","TM_stateConst","$scope",function(a,b,c){c.login=function(){a.go(b.ONBOARDING)}}]),angular.module("dsTmApp.screens").controller("MainLayout",["$scope","$mdUtil","$mdSidenav","$log",function(a,b,c,d){function e(a){var d=b.debounce(function(){c(a).toggle()},300);return d}a.toggleSidebar=e("left")}]),angular.module("dsTmApp.screens").controller("OnboardingFinishLayoutCtrl",function(){}),angular.module("dsTmApp.screens").controller("OnboardingLayout",["$scope","TM_stateConst","$state",function(a,b,c){a.curStep="0",a.nextStep=function(){a.curStep++,a.curStep>=3&&c.go(b.ONBOARDING_FINISH)}}]),angular.module("dsTmApp.screens").controller("WorkspaceLayout",["$timeout","$scope","$firebaseObject","$firebaseArray","TM_REF","Firebase",function(a,b,c,d,e,f){function g(){b.isTweetLoading=!0,k.orderByChild("answered").startAt(null).endAt(0).limitToFirst(1).once("child_added",h)}function h(a,d){l=new f(e.TWEETS+"/"+a.key()),b.tweet=c(l),b.tweet.$loaded().then(function(a){b.isTweetLoading=!1,i(a)})["catch"](function(a){console.log(a)})}function i(a){a.answered=1,a.$save()}function j(){b.tweet.answered=2,b.tweet.response=b.response,b.response={name:"",message:""},b.tweet.$save(),g()}var k=new f(e.TWEETS),l=null;b.tweet=null,b.isTweetLoading=!0,b.answerTweet=j,b.response={name:"",message:""},g(),angular.element(window).bind("unload",function(a){1===b.tweet.answered&&(b.tweet.answered=0,b.tweet.$save())}),b.onKpiSave=function(a){console.log(a)}}]),angular.module("dsTmApp").service("TeamService",function(){return{teams:[]}}).service("SocmedService",["_","TeamService",function(a,b){function c(){return a.chain(b.teams).map(function(a){return a.socmeds}).union()}var d=[{id:0,username:"BizGuideBCA",source:"Facebook"},{id:1,username:"BizGuideBCA",source:"Twitter"},{id:2,username:"HaloBCA",source:"Twitter"}];return{getOwned:c,available:d}}]),angular.module("dsTmApp.components").directive("dsTmAccountConfig",function(){return{templateUrl:"src/shared-directives/account-config/account-config.de.html",restrict:"E",controller:"AccountConfigCtrl"}}).controller("AccountConfigCtrl",["$scope","TeamService",function(a,b){a.teams=b.teams}]),angular.module("dsTmApp.components").directive("dsTmTeamSocmedList",function(){return{templateUrl:"src/shared-directives/account-config/team-socmed-list/team-socmed-list.de.html",scope:{team:"="},restrict:"E",controller:"SocmedListCtrl"}}).controller("SocmedListCtrl",["$scope","AccountAddDialog","_","SocmedService",function(a,b,c,d){function e(b){a.team.socmeds=c.reject(a.team.socmeds,b)}function f(){b.open().then(function(b){b&&(a.team.socmeds.indexOf(b)<0&&a.team.socmeds.push(b),d.owned=c.union(d.owned,[b]))})}a.assignAccount=f,a.removeSocmed=e}]),angular.module("dsTmApp.components").directive("dsTmKpiForm",function(){return{templateUrl:"src/shared-directives/kpi-form/kpi-form.de.html",restrict:"E",scope:{onSave:"&"},controller:"KpiFormCtrl"}}).controller("KpiFormCtrl",["$scope",function(a){a.model=[{title:"Handled inquiry",type:"amount",value:0,checked:!1},{title:"Email response time",type:"time",value_min:0,value_sec:0,checked:!1},{title:"Mention response time",type:"time",value_min:0,value_sec:0,checked:!1}],a.getNumber=function(a){for(var b=[],c=0;a>c;++c)b.push(c);return b},a.save=function(){a.onSave({kpis:a.model})}}]),angular.module("dsTmApp").directive("memberConfig",function(){return{templateUrl:"src/shared-directives/member-config/member-config.html",restrict:"E",scope:{},controller:"MemberConfigCtrl"}}).controller("MemberConfigCtrl",["$scope","_",function(a,b){var c={email:"",role:"",accounts:[]};a.users=[],a.users.push(b.clone(c,!0)),a.addUser=function(){a.users.push(b.clone(c,!0))}}]),angular.module("dsTmApp").directive("memberInput",function(){return{templateUrl:"src/shared-directives/member-config/member-input/member-input.html",restrict:"E",scope:{user:"="},controller:"MemberInputCtrl"}}).controller("MemberInputCtrl",["$scope","_","SocmedService",function(a,b,c){var d={id:-1,role:""};a.user.accounts.push(b.clone(d,!0)),a.addAccount=function(){a.user.accounts.push(b.clone(d,!0))},a.deleteAccount=function(b){a.user.accounts.splice(b,1)},a.accounts=function(){return c.owned},a.getAccountType=function(a){return"Twitter"==a.source?"Tw":"Fb"}}]),angular.module("dsTmApp.components").directive("dsTmQueue",function(){return{templateUrl:"src/shared-directives/queue/queue.dea.html",restrict:"EA",scope:{model:"="},controller:"QueueCtrl"}}).controller("QueueCtrl",["$scope","$firebaseArray","TM_REF","Firebase",function(a,b,c,d){var e=new d(c.TWEETS);a.tweets=b(e),a.isTweetLoading=!0,a.tweets.$loaded().then(function(b){a.isTweetLoading=!1})["catch"](function(a){console.log(a)})}]),angular.module("dsTmApp.components").directive("dsTmSidebar",function(){return{templateUrl:"src/shared-directives/sidebar/sidebar.de.html",restrict:"E"}}),angular.module("dsTmApp.components").directive("dsTmSocmedAuthors",function(){return{templateUrl:"src/shared-directives/socmed-authors/socmed-authors.de.html",restrict:"E",controller:"SocmedAuthorsCtrl"}}).controller("SocmedAuthorsCtrl",["$scope","_",function(a,b){function c(){a.users.push({name:"NewUser"+a.users.length,role:"Member"})}function d(c){b.remove(a.users,function(a){return a.name===c})}a.users=[{name:"Mark Dolor",role:"Admin"},{name:"Suzan Sit Amet",role:"Member"},{name:"Maria Sit",role:"Member"}],a.addUser=c,a.deleteUser=d}]),angular.module("dsTmApp").directive("dsTmStepsIndicator",function(){return{templateUrl:"src/shared-directives/steps-indicator/steps-indicator.de.html",restrict:"E",scope:{curStep:"=",numSteps:"="},controller:"StepsIndicatorCtrl"}}).controller("StepsIndicatorCtrl",["$scope","_",function(a,b){a.steps=b.range(a.numSteps)}]),angular.module("dsTmApp.components").directive("dsTmTeamConfig",function(){return{templateUrl:"src/shared-directives/team-config/team-config.de.html",restrict:"E",controller:"TeamConfigCtrl"}}).controller("TeamConfigCtrl",["$scope","TeamInputDialogService","TeamService",function(a,b,c){function d(){b.open().then(function(b){a.teams.push({name:b,socmeds:[]})})}a.showTeamInputDialog=d,a.teams=c.teams}]),angular.module("dsTmApp.components").service("TeamInputDialogService",["$mdDialog",function(a){this.open=function(b){return a.show({templateUrl:"src/shared-directives/team-config/team-input-dialog/team-input-dialog.de.html",targetEvent:b,controller:"TeamInputDialogCtrl"})}}]).controller("TeamInputDialogCtrl",["$scope","$mdDialog",function(a,b){a.teamName="",a.onCreated=function(){b.hide(a.teamName)}}]),angular.module("dsTmApp.components").directive("dsTmTeamList",function(){return{templateUrl:"src/shared-directives/team-config/team-list/team-list.de.html",scope:{teams:"="},restrict:"E",controller:"TeamListCtrl"}}).controller("TeamListCtrl",["$scope",function(a){function b(b){var c=a.teams.indexOf(b);a.teams.splice(c,1)}a.removeTeam=b}]),angular.module("dsTmApp.components").directive("dsTmTweet",function(){return{templateUrl:"src/shared-directives/tweet/tweet.dea.html",restrict:"EA",scope:{model:"=",showCtrl:"@"},controller:"TweetCtrl"}}).controller("TweetCtrl",["$scope","$firebaseObject","$firebaseArray","TM_REF","Firebase",function(a,b,c,d,e){a.makeUnanswered=function(a){var b=new e(d.TWEETS+"/"+a.$id);b.update({answered:0})},a.makeAnswered=function(a){var b=new e(d.TWEETS+"/"+a.$id);b.update({answered:2})},a.isAnswered=function(){return a.model&&a.model.answered&&2===a.model.answered},a.isBeingAnswered=function(){return a.model&&a.model.answered&&1===a.model.answered}}]),angular.module("dsTmApp").directive("userDetail",function(){return{templateUrl:"src/shared-directives/user-detail/user-detail.html",restrict:"E",scope:{},controller:"UserDetailCtrl"}}).controller("UserDetailCtrl",["$scope","_",function(a,b){a.user={id:"700",username:"Bonding James",email:"bonding.james@700.com",last_seen:"July 7, 2007 07:07 AM",accounts:[{id:1,username:"HaloBCA",source:"Twitter",role:"admin"},{id:2,username:"BizGuideBCA",source:"Facebook",role:"member"},{id:3,username:"BizGuideBCA",source:"Twitter",role:"admin"}]}}]),angular.module("dsTmApp").service("AccountAddDialog",["$mdDialog","_","SocmedService",function(a,b,c){this.open=function(b){return a.show({targetEvent:b,templateUrl:"src/shared-services/account-add-dialog/account-add-dialog.html",controller:["$scope","$mdDialog",function(a,b){a.selected=null,a.search={source:"Facebook"},a.facebook=function(){a.search.source="Facebook"},a.twitter=function(){a.search.source="Twitter"},a.select=function(b){a.selected=b},a.add=function(){return b.hide(a.selected)},a.close=function(){return b.hide()},a.accounts=c.available}]})}}]),angular.module("dsTmApp.components").constant("TM_Keycode",{SPACE:32,ENTER:13}),angular.module("dsTmApp.models").factory("Loadable",["_","$q",function(a,b){var c=function(a){this._val=a,this._lastPromise=b.when(a),this._lastPromise.done=!0,this._err=null,this._isErr=!1};c.prototype.isPending=function(){return!this._lastPromise.done},c.prototype.error=function(a){return this._err=void 0===a?this._err:a,this._err},c.prototype.asPromise=function(b){return this._lastPromise.then(function(d){return b&&a.isArray(d)?c.resolveLoadables(d,b):d})},c.prototype.value=function(a){return this._val=void 0===a?this._val:a,this._val},c.prototype.isError=function(a){return this._isErr=void 0===a?this._isErr:a,this._isErr},c.prototype.then=function(a){return this._lastPromise=this._lastPromise.then(a).then(d(this))["catch"](e(this)),this._lastPromise["finally"](f(this._lastPromise)),this},c.prototype.nthen=function(a){var b=this;return this._lastPromise=this._lastPromise["catch"](function(){return b.value()}),this.then(a)},c.prototype["catch"]=function(a){return this._lastPromise=this._lastPromise["catch"](a)["catch"](e(this)).then(d(this)),this._lastPromise["finally"](f(this._lastPromise)),this},c.prototype.ifnThen=function(a){return this.isPending()?this:this.nthen(a)},c.toLoadables=function(b){return a.map(b,function(a){return new c(a)})},c.resolveLoadables=function(c,d){var e=a.map(c,function(b){return(b.asPromise||a.constant(b)).bind(b)(d)});return b.all(e)};var d=function(a){return function(b){return a.isError(!1),a.value(b)}},e=function(a){return function(c){return a.isError(!0),b.reject(a.error(c))}},f=function(a){return function(){a.done=!0}};return c}]),angular.module("dsTmApp.components").service("Logger",["$log","TmToastT","$translate",function(a,b,c){this.logSuccess=function(a){return function(c){return angular.isObject(a)?b.succ(a.message,a.params):a&&b.succ(a),c}},this.logError=function(d){return function(e){throw angular.isObject(d)?(a.debug(c.instant(d.message,d.params),e),b.err(d.message,d.params)):(a.debug(d,e),b.err(d)),e}},this.log=function(a,b,c){return a.then(this.logSuccess(b))["catch"](this.logError(c))}}]),angular.module("dsTmApp").service("UserDetailDialog",["$mdDialog","_","SocmedService",function(a,b,c){this.open=function(b){return a.show({targetEvent:b,templateUrl:"src/shared-services/user-detail-dialog/user-detail-dialog.html",controller:["$scope","$mdDialog",function(a,b){a.close=function(){b.hide()}}]})}}]),angular.module("dsTmApp").run(["$templateCache",function(a){a.put("src/layouts/config/config-team/config-team.layout.html",'<div layout="column" layout-padding class="config-team"> <h2 flex>Configuration > Socmed BCA</h2> <md-content flex class="md-padding"> <md-tabs md-dynamic-height md-border-bottom> <md-tab label="Set KPI"> <md-content class="md-padding"> <ds-tm-kpi-form></ds-tm-kpi-form> </md-content> </md-tab> <md-tab label="Account Informations"> <md-content class="md-padding" layout="row"> <div flex="25"> <md-button ng-click="addAccount()"> <i class="fa fa-plus"></i> New Account </md-button> <md-list> <div ng-repeat="account in accounts | filter: search"> <md-list-item class="md-3-line socmed" ng-class="{ socmed__selected: selected.id === account.id }" ng-click="showAuthor()"> <img ng-src="http://placehold.it/50x50" class="md-avatar"> <div class="md-list-item-text"> <h3>{{ account.username }}</h3> <h4>{{ account.source }}</h4> </div> </md-list-item> </div> </md-list> </div> <div flex="75" ng-show="isAuthorShown"> <ds-tm-socmed-authors></ds-tm-socmed-authors> </div> </md-content> </md-tab> <md-tab label="Users"> <md-content class="md-padding"> ds-tm-user-list-search ds-tm-user-detail </md-content> </md-tab> </md-tabs> </md-content> </div>'),a.put("src/layouts/config/config.layout.html",'<div layout="row" layout-padding> <div flex="25">ds-tm-user-list-search</div> <div flex="75"> <h2>Configuration</h2> <div layout="row"> <md-card flex> <md-card-content> <md-button ui-sref="rt.config-team">CS BCA</md-button> </md-card-content> </md-card> <md-card flex> <md-card-content> <md-button ui-sref="rt.config-team">Social Media BCA</md-button> </md-card-content> </md-card> <md-card flex> <md-card-content align="center"> <md-button ui-sref="rt.config-team"><i class="fa fa-plus fa-2x"></i></md-button> </md-card-content> </md-card> </div> </div> </div>'),a.put("src/layouts/login.html",'<div layout="column" align="center" layout-align="center"> <div layout="column" align="center"> <h1 style="margin-bottom: 0">Your Social Media Management</h1> <h3 style="margin-top: 0">Manage multiple social media accounts in one place, collaboratively</h3> </div> <div layout="column"> <h2>Login</h2> <div layout="row" layout-align="center"> <md-button class="md-raised md-primary" ng-click="login()">Facebook</md-button> <md-button class="md-raised md-primary" ng-click="login()">Twitter</md-button> <md-button class="md-raised md-primary" ng-click="login()">Email</md-button> </div> </div> </div>'),a.put("src/layouts/main.layout.html",'<div layout="column"> <md-toolbar> <div class="md-toolbar-tools"> <md-button class="home-btn md-icon-button" aria-label="Settings" ng-click="toggleSidebar()"> <i class="material-icons">menu</i> </md-button> <h2> <span>ombaQ</span> </h2> </div> </md-toolbar> <div layout="row" flex> <ds-tm-sidebar></ds-tm-sidebar> <md-content flex layout-padding ui-view></md-content> </div> </div>'),a.put("src/layouts/onboarding-finish/onboarding-finish.layout.html",'<div layout="row" layout-align="center"> <div layout="column" layout-align="center"> <h1>Emails are sent successfully!</h1> <p>You are now ready to use ombaQ</p> <hr> <md-button class="md-raised md-primary">Start ombaQ!</md-button> <hr> </div> </div>'),a.put("src/layouts/onboarding/onboarding.layout.html",'<div layout="row" layout-align="center"> <div layout="column" layout-margin layout-align="center"> <div layout="row" layout-align="center" layout-margin> <span>Hello, Imam! Before you start on the journey, please configure your team first. You\'ll find it easier to track them later!</span> </div> <div layout="row" layout-align="center" layout-margin> <ds-tm-steps-indicator num-steps="3" cur-step="curStep"> </ds-tm-steps-indicator> </div>  <div layout="column" ng-if="curStep == 0"> <h3>Team Configuration</h3> <ds-tm-team-config></ds-tm-team-config> </div> <div layout="column" ng-if="curStep == 1"> <h3>Account Configuration</h3> <ds-tm-account-config></ds-tm-account-config> </div> <div layout="column" ng-if="curStep == 2"> <h3>Member Configuration</h3> <member-config></member-config> </div>   <div layout="row" layout-align="end center"> <md-button class="md-raised md-primary" ng-click="nextStep()">Next</md-button> </div> </div> </div>'),a.put("src/layouts/workspace/workspace.layout.html",'<ds-tm-steps-indicator num-steps="3" cur-step="0"> </ds-tm-steps-indicator> <ds-tm-kpi-form on-save="onKpiSave(kpis)"></ds-tm-kpi-form>'),a.put("src/shared-directives/account-config/account-config.de.html",'<div layout="row" flex> <div layout="column" ng-repeat="team in teams"> <ds-tm-team-socmed-list team="team"></ds-tm-team-socmed-list> </div> </div>'),a.put("src/shared-directives/account-config/team-socmed-list/team-socmed-list.de.html",'<md-card> <div>{{team.name}}</div> <md-button class="md-raised" ng-click="assignAccount()">Assigned Account +</md-button> </md-card> <div ng-repeat="socmed in team.socmeds"> <span>{{socmed.username}}</span> <md-button ng-click="removeSocmed(socmed)">X</md-button> </div>'),a.put("src/shared-directives/kpi-form/kpi-form.de.html",'<div layout="row" layout-wrap ng-repeat="kpi in model"> <div flex="50"> <md-checkbox ng-model="kpi.checked" aria-label="kpi.title"> {{kpi.title}} </md-checkbox> </div> <div flex="50" ng-switch="kpi.type"> <div layout="row" ng-switch-when="amount"> <md-select ng-model="kpi.value" placeholder="Amount"> <md-option ng-repeat="val in getNumber(60) track by $index" value="{{val}}">{{val}} per person</md-option> </md-select> </div> <div layout="row" ng-switch-when="time"> <md-select ng-model="kpi.value_min" placeholder="Amount" flex="50"> <md-option ng-repeat="val in getNumber(60) track by $index" value="{{val}}">{{val}} min</md-option> </md-select> <md-select ng-model="kpi.value_sec" placeholder="Amount" flex="50"> <md-option ng-repeat="val in getNumber(60) track by $index" value="{{val}}">{{val}} sec</md-option> </md-select> </div> </div> </div> <div layout="row" layout-align="end center"> <md-button class="md-raised md-primary" ng-click="save()">Save Changes</md-button> </div>'),a.put("src/shared-directives/member-config/member-config.html",'<div layout="column"> <div ng-repeat="user in users track by $index" layout-align="center" flex> <member-input user="user"></member-input> <md-divider> </div> <div style="margin: 16px auto"> <md-button class="md-primary" ng-click="addUser()">Add More User</md-button> </div> </div>'),a.put("src/shared-directives/member-config/member-input/member-input.html",'<div layout="row" layout-padding> <div flex="40"> <md-input-container> <label>Add Email</label> <input ng-model="user.email" type="email"> </md-input-container> </div> <div layout="column" flex="60"> <div layout="row" ng-repeat="userAccount in user.accounts track by $index" layout-align="space-between"> <md-select placeholder="Assigned Accounts" ng-model="userAccount.id" style="padding-bottom: 8px; padding-right: 16px"> <md-option ng-repeat="account in accounts()" value="{{ account.id }}">[{{getAccountType(account)}}] {{ account.username }}</md-option> </md-select> <md-select placeholder="Choose Role" ng-model="userAccount.role" style="padding-bottom: 8px"> <md-option value="admin">Admin</md-option> <md-option value="member">Member</md-option> </md-select> <md-button class="md-warn" ng-click="deleteAccount($index)"><strong>X</strong></md-button> </div> <div style="margin-top: 16px"> <md-button class="md-primary" ng-click="addAccount()">Add More Account</md-button> </div> </div> </div>'),a.put("src/shared-directives/queue/queue.dea.html",'<ul class="col s12 collection"> <li class="collection-item" ng-show="isTweetLoading"> Loading queue(s)... </li> <li class="collection-item avatar" ng-repeat="tweet in tweets" ds-tm-tweet model="tweet" show-ctrl="true"> </li> </ul>'),a.put("src/shared-directives/sidebar/sidebar.de.html",'<md-sidenav class="md-sidenav-left md-whiteframe-z2" md-component-id="left" md-is-locked-open="$mdMedia(\'gt-md\')"> <md-content layout-padding layout-align="center" layout="column" flex> <a flex ui-sref="rt.config"><span>STREAM</span></a> <md-divider></md-divider> <a flex ui-sref="rt.config">PUBLISH</a> <md-divider></md-divider> <a flex ui-sref="rt.config">INSIGHT</a> <md-divider></md-divider> <a flex ui-sref="rt.config">CONFIG</a> <md-divider></md-divider> <md-content layout="row" layout-align="center center" flex><img src="images/sidebar-icon.png"></md-content> </md-content> </md-sidenav>'),a.put("src/shared-directives/socmed-authors/socmed-authors.de.html",'<div layout="column"> <div layout="row" layout-align="start center"> <span flex>@Bizguide BCA</span> <md-button flex ng-click="addUser()"> <img src="images/add-user.png"> </md-button> </div> <div ng-repeat="user in users"> <div layout="row" flex> <div flex layout="row" layout-align="start center"> <span>{{user.name}}</span> </div> <div layout="column" flex> <md-select placeholder="{{user.role}}" ng-model="user.role"> <md-option value="Admin">Admin</md-option> <md-option value="Member">Member</md-option> </md-select> <a href="">Save changes</a> </div> <md-button flex ng-click="deleteUser(user.name)"> <img src="images/delete.png"> </md-button> </div> </div> </div>'),a.put("src/shared-directives/steps-indicator/steps-indicator.de.html",'<span ng-repeat="n in steps"> <md-button class="md-fab md-mini" ng-disabled="n != curStep"> {{ n+1 }} </md-button> <div style="display:inline-block; width: 100px; border: 1px solid #cccccc" ng-if="!$last"></div> </span>'),a.put("src/shared-directives/team-config/team-config.de.html",'<div layout="column"> <div flex> <md-button class="md-raised" ng-click="showTeamInputDialog()">Add Team Name +</md-button> <ds-tm-team-list teams="teams"></ds-tm-team-list> </div> </div>'),a.put("src/shared-directives/team-config/team-input-dialog/team-input-dialog.de.html",'<md-dialog> <md-content> <md-input-container flex> <label>Team Name</label> <input ng-model="teamName"> </md-input-container> <div layout="row" layout-align="end center"> <md-button class="md-primary" ng-click="onCreated(teamName)">Add Team</md-button> </div> </md-content> </md-dialog>'),a.put("src/shared-directives/team-config/team-list/team-list.de.html",'<div ng-repeat="team in teams"> <span>{{team.name}}</span> <md-button ng-click="removeTeam(team)">X</md-button> </div>'),a.put("src/shared-directives/tweet/tweet.dea.html",'<img ng-src="{{model.user.profile_image_url_https}}" alt="" class="circle"> <div class="title">{{model.user.screen_name}}</div> <small>{{model.created_at}}</small> <p>{{model.text}}</p> <div><small ng-show="{{showCtrl}}">Responded by: {{model.response.name}}</small></div> <div><small ng-show="{{showCtrl}}">Response: {{model.response.message}}</small></div> <a class="waves-effect waves-light btn" ng-click="makeAnswered(model)" ng-show="!isBeingAnswered() && !isAnswered() && {{showCtrl}}"> Answer </a> <a class="waves-effect waves-light btn disabled" ng-show="isBeingAnswered() && {{showCtrl}}"> In progress </a> <a class="waves-effect waves-light btn" ng-click="makeUnanswered(model)" ng-show="isAnswered() && {{showCtrl}}"> Un-answer </a>'),a.put("src/shared-directives/user-detail/user-detail.html",'<div layout="column" flex> <div style="padding: 8px"> <span style="font-weight: 500">Email: </span>{{ user.email }} </div> <div layout="row" style="padding: 8px" flex> <div layout="column" flex="50"> <div style="font-weight: 500">Login with:</div> <div>{{ user.email }}</div> </div> <div layout="column" flex="50" align="right"> <div style="font-weight: 500">Last seen:</div> <div>{{ user.last_seen }}</div> </div> </div> <div flex> <div layout="column" ng-repeat="userAccount in user.accounts track by $index" style="padding: 0px 8px" flex> <div layout="row" flex> <div flex="5" style="padding: 8px"> <i class="fa" ng-class="{ \'fa-facebook-square\': userAccount.source === \'Facebook\', \'fa-twitter-square\': userAccount.source === \'Twitter\' }"></i> </div> <div flex="90" style="padding: 8px">{{ userAccount.username }}</div> <div flex="5" style="padding: 8px"><a href=""><i class="fa fa-trash-o"></i></a></div> </div> <md-divider></md-divider> <div layout="row" layout-align="end center"> <div flex="50" align="right">{{ user.username }}</div> <div flex="25" align="right" style="margin: 8px"> <select ng-model="userAccount.role"> <option value="admin">Admin <option value="cs">CS <option value="member">Member </select> </div> </div> <div layout="row" layout-align="end center"> <div> <md-button>Save Change</md-button> </div> </div> </div> </div> </div>'),a.put("src/shared-services/account-add-dialog/account-add-dialog.html",'<md-dialog style="width: 60%"> <form> <md-toolbar> <div class="md-toolbar-tools"> <h2>Add Account</h2> <span flex></span> <md-button class="md-icon-button" ng-click="close()"> <strong>X</strong> </md-button> </div> </md-toolbar> <md-dialog-content> <div layout="column"> <div layout="row" layout-align="center"> <md-button ng-class="{ \'md-primary\': search.source === \'Facebook\' }" ng-click="facebook()">Add Facebook Page</md-button> <md-button ng-class="{ \'md-primary\': search.source === \'Twitter\' }" ng-click="twitter()">Add Twitter Account</md-button> </div> <div layout="column"> <md-input-container> <label>Search</label> <input ng-model="search.username" type="text"> </md-input-container> <md-list> <div ng-repeat="account in accounts | filter: search"> <md-list-item class="md-3-line socmed" ng-class="{ socmed__selected: selected.id === account.id }" ng-click="select(account)"> <img ng-src="http://placehold.it/50x50" class="md-avatar"> <div class="md-list-item-text"> <h3>{{ account.username }}</h3> <h4>{{ account.source }}</h4> </div> </md-list-item> </div> </md-list> </div> </div> </md-dialog-content> <div class="md-actions" layout="row"> <md-button class="md-primary" ng-click="add()">Add</md-button> </div> </form> </md-dialog>'),a.put("src/shared-services/user-detail-dialog/user-detail-dialog.html",'<md-dialog style="width: 60%"> <user-detail></user-detail> </md-dialog>')}]);
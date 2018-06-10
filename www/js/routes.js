angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('homesick', {
    url: '/page1',
    templateUrl: 'templates/homesick.html',
    controller: 'homesickCtrl'
  })

  .state('homesick2', {
    url: '/page2',
    templateUrl: 'templates/homesick2.html',
    controller: 'homesick2Ctrl'
  })

  .state('homesick3', {
    url: '/page3',
    templateUrl: 'templates/homesick3.html',
    controller: 'homesick3Ctrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('editProfile', {
    url: '/EditProfile',
    templateUrl: 'templates/editProfile.html',
    controller: 'editProfileCtrl'
  })

  .state('signupFinish', {
    url: '/page7',
    templateUrl: 'templates/signupFinish.html',
    controller: 'signupFinishCtrl'
  })

  .state('homesick4', {
    url: '/page11',
    templateUrl: 'templates/homesick4.html',
    controller: 'homesick4Ctrl'
  })

  .state('homesick5', {
    url: '/page10',
    templateUrl: 'templates/homesick5.html',
    controller: 'homesick5Ctrl'
  })

  .state('mapsExample', {
    url: '/page8',
    templateUrl: 'templates/mapsExample.html',
    controller: 'mapsExampleCtrl'
  })

  .state('homesick6', {
    url: '/page12',
    templateUrl: 'templates/homesick6.html',
    controller: 'homesick6Ctrl'
  })

  .state('homesick7', {
    url: '/page9',
    templateUrl: 'templates/homesick7.html',
    controller: 'homesick7Ctrl'
  })

  .state('homesick8', {
    url: '/page13',
    templateUrl: 'templates/homesick8.html',
    controller: 'homesick8Ctrl'
  })

  .state('homesick9', {
    url: '/page14',
    templateUrl: 'templates/homesick9.html',
    controller: 'homesick9Ctrl'
  })

  .state('homeSickChat', {
    url: '/page17',
	params: {
		usuariotelefono: ""		
},
    templateUrl: 'templates/homeSickChat.html',
    controller: 'homeSickChatCtrl'
  })

$urlRouterProvider.otherwise('/page5')


});
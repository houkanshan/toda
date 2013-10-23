require.config({
  paths: {
    angular: '../bower_components/angular/angular'
  }
, shim: {
    angular: {
      exports: 'angular'
    }
  }
})

require([
  'angular'
, 'app'
, 'controllers/main'
, 'directives/keypress'
], function (angular) {
  angular.bootstrap(document, ['todaApp'])
})

define([
  'app'
], function(app) {
  app.directive('ng-keypress', function() {
    console.log('actived!!')
    return function(scope, elem, attrs) {
      elem.bind('keypress', function(e) {
        scope.$apply(attrs.keypress)
      })
    }
  })
})

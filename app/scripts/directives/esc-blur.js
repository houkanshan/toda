define([
  'angular'
, 'app'
], function(angular, app){
  app.directive('escBlur', function () {
    return {
      restrict: 'A'
    , link: function (scope, elem, attr) {
        elem.bind('keyup', function (e) {
          if (e.keyCode === 27) {
            elem[0].blur()
          }
        })
      }
    }
  })
})

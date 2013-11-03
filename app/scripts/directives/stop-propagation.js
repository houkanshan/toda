define([
  'angular'
, 'app'
], function(angular, app){
  app.directive('stopPropagation', function () {
    return {
      restrict: 'A'
    , link: function (scope, elem, attr) {
        elem.bind(attr.stopPropagation, function (e) {
            e.stopPropagation()
        })
      }
    }
  })
})

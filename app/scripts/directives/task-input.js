define([
  'angular'
, 'app'
], function(angular, app){
  app.directive('taskInput', function () {
    return {
      restrict: 'A'
    , scope: {
        task: '='
      }
    , link: function(scope, elem, attr) {
        elem.bind('keyup', function (e) {
          if (e.keyCode === 27) {
            elem[0].blur()
            scope.task.isEdit = false
          }
        })

        scope.$watch('task.isEdit', function(newVal, oldVal) {
          if (newVal === true) {
            elem[0].focus()
          }
        })

        scope.$watch('task.isFocus', function(newVal, oldVal) {
          // check blur ( needless work )
          if(scope.task.isFocus) {
            elem[0].focus()
          } else {
            elem[0].blur()
          }
        })
      }
    }
  })
})

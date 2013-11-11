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
          // esc
          if (e.keyCode === 27) {
            // use $apply to force update
            scope.$apply(function() {
              elem[0].blur()
              scope.task.isEdit = false
            })
          }
        })

        scope.$watch('task.isEdit', function(newVal, oldVal) {
          console.log('watched!', newVal)
          if (newVal === true) {
            elem[0].focus()
          }
        })
        console.log('now edit:', scope.task.isEdit)

        scope.$watch('task.isFocus', function(newVal, oldVal) {
          if(scope.task.isFocus) {
            elem[0].focus()
          }
        })
      }
    }
  })
})

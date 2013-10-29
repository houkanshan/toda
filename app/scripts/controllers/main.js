define([
  'angular'
, 'services/tasks'
], function(angular) {
  function FocusModel(todos) {
    this.todos = todos
    this.focusIndex = 0
  }
  FocusModel.prototype = {
    focusNext: function() {
      this.focusTo(this.focusIndex + 1)
    }
  , focusPrev: function() {
      this.focusTo(this.focusIndex - 1)
    }
  , focusTo: function(i) {
      var length = this.todos.length
      if (i >= length - 1) {
        this.focusIndex = length
        return
      }
      if (i < 0){
        this.focusIndex = 0
        return
      }
      this.focusIndex = i
    }
  }

  angular.module('todaApp')
    .controller('MainCtrl', function ($scope, $rootScope, tasksService) {
      $scope.tasks = tasksService.get()
      $rootScope.focusModel = $scope.focusModel
        = new FocusModel($scope.tasks.todos)

      $scope.$watch('tasks.todos', function(newVal, oldVal) {
        // some statistics work
        tasksService.save()
      }, true)

      $scope.$watch('focusModel.focusIndex', function(newVal, oldVal) {
        if(newVal === oldVal) { return }
        $scope.tasks.focus(newVal)
      })
    })
})

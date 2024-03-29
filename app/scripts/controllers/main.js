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
      if (i > length - 1) {
        this.focusIndex = length - 1
        return
      }
      if (i < 0){
        this.focusIndex = 0
        return
      }
      this.focusIndex = i
    }
  }

  function TodaHandler(tasks, focusModel) {
    this.tasks = tasks
    this.todos = tasks.todos
    this.focusModel = focusModel
  }
  TodaHandler.prototype = {
    insert: function() {
      console.log('insert')
      this.getFocus().isEdit = true
    }
  , normal: function() {
      this.getFocus().isEdit = false
      //this.clearSelect()
    }
  , select: function() {
      this.getFocus.isSelect = true
    }
  , clearSelect: function() {
      this.todos.forEach(function(i, e) {
        e.isSelect = false
      })
    }
  , getFocus: function() {
      return this.todos[this.focusModel.focusIndex]
    }
  , appendTask: function() {
      var task = this.tasks.insertTask(this.focusModel.focusIndex)
      task.isEdit = true
    }
  , removeTask: function() {
      console.log('remove')
      this.tasks.removeTask(this.todos[this.focusModel.focusIndex])
    }
  }

  angular.module('todaApp')
    .controller('MainCtrl', function ($scope, $rootScope, tasksService) {
      $scope.tasks = tasksService.get()
      $rootScope.focusModel = $scope.focusModel
        = new FocusModel($scope.tasks.todos)

      $rootScope.todaHandler = $scope.todaHandler
        = new TodaHandler($scope.tasks, $scope.focusModel)

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

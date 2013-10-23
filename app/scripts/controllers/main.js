define([
  'angular'
, 'services/todoStorage'
], function(angular) {
  var Task = function() {
    return {
      isDone: false
    , isEdit: false
    , isFocus: false
    , isSelect: false
    , isLeft: false
    , isRight: false
    , text: ''
    }
  }
  var taskMethod = {
    addTask: function() {
      // TODO: validate
      this.todos.push(this.newTask)
      this.newTask = new Task()
    }
  , completeTask: function(task) {
      task.isDone = true
    }
  , removeTask: function(task) {
      this.todos.splice(this.todos.indexOf(task), 1)
    }
  , checkEmtpyAndRemove: function(task) {
      if (task.text.trim().length) { return }
      this.removeTask(task)
    }
  }

  var viewMethods = {
    focusNext: function() {
      this.focusTo(this.focusIndex + 1)
    }
  , focusPrev: function() {
      this.focusTo(this.focusIndex - 1)
    }
  , focusTo: function(i) {
      console.log(i)
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
      console.log(this.focusIndex)
    }
  }

  angular.module('todaApp')
    .controller('MainCtrl', function ($scope, todoStorage) {
      var todos = $scope.todos = todoStorage.get()
      this.focusIndex = 0

      $scope.$watch('todos', function(newVal, oldVal) {
        // some statistics work
        todoStorage.set(todos)
      }, true)

      angular.extend($scope, taskMethod, viewMethods)
    })
})

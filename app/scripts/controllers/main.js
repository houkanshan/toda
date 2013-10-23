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
    keyPress: function($event) {
      console.log($event)
    }
  }

  angular.module('todaApp')
    .controller('MainCtrl', function ($scope, todoStorage) {
      var todos = $scope.todos = todoStorage.get()

      $scope.$watch('todos', function(newVal, oldVal) {
        // some statistics work
        todoStorage.set(todos)
      }, true)

      angular.extend($scope, taskMethod, {
        view: viewMethods
      })
    })
})

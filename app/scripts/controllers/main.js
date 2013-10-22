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
  angular.module('todaApp')
    .controller('MainCtrl', function ($scope, todoStorage) {
      var todos = $scope.todos = todoStorage.get()
      var newTask = new Task()

      $scope.$watch('todos', function(newVal, oldVal) {
        // some statistics work
        todoStorage.set(todos)
      }, true)

      $scope.addTask = function() {
        // TODO: validate
        todos.push(newTask)
        newTask = new Task()
      }

      $scope.completeTask = function(task) {
        task.isDone = true
      }

      $scope.removeTask = function(task) {
        todos.splice(todos.indexOf(task), 1)
      }

    })
})

define([
  'angular'
, 'services/todoStorage'
], function(angular) {
  var Task = function(text) {
    text = text || ''
    return {
      isDone: false
    , isEdit: false
    , isFocus: false
    , isSelect: false
    , isLeft: false
    , isRight: false
    , text: text
    }
  }

  function Tasks(tasks) {
    tasks = tasks || {}
    this.todos = tasks.todos || []
    this.newTask = tasks.newTask || new Task()
  }
  Tasks.prototype = {
    constructor: Tasks.prototype.constructor
  , insertTask: function(index, text) {
      // TODO: validate
      var newTask = new Task(text)
      this.todos.splice(index, 0, newTask)
      return newTask
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
  , focus: function(focusIndex) {
      if (this.focusingTask) {
        this.focusingTask.isFocus = false
      }
      this.focusingTask = this.todos[focusIndex]
      this.focusingTask.isFocus = true
    }
  }

  angular.module('todaApp').service('tasksService', function(todoStorage) {
    var tasks = new Tasks(todoStorage.get())
    return {
      get: function() {
        return tasks
      }
    , save: function() {
        todoStorage.set(tasks)
      }
    }
  })
})

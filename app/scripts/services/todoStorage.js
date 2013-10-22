define([
  'angular'
], function(angular) {
  angular.module('todaApp')
  .factory('todoStorage', function() {
    var KEY = 'toda'
    return {
      get: function() {
        return JSON.parse(localStorage.getItem(KEY) || '[]')
      }
    , set: function(data) {
        localStorage.setItem(KEY, JSON.stringify(data))
      }
    }
  })
})

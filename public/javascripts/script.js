var app = angular.module('Todo', []);
app.controller('TodoCtrl', function($scope) {
  $scope.newTodo = '';
  $scope.todos = [];
  $scope.done = function(todo) {
    var indexOf = $scope.todos.indexOf(todo);
    if (indexOf !== -1) {
      $scope.todos.splice(indexOf, 1);
    }
  };
  $scope.add = function(x) {
    if (x.which && x.which === 13) {
      $scope.todos.push($scope.newTodo);
      $scope.newTodo = '';
    }  
  };
});
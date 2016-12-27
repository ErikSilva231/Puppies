angular.module('starter.controllers', [])


.controller('TodosCtrl', function ($scope, Todos) {
  $scope.Todos = Todos
})

.controller('TodoDetailCtrl', function  ($scope) {
  $scope.x = 'x'
})


.controller('AccountCtrl', function ($scope) {
  $scope.settings = {
    enableFriends: true
  }

})

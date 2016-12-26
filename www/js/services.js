angular.module('starter.services', [])

.service('Todos', function Todos() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  this.data = [{
    id: 0,
    desc: 'Ir al super',
    completado: false
  }, {
    id: 1,
    desc: 'Limpiar el bano',
    completado: false
  }, {
    id: 2,
    desc: 'Pasar a verla',
    completado: false

  }];
  this.all = function all () {
    return this.data
  }

  this.remove = function remove (todo) {
      this.data.splice(this.data.indexOf(todo), 1);.
  }

  this.get = function get (id) {
    var todo = {}
    this.data.map(function  (el) {
      if (el.id == id) {
        todo = el
      }
    })
    return todo
  }
})

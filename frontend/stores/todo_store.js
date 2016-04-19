var _todos = {};
var _callbacks = [];

var TodoStore = {
  changed: function () {
    _callbacks.forEach(function (callback) {
      callback();
    });
  },
  addChangedHandler: function(cb){
    _callbacks.push(cb);
  },
  removeChangedHandler: function(cb){
    var index = _callbacks.indexOf(cb);
    _callbacks.splice(index, 1);
  },
  all: function(){
    return _todos;
  },
  parseResponse: function(responses){
    responses.forEach(function(response){
      _todos[response.id] = response;
    });
    TodoStore.changed();
  },
  fetch: function(){
    $.ajax({
      url: "/api/todos",
      dataType: "json",
      success: TodoStore.parseResponse
    });
  },
  create: function(todo){
    $.ajax({
      url: "/api/todos",
      method: "POST",
      data: {todo: todo},
      dataType: "json",
      success: function(response){
        _todos[response.id] = response;
        TodoStore.changed();
      }
    });
  },
  destroy: function(id){
    if (_todos[id]){
      $.ajax({
        url: "/api/todos/" + id,
        method: "DELETE",
        dataType: "json",
        success: function(todo){
          delete _todos[todo.id];
          TodoStore.changed();
        }
      });
    } else {
      return false;
    }
  },

  toggleDone: function(id) {
    $.ajax({
      url: "/api/todos/" + id,
      method: "PATCH",
      dataType: "json",
      data: {todo: {done: !_todos[id].done}},
      success: function (todo) {
        _todos[todo.id] = todo;
        TodoStore.changed();
      }
    });
  }


};



module.exports = TodoStore;

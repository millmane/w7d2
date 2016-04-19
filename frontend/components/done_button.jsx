var React = require('react');
var TodoStore = require('../stores/todo_store.js');
var DoneButton = React.createClass({

  render: function() {
    var todo = this.props.todo;
    return (
      <button onClick={this.handleDone}>{(todo.done) ? "Mark Undone" : "Mark Done"}</button>
    );
  },
  handleDone: function(){
    TodoStore.toggleDone(this.props.todo.id);
  }

});

module.exports = DoneButton ;

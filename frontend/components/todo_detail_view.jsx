var React = require('react');
var TodoStore = require('../stores/todo_store.js');
var TodoDetailView = React.createClass({

  render: function() {
    return (
      <div>
        <div>{this.props.todo.body}</div>
        <div>{(this.props.todo.done) ? "Done" : "Not Done"}</div>
        <button onClick={this.handleDestroy}>Delete</button>
      </div>
    );
  },

  handleDestroy: function () {
    TodoStore.destroy(this.props.todo.id);
  },
});

module.exports = TodoDetailView;

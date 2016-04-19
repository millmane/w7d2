var React = require('react');
var TodoStore = require('../stores/todo_store.js');
var DoneButton = require('./done_button.jsx');
var TodoDetailView = require('./todo_detail_view.jsx');
var TodoListItem = React.createClass({

  getInitialState: function () {
    return {visible: false};
  },

  render: function () {
    var todo = this.props.todo;
    return (

      <div>
        <div onClick={this.toggleDetails}>{todo.title}</div>
        {(this.state.visible) ? <TodoDetailView todo={todo}/> : ""}
        <DoneButton todo={todo}/>
    </div>
    );
  },

  toggleDetails: function () {
    this.setState({visible: !this.state.visible});
  }




});

module.exports = TodoListItem;

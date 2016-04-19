var React = require('react');
var TodoStore = require('../stores/todo_store.js');
var TodoListItem = require('./todo_list_item.jsx');
var TodoListForm = require('./todo_form.jsx');

var TodoList = React.createClass({
  getInitialState: function(){
    return ({todos: TodoStore.all()});
  },
  componentDidMount: function(){
    TodoStore.addChangedHandler(this.todosChanged);
    TodoStore.fetch();
  },
  componentWillUnmount: function(){
    TodoStore.removeChangedHandler(this.todosChanged);
  },
  getTodos: function(){
    var lis = [];
    var todos = this.state.todos;
    for (var id in todos) {
      if (todos.hasOwnProperty(id)){
        lis.push(<TodoListItem key={id} todo={todos[id]}/>);
      }
    }
    return lis;
  },
  render: function(){
    var lis = this.getTodos();
    return (
      <div>
        {lis}
        <TodoListForm/>
      </div>
    );
  },
  todosChanged: function(){
    this.setState({todos: TodoStore.all()});
  }
});

module.exports = TodoList;

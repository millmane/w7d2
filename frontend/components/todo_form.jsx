var React = require('react');
var TodoStore = require('../stores/todo_store.js');

var TodoForm = React.createClass({
  getInitialState: function(){
    return({title: "", body: ""});
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title
          <input onChange={this.updateTitle} type="text" value={this.state.title}/>
        </label>
        <label>Body
          <input type="text" onChange={this.updateBody} value={this.state.body}/>
        </label>
        <input type="submit" value="whateveryouwant"/>
      </form>
    );
  },

  handleSubmit: function (event) {
    event.preventDefault();
    TodoStore.create(this.state);
    this.setState({title: "", body: ""});
  },

  updateTitle: function (event) {
    this.setState({title: event.currentTarget.value});
  },

  updateBody: function (event) {
    this.setState({body: event.currentTarget.value});
  }

});

module.exports = TodoForm;

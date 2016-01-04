App = React.createClass({
  getTasks() {
    return [
      {_id:1, text: "this is task1"},
      {_id:2, text: "this is task2"},
      {_id:3, text: "this is task3"},
    ];
  },

  renderTasks() {
    return this.getTasks().map((task) => {
        return <Task key={task._id} task={task} />;
    });
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
})

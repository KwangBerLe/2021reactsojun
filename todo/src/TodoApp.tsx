import React from "react";
import TodoItem from "./components/TodoItem";
/*import CSS from "./components/Todocss";*/

interface TodoAppProps {}
interface TodoAppState {
  todoItems: string[];
  newTodo: string;
}

class TodoApp extends React.Component<TodoAppProps, TodoAppState> {
  constructor(props: TodoAppProps) {
    super(props);
    
    this.state = {
      todoItems: [],
      newTodo: "",
    };
  }

  handleNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTodo: e.target.value,
    });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const items = this.state.todoItems.concat(this.state.newTodo)

    this.setState({
      todoItems: items,
      newTodo: "",
    })
  }

  handleDelete = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    this.setState({
      todoItems: [],
      newTodo: "",
    })
  }

  render() {
    return (
      <div id = "ctn">
        <h3 id = "title">오늘 당신이 해야할 것</h3>
        {
          this.state.todoItems.map((item, idx) => (
            <TodoItem name={item} key={idx}/>
          ))
        }
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">뭘 해야하나요?</label> <br />
          <input type="text" id="new-todo" value={this.state.newTodo} onChange={this.handleNewTodo} /> <br />
          <button>Add #{this.state.todoItems.length + 1}</button>
          <br />
          <button onClick={this.handleDelete}>모든 리스트 지우기</button>
        </form>
      </div>
    )
  }
}

export default TodoApp;
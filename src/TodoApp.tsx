import React from "react";
import TodoItem from "./components/TodoItem";
import "./components/Todocss.css";

interface TodoAppProps {}
interface TodoAppState {
  todoItems: string[];
  newTodo: string;
  date: Date;
}

class TodoApp extends React.Component<TodoAppProps, TodoAppState> {
  constructor(props: TodoAppProps) {
    super(props);
    
    this.state = {
      todoItems: [],
      newTodo: "",
      date: new Date(),
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


    if(this.state.newTodo.length !== 0){
      this.setState({
        todoItems: items,
        newTodo: "",
      })
    }
  }

  handleDeleteList = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    this.setState({
      todoItems: [],
      newTodo: "",
    })
  }

  listDelete = (idx: number) => {
    const copy = this.state.todoItems;
    copy.splice(idx, 1);

    this.setState({
      todoItems: copy,
      newTodo: "",
    })
  }

  render() {
    return (
      <div id = "ctn">
        <h2>{this.state.date.toLocaleDateString()}</h2>
        <h3 id = "title">오늘 당신이 해야할 것</h3>
        {
          this.state.todoItems.map((item, idx) => (
            <div>
              <button onClick={(e) => {
                this.listDelete(idx)}}>완료했다면 클릭!</button>
              <TodoItem name={item} key={idx}/>
            </div>
          ))
        }
        <form onSubmit={this.handleSubmit}>
          <hr />
          <label htmlFor="new-todo">할 일 추가</label> <br />
          <input type="text" id="new-todo" value={this.state.newTodo} onChange={this.handleNewTodo} /> <br />
          <button>추가하기 (현재까지 쌓인 일 {this.state.todoItems.length}개)</button>
          <br />
          <button onClick={this.handleDeleteList}>모든 리스트 지우기</button> <br/>
        </form>

        <h3 id="firstsolve">가장 먼저 해야할 일 : {this.state.todoItems[0]}</h3>
      </div>
    )
  }
}

export default TodoApp;
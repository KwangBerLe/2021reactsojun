import React from "react";

interface TodoItemProps {
  name: string;
}

function TodoItem(props: TodoItemProps) {
  return(
    
    <div id="halil">
      {props.name}
    </div>
  )
}

export default TodoItem;
import { useContext } from "react";
import { TodoItemsContext } from "../Store/todo-items-store";
import TodoItem from "./TodoItem";

const TodoITems = () => {
  const contetxObj = useContext(TodoItemsContext);
  const Items = contetxObj.todoItems;

  return (
    <div className="items-container">
      {Items.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
        />
      ))}
    </div>
  );
};

export default TodoITems;

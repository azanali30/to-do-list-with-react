import { useContext, useRef } from "react";
import { TodoItemsContext } from "../Store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const toDoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddNewButton = (event) => {
    event.preventDefault();
    const todoName = toDoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    toDoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };

  return (
    <div>
      <form className="row todod-row" onSubmit={handleAddNewButton}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter TODO Here"
            ref={toDoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success todo-button">ADD</button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

import { useContext } from "react";
import { TodoItemsContext } from "../Store/todo-items-store";

function TodoItem({ todoName, todoDate }) {
  const contetxObj = useContext(TodoItemsContext);
  const deleteItem = contetxObj.deleteItem;

  return (
    <div className="">
      <div className="row todod-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger todo-button"
            onClick={() => deleteItem(todoName)}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;

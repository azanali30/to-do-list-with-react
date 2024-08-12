import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemReducer = (currTodoItems, action) => {
  switch (action.type) {
    case "NEW_ITEM":
      return [
        ...currTodoItems,
        { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
      ];
    case "DELETE_ITEM":
      return currTodoItems.filter(
        (item) => item.name !== action.payload.itemName
      );
    default:
      return currTodoItems;
  }
};

const TodoItemContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItem] = useReducer(todoItemReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    dispatchTodoItem({
      type: "NEW_ITEM",
      payload: { itemName, itemDueDate },
    });
  };

  const deleteItem = (todoItemName) => {
    dispatchTodoItem({
      type: "DELETE_ITEM",
      payload: { itemName: todoItemName },
    });
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemContextProvider;

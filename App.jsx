import AppName from "./components/appName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/todoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import TodoItemContextProvider from "./Store/todo-items-store";

function App() {
  return (
    <TodoItemContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemContextProvider>
  );
}

export default App;

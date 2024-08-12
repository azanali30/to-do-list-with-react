import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../Store/todo-items-store";

const WelcomeMessage = () => {
  const contetxObj = useContext(TodoItemsContext);
  const Items = contetxObj.todoItems;

  return Items.length === 0 && <p className={styles.welcome}>Enjoy Your Day</p>;
};

export default WelcomeMessage;

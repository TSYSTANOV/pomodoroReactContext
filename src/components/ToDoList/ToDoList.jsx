import { useToDoList } from "../../context/ToDoListContextApp";
import { ToDoItem } from "./ToDoItem";

function ToDoList() {
  const { ToDoList, addToDo } = useToDoList();
  const promptToDo = () => {
    const task = prompt("Enter new ToDo");
    if (task) {
      addToDo({
        title: task,
        pomodoroCount: 0,
      });
    }
  };

  return (
    <div className="todo">
      <h2 className="todo__title">Задачи</h2>
      <ol className="todo__list">
        {ToDoList.map((item) => {
          return <ToDoItem key={item.title} {...item} />;
        })}
        <li className="todo__item">
          <button className="todo__add" onClick={promptToDo}>
            Добавить новую задачу
          </button>
        </li>
      </ol>
    </div>
  );
}
export { ToDoList };

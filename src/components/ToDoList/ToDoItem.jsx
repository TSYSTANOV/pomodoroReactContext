import { useToDoList } from "../../context/ToDoListContextApp";

export function ToDoItem(props) {
  const { setActiveToDo, deleteToDo, changeToDo } = useToDoList();
  return (
    <div className="todo__item-wrapper">
      <button
        className="todo__btn"
        onClick={() => {
          setActiveToDo(props);
        }}
      >
        {props.title}
      </button>
      <button
        className="todo__edit"
        onClick={() => {
          changeToDo(props.title);
        }}
      ></button>
      <button
        className="todo__del"
        onClick={() => {
          deleteToDo(props.title);
        }}
      ></button>
    </div>
  );
}

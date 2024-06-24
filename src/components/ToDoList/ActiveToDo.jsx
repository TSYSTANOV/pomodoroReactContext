import { useToDoList } from "../../context/ToDoListContextApp";

export function ActiveToDoCount() {
  const { activeToDo } = useToDoList();
  if (activeToDo) {
    return (
      <div className="count">
        <p className="count_num">{activeToDo.pomodoroCount}</p>
        <p className="count_text">Кол-во помодорок</p>
      </div>
    );
  }
}

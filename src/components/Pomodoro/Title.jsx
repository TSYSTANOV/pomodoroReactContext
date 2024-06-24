import { useToDoList } from "../../context/ToDoListContextApp";

function Title() {
  const { activeToDo } = useToDoList();
  return (
    <>
      <p className="title">{activeToDo?.title || "Написать Pomodoro"}</p>
    </>
  );
}
export { Title };

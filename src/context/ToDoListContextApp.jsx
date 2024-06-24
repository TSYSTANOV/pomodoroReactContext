import { createContext, useContext, useState } from "react";

const ToDoListContext = createContext({});

export function ToDoListContextApp({ children }) {
  const [ToDoList, setTodoList] = useState([]);
  const [activeToDo, setActiveToDo] = useState(null);
  const addToDo = (item) => {
    setTodoList((prev) => {
      return [...prev, item];
    });
  };
  const deleteToDo = (title) => {
    setTodoList((prev) => {
      return prev.filter((el) => el.title !== title);
    });
    if (activeToDo && activeToDo.title === title) {
      setActiveToDo(null);
    }
  };
  const changeToDo = (title) => {
    const updateToDo = prompt(`Change ToDo ${title}:`);
    if (updateToDo) {
      setTodoList((prev) => {
        return prev.map((el) => {
          if (el.title === title) {
            el.title = updateToDo;
            return el;
          }
          return el;
        });
      });
      if (activeToDo && activeToDo.title === title) {
        setActiveToDo({
          title: updateToDo,
          pomodoroCount: activeToDo.pomodoroCount,
        });
      }
    }
  };
  return (
    <ToDoListContext.Provider
      value={{
        ToDoList,
        addToDo,
        activeToDo,
        setActiveToDo,
        setTodoList,
        deleteToDo,
        changeToDo,
      }}
    >
      {children}
    </ToDoListContext.Provider>
  );
}
export const useToDoList = () => useContext(ToDoListContext);

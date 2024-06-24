import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useToDoList } from "./ToDoListContextApp";

const PomodoroContext = createContext({});

export function PomodoroContextApp({ children }) {
  const { activeToDo, setActiveToDo, setTodoList } = useToDoList();
  const idTimer = useRef();
  const [pomodoro, setPomodoro] = useState({
    WORK_time: 1,
    BREAK_time: 2,
    RELAX_time: 3,
    ACTIVE_STATE: "WORK_time",
    timeleft: 1 * 60,
    isPlay: false,
    count: 0,
  });

  const startTimer = () => {
    if (!activeToDo) return;
    idTimer.current = setInterval(() => {
      setPomodoro((prev) => {
        if (prev.timeleft !== 0) {
          return { ...prev, timeleft: (prev.timeleft -= 30), isPlay: true };
        }
        if (prev.ACTIVE_STATE !== "BREAK_time" && prev.count === 3) {
          return {
            ...prev,
            timeleft: prev["RELAX_time"] * 60,
            isPlay: true,
            ACTIVE_STATE: "RELAX_time",
            count: 0,
          };
        }
        if (prev.ACTIVE_STATE === "WORK_time" && prev.count < 3) {
          setTodoList((prev) => {
            const newList = prev.map((item) => {
              if (item.title === activeToDo.title) {
                item.pomodoroCount++;

                return item;
              }
              return item;
            });
            return newList;
          });
          setActiveToDo((prev) => {
            return { ...prev, pomodoroCount: prev.pomodoroCount + 1 };
          });
          return {
            ...prev,
            timeleft: prev["BREAK_time"] * 60,
            isPlay: true,
            ACTIVE_STATE: "BREAK_time",
            count: (prev.count += 1),
          };
        }
        if (prev.ACTIVE_STATE === "BREAK_time") {
          return {
            ...prev,
            timeleft: prev["WORK_time"] * 60,
            isPlay: true,
            ACTIVE_STATE: "WORK_time",
          };
        }
        if (prev.ACTIVE_STATE === "RELAX_time") {
          return {
            ...prev,
            timeleft: prev["WORK_time"] * 60,
            isPlay: true,
            ACTIVE_STATE: "WORK_time",
          };
        }
      });
    }, 1000);
  };
  const pauseTimer = () => {
    clearInterval(idTimer.current);
    setPomodoro((prev) => {
      return { ...prev, isPlay: false };
    });
  };
  const stopTimer = () => {
    clearInterval(idTimer.current);
    setPomodoro((prev) => {
      return {
        ...prev,
        isPlay: false,
        timeleft: prev[prev["ACTIVE_STATE"]] * 60,
        count: 0,
      };
    });
  };
  const changeActiveState = (activeState) => {
    clearInterval(idTimer.current);
    setPomodoro((prev) => {
      return {
        ...prev,
        ACTIVE_STATE: activeState,
        isPlay: false,
        timeleft: prev[activeState] * 60,
        count: 0,
      };
    });
  };
  useEffect(() => {
    stopTimer();
  }, [activeToDo?.title]);
  return (
    <PomodoroContext.Provider
      value={{ pomodoro, startTimer, pauseTimer, stopTimer, changeActiveState }}
    >
      {children}
    </PomodoroContext.Provider>
  );
}
export const usePomodoro = () => useContext(PomodoroContext);

import { usePomodoro } from "../../context/PomodoroContextApp";

const buttons = [
  { text: "Помодоро", dataset: "WORK_time" },
  { text: "Перерыв", dataset: "BREAK_time" },
  { text: "Отдых", dataset: "RELAX_time" },
];

function Navigation() {
  const { pomodoro, changeActiveState } = usePomodoro();
  function changeState(e) {
    if (e.target.tagName !== "BUTTON") return;
    changeActiveState(e.target.dataset.use);
  }
  return (
    <div className="navigation" onClick={changeState}>
      {buttons.map((button) => {
        return (
          <button
            key={button.dataset}
            className={
              button.dataset === pomodoro.ACTIVE_STATE
                ? "navigation__btn navigation__btn_active"
                : "navigation__btn"
            }
            data-use={button.dataset}
          >
            {button.text}
          </button>
        );
      })}
    </div>
  );
}

export { Navigation };

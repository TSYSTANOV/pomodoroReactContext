import { usePomodoro } from "../../context/PomodoroContextApp";

function Controls() {
  const { pomodoro, startTimer, pauseTimer, stopTimer } = usePomodoro();

  return (
    <div className="control">
      <button
        className="control__btn control__btn_start"
        onClick={pomodoro.isPlay ? pauseTimer : startTimer}
      >
        {pomodoro.isPlay ? "Пауза" : "Старт"}
      </button>
      <button className="control__btn control__btn_stop" onClick={stopTimer}>
        Стоп
      </button>
    </div>
  );
}
export { Controls };
